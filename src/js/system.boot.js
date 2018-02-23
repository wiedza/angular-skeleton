// =====================================================================
// GLOBALES VALUES
// =====================================================================
var CONTEXT_PATH   = "/";
var RESOURCES_PATH = "/js/";
var APP_PATH       = RESOURCES_PATH+"app";
var VENDOR_PATH    = RESOURCES_PATH+"vendors";

// =====================================================================
// SYSTEM JS CONFIG
// =====================================================================
(function(global) {
    var config = {
        transpiler: 'typescript',
        typescriptOptions: {
        emitDecoratorMetadata: true
        },
        bundles: {
          "/js/vendors/rxjs/Rx.system.min.js": [
            "rxjs",
            "rxjs/*",
            "rxjs/operator/*",
            "rxjs/operators/*",
            "rxjs/observable/*",
            "rxjs/scheduler/*",
            "rxjs/symbol/*",
            "rxjs/add/operator/*",
            "rxjs/add/observable/*",
            "rxjs/util/*"
          ]
        },
        packages: {
            '/js': {
                defaultExtension: 'ts'
            },
            '/js/vendors': {
                defaultExtension: 'js'
            }
        },
        map:{
"js/app/controllers"                	: APP_PATH+"/controllers",
"js/app/components"                 	: APP_PATH+"/components",
"js/app/scopes"                     	: APP_PATH+"/scopes",
"js/app/models"                     	: APP_PATH+"/models",
"js/app/services"                   	: APP_PATH+"/services",

"@angular/router"                   	: VENDOR_PATH+"/@angular/router/bundles/router.umd.min",
"@angular/core"                     	: VENDOR_PATH+"/@angular/core/bundles/core.umd.min",
"@angular/common"                   	: VENDOR_PATH+"/@angular/common/bundles/common.umd.min",
"@angular/http"                     	: VENDOR_PATH+"/@angular/http/bundles/http.umd.min.js",
"@angular/platform-browser-dynamic" 	: VENDOR_PATH+"/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min",
"@angular/compiler"                 	: VENDOR_PATH+"/@angular/compiler/bundles/compiler.umd.min",
"@angular/platform-browser"         	: VENDOR_PATH+"/@angular/platform-browser/bundles/platform-browser.umd.min",
"@angular/forms"                    	: VENDOR_PATH+"/@angular/forms/bundles/forms.umd.min",
"@angular/platform-browser/animations"	: VENDOR_PATH+"/@angular/platform-browser/bundles/platform-browser-animations.umd.min",
"@angular/animations/browser"			: VENDOR_PATH+"/@angular/animations/bundles/animations-browser.umd.min",
"@angular/animations"				 	: VENDOR_PATH+"/@angular/animations/bundles/animations.umd.min",

        }
    };

    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    SystemJS.config(config);
    SystemJS.import(APP_PATH+'/app.boot.ts').then(function (m) {
        console.log(m);
    });

})(this);