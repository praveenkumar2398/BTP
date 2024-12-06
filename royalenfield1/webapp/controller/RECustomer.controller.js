sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("ns.royalenfield.controller.RECustomer", {
        onInit: function () {
            
        },

        onSave: function () {

          var oModel = this.getView().getModel();
          console.log(oModel);

          // Generate UUID for unique ID
        function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

        // var id="567654";
          var oEntry = {
          id: generateUUID(),
          firstName: this.getView().byId("firstName").getValue(),
          lastName:this.getView().byId("lastName").getValue(),
          emailId: this.getView().byId("email").getValue(),
          mobileNumber: this.getView().byId("mobileNumber").getValue(),
          password:this.getView().byId("password").getValue(),
          dateOfBirth:this.getView().byId("dob").getValue()
        //   gender:this.getView().byId("gender").getValue()
        };
        console.log(oEntry);
        oModel.create("/Customer",oEntry,{
          method:"POST",
          success:function(){
            MessageToast.show("Customer Added Successfully");
          }         
        })
        }
    });
});
