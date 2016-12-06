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
    <!--The Nav Bar component rendered in React js-->
        <div id = "NavCompoent"></div
    <!--page content starts here-->
    <main class="mdl-layout__container">
      <div class="mdl-grid" >
        <div id="component" style="margin-top: 60px; width: 100%;"></div>
      </div>
    </main>
  </div>
    <script src="<?php print base_url(); ?>assets/node_modules/react/dist/react.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?php print base_url(); ?>assets/node_modules/react-dom/dist/react-dom.js" type="text/javascript" charset="utf-8" ></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script> -->
    <script src="<?php print base_url(); ?>assets/js/babel-core.js" type="text/javascript"></script>
<!--     <script src="<?php print base_url(); ?>assets/js/job_search.js" type="text/babel"></script> --><!-- 
    <script src="<?php print base_url(); ?>assets/navbar/dist/navbar-bundle.js"></script>  -->
    <script src="<?php print base_url(); ?>assets/search-view/dist/bundle.js"></script>
    <script src="<?php print base_url(); ?>assets/Navbar/dist/navbundle.js"></script>
        <script>
        var logout = document.getElementById('logout');
        logout.addEventListener('click', function( event ){
            localStorage.removeItem('JantaUniqueEmployeesInformation');
        })
    </script>

</body>
</html>