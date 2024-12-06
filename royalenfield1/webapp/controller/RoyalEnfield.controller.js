sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (Controller, Fragment) {
    "use strict";

    return Controller.extend("ns.royalenfield.controller.RoyalEnfield", {
        onInit: function () {
            // Initialization code if needed
        },
        
        // Royal Enfield
        onNavRoyalCustomer: function(){
            console.log("RoyalEnfield Customer button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("royalEnfieldCustomer");
        },

        onNavRoyalContactUs: function(){
            console.log("RoyalEnfield ContactUs button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("royalEnfieldContactus");
        }
        ,
        onNavRoyalStoreLocator: function(){
            console.log("RoyalEnfield Store Locator button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("royalEnfieldstorelocator");
        } ,
        onNavRoyalServiceCentreLocator: function(){
            console.log("RoyalEnfield Service Center Locator button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("royalEnfieldservicecenter");
        },
        onNavRETestRide: function(){
            console.log("rETestRide button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("rETestRide");

        },
        onNavRoyalFaq: function(){
            console.log("FAQ button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("refq");

        },
        onNavRoyalChat: function(){
            console.log("Chat button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("rechat");
        }
        
    });
});
