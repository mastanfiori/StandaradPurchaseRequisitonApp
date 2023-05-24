/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/mvc/Controller"],function(C){"use strict";return C.extend("ui.ssuite.s2p.mm.pur.pr.prcss.s1.controller.BaseController",{getRouter:function(){return sap.ui.core.UIComponent.getRouterFor(this);},setTestMode:function(b){this.getOwnerComponent().getComponentData().testMode=b;},getTestMode:function(){return this.getOwnerComponent().getComponentData().testMode;},getModel:function(n){return this.getView().getModel(n);},setModel:function(m,n){return this.getView().setModel(m,n);},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle();},onShareEmailPress:function(){var v=(this.getModel("objectView")||this.getModel("worklistView"));sap.m.URLHelper.triggerEmail(null,v.getProperty("/shareSendEmailSubject"),v.getProperty("/shareSendEmailMessage"));}});});