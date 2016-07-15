<?php 
	kirbytext::$tags['rappel'] = array(
		'html' => function($tag) {
			$rap = $tag->attr('rappel');
			$raps = explode('- ',$rap);
			$chteml = implode('</li><li>', $raps);
			return '<div class="good rap"><h3>À retenir</h3><ul><li>'.$chteml.'</li></ul></div>';
		}
	);
?>