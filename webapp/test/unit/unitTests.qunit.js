/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"z00/modelos/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
