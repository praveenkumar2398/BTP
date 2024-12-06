sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ns.royalenfield.controller.RETestRide", {
        onInit: function () {
           
        },
        onbackRoyalEnfield:function(){
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteRoyalEnfield");
        },
        onNavBike1: function () {
            console.log("customer button clicked!");
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            var bike=1;
            oRouter.navTo("bikeForm",{
                bike: bike
            });
            },
            onNavBike2: function () {
                console.log("customer button clicked!");
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                var bike=2;
                oRouter.navTo("bikeForm",{
                    bike: bike
                });
                },
                onNavBike3: function () {
                    console.log("customer button clicked!");
                    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                    var bike=3;
                    oRouter.navTo("bikeForm",{
                        bike: bike
                    });
                    },
                    onNavBike4: function () {
                        console.log("customer button clicked!");
                        var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                        var bike=4;
                        oRouter.navTo("bikeForm",{
                            bike: bike
                        });
                        },
                        onNavBike5: function () {
                            console.log("customer button clicked!");
                            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                            var bike=5;
                            oRouter.navTo("bikeForm",{
                                bike: bike
                            });
                            },
                            onNavBike6: function () {
                                console.log("customer button clicked!");
                                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                var bike=6;
                                oRouter.navTo("bikeForm",{
                                    bike: bike
                                });
                                },
                                onNavBike7: function () {
                                    console.log("customer button clicked!");
                                    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                    var bike=7;
                                    oRouter.navTo("bikeForm",{
                                        bike: bike
                                    });
                                    },
                                    onNavBike8: function () {
                                        console.log("customer button clicked!");
                                        var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                        var bike=8;
                                        oRouter.navTo("bikeForm",{
                                            bike: bike
                                        });
                                        },
                                        onNavBike9: function () {
                                            console.log("customer button clicked!");
                                            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                            var bike=9;
                                            oRouter.navTo("bikeForm",{
                                                bike: bike
                                            });
                                            },
                                            onNavBike10: function () {
                                                console.log("customer button clicked!");
                                                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                                var bike=10;
                                                oRouter.navTo("bikeForm",{
                                                    bike: bike
                                                });
                                                },
                                                onNavBike11: function () {
                                                    console.log("customer button clicked!");
                                                    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                                    var bike=11;
                                                    oRouter.navTo("bikeForm",{
                                                        bike: bike
                                                    });
                                                    },
                                                    onNavBike12: function () {
                                                        console.log("customer button clicked!");
                                                        var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                                                        var bike=12;
                                                        oRouter.navTo("bikeForm",{
                                                            bike: bike
                                                        });
                                                        }
    });
});