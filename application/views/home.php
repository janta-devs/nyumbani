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
	<!-- <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap/dist/css/bootstrap.css"> -->
	<!-- Bootstrap Material Design -->
  <!-- <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css"> -->
  <!-- <link rel="stylesheet" type="text/css" href="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/css/ripples.min.css"> -->
  <link rel="stylesheet" type="text/css" href="<?php print base_url(); ?>assets/node_modules/material-design-lite/material.min.css">

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
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <!-- Title -->
              <span class="mdl-layout-title">
                <div class="logo-home" ></div>
              </span>
              <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div>
              <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <table>
                  <?php echo form_open(site_url()."/home/login", array('class' => 'navbar-form navbar-right'));?>
                    <tbody>
                      <tr>
                        <td>
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 200px; padding-right: 5px; font-size: 8px;" >
                              <input type="text" id="email" name="email" class="mdl-textfield__input" value="<?php echo set_value('email');?>">
                              <label class="mdl-textfield__label" for="email">Email</label>
                          </div>
                        </td>
                        <td>  
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 200px; padding-right: 5px; font-size: 8px;">
                              <input type="password" name="password" class="mdl-textfield__input" value="<?php echo set_value('password');?>">
                              <label class="mdl-textfield__label" for="password">Password</label>
                          </div>
                        </td>
                        <td>
                          <div class="mdl-textfield mdl-js-textfield" style="width: 120px; padding-top: 50px; padding-right: 0px;">
                              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Sign In <i class="material-icons">lock_open</i>
                              </button>
                          </div>
                        </td> 
                      </tr>
                      <!-- <tr>
                        <td>
                          <a href="<?php echo site_url();?>/home/forgot" style="color: #9cb4d8;"><small>Forgot your login?Reset</small></a>
                        </td>
                        <td>
                          <a href="<?php echo site_url();?>/home/forgot" style="color: #9cb4d8;"><small>Not registered? Sign up</small></a>
                        </td> -->
                      </tr>
                    </tbody>
                  </form>
                </table>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <main class="mdl-layout__content">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col" style="margin-top: 50px;">
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
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col" >
                <h1 style="padding: 0px; margin-bottom: -10px;">Sign Up!</h1><span style="margin-left: 25px;"><small>Join the #1 global workplace.</small></span>
                <?php 
                    $fattr = array('class' => 'sign-up', 'name' => 'registrationForm','data-toggle' => 'validator');
                    echo form_open('home/register', $fattr);
                ?>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input type="text" id="fname" name="fname" class="mdl-textfield__input" data-error="First Name is required" value="<?php set_value('fname');?>" >
                        <label class="mdl-textfield__label" for="fname">First Name</label>
                        <span class="text-danger"><?php echo form_error('fname'); ?></span>
                        </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" name="lname" id="lname" value="<?php set_value('lname');?>" >
                  <label class="mdl-textfield__label" for="lname">Last Name</label>
                  <span class="text-danger"><?php echo form_error('lname'); ?></span>
                  </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" name="email_add" type="text" id="email_add" value="<?php set_value('email_add');?>" >
                  <label class="mdl-textfield__label" for="email_add" >Email Address</label>
                  <span class="text-danger"><?php echo form_error('email_add'); ?></span>
                  </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" name="conf_email" type="text" value="<?php set_value('conf_email');?>" id="conf_email">
                  <label class="mdl-textfield__label" for="conf_email">Confirm Email</label>
                  <span class="text-danger"><?php echo form_error('conf_email'); ?></span>
                  </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" name="pwd" type="password" value="<?php set_value('pwd');?>" id="password">
                  <label class="mdl-textfield__label" for="password">Password</label>
                  <span class="text-danger"><?php echo form_error('pwd'); ?></span>
                  </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" name="conf_pwd" type="password" value="<?php set_value('conf_pwd');?>" id="conf_password">
                  <label class="mdl-textfield__label" for="conf_password">Confirm Password</label>
                  <span class="text-danger"><?php echo form_error('conf_pwd'); ?></span>
                  </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input type="text" id="phone" value="<?php set_value('phone');?>" name="phone" class="mdl-textfield__input">
                  <label class="mdl-textfield__label" for="phone">Mobile Number</label>
                  <span class="text-danger"><?php echo form_error('phone'); ?>
                  </span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                            <div class="form-group">
                                <div class="radio">
                                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="male">
                                  <input name="gender" type="radio" id="male" value="male" class="mdl-radio__button">
                                        Male
                                    </label>
                                </div>
                                <div class="radio">
                                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                        <input type="radio" name="gender" id="female" value="female" class="mdl-radio__button">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger"><?php echo form_error('gender'); ?></span> 
            </div>
              <div class="mdl-cell mdl-cell--12-col">
                <div class="form-group">
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit" value="Sign Up" style="width: 300px; float: right; ">Sign Up</button>
                </div>
              </div>
            <?php echo form_close(); ?>
            <?php echo $this->session->flashdata('msg'); ?>
    </div>
          </div><div class="mdl-cell mdl-cell--6-col" style="margin-top: 100px; overflow: none;">
                <div class="form-group">
                  <img src="<?php print base_url();?>assets/node_modules/bootstrap/dist/images/sl1.jpg">
                </div>
              </div>
      </main>
    <script src="<?php print base_url();?>assets/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php print base_url();?>assets/node_modules/bootstrap-material-design/dist/js/ripples.min.js"></script>
   <!-- <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script> -->
    <script src="<?php print base_url();?>assets/node_modules/material-design-lite/material.min.js"></script>
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