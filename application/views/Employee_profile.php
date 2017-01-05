<!DOCTYPE html>
<html>
<head>
	<title>Employee Profile</title>
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
</head>
<body>

<!--Start-->

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

            <a class="brand-home-nav" href="#menu-toggle" id="menu-toggle"><span aria-hidden="true"><i class="pe-7s-menu pe-4x pe-va"></i></span></a>
          <div class="logo-home" ></div>
          <!--<a class="navbar-brand" href="#">Project name</a>-->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right" style="display: inline; vertical-align: center;">
                        <li>
                            <a href="#"><span class="pe-7s-bell pe-va pe-2x" aria-hidden="true"></span> </a>
                        </li>
                        <li>
                            <a href="#"><span class="pe-7s-comment pe-va pe-2x" aria-hidden="true"></span></a>
                        </li>
                        <li>
                            <a href="#"><span class="pe-7s-like2 pe-va pe-2x" aria-hidden="true"></span> </a>
                        </li>
                        <li class="dropdown">
                              <a href="#" class="dropdown-toggle avatar_width" data-toggle="dropdown"><span class="avatar-holder">
                                    <img src = "<?php print base_url();?>assets/node_modules/bootstrap/dist/images/anony.jpg"></span>
                                    <b class="caret"></b>
                              </a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                              </ul>
                        </li>
                        <li>
                            <a href="<?php echo site_url();?>/home/logout"><span class="pe-7s-power pe-va pe-2x" aria-hidden="true"></span>
                               
                            </a>
                        </li>
                    </ul>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <div id="wrapper" class="toggled">
      <div class="container-fluid">
        <!--Sidebar begins here-->
        <div id="sidebar-wrapper" style="margin-top: 40px;">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <br>
            </li>
                <!--<li class="sidebar-brand">
                    <a href="#" class="navbar-brand">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Profile
                    </a>
                </li>-->
                <li class="active">
                    <a href="#"><span class="pe-7s-home pe-lg" aria-hidden="true"></span> Home</a>
                </li>
                 <li>
                    <a href="#"><span class="pe-7s-id pe-lg" aria-hidden="true"></span> My Profile</a>
                </li> 
                <li>
                    <a href="#"><span class="pe-7s-wallet pe-lg" aria-hidden="true"></span> Wallet</a>
                </li>
                <li>
                    <a href="#"><span class="pe-7s-config pe-lg" aria-hidden="true"></span> Settings</a>
                </li>
                <li>
                    <a href="#"><span class="pe-7s-bell pe-lg" aria-hidden="true"></span> Notifications</a>
                </li>
                <li>
                    <a href="#"><span class="pe-7s-power pe-lg" aria-hidden="true"></span> Logout</a>
                </li>
          </ul>
        </div><!--end of sidebar-wrapper-->
        <!--page content starts here-->
        <div id="page-content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-10 col-xs-offset-1" style="margin-top: 40px;">
              
<?php
            $arr = $this->session->flashdata(); 
            if(!empty($arr['flash_message'])){
                $html = '<div class="bg-warning container flash-message">';
                $html .= $arr['flash_message']; 
                $html .= '</div>';
                echo $html;
            }
        ?>
                <br>
                  <div id = "component"></div>
              </div>
            </div>
          </div>
        </div><!--Page-content-wrapper ends here-->
      </div>
    </div>


<!--End-->
</body>
<script src="<?php print base_url();?>assets/main/profile.js" type="text/javascript"></script>
</html>