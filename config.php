<?php

$pagetitle = "Freier Portfolio Bootstrap Theme";

$dir = 'tiles/'; //Where are the tiles located?
$dir_i = 'interims/'; //Where are the interims located?

// This array has the row, column width and the tiles to use all in the multi array, just add and match as you like
$tilerows = array(0 => array('col-md-4','example1','XX','XX'),
					1 => array('col-md-4','XX','example2','XX'),
					2 => array('col-md-4','XX','XX','example3'));

// this matches the row defined above and places the interim before that, if the row is not found it is put at the bottom					
$interimsort = array('0' => "head",
				'2' => "interim_1");

?>