<?php

	/**
	 * @todo move expiration functionality to action handler
	 *
	 * @param string $newStatus
	 * @param string $oldStatus
	 * @param \WP_Post $post
	 */
	public function transitionStatus( $newStatus, $oldStatus, $post ){

		if ( $post->post_type !== $this->postType ) {
			return;
		}

		if ( $newStatus === $oldStatus ) {
			return;
		}

		// Prevent logging status change while importing
		if ( apply_filters( 'mphb_prevent_handle_booking_status_transition', false ) ) {
			return;
		}

		$booking = MPHB()->getBookingRepository()->findById( $post->ID, true );

		if ( $oldStatus == 'new' ) {
			$booking->generateKey();
		}

		$expirationStatuses = array(
			self::STATUS_PENDING_USER,
			self::STATUS_PENDING_PAYMENT
		);

		if ( $newStatus === self::STATUS_PENDING_USER ) {

			$booking->updateExpiration( 'user', current_time( 'timestamp', true ) + MPHB()->settings()->main()->getUserApprovalTime() * MINUTE_IN_SECONDS );

			MPHB()->cronManager()->getCron( 'abandon_booking_pending_user' )->schedule();
		}

		if ( $oldStatus === self::STATUS_PENDING_USER ) {
			$booking->deleteExpiration( 'user' );
		}

		if ( $newStatus === self::STATUS_PENDING_PAYMENT ) {

            /**
             * 	Reikia paskaičiuoti $timeToExpire, kurį naudosime 78-toje eilutėje.
			 * 
			 * Tarkime užklausą gavome 16:00val., 
			 * tuomet paskaičiuojame, kiek sekundžių liko nuo 16:00 iki 19:00val., gauname 10800, 
			 * 
			 * 	$timeToExpire = 10800;
			 * 
			 * echo  date( 'H:i:s', current_time( 'timestamp', false ) );
			 * 	result = 12:58:45
			 * 
			 * echo  date( 'H:i:s', current_time( 'timestamp', true ) );
			 * 	result = 10:58:45
			 * 
			* echo current_time( 'timestamp', true );
			* result = 1647169125
			*
			* https://wptips.dev/datetime-object/
			 * https://developer.wordpress.org/reference/functions/current_time/
			 * https://make.wordpress.org/core/2019/09/23/date-time-improvements-wp-5-3/
			 * 
             */

            $myTime = '19:00:00'; // mano nurodyta valanda
            $systemTimeStamp = $booking->current_time( 'timestamp', true ); // sistemos uzfiksuotas laikas (netestavau ar gauname laiko žymę su šita eilute ar žemiau esančia, bet šita logiškiau atrodo)
            // $systemTimeStamp = current_time( 'time' ); // sistemos uzfiksuotas laikas

            $timeToExpire; // sekundžių kintamasis

			
			if ($systemTimeStamp < $myTime ) { // skaičiuojame sekundes, jeigu užklausą gavome iki 19:00val.
                $timeToExpire = $myTime - $systemTimeStamp;
				
			}
            else { // skaičiuojame sekundes, jeigu užklausą gavome po 19val.
                $timeToExpire =  ('24:00:00' - $systemTimeStamp) + $myTime;
            }

			// $booking->updateExpiration( 'payment', current_time( 'timestamp', true ) + MPHB()->settings()->payment()->getPendingTime() * MINUTE_IN_SECONDS ); Default Code
			$booking->updateExpiration( 'payment', current_time( 'timestamp', true ) + $timeToExpire ); // EDITED Code !!!!!!!!!!!!!!!!!!!!!

			MPHB()->cronManager()->getCron( 'abandon_booking_pending_payment' )->schedule();
		}

		if ( $oldStatus === self::STATUS_PENDING_PAYMENT ) {
			$booking->deleteExpiration( 'payment' );
		}

		$booking->addLog( sprintf( __( 'Status changed from %s to %s.', 'motopress-hotel-booking' ), mphb_get_status_label( $oldStatus ), mphb_get_status_label( $newStatus ) ) );

		do_action( 'mphb_booking_status_changed', $booking, $oldStatus );

		if ( $newStatus === self::STATUS_CONFIRMED ) {
			do_action( 'mphb_booking_confirmed', $booking, $oldStatus );
		}

		if ( $newStatus === self::STATUS_CANCELLED ) {
			do_action( 'mphb_booking_cancelled', $booking, $oldStatus );
		}
	}

?>