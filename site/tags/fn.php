<?php 
	kirbytext::$tags['fn'] = array(
		'html' => function($tag) {
			return '<span class="fn">'.$tag->attr('fn').'</span>';
		}
	);
?>