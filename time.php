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

			$booking->updateExpiration( 'user', current_time( 'timestamp', true ) + 600 );

			MPHB()->cronManager()->getCron( 'abandon_booking_pending_user' )->schedule();
		}

		if ( $oldStatus === self::STATUS_PENDING_USER ) {
			$booking->deleteExpiration( 'user' );
		}

		if ( $newStatus === self::STATUS_PENDING_PAYMENT ) {

            $myExpirationStatus;
            
			
			if ($booking->current_time( 'time' ) < '19:00:00' ) {
				
			}

			$booking->updateExpiration( 'payment', current_time( 'timestamp', true ) + 420 );

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