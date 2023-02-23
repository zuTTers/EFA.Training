(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkegret"] = self["webpackChunkegret"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);
      /* harmony import */


      var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/services/route-parts.service */
      43176);
      /* harmony import */


      var _shared_services_ui_lib_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/services/ui-lib-icon.service */
      67310);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(title, router, activeRoute, routePartsService, iconService, translate) {
          _classCallCheck(this, _AppComponent);

          this.title = title;
          this.router = router;
          this.activeRoute = activeRoute;
          this.routePartsService = routePartsService;
          this.iconService = iconService;
          this.translate = translate;
          this.appTitle = 'Oturum';
          this.pageTitle = '';
          iconService.init();
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePageTitle();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changePageTitle",
          value: function changePageTitle() {
            var _this = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
            })).subscribe(function (routeChange) {
              var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);

              if (!routeParts.length) {
                return _this.title.setTitle(_this.appTitle);
              } // Extract title from parts;


              _this.pageTitle = routeParts.reverse().map(function (part) {
                return part.title;
              }).reduce(function (partA, partI) {
                return "".concat(_this.translate.instant(partA), " > ").concat(_this.translate.instant(partI));
              });
              _this.pageTitle += " | ".concat(_this.appTitle);

              _this.title.setTitle(_this.pageTitle);
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_0__.RoutePartsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_ui_lib_icon_service__WEBPACK_IMPORTED_MODULE_1__.UILibIconService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      27094);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/grid-list */
      81197);
      /* harmony import */


      var _shared_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/session.service */
      28835);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      3069);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      93154);
      /* harmony import */


      var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/inmemory-db/inmemory-db.service */
      67567);
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.routing */
      76738);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      93555);
      /* harmony import */


      var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/services/error-handler.service */
      38998);
      /* harmony import */


      var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/interceptors/token.interceptor */
      93970);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592); // import { GestureConfig } from '@angular/material/core';
      // AoT requires an exported function for factories


      function _HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(httpClient);
      }

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ErrorHandler,
          useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__.ErrorHandlerService
        }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, // REQUIRED IF YOU USE JWT AUTHENTICATION
        {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
          useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__.TokenInterceptor,
          multi: true
        }, _shared_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
          }
        }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__.InMemoryWebApiModule.forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_2__.InMemoryDataService, {
          passThruUnknownUrl: true
        }), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__.rootRouterConfig, {
          useHash: false,
          relativeLinkResolution: 'legacy'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__.InMemoryWebApiModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    76738:
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "rootRouterConfig": function rootRouterConfig() {
          return (
            /* binding */
            _rootRouterConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/layouts/admin-layout/admin-layout.component */
      87751);
      /* harmony import */


      var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/components/layouts/auth-layout/auth-layout.component */
      54453);
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      87618);

      var _rootRouterConfig = [{
        path: '',
        redirectTo: 'others/blank',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        children: [{
          path: 'sessions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_sessions_sessions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/sessions/sessions.module */
            95134)).then(function (m) {
              return m.SessionsModule;
            });
          },
          data: {
            title: 'Session'
          }
        }]
      }, {
        path: '',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        children: [{
          path: 'others',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_views_others_others_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/others/others.module */
            4443)).then(function (m) {
              return m.OthersModule;
            });
          },
          data: {
            title: 'Others',
            breadcrumb: 'OTHERS'
          }
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_views_search-view_search-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/search-view/search-view.module */
            99510)).then(function (m) {
              return m.SearchViewModule;
            });
          }
        }, {
          path: 'system',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_System_system_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/System/system.module */
            70294)).then(function (m) {
              return m.SystemModule;
            });
          },
          data: {
            title: 'MAINMENU.SYSTEM',
            breadcrumb: 'MAINMENU.SYSTEM'
          }
        }, {
          path: 'general',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_General_general_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/General/general.module */
            81973)).then(function (m) {
              return m.GeneralModule;
            });
          },
          data: {
            title: 'MAINMENU.GENERAL',
            breadcrumb: 'MAINMENU.GENERAL'
          }
        }]
      }, {
        path: '**',
        redirectTo: 'sessions/404'
      }];
      /***/
    },

    /***/
    74283:
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/bottom-sheet-share/bottom-sheet-share.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BottomSheetShareComponent": function BottomSheetShareComponent() {
          return (
            /* binding */
            _BottomSheetShareComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      9765);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      64677);

      var _BottomSheetShareComponent = /*#__PURE__*/function () {
        function _BottomSheetShareComponent(bottomSheetRef) {
          _classCallCheck(this, _BottomSheetShareComponent);

          this.bottomSheetRef = bottomSheetRef;
        }

        _createClass(_BottomSheetShareComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openLink",
          value: function openLink(event) {
            this.bottomSheetRef.dismiss();
          }
        }]);

        return _BottomSheetShareComponent;
      }();

      _BottomSheetShareComponent.ɵfac = function BottomSheetShareComponent_Factory(t) {
        return new (t || _BottomSheetShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetRef));
      };

      _BottomSheetShareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BottomSheetShareComponent,
        selectors: [["app-bottom-sheet-share"]],
        decls: 19,
        vars: 0,
        consts: [[1, "icon-bottom-sheet", "icon-facebook"], [0, "xlink", "href", "#icon-facebook"], ["mat-list-item", "", "href", "https://www.facebook.com/sharer.php?u=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258"], ["mat-line", ""], [0, "xlink", "href", "#icon-twitter"], ["mat-list-item", "", "href", "https://twitter.com/intent/tweet?url=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258&hashtags=angular,template,landing"], [1, "icon-bottom-sheet", "icon-linkedin"], [0, "xlink", "href", "#icon-linkedin"], ["mat-list-item", "", "href", "https://www.linkedin.com/shareArticle?mini=true&url=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258"]],
        template: function BottomSheetShareComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share on Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tweet About Us!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Share on LinkedIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatLine],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tc2hlZXQtc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/route-parts.service */
      43176);
      /* harmony import */


      var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/layout.service */
      85682);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);

      function BreadcrumbComponent_div_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r3.url, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, part_r3.breadcrumb));
        }
      }

      function BreadcrumbComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_2_Template, 4, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.routeParts);
        }
      }

      function BreadcrumbComponent_div_2_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r6.url, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, part_r6.breadcrumb));
        }
      }

      function BreadcrumbComponent_div_2_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_div_2_ul_4_li_1_Template, 4, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.routeParts);
        }
      }

      function BreadcrumbComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BreadcrumbComponent_div_2_ul_4_Template, 2, 1, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r1.routeParts[ctx_r1.routeParts.length - 1] == null ? null : ctx_r1.routeParts[ctx_r1.routeParts.length - 1].breadcrumb), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.routeParts.length > 1);
        }
      }

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        // public isEnabled: boolean = true;
        function _BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
          var _this2 = this;

          _classCallCheck(this, _BreadcrumbComponent);

          this.router = router;
          this.routePartsService = routePartsService;
          this.activeRoute = activeRoute;
          this.layout = layout;
          this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
          this.routerEventSub = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd;
          })).subscribe(function (routeChange) {
            _this2.routeParts = _this2.routePartsService.generateRouteParts(_this2.activeRoute.snapshot); // generate url from parts

            _this2.routeParts.reverse().map(function (item, i) {
              item.breadcrumb = _this2.parseText(item);
              item.urlSegments.forEach(function (urlSegment, j) {
                if (j === 0) {
                  return item.url = "".concat(urlSegment.path);
                }

                item.url += "/".concat(urlSegment.path);
              });

              if (i === 0) {
                return item;
              } // prepend previous part to current part


              item.url = "".concat(_this2.routeParts[i - 1].url, "/").concat(item.url);
              return item;
            });
          });
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.routerEventSub) {
              this.routerEventSub.unsubscribe();
            }
          }
        }, {
          key: "parseText",
          value: function parseText(part) {
            if (!part.breadcrumb) {
              return '';
            }

            part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
              var r = part.params[b];
              return typeof r === 'string' ? r : a;
            });
            return part.breadcrumb;
          }
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_0__.RoutePartsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 3,
        vars: 2,
        consts: [[1, "container-dynamic"], ["class", "breadcrumb-bar", 4, "ngIf"], ["class", "breadcrumb-title", 4, "ngIf"], [1, "breadcrumb-bar"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb", 4, "ngIf"], [1, "text-muted", 3, "routerLink"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_div_2_Template, 5, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "simple");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "title");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    74678:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/button-loading/button-loading.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonLoadingComponent": function ButtonLoadingComponent() {
          return (
            /* binding */
            _ButtonLoadingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      48743);

      function ButtonLoadingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }
      }

      function ButtonLoadingComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ButtonLoadingComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          loading: a0,
          "mat-button": a1,
          "mat-raised-button": a2
        };
      };

      var _c1 = ["*"];

      var _ButtonLoadingComponent = /*#__PURE__*/function () {
        function _ButtonLoadingComponent() {
          _classCallCheck(this, _ButtonLoadingComponent);

          this.raised = true;
          this.loadingText = 'Please wait';
          this.type = 'submit';
        }

        _createClass(_ButtonLoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonLoadingComponent;
      }();

      _ButtonLoadingComponent.ɵfac = function ButtonLoadingComponent_Factory(t) {
        return new (t || _ButtonLoadingComponent)();
      };

      _ButtonLoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonLoadingComponent,
        selectors: [["button-loading"]],
        inputs: {
          loading: "loading",
          btnClass: "btnClass",
          raised: "raised",
          loadingText: "loadingText",
          type: "type",
          color: "color"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 14,
        consts: [["mat-button", "", 3, "color", "type", "disabled", "ngClass"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner"]],
        template: function ButtonLoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonLoadingComponent_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonLoadingComponent_span_2_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonLoadingComponent_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-loading ", ctx.btnClass, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c0, ctx.loading, !ctx.raised, ctx.raised));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    35831:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomizerComponent": function CustomizerComponent() {
          return (
            /* binding */
            _CustomizerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      21218);
      /* harmony import */


      var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/layout.service */
      85682);
      /* harmony import */


      var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/theme.service */
      22552);
      /* harmony import */


      var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/customizer.service */
      60360);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directives/egret-highlight.directive */
      12104);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      72742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      89713);

      function CustomizerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r2.isCustomizerOpen = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomizerComponent_div_1_mat_card_content_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("egretHighlight", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r4.layoutConf));
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_16_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_16_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var theme_r10 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r12.changeTheme(theme_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_16_mat_icon_1_Template, 2, 0, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", theme_r10.baseColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", theme_r10.isActive);
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_21_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_21_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

            var c_r14 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r16.customizer.changeSidebarColor(c_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_21_mat_icon_1_Template, 2, 0, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("color ", c_r14["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", c_r14.active);
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_29_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_29_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);

            var c_r18 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r20.customizer.changeFooterColor(c_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_29_mat_icon_1_Template, 2, 0, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("color ", c_r18["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", c_r18.active);
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_mat_radio_button_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-radio-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", type_r22.name, " ");
        }
      }

      function CustomizerComponent_div_1_mat_card_content_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Customize the template then copy configuration json.");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-radio-group", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r23.selectedLayout = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r25.changeLayoutStyle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-radio-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Top Navigation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-radio-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Side Navigation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Material Themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CustomizerComponent_div_1_mat_card_content_14_div_16_Template, 2, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Sidebar colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CustomizerComponent_div_1_mat_card_content_14_div_21_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Footer Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-checkbox", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r26.isFooterFixed = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r27.layout.publishLayoutChange({
              footerFixed: $event.checked
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Fixed Footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CustomizerComponent_div_1_mat_card_content_14_div_29_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r28.layoutConf.useBreadcrumb = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r29.toggleBreadcrumb($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Use breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "small", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Breadcrumb types");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-radio-group", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r30.layoutConf.breadcrumb = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-radio-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-radio-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Simple with title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-radio-group", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r31.selectedMenu = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_change_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r32.changeSidenav($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CustomizerComponent_div_1_mat_card_content_14_mat_radio_button_47_Template, 2, 2, "mat-radio-button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r33.perfectScrollbarEnabled = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r34.tooglePerfectScrollbar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Custom scrollbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r35.isRTL = $event;
          })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r36.toggleDir($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.selectedLayout);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "side");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.egretThemes);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.customizer.sidebarColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.isFooterFixed)("value", ctx_r5.selectedLayout !== "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.customizer.footerColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.layoutConf.useBreadcrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.layoutConf.breadcrumb)("disabled", !ctx_r5.layoutConf.useBreadcrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.selectedMenu)("disabled", ctx_r5.selectedLayout === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.sidenavTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.perfectScrollbarEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.isRTL);
        }
      }

      function CustomizerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r37.viewMode = "options";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r39.viewMode = "json";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Json");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r40.isCustomizerOpen = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CustomizerComponent_div_1_mat_card_content_13_Template, 9, 3, "mat-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CustomizerComponent_div_1_mat_card_content_14_Template, 54, 18, "mat-card-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r1.viewMode === "options" ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r1.viewMode === "json" ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewMode === "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewMode === "options");
        }
      }

      var _CustomizerComponent = /*#__PURE__*/function () {
        function _CustomizerComponent(navService, layout, themeService, customizer, renderer) {
          _classCallCheck(this, _CustomizerComponent);

          this.navService = navService;
          this.layout = layout;
          this.themeService = themeService;
          this.customizer = customizer;
          this.renderer = renderer;
          this.isCustomizerOpen = false;
          this.viewMode = 'options';
          this.sidenavTypes = [{
            name: 'Default Menu',
            value: 'default-menu'
          }, {
            name: 'Separator Menu',
            value: 'separator-menu'
          }, {
            name: 'Icon Menu',
            value: 'icon-menu'
          }];
          this.selectedMenu = 'icon-menu';
          this.isTopbarFixed = false;
          this.isFooterFixed = false;
          this.isRTL = false;
          this.perfectScrollbarEnabled = true;
        }

        _createClass(_CustomizerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.layoutConf = this.layout.layoutConf;
            this.selectedLayout = this.layoutConf.navigationPos;
            this.isTopbarFixed = this.layoutConf.topbarFixed;
            this.isRTL = this.layoutConf.dir === 'rtl';
            this.egretThemes = this.themeService.egretThemes;
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            // this.themeService.changeTheme(theme);
            this.layout.publishLayoutChange({
              matTheme: theme.name
            });
          }
        }, {
          key: "changeLayoutStyle",
          value: function changeLayoutStyle(data) {
            this.layout.publishLayoutChange({
              navigationPos: this.selectedLayout
            });
          }
        }, {
          key: "changeSidenav",
          value: function changeSidenav(data) {
            this.navService.publishNavigationChange(data.value);
          }
        }, {
          key: "toggleBreadcrumb",
          value: function toggleBreadcrumb(data) {
            this.layout.publishLayoutChange({
              useBreadcrumb: data.checked
            });
          }
        }, {
          key: "toggleTopbarFixed",
          value: function toggleTopbarFixed(data) {
            this.layout.publishLayoutChange({
              topbarFixed: data.checked
            });
          }
        }, {
          key: "toggleDir",
          value: function toggleDir(data) {
            var dir = data.checked ? 'rtl' : 'ltr';
            this.layout.publishLayoutChange({
              dir: dir
            });
          }
        }, {
          key: "tooglePerfectScrollbar",
          value: function tooglePerfectScrollbar(data) {
            this.layout.publishLayoutChange({
              perfectScrollbar: this.perfectScrollbarEnabled
            });
          }
        }]);

        return _CustomizerComponent;
      }();

      _CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
        return new (t || _CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
      };

      _CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CustomizerComponent,
        selectors: [["app-customizer"]],
        decls: 2,
        vars: 2,
        consts: [["class", "handle", 4, "ngIf"], ["id", "app-customizer", 4, "ngIf"], [1, "handle"], ["mat-fab", "", "color", "primary", 3, "click"], [1, "spin", "text-white"], ["id", "app-customizer"], [1, "p-0"], [1, "m-0", "light-gray"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "card-title-text"], ["mat-flat-button", "", 3, "color", "click"], ["fxFlex", "15px"], ["fxFlex", ""], ["mat-icon-button", "", 1, "card-control", 3, "click"], ["style", "min-height: 100vh", 4, "ngIf"], [3, "perfectScrollbar", 4, "ngIf"], [2, "min-height", "100vh"], [3, "egretHighlight"], ["href", "http://demos.ui-lib.com/egret-doc/#layout", "target", "_blank", "mat-mini-fab", ""], [3, "perfectScrollbar"], [1, "pb-16", "mb-16", "border-bottom"], [1, "title", "text-muted"], ["fxLayout", "column", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [1, "colors"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "mb-16"], [3, "ngModel", "value", "ngModelChange", "change"], [3, "ngModel", "ngModelChange", "change"], [1, "text-muted"], ["fxLayout", "column", 3, "ngModel", "disabled", "ngModelChange"], [1, "pb-16", "pos-rel", "mb-16", "border-bottom"], ["fxLayout", "column", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pb-16"], [1, "color", 3, "click"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"], [3, "click"]],
        template: function CustomizerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CustomizerComponent_div_0_Template, 4, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomizerComponent_div_1_Template, 15, 4, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCustomizerOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCustomizerOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_4__.EgretHighlightDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
        styles: [".handle[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 99;\n}\n\n#app-customizer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  top: 0;\n  right: 0;\n  min-width: 180px;\n  max-width: 280px;\n  z-index: 999;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 0 1rem;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 0;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 2rem;\n  max-height: calc(100vh - 80px);\n}\n\n.pos-rel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 99;\n}\n\n.pos-rel[_ngcontent-%COMP%]   .olay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n\n.colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  margin: 8px;\n  text-align: center;\n  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n}\n\n.colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   .active-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURFO0VBQ00seUJBQUE7RUFDQSw4QkFBQTtBQUdSOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2RUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUtOIiwiZmlsZSI6ImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZGxlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuI2FwcC1jdXN0b21pemVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgbWF4LXdpZHRoOiAyODBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDFyZW07XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAubWF0LWNhcmQtY29udGVudCAge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDJyZW07XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgfVxyXG59XHJcbi5wb3MtcmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgLm9sYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbn1cclxuXHJcbi5jb2xvcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5jb2xvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAxcHggcmdiYSgwLDAsMCwuMDYpLCAwIDFweCA0cHggcmdiYSgwLDAsMCwuMDMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmFjdGl2ZS1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFtkaXI9XCJydGxcIl0ge1xyXG4vLyAgIC5oYW5kbGUge31cclxuLy8gICAjYXBwLWN1c3RvbWl6ZXIge1xyXG4vLyAgICAgcmlnaHQ6IGF1dG87XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgIH1cclxuLy8gfSJdfQ== */"]
      });
      /***/
    },

    /***/
    93503:
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/egret-notifications2/egret-notifications2.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretNotifications2Component": function EgretNotifications2Component() {
          return (
            /* binding */
            _EgretNotifications2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);

      var _EgretNotifications2Component = /*#__PURE__*/function () {
        function _EgretNotifications2Component() {
          _classCallCheck(this, _EgretNotifications2Component);
        }

        _createClass(_EgretNotifications2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _EgretNotifications2Component;
      }();

      _EgretNotifications2Component.ɵfac = function EgretNotifications2Component_Factory(t) {
        return new (t || _EgretNotifications2Component)();
      };

      _EgretNotifications2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EgretNotifications2Component,
        selectors: [["egret-notifications2"]],
        decls: 3,
        vars: 0,
        consts: [["mode", "over", "position", "end", 1, ""]],
        template: function EgretNotifications2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenav],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1ub3RpZmljYXRpb25zMi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    5774:
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/components/egret-sidebar/egret-sidebar-helper.service.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretSidebarHelperService": function EgretSidebarHelperService() {
          return (
            /* binding */
            _EgretSidebarHelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _EgretSidebarHelperService = /*#__PURE__*/function () {
        function _EgretSidebarHelperService() {
          _classCallCheck(this, _EgretSidebarHelperService);

          this.sidebarList = [];
        }

        _createClass(_EgretSidebarHelperService, [{
          key: "setSidebar",
          value: function setSidebar(name, sidebar) {
            this.sidebarList[name] = sidebar;
          }
        }, {
          key: "getSidebar",
          value: function getSidebar(name) {
            return this.sidebarList[name];
          }
        }, {
          key: "removeSidebar",
          value: function removeSidebar(name) {
            if (!this.sidebarList[name]) {
              console.warn("The sidebar with name '".concat(name, "' doesn't exist."));
            } // remove sidebar


            delete this.sidebarList[name];
          }
        }]);

        return _EgretSidebarHelperService;
      }();

      _EgretSidebarHelperService.ɵfac = function EgretSidebarHelperService_Factory(t) {
        return new (t || _EgretSidebarHelperService)();
      };

      _EgretSidebarHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _EgretSidebarHelperService,
        factory: _EgretSidebarHelperService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    61061:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/egret-sidebar/egret-sidebar.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretSidebarComponent": function EgretSidebarComponent() {
          return (
            /* binding */
            _EgretSidebarComponent
          );
        },

        /* harmony export */
        "EgretSidebarTogglerDirective": function EgretSidebarTogglerDirective() {
          return (
            /* binding */
            _EgretSidebarTogglerDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/shared/services/match-media.service */
      21977);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      66140);
      /* harmony import */


      var _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./egret-sidebar-helper.service */
      5774);

      var _c0 = ["*"];

      var _EgretSidebarComponent = /*#__PURE__*/function () {
        function _EgretSidebarComponent(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
          _classCallCheck(this, _EgretSidebarComponent);

          this.matchMediaService = matchMediaService;
          this.mediaObserver = mediaObserver;
          this.sidebarHelperService = sidebarHelperService;
          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this.cdr = cdr;
          this.backdrop = null;
          this.lockedBreakpoint = "gt-sm";
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_EgretSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.sidebarHelperService.setSidebar(this.name, this);

            if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
              this.sidebarLockedOpen = true;
              this.opened = true;
            } else {
              this.sidebarLockedOpen = false;
              this.opened = false;
            }

            this.matchMediaService.onMediaChange.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribeAll)).subscribe(function () {
              // console.log("medua sub");
              if (_this3.mediaObserver.isActive(_this3.lockedBreakpoint)) {
                _this3.sidebarLockedOpen = true;
                _this3.opened = true;
              } else {
                _this3.sidebarLockedOpen = false;
                _this3.opened = false;
              }
            });
          }
        }, {
          key: "open",
          value: function open() {
            this.opened = true;

            if (!this.sidebarLockedOpen && !this.backdrop) {
              this.showBackdrop();
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.opened = false;
            this.hideBackdrop();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.opened) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: "showBackdrop",
          value: function showBackdrop() {
            var _this4 = this;

            this.backdrop = this._renderer.createElement("div");
            this.backdrop.classList.add("egret-sidebar-overlay");

            this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop); // Close sidebar onclick


            this.backdrop.addEventListener("click", function () {
              _this4.close();
            });
            this.cdr.markForCheck();
          }
        }, {
          key: "hideBackdrop",
          value: function hideBackdrop() {
            if (this.backdrop) {
              this.backdrop.parentNode.removeChild(this.backdrop);
              this.backdrop = null;
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
            this.sidebarHelperService.removeSidebar(this.name);
          }
        }]);

        return _EgretSidebarComponent;
      }();

      _EgretSidebarComponent.ɵfac = function EgretSidebarComponent_Factory(t) {
        return new (t || _EgretSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_0__.MatchMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.EgretSidebarHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
      };

      _EgretSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EgretSidebarComponent,
        selectors: [["egret-sidebar"]],
        hostVars: 8,
        hostBindings: function EgretSidebarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("position-right", ctx.right)("open", ctx.opened)("sidebar-locked-open", ctx.sidebarLockedOpen)("is-over", ctx.isOver);
          }
        },
        inputs: {
          name: "name",
          right: "right"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function EgretSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      var _EgretSidebarTogglerDirective = /*#__PURE__*/function () {
        function _EgretSidebarTogglerDirective(egretSidebarHelperService) {
          _classCallCheck(this, _EgretSidebarTogglerDirective);

          this.egretSidebarHelperService = egretSidebarHelperService;
        }

        _createClass(_EgretSidebarTogglerDirective, [{
          key: "onClick",
          value: function onClick() {
            this.egretSidebarHelperService.getSidebar(this.id).toggle();
          }
        }]);

        return _EgretSidebarTogglerDirective;
      }();

      _EgretSidebarTogglerDirective.ɵfac = function EgretSidebarTogglerDirective_Factory(t) {
        return new (t || _EgretSidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.EgretSidebarHelperService));
      };

      _EgretSidebarTogglerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _EgretSidebarTogglerDirective,
        selectors: [["", "egretSidebarToggler", ""]],
        hostBindings: function EgretSidebarTogglerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EgretSidebarTogglerDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          id: ["egretSidebarToggler", "id"]
        }
      });
      /***/
    },

    /***/
    42818:
    /*!************************************************************************************************!*\
      !*** ./src/app/shared/components/example-viewer-template/example-viewer-template.component.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretExampleViewerTemplateComponent": function EgretExampleViewerTemplateComponent() {
          return (
            /* binding */
            _EgretExampleViewerTemplateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      9112);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../example-viewer/example-viewer.component */
      27344);

      function EgretExampleViewerTemplateComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "egret-example-viewer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var example_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exampleId", example_r1)("path", ctx_r0.componentDirPath)("data", ctx_r0.exampleComponents[example_r1]);
        }
      }

      var _EgretExampleViewerTemplateComponent = /*#__PURE__*/function () {
        function _EgretExampleViewerTemplateComponent(route) {
          _classCallCheck(this, _EgretExampleViewerTemplateComponent);

          this.route = route;
          this.exampleComponents = {};
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_EgretExampleViewerTemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)(this.route.params, this.route.data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribeAll)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  params = _ref2[0],
                  data = _ref2[1];

              _this5.id = params['id'];
              _this5.examples = data.map[_this5.id];
              _this5.exampleComponents = data.components;
              _this5.componentDirPath = data.path;

              var title = _this5.id.replace('-', ' ');

              _this5.title = title.charAt(0).toUpperCase() + title.substring(1); // console.log(params, data);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
          }
        }]);

        return _EgretExampleViewerTemplateComponent;
      }();

      _EgretExampleViewerTemplateComponent.ɵfac = function EgretExampleViewerTemplateComponent_Factory(t) {
        return new (t || _EgretExampleViewerTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _EgretExampleViewerTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _EgretExampleViewerTemplateComponent,
        selectors: [["egret-example-viewer-template"]],
        decls: 2,
        vars: 1,
        consts: [[1, "m-333"], ["class", "mb-24", 4, "ngFor", "ngForOf"], [1, "mb-24"], [3, "exampleId", "path", "data"]],
        template: function EgretExampleViewerTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EgretExampleViewerTemplateComponent_div_1_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.examples);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_0__.EgretExampleViewerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXZpZXdlci10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    27344:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/example-viewer/example-viewer.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretExampleViewerComponent": function EgretExampleViewerComponent() {
          return (
            /* binding */
            _EgretExampleViewerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      23900);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      40859);
      /* harmony import */


      var _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../directives/egret-highlight.directive */
      12104);

      var _c0 = ["exampleContainer"];

      var _c1 = function _c1() {
        return ["xml"];
      }; // import { EXAMPLE_COMPONENTS } from "assets/examples/examples";


      var _EgretExampleViewerComponent = /*#__PURE__*/function () {
        function _EgretExampleViewerComponent(cfr) {
          _classCallCheck(this, _EgretExampleViewerComponent);

          this.cfr = cfr;
        } // Component ID


        _createClass(_EgretExampleViewerComponent, [{
          key: "exampleId",
          get: function get() {
            return this._exampleId;
          },
          set: function set(exampleId) {
            if (exampleId) {
              this._exampleId = exampleId;
            } else {
              console.log("EXAMPLE ID MISSING");
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.componentPath = this.path + this.exampleId + '/' + this.exampleId + '.component';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this.data) {
              console.log('EXAMPLE COMPONENT MISSING');
              return;
            }

            var componentFactory = this.cfr.resolveComponentFactory(this.data.component);
            this.exampleViewRef = this.exampleContainer.createComponent(componentFactory);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.exampleViewRef) {
              this.exampleViewRef.destroy();
            }
          }
        }]);

        return _EgretExampleViewerComponent;
      }();

      _EgretExampleViewerComponent.ɵfac = function EgretExampleViewerComponent_Factory(t) {
        return new (t || _EgretExampleViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
      };

      _EgretExampleViewerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _EgretExampleViewerComponent,
        selectors: [["egret-example-viewer"]],
        viewQuery: function EgretExampleViewerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.exampleContainer = _t.first);
          }
        },
        inputs: {
          exampleId: "exampleId",
          data: "data",
          path: "path"
        },
        decls: 28,
        vars: 6,
        consts: [[1, "mat-elevation-z1", "rounded", "overflow-hidden"], ["multi", "true", "displayMode", "flat", 1, "egret-example-viewer-accordion"], ["collapsedHeight", "48px", "expandedHeight", "48px", 1, "light-gray", "egret-example-viewer-header"], ["mat-button", "", "color", "warn"], [1, "example-viewer-tab-wrap"], [1, "mb-24"], ["label", "HTML"], ["id", "html", 1, "code-wrap"], ["egretHighlight", "", 3, "languages", "path"], ["label", "TS"], ["id", "ts", 1, "code-wrap"], ["egretHighlight", "", 3, "path"], ["label", "SCSS"], ["id", "scss", 1, "code-wrap"], ["expanded", "", 2, "position", "relative"], [1, "example-component", "pt-16"], ["exampleContainer", ""]],
        template: function EgretExampleViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-tab-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "code", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "code", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-expansion-panel", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("path", ctx.componentPath + ".html");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", ctx.componentPath + ".ts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", ctx.componentPath + ".scss");
          }
        },
        directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.EgretHighlightDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    960:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/fast-autocomplete/fast-autocomplete.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FastAutoCompleteComponent": function FastAutoCompleteComponent() {
          return (
            /* binding */
            _FastAutoCompleteComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/add/operator/debounceTime */
      183);
      /* harmony import */


      var _fast_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fast-autocomplete.service */
      88490);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      50296);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      64677);

      function FastAutoCompleteComponent_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", row_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r2.displayText, " ");
        }
      }

      var _FastAutoCompleteComponent = /*#__PURE__*/function () {
        function _FastAutoCompleteComponent(fastAutoCompleteService) {
          _classCallCheck(this, _FastAutoCompleteComponent);

          this.fastAutoCompleteService = fastAutoCompleteService;
          this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.autoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        }

        _createClass(_FastAutoCompleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            if (this.initValue && this.initValue != 0) {
              this.fastAutoCompleteService.getFilterDataList("", parseInt(this.initValue.toString()), this.endpoint).subscribe(function (response) {
                //this.navigationService.sessionControl(response);
                _this6.dataList = response.data;
                if (_this6.dataList.length > 0) _this6.autoFormControl.setValue(_this6.dataList[0]);
              });
            }

            this.autoFormControl.valueChanges.debounceTime(500).subscribe(function (value) {
              if (typeof value == 'string') {
                _this6.fastAutoCompleteService.getFilterDataList(value, 0, _this6.endpoint).subscribe(function (response) {
                  //this.navigationService.sessionControl(response);
                  _this6.dataList = response.data;
                });
              } else {
                _this6.onChange.emit(value.value);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "doFilter",
          value: function doFilter() {
            var _this7 = this;

            if (typeof this.currentValue == "string") this.fastAutoCompleteService.getFilterDataList(this.currentValue, 0, this.endpoint).subscribe(function (response) {
              //this.navigationService.sessionControl(response);
              _this7.dataList = response.data;
            });
          }
        }, {
          key: "autoCompleteDisplay",
          value: function autoCompleteDisplay(item) {
            if (item == undefined) {
              return;
            }

            return item.displayText;
          }
        }]);

        return _FastAutoCompleteComponent;
      }();

      _FastAutoCompleteComponent.ɵfac = function FastAutoCompleteComponent_Factory(t) {
        return new (t || _FastAutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_fast_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__.FastAutoCompleteService));
      };

      _FastAutoCompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _FastAutoCompleteComponent,
        selectors: [["fast-autocomplete"]],
        inputs: {
          placeholder: "placeholder",
          endpoint: "endpoint",
          initValue: "initValue",
          isRequired: "isRequired"
        },
        outputs: {
          onChange: "onChange"
        },
        decls: 5,
        vars: 8,
        consts: [["matInput", "", "name", "auto-complete", 3, "placeholder", "matAutocomplete", "required", "formControl"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function FastAutoCompleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-autocomplete", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FastAutoCompleteComponent_mat_option_4_Template, 2, 2, "mat-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", 100, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("required", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r0)("formControl", ctx.autoFormControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.autoCompleteDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataList);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88490:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/fast-autocomplete/fast-autocomplete.service.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FastAutoCompleteService": function FastAutoCompleteService() {
          return (
            /* binding */
            _FastAutoCompleteService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var _shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/auth/jwt-auth.service */
      93921);

      var _FastAutoCompleteService = /*#__PURE__*/function () {
        function _FastAutoCompleteService(httpClient, authService) {
          _classCallCheck(this, _FastAutoCompleteService);

          this.httpClient = httpClient;
          this.authService = authService;
          this.endPointBase = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
        }

        _createClass(_FastAutoCompleteService, [{
          key: "getFilterDataList",
          value: function getFilterDataList(search, value, endpoint) {
            var queryAnd = endpoint.indexOf('?') == -1 ? '?' : '&';
            return this.httpClient.post(this.endPointBase + endpoint + queryAnd + "session=" + this.authService.getToken(), {
              search: search,
              id: value
            });
          }
        }]);

        return _FastAutoCompleteService;
      }();

      _FastAutoCompleteService.ɵfac = function FastAutoCompleteService_Factory(t) {
        return new (t || _FastAutoCompleteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__.JwtAuthService));
      };

      _FastAutoCompleteService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _FastAutoCompleteService,
        factory: _FastAutoCompleteService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    66526:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 9,
        vars: 0,
        consts: [[1, "main-footer"], [1, "container-dynamic", "d-flex"], [1, "m-auto"], ["href", "#"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Uye Takip Sistemi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Design & Developed by \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " zuTTers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    20994:
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderSideComponent": function HeaderSideComponent() {
          return (
            /* binding */
            _HeaderSideComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../egret-notifications2/egret-notifications2.component */
      93503);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme.service */
      22552);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/auth/jwt-auth.service */
      93921);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _search_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../search/search-input-over/search-input-over.component */
      69552);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      64855);

      function HeaderSideComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r4.toggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function HeaderSideComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderSideComponent_button_9_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

            var lang_r6 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.setLang(lang_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("flag-icon mr-8 ", lang_r6.flag, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](lang_r6.name);
        }
      }

      var _c0 = function _c0() {
        return ["/profile/overview"];
      };

      var _c1 = function _c1() {
        return ["/profile/settings"];
      };

      var _HeaderSideComponent = /*#__PURE__*/function () {
        function _HeaderSideComponent(themeService, layout, translate, renderer, jwtAuth) {
          _classCallCheck(this, _HeaderSideComponent);

          this.themeService = themeService;
          this.layout = layout;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.availableLangs = [{
            name: 'EN',
            code: 'en',
            flag: 'flag-icon-us'
          }, {
            name: 'ES',
            code: 'es',
            flag: 'flag-icon-es'
          }, {
            name: 'TR',
            code: 'tr',
            flag: 'flag-icon-tr'
          }];
          this.currentLang = this.availableLangs[2];
        }

        _createClass(_HeaderSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.egretThemes = this.themeService.egretThemes;
            this.layoutConf = this.layout.layoutConf;
            this.translate.use(this.currentLang.code);
          }
        }, {
          key: "setLang",
          value: function setLang(lng) {
            this.currentLang = lng;
            this.translate.use(lng.code);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {// this.themeService.changeTheme(theme);
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.notificPanel.toggle();
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            if (this.layoutConf.sidebarStyle === 'closed') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              });
            }

            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            // compact --> full
            if (this.layoutConf.sidebarStyle === 'compact') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
                sidebarCompactToggle: false
              }, {
                transitionClass: true
              });
            } // * --> compact


            this.layout.publishLayoutChange({
              sidebarStyle: 'compact',
              sidebarCompactToggle: true
            }, {
              transitionClass: true
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(e) {//   console.log(e)
          }
        }]);

        return _HeaderSideComponent;
      }();

      _HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) {
        return new (t || _HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService));
      };

      _HeaderSideComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HeaderSideComponent,
        selectors: [["app-header-side"]],
        viewQuery: function HeaderSideComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_0__.EgretNotifications2Component, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.noti = _t);
          }
        },
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 33,
        vars: 21,
        consts: [[1, "topbar", "mat-bg-card"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["placeholder", "Ara", "resultPage", "/search"], ["mat-icon-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/logos/Logo.jpeg", "alt", ""], ["accountMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"]],
        template: function HeaderSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HeaderSideComponent_button_9_Template, 4, 4, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "egret-search-input-over", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_27_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("flag-icon ", ctx.currentLang.flag, " mr-8");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentLang.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.availableLangs);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 13, "PROFILE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 15, "SETTINGS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 17, "SIGNOUT"));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _search_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_4__.SearchInputOverComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    45201:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderTopComponent": function HeaderTopComponent() {
          return (
            /* binding */
            _HeaderTopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      21218);
      /* harmony import */


      var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/services/theme.service */
      22552);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      93921);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      64855);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/grid-list */
      81197);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      64677);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      61260);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      24751);

      function HeaderTopComponent_ul_5_li_1_div_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r7.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, item_r7.name), " ");
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_a_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemLvL2_r14.icon);
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r7.state ? "/" + item_r7.state : "", "/", itemLvL2_r14.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemLvL2_r14.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, itemLvL2_r14.name), " ");
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_mat_icon_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemLvL2_r14.icon);
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_li_10_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL3_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemLvL3_r25.icon);
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_li_10_mat_icon_2_Template, 2, 1, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL3_r25 = ctx.$implicit;

          var itemLvL2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r7.state ? "/" + item_r7.state : "", "", itemLvL2_r14.state ? "/" + itemLvL2_r14.state : "", "/", itemLvL3_r25.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemLvL3_r25.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, itemLvL3_r25.name), " ");
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_mat_icon_5_Template, 2, 1, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_li_10_Template, 5, 7, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var j_r15 = ctx_r31.index;
          var itemLvL2_r14 = ctx_r31.$implicit;

          var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("for", "drop-", i_r8, "", j_r15, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, itemLvL2_r14.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemLvL2_r14.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 10, itemLvL2_r14.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("id", "drop-", i_r8, "", j_r15, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", itemLvL2_r14.sub);
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_a_1_Template, 4, 6, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_div_2_Template, 11, 12, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemLvL2_r14.type !== "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemLvL2_r14.type === "dropDown");
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderTopComponent_ul_5_li_1_div_1_div_2_li_13_Template, 3, 2, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          var i_r8 = ctx_r32.index;
          var item_r7 = ctx_r32.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "drop-", i_r8, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, item_r7.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, item_r7.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "drop-", i_r8, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r7.sub);
        }
      }

      function HeaderTopComponent_ul_5_li_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_ul_5_li_1_div_1_a_1_Template, 5, 5, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderTopComponent_ul_5_li_1_div_1_div_2_Template, 14, 11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.type === "dropDown");
        }
      }

      function HeaderTopComponent_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_ul_5_li_1_div_1_Template, 3, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.type !== "separator");
        }
      }

      function HeaderTopComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_ul_5_li_1_Template, 2, 1, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
        }
      }

      function HeaderTopComponent_mat_select_7_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lang_r35.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", lang_r35.name, " ");
        }
      }

      function HeaderTopComponent_mat_select_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HeaderTopComponent_mat_select_7_Template_mat_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r36.currentLang = $event;
          })("selectionChange", function HeaderTopComponent_mat_select_7_Template_mat_select_selectionChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r38.setLang();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderTopComponent_mat_select_7_mat_option_1_Template, 2, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", "auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.currentLang);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.availableLangs);
        }
      }

      function HeaderTopComponent_mat_grid_tile_14_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function HeaderTopComponent_mat_grid_tile_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderTopComponent_mat_grid_tile_14_Template_mat_grid_tile_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);

            var theme_r39 = restoredCtx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r41.changeTheme(theme_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderTopComponent_mat_grid_tile_14_mat_icon_3_Template, 2, 0, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", theme_r39.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", theme_r39.baseColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", theme_r39.isActive);
        }
      }

      function HeaderTopComponent_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderTopComponent_button_37_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r43.toggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/profile/overview"];
      };

      var _c1 = function _c1() {
        return ["/profile/settings"];
      };

      var _HeaderTopComponent = /*#__PURE__*/function () {
        function _HeaderTopComponent(layout, navService, themeService, translate, renderer, jwtAuth) {
          _classCallCheck(this, _HeaderTopComponent);

          this.layout = layout;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.egretThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
        }

        _createClass(_HeaderTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.layoutConf = this.layout.layoutConf;
            this.egretThemes = this.themeService.egretThemes;
            this.menuItemSub = this.navService.menuItems$().subscribe(function (res) {
              res = res.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
              var limit = 4;
              var mainItems = res.slice(0, limit);

              if (res.length <= limit) {
                return _this8.menuItems = mainItems;
              }

              var subItems = res.slice(limit, res.length - 1);
              mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
              });
              _this8.menuItems = mainItems;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
          }
        }, {
          key: "setLang",
          value: function setLang() {
            this.translate.use(this.currentLang);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.layout.publishLayoutChange({
              matTheme: theme.name
            });
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.notificPanel.toggle();
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            if (this.layoutConf.sidebarStyle === 'closed') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              });
            }

            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          }
        }]);

        return _HeaderTopComponent;
      }();

      _HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
        return new (t || _HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService));
      };

      _HeaderTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _HeaderTopComponent,
        selectors: [["app-header-top"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 38,
        vars: 21,
        consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "container"], [1, "topnav"], [1, "topbar-branding"], ["src", "assets/images/logos/Logo.jpeg", "alt", "vts", 2, "width", "160px"], ["class", "menu", 4, "ngIf"], ["fxFlex", ""], ["placeholder", "", "id", "langToggle", "name", "currentLang", "class", "topbar-button-right", 3, "width", "ngModel", "ngModelChange", "selectionChange", 4, "ngIf"], ["mat-icon-button", "", "id", "schemeToggle", "matTooltip", "Color Schemes", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["themeMenu", "matMenu"], ["cols", "2", "rowHeight", "48px", 1, "theme-list"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-16", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/logos/Logo.jpeg", "alt", ""], ["accountMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], [1, "menu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "open", 4, "ngIf"], ["routerLinkActive", "open"], ["matRipple", "", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 3, "routerLink"], ["matRipple", "", 1, "toggle", 3, "for"], ["matRipple", ""], ["type", "checkbox", 3, "id"], ["routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["placeholder", "", "id", "langToggle", "name", "currentLang", 1, "topbar-button-right", 3, "ngModel", "ngModelChange", "selectionChange"], ["ngDefaultControl", "", 3, "value", 4, "ngFor", "ngForOf"], ["ngDefaultControl", "", 3, "value"], [3, "click"], ["mat-menu-item", "", 3, "title"], [1, "egret-swatch"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]],
        template: function HeaderTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderTopComponent_ul_5_Template, 2, 1, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HeaderTopComponent_mat_select_7_Template, 2, 4, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "format_color_fill");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-grid-list", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HeaderTopComponent_mat_grid_tile_14_Template, 4, 4, "mat-grid-tile", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-menu", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_31_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, HeaderTopComponent_button_37_Template, 3, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.layoutConf.isMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.layoutConf.isMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.egretThemes);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 13, "PROFILE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 15, "SETTINGS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 17, "SIGNOUT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridTile],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    87751:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLayoutComponent": function AdminLayoutComponent() {
          return (
            /* binding */
            _AdminLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/theme.service */
      22552);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/layout.service */
      85682);
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/auth/jwt-auth.service */
      93921);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      46794);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      48743);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../notifications/notifications.component */
      13293);
      /* harmony import */


      var _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../egret-notifications2/egret-notifications2.component */
      93503);
      /* harmony import */


      var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../header-top/header-top.component */
      45201);
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../sidebar-side/sidebar-side.component */
      95092);
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../sidebar-top/sidebar-top.component */
      6191);
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../header-side/header-side.component */
      20994);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../footer/footer.component */
      66526);

      function AdminLayoutComponent_app_header_top_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-header-top", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("notificPanel", _r9);
        }
      }

      function AdminLayoutComponent_app_sidebar_side_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-sidebar-side", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseenter", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r10.sidebarMouseenter($event);
          })("mouseleave", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseleave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r12.sidebarMouseleave($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_app_sidebar_top_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-sidebar-top");
        }
      }

      function AdminLayoutComponent_app_header_side_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-header-side", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("notificPanel", _r9);
        }
      }

      function AdminLayoutComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 21);
        }
      }

      function AdminLayoutComponent_app_footer_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-footer", 22);
        }
      }

      function AdminLayoutComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 21);
        }
      }

      function AdminLayoutComponent_app_footer_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-footer");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "visible": a0
        };
      };

      var _AdminLayoutComponent = /*#__PURE__*/function () {
        function _AdminLayoutComponent(router, translate, themeService, layout, cdr, jwtAuth) {
          var _this9 = this;

          _classCallCheck(this, _AdminLayoutComponent);

          this.router = router;
          this.translate = translate;
          this.themeService = themeService;
          this.layout = layout;
          this.cdr = cdr;
          this.jwtAuth = jwtAuth;
          this.isModuleLoading = false;
          this.scrollConfig = {};
          this.layoutConf = {};
          this.adminContainerClasses = {}; // Check Auth Token is valid

          this.jwtAuth.checkTokenIsValid().subscribe(); // Close sidenav after route change in mobile

          this.routerEventSub = router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd;
          })).subscribe(function (routeChange) {
            _this9.layout.adjustLayout({
              route: routeChange.url
            });

            _this9.scrollToTop();
          }); // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(_AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // this.layoutConf = this.layout.layoutConf;
            this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
              _this10.layoutConf = layoutConf; // console.log(this.layoutConf);

              _this10.adminContainerClasses = _this10.updateAdminContainerClasses(_this10.layoutConf);

              _this10.cdr.markForCheck();
            }); // FOR MODULE LOADER FLAG

            this.moduleLoaderSub = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteConfigLoadStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.ResolveStart) {
                _this10.isModuleLoading = true;
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteConfigLoadEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.ResolveEnd) {
                _this10.isModuleLoading = false;
              }
            });
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.layout.adjustLayout(event);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            var _this11 = this;

            if (document) {
              setTimeout(function () {
                var element;

                if (_this11.layoutConf.topbarFixed) {
                  element = document.querySelector('#rightside-content-hold');
                } else {
                  element = document.querySelector('#main-content-wrap');
                }

                element.scrollTop = 0;
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.moduleLoaderSub) {
              this.moduleLoaderSub.unsubscribe();
            }

            if (this.layoutConfSub) {
              this.layoutConfSub.unsubscribe();
            }

            if (this.routerEventSub) {
              this.routerEventSub.unsubscribe();
            }
          }
        }, {
          key: "closeSidebar",
          value: function closeSidebar() {
            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          }
        }, {
          key: "sidebarMouseenter",
          value: function sidebarMouseenter(e) {
            // console.log(this.layoutConf);
            if (this.layoutConf.sidebarStyle === 'compact') {
              this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              }, {
                transitionClass: true
              });
            }
          }
        }, {
          key: "sidebarMouseleave",
          value: function sidebarMouseleave(e) {
            // console.log(this.layoutConf);
            if (this.layoutConf.sidebarStyle === 'full' && this.layoutConf.sidebarCompactToggle) {
              this.layout.publishLayoutChange({
                sidebarStyle: 'compact'
              }, {
                transitionClass: true
              });
            }
          }
        }, {
          key: "updateAdminContainerClasses",
          value: function updateAdminContainerClasses(layoutConf) {
            return {
              'navigation-top': layoutConf.navigationPos === 'top',
              'sidebar-full': layoutConf.sidebarStyle === 'full',
              'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
              'compact-toggle-active': layoutConf.sidebarCompactToggle,
              'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
              'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
              'sidebar-closed': layoutConf.sidebarStyle === 'closed',
              'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
            };
          }
        }]);

        return _AdminLayoutComponent;
      }();

      _AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || _AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__.JwtAuthService));
      };

      _AdminLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
          }
        },
        decls: 23,
        vars: 24,
        consts: [[1, "app-admin-wrap", 3, "dir"], [3, "notificPanel", 4, "ngIf"], [3, "dir", "ngClass"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "main-content-wrap", 1, "main-content-wrap", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AdminLayoutComponent_app_header_top_1_Template, 1, 1, "app-header-top", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, AdminLayoutComponent_span_13_Template, 1, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, AdminLayoutComponent_app_footer_14_Template, 1, 0, "app-footer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, AdminLayoutComponent_span_15_Template, 1, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, AdminLayoutComponent_app_footer_16_Template, 1, 0, "app-footer", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_17_listener() {
              return ctx.closeSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-sidenav", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "app-notifications", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "egret-notifications2");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top" && ctx.layoutConf.isMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](22, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("notificPanel", _r9);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarDirective, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenav, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsComponent, _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_5__.EgretNotifications2Component, _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__.HeaderTopComponent, _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_7__.SidebarSideComponent, _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_8__.SidebarTopComponent, _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_9__.HeaderSideComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective, _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    54453:
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthLayoutComponent": function AuthLayoutComponent() {
          return (
            /* binding */
            _AuthLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      3984);

      var _AuthLayoutComponent = /*#__PURE__*/function () {
        function _AuthLayoutComponent(translate) {
          _classCallCheck(this, _AuthLayoutComponent);

          this.translate = translate; // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(_AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthLayoutComponent;
      }();

      _AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || _AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };

      _AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    13293:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsComponent": function NotificationsComponent() {
          return (
            /* binding */
            _NotificationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function NotificationsComponent_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var n_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r2.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r2.route || "/dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.time);
        }
      }

      function NotificationsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_5_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.clearAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _NotificationsComponent = /*#__PURE__*/function () {
        function _NotificationsComponent(router) {
          _classCallCheck(this, _NotificationsComponent);

          this.router = router; // Dummy notifications

          this.notifications = [{
            message: 'New contact added',
            icon: 'assignment_ind',
            time: '1 min ago',
            route: '/inbox',
            color: 'primary'
          }, {
            message: 'New message',
            icon: 'chat',
            time: '4 min ago',
            route: '/chat',
            color: 'accent'
          }, {
            message: 'Server rebooted',
            icon: 'settings_backup_restore',
            time: '12 min ago',
            route: '/charts',
            color: 'warn'
          }];
        }

        _createClass(_NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                _this12.notificPanel.close();
              }
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll(e) {
            e.preventDefault();
            this.notifications = [];
          }
        }]);

        return _NotificationsComponent;
      }();

      _NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || _NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _NotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NotificationsComponent,
        selectors: [["app-notifications"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [3, "routerLink"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-16"], ["href", "#", 3, "click"]],
        template: function NotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 9, 7, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_div_5_Template, 4, 0, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        encapsulation: 2
      });
      /***/
    },

    /***/
    50933:
    /*!***************************************************************!*\
      !*** ./src/app/shared/components/shared-components.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedComponentsModule": function SharedComponentsModule() {
          return (
            /* binding */
            _SharedComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _shared_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared-material.module */
      84390);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _search_search_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../search/search.module */
      47770);
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/shared-pipes.module */
      81233);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/flex-layout */
      374);
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../directives/shared-directives.module */
      72747);
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header-side/header-side.component */
      20994);
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidebar-side/sidebar-side.component */
      95092);
      /* harmony import */


      var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header-top/header-top.component */
      45201);
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar-top/sidebar-top.component */
      6191);
      /* harmony import */


      var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./customizer/customizer.component */
      35831);
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      87751);
      /* harmony import */


      var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layouts/auth-layout/auth-layout.component */
      54453);
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      13293);
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      798);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./footer/footer.component */
      66526);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../services/app-confirm/app-confirm.component */
      96413);
      /* harmony import */


      var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../services/app-loader/app-loader.component */
      33);
      /* harmony import */


      var _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./button-loading/button-loading.component */
      74678);
      /* harmony import */


      var _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./egret-sidebar/egret-sidebar.component */
      61061);
      /* harmony import */


      var _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./bottom-sheet-share/bottom-sheet-share.component */
      74283);
      /* harmony import */


      var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./example-viewer/example-viewer.component */
      27344);
      /* harmony import */


      var _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./example-viewer-template/example-viewer-template.component */
      42818);
      /* harmony import */


      var _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./egret-notifications2/egret-notifications2.component */
      93503);
      /* harmony import */


      var _fast_autocomplete_fast_autocomplete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./fast-autocomplete/fast-autocomplete.component */
      960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      74788); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
      // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
      // ONLY FOR DEMO
      // ALWAYS REQUIRED 


      var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__.HeaderTopComponent, _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_7__.SidebarTopComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__.SidenavComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent, _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_5__.SidebarSideComponent, _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_4__.HeaderSideComponent, _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__.AdminLayoutComponent, _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__.AuthLayoutComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_15__.AppComfirmComponent, _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_16__.AppLoaderComponent, _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_22__.EgretNotifications2Component, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__.CustomizerComponent, _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_17__.ButtonLoadingComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarTogglerDirective, _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_19__.BottomSheetShareComponent, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_20__.EgretExampleViewerComponent, _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_21__.EgretExampleViewerTemplateComponent, _fast_autocomplete_fast_autocomplete_component__WEBPACK_IMPORTED_MODULE_23__.FastAutoCompleteComponent];

      var _SharedComponentsModule = function _SharedComponentsModule() {
        _classCallCheck(this, _SharedComponentsModule);
      };

      _SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) {
        return new (t || _SharedComponentsModule)();
      };

      _SharedComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: _SharedComponentsModule
      });
      _SharedComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__.PerfectScrollbarModule, _search_search_module__WEBPACK_IMPORTED_MODULE_1__.SearchModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule, _shared_material_module__WEBPACK_IMPORTED_MODULE_0__.SharedMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](_SharedComponentsModule, {
          declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__.HeaderTopComponent, _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_7__.SidebarTopComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__.SidenavComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent, _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_5__.SidebarSideComponent, _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_4__.HeaderSideComponent, _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__.AdminLayoutComponent, _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__.AuthLayoutComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_15__.AppComfirmComponent, _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_16__.AppLoaderComponent, _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_22__.EgretNotifications2Component, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__.CustomizerComponent, _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_17__.ButtonLoadingComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarTogglerDirective, _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_19__.BottomSheetShareComponent, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_20__.EgretExampleViewerComponent, _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_21__.EgretExampleViewerTemplateComponent, _fast_autocomplete_fast_autocomplete_component__WEBPACK_IMPORTED_MODULE_23__.FastAutoCompleteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__.PerfectScrollbarModule, _search_search_module__WEBPACK_IMPORTED_MODULE_1__.SearchModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule, _shared_material_module__WEBPACK_IMPORTED_MODULE_0__.SharedMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule],
          exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_6__.HeaderTopComponent, _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_7__.SidebarTopComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__.SidenavComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent, _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_5__.SidebarSideComponent, _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_4__.HeaderSideComponent, _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__.AdminLayoutComponent, _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__.AuthLayoutComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_15__.AppComfirmComponent, _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_16__.AppLoaderComponent, _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_22__.EgretNotifications2Component, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__.CustomizerComponent, _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_17__.ButtonLoadingComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent, _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.EgretSidebarTogglerDirective, _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_19__.BottomSheetShareComponent, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_20__.EgretExampleViewerComponent, _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_21__.EgretExampleViewerTemplateComponent, _fast_autocomplete_fast_autocomplete_component__WEBPACK_IMPORTED_MODULE_23__.FastAutoCompleteComponent]
        });
      })();
      /***/

    },

    /***/
    95092:
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarSideComponent": function SidebarSideComponent() {
          return (
            /* binding */
            _SidebarSideComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      21218);
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme.service */
      22552);
      /* harmony import */


      var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/layout.service */
      85682);
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      93921);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      798);

      var _SidebarSideComponent = /*#__PURE__*/function () {
        function _SidebarSideComponent(navService, themeService, layout, jwtAuth) {
          _classCallCheck(this, _SidebarSideComponent);

          this.navService = navService;
          this.themeService = themeService;
          this.layout = layout;
          this.jwtAuth = jwtAuth;
        }

        _createClass(_SidebarSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
            this.menuItemsSub = this.navService.menuItems$().subscribe(function (menuItem) {
              _this13.menuItems = menuItem; //Checks item list has any icon type.

              _this13.hasIconTypeMenuItem = !!_this13.menuItems.filter(function (item) {
                return item.type === "icon";
              }).length;
            });
            this.layoutConf = this.layout.layoutConf;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.menuItemsSub) {
              this.menuItemsSub.unsubscribe();
            }
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            if (this.layoutConf.sidebarCompactToggle) {
              this.layout.publishLayoutChange({
                sidebarCompactToggle: false
              });
            } else {
              this.layout.publishLayoutChange({
                // sidebarStyle: "compact",
                sidebarCompactToggle: true
              });
            }
          }
        }]);

        return _SidebarSideComponent;
      }();

      _SidebarSideComponent.ɵfac = function SidebarSideComponent_Factory(t) {
        return new (t || _SidebarSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService));
      };

      _SidebarSideComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _SidebarSideComponent,
        selectors: [["app-sidebar-side"]],
        decls: 8,
        vars: 3,
        consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "branding"], [1, "", 2, "text-align", "center"], [1, ""], ["src", "assets/images/logos/Logo.jpeg", "alt", "", 1, "mat-elevation-z2"], [3, "items", "hasIconMenu", "iconMenuTitle"]],
        template: function SidebarSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-sidenav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.menuItems)("hasIconMenu", ctx.hasIconTypeMenuItem)("iconMenuTitle", ctx.iconTypeMenuTitle);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__.SidenavComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    6191:
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarTopComponent": function SidebarTopComponent() {
          return (
            /* binding */
            _SidebarTopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      21218);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      798);

      var _SidebarTopComponent = /*#__PURE__*/function () {
        function _SidebarTopComponent(navService) {
          _classCallCheck(this, _SidebarTopComponent);

          this.navService = navService;
        }

        _createClass(_SidebarTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.menuItemsSub = this.navService.menuItems$().subscribe(function (menuItem) {
              _this14.menuItems = menuItem.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// setTimeout(() => {
            //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
            //     suppressScrollX: true
            //   })
            // })
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // if(this.sidebarPS) {
            //   this.sidebarPS.destroy();
            // }
            if (this.menuItemsSub) {
              this.menuItemsSub.unsubscribe();
            }
          }
        }]);

        return _SidebarTopComponent;
      }();

      _SidebarTopComponent.ɵfac = function SidebarTopComponent_Factory(t) {
        return new (t || _SidebarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
      };

      _SidebarTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SidebarTopComponent,
        selectors: [["app-sidebar-top"]],
        decls: 3,
        vars: 1,
        consts: [[1, "sidebar-panel"], ["id", "sidebar-top-scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [3, "items"]],
        template: function SidebarTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidenav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.menuItems);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    798:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavComponent": function SidenavComponent() {
          return (
            /* binding */
            _SidenavComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      8971);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      50591);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      48743);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      64855);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../directives/dropdown-link.directive */
      2885);
      /* harmony import */


      var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/dropdown-anchor.directive */
      18163);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      64677);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      75629);

      function SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.icon);
        }
      }

      function SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", item_r3.svgIcon);
        }
      }

      function SidenavComponent_div_1_div_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r3.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", item_r3.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.svgIcon);
        }
      }

      function SidenavComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_Template, 3, 4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r3.disabled && item_r3.type === "icon");
        }
      }

      var _c0 = function _c0() {
        return {
          margin: "0 -24px"
        };
      };

      function SidenavComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-divider", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidenavComponent_div_1_div_5_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.iconTypeMenuTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
        }
      }

      function SidenavComponent_li_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, item_r10.name));
        }
      }

      function SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          background: a0
        };
      };

      function SidenavComponent_li_3_div_2_a_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r23.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, badge_r23.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](badge_r23.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_1_span_7_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r10.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r28.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, badge_r28.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](badge_r28.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidenavComponent_li_3_div_2_a_2_span_6_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", item_r10.state, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r35.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, badge_r35.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](badge_r35.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_3_span_7_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "/", itemLvL2_r38.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, itemLvL2_r38.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, itemLvL2_r38.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL3_r46 = ctx.$implicit;

          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "", itemLvL2_r38.state ? "/" + itemLvL2_r38.state : "", "/", itemLvL3_r46.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, itemLvL3_r46.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template, 5, 6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", itemLvL2_r38.sub);
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template, 5, 5, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template, 7, 3, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", itemLvL2_r38.type !== "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r10.sub);
        }
      }

      function SidenavComponent_li_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_Template, 8, 7, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_2_Template, 7, 6, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_a_3_Template, 10, 6, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidenavComponent_li_3_div_2_ul_4_Template, 2, 1, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");
        }
      }

      function SidenavComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_li_3_div_1_Template, 5, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type === "separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r10.disabled && item_r10.type !== "separator" && item_r10.type !== "icon");
        }
      }

      var _SidenavComponent = /*#__PURE__*/function () {
        function _SidenavComponent() {
          _classCallCheck(this, _SidenavComponent);

          this.menuItems = [];
        }

        _createClass(_SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Only for demo purpose

        }, {
          key: "addMenuItem",
          value: function addMenuItem() {
            this.menuItems.push({
              name: 'ITEM',
              type: 'dropDown',
              tooltip: 'Item',
              icon: 'done',
              state: 'material',
              sub: [{
                name: 'SUBITEM',
                state: 'cards'
              }, {
                name: 'SUBITEM',
                state: 'buttons'
              }]
            });
          }
        }]);

        return _SidenavComponent;
      }();

      _SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || _SidenavComponent)();
      };

      _SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SidenavComponent,
        selectors: [["app-sidenav"]],
        inputs: {
          menuItems: ["items", "menuItems"],
          hasIconTypeMenuItem: ["hasIconMenu", "hasIconTypeMenuItem"],
          iconTypeMenuTitle: ["iconMenuTitle", "iconTypeMenuTitle"]
        },
        decls: 4,
        vars: 2,
        consts: [[1, "sidenav-hold"], ["class", "icon-menu mb-16", 4, "ngIf"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "icon-menu", "mb-16"], [1, "mb-16", "nav-item-sep"], [3, "ngStyle"], [1, "text-muted", "icon-menu-title"], ["class", "icon-menu-item", 4, "ngFor", "ngForOf"], [1, "icon-menu-item"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], [1, "item-name", "lvl1"], ["fxFlex", ""], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 6, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidenavComponent_li_3_Template, 3, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasIconTypeMenuItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultStyleDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownAnchorDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    18163:
    /*!****************************************************************!*\
      !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownAnchorDirective": function DropdownAnchorDirective() {
          return (
            /* binding */
            _DropdownAnchorDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      2885);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _DropdownAnchorDirective = /*#__PURE__*/function () {
        function _DropdownAnchorDirective(navlink) {
          _classCallCheck(this, _DropdownAnchorDirective);

          this.navlink = navlink;
        }

        _createClass(_DropdownAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return _DropdownAnchorDirective;
      }();

      _DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) {
        return new (t || _DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective));
      };

      _DropdownAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _DropdownAnchorDirective,
        selectors: [["", "appDropdownToggle", ""]],
        hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    2885:
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownLinkDirective": function DropdownLinkDirective() {
          return (
            /* binding */
            _DropdownLinkDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dropdown.directive */
      8971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _DropdownLinkDirective = /*#__PURE__*/function () {
        function _DropdownLinkDirective(nav) {
          _classCallCheck(this, _DropdownLinkDirective);

          this.nav = nav;
        }

        _createClass(_DropdownLinkDirective, [{
          key: "open",
          get: function get() {
            return this._open;
          },
          set: function set(value) {
            this._open = value; // if (value) {
            //   this.nav.closeOtherLinks(this);
            // }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
          }
        }]);

        return _DropdownLinkDirective;
      }();

      _DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) {
        return new (t || _DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective));
      };

      _DropdownLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _DropdownLinkDirective,
        selectors: [["", "appDropdownLink", ""]],
        hostVars: 2,
        hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
          }
        },
        inputs: {
          group: "group",
          open: "open"
        }
      });
      /***/
    },

    /***/
    8971:
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/dropdown.directive.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppDropdownDirective": function AppDropdownDirective() {
          return (
            /* binding */
            _AppDropdownDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _AppDropdownDirective = /*#__PURE__*/function () {
        function _AppDropdownDirective(router) {
          _classCallCheck(this, _AppDropdownDirective);

          this.router = router;
          this.navlinks = [];
        }

        _createClass(_AppDropdownDirective, [{
          key: "closeOtherLinks",
          value: function closeOtherLinks(openLink) {
            this.navlinks.forEach(function (link) {
              if (link !== openLink) {
                link.open = false;
              }
            });
          }
        }, {
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            return this.router.url;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this._router = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
            })).subscribe(function (event) {
              _this15.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this15.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this15.closeOtherLinks(link);
                  }
                }
              });
            });
          }
        }]);

        return _AppDropdownDirective;
      }();

      _AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) {
        return new (t || _AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _AppDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _AppDropdownDirective,
        selectors: [["", "appDropdown", ""]]
      });
      /***/
    },

    /***/
    12104:
    /*!****************************************************************!*\
      !*** ./src/app/shared/directives/egret-highlight.directive.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretHighlightDirective": function EgretHighlightDirective() {
          return (
            /* binding */
            _EgretHighlightDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! highlight.js */
      96786);
      /* harmony import */


      var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      58497);

      var _EgretHighlightDirective = /*#__PURE__*/function () {
        function _EgretHighlightDirective(el, cdr, _zone, http) {
          _classCallCheck(this, _EgretHighlightDirective);

          this.el = el;
          this.cdr = cdr;
          this._zone = _zone;
          this.http = http;
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_EgretHighlightDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            if (this.code) {
              this.highlightElement(this.code);
            }

            if (this.path) {
              this.highlightedCode = "Loading...";
              this.http.get(this.path, {
                responseType: "text"
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribeAll)).subscribe(function (response) {
                _this16.highlightElement(response, _this16.languages);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["code"] && changes["code"].currentValue && changes["code"].currentValue !== changes["code"].previousValue) {
              this.highlightElement(this.code); // console.log('hljs on change', changes)
            }
          }
        }, {
          key: "highlightElement",
          value: function highlightElement(code, languages) {
            var _this17 = this;

            this._zone.runOutsideAngular(function () {
              var res = highlight_js__WEBPACK_IMPORTED_MODULE_0__.highlightAuto(code);
              _this17.highlightedCode = res.value; // this.cdr.detectChanges();
              // console.log(languages)
            });
          }
        }]);

        return _EgretHighlightDirective;
      }();

      _EgretHighlightDirective.ɵfac = function EgretHighlightDirective_Factory(t) {
        return new (t || _EgretHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _EgretHighlightDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _EgretHighlightDirective,
        selectors: [["", "egretHighlight", ""]],
        hostVars: 3,
        hostBindings: function EgretHighlightDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hljs", true);
          }
        },
        inputs: {
          path: "path",
          code: ["egretHighlight", "code"],
          languages: "languages"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });
      /***/
    },

    /***/
    33098:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretSideNavToggleDirective": function EgretSideNavToggleDirective() {
          return (
            /* binding */
            _EgretSideNavToggleDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      66140);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);

      var _EgretSideNavToggleDirective = /*#__PURE__*/function () {
        function _EgretSideNavToggleDirective(mediaObserver, sideNav) {
          _classCallCheck(this, _EgretSideNavToggleDirective);

          this.mediaObserver = mediaObserver;
          this.sideNav = sideNav;
        }

        _createClass(_EgretSideNavToggleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initSideNav();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.screenSizeWatcher) {
              this.screenSizeWatcher.unsubscribe();
            }
          }
        }, {
          key: "updateSidenav",
          value: function updateSidenav() {
            var self = this;
            setTimeout(function () {
              self.sideNav.opened = !self.isMobile;
              self.sideNav.mode = self.isMobile ? 'over' : 'side';
            });
          }
        }, {
          key: "initSideNav",
          value: function initSideNav() {
            var _this18 = this;

            this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm'); // console.log(this.isMobile)

            this.updateSidenav();
            this.screenSizeWatcher = this.mediaObserver.media$.subscribe(function (change) {
              _this18.isMobile = change.mqAlias == 'xs' || change.mqAlias == 'sm';

              _this18.updateSidenav();
            });
          }
        }]);

        return _EgretSideNavToggleDirective;
      }();

      _EgretSideNavToggleDirective.ɵfac = function EgretSideNavToggleDirective_Factory(t) {
        return new (t || _EgretSideNavToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenav, 11));
      };

      _EgretSideNavToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _EgretSideNavToggleDirective,
        selectors: [["", "EgretSideNavToggle", ""]]
      });
      /***/
    },

    /***/
    46976:
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.directive.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretSidenavHelperDirective": function EgretSidenavHelperDirective() {
          return (
            /* binding */
            _EgretSidenavHelperDirective
          );
        },

        /* harmony export */
        "EgretSidenavTogglerDirective": function EgretSidenavTogglerDirective() {
          return (
            /* binding */
            _EgretSidenavTogglerDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/shared/services/match-media.service */
      21977);
      /* harmony import */


      var _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./egret-sidenav-helper.service */
      15991);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      66140);

      var _EgretSidenavHelperDirective = /*#__PURE__*/function () {
        function _EgretSidenavHelperDirective(matchMediaService, egretSidenavHelperService, matSidenav, mediaObserver) {
          _classCallCheck(this, _EgretSidenavHelperDirective);

          this.matchMediaService = matchMediaService;
          this.egretSidenavHelperService = egretSidenavHelperService;
          this.matSidenav = matSidenav;
          this.mediaObserver = mediaObserver; // Set the default value

          this.isOpen = true;
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_EgretSidenavHelperDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);

            if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
              this.isOpen = true;
              this.matSidenav.mode = "side";
              this.matSidenav.toggle(true);
            } else {
              this.isOpen = false;
              this.matSidenav.mode = "over";
              this.matSidenav.toggle(false);
            }

            this.matchMediaService.onMediaChange.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribeAll)).subscribe(function () {
              if (_this19.mediaObserver.isActive(_this19.isOpenBreakpoint)) {
                _this19.isOpen = true;
                _this19.matSidenav.mode = "side";

                _this19.matSidenav.toggle(true);
              } else {
                _this19.isOpen = false;
                _this19.matSidenav.mode = "over";

                _this19.matSidenav.toggle(false);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
          }
        }]);

        return _EgretSidenavHelperDirective;
      }();

      _EgretSidenavHelperDirective.ɵfac = function EgretSidenavHelperDirective_Factory(t) {
        return new (t || _EgretSidenavHelperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_0__.MatchMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_1__.EgretSidenavHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver));
      };

      _EgretSidenavHelperDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _EgretSidenavHelperDirective,
        selectors: [["", "egretSidenavHelper", ""]],
        hostVars: 2,
        hostBindings: function EgretSidenavHelperDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-open", ctx.isOpen);
          }
        },
        inputs: {
          id: ["egretSidenavHelper", "id"],
          isOpenBreakpoint: ["isOpen", "isOpenBreakpoint"]
        }
      });

      var _EgretSidenavTogglerDirective = /*#__PURE__*/function () {
        function _EgretSidenavTogglerDirective(egretSidenavHelperService) {
          _classCallCheck(this, _EgretSidenavTogglerDirective);

          this.egretSidenavHelperService = egretSidenavHelperService;
        }

        _createClass(_EgretSidenavTogglerDirective, [{
          key: "onClick",
          value: function onClick() {
            // console.log(this.egretSidenavHelperService.getSidenav(this.id))
            this.egretSidenavHelperService.getSidenav(this.id).toggle();
          }
        }]);

        return _EgretSidenavTogglerDirective;
      }();

      _EgretSidenavTogglerDirective.ɵfac = function EgretSidenavTogglerDirective_Factory(t) {
        return new (t || _EgretSidenavTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_1__.EgretSidenavHelperService));
      };

      _EgretSidenavTogglerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _EgretSidenavTogglerDirective,
        selectors: [["", "egretSidenavToggler", ""]],
        hostBindings: function EgretSidenavTogglerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EgretSidenavTogglerDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          id: ["egretSidenavToggler", "id"]
        }
      });
      /***/
    },

    /***/
    15991:
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.service.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgretSidenavHelperService": function EgretSidenavHelperService() {
          return (
            /* binding */
            _EgretSidenavHelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _EgretSidenavHelperService = /*#__PURE__*/function () {
        function _EgretSidenavHelperService() {
          _classCallCheck(this, _EgretSidenavHelperService);

          this.sidenavList = [];
        }

        _createClass(_EgretSidenavHelperService, [{
          key: "setSidenav",
          value: function setSidenav(id, sidenav) {
            this.sidenavList[id] = sidenav;
          }
        }, {
          key: "getSidenav",
          value: function getSidenav(id) {
            return this.sidenavList[id];
          }
        }]);

        return _EgretSidenavHelperService;
      }();

      _EgretSidenavHelperService.ɵfac = function EgretSidenavHelperService_Factory(t) {
        return new (t || _EgretSidenavHelperService)();
      };

      _EgretSidenavHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _EgretSidenavHelperService,
        factory: _EgretSidenavHelperService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    80223:
    /*!**********************************************************!*\
      !*** ./src/app/shared/directives/font-size.directive.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FontSizeDirective": function FontSizeDirective() {
          return (
            /* binding */
            _FontSizeDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _FontSizeDirective = /*#__PURE__*/function () {
        function _FontSizeDirective(fontSize, el) {
          _classCallCheck(this, _FontSizeDirective);

          this.fontSize = fontSize;
          this.el = el;
        }

        _createClass(_FontSizeDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.el.nativeElement.fontSize = this.fontSize;
          }
        }]);

        return _FontSizeDirective;
      }();

      _FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) {
        return new (t || _FontSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('fontSize'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _FontSizeDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FontSizeDirective,
        selectors: [["", "fontSize", ""]]
      });
      /***/
    },

    /***/
    93001:
    /*!**********************************************************!*\
      !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollToDirective": function ScrollToDirective() {
          return (
            /* binding */
            _ScrollToDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _ScrollToDirective = /*#__PURE__*/function () {
        function _ScrollToDirective(elmID, el) {
          _classCallCheck(this, _ScrollToDirective);

          this.elmID = elmID;
          this.el = el;
        }

        _createClass(_ScrollToDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "currentYPosition",
          value: function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset; // Internet Explorer 6 - standards mode

            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6, 7 and 8

            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
          }
        }, {
          key: "elmYPosition",
          value: function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;

            while (node.offsetParent && node.offsetParent != document.body) {
              node = node.offsetParent;
              y += node.offsetTop;
            }

            return y;
          }
        }, {
          key: "smoothScroll",
          value: function smoothScroll() {
            if (!this.elmID) return;
            var startY = this.currentYPosition();
            var stopY = this.elmYPosition(this.elmID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;

            if (distance < 100) {
              scrollTo(0, stopY);
              return;
            }

            var speed = Math.round(distance / 50);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;

            if (stopY > startY) {
              for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
              }

              return;
            }

            for (var i = startY; i > stopY; i -= step) {
              setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
              leapY -= step;
              if (leapY < stopY) leapY = stopY;
              timer++;
            }

            return false;
          }
        }]);

        return _ScrollToDirective;
      }();

      _ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
        return new (t || _ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _ScrollToDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ScrollToDirective,
        selectors: [["", "scrollTo", ""]],
        hostBindings: function ScrollToDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) {
              return ctx.smoothScroll($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    72747:
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/shared-directives.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedDirectivesModule": function SharedDirectivesModule() {
          return (
            /* binding */
            _SharedDirectivesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _font_size_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./font-size.directive */
      80223);
      /* harmony import */


      var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scroll-to.directive */
      93001);
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdown.directive */
      8971);
      /* harmony import */


      var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dropdown-anchor.directive */
      18163);
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      2885);
      /* harmony import */


      var _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./egret-side-nav-toggle.directive */
      33098);
      /* harmony import */


      var _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./egret-sidenav-helper/egret-sidenav-helper.directive */
      46976);
      /* harmony import */


      var _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./egret-highlight.directive */
      12104);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var directives = [_font_size_directive__WEBPACK_IMPORTED_MODULE_0__.FontSizeDirective, _scroll_to_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollToDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownLinkDirective, _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_5__.EgretSideNavToggleDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavHelperDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavTogglerDirective, _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_7__.EgretHighlightDirective];

      var _SharedDirectivesModule = function _SharedDirectivesModule() {
        _classCallCheck(this, _SharedDirectivesModule);
      };

      _SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(t) {
        return new (t || _SharedDirectivesModule)();
      };

      _SharedDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _SharedDirectivesModule
      });
      _SharedDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_SharedDirectivesModule, {
          declarations: [_font_size_directive__WEBPACK_IMPORTED_MODULE_0__.FontSizeDirective, _scroll_to_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollToDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownLinkDirective, _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_5__.EgretSideNavToggleDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavHelperDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavTogglerDirective, _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_7__.EgretHighlightDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule],
          exports: [_font_size_directive__WEBPACK_IMPORTED_MODULE_0__.FontSizeDirective, _scroll_to_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollToDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownLinkDirective, _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_5__.EgretSideNavToggleDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavHelperDirective, _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_6__.EgretSidenavTogglerDirective, _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_7__.EgretHighlightDirective]
        });
      })();
      /***/

    },

    /***/
    87618:
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      93921);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(router, jwtAuth) {
          _classCallCheck(this, _AuthGuard);

          this.router = router;
          this.jwtAuth = jwtAuth;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.jwtAuth.isLoggedIn()) {
              return true;
            } else {
              this.router.navigate(["/sessions/signin"], {
                queryParams: {
                  "return": state.url
                }
              });
              return false;
            }
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    14564:
    /*!**************************************************!*\
      !*** ./src/app/shared/guards/user-role.guard.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserRoleGuard": function UserRoleGuard() {
          return (
            /* binding */
            _UserRoleGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      93921);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      3069);

      var _UserRoleGuard = /*#__PURE__*/function () {
        function _UserRoleGuard(router, jwtAuth, snack) {
          _classCallCheck(this, _UserRoleGuard);

          this.router = router;
          this.jwtAuth = jwtAuth;
          this.snack = snack;
        }

        _createClass(_UserRoleGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.jwtAuth.getUser();

            if (user && route.data && route.data.roles && route.data.roles.includes(user.role)) {
              return true;
            } else {
              this.snack.open('You do not have access to this page!', 'OK');
              return false;
            }
          }
        }]);

        return _UserRoleGuard;
      }();

      _UserRoleGuard.ɵfac = function UserRoleGuard_Factory(t) {
        return new (t || _UserRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
      };

      _UserRoleGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UserRoleGuard,
        factory: _UserRoleGuard.ɵfac
      });
      /***/
    },

    /***/
    54183:
    /*!**********************************************!*\
      !*** ./src/app/shared/helpers/url.helper.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getQueryParam": function getQueryParam() {
          return (
            /* binding */
            _getQueryParam
          );
        }
        /* harmony export */

      });

      function _getQueryParam(prop) {
        var params = {};
        var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
        var definitions = search.split('&');
        definitions.forEach(function (val, key) {
          var parts = val.split('=', 2);
          params[parts[0]] = parts[1];
        });
        return prop && prop in params ? params[prop] : params;
      }
      /***/

    },

    /***/
    75643:
    /*!***********************************************!*\
      !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatDB": function ChatDB() {
          return (
            /* binding */
            _ChatDB
          );
        }
        /* harmony export */

      });

      var _ChatDB = function _ChatDB() {
        _classCallCheck(this, _ChatDB);
      };

      _ChatDB.user = [{
        id: "7863a6802ez0e277a0f98534",
        name: "John Doe",
        avatar: "assets/images/face-1.jpg",
        status: "online",
        chatInfo: [{
          chatId: "89564a680b3249760ea21fe77",
          contactId: "323sa680b3249760ea21rt47",
          contactName: "Frank Powell",
          unread: 4,
          lastChatTime: "2017-06-12T02:10:18.931Z"
        }, {
          chatId: "3289564a680b2134760ea21fe7753",
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          contactName: "Betty Diaz",
          unread: 0,
          lastChatTime: "2019-03-10T02:10:18.931Z"
        }]
      }];
      _ChatDB.contacts = [{
        id: "323sa680b3249760ea21rt47",
        name: "Frank Powell",
        avatar: "assets/images/faces/13.jpg",
        status: "online",
        mood: ""
      }, {
        id: "14663a3406eb47ffa63d4fec9429cb71",
        name: "Betty Diaz",
        avatar: "assets/images/faces/12.jpg",
        status: "online",
        mood: ""
      }, {
        id: "43bd9bc59d164b5aea498e3ae1c24c3c",
        name: "Brian Stephens",
        avatar: "assets/images/faces/3.jpg",
        status: "online",
        mood: ""
      }, {
        id: "3fc8e01f3ce649d1caf884fbf4f698e4",
        name: "Jacqueline Day",
        avatar: "assets/images/faces/16.jpg",
        status: "offline",
        mood: ""
      }, {
        id: "e929b1d790ab49968ed8e34648553df4",
        name: "Arthur Mendoza",
        avatar: "assets/images/faces/10.jpg",
        status: "online",
        mood: ""
      }, {
        id: "d6caf04bba614632b5fecf91aebf4564",
        name: "Jeremy Lee",
        avatar: "assets/images/faces/9.jpg",
        status: "offline",
        mood: ""
      }, {
        id: "be0fb188c8e242f097fafa24632107e4",
        name: "Johnny Newman",
        avatar: "assets/images/faces/5.jpg",
        status: "offline",
        mood: ""
      }, {
        id: "dea902191b964a68ba5f2d93cff37e13",
        name: "Jeffrey Little",
        avatar: "assets/images/faces/15.jpg",
        status: "online",
        mood: ""
      }, {
        id: "0bf58f5ccc4543a9f8747350b7bda3c7",
        name: "Barbara Romero",
        avatar: "assets/images/faces/4.jpg",
        status: "offline",
        mood: ""
      }, {
        id: "c5d7498bbcb84d81fc72168871ac6a6e",
        name: "Daniel James",
        avatar: "assets/images/faces/2.jpg",
        status: "offline",
        mood: ""
      }, {
        id: "97bfbdd9413e46efdaca2010400fe18c",
        name: "Alice Sanders",
        avatar: "assets/images/faces/17.jpg",
        status: "offline",
        mood: ""
      }];
      _ChatDB.chatCollection = [{
        id: "89564a680b3249760ea21fe77",
        chats: [{
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "323sa680b3249760ea21rt47",
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "323sa680b3249760ea21rt47",
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2018-02-10T08:45:28.291Z"
        }]
      }, {
        id: "3289564a680b2134760ea21fe7753",
        chats: [{
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2019-03-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2019-03-10T08:45:28.291Z"
        }, {
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Yes",
          time: "2019-03-10T08:45:28.291Z"
        }, {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2019-03-10T08:45:28.291Z"
        }]
      }];
      /***/
    },

    /***/
    67567:
    /*!***********************************************************!*\
      !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InMemoryDataService": function InMemoryDataService() {
          return (
            /* binding */
            _InMemoryDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _chat_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat-db */
      75643);
      /* harmony import */


      var _invoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoices */
      1900);
      /* harmony import */


      var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./todo */
      69837);

      var _InMemoryDataService = /*#__PURE__*/function () {
        function _InMemoryDataService() {
          _classCallCheck(this, _InMemoryDataService);
        }

        _createClass(_InMemoryDataService, [{
          key: "createDb",
          value: function createDb() {
            return {
              'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_0__.ChatDB.contacts,
              'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_0__.ChatDB.chatCollection,
              'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_0__.ChatDB.user,
              'invoices': _invoices__WEBPACK_IMPORTED_MODULE_1__.InvoiceDB.invoices,
              'todoList': _todo__WEBPACK_IMPORTED_MODULE_2__.Todo.todoList,
              'todoTag': _todo__WEBPACK_IMPORTED_MODULE_2__.TodoTag.tag
            };
          }
        }]);

        return _InMemoryDataService;
      }();
      /***/

    },

    /***/
    1900:
    /*!************************************************!*\
      !*** ./src/app/shared/inmemory-db/invoices.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceDB": function InvoiceDB() {
          return (
            /* binding */
            _InvoiceDB
          );
        }
        /* harmony export */

      });

      var _InvoiceDB = function _InvoiceDB() {
        _classCallCheck(this, _InvoiceDB);
      };

      _InvoiceDB.invoices = [{
        id: '5a9ae2106518248b68251fd1',
        orderNo: '232',
        status: 'pending',
        date: new Date(),
        currency: '$',
        vat: 10,
        buyer: {
          name: 'Schoen, Conn and Mills',
          address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170'
        },
        seller: {
          name: 'UI Lib',
          address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
        },
        item: [{
          name: 'Item 1',
          unit: 9,
          price: 200
        }, {
          name: 'Item 2',
          unit: 15,
          price: 300
        }]
      }, {
        id: '5a9ae2106518248b68251fd2',
        orderNo: '233',
        status: 'processing',
        date: new Date(),
        currency: '$',
        vat: 10,
        buyer: {
          name: 'New Age Inc.',
          address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153'
        },
        seller: {
          name: 'UI Lib',
          address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
        },
        item: [{
          name: 'Item 1',
          unit: 3,
          price: 2000
        }, {
          name: 'Item 2',
          unit: 2,
          price: 4000
        }]
      }, {
        id: '5a9ae2106518248b68251fd3',
        orderNo: '234',
        status: 'delivered',
        date: new Date(),
        currency: '$',
        vat: 10,
        buyer: {
          name: 'Predovic, Schowalter and Haag',
          address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999'
        },
        seller: {
          name: 'UI Lib',
          address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
        },
        item: [{
          name: 'Item 1',
          unit: 5,
          price: 1000
        }, {
          name: 'Item 2',
          unit: 2,
          price: 4000
        }]
      }, {
        id: '5a9ae2106518248b68251fd4',
        orderNo: '235',
        status: 'delivered',
        date: new Date(),
        currency: '$',
        vat: 10,
        buyer: {
          name: 'Hane PLC',
          address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131'
        },
        seller: {
          name: 'UI Lib',
          address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
        },
        item: [{
          name: 'Item 1',
          unit: 3,
          price: 4000
        }, {
          name: 'Item 2',
          unit: 1,
          price: 5000
        }]
      }];
      /***/
    },

    /***/
    69837:
    /*!********************************************!*\
      !*** ./src/app/shared/inmemory-db/todo.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Todo": function Todo() {
          return (
            /* binding */
            _Todo
          );
        },

        /* harmony export */
        "TodoTag": function TodoTag() {
          return (
            /* binding */
            _TodoTag
          );
        }
        /* harmony export */

      });

      var _Todo = function _Todo() {
        _classCallCheck(this, _Todo);
      };

      _Todo.todoList = [{
        id: 1,
        title: "API problem",
        note: "API is malfunctioning. kindly fix it",
        important: true,
        starred: true,
        done: false,
        read: false,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1, 2]
      }, {
        id: 2,
        title: "Mobile problem",
        note: "Mobile is malfunctioning. fix it",
        important: false,
        starred: false,
        done: true,
        read: true,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [2]
      }, {
        id: 3,
        title: "API problem",
        note: "API is malfunctioning. fix it",
        important: false,
        starred: false,
        done: true,
        read: false,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1]
      }, {
        id: 4,
        title: "API problem",
        note: "API is malfunctioning. fix it",
        important: false,
        starred: false,
        done: false,
        read: true,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1, 2, 3]
      }]; // ============================================

      var _TodoTag = function _TodoTag() {
        _classCallCheck(this, _TodoTag);
      };

      _TodoTag.tag = [{
        id: 1,
        name: "frontend"
      }, {
        id: 2,
        name: "backend"
      }, {
        id: 3,
        name: "API"
      }, {
        id: 4,
        name: "issue"
      }, {
        id: 5,
        name: "mobile"
      }];
      /***/
    },

    /***/
    93970:
    /*!**********************************************************!*\
      !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptor": function TokenInterceptor() {
          return (
            /* binding */
            _TokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      93921);

      var _TokenInterceptor = /*#__PURE__*/function () {
        function _TokenInterceptor(jwtAuth) {
          _classCallCheck(this, _TokenInterceptor);

          this.jwtAuth = jwtAuth;
        }

        _createClass(_TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = this.jwtAuth.token || this.jwtAuth.getToken();
            var changedReq;

            if (token) {
              changedReq = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            } else {
              changedReq = req;
            }

            return next.handle(changedReq);
          }
        }]);

        return _TokenInterceptor;
      }();

      _TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || _TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService));
      };

      _TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TokenInterceptor,
        factory: _TokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    10667:
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcerptPipe": function ExcerptPipe() {
          return (
            /* binding */
            _ExcerptPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _ExcerptPipe = /*#__PURE__*/function () {
        function _ExcerptPipe() {
          _classCallCheck(this, _ExcerptPipe);
        }

        _createClass(_ExcerptPipe, [{
          key: "transform",
          value: function transform(text) {
            var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            if (text.length <= limit) return text;
            return text.substring(0, limit) + '...';
          }
        }]);

        return _ExcerptPipe;
      }();

      _ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) {
        return new (t || _ExcerptPipe)();
      };

      _ExcerptPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "excerpt",
        type: _ExcerptPipe,
        pure: true
      });
      /***/
    },

    /***/
    64914:
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GetValueByKeyPipe": function GetValueByKeyPipe() {
          return (
            /* binding */
            _GetValueByKeyPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _GetValueByKeyPipe = /*#__PURE__*/function () {
        function _GetValueByKeyPipe() {
          _classCallCheck(this, _GetValueByKeyPipe);
        }

        _createClass(_GetValueByKeyPipe, [{
          key: "transform",
          value: function transform(value, id, property) {
            var filteredObj = value.find(function (item) {
              if (item.id !== undefined) {
                return item.id === id;
              }

              return false;
            });

            if (filteredObj) {
              return filteredObj[property];
            }
          }
        }]);

        return _GetValueByKeyPipe;
      }();

      _GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) {
        return new (t || _GetValueByKeyPipe)();
      };

      _GetValueByKeyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "getValueByKey",
        type: _GetValueByKeyPipe,
        pure: false
      });
      /***/
    },

    /***/
    84075:
    /*!****************************************************!*\
      !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RelativeTimePipe": function RelativeTimePipe() {
          return (
            /* binding */
            _RelativeTimePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _RelativeTimePipe = /*#__PURE__*/function () {
        function _RelativeTimePipe() {
          _classCallCheck(this, _RelativeTimePipe);
        }

        _createClass(_RelativeTimePipe, [{
          key: "transform",
          value: function transform(value) {
            if (!(value instanceof Date)) value = new Date(value);
            var seconds = Math.floor((new Date().getTime() - value.getTime()) / 1000);
            var interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
              return interval + " years ago";
            }

            interval = Math.floor(seconds / 2592000);

            if (interval > 1) {
              return interval + " months ago";
            }

            interval = Math.floor(seconds / 86400);

            if (interval > 1) {
              return interval + " days ago";
            }

            interval = Math.floor(seconds / 3600);

            if (interval > 1) {
              return interval + " hours ago";
            }

            interval = Math.floor(seconds / 60);

            if (interval > 1) {
              return interval + " minutes ago";
            }

            return Math.floor(seconds) + " seconds ago";
          }
        }]);

        return _RelativeTimePipe;
      }();

      _RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) {
        return new (t || _RelativeTimePipe)();
      };

      _RelativeTimePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "relativeTime",
        type: _RelativeTimePipe,
        pure: true
      });
      /***/
    },

    /***/
    81233:
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedPipesModule": function SharedPipesModule() {
          return (
            /* binding */
            _SharedPipesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./relative-time.pipe */
      84075);
      /* harmony import */


      var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excerpt.pipe */
      10667);
      /* harmony import */


      var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-value-by-key.pipe */
      64914);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var pipes = [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeTimePipe, _excerpt_pipe__WEBPACK_IMPORTED_MODULE_1__.ExcerptPipe, _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__.GetValueByKeyPipe];

      var _SharedPipesModule = function _SharedPipesModule() {
        _classCallCheck(this, _SharedPipesModule);
      };

      _SharedPipesModule.ɵfac = function SharedPipesModule_Factory(t) {
        return new (t || _SharedPipesModule)();
      };

      _SharedPipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SharedPipesModule
      });
      _SharedPipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SharedPipesModule, {
          declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeTimePipe, _excerpt_pipe__WEBPACK_IMPORTED_MODULE_1__.ExcerptPipe, _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__.GetValueByKeyPipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
          exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeTimePipe, _excerpt_pipe__WEBPACK_IMPORTED_MODULE_1__.ExcerptPipe, _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__.GetValueByKeyPipe]
        });
      })();
      /***/

    },

    /***/
    69552:
    /*!********************************************************************************!*\
      !*** ./src/app/shared/search/search-input-over/search-input-over.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchInputOverComponent": function SearchInputOverComponent() {
          return (
            /* binding */
            _SearchInputOverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var _search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../search.service */
      91681);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);

      var _c0 = function _c0(a0) {
        return {
          open: a0
        };
      };

      var _SearchInputOverComponent = /*#__PURE__*/function () {
        function _SearchInputOverComponent(searchService, router, route) {
          _classCallCheck(this, _SearchInputOverComponent);

          this.searchService = searchService;
          this.router = router;
          this.route = route;
          this.placeholder = "Search here";
          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
        }

        _createClass(_SearchInputOverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.searchCtrl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(200)).subscribe(function (value) {
              _this20.search.emit(value);

              _this20.searchService.searchTerm.next(value);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.searchCtrlSub) {
              this.searchCtrlSub.unsubscribe();
            }
          }
        }, {
          key: "navigateToResult",
          value: function navigateToResult() {
            if (this.resultPage) {
              this.router.navigateByUrl(this.resultPage);
            }
          }
        }, {
          key: "open",
          value: function open() {
            this.isOpen = true;
            this.navigateToResult();
          }
        }, {
          key: "close",
          value: function close() {
            this.isOpen = false;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isOpen = !this.isOpen;
          }
        }]);

        return _SearchInputOverComponent;
      }();

      _SearchInputOverComponent.ɵfac = function SearchInputOverComponent_Factory(t) {
        return new (t || _SearchInputOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
      };

      _SearchInputOverComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SearchInputOverComponent,
        selectors: [["egret-search-input-over"]],
        inputs: {
          resultPage: "resultPage",
          placeholder: "placeholder"
        },
        outputs: {
          search: "search"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "search-bar-wide", 3, "ngClass"], ["mat-icon-button", "", 1, "search-icon-btn", "ml-8", "mr-8", 3, "click"], ["type", "text", 1, "default-bg", 3, "formControl", "placeholder"], [1, "search-close", "text-muted", 3, "click"]],
        template: function SearchInputOverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_button_click_1_listener() {
              return ctx.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_mat_icon_click_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", ctx.placeholder);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
        styles: [".search-bar-wide.open[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  z-index: 999;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: block;\n}\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: none;\n  height: 100%;\n  width: 100%;\n}\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  font-weight: 700;\n  padding-left: 15px;\n}\n.search-bar-wide[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InNlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXItd2lkZSB7XHJcbiAgJi5vcGVuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIC5zZWFyY2gtaWNvbi1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtY2xvc2Uge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2gtY2xvc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    47770:
    /*!************************************************!*\
      !*** ./src/app/shared/search/search.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchModule": function SearchModule() {
          return (
            /* binding */
            _SearchModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-input-over/search-input-over.component */
      69552);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _SearchModule = function _SearchModule() {
        _classCallCheck(this, _SearchModule);
      };

      _SearchModule.ɵfac = function SearchModule_Factory(t) {
        return new (t || _SearchModule)();
      };

      _SearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SearchModule
      });
      _SearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SearchModule, {
          declarations: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_0__.SearchInputOverComponent],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
          exports: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_0__.SearchInputOverComponent]
        });
      })();
      /***/

    },

    /***/
    91681:
    /*!*************************************************!*\
      !*** ./src/app/shared/search/search.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchService": function SearchService() {
          return (
            /* binding */
            _SearchService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _SearchService = function _SearchService() {
        _classCallCheck(this, _SearchService);

        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.searchTerm$ = this.searchTerm.asObservable();
      };

      _SearchService.ɵfac = function SearchService_Factory(t) {
        return new (t || _SearchService)();
      };

      _SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SearchService,
        factory: _SearchService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    96413:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComfirmComponent": function AppComfirmComponent() {
          return (
            /* binding */
            _AppComfirmComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      72257);

      var _AppComfirmComponent = function _AppComfirmComponent(dialogRef, data) {
        _classCallCheck(this, _AppComfirmComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      };

      _AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) {
        return new (t || _AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _AppComfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComfirmComponent,
        selectors: [["app-confirm"]],
        decls: 11,
        vars: 2,
        consts: [["matDialogTitle", "", 1, "mb-8"], ["mat-dialog-content", "", 1, "mb-16"], ["mat-dialog-actions", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-raised-button", "", 3, "click"]],
        template: function AppComfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_5_listener() {
              return ctx.dialogRef.close(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() {
              return ctx.dialogRef.close(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    65403:
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppConfirmService": function AppConfirmService() {
          return (
            /* binding */
            _AppConfirmService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-confirm.component */
      96413);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);

      var _AppConfirmService = /*#__PURE__*/function () {
        function _AppConfirmService(dialog) {
          _classCallCheck(this, _AppConfirmService);

          this.dialog = dialog;
        }

        _createClass(_AppConfirmService, [{
          key: "confirm",
          value: function confirm() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            data.title = data.title || 'Confirm';
            data.message = data.message || 'Are you sure?';
            var dialogRef;
            dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_0__.AppComfirmComponent, {
              width: '380px',
              disableClose: true,
              data: {
                title: data.title,
                message: data.message
              }
            });
            return dialogRef.afterClosed();
          }
        }]);

        return _AppConfirmService;
      }();

      _AppConfirmService.ɵfac = function AppConfirmService_Factory(t) {
        return new (t || _AppConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
      };

      _AppConfirmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AppConfirmService,
        factory: _AppConfirmService.ɵfac
      });
      /***/
    },

    /***/
    33:
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppLoaderComponent": function AppLoaderComponent() {
          return (
            /* binding */
            _AppLoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      49453);

      var _AppLoaderComponent = /*#__PURE__*/function () {
        function _AppLoaderComponent(dialogRef) {
          _classCallCheck(this, _AppLoaderComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(_AppLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppLoaderComponent;
      }();

      _AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) {
        return new (t || _AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
      };

      _AppLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppLoaderComponent,
        selectors: [["app-app-loader"]],
        decls: 5,
        vars: 3,
        consts: [[1, "text-center"], [1, "m-0", "pb-16", 2, "white-space", "pre-wrap", "line-height", "1.4"], ["mat-dialog-content", ""]],
        template: function AppLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "auto");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatSpinner],
        styles: [".mat-dialog-content[_ngcontent-%COMP%] {\r\n  min-height: 122px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMjJweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    77009:
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppLoaderService": function AppLoaderService() {
          return (
            /* binding */
            _AppLoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-loader.component */
      33);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);

      var _AppLoaderService = /*#__PURE__*/function () {
        function _AppLoaderService(dialog) {
          _classCallCheck(this, _AppLoaderService);

          this.dialog = dialog;
        }

        _createClass(_AppLoaderService, [{
          key: "open",
          value: function open() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Please wait';
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              width: '200px'
            };
            this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_0__.AppLoaderComponent, {
              disableClose: true,
              backdropClass: 'light-backdrop'
            });
            this.dialogRef.updateSize(config.width);
            this.dialogRef.componentInstance.title = title;
            return this.dialogRef.afterClosed();
          }
        }, {
          key: "close",
          value: function close() {
            if (this.dialogRef) this.dialogRef.close();
          }
        }]);

        return _AppLoaderService;
      }();

      _AppLoaderService.ɵfac = function AppLoaderService_Factory(t) {
        return new (t || _AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
      };

      _AppLoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AppLoaderService,
        factory: _AppLoaderService.ɵfac
      });
      /***/
    },

    /***/
    93921:
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/auth/jwt-auth.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JwtAuthService": function JwtAuthService() {
          return (
            /* binding */
            _JwtAuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../local-store.service */
      69122);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      3984); // ================= only for demo purpose ===========


      var DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";
      var DEMO_USER = {
        UserId: "5b700c45639d2c0c54b354ba",
        FirstName: "Watson Joyce",
        LastName: "SA"
      }; // ================= you will get those data from server =======

      var _JwtAuthService = /*#__PURE__*/function () {
        function _JwtAuthService(ls, http, router, route) {
          var _this21 = this;

          _classCallCheck(this, _JwtAuthService);

          this.ls = ls;
          this.http = http;
          this.router = router;
          this.route = route;
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.user);
          this.APP_TOKEN = "APP_TOKEN";
          this.USER_INFO = "USER_INFO";
          this.route.queryParams.subscribe(function (params) {
            return _this21["return"] = params['return'] || '/';
          });
        }

        _createClass(_JwtAuthService, [{
          key: "signin",
          value: function signin(username, password) {
            //return of({token: DEMO_TOKEN, user: DEMO_USER})
            //  .pipe(
            //    delay(1000),
            //    map((res: any) => {
            //      this.setUserAndToken(res.token, res.user, !!res);
            //      this.signingIn = false;
            //      return res;
            //    }),
            //    catchError((error) => {
            //      return throwError(error);
            //    })
            //  );
            // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER
            this.signingIn = true;
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
              })
            };
            return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL, "/Login/Authenticate"), {
              userName: username,
              password: password
            }, httpOptions); //.pipe(
            //    map((res: any) => {
            //        if (res.IsSuccess) {
            //            this.setUserAndToken(res.Data.SessionId, res.Data, res.IsSuccess);
            //        }
            //        this.signingIn = false;
            //        return res;
            //    }),
            //    catchError((error) => {
            //        return throwError(error);
            //    })
            //);
          }
        }, {
          key: "redirectToLogin",
          value: function redirectToLogin() {
            this.router.navigateByUrl("sessions/signin");
          }
          /*
            checkTokenIsValid is called inside constructor of
            shared/components/layouts/admin-layout/admin-layout.component.ts
          */

        }, {
          key: "checkTokenIsValid",
          value: function checkTokenIsValid() {
            //return of(DEMO_USER)
            //    .pipe(
            //        map((profile: UserInfo) => {
            //            this.setUserAndToken(this.getToken(), profile, true);
            //            this.signingIn = false;
            //            return profile;
            //        }),
            //        catchError((error) => {
            //            return of(error);
            //        })
            //    );

            /*
              The following code get user data and jwt token is assigned to
              Request header using token.interceptor
              This checks if the existing token is valid when app is reloaded
            */
            return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL, "/Login/GetAuthenticatedUser?sessionId=").concat(this.getToken())); //.pipe(
            //    map((response: any) => {
            //        if (response.isSuccess) {
            //            this.setUserAndToken(this.getToken(), response.data, true);
            //            return response.data;
            //        }
            //        else {
            //            this.signout();
            //        }
            //    }),
            //    catchError((error) => {
            //        this.signout();
            //        return of(error);
            //    })
            //);
          }
        }, {
          key: "signout",
          value: function signout() {
            this.setUserAndToken(null, null, false);
            this.router.navigateByUrl("sessions/signin");
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getToken();
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.ls.getItem(this.APP_TOKEN);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.ls.getItem(this.USER_INFO);
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            var obj = this.ls.getItem(this.USER_INFO);
            return obj.userId;
          }
        }, {
          key: "setUserAndToken",
          value: function setUserAndToken(token, user, isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.token = token;
            this.user = user;
            this.user$.next(user);
            this.ls.setItem(this.APP_TOKEN, token);
            this.ls.setItem(this.USER_INFO, user);
          }
        }]);

        return _JwtAuthService;
      }();

      _JwtAuthService.ɵfac = function JwtAuthService_Factory(t) {
        return new (t || _JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _JwtAuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _JwtAuthService,
        factory: _JwtAuthService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    60360:
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/customizer.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomizerService": function CustomizerService() {
          return (
            /* binding */
            _CustomizerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout.service */
      85682);

      var _CustomizerService = /*#__PURE__*/function () {
        function _CustomizerService(router, layout) {
          _classCallCheck(this, _CustomizerService);

          this.router = router;
          this.layout = layout;
          this.colors = [{
            "class": "black",
            active: false
          }, {
            "class": "white",
            active: false
          }, {
            "class": "dark-blue",
            active: false
          }, {
            "class": "grey",
            active: false
          }, {
            "class": "brown",
            active: false
          }, {
            "class": "gray",
            active: false
          }, {
            "class": "purple",
            active: false
          }, {
            "class": "blue",
            active: false
          }, {
            "class": "indigo",
            active: false
          }, {
            "class": "yellow",
            active: false
          }, {
            "class": "green",
            active: false
          }, {
            "class": "pink",
            active: false
          }, {
            "class": "red",
            active: false
          }, {
            "class": "slate",
            active: false
          }];
          this.topbarColors = this.getTopbarColors();
          this.sidebarColors = this.getSidebarColors();
          this.footerColors = this.getFooterColors();
        }

        _createClass(_CustomizerService, [{
          key: "getSidebarColors",
          value: function getSidebarColors() {
            var _this22 = this;

            var sidebarColors = ['black', 'slate', 'white', 'grey', 'brown', 'purple', 'dark-blue'];
            return this.colors.filter(function (color) {
              return sidebarColors.includes(color["class"]);
            }).map(function (c) {
              c.active = c["class"] === _this22.layout.layoutConf.sidebarColor;
              return Object.assign({}, c);
            });
          }
        }, {
          key: "getTopbarColors",
          value: function getTopbarColors() {
            var _this23 = this;

            var topbarColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
            return this.colors.filter(function (color) {
              return topbarColors.includes(color["class"]);
            }).map(function (c) {
              c.active = c["class"] === _this23.layout.layoutConf.topbarColor;
              return Object.assign({}, c);
            });
          }
        }, {
          key: "getFooterColors",
          value: function getFooterColors() {
            var _this24 = this;

            var footerColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
            return this.colors.filter(function (color) {
              return footerColors.includes(color["class"]);
            }).map(function (c) {
              c.active = c["class"] === _this24.layout.layoutConf.footerColor;
              return Object.assign({}, c);
            });
          }
        }, {
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            this.layout.publishLayoutChange({
              sidebarColor: color["class"]
            });
            this.sidebarColors = this.getSidebarColors();
          }
        }, {
          key: "changeTopbarColor",
          value: function changeTopbarColor(color) {
            this.layout.publishLayoutChange({
              topbarColor: color["class"]
            });
            this.topbarColors = this.getTopbarColors();
          }
        }, {
          key: "changeFooterColor",
          value: function changeFooterColor(color) {
            this.layout.publishLayoutChange({
              footerColor: color["class"]
            });
            this.footerColors = this.getFooterColors();
          }
        }, {
          key: "removeClass",
          value: function removeClass(el, className) {
            if (!el || el.length === 0) return;

            if (!el.length) {
              el.classList.remove(className);
            } else {
              for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
              }
            }
          }
        }, {
          key: "addClass",
          value: function addClass(el, className) {
            if (!el) return;

            if (!el.length) {
              el.classList.add(className);
            } else {
              for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
              }
            }
          }
        }, {
          key: "findClosest",
          value: function findClosest(el, className) {
            if (!el) return;

            while (el) {
              var parent = el.parentElement;

              if (parent && this.hasClass(parent, className)) {
                return parent;
              }

              el = parent;
            }
          }
        }, {
          key: "hasClass",
          value: function hasClass(el, className) {
            if (!el) return;
            return " ".concat(el.className, " ").replace(/[\n\t]/g, " ").indexOf(" ".concat(className, " ")) > -1;
          }
        }, {
          key: "toggleClass",
          value: function toggleClass(el, className) {
            if (!el) return;

            if (this.hasClass(el, className)) {
              this.removeClass(el, className);
            } else {
              this.addClass(el, className);
            }
          }
        }]);

        return _CustomizerService;
      }();

      _CustomizerService.ɵfac = function CustomizerService_Factory(t) {
        return new (t || _CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
      };

      _CustomizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CustomizerService,
        factory: _CustomizerService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    38998:
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/error-handler.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorHandlerService": function ErrorHandlerService() {
          return (
            /* binding */
            _ErrorHandlerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _ErrorHandlerService = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(_ErrorHandlerService, _angular_core__WEBPAC);

        var _super = _createSuper(_ErrorHandlerService);

        function _ErrorHandlerService(injector) {
          var _this25;

          _classCallCheck(this, _ErrorHandlerService);

          _this25 = _super.call(this);
          _this25.injector = injector;
          _this25.errorCount = 0;
          return _this25;
        } // https://github.com/angular/angular/issues/17010


        _createClass(_ErrorHandlerService, [{
          key: "handleError",
          value: function handleError(error) {
            var increment = 5;
            var max = 50; // Prevents change detection

            var debugCtx = error['ngDebugContext'];
            var changeDetectorRef = debugCtx && debugCtx.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
            if (changeDetectorRef) changeDetectorRef.detach();
            this.errorCount = this.errorCount + 1;

            if (this.errorCount % increment === 0) {
              console.log(' ');
              console.log("errorHandler() was called ".concat(this.errorCount, " times."));
              console.log(' ');

              _get(_getPrototypeOf(_ErrorHandlerService.prototype), "handleError", this).call(this, error);

              if (this.errorCount === max) {
                console.log(' ');
                console.log("Preventing recursive error after ".concat(this.errorCount, " recursive errors."));
                console.log(' ');
                var appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
                appRef.tick();
              }
            } else if (this.errorCount === 1) {
              _get(_getPrototypeOf(_ErrorHandlerService.prototype), "handleError", this).call(this, error);
            }
          }
        }]);

        return _ErrorHandlerService;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler);

      _ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
        return new (t || _ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _ErrorHandlerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ErrorHandlerService,
        factory: _ErrorHandlerService.ɵfac
      });
      /***/
    },

    /***/
    85682:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/layout.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* binding */
            _LayoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../helpers/url.helper */
      54183);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./theme.service */
      22552);

      var _LayoutService = /*#__PURE__*/function () {
        function _LayoutService(themeService) {
          _classCallCheck(this, _LayoutService);

          this.themeService = themeService;
          this.layoutConf = {};
          this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.layoutConf);
          this.layoutConf$ = this.layoutConfSubject.asObservable(); //   public fullWidthRoutes = ['shop'];

          this.fullWidthRoutes = [];
          this.setAppLayout( // ******** SET YOUR LAYOUT OPTIONS HERE *********
          {
            navigationPos: 'side',
            sidebarStyle: 'full',
            sidebarColor: 'black',
            sidebarCompactToggle: false,
            dir: 'ltr',
            useBreadcrumb: true,
            topbarFixed: false,
            footerFixed: false,
            topbarColor: 'white',
            footerColor: 'black',
            matTheme: 'egret-navy',
            breadcrumb: 'simple',
            perfectScrollbar: true
          });
        }

        _createClass(_LayoutService, [{
          key: "setAppLayout",
          value: function setAppLayout(layoutConf) {
            this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
            this.applyMatTheme(this.layoutConf.matTheme); // ******* Only for demo purpose ***

            this.setLayoutFromQuery(); // **********************
          }
        }, {
          key: "publishLayoutChange",
          value: function publishLayoutChange(lc) {
            var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
              this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
            }

            this.layoutConf = Object.assign(this.layoutConf, lc);
            this.layoutConfSubject.next(this.layoutConf);
          }
        }, {
          key: "applyMatTheme",
          value: function applyMatTheme(theme) {
            this.themeService.applyMatTheme(this.layoutConf.matTheme);
          }
        }, {
          key: "setLayoutFromQuery",
          value: function setLayoutFromQuery() {
            var layoutConfString = (0, _helpers_url_helper__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)('layout');
            var prevTheme = this.layoutConf.matTheme;

            try {
              this.layoutConf = JSON.parse(layoutConfString);
              this.themeService.changeTheme(prevTheme, this.layoutConf.matTheme);
            } catch (e) {}
          }
        }, {
          key: "adjustLayout",
          value: function adjustLayout() {
            var _this26 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var sidebarStyle;
            this.isMobile = this.isSm();
            this.currentRoute = options.route || this.currentRoute;
            sidebarStyle = this.isMobile ? 'closed' : 'full';

            if (this.currentRoute) {
              this.fullWidthRoutes.forEach(function (route) {
                if (_this26.currentRoute.indexOf(route) !== -1) {
                  sidebarStyle = 'closed';
                }
              });
            }

            this.publishLayoutChange({
              isMobile: this.isMobile,
              sidebarStyle: sidebarStyle
            });
          }
        }, {
          key: "isSm",
          value: function isSm() {
            return window.matchMedia("(max-width: 959px)").matches;
          }
        }]);

        return _LayoutService;
      }();

      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService));
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    69122:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/local-store.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStoreService": function LocalStoreService() {
          return (
            /* binding */
            _LocalStoreService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _LocalStoreService = /*#__PURE__*/function () {
        function _LocalStoreService() {
          _classCallCheck(this, _LocalStoreService);

          this.ls = window.localStorage;
        }

        _createClass(_LocalStoreService, [{
          key: "setItem",
          value: function setItem(key, value) {
            value = JSON.stringify(value);
            this.ls.setItem(key, value);
            return true;
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            var value = this.ls.getItem(key);

            try {
              return JSON.parse(value);
            } catch (e) {
              return null;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.ls.clear();
          }
        }]);

        return _LocalStoreService;
      }();

      _LocalStoreService.ɵfac = function LocalStoreService_Factory(t) {
        return new (t || _LocalStoreService)();
      };

      _LocalStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LocalStoreService,
        factory: _LocalStoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21977:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/match-media.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchMediaService": function MatchMediaService() {
          return (
            /* binding */
            _MatchMediaService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      66140);

      var _MatchMediaService = /*#__PURE__*/function () {
        function _MatchMediaService(mediaObserver) {
          _classCallCheck(this, _MatchMediaService);

          this.mediaObserver = mediaObserver;
          this.onMediaChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
          this.activeMediaQuery = '';
          this.init();
        }

        _createClass(_MatchMediaService, [{
          key: "init",
          value: function init() {
            var _this27 = this;

            this.mediaObserver.media$.subscribe(function (change) {
              if (_this27.activeMediaQuery !== change.mqAlias) {
                _this27.activeMediaQuery = change.mqAlias;

                _this27.onMediaChange.next(change.mqAlias);
              }
            });
          }
        }]);

        return _MatchMediaService;
      }();

      _MatchMediaService.ɵfac = function MatchMediaService_Factory(t) {
        return new (t || _MatchMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.MediaObserver));
      };

      _MatchMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MatchMediaService,
        factory: _MatchMediaService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21218:
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/navigation.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavigationService": function NavigationService() {
          return (
            /* binding */
            _NavigationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      92340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth/jwt-auth.service */
      93921);

      var _NavigationService = /*#__PURE__*/function () {
        function _NavigationService(httpClient, authService) {
          _classCallCheck(this, _NavigationService);

          this.httpClient = httpClient;
          this.authService = authService;
          this.iconMenu = [{
            name: 'Blank',
            type: 'link',
            icon: 'blur_on',
            state: 'others/blank'
          }, {
            name: 'DOC',
            type: 'extLink',
            tooltip: 'Documentation',
            icon: 'library_books',
            state: 'http://demos.ui-lib.com/egret-doc/'
          }, {
            name: 'SYSTEM',
            type: 'dropDown',
            tooltip: 'SYSTEM',
            icon: 'person',
            state: 'system',
            sub: [{
              name: 'USER.USERMENU',
              state: 'user'
            }, {
              name: 'ROLE.ROLEMENU',
              state: 'role'
            }, {
              name: 'AUTH.AUTHMENU',
              state: 'auth'
            }, {
              name: 'ROLEAUTH.ROLEAUTHMENU',
              state: 'roleauth'
            }, {
              name: 'USERROLE.USERROLEMENU',
              state: 'userrole'
            }, {
              name: 'MENU.MENUMENU',
              state: 'menu'
            }]
          }];
          this.separatorMenu = [{
            type: 'separator',
            name: 'Custom components'
          }, {
            name: 'DASHBOARD',
            type: 'link',
            tooltip: 'Dashboard',
            icon: 'dashboard',
            state: 'dashboard'
          }, {
            name: 'INBOX',
            type: 'link',
            tooltip: 'Inbox',
            icon: 'inbox',
            state: 'inbox'
          }, {
            name: 'CHAT',
            type: 'link',
            tooltip: 'Chat',
            icon: 'chat',
            state: 'chat'
          }, {
            name: 'CRUD Table',
            type: 'link',
            tooltip: 'CRUD Table',
            icon: 'format_list_bulleted',
            state: 'cruds/ngx-table'
          }, {
            name: 'DIALOGS',
            type: 'dropDown',
            tooltip: 'Dialogs',
            icon: 'filter_none',
            state: 'dialogs',
            sub: [{
              name: 'CONFIRM',
              state: 'confirm'
            }, {
              name: 'LOADER',
              state: 'loader'
            }]
          }, {
            name: 'PROFILE',
            type: 'dropDown',
            tooltip: 'Profile',
            icon: 'person',
            state: 'profile',
            sub: [{
              name: 'OVERVIEW',
              state: 'overview'
            }, {
              name: 'SETTINGS',
              state: 'settings'
            }, {
              name: 'BLANK',
              state: 'blank'
            }]
          }, {
            name: 'TOUR',
            type: 'link',
            tooltip: 'Tour',
            icon: 'flight_takeoff',
            state: 'tour'
          }, {
            type: 'separator',
            name: 'Integrated components'
          }, {
            name: 'CALENDAR',
            type: 'link',
            tooltip: 'Calendar',
            icon: 'date_range',
            state: 'calendar'
          }, {
            name: 'MATERIAL',
            type: 'dropDown',
            tooltip: 'Material',
            icon: 'favorite',
            state: 'material',
            sub: [{
              name: 'BUTTONS',
              state: 'buttons'
            }, {
              name: 'Button Toggle',
              state: 'button-toggle'
            }, {
              name: 'Buttons Loading',
              state: 'loading-buttons'
            }, {
              name: 'CARDS',
              state: 'cards'
            }, {
              name: 'GRIDS',
              state: 'grids'
            }, {
              name: 'LISTS',
              state: 'lists'
            }, {
              name: 'MENU',
              state: 'menu'
            }, {
              name: 'TABS',
              state: 'tabs'
            }, {
              name: 'SELECT',
              state: 'select'
            }, {
              name: 'RADIO',
              state: 'radio'
            }, {
              name: 'AUTOCOMPLETE',
              state: 'autocomplete'
            }, {
              name: 'SLIDER',
              state: 'slider'
            }, {
              name: 'PROGRESS',
              state: 'progress'
            }, {
              name: 'SNACKBAR',
              state: 'snackbar'
            }]
          }, {
            name: 'FORMS',
            type: 'dropDown',
            tooltip: 'Forms',
            icon: 'description',
            state: 'forms',
            sub: [{
              name: 'BASIC',
              state: 'basic'
            }, {
              name: 'EDITOR',
              state: 'editor'
            }, {
              name: 'UPLOAD',
              state: 'upload'
            }, {
              name: 'WIZARD',
              state: 'wizard'
            }]
          }, {
            name: 'TABLES',
            type: 'dropDown',
            tooltip: 'Tables',
            icon: 'format_line_spacing',
            state: 'tables',
            sub: [{
              name: 'FULLSCREEN',
              state: 'fullscreen'
            }, {
              name: 'PAGING',
              state: 'paging'
            }, {
              name: 'FILTER',
              state: 'filter'
            }]
          }, {
            name: 'MAP',
            type: 'link',
            tooltip: 'Map',
            icon: 'add_location',
            state: 'map'
          }, {
            name: 'CHARTS',
            type: 'link',
            tooltip: 'Charts',
            icon: 'show_chart',
            state: 'charts'
          }, {
            name: 'DND',
            type: 'link',
            tooltip: 'Drag and Drop',
            icon: 'adjust',
            state: 'dragndrop'
          }, {
            type: 'separator',
            name: 'Other components'
          }, {
            name: 'SESSIONS',
            type: 'dropDown',
            tooltip: 'Pages',
            icon: 'view_carousel',
            state: 'sessions',
            sub: [{
              name: 'SIGNUP',
              state: 'signup'
            }, {
              name: 'SIGNIN',
              state: 'signin'
            }, {
              name: 'FORGOT',
              state: 'forgot-password'
            }, {
              name: 'LOCKSCREEN',
              state: 'lockscreen'
            }, {
              name: 'NOTFOUND',
              state: '404'
            }, {
              name: 'ERROR',
              state: 'error'
            }]
          }, {
            name: 'OTHERS',
            type: 'dropDown',
            tooltip: 'Others',
            icon: 'blur_on',
            state: 'others',
            sub: [{
              name: 'GALLERY',
              state: 'gallery'
            }, {
              name: 'PRICINGS',
              state: 'pricing'
            }, {
              name: 'USERS',
              state: 'users'
            }, {
              name: 'BLANK',
              state: 'blank'
            }]
          }, {
            name: 'MATICONS',
            type: 'link',
            tooltip: 'Material Icons',
            icon: 'store',
            state: 'icons'
          }, {
            name: 'DOC',
            type: 'extLink',
            tooltip: 'Documentation',
            icon: 'library_books',
            state: 'http://demos.ui-lib.com/egret-doc/'
          }];
          this.plainMenu = [{
            name: 'DASHBOARD',
            type: 'link',
            tooltip: 'Dashboard',
            icon: 'dashboard',
            state: 'dashboard'
          }, {
            name: 'INBOX',
            type: 'link',
            tooltip: 'Inbox',
            icon: 'inbox',
            state: 'inbox'
          }, {
            name: 'CHAT',
            type: 'link',
            tooltip: 'Chat',
            icon: 'chat',
            state: 'chat'
          }, {
            name: 'CRUD Table',
            type: 'link',
            tooltip: 'CRUD Table',
            icon: 'format_list_bulleted',
            state: 'cruds/ngx-table'
          }, {
            name: 'CALENDAR',
            type: 'link',
            tooltip: 'Calendar',
            icon: 'date_range',
            state: 'calendar'
          }, {
            name: 'DIALOGS',
            type: 'dropDown',
            tooltip: 'Dialogs',
            icon: 'filter_none',
            state: 'dialogs',
            sub: [{
              name: 'CONFIRM',
              state: 'confirm'
            }, {
              name: 'LOADER',
              state: 'loader'
            }]
          }, {
            name: 'MATERIAL',
            type: 'dropDown',
            icon: 'favorite',
            state: 'component',
            sub: [{
              name: 'BUTTONS',
              state: 'buttons'
            }, {
              name: 'Button Toggle',
              state: 'button-toggle'
            }, {
              name: 'Buttons Loading',
              state: 'loading-buttons'
            }, {
              name: 'CARDS',
              state: 'cards'
            }, {
              name: 'GRIDS',
              state: 'grids'
            }, {
              name: 'LISTS',
              state: 'lists'
            }, {
              name: 'MENU',
              state: 'menu'
            }, {
              name: 'TABS',
              state: 'tabs'
            }, {
              name: 'SELECT',
              state: 'select'
            }, {
              name: 'RADIO',
              state: 'radio'
            }, {
              name: 'AUTOCOMPLETE',
              state: 'autocomplete'
            }, {
              name: 'SLIDER',
              state: 'slider'
            }, {
              name: 'PROGRESS',
              state: 'progress'
            }, {
              name: 'SNACKBAR',
              state: 'snackbar'
            }]
          }, {
            name: 'FORMS',
            type: 'dropDown',
            tooltip: 'Forms',
            icon: 'description',
            state: 'forms',
            sub: [{
              name: 'BASIC',
              state: 'basic'
            }, {
              name: 'EDITOR',
              state: 'editor'
            }, {
              name: 'UPLOAD',
              state: 'upload'
            }, {
              name: 'WIZARD',
              state: 'wizard'
            }]
          }, {
            name: 'TABLES',
            type: 'dropDown',
            tooltip: 'Tables',
            icon: 'format_line_spacing',
            state: 'tables',
            sub: [{
              name: 'FULLSCREEN',
              state: 'fullscreen'
            }, {
              name: 'PAGING',
              state: 'paging'
            }, {
              name: 'FILTER',
              state: 'filter'
            }]
          }, {
            name: 'PROFILE',
            type: 'dropDown',
            tooltip: 'Profile',
            icon: 'person',
            state: 'profile',
            sub: [{
              name: 'OVERVIEW',
              state: 'overview'
            }, {
              name: 'SETTINGS',
              state: 'settings'
            }, {
              name: 'BLANK',
              state: 'blank'
            }]
          }, {
            name: 'TOUR',
            type: 'link',
            tooltip: 'Tour',
            icon: 'flight_takeoff',
            state: 'tour'
          }, {
            name: 'MAP',
            type: 'link',
            tooltip: 'Map',
            icon: 'add_location',
            state: 'map'
          }, {
            name: 'CHARTS',
            type: 'link',
            tooltip: 'Charts',
            icon: 'show_chart',
            state: 'charts'
          }, {
            name: 'DND',
            type: 'link',
            tooltip: 'Drag and Drop',
            icon: 'adjust',
            state: 'dragndrop'
          }, {
            name: 'SESSIONS',
            type: 'dropDown',
            tooltip: 'Pages',
            icon: 'view_carousel',
            state: 'sessions',
            sub: [{
              name: 'SIGNUP',
              state: 'signup'
            }, {
              name: 'SIGNIN',
              state: 'signin'
            }, {
              name: 'FORGOT',
              state: 'forgot-password'
            }, {
              name: 'LOCKSCREEN',
              state: 'lockscreen'
            }, {
              name: 'NOTFOUND',
              state: '404'
            }, {
              name: 'ERROR',
              state: 'error'
            }]
          }, {
            name: 'OTHERS',
            type: 'dropDown',
            tooltip: 'Others',
            icon: 'blur_on',
            state: 'others',
            sub: [{
              name: 'GALLERY',
              state: 'gallery'
            }, {
              name: 'PRICINGS',
              state: 'pricing'
            }, {
              name: 'USERS',
              state: 'users'
            }, {
              name: 'BLANK',
              state: 'blank'
            }]
          }, {
            name: 'MATICONS',
            type: 'link',
            tooltip: 'Material Icons',
            icon: 'store',
            state: 'icons'
          }, {
            name: 'DOC',
            type: 'extLink',
            tooltip: 'Documentation',
            icon: 'library_books',
            state: 'http://demos.ui-lib.com/egret-doc/'
          }]; // Icon menu TITLE at the very top of navigation.
          // This title will appear if any icon type item is present in menu.

          this.iconTypeMenuTitle = 'Frequently Accessed'; // sets iconMenu as default;

          this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.iconMenu); // navigation component has subscribed to this Observable
          // menuItems$ = this.menuItems.asObservable();

          this.menuItems$ = function () {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
              })
            };
            return this.httpClient.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL, "/Login/GetUserMenuInfo") + "?session=" + this.authService.getToken(), {}, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              var menuItems = [];
              response.data.forEach(function (x) {
                menuItems.push({
                  name: x.translateName,
                  type: 'dropDown',
                  tooltip: x.translateName,
                  icon: x.menuIcon,
                  state: x.state,
                  sub: x.subMenuItems.map(function (y) {
                    return {
                      name: y.translateName,
                      state: y.status
                    };
                  })
                });
              });
              return menuItems;
            }));
          };
        }

        _createClass(_NavigationService, [{
          key: "sessionControl",
          value: function sessionControl(response) {
            if (response.isLoginRequired) {
              window.location.href = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.loginPage;
            }
          } // Customizer component uses this method to change menu.
          // You can remove this method and customizer component.
          // Or you can customize this method to supply different menu for
          // different user type.

        }, {
          key: "publishNavigationChange",
          value: function publishNavigationChange(menuType) {
            switch (menuType) {
              case 'separator-menu':
                this.menuItems.next(this.separatorMenu);
                break;

              case 'icon-menu':
                this.menuItems.next(this.iconMenu);
                break;

              default:
                this.menuItems.next(this.plainMenu);
            }
          }
        }]);

        return _NavigationService;
      }();

      _NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || _NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__.JwtAuthService));
      };

      _NavigationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _NavigationService,
        factory: _NavigationService.ɵfac
      });
      /***/
    },

    /***/
    43176:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/route-parts.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoutePartsService": function RoutePartsService() {
          return (
            /* binding */
            _RoutePartsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      3984);

      var _RoutePartsService = /*#__PURE__*/function () {
        function _RoutePartsService(router) {
          _classCallCheck(this, _RoutePartsService);

          this.router = router;
        }

        _createClass(_RoutePartsService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generateRouteParts",
          value: function generateRouteParts(snapshot) {
            var routeParts = [];

            if (snapshot) {
              if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
              }

              if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                  title: snapshot.data['title'],
                  breadcrumb: snapshot.data['breadcrumb'],
                  url: snapshot.url[0].path,
                  urlSegments: snapshot.url,
                  params: snapshot.params
                });
              }
            }

            return routeParts;
          }
        }]);

        return _RoutePartsService;
      }();

      _RoutePartsService.ɵfac = function RoutePartsService_Factory(t) {
        return new (t || _RoutePartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _RoutePartsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _RoutePartsService,
        factory: _RoutePartsService.ɵfac
      });
      /***/
    },

    /***/
    22552:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/theme.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThemeService": function ThemeService() {
          return (
            /* binding */
            _ThemeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../helpers/url.helper */
      54183);

      var _ThemeService = /*#__PURE__*/function () {
        function _ThemeService(document, rendererFactory) {
          _classCallCheck(this, _ThemeService);

          this.document = document;
          this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.egretThemes = [{
            'name': 'egret-navy',
            'baseColor': '#10174c',
            'isActive': false
          }, {
            'name': 'egret-navy-dark',
            'baseColor': '#0081ff',
            'isActive': false
          }];
          this.renderer = rendererFactory.createRenderer(null, null);
        } // Invoked in AppComponent and apply 'activatedTheme' on startup


        _createClass(_ThemeService, [{
          key: "applyMatTheme",
          value: function applyMatTheme(themeName) {
            this.activatedTheme = this.egretThemes.find(function (t) {
              return t.name === themeName;
            });
            this.flipActiveFlag(themeName); // *********** ONLY FOR DEMO **********

            this.setThemeFromQuery(); // ************************************
            // this.changeTheme(themeName);

            this.renderer.addClass(this.document.body, themeName);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(prevTheme, themeName) {
            this.renderer.removeClass(this.document.body, prevTheme);
            this.renderer.addClass(this.document.body, themeName);
            this.flipActiveFlag(themeName);
            this.onThemeChange.emit(this.activatedTheme);
          }
        }, {
          key: "flipActiveFlag",
          value: function flipActiveFlag(themeName) {
            var _this28 = this;

            this.egretThemes.forEach(function (t) {
              t.isActive = false;

              if (t.name === themeName) {
                t.isActive = true;
                _this28.activatedTheme = t;
              }
            });
          } // *********** ONLY FOR DEMO **********

        }, {
          key: "setThemeFromQuery",
          value: function setThemeFromQuery() {
            var themeStr = (0, _helpers_url_helper__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)('theme');

            try {
              this.activatedTheme = JSON.parse(themeStr);
              console.log(this.activatedTheme);
              this.flipActiveFlag(this.activatedTheme.name);
            } catch (e) {}
          }
        }]);

        return _ThemeService;
      }();

      _ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || _ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2));
      };

      _ThemeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ThemeService,
        factory: _ThemeService.ɵfac
      });
      /***/
    },

    /***/
    67310:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/ui-lib-icon.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UILibIconService": function UILibIconService() {
          return (
            /* binding */
            _UILibIconService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);

      var _UILibIconService = /*#__PURE__*/function () {
        function _UILibIconService(matIconRegistry, domSanitizer) {
          _classCallCheck(this, _UILibIconService);

          this.matIconRegistry = matIconRegistry;
          this.domSanitizer = domSanitizer;
          this.iconList = [{
            'name': 'ulb_monitor',
            'fileName': 'monitor.svg'
          }, {
            'name': 'ulb_money',
            'fileName': 'money.svg'
          }, {
            'name': 'ulb_home_security',
            'fileName': 'home_security.svg'
          }, {
            'name': 'ulb_paper_plane',
            'fileName': 'paper_plane.svg'
          }, {
            'name': 'ulb_menu',
            'fileName': 'menu.svg'
          }, {
            'name': 'ulb_home',
            'fileName': 'home.svg'
          }, {
            'name': 'ulb_documents',
            'fileName': 'documents.svg'
          }, {
            'name': 'ulb_edit',
            'fileName': 'edit.svg'
          }, {
            'name': 'ulb_boss',
            'fileName': 'boss.svg'
          }, {
            'name': 'ulb_partnership',
            'fileName': 'partnership.svg'
          }, {
            'name': 'ulb_partnership_1',
            'fileName': 'partnership_1.svg'
          }, {
            'name': 'ulb_success',
            'fileName': 'success.svg'
          }, {
            'name': 'ulb_rocket_launch',
            'fileName': 'rocket_launch.svg'
          }, {
            'name': 'ulb_rocket',
            'fileName': 'rocket.svg'
          }, {
            'name': 'ulb_business_and_trade',
            'fileName': 'business_and_trade.svg'
          }, {
            'name': 'ulb_enterprise',
            'fileName': 'enterprise.svg'
          }, {
            'name': 'ulb_cloud_computing',
            'fileName': 'cloud_computing.svg'
          }, {
            'name': 'ulb_cloud_computing_1',
            'fileName': 'cloud_computing_1.svg'
          }, {
            'name': 'ulb_cloud_computing_2',
            'fileName': 'cloud_computing_2.svg'
          }, {
            'name': 'ulb_send',
            'fileName': 'send.svg'
          }, {
            'name': 'ulb_table',
            'fileName': 'table.svg'
          }, {
            'name': 'ulb_notification',
            'fileName': 'notification.svg'
          }, {
            'name': 'ulb_person',
            'fileName': 'person.svg'
          }, {
            'name': 'ulb_menu_1',
            'fileName': 'menu_1.svg'
          }, {
            'name': 'ulb_delete',
            'fileName': 'delete.svg'
          }, {
            'name': 'ulb_close',
            'fileName': 'close.svg'
          }, {
            'name': 'ulb_magnifying_glass',
            'fileName': 'magnifying_glass.svg'
          }, {
            'name': 'ulb_settings',
            'fileName': 'settings.svg'
          }, {
            'name': 'ulb_twitter',
            'fileName': 'twitter.svg'
          }, {
            'name': 'ulb_facebook',
            'fileName': 'facebook.svg'
          }, {
            'name': 'ulb_linkedin',
            'fileName': 'linkedin.svg'
          }, {
            'name': 'ulb_pie_chart',
            'fileName': 'pie_chart.svg'
          }, {
            'name': 'ulb_paint_palette',
            'fileName': 'paint_palette.svg'
          }, {
            'name': 'ulb_server',
            'fileName': 'server.svg'
          }, {
            'name': 'ulb_database',
            'fileName': 'database.svg'
          }, {
            'name': 'ulb_database_1',
            'fileName': 'database_1.svg'
          }, {
            'name': 'ulb_creativity',
            'fileName': 'creativity.svg'
          }, {
            'name': 'ulb_list_text',
            'fileName': 'list_text.svg'
          }, {
            'name': 'ulb_list',
            'fileName': 'list.svg'
          }, {
            'name': 'ulb_shopping_list',
            'fileName': 'shopping_list.svg'
          }, {
            'name': 'ulb_checklist',
            'fileName': 'checklist.svg'
          }, {
            'name': 'ulb_bullet_list',
            'fileName': 'bullet_list.svg'
          }, {
            'name': 'ulb_shopping_cart',
            'fileName': 'shopping_cart.svg'
          }, {
            'name': 'ulb_add',
            'fileName': 'add.svg'
          }, {
            'name': 'ulb_shopping_cart_1',
            'fileName': 'shopping_cart_1.svg'
          }, {
            'name': 'ulb_shopping_basket',
            'fileName': 'shopping_basket.svg'
          }, {
            'name': 'ulb_edit_table',
            'fileName': 'edit_table.svg'
          }, {
            'name': 'ulb_casino_chips',
            'fileName': 'casino_chips.svg'
          }, {
            'name': 'ulb_add_1',
            'fileName': 'add_1.svg'
          }, {
            'name': 'ulb_chat',
            'fileName': 'chat.svg'
          }, {
            'name': 'ulb_chat_box',
            'fileName': 'chat_box.svg'
          }, {
            'name': 'ulb_chat_1',
            'fileName': 'chat_1.svg'
          }, {
            'name': 'ulb_agreement',
            'fileName': 'agreement.svg'
          }, {
            'name': 'ulb_box',
            'fileName': 'box.svg'
          }, {
            'name': 'ulb_link_1',
            'fileName': 'link_1.svg'
          }, {
            'name': 'ulb_link',
            'fileName': 'link.svg'
          }, {
            'name': 'ulb_message',
            'fileName': 'message.svg'
          }, {
            'name': 'ulb_inbox',
            'fileName': 'inbox.svg'
          }, {
            'name': 'ulb_inbox_1',
            'fileName': 'inbox_1.svg'
          }, {
            'name': 'ulb_invoices',
            'fileName': 'invoices.svg'
          }, {
            'name': 'ulb_receipt',
            'fileName': 'receipt.svg'
          }, {
            'name': 'ulb_search',
            'fileName': 'search.svg'
          }, {
            'name': 'ulb_date',
            'fileName': 'date.svg'
          }, {
            'name': 'ulb_building',
            'fileName': 'building.svg'
          }, {
            'name': 'ulb_block',
            'fileName': 'block.svg'
          }, {
            'name': 'ulb_users',
            'fileName': 'users.svg'
          }, {
            'name': 'ulb_user',
            'fileName': 'user.svg'
          }, {
            'name': 'ulb_map',
            'fileName': 'map.svg'
          }, {
            'name': 'ulb_location',
            'fileName': 'location.svg'
          }, {
            'name': 'ulb_drag',
            'fileName': 'drag.svg'
          }, {
            'name': 'ulb_business_card_of_a_man_with_contact_info',
            'fileName': 'business_card_of_a_man_with_contact_info.svg'
          }, {
            'name': 'ulb_help',
            'fileName': 'help.svg'
          }, {
            'name': 'ulb_list_1',
            'fileName': 'list_1.svg'
          }];
        }

        _createClass(_UILibIconService, [{
          key: "init",
          value: function init() {
            var _this29 = this;

            this.iconList.forEach(function (i) {
              _this29.matIconRegistry.addSvgIcon(i.name, _this29.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/svg-icons/".concat(i.fileName)));
            });
          }
        }]);

        return _UILibIconService;
      }();

      _UILibIconService.ɵfac = function UILibIconService_Factory(t) {
        return new (t || _UILibIconService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
      };

      _UILibIconService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _UILibIconService,
        factory: _UILibIconService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    28835:
    /*!*******************************************!*\
      !*** ./src/app/shared/session.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionService": function SessionService() {
          return (
            /* binding */
            _SessionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _SessionService = /*#__PURE__*/function () {
        function _SessionService() {
          _classCallCheck(this, _SessionService);
        }

        _createClass(_SessionService, [{
          key: "getSessionId",
          value: function getSessionId() {
            return localStorage.getItem("appSession");
          }
        }]);

        return _SessionService;
      }();

      _SessionService.ɵfac = function SessionService_Factory(t) {
        return new (t || _SessionService)();
      };

      _SessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SessionService,
        factory: _SessionService.ɵfac
      });
      /***/
    },

    /***/
    84390:
    /*!**************************************************!*\
      !*** ./src/app/shared/shared-material.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedMaterialModule": function SharedMaterialModule() {
          return (
            /* binding */
            _SharedMaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/badge */
      43335);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      9765);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      31141);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/chips */
      23202);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/core */
      64677);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/divider */
      50591);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/expansion */
      23900);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/paginator */
      23487);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      73985);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      49453);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      3069);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/sort */
      60857);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      89240);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tabs */
      40859);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/tooltip */
      64855);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tree */
      91732);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      50296);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/checkbox */
      89713);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      12895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/grid-list */
      81197);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/radio */
      72742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      61260);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      73624);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slider */
      68956);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      16945);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _SharedMaterialModule = function _SharedMaterialModule() {
        _classCallCheck(this, _SharedMaterialModule);
      };

      _SharedMaterialModule.ɵfac = function SharedMaterialModule_Factory(t) {
        return new (t || _SharedMaterialModule)();
      };

      _SharedMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _SharedMaterialModule
      });
      _SharedMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_32__.MatMomentDateModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_35__.MatBottomSheetModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__.MatDividerModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_SharedMaterialModule, {
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_32__.MatMomentDateModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_35__.MatBottomSheetModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__.MatDividerModule]
        });
      })();
      /***/

    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/theme.service */
      22552);
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/navigation.service */
      21218);
      /* harmony import */


      var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/route-parts.service */
      43176);
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      87618);
      /* harmony import */


      var _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/user-role.guard */
      14564);
      /* harmony import */


      var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/app-confirm/app-confirm.service */
      65403);
      /* harmony import */


      var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/app-loader/app-loader.service */
      77009);
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/shared-components.module */
      50933);
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pipes/shared-pipes.module */
      81233);
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./directives/shared-directives.module */
      72747);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      74788); // SERVICES


      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService, _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService, _services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__.RoutePartsService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_4__.UserRoleGuard, _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__.AppConfirmService, _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__.AppLoaderService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__.SharedComponentsModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__.SharedDirectivesModule], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__.SharedComponentsModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__.SharedDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__.SharedComponentsModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__.SharedDirectivesModule],
          exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__.SharedComponentsModule, _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__.SharedPipesModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__.SharedDirectivesModule]
        });
      })();
      /***/

    },

    /***/
    3835:
    /*!***********************!*\
      !*** ./src/config.ts ***!
      \***********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "config": function config() {
          return (
            /* binding */
            _config
          );
        }
        /* harmony export */

      });

      var _config = {
        apiUrl: 'http://localhost:13003/api',
        loginPage: '/sessions/signin',
        authRoles: {
          sa: ['SA'],
          admin: ['SA', 'Admin'],
          editor: ['SA', 'Admin', 'Editor'],
          user: ['SA', 'Admin', 'Editor', 'User'],
          guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access

        }
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! config */
      3835); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular.json`.


      var _environment = {
        production: false,
        apiURL: config__WEBPACK_IMPORTED_MODULE_0__.config.apiUrl,
        loginPage: config__WEBPACK_IMPORTED_MODULE_0__.config.loginPage,
        imagePath: 'http://localhost:13003/'
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 26431,
        "./af.js": 26431,
        "./ar": 81286,
        "./ar-dz": 1616,
        "./ar-dz.js": 1616,
        "./ar-kw": 9759,
        "./ar-kw.js": 9759,
        "./ar-ly": 43160,
        "./ar-ly.js": 43160,
        "./ar-ma": 62551,
        "./ar-ma.js": 62551,
        "./ar-sa": 79989,
        "./ar-sa.js": 79989,
        "./ar-tn": 6962,
        "./ar-tn.js": 6962,
        "./ar.js": 81286,
        "./az": 15887,
        "./az.js": 15887,
        "./be": 14572,
        "./be.js": 14572,
        "./bg": 3276,
        "./bg.js": 3276,
        "./bm": 93344,
        "./bm.js": 93344,
        "./bn": 58985,
        "./bn.js": 58985,
        "./bo": 94391,
        "./bo.js": 94391,
        "./br": 46728,
        "./br.js": 46728,
        "./bs": 5536,
        "./bs.js": 5536,
        "./ca": 41043,
        "./ca.js": 41043,
        "./cs": 70420,
        "./cs.js": 70420,
        "./cv": 33513,
        "./cv.js": 33513,
        "./cy": 6771,
        "./cy.js": 6771,
        "./da": 47978,
        "./da.js": 47978,
        "./de": 46061,
        "./de-at": 25204,
        "./de-at.js": 25204,
        "./de-ch": 2653,
        "./de-ch.js": 2653,
        "./de.js": 46061,
        "./dv": 85,
        "./dv.js": 85,
        "./el": 8579,
        "./el.js": 8579,
        "./en-SG": 84285,
        "./en-SG.js": 84285,
        "./en-au": 25724,
        "./en-au.js": 25724,
        "./en-ca": 10525,
        "./en-ca.js": 10525,
        "./en-gb": 52847,
        "./en-gb.js": 52847,
        "./en-ie": 67216,
        "./en-ie.js": 67216,
        "./en-il": 39305,
        "./en-il.js": 39305,
        "./en-nz": 79130,
        "./en-nz.js": 79130,
        "./eo": 50802,
        "./eo.js": 50802,
        "./es": 40328,
        "./es-do": 45551,
        "./es-do.js": 45551,
        "./es-us": 64790,
        "./es-us.js": 64790,
        "./es.js": 40328,
        "./et": 96389,
        "./et.js": 96389,
        "./eu": 52961,
        "./eu.js": 52961,
        "./fa": 26151,
        "./fa.js": 26151,
        "./fi": 7997,
        "./fi.js": 7997,
        "./fo": 37779,
        "./fo.js": 37779,
        "./fr": 28174,
        "./fr-ca": 3287,
        "./fr-ca.js": 3287,
        "./fr-ch": 38867,
        "./fr-ch.js": 38867,
        "./fr.js": 28174,
        "./fy": 50452,
        "./fy.js": 50452,
        "./ga": 45014,
        "./ga.js": 45014,
        "./gd": 74127,
        "./gd.js": 74127,
        "./gl": 72124,
        "./gl.js": 72124,
        "./gom-latn": 37953,
        "./gom-latn.js": 37953,
        "./gu": 76604,
        "./gu.js": 76604,
        "./he": 1222,
        "./he.js": 1222,
        "./hi": 74235,
        "./hi.js": 74235,
        "./hr": 622,
        "./hr.js": 622,
        "./hu": 37735,
        "./hu.js": 37735,
        "./hy-am": 90402,
        "./hy-am.js": 90402,
        "./id": 59187,
        "./id.js": 59187,
        "./is": 30536,
        "./is.js": 30536,
        "./it": 35007,
        "./it-ch": 94667,
        "./it-ch.js": 94667,
        "./it.js": 35007,
        "./ja": 62093,
        "./ja.js": 62093,
        "./jv": 80059,
        "./jv.js": 80059,
        "./ka": 66870,
        "./ka.js": 66870,
        "./kk": 80880,
        "./kk.js": 80880,
        "./km": 1083,
        "./km.js": 1083,
        "./kn": 68785,
        "./kn.js": 68785,
        "./ko": 21721,
        "./ko.js": 21721,
        "./ku": 37851,
        "./ku.js": 37851,
        "./ky": 1727,
        "./ky.js": 1727,
        "./lb": 40346,
        "./lb.js": 40346,
        "./lo": 93002,
        "./lo.js": 93002,
        "./lt": 64035,
        "./lt.js": 64035,
        "./lv": 56927,
        "./lv.js": 56927,
        "./me": 5634,
        "./me.js": 5634,
        "./mi": 94173,
        "./mi.js": 94173,
        "./mk": 86320,
        "./mk.js": 86320,
        "./ml": 11705,
        "./ml.js": 11705,
        "./mn": 31062,
        "./mn.js": 31062,
        "./mr": 92805,
        "./mr.js": 92805,
        "./ms": 11341,
        "./ms-my": 59900,
        "./ms-my.js": 59900,
        "./ms.js": 11341,
        "./mt": 37734,
        "./mt.js": 37734,
        "./my": 19034,
        "./my.js": 19034,
        "./nb": 9324,
        "./nb.js": 9324,
        "./ne": 46495,
        "./ne.js": 46495,
        "./nl": 70673,
        "./nl-be": 76272,
        "./nl-be.js": 76272,
        "./nl.js": 70673,
        "./nn": 72486,
        "./nn.js": 72486,
        "./pa-in": 2829,
        "./pa-in.js": 2829,
        "./pl": 78444,
        "./pl.js": 78444,
        "./pt": 53170,
        "./pt-br": 66117,
        "./pt-br.js": 66117,
        "./pt.js": 53170,
        "./ro": 96587,
        "./ro.js": 96587,
        "./ru": 39264,
        "./ru.js": 39264,
        "./sd": 42135,
        "./sd.js": 42135,
        "./se": 95366,
        "./se.js": 95366,
        "./si": 93379,
        "./si.js": 93379,
        "./sk": 46143,
        "./sk.js": 46143,
        "./sl": 196,
        "./sl.js": 196,
        "./sq": 21082,
        "./sq.js": 21082,
        "./sr": 91621,
        "./sr-cyrl": 98963,
        "./sr-cyrl.js": 98963,
        "./sr.js": 91621,
        "./ss": 41404,
        "./ss.js": 41404,
        "./sv": 55685,
        "./sv.js": 55685,
        "./sw": 3872,
        "./sw.js": 3872,
        "./ta": 54106,
        "./ta.js": 54106,
        "./te": 39204,
        "./te.js": 39204,
        "./tet": 83692,
        "./tet.js": 83692,
        "./tg": 86361,
        "./tg.js": 86361,
        "./th": 31735,
        "./th.js": 31735,
        "./tl-ph": 96129,
        "./tl-ph.js": 96129,
        "./tlh": 13759,
        "./tlh.js": 13759,
        "./tr": 81644,
        "./tr.js": 81644,
        "./tzl": 90875,
        "./tzl.js": 90875,
        "./tzm": 16878,
        "./tzm-latn": 11041,
        "./tzm-latn.js": 11041,
        "./tzm.js": 16878,
        "./ug-cn": 74357,
        "./ug-cn.js": 74357,
        "./uk": 74810,
        "./uk.js": 74810,
        "./ur": 86794,
        "./ur.js": 86794,
        "./uz": 28966,
        "./uz-latn": 77959,
        "./uz-latn.js": 77959,
        "./uz.js": 28966,
        "./vi": 35386,
        "./vi.js": 35386,
        "./x-pseudo": 23156,
        "./x-pseudo.js": 23156,
        "./yo": 68028,
        "./yo.js": 68028,
        "./zh-cn": 9330,
        "./zh-cn.js": 9330,
        "./zh-hk": 89380,
        "./zh-hk.js": 89380,
        "./zh-tw": 96508,
        "./zh-tw.js": 96508
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map