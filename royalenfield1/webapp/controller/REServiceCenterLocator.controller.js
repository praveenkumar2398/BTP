sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function (Controller) {
    "use strict";
    return Controller.extend("ns.royalenfield.controller.REServiceCenterLocator", {
    onSelectIndia: function (oEvent) {
    this.getView().byId("pageContainer").to(this.getView().byId("pageIndia"));
    }
    });
    });