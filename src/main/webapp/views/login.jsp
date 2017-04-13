<div class="header-extended">
  <div class="container">
    <div class="login-page-container">
      <div class="welcome-head">Welcome!</div>
      <div class="page-login">
        <div class="login-container">
          <div class="login-block">
            <h3>Login</h3>
            <form name="loginForm" ng-controller="LoginFormController as loginFormCtrl"
                  ng-submit="loginForm.$valid && loginFormCtrl.login()" novalidate>
              <div class="form-group">
                <div class="col-xs-12">
                  <md-input-container class="p-0 m-b-15">
                    <label>User name</label>
                    <input name="userName" ng-model="loginFormCtrl.userName" required>
                    <div ng-messages="userForm.lastName.$error" ng-show="userForm.lastName.$dirty">
                      <div ng-message="required">This is required!</div>
                    </div>
                  </md-input-container>
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-12">
                  <md-input-container class="p-0 m-b-15">
                    <label>Password</label>
                    <input type="password" name="password" ng-model="loginFormCtrl.password" required>
                    <div ng-messages="userForm.lastName.$error" ng-show="userForm.lastName.$dirty">
                      <div ng-message="required">This is required!</div>
                    </div>
                  </md-input-container>
                </div>
              </div>

              <div class="form-group text-align-c">
                <div class="col-xs-12 m-b-15">
                  <md-button type="submit" class="md-raised border-button">Login</md-button>
                </div>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>