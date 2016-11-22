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
    <script src="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.min.js" type="text/javascript" charset="utf-8" async defer></script>
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
    </div>
        <!--page content starts here-->
    <main class="mdl-layout__container">
      <div class="mdl-grid">
        <div id="component" style="margin-top: 60px; width: 100%;"></div>
      </div>
    </main>
  </div><!--container ends here-->
    <script src="<?php print base_url();?>assets/node_modules/jquery/dist/jquery.min.js"></script><!-- 
    <script src="<?php print base_url();?>assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/ripples.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/material.js"></script> -->
    <!-- <script src="<?php print base_url();?>assets/node_modules/momentjs/moment-with-locales.js"></script> -->
    <!-- <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script> -->
    <script src="<?php print base_url(); ?>assets/node_modules/react/dist/react.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?php print base_url(); ?>assets/node_modules/react-dom/dist/react-dom.js" type="text/javascript" charset="utf-8" ></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script> -->
    <script src="<?php print base_url(); ?>assets/js/babel-core.js" type="text/javascript"></script>
<!--     <script src="<?php print base_url(); ?>assets/js/job_search.js" type="text/babel"></script> -->
    <script src="<?php print base_url(); ?>assets/navbar/dist/navbar-bundle.js"></script> 
    <script src="<?php print base_url(); ?>assets/search-view/dist/bundle.js"></script> 
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