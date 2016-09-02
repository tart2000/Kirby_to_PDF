<?php snippet('header') ?>

<div id="cover" class="page">
	<?php  $cover = $page->coverimage()->toFile(); ?>
	<?php if ($page->coverimage() != '') : ?>
		<div class="coverimage">
			<img src="<?php echo $cover->url() ?>"/>
		</div>
	<?php endif ?>

	<?php $logo = $page->logoimage()->toFile(); ?>
	<?php if ($page->logoimage() != '') : ?>
		<div class="logo">
			<img src="<?php echo $logo->url() ?>"/>
		</div>
	<?php endif ?>

	<div class="title">
		<h1><?php echo $site->title() ?></h1>
		<h3><?php echo $site->description() ?></h3>
		<p><?php 
			date_default_timezone_set('UTC'); 
			setlocale(LC_ALL, 'fr_FR');
			echo strftime('%A %e %B %Y'); 
		?></p>
	</div>
</div>

<div class="page centered">
	<div class="content">
		<div class="text">
			<?php echo page('thanks')->text()->kirbytext() ?>
		</div>
	</div>
</div>

<div id="toc" class="page">
	<ul class="toc">
		<?php foreach($site->pages()->visible() as $p) : ?>
			<li><a href="#<?php echo $p->uid() ?>"><?php echo $p->title() ?></a></li>
		<?php endforeach ?>
	</ul>
</div>

<div id="thecontent">
<?php foreach ($site->pages()->visible() as $p) : ?>
	<div class="content">
		<?php if($p->template() == 'default') : ?>
			<h1 id="<?php echo $p->uid() ?>"><?php echo $p->title() ?></h1>
			<?php echo $p->text()->kirbytext() ?>
		<?php endif ?>

		<!-- projects -->
		<?php if($p->template() == 'projects') : ?>
			<h1 id="<?php echo $p->uid() ?>"><?php echo $p->title() ?></h1>
			<?php echo $p->text()->kirbytext() ?>

			<!-- Sommaire des projets -->
			<h2 class="jump">Projets identifiés</h2>
			<ol>
				<?php foreach ($p->children()->sortBy('title', 'asc') as $pro) : ?>
					<li><a href="#<?php echo $pro->uid() ?>"><?php echo $pro->title() ?></a> - <?php echo $pro->ou() ?></li>
				<?php endforeach ?>
			</ol>

			<!-- une page par projet -->
			<?php foreach ($p->children()->sortBy('title', 'asc') as $pro) : ?>
				<div class="proj">
					<h2 id="<?php echo $pro->uid() ?>"><?php echo $pro->title() ?></h2>
					<?php if ($pro->logo()!='') : ?>
						<img class="project-logo" src="<?php echo $pro->logo() ?>">
					<?php endif ?>
					<em>Typologie : <?php echo $pro->typologie() ?></em></br>
					<em>Emplacement : <?php echo $pro->ou() ?></em></br>
					<?php if ($pro->theurl()!=''): ?>
						<em>Site internet : <a href="<?php echo $pro->theurl() ?>" target="_blank"><?php echo $pro->theurl() ?></a></em>
					<?php endif ?>
					<blockquote><?php echo $pro->mission()->kirbytext() ?></blockquote>
					<h3>Description</h3>
					<?php if ($pro->itw()=='TRUE') : ?>
						<img class="bdg" src="<?php echo $site->url() ?>/assets/images/badge.png"> 
					<?php endif ?>
					<?php if($pro->pic()!='') : ?>
						<img class="project-pic" src="<?php echo $pro->pic() ?>">
					<?php endif ?>
					<?php echo $pro->text()->kirbytext() ?>
					<!-- 
					<h3>Moyens</h3>
					<?php echo $pro->moyens()->kirbytext() ?>
					--> 
					<div class="good">
						<h3>À retenir</h3>
						<?php echo $pro->facteurs()->kirbytext() ?>
					</div>
				</div>
			<?php endforeach ?>
		<?php endif ?>
		<!-- fin page projets -->


	</div>
<?php endforeach ?>
</div>

<div class="page">
	<div class="content">
		<div class="centered">
			<?php echo page('contact')->text()->kirbytext() ?>
		</div>
		<div class="logo_back">
			<img src="<?php echo $logo->url() ?>"/>
		</div>
	</div>
</div>


<?php snippet('footer') ?>