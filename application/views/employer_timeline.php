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
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/pe-icon-7-stroke.css" rel="stylesheet" />
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/helper.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/bootstrap.css">
    <!-- Bootstrap Material Design -->
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css">
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css">
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/ripples.min.css">
    <link rel="stylesheet" type="text/css" href="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.min.css">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template 
    <link href="jumbotron.css" rel="stylesheet">-->

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="<?php print base_url();?>assets/node_modules/bootstrap/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--<link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/font-awesome/css/font-awesome.min.css">-->
    <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/custom.css">
    <style>
        .mdl-data-table{
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <!-- Title -->
              <span class="mdl-layout-title">
            <div class="logo-home" ></div></span>
              <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
        </div>
      </div>
              <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="">Notifications <i class="material-icons">notifications</i></a>
                <a class="mdl-navigation__link" href="">Messages <i class="material-icons">message</i></a>
                <!--<a class="mdl-navigation__link" href=""><i class="material-icons">thumb_up</i> 
                </a>-->
                <a class="mdl-navigation__link" href="<?php echo site_url();?>/home/logout">Logout <i class="material-icons">power_settings_new</i>
                </a>
              </nav>
            </div>
        </header>
      <div class="mdl-layout__drawer md-48 mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 ">
        <header class="demo-drawer-header">
          <img src="<?php print base_url();?>assets/node_modules/bootstrap/dist/images/anony.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              <li class="mdl-menu__item">hello@example.com</li>
              <li class="mdl-menu__item">info@example.com</li>
              <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
            </ul>
          </div>   
        </header>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="<?php echo site_url();?>"><i class="material-icons">home</i> Home</a>
          <a class="mdl-navigation__link" href="<?php echo site_url();?>/timeline/profile/"><i class="material-icons">people</i> My Profile</a>
          <a class="mdl-navigation__link" href="#"><i class="material-icons">account_balance_wallet</i> Wallet</a>
          <a class="mdl-navigation__link" href="#"><i class="material-icons">settings</i> Settings</a>
          <a class="mdl-navigation__link" href="#"><i class="material-icons">notifications</i> Notifications</a>
          <a class="mdl-navigation__link" href="<?php echo site_url();?>/home/logout"><i class="material-icons">power_settings_new</i> Logout</a>
        </nav>
      </div>
      </div>
        <!--page content starts here-->
        <div id="page-content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-10 col-xs-offset-1" style="margin-top: 40px;">
                <br>
                  <div id = "component"></div>
              </div>
            </div>
          </div>
        </div><!--Page-content-wrapper ends here-->
      </div>
    </div><!--#wrapper ends here-->
    <script src="<?php print base_url();?>assets/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/ripples.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/material.js"></script>
    <!-- <script src="<?php print base_url();?>assets/node_modules/momentjs/moment-with-locales.js"></script> -->
    <!-- <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script> -->
    <script src="<?php print base_url(); ?>assets/node_modules/react/dist/react.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?php print base_url(); ?>assets/node_modules/react-dom/dist/react-dom.js" type="text/javascript" charset="utf-8" ></script>
    <script src="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.min.js" type="text/javascript" charset="utf-8" async defer></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script> -->
    <script src="<?php print base_url(); ?>assets/js/babel-core.js" type="text/javascript"></script>
<!--     <script src="<?php print base_url(); ?>assets/js/job_search.js" type="text/babel"></script> -->
    <script src="<?php print base_url(); ?>assets/profile-view/dist/bundle.js"></script>
        <!-- <script type="text/javascript">
        $(document).ready(function(){

        $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
            $.material.init();
            $.material.radio();
            $.material.checkbox();
    //for datepicker
    // $('#endDate').bootstrapMaterialDatePicker({ weekStart : 0 });
    // $('#startDate').bootstrapMaterialDatePicker({ weekStart : 0 }).on('change', function(e, date)
    // {
    // $('#endDate').bootstrapMaterialDatePicker('setMinDate', date);


    // });

});
    </script> -->
</body>
</html>