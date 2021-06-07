<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
	<title>Norquest College</title>
	<meta name="description" content="page meta-description">
	<meta name="keywords" content="page meta-keyword">

	<link rel="icon" type="image/png" href="favicon.ico" />

	<!-- Mobile Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">

  <!-- Social Meta -->
  <meta property="og:title" content="Norquest College">
  <meta property="og:description" content="page meta-description">
  <meta property="og:image" content="link this to article featured image">
  <meta property="og:url" content="URL of this page">
  <meta property="og:site_name" content="Norquest College">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image:alt" content="Alt text for image">

	<!-- Stylesheets -->
  <link rel="stylesheet" type="text/css" href="dist/style.css">
  <link rel="stylesheet" type="text/css" href="dist/print.css">
  <?php // echo $additionalStylesheet; ?>

	<!--[if IE]>
  	<link rel="stylesheet" type="text/css" href="/css/ie.css" />
  <![endif]-->
</head>
<body>
    <?php include('dist/sprites.svg'); ?>

  <header class="header">
    <div class="container">
      <div class="site-logo">
        <a href="/">
          <img src="./images/logo-horizontal.svg" alt="logo">
        </a>
      </div>

      <?php include('source/_top-nav.php'); ?>

      <?php include('source/_navigation.php'); ?>

      <div class="header-search">
        <form action="search">
          <input type="text" placeholder="Type your keyword">
        </form>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <h1>h1 - header</h1>
      <h2>h2 - header</h2>
      <h3>h3 - header</h3>
      <h4>h4 - header</h4>
      <h5>h5 - header</h5>

      <p> Some text </p>

      <p>Above<hr>Below</p>

      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>

      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>

    </div>
  </main>

  <?php include('source/_footer.php'); ?>

  <script type="text/javascript" src="dist/main.js"></script>

</body>
</html>