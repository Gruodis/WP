<?php
// function that runs when shortcode is called
function wpb_demo_shortcode() { 
 
// Things that you want to do. 
$message = MPHB()->settings()->payment()->getPendingTime() . "val."; 
 
// Output needs to be return
return $message;
} 
// register shortcode
add_shortcode('time-to-expire', 'wpb_demo_shortcode');