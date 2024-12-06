sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",

], (Controller,JSONModel,MessageToast) => {
    "use strict";

    return Controller.extend("ns.royalenfield.controller.RERideForm", {
        onInit: function () {
                // Attach route matcher for the 'bikeForm' route
                console.log("hI")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("bikeForm").attachMatched(this.onObjectMatched, this);
            },

            onbackToTestRide:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("rETestRide");
            },

            onObjectMatched: function (oEvent) {
                var oArgs = oEvent.getParameter("arguments");
                var selectedItem = oArgs.bike; // Retrieve the 'bike' parameter from the route
                console.log(selectedItem)
                // Check which bike is selected and call the respective method
                if (selectedItem === "1") {
                    this.bikeOne();
                } else if (selectedItem === "2"){
                    this.bikeTwo();
                }
                else if (selectedItem === "3"){
                    this.bikeThree();
                }
                else if (selectedItem === "4"){
                    this.bikeFour();
                }
                else if (selectedItem === "5"){
                    this.bikeFive();
                }
                else if (selectedItem === "6"){
                    this.bikeSix();
                }
                else if (selectedItem === "7"){
                    this.bikeSeven();
                }
                else if (selectedItem === "8"){
                    this.bikeEight();
                }
                else if (selectedItem === "9"){
                    this.bikeNine();
                }
                else if (selectedItem === "10"){
                    this.bikeTen();
                }
                else if (selectedItem === "11"){
                    this.bikeEleven();
                }
                else{
                    this.bikeTwelve();
    }
},

            bikeOne: function () {
                // Set the image for bike one
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/bear-650/book-a-test-ride/bear-650-300x210.png",
                    textda: "Bear 650"
                });
                this.getView().setModel(oModel);   
            },

            bikeTwo: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/book-a-test-ride/book-a-test-ride-300x210.png",
                    textda: "Classic 350"
                });
                this.getView().setModel(oModel);   
            },
            bikeThree: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/guerrilla-450-300x210.jpg",
                    textda: "Guerrilla 450"
                });
                this.getView().setModel(oModel);   
            },
            bikeFour: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/book-a-test-ride/book-a-test-ride-300x210.png",
                    textda: "Hunter 350"
                });
                this.getView().setModel(oModel);   
            },
            bikeFive: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/book-a-test-ride/ga-book-test-ride/thumbnail/royal-enfield-scram-11-300x210.png",
                    textda: "Scram 411"
                });
                this.getView().setModel(oModel);   
            },
            bikeSix: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/meteor-350/thumbnail/meteor-300x210.png",
                    textda: "Meteor 350"
                });
                this.getView().setModel(oModel);   
            },
            bikeSeven: function () {
                
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/interceptor/new/interceptor-book-a-test-ride-300x210.png",
                    textda: "Interceptor 650"
                });
                this.getView().setModel(oModel);   
            },
            bikeEight: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/continental-gt/new/continental-gt-book-a-test-ride-300x210.png",
                    textda: "Continental GT 650"
                });
                this.getView().setModel(oModel);   
            },
            bikeNine: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/book-a-test-ride/book-a-test-ride-300x210.png",
                    textda: "Shotgun 650"
                });
                this.getView().setModel(oModel);   
            },
            bikeTen: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/new-himalayan-300x210.jpg",
                    textda: "Himalayan"
                });
                this.getView().setModel(oModel);   
            },
            bikeEleven: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/bullet/bullet-350-300x210.png",
                    textda: "Bullet 350"
                });
                this.getView().setModel(oModel);   
            },
            bikeTwelve: function () {
                  
                var oModel = new JSONModel({
                    dynamicImageSrc: "https://www.royalenfield.com/content/dam/royal-enfield/super-meteor-650/motorcycles/forms/book-test-ride-300x210.png",
                    textda: "Super Meteor 650"
                });
                this.getView().setModel(oModel);   
            },


            onMobileNumberChange: function (oEvent) {
                var mobileNumberRegex = /^[0-9]{10}$/;
                var input = oEvent.getSource();
                var inputValue = input.getValue();
     
                if (!mobileNumberRegex.test(inputValue)) {
                    input.setValueState("Error");
                    input.setValueStateText("Invalid Mobile Number. Please enter a 10-digit number.");
                } else {
                    input.setValueState("None");
                    input.setValueStateText("");
                }
            },

            onEmailChange: function (oEvent) {
                var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|microsoft\.com)$/;
                var input = oEvent.getSource(); 
                var inputValue = input.getValue().trim(); 
            
                if (!emailRegex.test(inputValue)) {
                    input.setValueState("Error");
                    input.setValueStateText("Invalid Email ID. Please use @gmail.com or @microsoft.com.");
                } else {
                    input.setValueState("None");
                    input.setValueStateText("");
                }
            },

            onFirstNameChange: function (oEvent) {
                var input = oEvent.getSource();
                var inputValue = input.getValue();
     
                if (!inputValue) {
                    input.setValueState("Error");
                    input.setValueStateText("Name should not be empty");
                } 
            },
            

            onSave: function () {
 
                var oModel = this.getView().getModel("samp");
                console.log(oModel);
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
                 
                var oEntry = {
                    id: generateUUID(),
                firstName: this.getView().byId("firstName").getValue(),
                lastName:this.getView().byId("lastName").getValue(),
                emailId: this.getView().byId("email").getValue(),
                mobileNumber: this.getView().byId("mobileNumber").getValue(),
                pincode:this.getView().byId("pincode").getValue()
              };
              console.log(oEntry);
              oModel.create("/BookTestRide",oEntry,{
                method:"POST",
                success:function(){
                  MessageToast.show("Test ride is booked");
                }        
              })
              }


        });
    });
