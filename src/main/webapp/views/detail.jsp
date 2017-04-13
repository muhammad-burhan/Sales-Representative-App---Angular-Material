<div class="container">
    <div class="page-detail">

        <div class="row">
            <div class="col-xs-12">
                <div class="panel-card">
                    <div class="header-panel">
                        <div class="back-arrow" ng-click="backToHome()"><img src="images/back-arrow.png"></div>
                        <h4>Customer Details</h4>
                    </div>
                    <div class="customer-info-block">
                        <div class="row m-0">
                            <div class="col-xs-12 col-sm-2 xs-align-center">
                                <div class="circle-container m-b-15">
                                    <span class="circle-highlight">{{customerDetail.id}}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 xs-align-center">
                                <div class="col-xs-12">
                                    <h3 class="name-customer-detail">{{customerDetail.customername}}</h3>
                                </div>
                                <div class="col-xs-12">
                                    <p class="product-customer-detail">Product: {{customerDetail.productname}}</p>
                                </div>
                                <div class="col-xs-12" ng-repeat="contact in customerDetail.communications">

                                    <div ng-if="contact.category == 'Email'">
                                        <a href="mailto:{{contact.value}}" target="_blank">{{contact.value}}</a>
                                    </div>
                                    <div class="visible-xs" ng-if="contact.category == 'Phone'">
                                        <a href="tel:{{contact.value}}">{{contact.value}} ({{contact.type}})</a>
                                    </div>
                                </div>

                                <div class="col-xs-12"></div>
                            </div>
                            <div class="col-xs-12 col-sm-4 text-align-c">
                                <div class="status-block-details">
                                    <div class="col-xs-12">
                                        <div>STATUS</div>
                                        <div class="status-customer-detail">{{customerDetail.status}}</div>
                                    </div>
                                    <div class="col-xs-12" ng-repeat="contact in customerDetail.communications">
                                        <div class="m-b-15" ng-if="contact.category == 'Skype'">
                                            <skype-button></skype-button>
                                            {{contact.value}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ng-cloak>
                        <md-content>
                            <md-tabs md-dynamic-height md-border-bottom>
                                <md-tab label="Notes">
                                    <div class="col-xs-12">
                                        <md-content class="md-padding">
                                            <md-input-container>
                                                <label>Notes</label>
                                                <textarea name="notes" ng-model="notes" required></textarea>
                                                <div ng-messages="notes.$error" ng-show="notes.$dirty">
                                                    <div ng-message="required">This is required!</div>
                                                </div>
                                            </md-input-container>
                                        </md-content>
                                    </div>
                                    <div class="col-sm-4">
                                        <md-content class="md-padding">
                                            <md-input-container>
                                                <md-select ng-model="status" placeholder="Status">
                                                    <md-option>New</md-option>
                                                    <md-option>InProgress</md-option>
                                                    <md-option>OrderPlaced</md-option>
                                                    <md-option>Support</md-option>
                                                    <md-option>Cancelled</md-option>
                                                    <md-option>Rejected</md-option>
                                                </md-select>
                                            </md-input-container>
                                        </md-content>
                                    </div>
                                    <div class="col-xs-12">
                                        <md-button class="md-raised tab-save-button" ng-click="saveNotes()">Save Notes</md-button>
                                    </div>
                                </md-tab>

                                <md-tab label="Visit">
                                    <div class="col-sm-4">
                                        <md-content class="md-padding">
                                            <md-input-container>
                                                <md-select ng-model="visitAction" placeholder="Action">
                                                    <md-option>Offer</md-option>
                                                    <md-option>Lead</md-option>
                                                    <md-option>Opportunity</md-option>
                                                    <md-option>New Customer</md-option>
                                                </md-select>
                                            </md-input-container>
                                        </md-content>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="datePickerContainer">
                                            <date-picker-visit></date-picker-visit>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="timePickerContainer m-b-15">
                                            <time-picker-visit></time-picker-visit>
                                        </div>
                                    </div>

                                    <div class="col-xs-12">
                                        <md-content class="md-padding">
                                            <md-input-container>
                                                <label>Visit notes</label>
                                                <textarea name="visitNotes" ng-model="visitNotes" required></textarea>
                                                <div ng-messages="visitNotes.$error" ng-show="visitNotes.$dirty">
                                                    <div ng-message="required">This is required!</div>
                                                </div>
                                            </md-input-container>
                                        </md-content>
                                    </div>

                                    <div class="col-xs-12">
                                        <md-button class="md-raised tab-save-button"
                                                   ng-click="saveVisit(visitAction,visitNotes,selectedDate,timeVisit)">
                                            Save Visit</md-button>
                                    </div>
                                </md-tab>
                            </md-tabs>
                        </md-content>
                    </div>

                </div>
            </div>
        </div>


    </div>
</div>
