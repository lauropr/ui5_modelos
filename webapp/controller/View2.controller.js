sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",    //declara a dependência da classe JSON Model p/ carregamento
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, History, Fragment) {
        "use strict";

        return Controller.extend("z00.modelos.controller.View2", {
            onInit: function () {
                let oRouter = this.getOwnerComponent().getRouter();

                oRouter.getRoute("RouteFragmento1").attachPatternMatched(this.carregarFragmento1, this);
                oRouter.getRoute("RouteFragmento2").attachPatternMatched(this.carregarFragmento2, this);
            },

            carregarFragmento1: function(){
                let oView = this.getView(); 

                //carrega fragmento
                Fragment.load({
                    name: "z00.modelos.view.fragment.primeiroFragmento",
                    id: oView.getId()   
                }).then(function(oFragment){
                    let oPage = oView.byId("page2");
                    oPage.removeContent(0);
                    oPage.insertContent(oFragment);
                });

            },

            carregarFragmento2: function(){
                let oView = this.getView(); 

                //carrega fragmento
                Fragment.load({
                    name: "z00.modelos.view.fragment.segundoFragmento",
                    id: oView.getId()   
                }).then(function(oFragment){
                    let oPage = oView.byId("page2");
                    oPage.removeContent(0);
                    oPage.insertContent(oFragment);
                });

            },

            aoVoltar: function(){
                // var oRouter = this.getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView1", true);
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                }
            }

        });
    });
