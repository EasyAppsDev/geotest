webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, plt) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.userData = {};
        this.status = '';
        this.status2 = 'Sin definir';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getUserPosition().then(function (available) {
            window.geofence.initialize().then(function (initStatus) {
                console.log("Geofence inicializado OK", initStatus);
                _this.definirTransition();
            }).catch(function (error) {
                console.error(error);
            });
        }, function (error) { return console.log(error); });
    };
    HomePage.prototype.addGeofence = function () {
        var _this = this;
        var fence = {
            id: '69ca1b88',
            latitude: 8.8948483,
            longitude: -84.2410,
            radius: 2000,
            transitionType: 2,
            notification: {
                id: 1,
                title: 'test titulo',
                text: 'test body',
                openAppOnClick: true //open app when notification is tapped
            }
        };
        window.geofence.addOrUpdate(fence).then(function () {
            console.log('Geofence agregado');
            _this.status2 = 'Fence agregado';
        }, function (err) { console.log('Geofence failed to add'); });
    };
    HomePage.prototype.definirTransition = function () {
        var _this = this;
        window.geofence.onTransitionReceived = function (geofences) {
            _this.status = 'Transicion detectada!';
            _this.status2 = '';
            geofences.forEach(function (geo) {
                console.log("Geofence transition detected", geo);
            });
        };
        window.geofence.onNotificationClicked = function (notificationData) {
            console.log("App opened from Geo Notification!", notificationData);
        };
        this.status = 'Geofence configurado OK';
    };
    HomePage.prototype.getUserPosition = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var HIGH_ACCURACY = 'high_accuracy';
            cordova.plugins.diagnostic.isLocationEnabled(function (enabled) {
                if (enabled) {
                    cordova.plugins.diagnostic.getLocationMode(function (locationMode) {
                        if (locationMode === HIGH_ACCURACY) {
                            navigator.geolocation.watchPosition(function (pos) {
                                console.log(pos);
                                resolve({
                                    coords: {
                                        latitude: pos.coords.latitude,
                                        longitude: pos.coords.longitude
                                    }
                                });
                            }, function (error) { resolve(error); }, {
                                timeout: 30000,
                                maximumAge: 0,
                                enableHighAccuracy: true
                            });
                        }
                        else {
                            _this.askForHighAccuracy().then(function (available) {
                                if (available) {
                                    _this.getUserPosition().then(function (a) { return resolve(a); }, function (e) { return resolve(e); });
                                }
                            }, function (error) { return resolve(error); });
                        }
                    }, function (error) { return resolve(error); });
                }
                else {
                    cordova.plugins.locationAccuracy.request(function (result) {
                        if (result) {
                            _this.getUserPosition().then(function (result) { return resolve(result); }, function (error) { return resolve(error); });
                        }
                    }, function (error) {
                        resolve(error);
                    }, 1);
                }
            }, function (error) {
                resolve(error);
            });
        });
    };
    HomePage.prototype.askForHighAccuracy = function () {
        return new Promise(function (resolve) {
            cordova.plugins.locationAccuracy.request(function () {
                navigator.geolocation.watchPosition(function (position) {
                    resolve(position);
                }, function (error) { resolve(error); }, { timeout: 30000 });
            }, function (error) { resolve(error); }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jose/Documents/geofence/ionicgeo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      test P G\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n  <p>\n   Prueba de push y geofence en un proyecto Ionic, esta prueba es para verificar que sobre las librerias para los servicios push y geofence.\n  </p>\n<br>\n  <ion-label>\n    Plugin Geofence: {{ status }}\n    <br>\n    Fence: {{ status2 }}\n  </ion-label>\n\n\n<!-- \n  <input type="text" name="" [(ngModel)]="userData.lat" style="border:solid 1px red" placeholder="lat">\n   <input type="text" name="" [(ngModel)]="userData.lon" style="border:solid 1px red" placeholder="lon">\n   <br>\n     <input type="number" name="" [(ngModel)]="userData.tipo" style="border:solid 1px red" placeholder="tipo">\n\n        <br>\n     <input type="number" name="" [(ngModel)]="userData.id" style="border:solid 1px red" placeholder="id"> -->\n\n  <button ion-button full (click)="addGeofence()" >Agregar fence</button>\n <!--   \n <button ion-button full (click)="ping()" >ping</button>\n        <button ion-button full (click)="oblig()" >oblig</button>\n                <button ion-button full (click)="locaa()" >lca</button>\n                   <button ion-button full (click)="cola()" >cola</button>\n   <button ion-button full (click)="addGeofence2()" >Add fence2</button>\n    <button ion-button full (click)="addGeofence3()" >Add fence3</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/geofence/ionicgeo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*
  providers: [
    StatusBar,
    SplashScreen,
    Geofence,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            /*
            cordova.plugins.backgroundMode.setEnabled(true);
                  cordova.plugins.backgroundMode.on('activate', function() {
               cordova.plugins.backgroundMode.disableWebViewOptimizations();
            });
            cordova.plugins.backgroundMode.overrideBackButton();
            */
            /*
                 if(window.geofence){
            
                       window.geofence.initialize().then((initStatus) => {
                    console.log("Geofence Plugin has been initialized", initStatus);
                    window.geofence.onTransitionReceived = function (geofences) {
                      geofences.forEach(function (geo) {
                        console.log("Geofence transition detected", geo);
                      });
                    };
            
            
                    window.geofence.onNotificationClicked = function (notificationData) {
                      console.log("App opened from Geo Notification!", notificationData);
                    };
                  }).catch((error) => {
                  console.error('err');
                    console.error(error);
                  });
            
                }
            */
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jose/Documents/geofence/ionicgeo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jose/Documents/geofence/ionicgeo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map