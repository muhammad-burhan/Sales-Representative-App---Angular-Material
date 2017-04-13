<div class="container">
  <div class="page-home">
    <div ng-controller="CustomerListController as customerListCtrl">
      <div class="row">
        <div class="col-xs-12">
          <div class="panel-card">
            <div class="header-panel">
              <h4>Customers List</h4>
            </div>
            <div class="row m-0 filter-block">
              <div class="col-sm-4">
                <md-input-container>
                  <label>Search</label>
                  <input name="searchKey" ng-model="customerListCtrl.searchKey">
                </md-input-container>
              </div>
              <div class="col-sm-4">
                <md-input-container>
                  <md-select ng-model="customerListCtrl.sortKey" placeholder="Sort by">
                    <md-option value="id">Sort by Customer ID</md-option>
                    <md-option value="customername">Sort by Customer Name</md-option>
                    <md-option value="productname">Sort by Product</md-option>
                  </md-select>
                </md-input-container>
              </div>
              <div class="col-sm-4 text-align-c xs-m-b-15">
                <md-button class="md-raised refresh-btn-vertical-align" ng-click="customerListCtrl.refreshList()">Refresh List</md-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row table-heading hidden-xs">
        <div class="col-sm-3">ID</div>
        <div class="col-sm-3">NAME</div>
        <div class="col-sm-3">PRODUCT</div>
        <div class="col-sm-3">STATUS</div>
      </div>

      <div class="customer-list-block">
        <div class="row custom-card"
             ng-repeat="customer in customerListCtrl.customerList.data | filter: customerListCtrl.searchKey
             | orderBy: customerListCtrl.sortKey"
             ng-click="customerListCtrl.openCustomerDetail(customer.id)">
          <div class="col-sm-3"><div class="xs-m-b-15"><span class="circle-highlight">{{customer.id}}</span></div></div>
          <div class="col-xs-12 visible-xs grid-label">Name</div>
          <div class="col-sm-3">{{customer.customername}}</div>
          <div class="col-xs-12 visible-xs grid-label">Product</div>
          <div class="col-sm-3">{{customer.productname}}</div>
          <div class="col-xs-12 visible-xs grid-label">Status</div>
          <div class="col-sm-3">{{customer.status}}</div>
        </div>
      </div>

    </div>
  </div>
</div>
