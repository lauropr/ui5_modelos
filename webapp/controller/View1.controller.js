sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"    //declara a dependência da classe JSON Model p/ carregamento
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("z00.modelos.controller.View1", {
            onInit: function () {

                var oModeloLocal = new JSONModel();
                if(oModeloLocal){
                    console.log("Modelo local está disponível!");
                }
                
                //carrega o Modelo Local com o arquivo pessoa.json da pasta model
                oModeloLocal.loadData("../model/pessoa.json");
                //criar nova propriedade 
                oModeloLocal.dataLoaded().then(function(){
                    oModeloLocal.setProperty("/novoTexto", "Criado pelo controller" );
                })

                
                //acessa view
                let oView = this.getView();
                //vincula o modelo local à view
                oView.setModel(oModeloLocal, "colaboradorLocal");
                //checa se modelo está carregado
                var oModel = this.getOwnerComponent().getModel("colaborador");
                if(oModel){
                    console.log("Modelo está visível!");
                }

                //checa se modelo sem nome está carregado
                let oModelSemNome = this.getOwnerComponent().getModel();
                if(oModelSemNome){
                    console.log("Modelo sem nome também está visível!");
                }                

            },

            aoApertar: function(){
                //acessar o roteador
                var oRouter = this.getOwnerComponent().getRouter();

                //navega para a segunda rota
                oRouter.navTo("RouteView2");
                
            },

            aoApertarFragmento1: function(){
                //acessar o roteador
                var oRouter = this.getOwnerComponent().getRouter();

                //navega para a segunda rota
                oRouter.navTo("RouteFragmento1");

            },

            aoApertarFragmento2: function(){
                //acessar o roteador
                var oRouter = this.getOwnerComponent().getRouter();

                //navega para a segunda rota
                oRouter.navTo("RouteFragmento2");

            }


        });
    });
