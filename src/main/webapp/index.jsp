<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="bower_components/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/stylesheets/include.css">
    <link rel="stylesheet" href="bower_components/angular-material/angular-material.css">
    <link rel="stylesheet" href="bower_components/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="bower_components/bootstrap-timepicker/bootstrap-timepicker.min.css">

  </head>
  <body ng-app="sraApp">
    <!--[if lte IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div class="header">
      <div class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#/">SRA</a>
          </div>

          <div class="logout-container" ng-if="isUserLoggedIn == true && userName != ''">
            <div class="logged-in-username">{{userName}}</div>
            <span class="buttons-divider"></span>
            <div class="logout-button-action"><a ng-href="#" ng-controller="LogoutController as logoutController"
                                                 ng-click="logoutController.logout()">Logout</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wrap">
      <div class="wrapper" ng-view=""></div>
    </div>

    <footer class="site-footer">
        <div class="container">
          <p>&copy; Copyright 2015, SRA.</p>
        </div>
    </footer>

    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/bootstrap/js/bootstrap.min.js"></script>
    <script src="bower_components/angular-animate/angular-animate.js"></script>
    <script src="bower_components/angular-cookies/angular-cookies.js"></script>
    <script src="bower_components/angular-resource/angular-resource.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/angular-aria/angular-aria.js"></script>
    <script src="bower_components/angular-material/angular-material.js"></script>
    <script src="bower_components/skype/skype-uri.js"></script>
    <script src="bower_components/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.js"></script>
    <script src="bower_components/bootstrap-timepicker/bootstrap-timepicker.min.js"></script>
    <script src="bower_components/mockjax/jquery.mockjax.js"></script>

    <script src="scripts/app.js"></script>
    <script src="scripts/md5.js"></script>
    <script src="scripts/controllers/login.js"></script>
    <script src="scripts/controllers/main.js"></script>
    <script src="scripts/controllers/detail.js"></script>

</body>
</html>
