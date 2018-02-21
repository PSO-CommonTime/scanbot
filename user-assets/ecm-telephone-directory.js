/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_client__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_client__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__src_client__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_events__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_events__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__src_events__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_handlers__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_handlers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_models__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__src_models__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_store_state__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_store_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_store_state__);
/* unused harmony reexport State */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_views__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__src_views__);
/* unused harmony reexport ViewRegistration */
/* unused harmony reexport ViewRegistrations */









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_components__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_components__["e"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_config__);
/* unused harmony reexport AppConfig */
/* unused harmony reexport RestConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clientManager__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__clientManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_client_rest_client__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__rest_client_rest_client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__websockets_ws_client__ = __webpack_require__(33);
/* unused harmony reexport WebSocketClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__utils__["b"]; });







/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_args__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["b"]; });
class ClientEvents {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientEvents;

// Client Manager Ready
ClientEvents.ClientManagerReady = "client-manager-ready";
// Popout Menu Events
ClientEvents.OpenPopoutMenu = "open-popout-menu";
ClientEvents.ClosePopoutMenu = "close-popout-menu";
ClientEvents.SearchComplete = "search-complete";
// Signatures
ClientEvents.SignatureCaptured = "signature-captured";
ClientEvents.ClearSignature = "clear-signature";
ClientEvents.DrawSignature = "draw-signature";



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ECMViews = {
    Login: { tag: "view-login", title: "Login", uri: "", default: true },
    Directory: { tag: "view-directory", title: "Directory", uri: "directory" },
    Help: { tag: "view-help", title: "Help", uri: "help" }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ECMViews;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_classes__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_classes__);
/* unused harmony reexport AppClasses */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handler_classes__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handler_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__handler_classes__);
/* unused harmony reexport HandlerClasses */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(29);
/* unused harmony reexport IconContainer */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__icon__["a"]; });
/* unused harmony reexport IconDefinition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabbed_navigator_button__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabbed_navigator_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tabbed_navigator_button__);
/* unused harmony reexport TabbedNavigatorButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_client__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__rest_client__["a"]; });
/* unused harmony reexport ApiResult */
/* unused harmony reexport QueryParam */
/* unused harmony reexport RequestBody */
/* unused harmony reexport MessageEntity */
/* unused harmony reexport RequestHeaders */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockets__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sockets__);
/* unused harmony reexport SocketConfig */
/* unused harmony reexport WSMessageWrapper */
/* unused harmony reexport WSOutboundMessage */








/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_header_header__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_components_header_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_loading_spinner_loading_spinner__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_components_loading_spinner_loading_spinner__["a"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_models_ecm_icons__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_models_ecm_icons__["a"]; });



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = changeTheme;
/* harmony export (immutable) */ __webpack_exports__["c"] = combineOriginalArrayWithUpdates;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteFromArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = alertPopup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert2__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function changeTheme(theme) {
    document.querySelector("html").setAttribute("theme", theme);
}
function combineOriginalArrayWithUpdates(originalArray, updatedArray, identifyingProperty) {
    const original = originalArray || [];
    const updated = updatedArray || [];
    const identifier = identifyingProperty || "id";
    if (!Array.isArray(updated)) {
        return;
    }
    const idFinder = el => el[identifier];
    updated.forEach(el => {
        const index = original.map(idFinder).indexOf(el[identifier]);
        if (index > -1) {
            original[index] = el;
        }
        else {
            original.push(el);
        }
    });
    return original;
}
function deleteFromArray(originalArray, elementsToDelete, identifyingProperty) {
    const original = originalArray || [];
    const toDelete = elementsToDelete || [];
    const identifier = identifyingProperty || "id";
    if (!Array.isArray(toDelete)) {
        return;
    }
    const idFinder = el => el[identifier];
    toDelete.forEach(el => {
        const index = original.map(idFinder).indexOf(el[identifier]);
        if (index > -1) {
            originalArray.splice(index, 1);
        }
    });
    return original;
}
function alertPopup(options) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line
        const swalOptions = {
            title: options.title || "",
            text: options.text || "",
            type: options.type || "information",
            allowEnterKey: options.allowEnterKey || true,
            allowEscapeKey: options.allowEscapeKey || false,
            allowOutsideClick: options.allowOutsideClick || false,
            cancelButtonClass: options.cancelButtonClass || "",
            cancelButtonText: options.cancelButtonText || "Cancel",
            confirmButtonClass: options.confirmButtonClass || "",
            confirmButtonText: options.confirmButtonText || "OK",
            showCancelButton: options.showCancelButton || false,
            showConfirmButton: options.showConfirmButton || true
        };
        const result = yield __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()(swalOptions);
        if (result.dismiss) {
            return resolve(false);
        }
        return resolve(true);
    }));
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let LoadingSpinner = class LoadingSpinner extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on("start-spinner" /* StartSpinner */, () => this.showing = true);
        this.manager.on("stop-spinner" /* StopSpinner */, () => this.showing = false);
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(81)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["h" /* Icon */], { icon: __WEBPACK_IMPORTED_MODULE_1_models__["a" /* ECMIcons */].IcoMoon.Spinner, spin: true, width: "48", height: "48" })));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Boolean, attribute: true, default: false })
], LoadingSpinner.prototype, "showing", void 0);
LoadingSpinner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: "wc-loading-spinner" })
], LoadingSpinner);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_router_router__ = __webpack_require__(25);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ClientManager {
    // === Constructor === //
    constructor(appContainer, defaultView, config, views, appClasses, handlers) {
        this.events = {};
        // Message Events
        this._messageHandlers = new Map();
        this._messageProcessorQueue = Promise.resolve();
        // === Public === //
        this.isReady = false;
        this.name = "infinityFramework";
        this.config = config;
        this.appClasses = appClasses;
        this.handlers = handlers;
        this.appContainer = appContainer;
        this.views = views;
        ClientManager.Registrations.set(this.name, this);
        if (!window.cti) {
            const store = new appClasses.store(this.name);
            this.bootstrap(store, appClasses);
        }
    }
    static GetRegistration(name) {
        return ClientManager.Registrations.get(name);
    }
    static FireReady() {
        document.dispatchEvent(new CustomEvent(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* ClientEvents */].ClientManagerReady));
    }
    bootstrap(store, appClasses) {
        return Promise.resolve()
            .then(() => this._setStore(store))
            .then(() => this._setRestClient(appClasses))
            .then(() => this._setRouter())
            .then(() => this._setupHandlers())
            .then(() => this._bindStartupEvents())
            .then(() => {
            this.isReady = true;
            ClientManager.FireReady();
        });
    }
    _setStore(store) {
        return new Promise(resolve => {
            this.store = store;
            this.store.init().then(() => resolve());
        });
    }
    _setRestClient(appClasses) {
        return new Promise(resolve => {
            this.rest = new appClasses.rest(this.config.rest, this.store);
            resolve();
        });
    }
    _setRouter() {
        return new Promise(resolve => {
            this.router = new __WEBPACK_IMPORTED_MODULE_1__client_router_router__["a" /* Router */](this.appContainer, this.views, (view) => this.unloadEvents(view));
            resolve();
        });
    }
    _setupHandlers() {
        return new Promise(resolve => {
            const handlers = Object.keys(this.handlers).map(x => new this.handlers[x](this));
            handlers.map(handler => {
                if (handler.messageType) {
                    this._messageHandlers.set(handler.messageType, handler);
                }
                if (handler.eventType && handler.eventType.length) {
                    handler.eventType.forEach(eventType => {
                        this.on(eventType, (e) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                yield handler.callHandleEvent(eventType, e);
                            }
                            catch (ex) {
                                // tslint:disable-next-line no-console
                                console.error("Error handling event", `Event type: ${eventType.toString()}. ${ex.message || ex}`);
                            }
                        }), true);
                    });
                }
            });
            resolve();
        });
    }
    _bindStartupEvents() {
        return new Promise(resolve => {
            document.addEventListener("click", () => this.emit(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* ClientEvents */].ClosePopoutMenu));
            resolve();
        });
    }
    // === Events === //
    // tslint:disable-next-line no-any
    on(key, handler, global = false) {
        const currPage = this.router.currentPage.tag;
        const events = this.events[key];
        if (events) {
            events.push({
                page: !global ? currPage : null,
                handler: handler
            });
        }
        else {
            this.events[key] = [{
                    page: !global ? currPage : null,
                    handler: handler
                }];
        }
    }
    // tslint:disable-next-line no-any
    emit(key, data) {
        const events = this.events[key];
        if (events) {
            events.map(x => x.handler(data));
        }
    }
    unloadEvents(prevView) {
        Object.keys(this.events).map(x => {
            this.events[x] = this.events[x].filter(e => e.page !== prevView.tag);
        });
    }
    _handleNewWSMessage(message) {
        const handler = this._messageHandlers.get(message.action);
        if (!handler) {
            return;
        }
        this._messageProcessorQueue = this._messageProcessorQueue
            .then(() => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield handler.callHandleMessage(message);
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error("Error processing message", ex);
            }
        }))
            .catch(ex => {
            // tslint:disable-next-line no-console
            console.error("Error processing message", ex);
        });
    }
    // === Public === //
    triggerBootstrap() {
        this.bootstrap(new this.appClasses.store(this.name), this.appClasses);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientManager;

// === Static === //
ClientManager.Registrations = new Map();


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_args__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_args__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ws_event_args__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ws_event_args__["a"]; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__decorators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__decorators__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseComponent__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__BaseComponent__["a"]; });




/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = skate;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_clientManager__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(4);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// tslint:disable typedef
// tslint:disable no-any
window.__CTRender = window.skate.h;
class BaseComponent extends __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__["Component"] {
    constructor() {
        super(...arguments);
        this.managerName = "infinityFramework";
    }
    // === Private === //
    _bindManager(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            this.manager = __WEBPACK_IMPORTED_MODULE_1__client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
            if (this.manager) {
                this._setupEventListeners();
                yield this._init();
            }
        });
    }
    // === Lifecycle Events === //
    connectedCallback() {
        super.connectedCallback();
        const manager = __WEBPACK_IMPORTED_MODULE_1__client_clientManager__["a" /* ClientManager */].GetRegistration(this.managerName);
        if (!manager || !manager.isReady) {
            document.addEventListener(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* ClientEvents */].ClientManagerReady, (ev) => this._bindManager(ev));
        }
        else {
            this.manager = manager;
            this._setupEventListeners();
            Promise.resolve().then(() => __awaiter(this, void 0, void 0, function* () { return yield this._init(); }));
        }
    }
    // === Render function === //
    renderCallback() {
        const styles = ensureArray(this.componentStyles());
        const html = ensureArray(this.componentMarkup
            ? this.componentMarkup() || []
            : []);
        return [
            ...styles,
            ...html
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseComponent;

function ensureArray(value) {
    return (value instanceof Array)
        ? value
        : [value];
}
// tslint:enable no-any
// tslint:enable typedef


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Icon = class Icon extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(45)));
    }
    componentMarkup() {
        if (!this.icon) {
            return null;
        }
        const styles = Object(__WEBPACK_IMPORTED_MODULE_1__client__["c" /* buildStyles */])({
            fill: this.color !== "auto"
                ? this.color
                : window.getComputedStyle(this.parentElement).color,
            width: this.width,
            height: this.height
        });
        const viewBox = this.icon.viewBox || "0 0 1024 1024";
        const svgPaths = (this.icon.paths || []);
        return (window.__CTRender("svg", { width: this.width, height: this.height, viewBox: viewBox, style: styles }, svgPaths.map((path, idx) => (window.__CTRender("path", { d: path })))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18" })
], Icon.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18" })
], Icon.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "auto" })
], Icon.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], Icon.prototype, "spin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Object, attribute: false, default: null })
], Icon.prototype, "icon", void 0);
Icon = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-icon" })
], Icon);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_views_register__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let AppMenu = class AppMenu extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Protected === //
        this._close = () => {
            this.manager.emit("close-modal" /* CloseModal */, this.id);
        };
        // === Private === //
        this._switchTheme = () => __awaiter(this, void 0, void 0, function* () {
            const theme = this.manager.store.getTheme() ? "" : "dark";
            yield this.manager.store.setTheme(theme);
            this.theme = theme;
            Object(__WEBPACK_IMPORTED_MODULE_3_client_utils__["b" /* changeTheme */])(theme);
        });
        this._fakeUpdate = () => __awaiter(this, void 0, void 0, function* () {
            this.manager.emit("close-modal" /* CloseModal */);
            this.manager.emit("directory-update" /* DirectoryUpdate */);
            this.manager.emit("data-refresh" /* DataRefresh */);
        });
        this._refresh = () => __awaiter(this, void 0, void 0, function* () {
            this.manager.emit("close-modal" /* CloseModal */);
            this.manager.emit("start-spinner" /* StartSpinner */);
            yield this.manager.downloadFullDirectory();
            this.manager.emit("stop-spinner" /* StopSpinner */);
            this.manager.emit("data-refresh" /* DataRefresh */);
        });
        this._logout = () => __awaiter(this, void 0, void 0, function* () {
            this.manager.router.goToPage(__WEBPACK_IMPORTED_MODULE_4_views_register__["a" /* ECMViews */].Login);
        });
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.theme = this.manager.store.getTheme();
        });
    }
    _setupEventListeners() {
        this.manager.on("toggle-modal" /* ToggleModal */, (args) => __awaiter(this, void 0, void 0, function* () {
            if (args.id === this.id) {
                this.open = !this.open;
            }
        }));
        this.manager.on("close-modal" /* CloseModal */, () => this.open = false);
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(86)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "modal-container" },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_1_components__["a" /* ECMHeader */], { icons: [
                    window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["i" /* IconButton */], { icon: __WEBPACK_IMPORTED_MODULE_2_models__["a" /* ECMIcons */].IcoMoon.Cross, width: "20", height: "20", onClick: this._close })
                ], title: "Menu", subtitle: "Version 0.0.6" }),
            window.__CTRender("div", { className: "modalButtons" },
                !this.theme
                    ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "primary", action: this._switchTheme }, "Use Dark Theme")
                    : window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "primary", action: this._switchTheme }, "Use Light Theme"),
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "primary", action: this._refresh }, "Refresh"),
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "primary", action: this._fakeUpdate }, "Fake an update"),
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "primary", action: this._logout }, "Logout"))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Boolean, attribute: true, default: false })
], AppMenu.prototype, "open", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false })
], AppMenu.prototype, "theme", void 0);
AppMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: "wc-app-menu" })
], AppMenu);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);

class ModalEventArgs extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["f" /* EventArgs */] {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModalEventArgs;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_views_register__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_manager__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_store__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_rest_client_rest_client__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_handlers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_views_login_login__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return __WEBPACK_IMPORTED_MODULE_5_views_login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_views_directory_directory__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return __WEBPACK_IMPORTED_MODULE_6_views_directory_directory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_views_help_help__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return __WEBPACK_IMPORTED_MODULE_7_views_help_help__["a"]; });





// Your views, extend as necessary...



// Use this to link to your own custom implementations of
// classes like the Store / Rest Client / etc...
const myCustomClasses = {
    store: __WEBPACK_IMPORTED_MODULE_2_store_store__["a" /* MyAppStore */],
    rest: __WEBPACK_IMPORTED_MODULE_3_client_rest_client_rest_client__["a" /* MyRestClient */]
};
const myAppConfig = {
    rest: {
        // baseUri: "http://35.176.107.156:8080/ecm/"
        // baseUri: "https://epod-appsrv-dev-dev.azurewebsites.net/api/",
        baseUri: "https://epod-appsrv-uat.azurewebsites.net/api/"
    }
};
const myAppHandlers = {
    dataHandler: __WEBPACK_IMPORTED_MODULE_4_handlers__["a" /* TelephoneDirectoryHandlers */].dataHandler
};
// This is needed to init everything. You could defer this
// into a custom JS script (for example, when inside CTI).
window.ecmTD = new __WEBPACK_IMPORTED_MODULE_1_client_manager__["a" /* TelephoneDirectoryManager */]("body", "view-login", myAppConfig, __WEBPACK_IMPORTED_MODULE_0_views_register__["a" /* ECMViews */], myCustomClasses, myAppHandlers);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class TelephoneDirectoryManager extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["e" /* ClientManager */] {
    // === Constructor === //
    constructor(appContainer, defaultView, config, views, appClasses, handlers) {
        super(appContainer, defaultView, config, views, appClasses, handlers);
    }
    // === Public === //
    dialNumber(telNo) {
        return new Promise((resolve, reject) => {
            if (window.cordova && window.phonedialer) {
                // TODO: add any kind of other parsing required
                const no = telNo.replace(" ", "");
                window.phonedialer.dial(no, reject, resolve);
            }
            else {
                // tslint:disable-next-line no-console
                reject("No dialer available");
            }
        });
    }
    downloadFullDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.setLastUpdated();
            const dir = yield this.rest.syncDirectory();
            yield this.store.setDirectory(dir);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TelephoneDirectoryManager;



/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventArgs {
    constructor() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventArgs;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_args__ = __webpack_require__(12);

class WSEventArgs extends __WEBPACK_IMPORTED_MODULE_0__event_args__["a" /* EventArgs */] {
    // tslint:disable-next-line no-any
    constructor(action, payload) {
        super();
        this.action = action;
        this.payload = payload;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WSEventArgs;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Router {
    // === Constructor === //
    constructor(appContainer, views, routeCallback) {
        this.routeCallback = routeCallback;
        this.appContainer = appContainer;
        this.views = views;
        this.defaultView = Object.keys(this.views).map(x => this.views[x]).find(x => x.default);
        this._bindEvents();
        this._firstLoad();
    }
    // === Private === //
    _bindEvents() {
        window.addEventListener("popstate", (e) => this._popState(e));
    }
    _firstLoad() {
        // We are running inside Electron
        if (window.process && window.process.type) {
            this._updateDom(this.defaultView);
        }
        else {
            let path = "";
            const idx = window.location.pathname.lastIndexOf("/");
            if (idx > -1) {
                path = window.location.pathname.substring(idx + 1);
                if (path === "index.html") {
                    // We are in Cordova and it's loading the default view
                    path = "";
                }
            }
            if (path === "") {
                this._updateDom(this.defaultView);
            }
            else {
                const view = Object.keys(this.views).map(x => this.views[x]).find(x => x.uri === path);
                this._updateDom(view);
            }
        }
    }
    _updateDom(view) {
        const container = document.getElementById(this.appContainer);
        if (container) {
            this.routeCallback(this.currentPage);
            this.currentPage = view;
            while (container.childNodes.length > 0) {
                container.childNodes[0].parentElement.removeChild(container.childNodes[0]);
            }
            const newView = document.createElement(view.tag);
            container.appendChild(newView);
            window.document.title = view.title;
        }
        else {
            // tslint:disable-next-line no-console
            console.error("No app container found.");
        }
    }
    _popState(e) {
        const previousView = e.state;
        if (previousView) {
            this._updateDom(previousView);
        }
        else {
            // We somehow lost our state
            this._updateDom(this.defaultView);
        }
    }
    // === Public === //
    goToPage(view) {
        window.history.pushState(view, "", view.uri);
        this._updateDom(view);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(6);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class RestClient {
    // === Constructor === //
    constructor(restConfig, store) {
        this.config = restConfig;
        this.store = store;
        this._resetRequestOptions();
    }
    // === Protected === //
    _generateQueryString(queryParams) {
        if (!queryParams) {
            return "";
        }
        return queryParams.reduce((acc, cur, idx) => {
            let query = "";
            // tslint:disable curly
            if (idx === 0)
                query += "?";
            else
                query += "&";
            // tslint:enable curly
            if (typeof cur.value !== "string") {
                cur.value = JSON.stringify(cur.value);
            }
            query += `${cur.key}=${encodeURIComponent(cur.value)}`;
            return acc += query;
        }, "");
    }
    _resetRequestOptions() {
        this.headers = new Headers();
        this.requestOptions = {
            headers: this.headers
        };
    }
    // tslint:disable-next-line no-any
    _sendMessage(uri, method, queryParams = [], body = {}, headers = {}, addToQueue = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config) {
                throw new Error("Rest client not properly configured.");
            }
            const messageEntity = {
                id: "",
                address: `${this.config.baseUri}${uri}`,
                verb: method,
                headers: headers,
                queryParams: queryParams,
                body: body,
                attemps: 0,
                lastAttempt: 0
            };
            if (addToQueue) {
                // TODO: Add to message queue
                yield this.store.saveToMessageQueue(messageEntity);
            }
            return yield this._httpRequest(messageEntity);
        });
    }
    // tslint:disable-next-line no-any
    _httpRequest(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let req;
            this.requestOptions = {
                headers: new Headers(Object.assign({}, msg.headers))
            };
            if (msg.verb === __WEBPACK_IMPORTED_MODULE_0__models__["a" /* HttpVerb */].GET) {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors"
                }, this.requestOptions);
                msg.address += this._generateQueryString(msg.queryParams);
            }
            else {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors",
                    body: JSON.stringify(msg.body)
                }, this.requestOptions);
            }
            const res = yield fetch(msg.address, req);
            const result = {
                error: !res.ok ? true : false,
                errorMessage: !res.ok ? `${res.status}: ${res.statusText}` : null,
                result: yield res.json()
            };
            // Remove from message queue if message was successful
            if (res.ok) {
                yield this.store.removeFromMessageQueue(msg);
            }
            else {
                ++msg.attemps;
                msg.lastAttempt = new Date().getTime();
            }
            this._resetRequestOptions();
            return result;
        });
    }
    // === Public === //
    processQueuedMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.getMessageQueue().forEach(x => this._httpRequest(x));
        });
    }
    // tslint:disable-next-line no-any
    exampleRequest(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                { key: "filename", value: param }
            ];
            try {
                const result = yield this._sendMessage("your-endpoint-address", __WEBPACK_IMPORTED_MODULE_0__models__["a" /* HttpVerb */].GET, queryParams);
                return result;
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.log("Error:", ex);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RestClient;



/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Icons = {
    FontAwesome: {
        Bars: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        ChevronRight: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"
            ]
        },
        Cog: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"
            ]
        },
        Cross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
            ]
        },
        CircleCross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M626.857 616.571l-83.429 83.429c-7.429 7.429-18.857 7.429-26.286 0l-78.286-78.286-78.286 78.286c-7.429 7.429-18.857 7.429-26.286 0l-83.429-83.429c-7.429-7.429-7.429-18.857 0-26.286l78.286-78.286-78.286-78.286c-7.429-7.429-7.429-18.857 0-26.286l83.429-83.429c7.429-7.429 18.857-7.429 26.286 0l78.286 78.286 78.286-78.286c7.429-7.429 18.857-7.429 26.286 0l83.429 83.429c7.429 7.429 7.429 18.857 0 26.286l-78.286 78.286 78.286 78.286c7.429 7.429 7.429 18.857 0 26.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            ]
        },
        Info: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-292.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571v-219.429h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v329.143h36.571c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v109.714c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-109.714c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        LeftArrow: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 512v73.143c0 38.857-25.714 73.143-66.857 73.143h-402.286l167.429 168c13.714 13.143 21.714 32 21.714 51.429s-8 38.286-21.714 51.429l-42.857 43.429c-13.143 13.143-32 21.143-51.429 21.143s-38.286-8-52-21.143l-372-372.571c-13.143-13.143-21.143-32-21.143-51.429s8-38.286 21.143-52l372-371.429c13.714-13.714 32.571-21.714 52-21.714s37.714 8 51.429 21.714l42.857 42.286c13.714 13.714 21.714 32.571 21.714 52s-8 38.286-21.714 52l-167.429 167.429h402.286c41.143 0 66.857 34.286 66.857 73.143z"
            ]
        },
        Logout: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"
            ]
        },
        PencilSquareO: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"
            ]
        },
        Plus: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            ]
        },
        Question: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
            ]
        },
        User: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            ]
        },
        Users: {
            viewBox: "0 0 1200 1200",
            paths: [
                "M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
            ]
        },
        Spinner: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1005.714 512c0 272.571-221.143 493.714-493.714 493.714s-493.714-221.143-493.714-493.714c0-248 182.857-453.143 420.571-488.571v130.286c-166.857 33.714-292.571 181.714-292.571 358.286 0 201.714 164 365.714 365.714 365.714s365.714-164 365.714-365.714c0-176.571-125.714-324.571-292.571-358.286v-130.286c237.714 35.429 420.571 240.571 420.571 488.571z"
            ]
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Icons;



/***/ }),
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpVerb; });
var HttpVerb;
(function (HttpVerb) {
    HttpVerb["GET"] = "get";
    HttpVerb["POST"] = "post";
    HttpVerb["PUT"] = "put";
    HttpVerb["PATCH"] = "patch";
    HttpVerb["DELETE"] = "delete";
})(HttpVerb || (HttpVerb = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(4);

class WebSocketClient {
    // === Constructor === //
    constructor(websocketConfig, messageCallback) {
        this.forceClose = false;
        // Determines if the client will handle automatic connection retries
        this.enableAutoReconnect = false;
        // Ping waiting time
        this.pingWaitingTime = 15000;
        // Time last ping was received
        this.lastPingReceived = 0;
        // MS to delay before trying to reconnect
        this.reconnectInterval = 5000;
        // Decay reconnect attempts in seconds
        this.reconnectDecay = 1.5;
        // Reconnection attempts
        this.reconnectAttempts = -1;
        this.config = websocketConfig;
        this.id = this.config.id;
        this.messageCallback = messageCallback;
        this.connect();
        this._bindEvents();
    }
    // === Private === //
    _bindEvents() {
        this.socket.onopen = (e) => this._onOpen(e);
        this.socket.onmessage = (m) => this._onMessage(m);
        this.socket.onclose = (e) => this._onClose(e);
    }
    // tslint:disable-next-line no-any
    _onOpen(event) {
        // tslint:disable-next-line no-console
        console.log(`Opened socket: ${this.config.uri}`, event);
        this.forceClose = false;
        if (this.enableAutoReconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectAttempts = -1;
            this.pingTimeout = setTimeout(() => this._pingTimeout(), this.pingWaitingTime);
        }
        this.sendMessage({ type: "register" });
    }
    _onClose(event) {
        // tslint:disable-next-line no-console
        console.log(`Closed socket: ${this.config.uri}`, event);
        // We have been disconnected by something, so attempt to reconnect
        if (this.enableAutoReconnect && !this.forceClose) {
            this.reconnect();
        }
    }
    _onMessage(message) {
        try {
            const data = JSON.parse(message.data);
            if (this.enableAutoReconnect && data.payload.type === "ping") {
                clearTimeout(this.pingTimeout);
                delete this.pingTimeout;
                this.sendMessage({ type: "ping-response" });
            }
            else {
                const args = new __WEBPACK_IMPORTED_MODULE_0__events__["c" /* WSEventArgs */](data.payload.action, data.payload.payload);
                this.messageCallback(args);
            }
        }
        catch (ex) {
            // tslint:disable-next-line no-console
            console.error(ex);
        }
    }
    _pingTimeout() {
        clearTimeout(this.pingTimeout);
        this.socket.close();
    }
    // === Public === //
    connect() {
        try {
            delete this.socket;
            this.socket = new WebSocket(this.config.uri);
            this._bindEvents();
        }
        catch (ex) {
            // tslint:disable-next-line no-console
            console.log("Websocket connection error:", ex);
            if (this.enableAutoReconnect) {
                this.reconnect();
            }
        }
    }
    disconnect() {
        this.forceClose = true;
        this.socket.close();
    }
    reconnect() {
        clearTimeout(this.reconnectTimeout);
        ++this.reconnectAttempts;
        const reconnectIn = this.reconnectInterval * Math.pow(this.reconnectDecay, this.reconnectAttempts);
        // tslint:disable-next-line no-console
        console.log("Attempting to reconnect in:", reconnectIn);
        this.reconnectTimeout = setTimeout(() => this.connect(), reconnectIn);
    }
    sendMessage(message) {
        if (!message.id) {
            message.id = this.config.id;
        }
        this.socket.send(JSON.stringify(message));
    }
    isConnected() {
        return this.socket.readyState === 1;
    }
}
/* unused harmony export WebSocketClient */



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildStyles;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCSSVariable;
// tslint:disable-next-line no-any
function buildStyles(definitions) {
    const element = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}
function getCSSVariable(cssVar) {
    const value = getComputedStyle(document.firstElementChild).getPropertyValue(cssVar);
    return value ? value.trim() : value;
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prop__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__prop__["a"]; });




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = component;
// tslint:disable no-any
function component(definition) {
    return (constructor) => {
        const existing = customElements.get(definition.tag);
        if (!existing) {
            customElements.define(definition.tag, constructor);
        }
        return class extends constructor {
            static get is() {
                return definition.tag;
            }
        };
    };
}
// tslint:enable no-any


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

const identityFn = (x) => x;
function prop(property) {
    return function (target, propertyKey) {
        // obtain properties provide by the @prop decorator
        const { type } = property, skPropConfig = __rest(property, ["type"]);
        // parse to find out the type of property
        const configType = parseType(type);
        // reference the skatejs prop function, e.g. prop.string
        const skatePropTypeFn = __WEBPACK_IMPORTED_MODULE_0_skatejs_src_index__["prop"][configType] || identityFn;
        // get constructor of element
        const ctor = target.constructor;
        // grab any existing props previously defined
        const existingProps = (ctor.props || {});
        // concatenate all props together
        const newProps = Object.assign({}, existingProps, { [propertyKey]: skatePropTypeFn(skPropConfig) });
        // apply to the current instance of the component
        Object.defineProperty(ctor, "props", {
            configurable: true,
            get() {
                return newProps;
            }
        });
    };
}
function parseType(type) {
    if (typeof type !== "function") {
        return;
    }
    const inst = type();
    if (inst instanceof Array) {
        return "array";
    }
    if (typeof inst === "object") {
        return "object";
    }
    return (typeof inst);
}
// tslint:enable no-any


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__icon_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_button_icon_button__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__icon_button_icon_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pill_pill__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popout_menu_popout_menu__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_box_search_box__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__search_box_search_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tab_navigator_tab_navigator__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__tab_navigator_tab_navigator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__touch_list_touch_list__ = __webpack_require__(62);
/* unused harmony namespace reexport */











/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let Button = class Button extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._performAction = () => {
            if (this.action) {
                this.action();
            }
        };
    }
    // === Init == //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(40)));
    }
    componentMarkup() {
        const cssClasses = [
            this.type
        ];
        if (this.selected) {
            cssClasses.push("selected");
        }
        if (this.large) {
            cssClasses.push("large");
        }
        if (this.isWaiting) {
            cssClasses.push("waiting");
        }
        if (this.isTransparent) {
            cssClasses.push("transparent");
        }
        const textColorStyles = Object(__WEBPACK_IMPORTED_MODULE_2__client__["c" /* buildStyles */])(!!this.textColor
            ? { color: this.textColor }
            : {});
        return (window.__CTRender("button", { class: cssClasses.join(" "), style: textColorStyles, disabled: this.isWaiting || this.disabled, onClick: this._performAction },
            window.__CTRender("div", { class: "button-content" },
                !this.isWaiting && !!this.icon
                    ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["c" /* Icon */], { icon: this.icon, color: this.iconColor, width: this.iconWidth, height: this.iconHeight, class: "icon" })
                    : null,
                this.isWaiting
                    ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["c" /* Icon */], { icon: __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Icons */].FontAwesome.Spinner, color: this.iconColor, width: this.iconHeight, height: this.iconHeight, spin: true, class: "icon" })
                    : window.__CTRender("div", { class: "label" },
                        window.__CTRender("slot", null)))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "transparent" })
], Button.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "auto" })
], Button.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "large", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], Button.prototype, "isTransparent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true })
], Button.prototype, "textColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "auto" })
], Button.prototype, "iconColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18px" })
], Button.prototype, "iconWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18px" })
], Button.prototype, "iconHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Object, attribute: false, default: null })
], Button.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: false, default: false })
], Button.prototype, "isWaiting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Function, attribute: false })
], Button.prototype, "action", void 0);
Button = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-button" })
], Button);



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(41);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block; }\n  :host button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    padding: 0.55em 1em;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%; }\n    :host button .button-content {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center; }\n      :host button .button-content .icon {\n        display: block; }\n      :host button .button-content .label {\n        display: block; }\n      :host button .button-content .icon + .label {\n        margin: 0 0 0 5px; }\n    :host button.transparent {\n      background-color: transparent; }\n    :host button.primary {\n      background-color: var(--app-primary-button-color);\n      color: var(--app-primary-button-font); }\n    :host button.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font);\n      border: 1px solid var(--app-secondary-button-border); }\n    :host button.popoutDanger {\n      color: var(--app-danger-button-color); }\n    :host button.popoutMenu {\n      background-color: var(--default-popout-button-bg);\n      color: var(--default-popout-button-font); }\n\n:host([class=\"withIcon\"]) button .button-content {\n  justify-content: flex-start;\n  width: 100%; }\n  :host([class=\"withIcon\"]) button .button-content wc-icon {\n    margin: auto 10px auto 5px; }\n  :host([class=\"withIcon\"]) button .button-content .label {\n    margin: auto auto auto 0;\n    width: auto; }\n    :host([class=\"withIcon\"]) button .button-content .label slot {\n      padding-top: 3px;\n      margin: auto 0; }\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Header */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Header = class Header extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(43)));
    }
    componentMarkup() {
        let styles = null;
        if (this.bgColor) {
            this.style.backgroundColor = this.bgColor;
            styles = Object(__WEBPACK_IMPORTED_MODULE_1__client__["c" /* buildStyles */])({
                color: Object(__WEBPACK_IMPORTED_MODULE_1__client__["d" /* getCSSVariable */])("--primary-color")
            });
        }
        return (window.__CTRender("div", { className: "container", style: styles },
            window.__CTRender("div", { className: "mainTitle" },
                this._renderIcon(this.leftIcon),
                window.__CTRender("h1", null, this.title),
                this._renderIcon(this.rightIcon)),
            this._renderSubtitle()));
    }
    _renderIcon(icon) {
        return (window.__CTRender("div", { className: "icon" }, icon));
    }
    _renderSubtitle() {
        if (!this.subtitle) {
            return null;
        }
        return (window.__CTRender("div", { className: "subtitle" },
            window.__CTRender("h3", null, this.subtitle)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: false, default: "" })
], Header.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: false, default: "" })
], Header.prototype, "subtitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: false, default: null })
], Header.prototype, "bgColor", void 0);
Header = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-header" })
], Header);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(44);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  width: 100vw;\n  padding: 0 20px;\n  background-color: var(--primary-color); }\n  :host div.container {\n    color: var(--primary-color-font); }\n    :host div.container div.mainTitle {\n      display: flex;\n      height: 6vh; }\n      :host div.container div.mainTitle h1 {\n        font-size: 18px;\n        text-align: center;\n        font-weight: 600;\n        margin: auto; }\n      :host div.container div.mainTitle div.icon {\n        margin: auto 0;\n        min-width: 40px;\n        cursor: pointer; }\n    :host div.container div.subtitle {\n      height: 6vh;\n      display: flex; }\n      :host div.container div.subtitle h3 {\n        margin: 0 auto;\n        font-weight: 300;\n        font-size: 16px; }\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(46);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: flex; }\n  :host svg {\n    margin: auto; }\n\n:host([spin]) {\n  -webkit-animation: spin 1s infinite linear; }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let IconButton = class IconButton extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._performAction = () => {
            if (this.action) {
                this.action();
            }
        };
    }
    // === Init == //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(48)));
    }
    componentMarkup() {
        const cssClasses = [
            this.type
        ];
        if (this.isWaiting) {
            cssClasses.push("waiting");
        }
        return (window.__CTRender("button", { class: cssClasses.join(" "), disabled: this.isWaiting || this.disabled, onClick: e => this._performAction() },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["c" /* Icon */], { icon: this.icon, color: this.iconColor, className: "icon", width: this.width, height: this.height }),
            window.__CTRender("slot", null)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "transparent" })
], IconButton.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], IconButton.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "auto" })
], IconButton.prototype, "iconColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Object, attribute: false, default: null })
], IconButton.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18" })
], IconButton.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "18" })
], IconButton.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: false, default: false })
], IconButton.prototype, "isWaiting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Function, attribute: false })
], IconButton.prototype, "action", void 0);
IconButton = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-icon-button" })
], IconButton);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(49);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  height: 40px;\n  width: 40px;\n  color: inherit; }\n  :host button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: flex; }\n    :host button wc-icon {\n      margin: auto; }\n    :host button.primary {\n      background-color: var(--app-primary-button-color);\n      color: var(--app-primary-button-font); }\n    :host button.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font); }\n    :host button.success {\n      background-color: var(--app-success-button-color);\n      color: var(--app-success-button-color-font); }\n    :host button.danger {\n      background-color: var(--app-danger-button-color);\n      color: var(--app-danger-button-color-font); }\n    :host button.transparent {\n      background-color: transparent; }\n    :host button.transparentLight {\n      background-color: transparent;\n      color: white; }\n    :host button.accentOne {\n      background-color: var(--accent-color-one);\n      color: var(--accent-color-one-font); }\n    :host button.accentTwo {\n      background-color: var(--accent-color-two);\n      color: var(--accent-color-two-font); }\n    :host button.accentThree {\n      background-color: var(--accent-color-three);\n      color: var(--accent-color-three-font); }\n    :host button:disabled {\n      background-color: var(--default-bg-color-dark); }\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pill */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let Pill = class Pill extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(51)));
    }
    componentMarkup() {
        if (!this.icon) {
            return null;
        }
        return (window.__CTRender("div", { className: `container ${this.type}` },
            this.icon
                ? window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["c" /* Icon */], { icon: this.icon, width: "12", height: "12" })
                : null,
            window.__CTRender("span", null,
                window.__CTRender("slot", null))));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "transparent" })
], Pill.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Object, attribute: false, default: null })
], Pill.prototype, "icon", void 0);
Pill = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-pill" })
], Pill);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(52);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: block;\n  max-height: 30px;\n  min-width: 35px; }\n  :host div.container {\n    display: flex;\n    padding: 5px 8px;\n    font-size: 12px;\n    border-radius: 4px; }\n    :host div.container wc-icon {\n      margin: auto 3px auto 0; }\n    :host div.container span {\n      margin: auto 0; }\n    :host div.container.primary {\n      background-color: var(--app-primary-button-color);\n      color: var(--app-primary-button-font); }\n    :host div.container.secondary {\n      background-color: var(--app-secondary-button-color);\n      color: var(--app-secondary-button-font);\n      border: 1px solid var(--app-secondary-button-border); }\n    :host div.container.transparent {\n      background-color: transparent; }\n    :host div.container.danger {\n      background-color: var(--app-danger-button-color);\n      color: var(--app-danger-button-color-font); }\n    :host div.container.accentOne {\n      background-color: var(--accent-color-one);\n      color: var(--accent-color-one-font); }\n    :host div.container.accentTwo {\n      background-color: var(--accent-color-two);\n      color: var(--accent-color-two-font); }\n    :host div.container.accentThree {\n      background-color: var(--accent-color-three);\n      color: var(--accent-color-three-font); }\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopoutMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let PopoutMenu = class PopoutMenu extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* ClientEvents */].OpenPopoutMenu, (id) => {
            if (id === this.id) {
                this.showing = true;
            }
        });
        this.manager.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* ClientEvents */].ClosePopoutMenu, () => this.showing = false);
    }
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(54)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container", style: this._workOutPosition() }, this.buttons.map(x => x)));
    }
    _workOutPosition() {
        const parentClientRect = this.parentElement.getBoundingClientRect();
        const halfParentHeight = parentClientRect.height / 2;
        const halfParentWidth = parentClientRect.width / 2;
        const top = parentClientRect.top + halfParentHeight;
        // tslint:disable-next-line no-any
        const style = {
            top: `${top}px`
        };
        switch (this.direction) {
            case "left":
                style.transformOrigin = "right 0";
                style.right = `${(window.innerWidth - parentClientRect.right) + halfParentWidth}px`;
                break;
            case "right":
                style.transformOrigin = "left 0";
                style.left = `${parentClientRect.left + halfParentWidth}px`;
                break;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__client__["c" /* buildStyles */])(style);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Array, attribute: false, default: [] })
], PopoutMenu.prototype, "buttons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: true, default: "left" })
], PopoutMenu.prototype, "direction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: true, default: false })
], PopoutMenu.prototype, "showing", void 0);
PopoutMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-popout-menu" })
], PopoutMenu);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(55);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host div.container {\n  position: fixed;\n  padding: 0 15px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  background-color: var(--default-menu-bg, white);\n  visibility: hidden;\n  transform: scale(0, 0);\n  will-change: transform;\n  transition: all 130ms cubic-bezier(0.77, 0, 0.175, 1);\n  transform-origin: right 0;\n  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);\n  -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3); }\n  :host div.container wc-button {\n    height: 60px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n    color: #8f98a3; }\n  :host div.container wc-button:last-child {\n    border: none; }\n\n:host([showing]) div.container {\n  visibility: visible;\n  transform: scale(1, 1); }\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseComponent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let SearchBox = class SearchBox extends __WEBPACK_IMPORTED_MODULE_0__base_BaseComponent__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._toggleSearch = (e) => {
            if (e.type === "focus") {
                this.searchExpanded = true;
            }
            else {
                this.searchExpanded = false;
            }
        };
        this._updateSearchTerm = (e) => {
            this.searchTerm = e.currentTarget.value;
            clearTimeout(this.debouncer);
            if (this.action) {
                this.debouncer = setTimeout(() => {
                    this.searching = true;
                    this.action(this.searchTerm);
                }, 500);
            }
        };
        this._clearSearch = () => {
            this.searchTerm = "";
            this.action(this.searchTerm);
            clearTimeout(this.debouncer);
        };
    }
    // === Init == //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on(__WEBPACK_IMPORTED_MODULE_4__events__["a" /* ClientEvents */].SearchComplete, () => this.searching = false);
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(57)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: "input" },
                window.__CTRender("input", { type: "text", placeholder: "Search", onFocus: this._toggleSearch, onBlur: this._toggleSearch, className: `${this.searchExpanded ? "expanded" : ""}`, onInput: this._updateSearchTerm, value: this.searchTerm })),
            window.__CTRender("div", { className: "control" }, this._renderIcon())));
    }
    _renderIcon() {
        if (this.searching) {
            return window.__CTRender(__WEBPACK_IMPORTED_MODULE_2__icon_icon__["a" /* Icon */], { icon: this.loadingIcon || __WEBPACK_IMPORTED_MODULE_3__models__["b" /* Icons */].FontAwesome.CircleNotch, width: 14, height: 14, onClick: this._clearSearch, spin: true });
        }
        if (this.searchTerm) {
            return window.__CTRender(__WEBPACK_IMPORTED_MODULE_2__icon_icon__["a" /* Icon */], { className: "clearSearch", icon: this.cancelIcon || __WEBPACK_IMPORTED_MODULE_3__models__["b" /* Icons */].FontAwesome.Cross, width: 14, height: 14, onClick: this._clearSearch, spin: this.searching });
        }
        else {
            return window.__CTRender(__WEBPACK_IMPORTED_MODULE_2__icon_icon__["a" /* Icon */], { icon: this.searchIcon || __WEBPACK_IMPORTED_MODULE_3__models__["b" /* Icons */].FontAwesome.MagnifyingGlass, width: 14, height: 14 });
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Function, attribute: false, default: null })
], SearchBox.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Boolean, attribute: true, default: false })
], SearchBox.prototype, "disableExpand", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Boolean, attribute: true, default: false })
], SearchBox.prototype, "searchExpanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: String, attribute: false, default: "" })
], SearchBox.prototype, "searchTerm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Boolean, attribute: true, default: false })
], SearchBox.prototype, "searching", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Object, attribute: false, default: null })
], SearchBox.prototype, "searchIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Object, attribute: false, default: null })
], SearchBox.prototype, "cancelIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* prop */])({ type: Object, attribute: false, default: null })
], SearchBox.prototype, "loadingIcon", void 0);
SearchBox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* component */])({ tag: "wc-search-box" })
], SearchBox);



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(58);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: flex; }\n  :host div.container {\n    margin: auto 0 auto auto;\n    border: 1px solid var(--default-border-color);\n    border-radius: 3px;\n    display: flex;\n    flex: 0 1;\n    transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95); }\n    :host div.container div.input {\n      display: flex;\n      flex: 1 0; }\n      :host div.container div.input input {\n        flex: 1;\n        margin: auto 0 auto auto;\n        padding: 10px 15px;\n        border: none;\n        outline: 0;\n        background-color: var(--default-bg-color-light, white);\n        color: var(--default-font-color, black); }\n    :host div.container div.control {\n      display: flex;\n      flex: 0 0 auto;\n      color: var(--default-font-color-lighter); }\n      :host div.container div.control wc-icon {\n        cursor: pointer;\n        margin: auto 10px; }\n        :host div.container div.control wc-icon.clearSearch:hover {\n          transform-origin: 40% 54%;\n          transform: rotate(180deg);\n          transition: all 0.3s linear; }\n\n:host([search-expanded]) div.container {\n  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n  width: 100%;\n  flex: 1; }\n\n:host([disable-expand]) div.container {\n  flex: 1; }\n\n@keyframes wobble {\n  0% {\n    transform: rotate(0); }\n  40% {\n    transform: rotate(20deg); }\n  60% {\n    transform: rotate(-20deg); }\n  100% {\n    transform: rotate(1); } }\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let TabNavigator = class TabNavigator extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentViewTag = this.manager.router.currentPage.tag;
        });
    }
    _setupEventListeners() { }
    // === Private === //
    _tabRowClick(view) {
        this.manager.router.goToPage(view);
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(60)));
    }
    componentMarkup() {
        if (!this.tabs || !this.tabs.length) {
            return null;
        }
        return (window.__CTRender("div", { className: "container" }, this.tabs.map(x => this._renderTab(x.iconDefinition, x.text, x.view))));
    }
    _renderTab(icon, text, view) {
        const selected = view.tag === this.currentViewTag ? "selected" : "";
        return (window.__CTRender("div", { className: `tab ${selected}`, onClick: () => this._tabRowClick(view) },
            window.__CTRender("div", { className: "icon" },
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["c" /* Icon */], { icon: icon })),
            window.__CTRender("div", { className: "text" }, text)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Array, attribute: false, detault: [] })
], TabNavigator.prototype, "tabs", void 0);
TabNavigator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-tab-navigator" })
], TabNavigator);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(61);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host div.container {\n  display: flex;\n  flex: 0 0;\n  height: 8vh;\n  background-color: var(--default-bg-color-dark);\n  border-top: 1px solid var(--default-border-color); }\n  :host div.container div.tab {\n    flex: 1 1 50%;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    color: var(--default-font-color-light); }\n    :host div.container div.tab.selected div.icon, :host div.container div.tab.selected div.text {\n      color: var(--primary-color); }\n    :host div.container div.tab div.icon {\n      margin: auto auto 2px auto; }\n    :host div.container div.tab div.text {\n      margin: auto 0;\n      text-align: center;\n      font-size: 12px; }\n\n@media screen and (max-height: 450px) {\n  :host {\n    display: none; } }\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TouchList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_slideReveal__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let TouchList = class TouchList extends __WEBPACK_IMPORTED_MODULE_0____["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    _rowClick(e, item) {
        // This is used in case we have lists within lists
        e.stopImmediatePropagation();
        if (this.rowClick) {
            this.rowClick(item);
        }
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(64)));
    }
    componentMarkup() {
        if (!this._renderRow) {
            return null;
        }
        return (window.__CTRender("div", { className: "container" }, this.items && this.items.length > 0
            ? this.items.map((x, idx) => this._renderRow(x, idx))
            : this.hideEmptyMessage ? null : this._renderNoItems()));
    }
    _renderRow(item, idx) {
        const offset = this.backgroundButtons
            ? this.backgroundButtons.length * 15
            : -1;
        return (window.__CTRender("div", { className: "row" },
            window.__CTRender("div", { className: "foreground", style: Object(__WEBPACK_IMPORTED_MODULE_1__client__["c" /* buildStyles */])({ transform: "translateX(0vw)" }), onClick: (e) => this._rowClick(e, item), ontouchmove: this.slideEnabled ? (e) => Object(__WEBPACK_IMPORTED_MODULE_2__client_slideReveal__["a" /* slideToReveal */])(e, offset) : null, ontouchend: this.slideEnabled ? (e) => Object(__WEBPACK_IMPORTED_MODULE_2__client_slideReveal__["b" /* slideToRevealEnd */])(e, offset) : null }, this.renderRow(item, idx)),
            this.slideEnabled
                ? this._renderBgButtons(item)
                : null));
    }
    _renderBgButtons(item) {
        if (!this.backgroundButtons || this.backgroundButtons.length === 0) {
            return null;
        }
        const styles = Object(__WEBPACK_IMPORTED_MODULE_1__client__["c" /* buildStyles */])({
            width: `${this.backgroundButtons.length * 15}vw`
        });
        return (window.__CTRender("div", { className: "background", style: styles }, this.backgroundButtons.map(x => {
            return (window.__CTRender(__WEBPACK_IMPORTED_MODULE_0____["b" /* Button */], { icon: x.icon, iconWidth: x.width, iconHeight: x.height, iconColor: x.iconColor, action: () => x.action(item) }));
        })));
    }
    _renderNoItems() {
        if (this.renderWhenEmpty) {
            return this.renderWhenEmpty();
        }
        return (window.__CTRender("div", { className: "empty" },
            window.__CTRender("p", null, this.emptyMessage ? this.emptyMessage : "There is nothting to display.")));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Array, attribute: false, default: [] })
], TouchList.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "renderRow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "rowClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Array, attribute: false, default: [] })
], TouchList.prototype, "backgroundButtons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: false, default: true })
], TouchList.prototype, "slideEnabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Function, attribute: false, default: null })
], TouchList.prototype, "renderWhenEmpty", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: Boolean, attribute: false, default: false })
], TouchList.prototype, "hideEmptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: false, default: null })
], TouchList.prototype, "emptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["h" /* prop */])({ type: String, attribute: false, default: "" })
], TouchList.prototype, "redraw", void 0);
TouchList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0____["g" /* component */])({ tag: "wc-touch-list" })
], TouchList);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slideToReveal;
/* harmony export (immutable) */ __webpack_exports__["b"] = slideToRevealEnd;
/* unused harmony export slideAwayMotion */
/* unused harmony export slideAwayEnd */
// tslint:disable
class TouchTracker {
}
/* unused harmony export TouchTracker */

// This determines the movement speed of the element being dragged. Increase this number to make it faster or lower to make slower
TouchTracker.Accelerator = 2.5;
// Resets current state
TouchTracker.Reset = () => {
    delete TouchTracker.LastTouchStartX;
    delete TouchTracker.LastTouchStartY;
    delete TouchTracker.LastTouchStartTime;
    delete TouchTracker.LastTouchMoveX;
    delete TouchTracker.LastTouchMoveY;
};
TouchTracker.NumMatch = /-?\d+/;
TouchTracker.X = ["clientX"];
TouchTracker.Y = ["clientY"];
TouchTracker.GetNumberValue = (str) => {
    const res = str.match(TouchTracker.NumMatch);
    if (res) {
        return parseInt(res[0]);
    }
    else
        return null;
};
TouchTracker.CheckIfFirstTouch = (x, y) => {
    if (!TouchTracker.LastTouchStartX) {
        console.log("First X detected");
        TouchTracker.LastTouchStartX = x;
    }
    if (!TouchTracker.LastTouchStartY) {
        console.log("First Y detected");
        TouchTracker.LastTouchStartY = y;
    }
    TouchTracker.LastTouchStartTime = new Date().getTime();
};
function slideToReveal(e, offset, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const maxOffset = 0 - (offset + 1);
    const target = e.currentTarget;
    const currPos = target.style.transform;
    let newPos = 0;
    if (currPos) {
        newPos = TouchTracker.GetNumberValue(currPos);
    }
    // if (newPos > maxOffset) {
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    const diffX = (TouchTracker.LastTouchMoveX || TouchTracker.LastTouchStartX) - e.changedTouches[0].clientX;
    const diffY = (TouchTracker.LastTouchMoveY || TouchTracker.LastTouchStartY) - e.changedTouches[0].clientY;
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
    if (tracking === "x") {
        // Moving left
        if (diffX > 0) {
            newPos--;
            if (newPos > maxOffset) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
        else {
            newPos++;
            if (newPos < 1) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
    }
    else if (tracking === "y") {
        // Moving down
        if (diffY > 1) {
            newPos = newPos - (1 * TouchTracker.Accelerator);
            //--newPos;
            target.style.transform = `translateY(${newPos}vh)`;
        }
        else if (diffY < -0.5) {
            newPos = newPos + (1 * TouchTracker.Accelerator);
            // ++newPos;
            if (newPos > 0.5)
                newPos = 0;
            target.style.transform = `translateY(${newPos}vh)`;
        }
    }
    // tslint:disable
    // console.log(`CurrPos: ${currPos}, DiffX: ${diffX}, DiffY: ${diffY}, New Pos: ${newPos}`);
    // }
}
function slideToRevealEnd(e, maxOffset, axis = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const target = e.currentTarget;
    const currLeft = target.style.transform;
    let newLeft;
    if (currLeft) {
        newLeft = TouchTracker.GetNumberValue(target.style.transform);
    }
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        if (velocity > 1.2) {
            target.style.transform = `translateX(0vw)`;
        }
        else if (velocity < -1.2) {
            target.style.transform = `translateX(-${maxOffset}vw)`;
        }
        else {
            const halfWay = Math.round(maxOffset / 2);
            if (newLeft < -halfWay) {
                // Snap to reveal
                target.style.transform = `translateX(-${maxOffset}vw)`;
            }
            else {
                // Snap to reset
                target.style.transform = "translateX(0vw)";
            }
        }
    }
    TouchTracker.Reset();
}
function calculateVelocityOfCurrentTouch() {
    const finalPos = TouchTracker.LastTouchMoveX;
    const initialPos = TouchTracker.LastTouchStartX;
    const finalTime = new Date().getTime();
    const initialTime = TouchTracker.LastTouchStartTime;
    const pos = finalPos - initialPos;
    const time = finalTime - initialTime;
    return pos / time;
}
function slideAwayMotion(e, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
}
function slideAwayEnd(e, leftAction, rightAction, axis = "x", threshold = 5) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        // tslint:disable-next-line no-console
        console.log("Vel:", velocity);
        if (velocity > threshold && rightAction) {
            rightAction();
        }
        else if (velocity < -threshold && leftAction) {
            leftAction();
        }
    }
    TouchTracker.Reset();
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(65);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n:host, :host * {\n  box-sizing: border-box; }\n\n:host {\n  display: flex;\n  flex: 1 1; }\n  :host div.container {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n    :host div.container div.row {\n      position: relative;\n      height: auto; }\n      :host div.container div.row div.background {\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: 0;\n        height: 100%;\n        display: flex;\n        background-color: #f2f2f2; }\n        :host div.container div.row div.background ct-button {\n          margin: auto;\n          height: 100%;\n          width: 100%; }\n      :host div.container div.row div.foreground {\n        display: flex;\n        flex: 1 0 auto;\n        background-color: var(--default-bg-color);\n        width: 100%;\n        position: relative;\n        z-index: 100; }\n    :host div.container div.empty {\n      margin: auto;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      flex: 1;\n      font-size: 14px;\n      padding: 20px 0; }\n      :host div.container div.empty p {\n        margin: auto auto 20px auto;\n        text-align: center;\n        width: 100%; }\n      :host div.container div.empty wc-button {\n        min-width: 60%;\n        margin: 0 auto auto auto; }\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_handler__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base_handler__["a"]; });

function get(clientManager) {
    return [];
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class BaseHandler {
    // === Constructor === //
    constructor(manager) {
        // === Public Props === //
        this.messageType = null;
        this.eventType = [];
        this.filters = [];
        this.manager = manager;
    }
    // === Public === //
    callHandleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleMessage(message);
        });
    }
    callHandleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleEvent(eventType, eventData);
        });
    }
    registerFilter(filter) {
        if (!this.filters.includes("filter")) {
            this.filters.push(filter);
        }
    }
    unregisterFilter(filter) {
        const remove = this.filters.findIndex(x => x === filter);
        if (remove > -1) {
            this.filters.splice(remove, 1);
        }
    }
    clearAllFilters() {
        this.filters = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseHandler;



/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports) {

// export { Home } from "views/home/home";
// export { Login } from "views/login/login";


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework_src_store_store__ = __webpack_require__(71);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class MyAppStore extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework_src_store_store__["a" /* Store */] {
    // === Constructor === //
    constructor(name) {
        super(name);
    }
    // === Public === //
    setLastUpdated() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.lastUpdated = Math.round((new Date()).getTime() / 1000);
            return yield this._saveToPersistent();
        });
    }
    getLastUpdated() {
        return this.state.lastUpdated;
    }
    setDirectory(directory) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.directory = directory;
            return yield this._saveToPersistent();
        });
    }
    getDirectory() {
        return this.state.directory;
    }
    setTheme(theme) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.theme = theme;
            return yield this._saveToPersistent();
        });
    }
    getTheme() {
        return this.state.theme;
    }
    setUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.user = user;
            return yield this._saveToPersistent();
        });
    }
    getUser() {
        return this.state.user;
    }
    // === Protected === //
    _generateInitialState() {
        return {
            _id: this.name,
            _rev: "",
            lastUpdated: 0,
            messageQueue: [],
            directory: [],
            theme: "",
            user: null
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MyAppStore;



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Store {
    // === Constructor === //
    constructor(name) {
        this._saveToPersistentQueue = Promise.resolve();
        this.name = name;
        this._db = new window.PouchDB(name);
    }
    // === Public === //
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = yield this._getFromPersistent();
        });
    }
    getFromState(key) {
        return this.state[key] || null;
    }
    // === Message Queue === //
    saveToMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.messageQueue.push(messageEntity);
            return yield this._saveToPersistent();
        });
    }
    removeFromMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const idx = this.state.messageQueue.findIndex(x => x.id === messageEntity.id);
            if (idx > -1) {
                this.state.messageQueue.splice(idx, 1);
                return yield this._saveToPersistent();
            }
            return;
        });
    }
    getMessageQueue() {
        return this.state.messageQueue;
    }
    // === Protected === //
    _saveToPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            clearTimeout(this._saveDebouncer);
            this._saveDebouncer = setTimeout(() => {
                if (this._db) {
                    this._saveToPersistentQueue = this._saveToPersistentQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const res = yield this._db.put(this.state);
                            this.state._rev = res.rev;
                        }
                        catch (ex) {
                            throw new Error(ex);
                        }
                    }));
                }
                else {
                    localStorage[this.name] = JSON.stringify(this.state);
                }
            }, 500);
        });
    }
    _getFromPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._db) {
                try {
                    return yield this._db.get(this.name);
                }
                catch (ex) {
                    const state = this._generateInitialState();
                    const res = yield this._db.put(state);
                    state._rev = res.rev;
                    return state;
                }
            }
            else {
                const state = localStorage.getItem(this.name)
                    ? JSON.parse(localStorage.getItem(this.name))
                    : this._generateInitialState();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Store;



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_utils__ = __webpack_require__(9);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class MyRestClient extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["j" /* RestClient */] {
    _genHeaders(token = true) {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            const user = this.store.getFromState("user");
            if (!user || !user.token) {
                return headers;
            }
            headers.token = user.token;
        }
        return headers;
    }
    // tslint:disable-next-line no-any
    _showRequestError(ex, title = "Request Failed", text = "There was an error with the request. Please try again.") {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line no-console
            console.log("rest-client: Request failed:", ex);
            Object(__WEBPACK_IMPORTED_MODULE_1_client_utils__["a" /* alertPopup */])({
                title: title,
                text: text,
                type: "error"
            });
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                username: username,
                password: password,
                clientDT: new Date().valueOf()
            };
            try {
                const res = yield this._sendMessage("auth", __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["g" /* HttpVerb */].POST, null, body, this._genHeaders(false));
                if (res.result.success && res.result.result !== "invalid") {
                    return res.result.result;
                }
                else {
                    this._showRequestError(res.result.result, "Login Failed", "Unable to login. Please check your username and password and try again.");
                }
            }
            catch (ex) {
                this._showRequestError(ex);
            }
            return "";
        });
    }
    syncDirectory() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield _super("_sendMessage").call(this, "TelephoneDirectoryGetAll", __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["g" /* HttpVerb */].GET, null, null);
                // tslint:disable-next-line no-console
                // console.log("Rest Result", result);
                // tslint:disable-next-line no-any
                return result && result.result && result.result.result || null;
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error("Error:", ex);
            }
        });
    }
    syncDirectoryDeltas(lastUpdated) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!lastUpdated) {
                    lastUpdated = Math.round(new Date().getTime() / 1000);
                }
                const queryParams = [{ key: "lastupdated", value: lastUpdated }];
                const result = yield _super("_sendMessage").call(this, "TelephoneDirectoryGetUpdates", __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["g" /* HttpVerb */].GET, queryParams, null);
                // tslint:disable-next-line no-console
                console.log("Rest Result", result);
                // tslint:disable-next-line no-any
                return result && result.result && result.result.result || null;
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error("Error:", ex);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MyRestClient;



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v7.12.11
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var styles = "@-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 19px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 17px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 35px;\n    left: -6px;\n    width: 50px; }\n  84% {\n    top: 48px;\n    left: 21px;\n    width: 17px; }\n  100% {\n    top: 45px;\n    left: 14px;\n    width: 25px; } }\n\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 19px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 17px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 35px;\n    left: -6px;\n    width: 50px; }\n  84% {\n    top: 48px;\n    left: 21px;\n    width: 17px; }\n  100% {\n    top: 45px;\n    left: 14px;\n    width: 25px; } }\n\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  65% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  84% {\n    top: 35px;\n    right: 0;\n    width: 55px; }\n  100% {\n    top: 38px;\n    right: 8px;\n    width: 47px; } }\n\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  65% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  84% {\n    top: 35px;\n    right: 0;\n    width: 55px; }\n  100% {\n    top: 38px;\n    right: 8px;\n    width: 47px; } }\n\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -6px;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -6px;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\nbody.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    height: 2.2em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n    height: 2em;\n    margin: .3125em auto;\n    font-size: 1em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n    font-size: 1em; }\n\nbody.swal2-toast-shown > .swal2-container {\n  position: fixed;\n  background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-shown {\n    background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-top {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n    top: 0;\n    right: 0;\n    bottom: auto;\n    left: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n    top: auto;\n    right: 0;\n    bottom: 0;\n    left: auto; }\n\n.swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  -webkit-box-shadow: 0 0 10px #d9d9d9;\n          box-shadow: 0 0 10px #d9d9d9;\n  overflow-y: hidden; }\n  .swal2-popup.swal2-toast .swal2-header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .swal2-popup.swal2-toast .swal2-title {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin: 0 .6em;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-close {\n    position: initial; }\n  .swal2-popup.swal2-toast .swal2-content {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-icon {\n    width: 32px;\n    min-width: 32px;\n    height: 32px;\n    margin: 0; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n      font-size: 26px;\n      line-height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: 14px;\n      width: 22px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 5px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 5px; }\n  .swal2-popup.swal2-toast .swal2-actions {\n    height: auto;\n    margin: 0 .3125em; }\n  .swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n    .swal2-popup.swal2-toast .swal2-styled:focus {\n      -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n  .swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 32px;\n      height: 45px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -4px;\n        left: -15px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 32px 32px;\n                transform-origin: 32px 32px;\n        border-radius: 64px 0 0 64px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -4px;\n        left: 15px;\n        -webkit-transform-origin: 0 32px;\n                transform-origin: 0 32px;\n        border-radius: 0 64px 64px 0; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      top: 0;\n      left: 7px;\n      width: 7px;\n      height: 43px; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: 5px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 18px;\n        left: 3px;\n        width: 12px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 15px;\n        right: 3px;\n        width: 22px; }\n  .swal2-popup.swal2-toast.swal2-show {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n  .swal2-popup.swal2-toast.swal2-hide {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n    -webkit-animation: animate-toast-success-tip .75s;\n            animation: animate-toast-success-tip .75s; }\n  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n    -webkit-animation: animate-toast-success-long .75s;\n            animation: animate-toast-success-long .75s; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    top: 9px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 2px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 10px;\n    left: -4px;\n    width: 26px; }\n  84% {\n    top: 17px;\n    left: 12px;\n    width: 8px; }\n  100% {\n    top: 18px;\n    left: 3px;\n    width: 12px; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    top: 9px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 2px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 10px;\n    left: -4px;\n    width: 26px; }\n  84% {\n    top: 17px;\n    left: 12px;\n    width: 8px; }\n  100% {\n    top: 18px;\n    left: 3px;\n    width: 12px; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    top: 26px;\n    right: 22px;\n    width: 0; }\n  65% {\n    top: 20px;\n    right: 15px;\n    width: 0; }\n  84% {\n    top: 15px;\n    right: 0;\n    width: 18px; }\n  100% {\n    top: 15px;\n    right: 3px;\n    width: 22px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    top: 26px;\n    right: 22px;\n    width: 0; }\n  65% {\n    top: 20px;\n    right: 15px;\n    width: 0; }\n  84% {\n    top: 15px;\n    right: 0;\n    width: 18px; }\n  100% {\n    top: 15px;\n    right: 3px;\n    width: 22px; } }\n\nhtml.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  height: auto;\n  overflow-y: hidden; }\n\nbody.swal2-no-backdrop .swal2-shown {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n    right: 0;\n    bottom: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  display: none;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-popup .swal2-title {\n    display: block;\n    position: relative;\n    margin: 0 0 0.4em;\n    padding: 0;\n    color: #595959;\n    font-size: 1.875em;\n    font-weight: 600;\n    text-align: center;\n    text-transform: none;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-actions {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 1.25em auto 0; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n      width: 2.5em;\n      height: 2.5em;\n      margin: .46875em;\n      padding: 0;\n      border: .25em solid transparent;\n      border-radius: 100%;\n      border-color: transparent;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n      margin-right: 30px;\n      margin-left: 30px; }\n    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      border: 3px solid #999999;\n      border-radius: 50%;\n      border-right-color: transparent;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      content: '';\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    margin: 0 .3125em;\n    padding: .625em 2em;\n    font-weight: 500;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .swal2-popup .swal2-styled:not([disabled]) {\n      cursor: pointer; }\n    .swal2-popup .swal2-styled.swal2-confirm {\n      border: 0;\n      border-radius: 0.25em;\n      background-color: #3085d6;\n      color: #fff;\n      font-size: 1.0625em; }\n    .swal2-popup .swal2-styled.swal2-cancel {\n      border: 0;\n      border-radius: 0.25em;\n      background-color: #aaa;\n      color: #fff;\n      font-size: 1.0625em; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n    .swal2-popup .swal2-styled::-moz-focus-inner {\n      border: 0; }\n  .swal2-popup .swal2-footer {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 1.25em 0 0;\n    padding-top: 1em;\n    border-top: 1px solid #eee;\n    color: #545454;\n    font-size: 1em; }\n  .swal2-popup .swal2-image {\n    max-width: 100%;\n    margin: 1.25em auto; }\n  .swal2-popup .swal2-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 1.2em;\n    min-width: 1.2em;\n    height: 1.2em;\n    margin: 0;\n    padding: 0;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease;\n    border: none;\n    border-radius: 0;\n    background: transparent;\n    color: #cccccc;\n    font-family: serif;\n    font-size: calc(2.5em - 0.25em);\n    line-height: 1.2em;\n    cursor: pointer; }\n    .swal2-popup .swal2-close:hover {\n      color: #d55; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0;\n    padding: 0;\n    color: #545454;\n    font-size: 1.125em;\n    font-weight: 300;\n    line-height: normal;\n    word-wrap: break-word; }\n  .swal2-popup #swal2-content {\n    text-align: center; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 1em auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s;\n    border: 1px solid #d9d9d9;\n    border-radius: 0.1875em;\n    font-size: 1.125em;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      border: 1px solid #b4dbed;\n      outline: none;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    width: 20%;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    height: 2.625em;\n    margin: 1em auto;\n    padding: 0;\n    font-size: 1.125em;\n    line-height: 2.625em; }\n  .swal2-popup .swal2-input {\n    height: 2.625em;\n    padding: 0.75em; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 10em; }\n  .swal2-popup .swal2-file {\n    font-size: 1.125em; }\n  .swal2-popup .swal2-textarea {\n    height: 6.75em;\n    padding: 0.75em; }\n  .swal2-popup .swal2-select {\n    min-width: 50%;\n    max-width: 100%;\n    padding: .375em .625em;\n    color: #545454;\n    font-size: 1.125em; }\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .swal2-popup .swal2-radio label,\n    .swal2-popup .swal2-checkbox label {\n      margin: 0 .6em;\n      font-size: 1.125em; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-checkbox input {\n      margin: 0 .4em; }\n  .swal2-popup .swal2-validationerror {\n    display: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0.625em;\n    background: #f0f0f0;\n    color: #666666;\n    font-size: 1em;\n    font-weight: 300;\n    overflow: hidden; }\n    .swal2-popup .swal2-validationerror::before {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      margin: 0 .625em;\n      border-radius: 50%;\n      background-color: #f27474;\n      color: #fff;\n      font-weight: 600;\n      line-height: 1.5em;\n      text-align: center;\n      content: '!';\n      zoom: normal; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 80px;\n  height: 80px;\n  margin: 1.25em auto 1.875em;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  line-height: 80px;\n  cursor: default;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  zoom: normal; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      display: block;\n      position: absolute;\n      top: 37px;\n      width: 47px;\n      height: 5px;\n      border-radius: 2px;\n      background-color: #f27474; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 17px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 16px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  .swal2-icon.swal2-warning, .swal2-icon.swal2-info, .swal2-icon.swal2-question {\n    margin: .333333em auto .5em;\n    font-family: inherit;\n    font-size: 3.75em; }\n  .swal2-icon.swal2-warning {\n    border-color: #facea8;\n    color: #f8bb86; }\n  .swal2-icon.swal2-info {\n    border-color: #9de0f6;\n    color: #3fc3ee; }\n  .swal2-icon.swal2-question {\n    border-color: #c9dae1;\n    color: #87adbd; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px;\n        border-radius: 120px 0 0 120px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px;\n        border-radius: 0 120px 120px 0; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.3);\n      border-radius: 50%;\n      z-index: 2;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      position: absolute;\n      top: 8px;\n      left: 26px;\n      width: 7px;\n      height: 90px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      z-index: 1; }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      display: block;\n      position: absolute;\n      height: 5px;\n      border-radius: 2px;\n      background-color: #a5dc86;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 46px;\n        left: 14px;\n        width: 25px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 38px;\n        right: 8px;\n        width: 47px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  font-weight: 600; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    width: 2em;\n    height: 2em;\n    border-radius: 2em;\n    background: #3085d6;\n    color: #fff;\n    line-height: 2em;\n    text-align: center;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    width: 2.5em;\n    height: .4em;\n    margin: 0 -1px;\n    background: #3085d6;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n[dir='rtl'] .swal2-close {\n  right: auto;\n  left: 0; }\n\n.swal2-animate-success-icon .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n\n.swal2-animate-error-icon {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s; }\n  .swal2-animate-error-icon .swal2-x-mark {\n    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n            animation: swal2-animate-error-x-mark 0.5s; }\n\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n";

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      if (result.indexOf(elem) === -1) {
        result.push(elem);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

/**
 * Convert object into iterable Map
 * https://stackoverflow.com/a/36644532/1331425
 * @param obj
 */
var objectToMap = function objectToMap(obj) {
  if (obj instanceof Map) {
    return obj;
  }
  var map = new Map();
  Object.keys(obj).forEach(function (key) {
    map.set(key, obj[key]);
  });
  return map;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var popupParams = _extends({}, defaultParams);
var queue = [];

var previousWindowKeyDown = void 0,
    windowOnkeydownOverridden = void 0;

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (sweetAlert.isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
var setParameters = function setParameters(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background;
  }
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent().querySelector('#' + swalClasses.content);
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();
  var footer = getFooter();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, content);

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i = 0; _i < icons.length; _i++) {
    hide(icons[_i]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      addClass(icon, 'swal2-animate-' + params.type + '-icon');
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }

    // Loading state
    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // Footer
  parseHtmlToContainer(params.footer, footer);

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
};

/**
 * Animations
 *
 * @param animation
 * @param onBeforeOpen
 * @param onComplete
 */
var openPopup = function openPopup(animation, onBeforeOpen, onComplete) {
  var container = getContainer();
  var popup = getPopup();

  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
    onBeforeOpen(popup);
  }

  if (animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, popupParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      showWarningsForParams(args[0]);
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        var inputValidator = function inputValidator(email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
        params.inputValidator = params.expectRejections ? inputValidator : sweetAlert.adaptInputValidator(inputValidator);
      }

      if (params.input === 'url' && params.inputValidator === null) {
        var _inputValidator = function _inputValidator(url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
        params.inputValidator = params.expectRejections ? _inputValidator : sweetAlert.adaptInputValidator(_inputValidator);
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var popup = getPopup();

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      sweetAlert.closePopup(params.onClose);
      reject(error$$1);
    };

    // Close on timer
    if (params.timer) {
      popup.timeout = setTimeout(function () {
        return dismissWith('timer');
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(content, swalClasses[inputType]);
        case 'checkbox':
          return popup.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return popup.querySelector('.' + swalClasses.radio + ' input:checked') || popup.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return popup.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(content, swalClasses.input);
      }
    };

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        sweetAlert.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return params.preConfirm(value, params.extraParams);
        });
        if (params.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            sweetAlert.hideLoading();
            if (validationError) {
              sweetAlert.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(getValidationError()) || preConfirmValue === false) {
              sweetAlert.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return params.inputValidator(inputValue, params.extraParams);
                });
                if (params.expectRejections) {
                  validationPromise.then(function () {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            dismissWith(sweetAlert.DismissReason.cancel);
          }
          break;
        default:
      }
    };

    var buttons = popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    getCloseButton().onclick = function () {
      dismissWith(sweetAlert.DismissReason.close);
    };

    if (params.toast) {
      // Closing popup by backdrop click
      popup.onclick = function (e) {
        if (e.target !== popup || params.showConfirmButton || params.showCancelButton) {
          return;
        }
        if (params.allowOutsideClick) {
          sweetAlert.closePopup(params.onClose);
          dismissWith(sweetAlert.DismissReason.backdrop);
        }
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      popup.onmousedown = function () {
        container.onmouseup = function (e) {
          container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      container.onmousedown = function () {
        popup.onmouseup = function (e) {
          popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === popup || popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== container) {
          return;
        }
        if (callIfFunction(params.allowOutsideClick)) {
          dismissWith(sweetAlert.DismissReason.backdrop);
        }
      };
    }

    var content = getContent();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target === getInput()) {
          if (['textarea', 'file'].indexOf(params.input) !== -1) {
            return; // do not submit
          }

          sweetAlert.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
          if (targetElement === focusableElements[_i3]) {
            btnIndex = _i3;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(params.allowEscapeKey) === true) {
        dismissWith(sweetAlert.DismissReason.esc);
      }
    };

    if (params.toast && windowOnkeydownOverridden) {
      window.onkeydown = previousWindowKeyDown;
      windowOnkeydownOverridden = false;
    }

    if (!params.toast && !windowOnkeydownOverridden) {
      previousWindowKeyDown = window.onkeydown;
      windowOnkeydownOverridden = true;
      window.onkeydown = handleKeyDown;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getActions());
        }
      }
      removeClass([popup, actions], swalClasses.loading);
      popup.removeAttribute('aria-busy');
      popup.removeAttribute('data-loading');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getActions = function () {
      return getActions();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };
    sweetAlert.getFooter = function () {
      return getFooter();
    };
    sweetAlert.isLoading = function () {
      return isLoading();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i4 = 0; _i4 < radios.length; _i4++) {
          radios[_i4].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      var popupComputedStyle = window.getComputedStyle(popup);
      validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
      validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    if (params.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i6 = 0; _i6 < inputTypes.length; _i6++) {
      var inputClass = swalClasses[inputTypes[_i6]];
      var inputContainer = getChildByClass(content, inputClass);
      input = getInput(inputTypes[_i6]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(content, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(content, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(content, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(content, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions = objectToMap(inputOptions);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = inputOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = slicedToArray(_step.value, 2),
                  optionValue = _step$value[0],
                  optionLabel = _step$value[1];

              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;
              if (params.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }
              select.appendChild(option);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(content, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions = objectToMap(inputOptions);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = inputOptions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = slicedToArray(_step2.value, 2),
                  radioValue = _step2$value[0],
                  radioLabel = _step2$value[1];

              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;
              if (params.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }
              radioLabelElement.innerHTML = radioLabel;
              radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
              radio.appendChild(radioLabelElement);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(content, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(content, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openPopup(params.animation, params.onBeforeOpen, params.onOpen);

    if (!params.toast) {
      if (!callIfFunction(params.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (params.focusCancel && isVisible(cancelButton)) {
        cancelButton.focus();
      } else if (params.focusConfirm && isVisible(confirmButton)) {
        confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    getContainer().scrollTop = 0;
  });
};

/*
 * Global function to determine if swal2 popup is shown
 */
sweetAlert.isVisible = function () {
  return !!getPopup();
};

/*
 * Global function for chaining sweetAlert popups
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closePopup = sweetAlert.closeModal = sweetAlert.closeToast = function (onComplete) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  clearTimeout(popup.timeout);

  if (!isToast()) {
    resetPrevState();
    window.onkeydown = previousWindowKeyDown;
    windowOnkeydownOverridden = false;
  }

  var removePopupAndResetState = function removePopupAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var popup = getPopup();
  if (!popup) {
    sweetAlert('');
  }
  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
sweetAlert.isDeprecatedParameter = function (paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  showWarningsForParams(userParams);

  // assign valid params from userParams to popupParams
  for (var param in userParams) {
    if (sweetAlert.isValidParameter(param)) {
      popupParams[param] = userParams[param];
    }
  }
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  popupParams = _extends({}, defaultParams);
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
sweetAlert.adaptInputValidator = function (legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

sweetAlert.DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

sweetAlert.noop = function () {};

sweetAlert.version = '7.12.11';

sweetAlert.default = sweetAlert;

/**
 * Set default params if `window._swalDefaults` is an object
 */
if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
  sweetAlert.setDefaults(window._swalDefaults);
}

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousActiveElement: null,
  previousBodyPadding: null

  // Detect Node env
};var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

/*
 * Add modal + backdrop to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(content, swalClasses.textarea);

  // a11y
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  var resetValidationError = function resetValidationError() {
    sweetAlert.isVisible() && sweetAlert.resetValidationError();
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function () {
    resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    resetValidationError();
    range.nextSibling.value = range.value;
  };

  return popup;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getPopup = function getPopup() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.popup) : null;
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
  return elementByClass(swalClasses.actions);
};

var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};

var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
    target.innerHTML = '';
    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  } else {}
  show(target);
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Inject a string of CSS into the page header
 *
 * @param {String} css
 */
var injectCSS = function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

injectCSS(styles);

return sweetAlert;

})));
if (typeof window !== 'undefined' && window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_handlers_data_handler__ = __webpack_require__(75);

const TelephoneDirectoryHandlers = {
    dataHandler: __WEBPACK_IMPORTED_MODULE_0_handlers_data_handler__["a" /* DataHandler */]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TelephoneDirectoryHandlers;



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_utils__ = __webpack_require__(9);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class DataHandler extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["b" /* BaseHandler */] {
    constructor(manager) {
        super(manager);
        this.eventType = [
            "directory-update" /* DirectoryUpdate */
        ];
    }
    handleEvent(eventType, eventArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = eventArgs || null;
            const telephoneManager = this.manager;
            switch (eventType) {
                case "directory-update" /* DirectoryUpdate */:
                    const directory = telephoneManager.store.getDirectory();
                    const directoryUpdates = yield telephoneManager.rest.syncDirectoryDeltas(telephoneManager.store.getLastUpdated());
                    Object(__WEBPACK_IMPORTED_MODULE_1_client_utils__["d" /* deleteFromArray */])(directory, directoryUpdates.removals, "ContactID");
                    Object(__WEBPACK_IMPORTED_MODULE_1_client_utils__["c" /* combineOriginalArrayWithUpdates */])(directory, directoryUpdates.additions, "ContactID");
                    yield telephoneManager.store.setDirectory(directory);
                    break;
            }
        });
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataHandler;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_views_register__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let Login = class Login extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    constructor() {
        super(...arguments);
        // === Private === //
        this._goToHome = () => __awaiter(this, void 0, void 0, function* () {
            this.manager.emit("start-spinner" /* StartSpinner */);
            const user = {
                id: this.username,
                username: this.username
            };
            const token = yield this.manager.rest.login(this.username, this.password);
            if (token) {
                user.token = token;
                yield this.manager.store.setUser(user);
                yield this.manager.downloadFullDirectory();
                this.password = "";
                this.manager.router.goToPage(__WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Directory);
            }
            this.manager.emit("stop-spinner" /* StopSpinner */);
        });
        this._formUpdate = (e) => {
            const input = e.currentTarget;
            if (input.name === "username") {
                this.username = input.value;
            }
            else {
                this.password = input.value;
            }
            this._validate();
        };
        this._validate = () => {
            if (this.username && this.password) {
                this.validated = true;
            }
            else {
                this.validated = false;
            }
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.username = "1817";
            // this.password = "ct";
        });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(83)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: "title" },
                window.__CTRender("h1", null, "Telephone Directory")),
            window.__CTRender("div", { className: "loginForm" },
                window.__CTRender("div", { className: "input" },
                    window.__CTRender("input", { type: "text", name: "username", placeholder: "Username", onInput: this._formUpdate, value: this.username })),
                window.__CTRender("div", { className: "input" },
                    window.__CTRender("input", { type: "password", name: "password", placeholder: "Password", onInput: this._formUpdate, value: this.password })),
                window.__CTRender("div", { className: "input" },
                    window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["c" /* Button */], { type: "login", action: this._goToHome, disabled: !this.validated }, "Sign In"))),
            window.__CTRender("div", { className: "notices" },
                window.__CTRender("p", null, "By using this app, you agree to the Terms, Cookie Policy and Privacy Policy.")),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_2_components__["b" /* LoadingSpinner */], null)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Boolean, attribute: true, default: true })
], Login.prototype, "validated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false, default: "" })
], Login.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false, default: "" })
], Login.prototype, "password", void 0);
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Login.tag })
], Login);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ECMHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let ECMHeader = class ECMHeader extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(78)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: `icons ${this.iconDirection}` }, this.icons),
            window.__CTRender("div", { className: "mainTitle" },
                window.__CTRender("h1", null,
                    this.title,
                    this.subtitle
                        ? this._renderSubtitle()
                        : null),
                this._renderIcon(this.rightIcon))));
    }
    _renderIcon(icon) {
        return (window.__CTRender("div", { className: "icon" }, icon));
    }
    _renderSubtitle() {
        if (!this.subtitle) {
            return null;
        }
        return (window.__CTRender("span", null, this.subtitle));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Array, attribute: false, default: [] })
], ECMHeader.prototype, "icons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false, default: "right" })
], ECMHeader.prototype, "iconDirection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false, default: "" })
], ECMHeader.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Object, attribute: false, default: null })
], ECMHeader.prototype, "subtitleIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: String, attribute: false, default: "" })
], ECMHeader.prototype, "subtitle", void 0);
ECMHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: "wc-ecm-header" })
], ECMHeader);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(79);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host {\n  display: block;\n  width: 100%;\n  padding: 0 20px 0;\n  background-color: var(--default-bg-color-dark);\n  border-bottom: 1px solid var(--default-border-color); }\n  :host div.container {\n    color: var(--default-font-color); }\n    :host div.container div.icons {\n      display: flex;\n      height: 6vh;\n      color: var(--primary-color); }\n      :host div.container div.icons.right {\n        justify-content: flex-end; }\n        :host div.container div.icons.right wc-icon {\n          margin: auto 0 auto 10px; }\n      :host div.container div.icons.left {\n        justify-content: flex-start; }\n        :host div.container div.icons.left wc-icon {\n          margin: auto 10px auto 0; }\n      :host div.container div.icons wc-icon {\n        cursor: pointer;\n        position: relative; }\n    :host div.container div.mainTitle {\n      display: flex;\n      height: 6vh; }\n      :host div.container div.mainTitle h1 {\n        font-size: 28px;\n        font-weight: 800;\n        margin: auto 0 10px; }\n        :host div.container div.mainTitle h1 span {\n          margin-left: 10px;\n          font-size: 12px;\n          font-weight: 400;\n          line-height: 22px;\n          color: var(--primary-color); }\n      :host div.container div.mainTitle div.icon {\n        margin: auto 0;\n        min-width: 40px;\n        cursor: pointer; }\n    :host div.container div.subtitle {\n      height: 6vh;\n      display: flex; }\n      :host div.container div.subtitle h3 {\n        margin: 0 auto;\n        font-weight: 300;\n        font-size: 16px; }\n\n@media screen and (max-height: 450px) {\n  :host {\n    display: none; } }\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ECMIcons = {
    IcoMoon: {
        Book: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1016.904 230.658c-51.096-63.322-146.47-102.658-248.904-102.658s-197.808 39.336-248.904 102.658c-4.592 5.69-7.096 12.782-7.096 20.094 0-7.312-2.504-14.404-7.096-20.094-51.094-63.322-146.468-102.658-248.904-102.658s-197.81 39.336-248.904 102.658c-4.592 5.69-7.096 12.782-7.096 20.094v640c0 13.564 8.554 25.656 21.344 30.174 12.792 4.518 27.042 0.48 35.56-10.078 39.242-48.636 115.532-78.848 199.096-78.848s159.854 30.212 199.096 78.848c6.196 7.678 15.418 11.908 24.91 11.908h63.988c9.49 0 18.716-4.23 24.91-11.908 39.242-48.636 115.532-78.848 199.096-78.848 83.562 0 159.852 30.212 199.096 78.848 8.52 10.554 22.766 14.594 35.56 10.078 12.792-4.518 21.344-16.61 21.344-30.174v-640c0-7.312-2.504-14.404-7.096-20.094zM448 820.58c-52.022-33.296-120.28-52.58-192-52.58-71.718 0-139.978 19.284-192 52.578v-557.898c40.904-43.826 113.22-70.68 192-70.68s151.096 26.856 192 70.68v557.9zM960 820.578c-52.024-33.294-120.282-52.578-192-52.578s-139.976 19.284-192 52.58v-557.9c40.904-43.824 113.22-70.68 192-70.68s151.096 26.854 192 70.68v557.898z",
                "M640 320h256v64h-256v-64z",
                "M640 448h256v64h-256v-64z",
                "M640 576h192v64h-192v-64z",
                "M128 320h256v64h-256v-64z",
                "M128 448h256v64h-256v-64z",
                "M128 576h192v64h-192v-64z"
            ]
        },
        Cross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M893.254 221.254l-90.508-90.508-290.746 290.744-290.746-290.744-90.508 90.506 290.746 290.748-290.746 290.746 90.508 90.508 290.746-290.746 290.746 290.746 90.508-90.51-290.744-290.744z"
            ]
        },
        MagnifyingGlass: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 864l-300.486-300.486c28.384-53.576 44.486-114.66 44.486-179.514 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c64.854 0 125.938-16.102 179.514-44.486l300.486 300.486 160-160zM128 384c0-141.384 114.616-256 256-256s256 114.616 256 256-114.616 256-256 256-256-114.616-256-256z"
            ]
        },
        Menu: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"
            ]
        },
        Question: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M576 768c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64z",
                "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z",
                "M512 640.25c-26.51 0-48-21.49-48-48v-32c0-33.618 12.964-63.854 38.532-89.87 18.864-19.194 41.778-33.59 63.936-47.512 45.564-28.624 65.532-43.978 65.532-70.868 0-29.252-16.88-48.788-31.042-60.026-22.734-18.040-54.328-27.974-88.958-27.974-52.534 0-99.792 35.082-114.924 85.314-7.648 25.382-34.422 39.758-59.806 32.114-25.382-7.648-39.76-34.422-32.114-59.806 13.112-43.52 40.398-82.63 76.832-110.124 37.71-28.456 82.668-43.498 130.012-43.498 56.208 0 108.994 17.322 148.63 48.776 43.444 34.474 67.37 82.496 67.37 135.224 0 82.76-63.846 122.872-110.462 152.158-39.112 24.57-57.538 38.114-57.538 56.092v32c0 26.51-21.49 48-48 48z"
            ]
        },
        Spinner: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 512c-1.278-66.862-15.784-133.516-42.576-194.462-26.704-61-65.462-116.258-113.042-161.92-47.552-45.696-103.944-81.82-164.984-105.652-61.004-23.924-126.596-35.352-191.398-33.966-64.81 1.282-129.332 15.374-188.334 41.356-59.048 25.896-112.542 63.47-156.734 109.576-44.224 46.082-79.16 100.708-102.186 159.798-23.114 59.062-34.128 122.52-32.746 185.27 1.286 62.76 14.964 125.148 40.134 182.206 25.088 57.1 61.476 108.828 106.11 151.548 44.61 42.754 97.472 76.504 154.614 98.72 57.118 22.304 118.446 32.902 179.142 31.526 60.708-1.29 120.962-14.554 176.076-38.914 55.15-24.282 105.116-59.48 146.366-102.644 41.282-43.14 73.844-94.236 95.254-149.43 13.034-33.458 21.88-68.4 26.542-103.798 1.246 0.072 2.498 0.12 3.762 0.12 35.346 0 64-28.652 64-64 0-1.796-0.094-3.572-0.238-5.332h0.238zM922.306 681.948c-23.472 53.202-57.484 101.4-99.178 141.18-41.67 39.81-91 71.186-144.244 91.79-53.228 20.678-110.29 30.452-166.884 29.082-56.604-1.298-112.596-13.736-163.82-36.474-51.25-22.666-97.684-55.49-135.994-95.712-38.338-40.198-68.528-87.764-88.322-139.058-19.87-51.284-29.228-106.214-27.864-160.756 1.302-54.552 13.328-108.412 35.254-157.69 21.858-49.3 53.498-93.97 92.246-130.81 38.73-36.868 84.53-65.87 133.874-84.856 49.338-19.060 102.136-28.006 154.626-26.644 52.5 1.306 104.228 12.918 151.562 34.034 47.352 21.050 90.256 51.502 125.624 88.782 35.396 37.258 63.21 81.294 81.39 128.688 18.248 47.392 26.782 98.058 25.424 148.496h0.238c-0.144 1.76-0.238 3.536-0.238 5.332 0 33.012 24.992 60.174 57.086 63.624-6.224 34.822-16.53 68.818-30.78 100.992z"
            ]
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ECMIcons;



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(82);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  transition: 0.5s all linear; }\n  :host div.container {\n    display: flex;\n    color: white;\n    height: 100%; }\n    :host div.container wc-icon {\n      margin: auto; }\n\n:host([showing]) {\n  display: block;\n  opacity: 1;\n  z-index: 9999; }\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(84);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host {\n  width: 100vw;\n  height: 100vh;\n  display: block; }\n  :host div.container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background: var(--primary-color);\n    color: var(--primary-color-font);\n    background-size: 100%;\n    background-position: right bottom; }\n    :host div.container div.title {\n      display: flex;\n      flex-direction: column;\n      margin: 12vh 0 10vh; }\n      :host div.container div.title img {\n        width: 15vw;\n        margin: auto; }\n      :host div.container div.title h1 {\n        font-weight: 400;\n        line-height: 40px;\n        margin: 0 auto;\n        text-align: center; }\n        :host div.container div.title h1 span {\n          font-weight: 700; }\n      :host div.container div.title h3 {\n        font-weight: 600;\n        margin: 20px auto 0;\n        text-align: center; }\n    :host div.container div.loginForm {\n      display: flex;\n      flex-direction: column;\n      width: 70vw;\n      margin: 0 auto; }\n      :host div.container div.loginForm div.input {\n        margin-bottom: 20px; }\n        :host div.container div.loginForm div.input input {\n          height: 40px;\n          padding: 5px 10px;\n          font-size: 16px;\n          font-weight: 300;\n          color: var(--primary-color-font);\n          width: 100%;\n          background-color: transparent;\n          border: none;\n          border-radius: 0;\n          border-bottom: 1px solid white; }\n          :host div.container div.loginForm div.input input::-webkit-input-placeholder {\n            color: #cee6f5;\n            font-weight: 300; }\n        :host div.container div.loginForm div.input wc-button {\n          margin-top: 20px;\n          color: white; }\n    :host div.container div.notices {\n      position: absolute;\n      width: 90%;\n      bottom: 20px;\n      left: 5%;\n      right: 5%;\n      text-align: center;\n      font-size: 11px;\n      line-height: 18px;\n      font-weight: 300;\n      color: #cee6f5; }\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Directory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_views_register__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_models__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_app_menu_app_menu__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_events_event_args_modal_event_args__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_loading_spinner_loading_spinner__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let Directory = class Directory extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        this.listPagination = 40;
        this.paginationStart = 1;
        this.paginationDebounce = 0;
        this.searchApplied = false;
        this.searchStrLength = 0;
        this.searchDebounce = 750;
        this._resetScroll = () => {
            const container = this.shadowRoot.querySelector(".directory-list");
            container.scrollTop = 0;
        };
        this._openMenu = () => {
            this.manager.emit("toggle-modal" /* ToggleModal */, new __WEBPACK_IMPORTED_MODULE_5_events_event_args_modal_event_args__["a" /* ModalEventArgs */]("main-menu"));
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.directory = this._getDirectoryEntries(this.listPagination * this.paginationStart);
        });
    }
    _setupEventListeners() {
        this.manager.on("data-refresh" /* DataRefresh */, () => {
            this.directory = this.manager.store.getDirectory();
        });
    }
    // === Private === //
    _getDirectoryEntries(amountToGet = this.listPagination, offset = 0) {
        const fullDirectory = this.manager.store.getDirectory();
        const count = amountToGet || fullDirectory.length;
        const skip = offset || 0;
        return [...fullDirectory.slice(skip, count)];
    }
    onScroll(e) {
        if (!this.searchApplied) {
            const container = e.currentTarget;
            const scrollHeight = container.scrollHeight;
            const scrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const boundary = containerHeight / 10;
            if (scrollHeight - scrollTop < (containerHeight + boundary)) {
                const now = new Date().getTime();
                if (now - this.paginationDebounce || 0 > 1000) {
                    this.paginationDebounce = now;
                    ++this.paginationStart;
                    this.directory = this._getDirectoryEntries(this.listPagination * this.paginationStart);
                }
                return;
            }
            if (scrollTop < boundary) {
                this.paginationStart = 1;
                this.directory = this._getDirectoryEntries(this.listPagination * this.paginationStart);
                return;
            }
        }
    }
    _searchDirectory(search) {
        this.paginationStart = 1;
        if (search) {
            const str = search.toLowerCase().trim();
            const tel = search.trim().replace(/\s/g, "");
            const dirToSearch = this.searchApplied && str.length > this.searchStrLength ? this.directory : this.manager.store.getDirectory();
            this.searchStrLength = str.length;
            this.directory = dirToSearch.filter(x => x.Name.toLowerCase().includes(str) ||
                x.Base.toLowerCase().includes(str) ||
                x.VehicleReg.toLowerCase().includes(str) ||
                x.TelNo.replace(/\s/g, "").includes(tel));
            this.searchApplied = true;
        }
        else {
            this.searchStrLength = 0;
            this.directory = this._getDirectoryEntries();
            this.searchApplied = false;
        }
        this.manager.emit(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["d" /* ClientEvents */].SearchComplete);
        // tslint:disable-next-line no-console
        // console.log(this.directory);
        this._resetScroll();
    }
    dialNumber(telNo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.manager.dialNumber(telNo);
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error(ex);
            }
        });
    }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(88)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_2_components__["a" /* ECMHeader */], { title: "Telephone Directory", icons: [
                    window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["i" /* IconButton */], { icon: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Menu, width: "20", height: "20", action: this._openMenu })
                ] }),
            window.__CTRender("div", { className: "search" },
                window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["k" /* SearchBox */], { disableExpand: true, searchIcon: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.MagnifyingGlass, cancelIcon: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Cross, action: (search) => this._searchDirectory(search), searchDebounce: this.searchDebounce })),
            window.__CTRender("div", { className: "directory-list", onscroll: (e) => this.onScroll(e) }, this.directory.length ?
                this.directory.map(x => window.__CTRender("div", { className: "row" },
                    window.__CTRender("h4", null,
                        x.Name,
                        window.__CTRender("br", null),
                        window.__CTRender("span", null, x.VehicleReg),
                        window.__CTRender("br", null),
                        window.__CTRender("span", null, x.Base)),
                    window.__CTRender("h5", { onClick: () => this.dialNumber(x.TelNo) }, x.TelNo)))
                : window.__CTRender("p", null, "No results found.")),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["l" /* TabNavigator */], { tabs: [
                    { iconDefinition: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Book, text: "Directory", view: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Directory },
                    { iconDefinition: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Question, text: "Help", view: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Help }
                ] }),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_4_components_app_menu_app_menu__["a" /* AppMenu */], { id: "main-menu" }),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_6_components_loading_spinner_loading_spinner__["a" /* LoadingSpinner */], null)));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["n" /* prop */])({ type: Array, attribute: false, default: [] })
], Directory.prototype, "directory", void 0);
Directory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Directory.tag })
], Directory);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(87);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s linear; }\n  :host div.modal-container {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    width: 70vw;\n    background: var(--default-bg-color);\n    z-index: -1;\n    transform: translateX(100vw);\n    transition: 0.2s all linear; }\n    :host div.modal-container div.modalButtons {\n      width: 70%;\n      margin: 20px auto auto; }\n      :host div.modal-container div.modalButtons wc-button {\n        margin-bottom: 10px; }\n\n:host([open]) {\n  z-index: 999;\n  opacity: 1; }\n  :host([open]) div.modal-container {\n    transform: translateX(30vw);\n    z-index: 1000; }\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(89);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host div.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column; }\n  :host div.container div.search {\n    flex: 0 0 60px;\n    background-color: var(--default-bg-color-dark);\n    border-bottom: 1px solid var(--default-border-color);\n    padding: 10px 20px; }\n    :host div.container div.search wc-search-box {\n      width: 100%; }\n  :host div.container div.directory-list {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: var(--default-bg-color); }\n    :host div.container div.directory-list p {\n      text-align: center; }\n    :host div.container div.directory-list div.row {\n      padding: 20px;\n      flex: 0 0 auto;\n      border-bottom: 1px solid var(--default-border-color);\n      display: flex;\n      justify-content: space-between; }\n      :host div.container div.directory-list div.row h4 {\n        margin: 0;\n        font-weight: 600;\n        font-size: 18px;\n        flex: 0 0 59%;\n        margin-right: 1%; }\n        :host div.container div.directory-list div.row h4 span {\n          font-weight: 400;\n          font-size: 16px;\n          color: var(--default-font-color-light); }\n      :host div.container div.directory-list div.row h5 {\n        flex: 0 0 40%;\n        padding: 10px 5px;\n        text-align: center;\n        background-color: var(--primary-color);\n        border-radius: 4px;\n        font-weight: 500;\n        margin: auto 0;\n        font-size: 18px;\n        color: var(--primary-color-font); }\n  :host div.container wc-tab-navigator {\n    color: var(--default-font-color-light); }\n", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Help; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_views_register__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_models__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_app_menu_app_menu__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_events_event_args_modal_event_args__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_loading_spinner_loading_spinner__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let Help = class Help extends __WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["a" /* BaseComponent */] {
    constructor() {
        // === Props === //
        super(...arguments);
        // === Private === //
        this._openMenu = () => {
            this.manager.emit("toggle-modal" /* ToggleModal */, new __WEBPACK_IMPORTED_MODULE_5_events_event_args_modal_event_args__["a" /* ModalEventArgs */]("main-menu"));
        };
        this._makeCall = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.manager.dialNumber("01228713902");
            }
            catch (ex) {
                // tslint:disable-next-line no-console
                console.error(ex);
            }
        });
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentStyles() {
        return (window.__CTRender("style", null, __webpack_require__(91)));
    }
    componentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_2_components__["a" /* ECMHeader */], { title: "Help", icons: [
                    window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["i" /* IconButton */], { icon: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Menu, width: "20", height: "20", action: this._openMenu })
                ] }),
            window.__CTRender("div", { className: "content" },
                window.__CTRender("p", null, "You can search by: Surname / Depot / Registration / Role / Mobile."),
                window.__CTRender("h4", null, "Hints & Tips"),
                window.__CTRender("ul", null,
                    window.__CTRender("li", null, "Use 1st part of reg"),
                    window.__CTRender("li", null, "Use partial surname"),
                    window.__CTRender("li", null, "Use first few letters of depot name"),
                    window.__CTRender("li", null, "Use partial mobile number"),
                    window.__CTRender("li", null,
                        "Search ",
                        window.__CTRender("strong", null, "Manager"),
                        " to list managers"),
                    window.__CTRender("li", null,
                        "Search ",
                        window.__CTRender("strong", null, "Trainer"),
                        " to list trainers"),
                    window.__CTRender("li", null,
                        "Please report any errors to the Epod Team on ",
                        window.__CTRender("span", { onClick: this._makeCall }, "01228 713902")))),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["l" /* TabNavigator */], { tabs: [
                    { iconDefinition: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Book, text: "Directory", view: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Directory },
                    { iconDefinition: __WEBPACK_IMPORTED_MODULE_3_models__["a" /* ECMIcons */].IcoMoon.Question, text: "Help", view: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Help }
                ] }),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_4_components_app_menu_app_menu__["a" /* AppMenu */], { id: "main-menu" }),
            window.__CTRender(__WEBPACK_IMPORTED_MODULE_6_components_loading_spinner_loading_spinner__["a" /* LoadingSpinner */], null)));
    }
};
Help = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__commontimeltd_infinity_framework__["m" /* component */])({ tag: __WEBPACK_IMPORTED_MODULE_1_views_register__["a" /* ECMViews */].Help.tag })
], Help);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(92);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* BORDERS */\nhtml, body {\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n\n:host {\n  color: var(--default-font-color, #333536);\n  font-weight: normal;\n  font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif); }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host h6 {\n    text-transform: uppercase;\n    font-size: 11px;\n    color: var(--primary-color);\n    margin: 0; }\n    :host h6.extraMargin {\n      margin-bottom: 10px; }\n  :host textarea {\n    font-family: var(--default-font-family, \"Roboto\", \"Open Sans\", Arial, Helvetica, sans-serif);\n    background-color: var(--default-bg-color-light); }\n    :host textarea::placeholder {\n      color: var(--default-placeholder-color); }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid var(--default-border-color);\n    margin: 20px 0;\n    padding: 0; }\n\n:host, :host * {\n  box-sizing: border-box; }\n  :host div.container div.content, :host * div.container div.content {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 80vh;\n    height: 80vh;\n    overflow-y: scroll;\n    padding: 20px;\n    background-color: var(--default-bg-color); }\n\n@media screen and (max-height: 450px) {\n  div.container div.content {\n    height: 100vh; } }\n\n:host div.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column; }\n  :host div.container div.content p {\n    margin: 0 0 20px; }\n  :host div.container div.content h4 {\n    margin: 0; }\n  :host div.container div.content ul li {\n    margin-bottom: 10px; }\n    :host div.container div.content ul li span {\n      color: var(--primary-color);\n      text-decoration: underline; }\n", ""]);

// exports


/***/ })
/******/ ]);