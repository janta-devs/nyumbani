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
    <link rel="icon" href="../../favicon.ico">
	<title>Welcome to Janta</title>
  	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/bootstrap.css">
	<!-- Bootstrap Material Design -->
  <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css">
  <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/ripples.min.css">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="<?php print base_url();?>assets/node_modules/bootstrap/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template --
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

</head>
<body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="logo-home" ></div>
          <!--<a class="navbar-brand" href="#">Project name</a>-->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        <?php echo form_open(site_url()."/home/login", array('class' => 'navbar-form navbar-right'));?>
          <!--<form class="navbar-form navbar-right" action="<?php echo site_url();?>/home/login">-->
            <div class="form-group label-floating" >
				<label class="control-label" for="email">Email or Mobile</label><br>
              <input type="text" id="email" name="email" class="form-control"><br>
              <a href="<?php echo site_url();?>/home/forgot" style="color: #9cb4d8;"><small>Forgot your login?Reset</small></a>
            </div>
            <div class="form-group label-floating">
            	<label class="control-label" for="password">Password</label><br>
              <input type="password" name="password" class="form-control"><br>
              <a href="<?php echo site_url();?>/home/forgot" style="color: #9cb4d8;"><small>Not registered? Sign up</small></a>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-raised btn-warning" style="margin-bottom: 10px;">Sign in</button><br>
            <p></p>
            </div>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <div class="container">
<div class="row" >
</div>
    	<div class="row">
  			<div class="col-md-5" style="margin-top: 100px;" >
              <div class="col-md-6 col-md-offset-3" style="margin-top: 0;" >
                <?php //echo $this->session->flashdata('verify_msg'); ?>
                <?php
            $arr = $this->session->flashdata(); 
            if(!empty($arr['flash_message'])){
                $html = '<div class="bg-warning container flash-message">';
                $html .= $arr['flash_message']; 
                $html .= '</div>';
                echo $html;
            }
        ?>
              </div>
    			<h1>Sign Up!</h1>
        			<p class='jumbotron-text'>Join the #1 global workplace.
        			</p>
                <?php 
    $fattr = array('class' => 'sign-up', 'name' => 'registrationForm','data-toggle' => 'validator');
    echo form_open('home/register', $fattr); ?>
                    <div class="col-md-6">
                        <div class="form-group label-floating">
                        <label class="control-label" for="fname">First Name</label>
                        <input type="text" id="fname" name="fname" class="form-control" data-error="First Name is required" value="<?php set_value('fname');?>" required>
                        <span class="text-danger"><?php echo form_error('fname'); ?></span>
                        </div>
                    </div>
        				<div class="col-md-6">
        					<div class="form-group label-floating">
        					<label class="control-label" for="lname">Last Name</label>
        					<input class="form-control" type="text" name="lname" id="lname" value="<?php set_value('lname');?>" required>
                  <span class="text-danger"><?php echo form_error('lname'); ?></span>
      						</div>
      					</div>
        				<div class="col-md-6">
        					<div class="form-group label-floating">
        					<label class="control-label" for="email_add" >Email Address</label>
        					<input class="form-control" name="email_add" type="text" id="email_add" value="<?php set_value('email_add');?>" required >
                  <span class="text-danger"><?php echo form_error('email_add'); ?></span>
      						</div>
      					</div>
        				<div class="col-md-6">
        					<div class="form-group label-floating">
        					<label class="control-label" for="conf_email">Confirm Email</label>
        					<input class="form-control" name="conf_email" type="text" value="<?php set_value('conf_email');?>" id="conf_email">
                  <span class="text-danger"><?php echo form_error('conf_email'); ?></span>
      						</div>
      					</div>
                <div class="col-md-6">
                  <div class="form-group label-floating">
                  <label class="control-label" for="password">Password</label>
                  <input class="form-control" name="pwd" type="password" value="<?php set_value('pwd');?>" id="password">
                  <span class="text-danger"><?php echo form_error('pwd'); ?></span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group label-floating">
                  <label class="control-label" for="conf_password">Confirm Password</label>
                  <input class="form-control" name="conf_pwd" type="password" value="<?php set_value('conf_pwd');?>" id="conf_password">
                  <span class="text-danger"><?php echo form_error('conf_pwd'); ?></span>
                  </div>
                </div>
                        <div class="col-md-6">
				            <div class="form-group label-floating">
                                <label class="control-label" for="phone">Mobile Number</label>
						      <input type="text" id="phone" value="<?php set_value('phone');?>" name="phone" class="form-control">
                  <span class="text-danger"><?php echo form_error('phone'); ?></span>
						    </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="radio">
                                    <label>
                                  <input name="gender" type="radio" id="male" value="male">
                                        Male
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="gender" id="female" value="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger"><?php echo form_error('gender'); ?></span>    
                        </div>
                    <div class="col-md-12">
						    <div class="form-group">
                                <button class="btn btn-raised btn-lg btn-warning btn-block" type="submit" value="Sign Up">Sign Up</button>
						    </div>
                    </div>
    <?php echo form_close(); ?>
        <?php echo $this->session->flashdata('msg'); ?>
        	</div>
    		<div class="col-md-3 col-md-offset-1" style="margin-top: 100px; overflow: none;">
      			<div class="form-group">
      				<img src="<?php print base_url();?>assets/node_modules/bootstrap/dist/images/sl1.jpg">
      			</div>
    		</div>
        </div>
    </div>
    <script src="<?php print base_url();?>assets/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/ripples.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/material.js"></script>
    <script type="text/javascript">
    	$(document).ready(function(){
        /*$('.sign-up').formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              fname:{
                validators: {
                  notEmpty:{
                    message: 'First Name is required'
                  },
                  stringLength: {
                    min: 1,
                    max: 30,
                    message: 'First Name must be more than 1 and less than 30 characters long'
                  },
                  regexp: {
                    regexp: /^[a-zA-Z0-9_]+$/,
                    message: 'First Name can only consist of alphabets'
                  }
                }
              }
            }
        });*/
    		$.material.init();
            $.material.radio();
            $.material.checkbox();
    	});
    </script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>