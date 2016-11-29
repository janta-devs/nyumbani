<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="<?php print base_url(); ?>photo_assets/justia.ico">
    <title>Welcome to Janta</title>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><!-- 
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/pe-icon-7-stroke.css" rel="stylesheet" />
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/helper.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/bootstrap.css">
    <!-- Bootstrap Material Design --><!-- 
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css">
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css">
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/ripples.min.css"> --> 
    <link rel="stylesheet" type="text/css" href="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.min.css">

    <script src="<?php print base_url();?>assets/node_modules/bootstrap/assets/js/ie-emulation-modes-warning.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/custom.css">
    <script src="<?php print base_url();?>assets/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.js" type="text/javascript" charset="utf-8" async defer></script>
    <style>
        .mdl-data-table{
            width: 100%;
        }
        tr{
          cursor: pointer;
        }
    </style>
</head>
<body>
  <div class="mdl-layout__container">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="nav-bar">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                  <span class="mdl-layout-title">
                    <div class="logo-home" >
                    </div>
                  </span>
                    <div class="mdl-layout-spacer">
                    </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                  <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
                      <i class="material-icons">search</i>
                    </label>
                    <div class="mdl-textfield__expandable-holder">
                      <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                    </div>
                </div>
                <nav class="mdl-navigation">
                  <a class="mdl-navigation__link" href="">
                    Notifications <i class="material-icons">notifications</i>
                  </a>
                  <a class="mdl-navigation__link" href="">
                    Messages <i class="material-icons">message</i>
                  </a>
                    <button id="demo-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
                      <img class="demo-avatar" src="/nyumbani/photo_assets/anony.jpg" /> 
                    </button>
                        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" 
                        for="demo-menu-lower-right">
                            <li class="mdl-menu__item">
                                <a class="" href="/nyumbani/index.php/">
                                    <i class="material-icons">home</i> Home
                                </a>
                            </li>
                            <li class="mdl-menu__item">
                                <a class="" href="/nyumbani/index.php/timeline/profile/">
                                    <i class="material-icons">people</i> My Profile
                                </a>
                            </li>
                            <li class="mdl-menu__item">
                                <a class="" href="#">
                                    <i class="material-icons">account_balance_wallet</i> Wallet
                                </a>
                            </li>
                            <li class="mdl-menu__item">
                                <a class="" href="#">
                                    <i class="material-icons">settings</i> Settings
                                </a>
                            </li>
                            <li class="mdl-menu__item">
                                <a class="" href="/nyumbani/index.php/home/logout" id = "logout">
                                    <i class="material-icons">power_settings_new</i> Logout 
                                </a>
                            </li>
                        </ul>
                </nav>
                </div>
            </header>
    </div>
        <!--page content starts here-->
    <main class="mdl-layout__container">
      <div class="mdl-grid" >
        <div id="component" style="margin-top: 60px; width: 100%;"></div>
      </div>
    </main>
  </div><!--container ends here--><!-- 
    <script src="<?php print base_url();?>assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/ripples.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/material.js"></script> -->
    <!-- <script src="<?php print base_url();?>assets/node_modules/momentjs/moment-with-locales.js"></script> -->
    <!-- <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script> -->
    <script src="<?php print base_url(); ?>assets/node_modules/react/dist/react.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?php print base_url(); ?>assets/node_modules/react-dom/dist/react-dom.js" type="text/javascript" charset="utf-8" ></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script> -->
    <script src="<?php print base_url(); ?>assets/js/babel-core.js" type="text/javascript"></script>
<!--     <script src="<?php print base_url(); ?>assets/js/job_search.js" type="text/babel"></script> --><!-- 
    <script src="<?php print base_url(); ?>assets/navbar/dist/navbar-bundle.js"></script>  -->
    <script src="<?php print base_url(); ?>assets/search-view/dist/bundle.js"></script>
    <script>
        var logout = document.getElementById('logout');
        logout.addEventListener('click', function( event ){
            localStorage.removeItem('employeesInformation');
            localStorage.removeItem('categories');
        })
    </script>
</body>
</html>