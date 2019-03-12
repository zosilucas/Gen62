<?php
require_once __DIR__ . "/proyects.php";

$method = $_SERVER['REQUEST_METHOD'];
$request = array();
$contents = array();

parse_str(file_get_contents('php://input'), $contents);
if (!empty($contents)) {
    $request = array_merge($contents, $_GET);
}
if (isset($_GET)) {
    $request = array_merge($request, $_GET);
}
if (isset($_POST)) {
    $request = array_merge($request, $_POST);
}

$name = $request['name'];
global $proyects;
if (!isset($name) || empty($name) || !isset($proyects[$name])) {
    header("Location: /");
    die();
}
view_proyect($proyects[$name]);
die();

function view_proyect($proyect) {
    ?>
    <!DOCTYPE HTML>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="">
            <meta name="author" content="">
            <!-- Favicons -->
            <link rel="shortcut icon" href="img/favicon.png">
            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
            <title>GEN62</title>
            <!-- Styles -->
            <link href="https://fonts.googleapis.com/css?family=Do+Hyeon" rel="stylesheet">
            <link href="css/style.css" rel="stylesheet" media="screen">
            <link href="css/slideshow.css" rel="stylesheet" media="screen">
            <style>
                .no-js #loader { display: none;  }
                .js #loader { display: block; position: absolute; left: 100px; top: 0; }
                .se-pre-con {
                    position: fixed;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    z-index: 10000000;
                    background: url(../img/loader2.gif) center no-repeat #fff;
                    background-size: 100px 100px;
                }
                .img-detail { width: 100%;}
                .img-container { margin-bottom: 10px; padding-right: 50px; padding-left: 50px}
            </style>
        </head>
        <body class="menu-is-closed">
            <div class="se-pre-con"></div>
            <div class="">
                <div class="wrapper boxed">
                    <!-- Content CLick Capture-->
                    <div class="click-capture"></div>
                    <!-- Sidebar Menu-->
                    <div class="menu"> 
                        <span class="close-menu icon-cross2 right-boxed"></span>
                        <ul class="menu-list right-boxed">
                            <li>
                                <a  href="/">Inicio</a>
                            </li>
                            <li>
                                <a href="proyectos.html">Proyectos</a>
                            </li>
                            <li>
                                <a href="contacto.html">Contacto</a>
                            </li>
                            <li>
                                <a href="nosotros.html">Nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Navbar -->
                    <header class="navbar boxed js-navbar" style="z-index: 1000000;">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="brand" href="/">
                            <img alt="" src="img/favicon.png">
                        </a>
                        <div class="social-list hidden-xs">
                            <a href="https://www.instagram.com/gen62arquitectos/" class="icon ion-social-instagram" target="_blank"></a>
                            <a href="https://www.facebook.com/CerettiDePieroCeretti/" class="icon ion-social-facebook" target="_blank"></a>
                        </div>
                        <div class="navbar-spacer hidden-sm hidden-xs"></div>
                    </header>
                    <div class="content" style="margin-top: 10px !important; min-height: 400px;">
                        <section class="proyect">
                            <div class="container" style="margin-top: 10px !important;">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="section-info">
                                            <div class="title-hr"></div>
                                            <!--<div class="info-title">Proyecto</div>-->
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="text-display-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div id="slideshow" class="fullscreen">
                            <?php
                            $j = 0;
                            foreach ($proyect['img'] as $i) {
                                $j++;
                                $isActive = $j === 1 ? "active" : "";
                                $img = '<div id="img-' . $j . '" data-img-id="' . $j . '" '
                                        . 'class="img-wrapper ' . $isActive . '"';
                                if ($isActive) {
                                    $img .= 'style="background-image: url(\'' . $i['src'] . '\')"';
                                }
                                $img .= 'data-src = "' . $i['src'] . '"></div>';
                                echo $img;
                            }
                            ?>
                            <div id="prev-btn" class="prev-slide" style="position: absolute; top: 50%; left: 10px; z-index: 100000; text-align: center;">
                                <i class="fa fa-chevron-left fa-3x" style="color: black;"></i> 
                            </div>
                            <div id="next-btn" class="next-slide" style="position: absolute; top: 50%; right: 10px; z-index: 100000; text-align: center;"> 
                                <i class="fa fa-chevron-right fa-3x" style="color: black;"></i> 
                            </div>
                            <div class="thumbs-container bottom" style="display: none;">
                                <ul class="thumbs">
                                    <?php
                                    $j = 0;
                                    foreach ($proyect['img'] as $i) {
                                        $j++;
                                        $isActive = $j === 1 ? "active" : "";
                                        echo '<li data-thumb-id= "' . $j . '" class = "thumb ' . $isActive . '"'
                                        . '"></li>';
                                    }
                                    ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src = "js/jquery.min.js"></script>
            <script src = "js/jquery.mobile.min.js"></script>
            <script src="js/animsition.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/wow.min.js"></script>
            <script src="js/jquery.stellar.min.js"></script>
            <script src="js/scripts.js"></script> 
            <script src="js/gallery.js"></script> 
            <script>
                $(document).ready(function () {
                    setTimeout(function () {
                        $(".se-pre-con").fadeOut("slow");
                    }, 2000);
                });
            </script>
        </body>
    </html>
    <?php
}
?>