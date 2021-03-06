/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.57
 * Generated at: 2015-10-26 01:42:57 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class detail_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<div class=\"container\">\n");
      out.write("    <div class=\"page-detail\">\n");
      out.write("\n");
      out.write("        <div class=\"row\">\n");
      out.write("            <div class=\"col-xs-12\">\n");
      out.write("                <div class=\"panel-card\">\n");
      out.write("                    <div class=\"header-panel\">\n");
      out.write("                        <div class=\"back-arrow\" ng-click=\"backToHome()\"><img src=\"images/back-arrow.png\"></div>\n");
      out.write("                        <h4>Customer Details</h4>\n");
      out.write("                    </div>\n");
      out.write("                    <div class=\"customer-info-block\">\n");
      out.write("                        <div class=\"row m-0\">\n");
      out.write("                            <div class=\"col-xs-12 col-sm-2 xs-align-center\">\n");
      out.write("                                <div class=\"circle-container m-b-15\">\n");
      out.write("                                    <span class=\"circle-highlight\">{{customerDetail.id}}</span>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            <div class=\"col-xs-12 col-sm-6 xs-align-center\">\n");
      out.write("                                <div class=\"col-xs-12\">\n");
      out.write("                                    <h3 class=\"name-customer-detail\">{{customerDetail.customername}}</h3>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-xs-12\">\n");
      out.write("                                    <p class=\"product-customer-detail\">Product: {{customerDetail.productname}}</p>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-xs-12\" ng-repeat=\"contact in customerDetail.communications\">\n");
      out.write("\n");
      out.write("                                    <div ng-if=\"contact.category == 'Email'\">\n");
      out.write("                                        <a href=\"mailto:{{contact.value}}\" target=\"_blank\">{{contact.value}}</a>\n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"visible-xs\" ng-if=\"contact.category == 'Phone'\">\n");
      out.write("                                        <a href=\"tel:{{contact.value}}\">{{contact.value}} ({{contact.type}})</a>\n");
      out.write("                                    </div>\n");
      out.write("                                </div>\n");
      out.write("\n");
      out.write("                                <div class=\"col-xs-12\"></div>\n");
      out.write("                            </div>\n");
      out.write("                            <div class=\"col-xs-12 col-sm-4 text-align-c\">\n");
      out.write("                                <div class=\"status-block-details\">\n");
      out.write("                                    <div class=\"col-xs-12\">\n");
      out.write("                                        <div>STATUS</div>\n");
      out.write("                                        <div class=\"status-customer-detail\">{{customerDetail.status}}</div>\n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"col-xs-12\" ng-repeat=\"contact in customerDetail.communications\">\n");
      out.write("                                        <div class=\"m-b-15\" ng-if=\"contact.category == 'Skype'\">\n");
      out.write("                                            <skype-button></skype-button>\n");
      out.write("                                            {{contact.value}}\n");
      out.write("                                        </div>\n");
      out.write("                                    </div>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("\n");
      out.write("                    <div ng-cloak>\n");
      out.write("                        <md-content>\n");
      out.write("                            <md-tabs md-dynamic-height md-border-bottom>\n");
      out.write("                                <md-tab label=\"Notes\">\n");
      out.write("                                    <div class=\"col-xs-12\">\n");
      out.write("                                        <md-content class=\"md-padding\">\n");
      out.write("                                            <md-input-container>\n");
      out.write("                                                <label>Notes</label>\n");
      out.write("                                                <textarea name=\"notes\" ng-model=\"notes\" required></textarea>\n");
      out.write("                                                <div ng-messages=\"notes.$error\" ng-show=\"notes.$dirty\">\n");
      out.write("                                                    <div ng-message=\"required\">This is required!</div>\n");
      out.write("                                                </div>\n");
      out.write("                                            </md-input-container>\n");
      out.write("                                        </md-content>\n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"col-sm-4\">\n");
      out.write("                                        <md-content class=\"md-padding\">\n");
      out.write("                                            <md-input-container>\n");
      out.write("                                                <md-select ng-model=\"status\" placeholder=\"Status\">\n");
      out.write("                                                    <md-option>New</md-option>\n");
      out.write("                                                    <md-option>InProgress</md-option>\n");
      out.write("                                                    <md-option>OrderPlaced</md-option>\n");
      out.write("                                                    <md-option>Support</md-option>\n");
      out.write("                                                    <md-option>Cancelled</md-option>\n");
      out.write("                                                    <md-option>Rejected</md-option>\n");
      out.write("                                                </md-select>\n");
      out.write("                                            </md-input-container>\n");
      out.write("                                        </md-content>\n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"col-xs-12\">\n");
      out.write("                                        <md-button class=\"md-raised tab-save-button\" ng-click=\"saveNotes()\">Save Notes</md-button>\n");
      out.write("                                    </div>\n");
      out.write("                                </md-tab>\n");
      out.write("\n");
      out.write("                                <md-tab label=\"Visit\">\n");
      out.write("                                    <div class=\"col-sm-4\">\n");
      out.write("                                        <md-content class=\"md-padding\">\n");
      out.write("                                            <md-input-container>\n");
      out.write("                                                <md-select ng-model=\"visitAction\" placeholder=\"Action\">\n");
      out.write("                                                    <md-option>Offer</md-option>\n");
      out.write("                                                    <md-option>Lead</md-option>\n");
      out.write("                                                    <md-option>Opportunity</md-option>\n");
      out.write("                                                    <md-option>New Customer</md-option>\n");
      out.write("                                                </md-select>\n");
      out.write("                                            </md-input-container>\n");
      out.write("                                        </md-content>\n");
      out.write("                                    </div>\n");
      out.write("\n");
      out.write("                                    <div class=\"col-sm-4\">\n");
      out.write("                                        <div class=\"datePickerContainer\">\n");
      out.write("                                            <date-picker-visit></date-picker-visit>\n");
      out.write("                                        </div>\n");
      out.write("                                    </div>\n");
      out.write("\n");
      out.write("                                    <div class=\"col-sm-4\">\n");
      out.write("                                        <div class=\"timePickerContainer m-b-15\">\n");
      out.write("                                            <time-picker-visit></time-picker-visit>\n");
      out.write("                                        </div>\n");
      out.write("                                    </div>\n");
      out.write("\n");
      out.write("                                    <div class=\"col-xs-12\">\n");
      out.write("                                        <md-content class=\"md-padding\">\n");
      out.write("                                            <md-input-container>\n");
      out.write("                                                <label>Visit notes</label>\n");
      out.write("                                                <textarea name=\"visitNotes\" ng-model=\"visitNotes\" required></textarea>\n");
      out.write("                                                <div ng-messages=\"visitNotes.$error\" ng-show=\"visitNotes.$dirty\">\n");
      out.write("                                                    <div ng-message=\"required\">This is required!</div>\n");
      out.write("                                                </div>\n");
      out.write("                                            </md-input-container>\n");
      out.write("                                        </md-content>\n");
      out.write("                                    </div>\n");
      out.write("\n");
      out.write("                                    <div class=\"col-xs-12\">\n");
      out.write("                                        <md-button class=\"md-raised tab-save-button\"\n");
      out.write("                                                   ng-click=\"saveVisit(visitAction,visitNotes,selectedDate,timeVisit)\">\n");
      out.write("                                            Save Visit</md-button>\n");
      out.write("                                    </div>\n");
      out.write("                                </md-tab>\n");
      out.write("                            </md-tabs>\n");
      out.write("                        </md-content>\n");
      out.write("                    </div>\n");
      out.write("\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("\n");
      out.write("    </div>\n");
      out.write("</div>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
