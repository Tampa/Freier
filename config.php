<?php

$pagetitle = "Freier Portfolio Bootstrap Theme";

$dir = 'tiles/'; //Where are the tiles located?
$dir_i = 'interims/'; //Where are the interims located?

//These are some general theme-ing options you can select from, they are read by the tiles as well as the theme itself

//This defines additional theme-ing for the images on the tiles, note the <?php echo $imgstyle.. override in the tiles html
$imgstyle= "img-rounded";

//Here you can define the two themes of the themeswitch, by default the bright_theme is the first to display upon page load, you can name and color them however you wish though
//The color palette is as follows: Page-Background, interim-background, font-color, interim-border
$bright_theme = array('Bright Theme','#fff','#f5f5f5','#333','#e3e3e3');
$dark_theme = array('Dark Theme','#333','#111','#d2d2d2','#888');

// This array has the row, column width and the tiles to use all in the multi array, just add and match as you like
$tilerows = array(0 => array('col-md-4','example1','XX','XX'),
					1 => array('col-md-4','XX','example2','XX'),
					2 => array('col-md-4','XX','XX','example3'));

// this matches the row defined above and places the interim before that, if the row is not found it is put at the bottom					
$interimsort = array('0' => "head",
				'3' => "interims_1");

?>