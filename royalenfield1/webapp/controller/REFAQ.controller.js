sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ns.royalenfield.controller.REFAQ", {
        
        onInit: function () {
            // Any initialization logic can go here if needed.
        },

        // Function to handle the Motorcycles category selection
        onSelectMotorCycle: function () {
            this._toggleFaqSection("motorcycleFaq");
        },

        // Function to handle the Safety category selection
        onSelectSafety: function () {
            this._toggleFaqSection("safetyFaq");
        },

        // Function to handle the Customer Service category selection
        onSelectCustomerService: function () {
            this._toggleFaqSection("customerServiceFaq");
        },

        // Function to handle the General category selection
        onCategorySelect: function () {
            this._toggleFaqSection("generalFaq");
        },

        // Helper function to toggle FAQ visibility
        _toggleFaqSection: function (faqId) {
            var oView = this.getView();
            // Hide all sections
            oView.byId("motorcycleFaq").setVisible(false);
            oView.byId("safetyFaq").setVisible(false);
            oView.byId("customerServiceFaq").setVisible(false);
            oView.byId("generalFaq").setVisible(false);

            // Show the selected FAQ section
            oView.byId(faqId).setVisible(true);
        },
        
            onFacebookPress: function () {
                window.open("https://www.facebook.com/RoyalEnfield", "_blank");
            },

            // Function to handle Twitter button press
            onTwitterPress: function () {
                window.open("https://twitter.com/RoyalEnfield", "_blank");
            },

            // Function to handle Instagram button press
            onInstagramPress: function () {
                window.open("https://www.instagram.com/royalenfield", "_blank");
            },

            // Function to handle YouTube button press
            onYouTubePress: function () {
                window.open("https://www.youtube.com/@royalenfield", "_blank");
            },
    });
});
