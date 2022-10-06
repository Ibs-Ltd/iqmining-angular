function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-loader></app-loader>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"showfooter\"></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bold text-yellow \">{{'header.about_us' | translate}}</h1>\r\n                <P class=\"text-white mt-4\">{{'home.aboutUs' | translate}}</P>\r\n                <button class=\"btn btn-yellow mt-3\" (click)=\"navigateToBuyMore()\" style=\"text-transform: uppercase;\">\r\n                   {{'home.start_mining' | translate}}\r\n                </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n\r\n                <img src=\"assets/images/about_img.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"sections mt-5 aboutbg\">\r\n    <div class=\"container pt-5\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bolder text-white \">{{'home.about' | translate}}</h1>\r\n                <p class=\"text-white\">{{'home.why_choose' | translate}}</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h5 class=\"text-light-blue\">{{'home.auto_match' | translate}}</h5>\r\n            </div>\r\n            <div class=\"col-12 my-5\">\r\n                <p class=\"text-white\">{{'home.crypto_about' | translate}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row py-md-5 py-3 my-md-5 align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"fancypres text-white\">\r\n                    <span class=\"count\">01</span>\r\n                    <h3>{{'header.sign_up' | translate}}</h3>\r\n                    <p>{{'home.register_about' | translate}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/3rd.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row py-md-5 py-3 my-md-5 align-items-center d-md-flex flex-row-reverse\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"fancypres text-white\">\r\n                    <span class=\"count\">02</span>\r\n                    <h3>{{'home.product_approach' | translate}}</h3>\r\n                    <p>{{'home.find_goods' | translate}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/2nd.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row py-md-5 py-3 my-md-5 align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"fancypres text-white\">\r\n                    <span class=\"count\">03</span>\r\n                    <h3>{{'home.buy_product' | translate}}</h3>\r\n                    <p>{{'home.buy_goods' | translate}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/1st.png\" class=\"mw-100\">\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- <section class=\"sections mt-md-5 py-md-5 py-3 contactbg\">\r\n    <div class=\"container pt-5\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 mb-5 text-center\">\r\n                <h1 class=\"fw-bolder text-white \">Contact</h1>\r\n                <p class=\"text-white\">Get in Touch</p>\r\n            </div>\r\n        </div>\r\n        <form class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group iconinput\">\r\n                    <img src=\"assets/images/user.svg\">\r\n                    <input class=\"roundinput\" type=\"text\" required placeholder=\"Name*\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group iconinput\">\r\n                    <img src=\"assets/images/email.svg\">\r\n                    <input class=\"roundinput\" type=\"email\" required placeholder=\"Email*\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group iconinput\">\r\n                    <img src=\"assets/images/world.svg\">\r\n                    <input class=\"roundinput\" type=\"text\" required placeholder=\"Website*\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group iconinput\">\r\n                    <textarea class=\"roundinput\" type=\"text\" required placeholder=\"Message*\" rows=\"6\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 text-center\">\r\n                <div type=\"submit\" class=\"btn btn-yellow w-auto\">\r\n                    Submit Message\r\n                </div>\r\n            </div>\r\n            <p class=\"text-white text-center h5 fw-light lh-base mt-5\">Lorem Ipsum is simply dummy text of the printing\r\n                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n                when an unknown printer took a galley of type and scrambled it to make\r\n            </p>\r\n        </form>\r\n\r\n        <div class=\"col-12 text-center social_btns mt-5\">\r\n            <a href=\"#\"><img src=\"assets/images/icon1.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon2.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon3.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon4.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon5.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon6.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon7.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon8.png\" height=\"51\"></a>&nbsp;&nbsp;\r\n            <a href=\"#\"><img src=\"assets/images/icon9.png\" height=\"51\"></a>\r\n\r\n        </div>\r\n    </div>\r\n</section> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bold text-yellow \">{{'account.personal_data' | translate}}</h1>\r\n                <!-- <P class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing\r\n                    and typesetting industry. Lorem Ipsum has been\r\n                    the industry's standard dummy text ever since\r\n                    the 1500s, when an unknown printer took a\r\n                    galley of type and scrambled it to make a type\r\n                    specimen book.</P> -->\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/account_img.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"sections mb-5\">\r\n    <div class=\"container pb-5\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\"text-yellow mb-4 mt-md-0 mt-5\">{{'account.personal_data' | translate}}</h4>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <form class=\"cardform\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <label class=\"text-white\">Name</label>\r\n                                </div>\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"profile.firstName\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <label class=\"text-white\">{{'register.surname' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"surname\" [(ngModel)]=\"profile.lastName\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <label class=\"text-white\">Email</label>\r\n                                </div>\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"email\" class=\"form-control\" name=\"email\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <label class=\"text-white\">{{'register.phone' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"profile.phone\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\"text-yellow mb-4 mt-md-0 mt-5\">{{'account.personal_data' | translate}}</h4>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"flex-grow-1 text-white\">\r\n                                <label>{{'account.copy_passport' | translate}}</label><br />\r\n                                <small class=\"text-muted d-block\">{{'account.upload_file' | translate}}</small>\r\n                                <p *ngIf=\"!profile.files[0]; else plink\">{{'account.copy_passport_not' | translate}}</p>\r\n                                <ng-template #plink>\r\n                                    <a class=\"white\" [href]=\"profile.files[0]\" target=\"_blank\">{{'account.copy_passport' | translate}}</a>\r\n                                </ng-template>\r\n                            </div>\r\n                            <div>\r\n                                <input type=\"file\" id=\"passport-file\" style=\"display:none\" (change)=\"uploadFile($event, 'passport')\">\r\n\r\n                                <button class=\"btn btn-outline-upload\" style=\"text-transform: uppercase;\" (click)=\"openDialog('passport')\">{{'account.upload' | translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"text-white my-0\" />\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"flex-grow-1 text-white\">\r\n                                <label>{{'account.verification' | translate}}</label><br />\r\n                                <small class=\"text-muted d-block\">{{'account.upload_file' | translate}}</small>\r\n                                <p *ngIf=\"!profile.files[1]; else vlink\">{{'account.copy_passport_not' | translate}}</p>\r\n                                <ng-template #vlink>\r\n                                    <a class=\"white\" [href]=\"profile.files[1]\" target=\"_blank\">{{'account.copy_veri' | translate}}</a>\r\n                                </ng-template>\r\n                            </div>\r\n                            <div>\r\n                                <input type=\"file\" id=\"verification-file\" style=\"display:none\" (change)=\"uploadFile($event, 'verification')\">\r\n                                <button class=\"btn btn-outline-upload\" (click)=\"openDialog('verification')\" style=\"text-transform: uppercase;\">{{'account.upload' | translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center col-12 mt-4 mb-5\">\r\n                <button class=\"btn btn-yellow\" (click)=\"save()\" style=\"text-transform: uppercase;\">{{'account.save' | translate}}</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\"text-yellow mb-4 mt-md-0 mt-5\">{{'account.change_pass' | translate}}</h4>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <form class=\"cardform\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label class=\"text-white\">{{'account.current_pass' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"name\" [(ngModel)]=\"passwords.currentPassword\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label class=\"text-white\">{{'account.new_pass' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"name\" [(ngModel)]=\"passwords.password\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label class=\"text-white\">{{'account.current_pass' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"passwords.confirmPassword\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-12 text-center neg-btm-40  mt-3\">\r\n                                <button class=\"btn btn-yellow\" (click)=\"changePassword()\" style=\"text-transform: uppercase;\">{{'account.save' | translate}}</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-6\">\r\n                <h4 class=\"text-yellow mb-4 mt-md-0 mt-5\">Change Password</h4>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <form class=\"cardform\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label class=\"text-white\">Choose Kind</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"form-group\">\r\n                                        <select class=\"form-control\">\r\n                                            <option>None</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-12 text-center neg-btm-40 mt-3\">\r\n                                <button class=\"btn btn-yellow\">SAVE DETAILS</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"header-card p-md-4 p-3\">\r\n                        <h4 class=\"text-yellow mb-0 text-center\">{{'purchase.purchase_history' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"p-3 bg-white\" >\r\n                        <div *ngIf=\"packages?.length\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th scope=\"col\">Status</th>\r\n                                    <th scope=\"col\">Name</th>\r\n                                    <th scope=\"col\">{{'account.price' | translate}}</th>\r\n                                    <th scope=\"col\">{{'account.contract_year' | translate}}</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let package of packages | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n                                    <th scope=\"row\">{{package.status}}</th>\r\n                                    <td>{{package?.package?.name}}</td>\r\n                                    <td>{{package?.package?.discountedPrice}}</td>\r\n                                    <td>{{package?.package?.contractYear}}</td>\r\n                                  </tr>\r\n                                  \r\n                                </tbody>\r\n                              </table>\r\n                              <pagination-controls (pageChange)=\"getMyPackages($event)\"></pagination-controls>\r\n\r\n                        </div>\r\n                        <h4 class=\"text-muted text-center py-5\" *ngIf=\"!packages?.length\">{{'account.no_purchase_his' | translate}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-purchase/admin-purchase.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminPurchaseAdminPurchaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card mt-5\">\r\n        <div class=\"header-card p-md-4 p-3\">\r\n          <h4 class=\"text-yellow mb-0 text-center\">{{ 'purchase.purchase_history' | translate }}</h4>\r\n        </div>\r\n        <div class=\"p-3 bg-white\">\r\n          <div *ngIf=\"packages?.length\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Status</th>\r\n                  <th scope=\"col\">Name</th>\r\n                  <th scope=\"col\">Price</th>\r\n                  <th scope=\"col\">Contract Year</th>\r\n                  <th scope=\"col\">Mining Strategy</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let package of packages | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n                  <th scope=\"row\">{{package.status}}</th>\r\n                  <td>{{package?.package?.name}}</td>\r\n                  <td>{{package?.package?.discountedPrice}}</td>\r\n                  <td>{{package?.package?.contractYear}}</td>\r\n                  <td>{{package?.package?.miningStrategy}}</td>\r\n                  \r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n            <pagination-controls (pageChange)=\"getPurchaseList($event)\"></pagination-controls>\r\n\r\n          </div>\r\n          <h4 class=\"text-muted text-center py-5\" *ngIf=\"!packages?.length\">{{ 'account.no_purchase_his' | translate }}</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-users/admin-users.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminUsersAdminUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card mt-5\">\r\n          <div class=\"header-card p-md-4 p-3\">\r\n              <h4 class=\"text-yellow mb-0 text-center\">{{ 'header.users' | translate }}</h4>\r\n          </div>\r\n          <div class=\"p-3 bg-white\">\r\n              <div *ngIf=\"users?.length\">\r\n                  <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Email</th>\r\n                          <th scope=\"col\">Name</th>\r\n                          <th scope=\"col\">{{ 'users.balance' | translate }}</th>\r\n                          <th scope=\"col\">{{ 'register.phone' | translate }}</th>\r\n                          <th></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let user of users\">\r\n                          <th scope=\"row\">{{user.email}}</th>\r\n                          <td>{{user?.firstName}} {{user?.lastName}}</td>\r\n                          <td>{{user?.totalBalance}}</td>\r\n                          <td [title]=\"user.phone\">{{user?.phone}}</td>\r\n                          <td>\r\n                            <i class=\"fas fa-check green mr-10\" *ngIf=\"user.isActive\"></i>\r\n                          </td>\r\n                        </tr>\r\n                        \r\n                      </tbody>\r\n                    </table>\r\n                    <!-- <pagination-controls (pageChange)=\"getUsers($event)\"></pagination-controls> -->\r\n              </div>\r\n              <h4 class=\"text-muted text-center py-5\" *ngIf=\"!users || !users.length\">{{'users.no_users' | translate}}</h4>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-withdraw/admin-withdraw.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminWithdrawAdminWithdrawComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card mt-5\">\r\n          <div class=\"header-card p-md-4 p-3\">\r\n              <h4 class=\"text-yellow mb-0 text-center\">{{ 'withdraw.withdraw_history' | translate }}</h4>\r\n          </div>\r\n          <div class=\"p-3 bg-white\">\r\n              <div *ngIf=\"withdrawList?.length\">\r\n                  <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Status</th>\r\n                          <th scope=\"col\">Name</th>\r\n                          <th scope=\"col\">{{ 'withdraw.amount' | translate }}</th>\r\n                          <th scope=\"col\">{{ 'withdraw.address' | translate }}</th>\r\n                          <th scope=\"col\">Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let withdraw of withdrawList\">\r\n                          <th scope=\"row\">\r\n                            <span *ngIf=\"withdraw.status == 'PENDING'\">{{ 'withdraw.pending' | translate }}</span>\r\n                            <span *ngIf=\"withdraw.status == 'COMPLETED'\">{{ 'withdraw.complete' | translate }}</span>\r\n                            <span *ngIf=\"withdraw.status == 'REJECTED'\">{{ 'withdraw.rejected' | translate }}</span>\r\n\r\n                          </th>\r\n                          <td>{{withdraw?.user?.firstName}} {{withdraw?.user?.lastName}}</td>\r\n                          <td>{{withdraw?.amount}}</td>\r\n                          <td [title]=\"withdraw.address\">{{withdraw?.address}}</td>\r\n                          <td *ngIf=\"withdraw.status == 'PENDING'\">\r\n                            <i class=\"fas fa-check green mr-10 pointer\" (click)=\"updateStatus('accept', withdraw)\"></i>\r\n                            <i class=\"fas fa-times red pointer\" (click)=\"updateStatus('reject', withdraw)\"></i>\r\n                          </td>\r\n                        </tr>\r\n                        \r\n                      </tbody>\r\n                    </table>\r\n                    <!-- <pagination-controls (pageChange)=\"getWithdraw($event)\"></pagination-controls> -->\r\n              </div>\r\n              <h4 class=\"text-muted text-center py-5\" *ngIf=\"!withdrawList || !withdrawList.length\">{{'withdrawal.no_history' | translate}}</h4>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/forgot-password/forgot-password.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Form-->\r\n<div class=\"col-12 px-3\">\r\n    <div class=\"form  mb-5\">\r\n        <div class=\"form-panel one \">\r\n            <div class=\"form-header\">\r\n                <h1>Forgot your password?</h1>\r\n                <p>Please enter your email you use to login to Liquid Mining</p>\r\n            </div>\r\n            <div class=\"form-content\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group mb-3\">\r\n                                <label for=\"username\">Email</label>\r\n                                <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required=\"required\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12\">\r\n\r\n                            <div class=\"form-group mb-3\">\r\n                                <button (click)=\"forgot()\">Request password reset</button>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"text-center mt-4\">Back to <a routerLink=\"/auth/login\">Login</a></p>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Form-->\r\n<div class=\"col-12 px-3\">\r\n    <div class=\"form  mb-5\">\r\n        <div class=\"form-panel one \">\r\n            <div class=\"form-header\">\r\n                <h1>{{'login.Account' | translate}} {{'login.Login' | translate}}</h1>\r\n            </div>\r\n            <div class=\"form-content\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group mb-3\">\r\n                                <label for=\"username\">{{'login.Username' | translate}}</label>\r\n                                <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"auth.email\" required=\"required\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n\r\n                            <div class=\"form-group mb-3\">\r\n                                <label for=\"password\">{{'login.Password' | translate}}</label>\r\n                                <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"auth.password\" required=\"required\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n\r\n                            <div class=\"form-group mb-3\">\r\n                                <label class=\"form-remember\">\r\n                                    <input type=\"checkbox\" />{{'login.Remember_Me' | translate}}\r\n                                </label><a class=\"form-recovery\" routerLink=\"/auth/forgot-password\">{{'login.Forgot_Password' | translate}}?</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n\r\n                            <div class=\"form-group mb-3\">\r\n                                <button (click)=\"login()\">{{'login.Login' | translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"text-center mt-4\">{{'login.Dont_have_an_account' | translate}}? <a routerLink=\"/auth/register\">{{'login.Register' | translate}}</a></p>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Form-->\r\n<div class=\"col-12 px-3\">\r\n\t<div class=\"form  mb-5\">\r\n\t\t<div class=\"form-panel one \">\r\n\t\t\t<div class=\"form-header\">\r\n\t\t\t\t<h1>{{'register.Create' | translate}} {{'login.Account' | translate}}</h1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-content\">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class=\"row mb-4\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"username\">{{'register.name' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"register.firstName\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"username\">{{'register.surname' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"surname\" name=\"surname\" [(ngModel)]=\"register.lastName\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"username\">{{'register.email' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"register.email\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"username\">{{'register.phone' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"register.phone\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"password\">{{'login.Password' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"register.password\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"password\">{{'register.confirm' | translate}} {{'login.Password' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"password\" id=\"confirm_password\" name=\"confirm_password\" [(ngModel)]=\"register.confirmPassword\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"referral\">{{'header.referral' | translate}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"referral\" name=\"referral\" [(ngModel)]=\"register.referralCode\" required=\"required\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-remember\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"terms\" [(ngModel)]=\"terms\" />{{'register.I_have_read_and_agree_to_the' | translate}} <a\r\n\t\t\t\t\t\t\t\t\t\trouterLink=\"/home/terms-and-conditions\">{{'register.Terms_and_conditions' | translate}}</a>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-remember\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"confirmpolicy\" [(ngModel)]=\"confirmpolicy\" />{{'register.I_confirm_this_service_is_provided_to_me_outside_US_territory' |\r\n\t\t\t\t\t\t\t\t\ttranslate}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group mb-1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-remember\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"risk\" [(ngModel)]=\"risk\" />{{'register.I_have_read_and_agree_with' | translate}} <a\r\n\t\t\t\t\t\t\t\t\t\trouterLink=\"/home/privacy\">{{'register.risk_policy' | translate}}</a>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"registerForm()\">{{'login.Register' | translate}}</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"text-center mt-4\">{{'register.Already_have_an_account' | translate}}? <a\r\n\t\t\t\t\t\t\t\trouterLink=\"/auth/login\">{{'login.Login' | translate}}</a></p>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/reset-password/reset-password.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections mb-5\">\r\n  <div class=\"container pb-5\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"text-yellow mb-4 mt-md-0 mt-5\">Reset Password</h4>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"cardform\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label class=\"text-white\">New Password</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" [(ngModel)]=\"newPassword\" class=\"form-control\" name=\"name\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label class=\"text-white\">Confirm Password</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" name=\"name\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-12 text-center neg-btm-40  mt-3\">\r\n              <button class=\"btn btn-yellow\" (click)=\"resetPassword()\">Reset</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/verify-user/verify-user.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthVerifyUserVerifyUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>verify-user works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections py-md-5 py-3 contactbg\">\r\n  <div class=\"container pt-5\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12 mb-5 text-center\">\r\n              <h1 class=\"fw-bolder text-white \">{{'header.contact' | translate}}</h1>\r\n              <p class=\"text-white\">{{'contact.get_in_touch' | translate}}</p>\r\n          </div>\r\n      </div>\r\n      <form class=\"\">\r\n        <div class=\" row content-center\">\r\n          <div class=\"col-md-12\" style=\"width: 53%\">\r\n              <div class=\"form-group iconinput\">\r\n                  <img src=\"assets/images/user.svg\">\r\n                  <input class=\"roundinput\" type=\"text\" name=\"name\" [(ngModel)]=\"contact.name\" required placeholder=\"Name*\" />\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-12\" style=\"width: 53%\">\r\n              <div class=\"form-group iconinput\">\r\n                  <img src=\"assets/images/email.svg\">\r\n                  <input class=\"roundinput\" type=\"email\" name=\"email\" [(ngModel)]=\"contact.email\" required placeholder=\"Email*\" />\r\n              </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group iconinput\">\r\n                  <img src=\"assets/images/world.svg\">\r\n                  <input class=\"roundinput\" type=\"text\" required placeholder=\"Website*\" />\r\n              </div>\r\n          </div> -->\r\n          <div class=\"col-md-12\" style=\"width: 53%\">\r\n              <div class=\"form-group iconinput\">\r\n                  <textarea class=\"roundinput\" type=\"text\" name=\"concern\" [(ngModel)]=\"contact.concern\" required placeholder=\"{{'contact.write_your_concern' | translate }}\" rows=\"6\"></textarea>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\">\r\n              <div class=\"btn btn-yellow w-auto\" (click)=\"submit()\">\r\n                  {{'contact.submit_message' | translate}}\r\n              </div>\r\n          </div>\r\n         \r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"col-12 text-center social_btns mt-5\">\r\n          <a href=\"#\"><img src=\"assets/images/icon1.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon2.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon3.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon4.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon5.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon6.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon7.png\" height=\"51\"></a> &nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon8.png\" height=\"51\"></a>&nbsp;&nbsp;\r\n          <a href=\"#\"><img src=\"assets/images/icon9.png\" height=\"51\"></a>\r\n\r\n      </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row \">\r\n\r\n\t\t\t<div class=\"col-md-12 mt-5\">\r\n\t\t\t\t<h1 class=\"fw-bold text-yellow\">Dashboard</h1>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-3\">\r\n\t\t\t<div class=\"px-3 col-12 \">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"btn-group d-xl-none mb-3 d-lg-none col-12 col-\">\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\">\r\n\t\t\t\t\t\t\tYOUR GIVEAWAY TICKETS\r\n\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end  \">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"changePlan('SHA-256')\">\r\n\t\t\t\t\t\t\t\t\tSHA-256 \r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"changePlan('SHA-256-PRO')\">\r\n\t\t\t\t\t\t\t\t\tSHA-256 PRO\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"changePlan('SHA-256-BCH')\">\r\n\t\t\t\t\t\t\t\t\tSHA-256 BCH\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"changePlan('USDT')\">\r\n\t\t\t\t\t\t\t\t\tUSDT\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"changePlan('ETHEREUM')\">\r\n\t\t\t\t\t\t\t\t\tETHEREUM\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('')\">\r\n\t\t\t\t\t\t\t\t\tTOTAL\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"d-lg-block d-md-none d-ms-none d-none col-lg-9\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('sha-256')\">\r\n\t\t\t\t\t\t\tPackage 1<br> SHA-256 \r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('sha-256-pro')\">\r\n\t\t\t\t\t\t\tPackage 2<br> SHA-256 PRO\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('sha-256-bch')\">\r\n\t\t\t\t\t\t\tPackage 3<br> SHA-256 BCH\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('usdt')\">\r\n\t\t\t\t\t\t\tPackage 4<br> USDT\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('eth')\">\r\n\t\t\t\t\t\t\tPackage 5<br> ETHEREUM\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary me-3\" (click)=\"changePlan('')\">\r\n\t\t\t\t\t\t\tTOTAL\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<!-- <div class=\"text-end col-lg-3 col-12\">\r\n\t\t\t\t\t\t<div class=\"btn-group w-100\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n\t\t\t\t\t\t\t\taria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\tGIVEAWAY TICKETS\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end\">\r\n\t\t\t\t\t\t\t\t<li class=\"d-flex px-3 py-2 border-bottom\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 me-auto flex-nowrap small me-3\">New Macbook Air</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 small\">0 tickets</p>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"d-flex px-3 py-2 border-bottom\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 me-auto flex-nowrap small me-3\">New iMac 27\"</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 small\">0 tickets</p>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"d-flex px-3 py-2 border-bottom\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 me-auto flex-nowrap small me-3\">iPhone 11 Pro Max</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 small\">0 tickets</p>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"d-flex px-3 py-2 border-bottom\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 me-auto flex-nowrap small me-3\">Apple Watch Series 5</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"mb-0 small\">0 tickets</p>\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3 mb-3 mt-4\">\r\n\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<h5>{{'dashboard.your_power' | translate}}</h5>\r\n\t\t\t\t\t\t<h4 class=\"fw-light my-3\">{{dashboard.totalHashRate}} <small class=\"h5\">GH/s</small></h4>\r\n\t\t\t\t\t\t<!-- <button class=\"btn btn-yellow mb-2\">BUY MORE GH/s</button> -->\r\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-round mb-3\" (click)=\"navigateToBuyMore()\">{{'dashboard.buy_more_power' | translate}}</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<h5>{{'dashboard.your_balance' | translate}}</h5>\r\n\t\t\t\t\t\t<h4 class=\"fw-light my-3\">{{dashboard.userTotalBalanceBtc}} <small class=\"h5\">BTC</small></h4>\r\n\t\t\t\t\t\t<!-- <button class=\"btn btn-yellow mb-2\">TRANSFER TO GH/s</button> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<h5>{{'dashboard.daily_income_per' | translate}} GH/s</h5>\r\n\t\t\t\t\t\t<h4 class=\"fw-light my-3\">{{dashboard.incomePerHash}} <small class=\"h5\">USD</small></h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-md-9 mb-3 mt-4\">\r\n\t\t\t\t<div class=\"card bg-white  mb-3 text-center\">\r\n\t\t\t\t\t<div class=\"card-body min-h-435\">\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\r\n\t\t\t\t\t\t\t<h5 class=\"mb-0 me-auto\">{{'dashboard.your_income' | translate}} (BTC)</h5>\r\n\t\t\t\t\t\t\t<p class=\"text-muted mb-0\">\r\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"navigateToBuyMore()\">{{'dashboard.buy_more_power' | translate}}</a>\r\n\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<app-income-chart *ngIf=\"dashboard?.userBalances?.length\" [data]=\"dashboard.userBalances\"></app-income-chart>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t<div class=\"col-lg-3 col-6\">\r\n\t\t\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h5>{{'dashboard.daily' | translate}}</h5>\r\n\t\t\t\t\t\t\t\t<h4 class=\"fw-light\">{{dashboard.dailyIncomeBtc}}<small class=\"h5 fw-light\">BTC</small></h4>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\">({{dashboard.dailyIncome}} USD)</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-6\">\r\n\t\t\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h5>{{'dashboard.weekly' | translate}}</h5>\r\n\t\t\t\t\t\t\t\t<h4 class=\"fw-light\">{{dashboard.weeklyIncomeBtc}} <small class=\"h5 fw-light\">BTC</small></h4>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\">({{dashboard.weeklyIncome}} USD)</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-6\">\r\n\t\t\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h5>{{'dashboard.monthly' | translate}}</h5>\r\n\t\t\t\t\t\t\t\t<h4 class=\"fw-light\">{{dashboard.monthlyIncomeBtc}} <small class=\"h5 fw-light\">BTC</small></h4>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\">({{dashboard.monthlyIncome}} USD)</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-6\">\r\n\t\t\t\t\t\t<div class=\"card bg-white mb-3 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h5>{{'dashboard.annual' | translate}}</h5>\r\n\t\t\t\t\t\t\t\t<h4 class=\"fw-light\">{{dashboard.annualIncomeBtc}} <small class=\"h5 fw-light\">BTC</small></h4>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\">({{dashboard.annualIncome}} USD)</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/income-chart/income-chart.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardIncomeChartIncomeChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block;\">\r\n</highcharts-chart>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bold text-white \">{{'home.mine_trade' |  translate}}<br />{{'home.double_up' | translate}}</h1>\r\n                <P class=\"text-white mt-4\">{{'home.liquid_mining_desc' | translate}}</P>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/mine_trade_img.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"sections\">\r\n    <div class=\"container\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/img_1.png\" class=\"mw-100 \">\r\n            </div>\r\n            <div class=\"col-md-6 text-end\">\r\n                <h1 class=\"fw-bold text-yellow \">{{ 'header.about_us' | translate }}</h1>\r\n                <!-- <p class=\"smheading  mb-4\">{{ 'header.about_us' | translate }}</p> -->\r\n                \r\n                <p class=\"text-white mt-4\">{{ 'home.aboutUs' | translate }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"cloud_mining sections\">\r\n    <div class=\"container\">\r\n        <div class=\"section_heading text-center\">\r\n            <h1>CLOUD MINING</h1>\r\n            <p class=\"text-white\">{{ 'home.cloudMining' | translate }}</p>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/cloud_mining.png\" class=\"mw-100 \">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 text-center mb-3 \">\r\n                        <div class=\"roundedbox text-center mb-3 p-3\">\r\n                            <img class=\"mt-3\" src=\"assets/images/daily_payout.png\">\r\n                            <p class=\"text-yellow mb-0 mt-3\">{{ 'home.daily_payout' | translate }}</p>\r\n                            <p class=\"text-white mb-0\">in BTC, ETH</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 text-center mb-3\">\r\n                        <div class=\"roundedbox text-center mb-3 p-3\">\r\n                            <img class=\"mt-3\" src=\"assets/images/pro_contracts.png\">\r\n                            <p class=\"text-yellow mb-0 mt-3\">“Pro” {{ 'home.contract' | translate }}</p>\r\n                            <p class=\"text-white mb-0\">{{ 'home.with_extra' | translate }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 text-center mb-3\">\r\n                        <div class=\"roundedbox text-center mb-3 p-3\">\r\n                            <img class=\"mt-3\" src=\"assets/images/income_booster.png\">\r\n                            <p class=\"text-yellow mb-0 mt-3\">{{ 'home.income_booster' | translate }}</p>\r\n                            <p class=\"text-white mb-0\">{{ 'home.auto_reinvest' | translate }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 text-center mb-3\">\r\n                        <div class=\"roundedbox text-center mb-3 p-3\">\r\n                            <img class=\"mt-3\" src=\"assets/images/live_support.png\">\r\n                            <p class=\"text-yellow mb-0 mt-3\">24/7 live Support</p>\r\n                            <p class=\"text-white mb-0\">{{ 'home.with_response' | translate }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 text-center mt-3\">\r\n                        <button class=\"btn btn-yellow\" (click)=\"navigateToId()\">{{ 'home.start_mining' | translate }}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n<section class=\"contracts sections main-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"section_heading text-center\">\r\n            <h1>{{'home.our_mining_contract' | translate}}</h1>\r\n            <p class=\"text-white\">{{'home.we_offer' | translate}}<br />\r\n                {{'home.start_crypto' | translate}}</p>\r\n        </div>\r\n        <app-mining-contract-table (miningCalculatorEmitter)=\"scrollToCalc($event)\"></app-mining-contract-table>\r\n    </div>\r\n</section>\r\n<section class=\" sections\" id=\"mining-calculator\">\r\n    <div class=\"container\">\r\n        <div class=\"section_heading text-center\">\r\n            <h1>{{'home.mining_calc' | translate}}</h1>\r\n        </div>\r\n        <div class=\"row mt-5\" (click)=\"calculatorTouched = true\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"calculator\">\r\n                    <!-- <form> -->\r\n                    <div class=\"row \">\r\n                            <div class=\"col\">\r\n                                <select (keydown.enter)=\"$event.preventDefault()\" class=\"form-control\" name=\"contract\" [(ngModel)]=\"contract\" (ngModelChange)=\"selectChanged($event)\">\r\n                                    <option *ngFor=\"let contract of contracts\" [ngValue]=\"contract\">{{contract}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <select (keydown.enter)=\"$event.preventDefault()\" class=\"form-control\" name=\"validity\" [(ngModel)]=\"validity\" (ngModelChange)=\"selectChanged($event)\">\r\n                                    <option *ngFor=\"let validity of validities\" [ngValue]=\"validity.year\">{{validity.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <!-- <input class=\"form-control text-center bg-yellow pointer\" (click)=\"calculate()\" value=\"=\" readonly> -->\r\n                                <button style=\"width: 90%;\" class=\"btn btn-warning text-center bg-yellow pointer\" type='submit' (click)=\"calculate()\">=</button>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <span>{{'home.power' | translate}}</span>\r\n                                <p><strong>{{miningCalculator.power}}</strong></p>\r\n                            </div>\r\n                            <div class=\"col-8 text-center mt-3\" style=\"display: flex;\">\r\n                                <!-- <h5 class=\"fw-bold \">$5000</h5> -->\r\n                                <input class=\"form-control fw-bold text-right\" type=\"text\" [(ngModel)]=\"amount\" name=\"amt\" /> \r\n                                <span class=\"fw-bold\" style=\"margin-top: 14px;\">$</span>\r\n                            </div>\r\n                        </div>\r\n                        <!-- </form> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col text-center mt-3 \">\r\n                        <div class=\"roundedbox bg-blue text-center  h-auto mb-3 p-3\">\r\n                            <p class=\"text-white mb-1\" style=\"text-transform: uppercase;\">{{'home.daily' | translate}} {{'home.income' | translate}}</p>\r\n                            <h5 class=\"text-yellow mb-0 fw-bold\">{{miningCalculator.daily\r\n                                }}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col text-center mt-3 \">\r\n                        <div class=\"roundedbox bg-blue text-center h-auto mb-3 p-3\">\r\n                            <p class=\"text-white mb-1\" style=\"text-transform: uppercase;\">{{'home.monthly' | translate}} {{'home.income' | translate}}</p>\r\n                            <h5 class=\"text-yellow mb-0  fw-bold\">{{miningCalculator.monthly}}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col text-center mt-3 \">\r\n                        <div class=\"roundedbox bg-blue text-center h-auto mb-3 p-3\">\r\n                            <p class=\"text-white mb-1\" style=\"text-transform: uppercase;\">{{'home.annual' | translate}} {{'home.income' | translate}}</p>\r\n                            <h5 class=\"text-yellow mb-0 fw-bold\">{{miningCalculator.yearly}}</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/mining_calculator.png\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"worldmap sections\">\r\n    <div class=\"container mb-5\">\r\n\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-md-12\">\r\n                <img src=\"assets/images/home.jpg\" style=\"width: 100%;\" />\r\n            </div>\r\n            <!-- <div class=\"col-md-7 text-center\">\r\n                <h1 class=\"fw-bold text-aqua-green income-count\">1,040,223+</h1>\r\n                <h5 class=\"fw-bold text-white\">People From All Around The World Have Been<br />Transaction on\r\n                    CryptoKit\r\n                </h5>\r\n\r\n                <div class=\"videosec\">\r\n                    <div class=\"palybtn\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\"\r\n                            class=\"bi bi-caret-left-fill\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z\" />\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col text-center\">\r\n                        <h2 class=\"text-aqua-green\">1,040K</h2>\r\n                        <p class=\"text-white\">Client</p>\r\n                    </div>\r\n                    <div class=\"col text-center\">\r\n                        <h2 class=\"text-aqua-green\">121+</h2>\r\n                        <p class=\"text-white\">Advisory</p>\r\n                    </div>\r\n                    <div class=\"col text-center\">\r\n                        <h2 class=\"text-aqua-green\">12M+</h2>\r\n                        <p class=\"text-white\">Value Transaction</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-5\">\r\n                <p class=\"smheading text-aqua-green mb-4\">ABOUT US</p>\r\n                <h1 class=\"fw-bold text-white\">What They Say</h1>\r\n                <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                    industry. Lorem Ipsum has been the industry's standard dummy\r\n                    text ever since the n unknown pri</p>\r\n\r\n                <div class=\"review_sec mb-5\">\r\n                    <div class=\"rating_box mb-4\">\r\n                        <span class=\"star_rate\"><img src=\"assets/images/star-fill.svg\"></span>\r\n                        <span class=\"star_rate\"><img src=\"assets/images/star-fill.svg\"></span>\r\n                        <span class=\"star_rate\"><img src=\"assets/images/star-fill.svg\"></span>\r\n                        <span class=\"star_rate\"><img src=\"assets/images/star-fill.svg\"></span>\r\n                        <span class=\"star_rate\"><img src=\"assets/images/star-fill.svg\"></span>\r\n                    </div>\r\n                    <p class=\"text-white\">\r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\r\n                        the industry's standard\r\n                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\r\n                        to make\r\n\r\n                    </p>\r\n\r\n                    <div class=\"userinfo d-flex align-items-center mt-4\">\r\n                        <div class=\"profile_pic\">\r\n                            <img src=\"https://shahjis.in/wp-content/uploads/2021/02/sun-spots.jpeg\">\r\n                        </div>\r\n                        <div class=\"flex-grow-1 ps-3\">\r\n                            <p class=\"text-white fw-bold mb-0\">Lorem ipsum</p>\r\n                            <small class=\"text-danger\">Manager</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- <section class=\" sections\">\r\n    <div class=\"container\">\r\n        <div class=\"section_heading-2 text-center\">\r\n            <h1>No Previous Experience in Trading</h1>\r\n            <h5 class=\"text-white fw-light\">Just start copynig the most successful traders!\r\n            </h5>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-md-6\">\r\n                <img src=\"assets/images/img_3.png\" class=\"mw-100\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <table class=\"w-100 align-top\">\r\n                    <tr>\r\n                        <td></td>\r\n                        <td class=\"text-primary\">\r\n                            <p class=\"mb-4\">HOW TO COPY TRADES?</p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"align-top\"><span class=\"steps bg-warning\">STEP 1</span></td>\r\n                        <td class=\"text-white\">\r\n                            <h5>Choose Trader to copy trades</h5>\r\n                            <p class=\"fw-light small mt-2 mb-4\">Select one or several traders from out most success\r\n                                trader.\r\n                            </p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"align-top\"><span class=\"steps bg-primary\">STEP 2</span></td>\r\n                        <td class=\"text-white\">\r\n                            <h5>Monitor your earnings</h5>\r\n                            <p class=\"fw-light small mt-2 mb-4\">You don't need to trade manually, just follow your\r\n                                balance\r\n                                growing!</p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"align-top\"><span class=\"steps bg-danger\">STEP 3</span></td>\r\n                        <td class=\"text-white\">\r\n                            <h5>Withdraw your profit</h5>\r\n                            <p class=\"fw-light small mt-2 mb-4\">Request your withdrawal and get paid paid on your\r\n                                cryptocurrency wallet anytime</p>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 mx-auto mt-3\">\r\n                <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img src=\"assets/images/img_4.png\" class=\"h-auto w-100\" alt=\"...\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img src=\"assets/images/img_4.png\" class=\"h-auto w-100\" alt=\"...\">\r\n                        </div>\r\n                        <div class=\"carousel-item \">\r\n                            <img src=\"assets/images/img_4.png\" class=\"h-auto w-100\" alt=\"...\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-indicators\">\r\n                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\"\r\n                            class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\r\n                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\"\r\n                            aria-label=\"Slide 2\"></button>\r\n                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\"\r\n                            aria-label=\"Slide 3\"></button>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<section class=\" sections\">\r\n    <div class=\"container\">\r\n        <div class=\"section_heading\">\r\n            <p class=\"smheading text-primary mb-4\" style=\"text-transform: uppercase;\">{{'home.update' | translate}}</p>\r\n            <h1 class=\"text-white\">{{'home.latest_news' | translate}}</h1>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n            <div class=\"widget-container\" style=\"overflow-x: auto;\">\r\n                <iframe style=\"    width: 140%;\r\n                height: 424px; overflow-x: auto\" src=\"https://widgetscdn.cryptomood.com/sentiment-news?size=large&direction=row\"></iframe>\r\n                </div>\r\n            <!-- <div class=\"col-md-4\">\r\n                <div class=\"blogHolder\">\r\n                    <img src=\"https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-552110,msid-83626351/cryptocurrency.jpg\"\r\n                        class=\"w-100\">\r\n\r\n                    <h5 class=\"text-white fw-bold mt-4\">5 Financial Problems Fintech Can Solve</h5>\r\n                    <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                        Lorem Ipsum has been\r\n                        the industry's standard\r\n                        dummy text ever since the n unknown pri\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"blogHolder\">\r\n                    <img src=\"https://www.bankrate.com/2020/08/19164919/What-is-cryptocurrency.jpeg\" class=\"w-100\">\r\n\r\n                    <h5 class=\"text-white fw-bold mt-4\">5 Financial Problems Fintech Can Solve</h5>\r\n                    <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                        Lorem Ipsum has been\r\n                        the industry's standard\r\n                        dummy text ever since the n unknown pri\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"blogHolder\">\r\n                    <img src=\"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Screenshot_2021-05-19_at_9.46._1200x768.png\"\r\n                        class=\"w-100\">\r\n\r\n                    <h5 class=\"text-white fw-bold mt-4\">5 Financial Problems Fintech Can Solve</h5>\r\n                    <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                        industry.\r\n                        Lorem Ipsum has been\r\n                        the industry's standard\r\n                        dummy text ever since the n unknown pri\r\n                    </p>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- <section class=\"getstart sections\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row my-5\">\r\n            <div class=\"col-md-7\">\r\n                <div class=\"section_heading\">\r\n                    <p class=\"smheading text-primary mb-4\">GET STARTED</p>\r\n                    <h1 class=\"text-white\">Easy way to start with cryptokit</h1>\r\n                </div>\r\n                <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                    Lorem\r\n                    Ipsum has been the\r\n                    industry's standard\r\n                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\r\n                    make</p>\r\n\r\n\r\n                <button class=\"btn btn-yellow my-5\">JOIN US</button>\r\n\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"videosec\">\r\n                    <div class=\"palybtn_\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\"\r\n                            class=\"bi bi-caret-left-fill\" viewBox=\"0 0 16 16\">\r\n                            <path\r\n                                d=\"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z\" />\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/mining-contract-table/mining-contract-table.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeMiningContractTableMiningContractTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-5\">\r\n    <div class=\"col-md-12\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\" role=\"presentation\">\r\n                <button class=\"nav-link active\" id=\"oneyear-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#oneyear\"\r\n                    type=\"button\" role=\"tab\" aria-controls=\"oneyear\" aria-selected=\"true\"\r\n                    (click)=\"contractYear='One';getContract(contractYear)\">1 Year\r\n                    <span class=\"d-lg-inline-block d-md-none d-sm-none d-none\">{{'home.contract' | translate}}</span></button>\r\n            </li>\r\n            <li class=\"nav-item\" role=\"presentation\">\r\n                <button class=\"nav-link\" id=\"twoyear-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#twoyear\" type=\"button\"\r\n                    role=\"tab\" aria-controls=\"twoyear\" aria-selected=\"false\"\r\n                    (click)=\"contractYear='Two';getContract(contractYear)\">2 Years\r\n                    <span class=\"d-lg-inline-block d-md-none d-sm-none d-none\">{{'home.contract' | translate}}</span></button>\r\n            </li>\r\n            <li class=\"nav-item\" role=\"presentation\">\r\n                <button class=\"nav-link\" id=\"fiveyear-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#fiveyear\" type=\"button\"\r\n                    role=\"tab\" aria-controls=\"fiveyear\" aria-selected=\"false\"\r\n                    (click)=\"contractYear='Five';getContract(contractYear)\">5 Years\r\n                    <span class=\"d-lg-inline-block d-md-none d-sm-none d-none\">{{'home.contract' | translate}}</span></button>\r\n            </li>\r\n            <li class=\"nav-item\" role=\"presentation\">\r\n                <button class=\"nav-link\" id=\"lifetimeyear-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#lifetime\"\r\n                    type=\"button\" role=\"tab\" aria-controls=\"lifetime\" aria-selected=\"false\"\r\n                    (click)=\"contractYear='Lifetime';getContract(contractYear)\">{{'home.lifetime' | translate}}</button>\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content box-tab-cont p-3\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"oneyear\" role=\"tabpanel\" aria-labelledby=\"oneyear-tab\">\r\n                <div class=\"tab-cont\" id=\"tab_1\">\r\n                    <div class=\"calc-table calc-table-1\">\r\n                        <div class=\"calc-column calc-column_1\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\"\r\n                            id=\"slick-slide60\" aria-describedby=\"slick-slide-control60\">\r\n                            <div class=\"calc-row calc-row_modmh70\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                            <div class=\"calc-row\" style=\"height: 220px;\">\r\n                                <!-- <div class=\"calc-td calc-td_title\"></div> -->\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.mining_strategy' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.min_hashrate' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.maintenance_fee' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.payouts' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.availability' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.contract_price' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let package of packages.oneYear; let i=index\" class=\"calc-column\" style=\"\" aria-hidden=\"true\"\r\n                            tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide61\" aria-describedby=\"slick-slide-control61\">\r\n                            <div class=\"calc-row calc-row_modmh70 border-right-left {{package.className}}\" >\r\n                                <div class=\"calc-td calc-td_head\">Package {{i+1}}</div>\r\n\r\n                                <div class=\"calc-td calc-td_head\">{{package.name}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                \r\n                                <div class=\"calc-td calc-td_hide p-0-10 input-div\">\r\n                                    <input class=\"form-control text-center input-field\" [name]=\"package.name + i\" placeholder=\"Enter amount\" [(ngModel)]=\"package.investmentAmount\" (ngModelChange)=\"showInvestmentReturns(package)\" />\r\n                                    \r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink input-go-btn\" (click)=\"buyNow(package); navigateToHash()\"\r\n                                            tabindex=\"-1\">GO</a>\r\n                                    \r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{'home.daily' | translate}}: {{package.returns.daily}}</div>\r\n                                    <div class=\"calc-td\">{{'home.monthly' | translate}}: {{package.returns.monthly}}</div>\r\n                                </div>\r\n                                <br>\r\n                                <i class=\"fas fa-chevron-down pointer\" *ngIf=\"!package.showHelpInfo\" (click)=\"package.showHelpInfo = true\"></i>\r\n                                \r\n                                <small style=\"padding: 6px; display: block;\" *ngIf=\"package.showHelpInfo\">{{'home.help_info' | translate}}</small>\r\n                                <i class=\"fas fa-chevron-up pointer\" *ngIf=\"package.showHelpInfo\" (click)=\"package.showHelpInfo = false\"></i>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.mining_strategy' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.miningStrategy}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.min_hashrate' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.hashRate || \"1\"}} {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modp calc-row_modlh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.maintenance_fee' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.maintenanceFee}}$ <br> {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}} / 24h</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.payouts' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.payoutDistribution}} in {{package.payoutCoin}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div id=\"buy-now\" class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.availability' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{ package.availability ? 'In Stock' : 'Out Of Stock' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.contract_price' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td calc-td_small calc-td_line\">from <span\r\n                                            class=\"line-through\">${{package.actualPrice}}</span>\r\n                                    </div>\r\n                                    <div class=\"calc-td calc-td_count\">$ {{package.discountedPrice}}</div>\r\n                                    <div class=\"calc-td calc-td_small\">per {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{package.potentialIncome}}%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td-inner calc-td-inner_full\">\r\n                                    <div class=\"calc-td calc-td_link\"><a href=\"javascript:void(0)\" class=\"auto-calclink\"\r\n                                            tabindex=\"-1\" (click)=\"scrollToCalc()\">{{'home.mining_calculator' | translate}}</a></div>\r\n                                    <div class=\"calc-td\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package)\"\r\n                                            tabindex=\"-1\">\r\n                                            {{'home.buy_now' | translate}}\r\n                                            \r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"twoyear\" role=\"tabpanel\" aria-labelledby=\"twoyear-tab\">\r\n                <div class=\"tab-cont hide\" id=\"tab_2\">\r\n                    <div class=\"calc-table calc-table-2\">\r\n                        <div class=\"calc-column calc-column_1\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\"\r\n                            id=\"slick-slide70\" aria-describedby=\"slick-slide-control70\">\r\n                            <div class=\"calc-row calc-row_modmh70\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                            <div class=\"calc-row\" style=\"height: 220px;\">\r\n                                <!-- <div class=\"calc-td calc-td_title\"></div> -->\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.mining_strategy' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.min_hashrate' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.maintenance_fee' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.payouts' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.availability' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.contract_price' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let package of packages.twoYear; let i=index\" class=\"calc-column\" style=\"\" aria-hidden=\"true\"\r\n                            tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide61\" aria-describedby=\"slick-slide-control61\">\r\n                            <div class=\"calc-row calc-row_modmh70 border-right-left {{package.className}}\" >\r\n                                <div class=\"calc-td calc-td_head\">Package {{i+1}}</div>\r\n\r\n                                <div class=\"calc-td calc-td_head\">{{package.name}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                \r\n                                <div class=\"calc-td calc-td_hide p-0-10\" style=\"display: flex; margin-bottom: 10px;\">\r\n                                    <input class=\"form-control text-center\" [name]=\"package.name + i\" placeholder=\"Enter amount\" [(ngModel)]=\"package.investmentAmount\" (ngModelChange)=\"showInvestmentReturns(package)\" style=\"width: 79%; border: 1px solid #ccc;\" />\r\n                                    \r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package); navigateToHash()\" style=\"    margin-bottom: 9px;\r\n                                        margin-left: 29px; margin-top: 9px; padding: 2px 14px\"\r\n                                            tabindex=\"-1\">GO</a>\r\n                                    \r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{'home.daily' | translate}}: {{package.returns.daily}}</div>\r\n                                    <div class=\"calc-td\">{{'home.monthly' | translate}}: {{package.returns.monthly}}</div>\r\n                                </div>\r\n                                <br>\r\n                                <i class=\"fas fa-chevron-down pointer\" *ngIf=\"!package.showHelpInfo\" (click)=\"package.showHelpInfo = true\"></i>\r\n                                \r\n                                <small style=\"padding: 6px; display: block;\" *ngIf=\"package.showHelpInfo\">{{'home.help_info' | translate}}</small>\r\n                                <i class=\"fas fa-chevron-up pointer\" *ngIf=\"package.showHelpInfo\" (click)=\"package.showHelpInfo = false\"></i>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.mining_strategy' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.miningStrategy}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.min_hashrate' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.hashRate || \"1\"}} {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modp calc-row_modlh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.maintenance_fee' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.maintenanceFee}}$ <br> {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}} / 24h</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.payouts' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.payoutDistribution}} in {{package.payoutCoin}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.availability' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{ package.availability ? 'In Stock' : 'Out Of Stock' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.contract_price' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td calc-td_small calc-td_line\">from <span\r\n                                            class=\"line-through\">${{package.actualPrice}}</span>\r\n                                    </div>\r\n                                    <div class=\"calc-td calc-td_count\">$ {{package.discountedPrice}}</div>\r\n                                    <div class=\"calc-td calc-td_small\">per {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{package.potentialIncome}}%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td-inner calc-td-inner_full\">\r\n                                    <div class=\"calc-td calc-td_link\"><a href=\"javascript:void(0)\" class=\"auto-calclink\"\r\n                                            tabindex=\"-1\"(click)=\"scrollToCalc()\">{{'home.mining_calculator' | translate}}</a></div>\r\n                                    <div class=\"calc-td\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package)\"\r\n                                            tabindex=\"-1\">{{'home.buy_now' | translate}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"fiveyear\" role=\"tabpanel\" aria-labelledby=\"fiveyear-tab\">\r\n                <div class=\"tab-cont hide\" id=\"tab_3\">\r\n                    <div class=\"calc-table calc-table-3\">\r\n                        <div class=\"calc-column calc-column_1\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\"\r\n                            id=\"slick-slide80\" aria-describedby=\"slick-slide-control80\">\r\n                            <div class=\"calc-row calc-row_modmh70\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                            <div class=\"calc-row\" style=\"height: 220px;\">\r\n                                <!-- <div class=\"calc-td calc-td_title\"></div> -->\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.mining_strategy' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.min_hashrate' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.maintenance_fee' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.payouts' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.availability' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.contract_price' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let package of packages.fiveYear; let i=index\" class=\"calc-column\" style=\"\" aria-hidden=\"true\"\r\n                            tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide61\" aria-describedby=\"slick-slide-control61\">\r\n                            <div class=\"calc-row calc-row_modmh70 border-right-left {{package.className}}\" >\r\n                                <div class=\"calc-td calc-td_head\">Package {{i+1}}</div>\r\n                                <div class=\"calc-td calc-td_head\">{{package.name}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                \r\n                                <div class=\"calc-td calc-td_hide p-0-10\" style=\"display: flex; margin-bottom: 10px;\">\r\n                                    <input class=\"form-control text-center\" [name]=\"package.name + i\" placeholder=\"Enter amount\" [(ngModel)]=\"package.investmentAmount\" (ngModelChange)=\"showInvestmentReturns(package)\" style=\"width: 79%; border: 1px solid #ccc;\" />\r\n                                    \r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package); navigateToHash()\" style=\"    margin-bottom: 9px;\r\n                                        margin-left: 29px; margin-top: 9px; padding: 2px 14px\"\r\n                                            tabindex=\"-1\">GO</a>\r\n                                    \r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{'home.daily' | translate}}: {{package.returns.daily}}</div>\r\n                                    <div class=\"calc-td\">{{'home.monthly' | translate}}: {{package.returns.monthly}}</div>\r\n                                </div>\r\n                                <br>\r\n                                <i class=\"fas fa-chevron-down pointer\" *ngIf=\"!package.showHelpInfo\" (click)=\"package.showHelpInfo = true\"></i>\r\n                                \r\n                                <small style=\"padding: 6px; display: block;\" *ngIf=\"package.showHelpInfo\">{{'home.help_info' | translate}}</small>\r\n                                <i class=\"fas fa-chevron-up pointer\" *ngIf=\"package.showHelpInfo\" (click)=\"package.showHelpInfo = false\"></i>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.mining_strategy' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.miningStrategy}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.min_hashrate' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.hashRate || \"1\"}} {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modp calc-row_modlh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.maintenance_fee' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.maintenanceFee}}$ <br> {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}} / 24h</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.payouts' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.payoutDistribution}} in {{package.payoutCoin}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.availability' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{ package.availability ? 'In Stock' : 'Out Of Stock' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.contract_price' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td calc-td_small calc-td_line\">from <span\r\n                                            class=\"line-through\">${{package.actualPrice}}</span>\r\n                                    </div>\r\n                                    <div class=\"calc-td calc-td_count\">$ {{package.discountedPrice}}</div>\r\n                                    <div class=\"calc-td calc-td_small\">per {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{package.potentialIncome}}%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td-inner calc-td-inner_full\">\r\n                                    <div class=\"calc-td calc-td_link\"><a href=\"javascript:void(0)\" class=\"auto-calclink\"\r\n                                            tabindex=\"-1\" (click)=\"scrollToCalc()\">{{'home.mining_calculator' | translate}}</a></div>\r\n                                    <div class=\"calc-td\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package)\"\r\n                                            tabindex=\"-1\">\r\n                                            {{'home.buy_now' | translate}}\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"lifetime\" role=\"tabpanel\" aria-labelledby=\"lifetime-tab\">\r\n                <div class=\"tab-cont hide\" id=\"tab_4\">\r\n                    <div class=\"calc-table calc-table-4\">\r\n                        <div class=\"calc-column calc-column_1\" style=\"\" aria-hidden=\"true\" tabindex=\"0\" role=\"tabpanel\"\r\n                            id=\"slick-slide90\" aria-describedby=\"slick-slide-control90\">\r\n                            <div class=\"calc-row calc-row_modmh70\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.mining_strategy' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.min_hashrate' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.maintenance_fee' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.payouts' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.availability' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.contract_price' | translate}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_title\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td calc-td_title\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let package of packages.lifetimeYear; let i=index\" class=\"calc-column\" style=\"\"\r\n                            aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide61\"\r\n                            aria-describedby=\"slick-slide-control61\">\r\n                            <div class=\"calc-row calc-row_modmh70 border-right-left {{package.className}}\" >\r\n                                <div class=\"calc-td calc-td_head\">Package {{i+1}}</div>\r\n\r\n                                <div class=\"calc-td calc-td_head\">{{package.name}}</div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.mining_strategy' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.miningStrategy}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.min_hashrate' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.hashRate || \"1\"}} {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modp calc-row_modlh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.maintenance_fee' | translate}}</div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.maintenanceFee}}$ <br> {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}} / 24h</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.payouts' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">{{package.payoutDistribution}} in {{package.payoutCoin}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.availability' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{ package.availability ? 'In Stock' : 'Out Of Stock' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh120\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.contract_price' | translate}}</div>\r\n\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td calc-td_small calc-td_line\">from <span\r\n                                            class=\"line-through\">${{package.actualPrice}}</span>\r\n                                    </div>\r\n                                    <div class=\"calc-td calc-td_count\">$ {{package.discountedPrice}}</div>\r\n                                    <div class=\"calc-td calc-td_small\">per {{package.hashRate || \"1\"}}\r\n                                        {{package.hashRateUnit}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh\">\r\n                                <div class=\"calc-td calc-td_hide\">{{'home.potential_income' | translate}}\r\n                                </div>\r\n                                <div class=\"calc-td-inner\">\r\n                                    <div class=\"calc-td\">\r\n                                        {{package.potentialIncome}}%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"calc-row calc-row_modmh140\">\r\n                                <div class=\"calc-td-inner calc-td-inner_full\">\r\n                                    <div class=\"calc-td calc-td_link\"><a href=\"javascript:void(0)\" class=\"auto-calclink\"\r\n                                            tabindex=\"-1\" (click)=\"scrollToCalc()\">{{'home.mining_calculator' | translate}}</a></div>\r\n                                    <div class=\"calc-td\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn auto-buylink\" (click)=\"buyNow(package)\"\r\n                                            tabindex=\"-1\">\r\n                                            {{'home.buy_now' | translate}}\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"hashdiv\" *ngIf=\"buyNowDiv\" class=\"bg-white mt-3 p-10 border-radius-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 form-group\">\r\n                    <label class=\"d-block\">Enter hash rate you want to buy for this package: </label>\r\n                    <input aria-describedby=\"emailHelp\" style=\"width: 40%\" type=\"number\" placeholder=\"Enter hash rate\" name=\"unit\"\r\n                        [(ngModel)]=\"buyContract.units\" class=\"form-control border-normal mt-2 d-inline-block\" />\r\n                        <button class=\"btn btn-primary pointer ml-20\"  (click)=\"submit()\">\r\n                            <!-- <i class=\"fa fa-arrow-circle-up\"></i> -->\r\n                            Buy\r\n                        </button>\r\n                    <small *ngIf=\"buyContract.units\" id=\"emailHelp\" class=\"form-text text-muted d-block\">Net Amount: {{fees()}}</small>\r\n                    <!-- <span>Aditional fees: (hashRate /10)  discountPrice + (hasRate /10)  fee</span> -->\r\n                </div>\r\n            </div>\r\n            \r\n    \r\n        </div>\r\n\r\n        <div class=\"coin-div row\" *ngIf=\"transactionSuccess && network != 'test'\">\r\n            <div style=\"display: inline;\" class=\"p-10 text-center coin pointer col-md-2 col-sm-12 col-lg-2\" (click)=\"showChild(coin)\" *ngFor=\"let coin of coins\">\r\n                <img src=\"assets/images/ltct.png\" *ngIf=\"coin.key == 'ltct'\" width=\"120\" height=\"70\" alt=\"ltct\" />\r\n                <img src=\"assets/images/visa_PNG34.png\" *ngIf=\"coin.key == 'visa'\" width=\"120\" height=\"70\" alt=\"visa\" />\r\n                <img src=\"assets/images/2560px-Bitcoin_logo.svg.png\" class=\"mt-8\" *ngIf=\"coin.key == 'bitcoin'\" width=\"120\" height=\"50\" alt=\"bitcoin\" />\r\n                <img src=\"assets/images/altcoin.png\" class=\"mt-11\" *ngIf=\"coin.key == 'altcoins'\" width=\"120\" height=\"50\" alt=\"altcoin\" /> \r\n\r\n                <div class=\"child-coin-div pointer coin-child\" [ngClass]=\"{'row' : windowSize <= 900}\" *ngIf=\"coin.key == 'altcoins' && coin.show\" >\r\n                   \r\n                    <div class=\"child-coin-img\"  (click)=\"showChild({name: 'ethereum'})\"> \r\n                        <img src=\"assets/images/Ethereum-Logo.png\" width=\"120\" height=\"70\" alt=\"visa\" />\r\n                    </div>\r\n                    <div class=\"child-coin-img\"  (click)=\"showChild({name: 'litecoin'})\"> \r\n                        <img class=\"mt-8\" src=\"assets/images/6_Full_Logo_S-2.png\" width=\"120\" height=\"50\" alt=\"bitcoin\" />\r\n                    </div>\r\n                    <div class=\"child-coin-img\"  (click)=\"showChild({name: 'dash'})\">\r\n                        <img class=\"mt-8\" src=\"assets/images/Dash_logo_2018_rgb_for_screens.png\" width=\"120\" height=\"50\" alt=\"altcoin\" /> \r\n                    </div>\r\n                    <div class=\"child-coin-img\"  (click)=\"showChild({name: 'zcash'})\">\r\n                        <img class=\"mt-8\" src=\"assets/images/zcash-logo-horizontal-fullcolor.png\" width=\"120\" height=\"50\" alt=\"stablecoins\" /> \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-15\">\r\n                    <img src=\"assets/images/ethereum-eth-logo.png\" *ngIf=\"coin.key == 'stablecoins'\" width=\"40\" height=\"40\" alt=\"stablecoins\" /> <span *ngIf=\"coin.key == 'stablecoins'\">\r\n                        {{coin.name}}\r\n                    </span>\r\n                </div>\r\n                <div style=\"display: flex; left: 62%; margin-top: 40px\" class=\"child-coin-div pointer img-position-static\" *ngIf=\"coin.key == 'stablecoins' && coin.show\" >\r\n                   \r\n                    <div class=\"child-coin-img\"  (click)=\"showChild(child)\" *ngFor=\"let child of coin.coins\"> \r\n                       {{child.name}}\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"arrow-down\"></div> -->\r\n        </div>\r\n        <div class=\"bg-white mt-3 payment-div\" *ngIf=\"showPaymentDiv && network != 'test'\">\r\n            <div class=\"row\">\r\n                <div class=\"payment-header\">\r\n                    <p class=\"payment-p\">\r\n                        {{'home.you_about_to_pay' | translate}} {{transactionData?.amount}} USD\r\n                    \r\n                    </p>\r\n                </div>\r\n                <div>\r\n                    <small>{{'home.note' | translate}}</small>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <qrcode *ngIf=\"transactionData?.address\" [qrdata]=\"transactionData?.address\" [width]=\"200\" [errorCorrectionLevel]=\"'M'\" [elementType]=\"'svg'\"></qrcode>\r\n                    \r\n                    \r\n                </div>\r\n                <div class=\"col-md-7 mt-3\">\r\n                    <ol>\r\n                        <li>\r\n                            {{'home.copy_your_address' | translate}}: <button  ngxClipboard (cbOnSuccess)=\"copied($event)\" [cbContent]=\"transactionData?.address\" class=\"btn copy-add pointer\" ><i class=\"fas fa-copy\"></i> {{'home.copy_address' | translate}}</button>\r\n                            <div class=\"c-green\">{{transactionData?.address}} </div>\r\n                        </li>\r\n                        <li *ngIf=\"selectedCoin == 'visa'\">\r\n                            <p>Open in new window: </p>\r\n                            <a href=\"https://payments.changelly.com\" class=\"mr-5\">https://payments.changelly.com</a>\r\n                            <button ngxClipboard [cbContent]=\"'https://payments.changelly.com'\" class=\"btn btn-primary\">{{'home.copy' | translate}}</button>\r\n                            <p>{{'home.and_enter' | translate}} {{transactionData?.amount}} USD {{'home.and_bitcoin_address_mentioned_above' | translate}}</p>\r\n                        </li>\r\n                        <li>\r\n                            Complete the payment by filling up the form.\r\n                        </li>\r\n                    </ol>\r\n                    status:   <span class=\"mr-5\" style=\"color: #ff9900\">waiting</span><i class=\"fas fa-circle-notch\"> {{time}}</i>\r\n                    <!-- <div class=\"loader\">l</div> -->\r\n                    <p class=\"mt-10\">{{'home.after_payment_confirmation' | translate}}.</p>\r\n                    <button class=\"btn btn-primary\" (click)=\"approve()\">Continue</button>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/footer/footer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsIncludesFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <div class=\"container pb-4\">\r\n        <hr class=\"mb-5 text-white\" />\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"mb-5\">\r\n                    <h5>{{ 'footer.how_to_start' | translate }}</h5>\r\n                    <a href=\"\" class=\"footer-link\">{{ 'footer.open_an_account' | translate }}</a>\r\n                </div>\r\n                <div class=\"\">\r\n                    <h5>{{ 'footer.social' | translate }}</h5>\r\n                    <div class=\"social_sec\">\r\n                        <a href=\"facebook.com\"><i class=\"fab fa-facebook-f\"></i></a>\r\n                        <a href=\"twitter.com\"><i class=\"fab fa-twitter\"></i></a>\r\n                        <a href=\"youtube.com\"><i class=\"fab fa-youtube\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <h5>{{ 'footer.how_to_start' | translate }}</h5>\r\n                <ul class=\"footerlist\">\r\n                    <li><a routerLink=\"home/terms-and-conditions\">{{ 'footer.terms_and_conditions' | translate }}</a></li>\r\n                    <li><a routerLink=\"home/privacy\">{{ 'footer.privacy_policy' | translate }}</a></li>\r\n                    <!-- <li><a href=\"\">Trading terms</a></li> -->\r\n                    <!-- <li><a href=\"\">Risk statement</a></li> -->\r\n                    <li><a href=\"\">{{ 'footer.referral_program' | translate }}</a></li>\r\n                    <!-- <li><a href=\"\">Referral FAQ</a></li> -->\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <h5>Support</h5>\r\n                <a href=\"\" class=\"footer-link\">{{ 'footer.open_an_account' | translate }}</a>\r\n\r\n                <ul class=\"footerlist mt-4\">\r\n                    <li><a href=\"\">Cloud Mining 2020</a></li>\r\n                    <li><a href=\"\">{{ 'footer.crypto_mining_basic' | translate }}</a></li>\r\n                    <li><a href=\"\">{{ 'footer.crypto_comparison' | translate }}</a></li>\r\n                    <li><a href=\"\">{{ 'footer.crypto_wiki' | translate }}</a></li>\r\n                    <li><a href=\"\">{{ 'footer.crypto_algo' | translate }}</a></li>\r\n                    <li><a href=\"\">{{ 'footer.crypto_cloud_mining' | translate }}</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <h5>{{ 'footer.knowledge_base' | translate }}</h5>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <ul class=\"footerlist\">\r\n                            <li><a href=\"\">Cloud Mining</a></li>\r\n                            <li><a href=\"\">Bitcoin Mining</a></li>\r\n                            <li><a href=\"\">Bitcoin Cash Mining</a></li>\r\n                            <li><a href=\"\">Litecoin Mining</a></li>\r\n                            <li><a href=\"\">Ethereum Mining</a></li>\r\n                            <li><a href=\"\">Ripple Mining</a></li>\r\n                            <li><a href=\"\">Monero Mining</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <ul class=\"footerlist\">\r\n                            <li><a href=\"\">Cloud Mining</a></li>\r\n                            <li><a href=\"\">Bitcoin Mining</a></li>\r\n                            <li><a href=\"\">Bitcoin Cash Mining</a></li>\r\n                            <li><a href=\"\">Litecoin Mining</a></li>\r\n                            <li><a href=\"\">Ethereum Mining</a></li>\r\n                            <li><a href=\"\">Ripple Mining</a></li>\r\n                            <li><a href=\"\">Monero Mining</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 footer-link mt-4 small\">\r\n                <b>Cloud mining</b> {{ 'home.footerCloudMining' | translate }}\r\n            </div>\r\n            <hr class=\"mt-4 text-white\" />\r\n        </div>\r\n    </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/header/header.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsIncludesHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"topheader \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-8\">\r\n                <!-- <label class=\"mb-0 py-md-2 py-1 text-white\">\r\n                    <i class=\"fas fa-map-marker-alt\"></i> Lorem ipsume {{'header.is' | translate}} {{'header.simply' | translate}}\r\n                </label>&nbsp;&nbsp;&nbsp;\r\n                <label class=\"mb-0 py-md-2 py-1 text-white\">\r\n                    <i class=\"fas fa-phone-alt\"></i> +919565968985\r\n                </label> -->\r\n            </div>\r\n            <div class=\"col d-flex\">\r\n                <div class=\"lang dropdown ms-auto py-1\">\r\n                    <a class=\"nav-link nav-btn-fill dropdown-toggle text-white py-1 px-3\" href=\"#\" id=\"navbarDropdown\"\r\n                        role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        {{language}}\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <li><a class=\"dropdown-item\" (click)=\"useLanguage('en', 'Eng')\" href=\"javascript:void(0)\">English</a></li>\r\n                        <li><a class=\"dropdown-item\" (click)=\"useLanguage('de', 'Ger')\" href=\"javascript:void(0)\">German</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"lang dropdown ms-auto py-1\" style=\"margin-left: 20px !important\" *ngIf=\"!isAdmin\">\r\n                    <a class=\"nav-link nav-btn-fill dropdown-toggle text-white py-1 px-3\" href=\"#\" id=\"navbarDropdown\"\r\n                        role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        {{network}}\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <li><a class=\"dropdown-item\" (click)=\"useNetwork('main')\" href=\"javascript:void(0)\">main</a></li>\r\n                        <li><a class=\"dropdown-item\" (click)=\"useNetwork('test')\" href=\"javascript:void(0)\">test</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light py-3\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n            <img src=\"assets/images/logo.png\" height=\"50\">\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav ms-auto mb-2 mb-lg-0\" *ngIf=\"!isAdmin; else admin\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\" routerLink=\"/home\">{{ 'header.home' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"token\">\r\n                    <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\"\r\n                        routerLink=\"/dashboard\">{{ 'header.dashboard' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"token\">\r\n                    <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\"\r\n                        routerLink=\"/dashboard/withdraw\"[translate]=\"'header.withdraw'\"></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/dashboard/referral\" routerLinkActive=\"active\"\r\n                        class=\"nav-link text-white px-md-3 px-0\" [translate]=\"'header.referral'\"></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white px-md-3 px-0\" routerLink=\"/home/about\" [translate]=\"'header.about_us'\"></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white px-md-3 px-0\" routerLink=\"/home/contact\" [translate]=\"'header.contact'\"></a>\r\n                </li>\r\n                <!-- <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle text-white px-md-3 px-0\" href=\"#\" id=\"navbarDropdown\"\r\n                        role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        SPECIALS\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <li><a class=\"dropdown-item\" href=\"#\">Giveaway</a></li>\r\n                        <li><a class=\"dropdown-item\" href=\"#\">Dimond Club</a></li>\r\n                    </ul>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white px-md-3 px-0\" routerLink=\"/profile/account\" [translate]=\"'header.account'\"></a>\r\n                </li>\r\n                <li class=\"nav-item\"  *ngIf=\"!token\">\r\n                    <a class=\"nav-link\" routerLink=\"/auth/register\"><span class=\"nav-btn-outline\" [translate]=\"'header.sign_up'\"></span></a>\r\n                </li>\r\n                <li class=\"nav-item\"  *ngIf=\"token\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\"><span class=\"nav-btn-outline\" [translate]=\"'header.logout'\"></span></a>\r\n                </li>\r\n                <li class=\"nav-item\"  *ngIf=\"!token\">\r\n                    <a class=\"nav-link \" routerLink=\"/auth/login\"><span class=\"nav-btn-fill\" [translate]=\"'header.sign_in'\"></span></a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ng-template #admin>\r\n                <ul class=\"navbar-nav ms-auto mb-2 mb-lg-0\">\r\n                    <li class=\"nav-item\" *ngIf=\"token\">\r\n                        <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\" routerLink=\"/admin/users\">{{ 'header.users' | translate }}</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"token\">\r\n                        <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\"\r\n                            routerLink=\"/admin/withdraw\">{{ 'header.withdraw' | translate }}</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"token\">\r\n                        <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\"\r\n                            routerLink=\"/admin/purchase\"[translate]=\"'header.purchase'\"></a>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"token\">\r\n                        <a class=\"nav-link active text-white px-md-3 px-0\" aria-current=\"page\"\r\n                            routerLink=\"/admin/contact\"[translate]=\"'header.contact'\"></a>\r\n                    </li>\r\n                    <li class=\"nav-item\"  *ngIf=\"!token\">\r\n                        <a class=\"nav-link\" routerLink=\"/auth/register\"><span class=\"nav-btn-outline\" [translate]=\"'header.sign_up'\"></span></a>\r\n                    </li>\r\n                    <li class=\"nav-item\"  *ngIf=\"token\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\"><span class=\"nav-btn-outline\" [translate]=\"'header.logout'\"></span></a>\r\n                    </li>\r\n                    <li class=\"nav-item\"  *ngIf=\"!token\">\r\n                        <a class=\"nav-link \" routerLink=\"/auth/login\"><span class=\"nav-btn-fill\" [translate]=\"'header.sign_in'\"></span></a>\r\n                    </li>\r\n                </ul>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- my-loader.component.html -->\r\n<!-- <div class=\"progress-loader\" [hidden]=\"!loading\">\r\n  <div class=\"loading-spinner\">\r\n      <img src=\"https://loading.io/mod/spinner/gear-set/index.svg\">\r\n      <span class=\"loading-message\">Please wait...</span>\r\n  </div>\r\n</div> -->\r\n\r\n<ngx-ui-loader pbColor=\"#808080\" fgsColor=\"#808080\"></ngx-ui-loader>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>main works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy/privacy.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrivacyPrivacyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"fw-bold text-yellow \">{{'register.risk_policy' | translate}}</h1>\r\n        <!-- <P class=\"text-white mt-4\">Liquid Mining was founded at the end of 2016 by the\r\n                  team of experts in blockchain programming and IT\r\n                  engineers. The current members of our altcoins mining\r\n                  team come from different scientific disciplines, but our\r\n                  common faith in cryptocurrencies has brought us together.</P>\r\n              <button class=\"btn btn-yellow mt-3\">\r\n                  START CLOUD MINING NOW\r\n              </button> -->\r\n      </div>\r\n      <!-- <div class=\"col-md-6\">\r\n\r\n              <img src=\"assets/images/about_img.png\" class=\"mw-100\">\r\n          </div> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"sections pt-50\" style=\"color: white\" >\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" *ngIf=\"currentLang == 'en'; else de\">\r\n        <h2 style=\"margin-bottom: 10px;\"> LIQUID MINING PRIVACY POLICY </h2>\r\n        <p>LIQUID MINING does its utmost to ensure the privacy, confidentiality and security of its clients are\r\n          preserved both throughout their interaction with the company and afterwards, to the fullest extent achievable\r\n          by the company.</p>\r\n        <ul>\r\n          <li>\r\n            <div>\r\n              <p>\r\n    \r\n                When clients register with LIQUID MINING they acknowledge their willingness to share with the company\r\n                certain private information which we use for the purpose of confirming the client’s identity and ensuring\r\n                the security of their purchases and account. This information is collected in line with our stringent\r\n                verification procedures which are used to deter international money laundering operations and to ensure the\r\n                security and safety of our customer’s activity throughout.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <p>\r\n    \r\n                Our clients undertake to supply us with true, updated and accurate information about their identity.\r\n                Furthermore they are required to state categorically that they are registering and acting on their own\r\n                behalf and are not seeking at any time to act any manner which could be considered fraudulent nor are they\r\n                seeking to impersonate any other individuals for any purposes whatsoever.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <p>\r\n                LIQUID MINING’s data collection procedures include the collection of client’s freely disclosed information\r\n                as shared with the company, in addition to the placement of cookies for the purposes of gathering data about\r\n                the manner in which client’s interact with the LIQUID MINING website. These tools for gathering client’s\r\n                information are employed for the purpose of ensuring the customer’s own security and all data collected by\r\n                the company is shared only with individuals within the company who are involved with the verification of\r\n                customer account information for the express purpose of ensuring the customer’s confidentiality and\r\n                security.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li><div>\r\n            <p>\r\n  \r\n  \r\n              LIQUID MINING will never disclose any private or otherwise confidential information in regards to our\r\n              clients and former clients to third parties without the express, written consent of our clients, except in\r\n              such specific cases in which disclosure is a requirement under law, or is otherwise necessary in order to\r\n              perform verification analysis on the client’s identity for the purposes of safeguarding their account and\r\n              securing their personal information.\r\n            </p>\r\n          </div></li>\r\n          <li>\r\n            <div>\r\n              <p>\r\n                By registering with LIQUID MINING and through the voluntary interaction they undertake with LIQUID MINING’s\r\n                products and services the clients confirm and agree that they consent to the use of all or part of the\r\n                information they provide concerning their LIQUID MINING client's account, the transactions they undertake\r\n                through it and the interactions which they perform with the company on behalf of the company. All\r\n                interactions the customer undertakes with the company will be stored by the company for the purposes of\r\n                record and as such may be employed by the company in such cases that disputes arise between clients and\r\n                company.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <p>\r\n                LIQUID MINING does its utmost to ensure the confidentiality of its clients personal information including\r\n                the implementation of data protection procedures designed to ensure client confidentiality. LIQUID MINING\r\n                ensures that its data protection policy is regularly updated in order to ensure that client’s confidential\r\n                information is continually safeguarded.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <p>\r\n                From time to time LIQUID MINING may contact clients whether by phone or email for the purpose of offering\r\n                them further information about LIQUID MINING cloud mining service. In addition the company may, on occasion,\r\n                seek to contact clients, whether by phone or by email, for the purpose of informing them of unique\r\n                promotional offerings provided by LIQUID MINING for the client. Clients consent to the receipt of such\r\n                contact when they consent to our terms and conditions of use when registering with LIQUID MINING. Any person\r\n                wishing to opt out of further contact with LIQUID MINING at anytime whatsoever is entitled to do so, simply\r\n                by contacting the company whether by phone or email and requesting that no further contact on behalf of the\r\n                company will be made.\r\n              </p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n      </div>\r\n      <ng-template #de>\r\n        <div class=\"col-md-12\" >\r\n          <h2 style=\"margin-bottom: 10px;\"> LIQUID MINING DATENSCHUTZPOLITIK </h2>\r\n          <p>LIQUID MINING tut sein Möglichstes, um die Privatsphäre, die Vertraulichkeit und die Sicherheit seiner Kunden sowohl während ihrer Interaktion mit dem Unternehmen als auch danach zu gewährleisten, und zwar in dem Maße, wie es dem Unternehmen möglich ist.</p>\r\n          <ul>\r\n            <li>\r\n              <div>\r\n                <p>\r\n      \r\n                  Wenn Kunden sich bei LIQUID MINING anmelden, erklären sie sich bereit, dem Unternehmen bestimmte private Informationen mitzuteilen, die wir zur Bestätigung der Identität des Kunden und zur Gewährleistung der Sicherheit seiner Einkäufe und seines Kontos verwenden. Diese Informationen werden in Übereinstimmung mit unseren strengen Überprüfungsverfahren gesammelt, die dazu dienen, internationale Geldwäscheoperationen zu verhindern und die Sicherheit der Aktivitäten unserer Kunden durchgehend zu gewährleisten.\r\n                </p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div>\r\n                <p>\r\n      \r\n                  Unsere Kunden verpflichten sich, uns wahrheitsgemäße, aktuelle und genaue Angaben zu ihrer Identität zu machen. Darüber hinaus müssen sie kategorisch erklären, dass sie sich registrieren lassen und in ihrem eigenen Namen handeln und zu keiner Zeit versuchen, in einer Weise zu handeln, die als betrügerisch angesehen werden könnte, noch versuchen sie, sich für irgendwelche Zwecke als eine andere Person auszugeben.\r\n                </p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div>\r\n                <p>\r\n                  Die Datenerfassungsverfahren von LIQUID MINING umfassen die Erfassung der von den Kunden freiwillig zur Verfügung gestellten Informationen, die dem Unternehmen mitgeteilt wurden, sowie die Platzierung von Cookies zur Erfassung von Daten über die Art und Weise, wie die Kunden mit der LIQUID MINING-Website interagieren. Diese Instrumente zur Erfassung von Kundeninformationen werden eingesetzt, um die Sicherheit des Kunden zu gewährleisten, und alle vom Unternehmen erfassten Daten werden nur an Personen innerhalb des Unternehmens weitergegeben, die mit der Überprüfung von Kundenkontoinformationen befasst sind, um die Vertraulichkeit und Sicherheit des Kunden zu gewährleisten.\r\n                </p>\r\n              </div>\r\n            </li>\r\n            <li><div>\r\n              <p>\r\n    \r\n    \r\n                LIQUID MINING wird niemals private oder anderweitig vertrauliche Informationen in Bezug auf unsere Kunden und ehemaligen Kunden ohne die ausdrückliche, schriftliche Zustimmung unserer Kunden an Dritte weitergeben, es sei denn, die Weitergabe ist gesetzlich vorgeschrieben oder anderweitig erforderlich, um die Identität des Kunden zu überprüfen, um sein Konto zu schützen und seine persönlichen Daten zu sichern.\r\n              </p>\r\n            </div></li>\r\n            <li>\r\n              <div>\r\n                <p>\r\n                  Durch die Registrierung bei LIQUID MINING und durch die freiwillige Interaktion mit den Produkten und Dienstleistungen von LIQUID MINING bestätigen die Kunden und stimmen zu, dass sie mit der Verwendung aller oder eines Teils der Informationen, die sie in Bezug auf ihr LIQUID MINING-Kundenkonto, die Transaktionen, die sie über dieses Konto tätigen, und die Interaktionen, die sie mit dem Unternehmen im Namen des Unternehmens durchführen, einverstanden sind. Alle Interaktionen, die der Kunde mit dem Unternehmen durchführt, werden von dem Unternehmen zum Zwecke der Aufzeichnung gespeichert und können von dem Unternehmen in solchen Fällen verwendet werden, in denen Streitigkeiten zwischen Kunden und Unternehmen entstehen.\r\n                </p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div>\r\n                <p>\r\n                  LIQUID MINING tut sein Möglichstes, um die Vertraulichkeit der persönlichen Daten seiner Kunden zu gewährleisten, einschließlich der Einführung von Datenschutzverfahren, die die Vertraulichkeit der Kunden sicherstellen. LIQUID MINING stellt sicher, dass seine Datenschutzpolitik regelmäßig aktualisiert wird, um zu gewährleisten, dass die vertraulichen Informationen seiner Kunden kontinuierlich geschützt werden.\r\n                </p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div>\r\n                <p>\r\n                  Von Zeit zu Zeit kann LIQUID MINING Kunden per Telefon oder E-Mail kontaktieren, um ihnen weitere Informationen über den LIQUID MINING Cloud Mining Service anzubieten. Darüber hinaus kann das Unternehmen gelegentlich versuchen, Kunden telefonisch oder per E-Mail zu kontaktieren, um sie über einzigartige Werbeangebote von LIQUID MINING für den Kunden zu informieren. Die Kunden stimmen dem Erhalt einer solchen Kontaktaufnahme zu, wenn sie bei der Registrierung bei LIQUID MINING unseren Nutzungsbedingungen zugestimmt haben. Jede Person, die den weiteren Kontakt mit LIQUID MINING jederzeit ablehnen möchte, kann dies tun, indem sie sich einfach telefonisch oder per E-Mail an das Unternehmen wendet und darum bittet, dass kein weiterer Kontakt im Namen des Unternehmens erfolgt.\r\n\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          \r\n          \r\n          \r\n          \r\n          \r\n          \r\n          \r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/referral/referral.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsReferralReferralComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50 pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bold text-yellow \">{{ 'withdrawal.myReferalProg' | translate }}</h1>\r\n                <P class=\"text-white mt-4\">{{ 'withdrawal.referal' | translate }}</P>\r\n            </div>\r\n            <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/images/referral_img.png\" height=\"300\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <hr class=\"text-white mt-4\" />\r\n            <div class=\"col-md-6 mt-5 mx-auto\">\r\n                <h5 class=\"text-center mb-3 text-white\" *ngIf=\"urlToCopy\">\r\n                    {{'withdrawal.click_here' | translate}}\r\n                </h5>\r\n                <div class=\"card mb-5\" *ngIf=\"urlToCopy\">\r\n                    <div class=\"card-body text-center \">\r\n                        <a href=\"#\" class=\"text-white\">{{referralLink}}</a>\r\n                        <img src=\"assets/images/clipboard.svg\" ngxClipboard (cbOnSuccess)=\"copied($event)\" [cbContent]=\"referralLink\" \r\n                            class=\"clipboardicon curosr-pointer\" height=\"25\">\r\n                        <!-- <i class=\"fas fa-angle-double-up\" (click)=\"redirect()\"></i> -->\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <h5 class=\"text-center my-3 text-white\">\r\n                    Invite someone\r\n                </h5>\r\n                <div class=\"d-flex\">\r\n                    <input type=\"email\" placeholder=\"Enter Email Address\" class=\"form-control flex-grow-1\">\r\n                    <button class=\"btn btn-success ms-3\">Invite</button>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/terms/terms.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsTermsTermsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"fw-bold text-yellow \">{{'register.Terms_and_conditions' | translate}}</h1>\r\n        <!-- <P class=\"text-white mt-4\">Liquid Mining was founded at the end of 2016 by the\r\n                  team of experts in blockchain programming and IT\r\n                  engineers. The current members of our altcoins mining\r\n                  team come from different scientific disciplines, but our\r\n                  common faith in cryptocurrencies has brought us together.</P>\r\n              <button class=\"btn btn-yellow mt-3\">\r\n                  START CLOUD MINING NOW\r\n              </button> -->\r\n      </div>\r\n      <!-- <div class=\"col-md-6\">\r\n\r\n              <img src=\"assets/images/about_img.png\" class=\"mw-100\">\r\n          </div> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"sections pt-50\" style=\"color: white\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" *ngIf=\"currentLang == 'en'; else de\">\r\n        <h2 style=\"margin-bottom: 10px;\"> LIQUID MINING TERMS OF SERVICE\r\n        </h2>\r\n        <h3>\r\n          INTRODUCTION\r\n        </h3>\r\n        <p>THESE TERMS OF SERVICE APPLY TO THE USE OF THE LIQUID MINING.COM CLOUD MINING SERVICE AND LIQUID MINING\r\n          WEBSITE LOCATED AT LIQUID MINING.COM AND ITS SUBDOMAINS. THE WEBSITE AND THE SERVICE ARE THE PROPERTY OF LM\r\n          LIMITED.</p>\r\n        <p>\r\n          THEY SET OUT HOW THE LIQUID MINING.COM CLOUD HOSTED CRYPTOCURRENCY MINING SERVICE WORKS AND DESCRIBE ANY\r\n          ASSOCIATED RIGHTS AND RESPONSIBILITIES. THE LIQUID MINING.COM TERMS OF SERVICE AND ANY INSTRUCTIONS, GUIDANCE\r\n          AND SIMILAR INFORMATION FOUND ON THE WEBSITE (FROM TIME TO TIME) ALSO APPLY TO HOW YOU USE THE LIQUID\r\n          MINING.COM CLOUD MINING SERVICE (TOGETHER THE \"AGREEMENT\"). BY USING THE WEBSITE AND/OR THE SERVICE, YOU AGREE\r\n          TO THESE TERMS OF SERVICE; IF YOU DO NOT AGREE, DO NOT USE THE SITE AND/OR THE SERVICE.\r\n        </p>\r\n        <p>\r\n          LIQUID MINING RESERVES THE RIGHT, AT ITS SOLE DISCRETION, TO AMEND, CHANGE, MODIFY, ADD OR REMOVE PORTIONS OF\r\n          THESE TERMS OF SERVICE, AT ANY TIME. IT IS YOUR RESPONSIBILITY TO CHECK THESE TERMS PERIODICALLY FOR CHANGES.\r\n          YOUR CONTINUED USE OF THE WEBSITE AND/OR THE SERVICE FOLLOWING THE PUBLISHED UPDATES TO THE TERMS WILL MEAN\r\n          THAT YOU ACCEPT AND AGREE TO THE CHANGES. AS LONG AS YOU AGREE AND COMPLY WITH THESE TERMS, LIQUID MINING\r\n          GRANTS YOU A PERSONAL, NON- EXCLUSIVE, NON-TRANSFERABLE, LIMITED PRIVILEGE TO ENTER AND USE THE WEBSITE AND\r\n          THE SERVICE.\r\n          CLOUD MINING INVOLVES FINANCIAL RISKS AND MAY NOT BE APPROPRIATE FOR ALL PEOPLE. THE INFORMATION PRESENTED\r\n          HERE IS FOR INFORMATION AND EDUCATIONAL PURPOSES ONLY AND SHOULD NOT BE CONSIDERED AN OFFER OR SOLICITATION TO\r\n          INVEST TO LIQUID MINING OR ELSEWHERE. ANY INVESTMENT DECISIONS THAT YOU MAKE ARE SOLELY YOUR RESPONSIBILITY.\r\n          IQ MINING DOES NOT PROVIDE SERVICE FOR USA RESIDENTS.\r\n        </p>\r\n        <div>\r\n          <h2>\r\n            1. ABOUT THE SERVICE, THE WEBSITE AND THESE TERMS OF SERVICE\r\n          </h2>\r\n          <p>\r\n            1.1. This is an agreement (referred to as \"Terms\") between LM Limited also referred to in these Terms as\r\n            \"LIQUID MINING\", \"LM\", \"we\", \"us\" or \"our\") and you (also referred to in these Terms as \"Customer\", \"you\",\r\n            \"your\"), the person accessing and using the LIQUID MINING.com cloud mining service and accepting these\r\n            Terms. \r\n            <br>\r\n            1.2. In these Terms: \r\n            <br>\r\n            1.2.1. a reference to \"Cryptocurrency\", \"Cryptocurrencies\" is a reference to the distributed, decentralized\r\n            peer-to- peer digital currencies: \r\n            <br>\r\n            1.2.1.1. \"Bitcoins\" is a reference to a Cryptocurrency known as Bitcoin; \r\n            <br>\r\n            1.2.1.2. \"Altcoins\" is a reference to all Cryptocurrencies other than Bitcoin, such as Litecoin;\r\n            <br>\r\n            1.2.2. \"Miners\" are individuals who register to mine Bitcoins and/or Altcoins with a Cloud Machine. If you\r\n            successfully apply to administer a Cloud Machine, you will be a Miner; <br>\r\n            1.2.3. a \"Mining Pool\" is an organized association of Cryptocurrencies miners. The members of these\r\n            associations work together to mine Cryptocurrencies and those Cryptocurrencies are distributed amongst the\r\n            membership based on the contribution made to the mining by each member; <br>\r\n            1.2.4. the \"Mining Hardware\" is the computer hardware, not owned but used as a source of mining efficiency\r\n            and costs calculation by IQ mining; \r\n            <br>1.2.5. \"Hashrate\" or \"Hash rate\" is the mining power of the Mining Hardware used to mine\r\n            Cryptocurrencies.\r\n            Hashrate is mining algorithm specific (SHA-256, Scrypt, X11 etc); \r\n            <br>1.2.6. \"Cloud Machine\" is the virtual mining power of the Service purchased by a Miner and administered\r\n            by a\r\n            Miner using the Website. “Cloud Machine” is a derivative of a real mining machine;\r\n            <br>1.2.7. \"Service\" is LIQUID MINING contract, which enables individuals to virtually mine Cryptocurrencies\r\n            for\r\n            themselves. LIQUID MINING contract performance is deriving from Mining Hardware efficiency and costs. LIQUID\r\n            MINING “Service” in no way should be considered as a purchase of real mining equipment; \r\n            <br>1.2.8. the \"Support\" or \"Customer Support\" or \"Helpdesk\" is the technical support service of LIQUID\r\n            MINING\r\n            that is provided via email/ticket system, available in the LIQUID MINING knowledge base/FAQ at\r\n            http://support.LIQUID MINING.com where Customers can find answers to general questions and request\r\n            assistance by submitting a request; \r\n            <br>1.2.9. the \"Panel\" is the graphical user interface of the Service, with which the Miner interacts to\r\n            perform\r\n            all actions related to the Service; \r\n            <br>1.2.10. the \"Website\" is LIQUID MINING.com and any apps, software, emails or other websites which we use\r\n            to\r\n            provide the services of LIQUID MINING.com (which includes the Service); \r\n            <br>1.2.11. a \"Payout\" is the periodic deposit to your Balance, dependent on your Cloud Machine. LIQUID\r\n            MINING\r\n            may change the periodicity of Payouts at any time, to a maximum of once per 24 hours; \r\n            <br>1.2.12. \"Fees\" are maintenance and electricity fees, charged daily from the Balance; \r\n            <br>1.2.13. \"Account\" is your personal access to the Service, described further in section 6; \r\n            <br>1.2.14. \"Balance\" is your personal Account balance; \r\n            <br>1.2.15. a \"Contract\" is the access to a Cloud Machine of specific Hash rate; \r\n            <br>1.2.16. a \"Contract Term\" is the period of time for which a Miner has agreed to pay to administer a\r\n            Cloud\r\n            Machine, by default, IQ provides lifetime Contracts that do not have an expiry date, unless stated\r\n            otherwise; \r\n            <br>1.2.17. \"Hold\" is the state an Account can be placed in that prevents the said Account to make any\r\n            withdrawals, used as a security measure; \r\n            <br>1.2.18. a \"Pre-order\" is a Contract with a start date in the future. Start date is estimated and is\r\n            subject\r\n            to change; \r\n            <br>1.2.19. the \"Referral Program\" or \"Partner Program\" is the functionality that allows a Customer to\r\n            receive\r\n            financial rewards for Contracts purchased by other Customers; \r\n            <br>1.2.20. a \"Referral Code\" is an alphanumerical sequence (at least 6 characters long) that is linked to a\r\n            Customer's Account; \r\n            <br>1.2.21. a \"Referral Link\" is the URL with a Referral Code, that allows a new Customer to register with\r\n            LIQUID MINING; \r\n            <br>1.2.22. a \"Referral\" is a Customer who registered by using another Customer's Referral Link; \r\n            <br>1.2.23. a \"Referrer\" is a Customer who had another Customer register using their Referral Link; \r\n            <br>1.2.24. a \"Referral Purchase\" or \"Referred Purchase\" is a purchase made by a Referral; \r\n            <br>1.2.25. a \"Referral Bonus\" is the reward a Referrer receives for a Referral Purchase; \r\n            <br>1.2.26. an \"Affiliate Network\" is a third-party website that allows any person (with or without a LIQUID\r\n            MINING Account) to receive financial rewards for LIQUID MINING Contracts purchased by referred Customers. \r\n            <br>1.3. These Terms apply to any mining you undertake by using the Service and Website and they form a\r\n            legal\r\n            agreement between you and IQ on the acceptance of you application for an Account (as set out below). \r\n            <br>1.4. If there is ever a conflict between these terms of service and the IQ terms of use or the\r\n            instructions,\r\n            guidance and similar information found on the Website, these terms of service will take priority. \r\n            <br>1.5. IT IS NOT POSSIBLE FOR US TO STATE DEFINITIVELY HOW MANY BITCOINS, LITECOINS AND/OR ANY OTHER\r\n            CRYPTOCURRENCY UNITS WILL BE MINED BY ANY MINER AND/OR SPECIFIC CLOUD MACHINE. \r\n            <br>1.6. By applying to register as a Miner you are confirming that you understand and accept (and are able\r\n            to\r\n            understand and accept) these terms of service and that you agree that you will be bound by them. You should\r\n            regularly check the Website for changes to the terms of service, instructions, guidance and similar\r\n            information found on the Website. \r\n            <br>1.7. You may only apply to register as a Miner if: \r\n            <br>1.7.1. you are 18 years old or over; and \r\n            <br>1.7.2. it is lawful for you to do so. \r\n            <br>1.8. To register as a Miner, we may require you to provide us with identification or other documentation\r\n            in\r\n            order to help us prevent fraud or money laundering. This may include photographic identification and a\r\n            recent proof of address. We may also undertake our own identity, fraud and credit checks. \r\n            <br>1.9. It is forbidden for Miners to visit the Website or use the Service through anonymous proxies (such\r\n            as\r\n            Tor) and other services or technologies that hide the real internet connection of the user.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            2. RISK NOTICE\r\n          </h2>\r\n          <p>\r\n            2.1. Actions with Cryptocurrencies carry inherent risks. Due to the fact that Cryptocurrencies are\r\n            unregulated and decentralized, their value is not insured by any legal entities. The value of any Contract,\r\n            any amount of any Cryptocurrency is subject to change by LIQUID MINING due to a number of factors out of\r\n            LIQUID MINING’ control. These factors include but are not limited to changes of mining difficulty and/or\r\n            other mining parameters/properties, fluctuating price (in fiat currency to Cryptocurrency exchange rate,\r\n            such as USD/BTC) of Cryptocurrencies. You understand and agree that the worth of any Contact and any amount\r\n            of mined Cryptocurrency may lose all worth at any moment of time due to the nature of Cryptocurrencies. You\r\n            understand that you are solely responsible for management of the Cryptocurrencies in your balance as well as\r\n            any losses or charges incurred by any third-party entity. \r\n            <br>2.2. Any information related to Cryptocurrency and Cryptocurrency mining that is/was posted, published\r\n            and/or provided by LIQUID MINING via any channel of communication (including but not limited to: on the\r\n            Website, in the Panel, via the Support Service, via Email newsletter, in social media) is subject to change.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            3. CRYPTOCURRENCIES\r\n          </h2>\r\n          <p>\r\n            3.1. You must not mine, buy, sell, exchange, hold, own or otherwise use or exploit Cryptocurrencies in any\r\n            way which is prohibited by the laws or regulations which apply to you. \r\n            <br>3.2. Cryptocurrencies may not be appropriate for everyone. Before mining any Cryptocurrencies you should\r\n            learn about them to ensure that they are appropriate for you. Like all currencies, there are disadvantages\r\n            to using Cryptocurrencies. Some of the risks particular to Cryptocurrencies include: \r\n            <br>3.2.1. currency fluctuation - the price of Bitcoin and/or any other Cryptocurrency may fall sharply and\r\n            may\r\n            even fall to zero; \r\n            <br>3.2.2. transactions with Cryptocurrencies may be unconfirmed for a period of time. Although very\r\n            unlikely,\r\n            some Cryptocurrency transactions may never be confirmed - Cryptocurrency transactions which are unconfirmed\r\n            are not completed; \r\n            <br>3.2.3. transactions with Cryptocurrencies are irreversible - if you send any amount of any\r\n            Cryptocurrency to\r\n            the wrong person, you may be unable to recover those funds; \r\n            <br>3.2.4. Cryptocurrencies may be lost if you lose or forget any PINs or passwords necessary to access and\r\n            spend those Cryptocurrencies; \r\n            <br>3.2.5. unknown technical defects inherent in Cryptocurrencies; and \r\n            <br>3.2.6. new regulation which impacts the use of Cryptocurrencies. \r\n            <br>3.3. By agreeing to these terms of service or by mining Cryptocurrencies by using the Service, you are\r\n            indicating that you understand, are capable of understanding and accept the risks associated with\r\n            Cryptocurrencies.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            4. REGISTRATION\r\n          </h2>\r\n          <p>\r\n            4.1. By applying to register, you are making an offer to enter an agreement on these terms of service. Once\r\n            submitted, you may not withdraw your offer. \r\n            <br>4.2. Only we can decide whether applications will be accepted. If your application is accepted, a legal\r\n            and\r\n            enforceable agreement will be entered between you and us. Subject to any statutory rights you may have, you\r\n            may not cancel the agreement covered by these terms of service and you will not be eligible for any refund.\r\n          </p>\r\n        </div>\r\n\r\n        <div>\r\n          <h2>\r\n            5. CONTRACT TERM AND MINING TERM\r\n          </h2>\r\n          <p>\r\n            5.1. These Terms of Service are valid indefinitely, even after Account termination. \r\n            <br>5.2. The Contract Term for LIQUID MINING.com Cloud Machines is unlimited by default, unless stated\r\n            otherwise. The Contract is valid while profitable, until expired or until terminated (refer to section 13),\r\n            whichever comes first. \r\n            <br>5.3. Contracts with a stated expiry date will end on the date of expiry and the Cloud Machine is\r\n            stopped. \r\n            <br>5.4. Pre-order Contracts that are not activated immediately on purchase will activate on the stated\r\n            date. \r\n            <br>5.5. The Mining process continues until said mining is profitable. This means the Mining process will\r\n            stop\r\n            if the Maintenance and Electricity Fees will become larger than the Payout. If mining remains unprofitable\r\n            for 21 consecutive days the Service is permanently terminated (Hashrate type specific). During the\r\n            consecutive 21 day period, Payouts and Fees will also be temporarily stopped. If during the suspension\r\n            period, the Contract- related mining factors (such as the exchange rate and mining difficulty) that are\r\n            outside of LIQUID MINING’s control will change favorably, making mining profitable again, the Service will\r\n            be unsuspended and contracts reactivated. Initial cost is not refunded after contract ends.\r\n            <br>5.6. LIQUID MINING reserves the right to change the launch date, Contract Term and/or Mining Term of any\r\n            Contract.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            6. ACCOUNT\r\n          </h2>\r\n          <p>\r\n            6.1. To register you will need to submit some personal information, a valid email address (that will be used\r\n            as Username and for user identification) for your Website account (\"Account\"), a password (\"Password\"). To\r\n            be able to withdraw funds you will need to enter at least one wallet for the Cryptocurrency you are mining.\r\n            The Account may allow you to add more than one Cryptocurrency wallet. \r\n            <br>6.2. You must ensure that all information about you that is held by us is true, complete, not misleading\r\n            and\r\n            up to date. \r\n            <br>6.3. The Username and Password will be allocated to you if you successfully apply for registration as a\r\n            Miner. \r\n            <br>6.4. You will need your Username and Password to access some parts of the Website. Your Username and\r\n            Password are personal to you and must not be disclosed to any other person. \r\n            <br>6.5. The number of accounts is limited to 1 for each beneficiary. \r\n            <br>6.6. When you register, you may submit an order to administer a Cloud Machine. This order will allow you\r\n            to\r\n            specify the processing power of the Cloud Machine. Only LIQUID MINING can decide whether orders will be\r\n            successful and acceptance is subject to availability, amongst other things. \r\n            <br>6.7. Your order is a request to acquire a Contract from us and does not represent a formed contract. If\r\n            we\r\n            accept your order, we will associate your Contract with your Account. Until then, an order is considered\r\n            pending and LIQUID MINING reserves the right to decline your payment. \r\n            <br>6.8. Subject to the payment of any fees which may be applied, Miners will be able to receive\r\n            Cryptocurrencies on the basis of the processing power of the Cloud Machine and the period of time for which\r\n            the Cloud Machine is mining. Miners will only be able to administer the Cloud Machine during the Contract\r\n            Term. Those Cryptocurrencies will be transferred to your wallet upon your request, if such request is\r\n            confirmed. \r\n            <br>6.9. If you lose access to your Account, LIQUID MINING may ask you to provide certain types of data,\r\n            including personally identifiable information, to determine ownership of the Account. This may include, but\r\n            is not limited to: proof of identity; proof of residence; proof of telephone number/email ownership and any\r\n            identifiable activity on the Website, such as transaction IDs, order numbers, withdrawal amounts and others.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            7. USE OF YOUR ACCOUNT\r\n          </h2>\r\n          <p>\r\n            7.1. You may only mine Cryptocurrencies for your own benefit. By using the Website and/or the Service you\r\n            confirm that you are not acting for the benefit of any other person or entity. \r\n            <br>7.2. We are entitled to assume that any use of your Account is made by you. You are solely responsible\r\n            and\r\n            liable for any use of the Website or the Service under your Account or any other use of your Username and\r\n            Password. \r\n            <br>7.3. You may only hold one Account. If you forget your Username or Password, you can use the password\r\n            recovery option or contact Support. \r\n            <br>7.4. DO NOT SHARE YOUR PASSWORD WITH ANY OTHER PERSON OR ALLOW ANY OTHER PERSON TO USE YOUR ACCOUNT. WE\r\n            ARE\r\n            NOT LIABLE FOR ANY IMPROPER USE OF YOUR PASSWORD OR ACCOUNT BY YOU OR ANY OTHER PERSON. IF YOU HAVE REASONS\r\n            TO ASSUME THAT ANY OTHER PERSON KNOWS YOUR PASSWORD, OR THAT YOUR ACCOUNT HAS BEEN USED BY ANY OTHER PERSON,\r\n            YOU MUST INFORM US IMMEDIATELY. \r\n            <br>7.5. If you do not log into your Account for 12 months, we may terminate the Account. You will be, if\r\n            possible, notified in advance. If we are unable to contact you, or you do not take any action to prevent\r\n            account termination, your Balance will be nullified.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            8. RESTRICTIONS AND OBLIGATIONS\r\n          </h2>\r\n          <p>\r\n            8.1. You agree to comply with all applicable laws and regulations, these terms of service and all rules\r\n            applicable to the use of the Website and the Service. \r\n            <br>8.2. You agree not to falsely describe or otherwise misrepresent yourself in any dealings with IQ. \r\n            <br>8.3. You are not allowed to abuse any campaigns, discounts, referral bonuses and/or referral systems,\r\n            provided from time to time by IQ and/or its partners. \r\n            <br>8.4. You are not allowed to use any means to mask your internet traffic and IP address (such as Proxy,\r\n            Tor,\r\n            VPN and others). \r\n            <br>8.5. Multi-Level Marketing (MLM) and/or High-Yield Investment Projects (HYIP) systems are forbidden from\r\n            providing any services to their users or partners based on LIQUID MINING and/or LIQUID MINING, including but\r\n            not limited to LIQUID MINING and/or LIQUID MINING Products and/or Services.  \r\n            <br>8.6. You are strictly forbidden to use or exploit errors in design of the Website, the Service and/or\r\n            all\r\n            and any of their parts, features which have not been documented, and/or \"program bugs\" for\r\n            commercial/personal gain or as means to disrupt and/or destabilize the Service and/or the Website. If you\r\n            encounter such an error by accident, you are required to report your findings to support@LIQUID MINING.com.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            9. ADMINISTRATION OF MINING \r\n          </h2>\r\n          <p>\r\n            9.1. During the Contract Term you can use the Website to: \r\n            <br>9.1.1. amend or update your registration and contact details; \r\n            <br>9.1.2. with the help of customer support deactivate or reactivate your Account as well as terminate an\r\n            active Contract; \r\n            <br>9.1.3. with the help of customer support change the login email address; \r\n            <br>9.1.4. change some parameters of the mining of your Cloud Machine; and \r\n            <br>9.1.5. change your cryptocurrency-specific wallet addresses. \r\n            <br>9.2. Subject to payment and additional Fees in advance, you can use the Website to: \r\n            <br>9.2.1. add a new Cloud Machine; and \r\n            <br>9.2.2. increase the processing power of your Cloud Machine.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            10. BALANCE\r\n          </h2>\r\n          <p>\r\n            10.1. Your Balance in the Panel is your personal amount of funds available to use. \r\n            <br>10.2. The Service may have multiple Balances. Currently available balances are: \r\n            <br>10.2.1. BTC Balance is measured in BTC (Bitcoins), accurate to \r\n            0.00000001 BTC (1 satoshi, the minimum indivisible amount of BTC); \r\n            <br>10.2.2. ETH Balance is measured in ETH (Ethereum), accurate to \r\n            0.00000001 ETH (10 GWei). \r\n            <br>10.3. Other Cryptocurrency Balances may be introduced and/or removed at any time. \r\n            <br>10.4. Funds mined will be transmitted directly to your Balance. This may take up to 24 hours from the\r\n            date\r\n            the coins are generated. \r\n            <br>10.5. Balance can be used in the following ways: \r\n            <br>10.5.1. You are able to withdraw your balance at any time if it meets the minimum requirement, unless\r\n            stated\r\n            otherwise (subject to change). \r\n            <br>10.5.2. You are able to purchase additional Contract(s) for the Cloud Machine(s) to increase your total\r\n            Hashrate. \r\n            <br>10.6. LIQUID MINING reserves the right to make retroactive recalculations to Balance(s), Cloud Machines,\r\n            Hash rate and logs, including but not limited to, in the case of any error occurring in the Service, to\r\n            correct any mistakes or discrepancies. \r\n            <br>10.7. Balance may be negative. In such case, the Balance must become positive above the minimum\r\n            requirement\r\n            before any withdrawals and/or purchases can be made using it.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            11. FEES\r\n          </h2>\r\n          <p>\r\n            11.1. We provide a platform which enables individuals to mine cryptocurrencies using cloud Machine. In\r\n            return, we charge periodic maintenance and electricity fees (\"Fees\") that are deriving from the usage of\r\n            electricity as well as the cost of maintenance of the Mining equipment. The maintenance costs of running the\r\n            equipment include but are not limited to: hardware setup, data center rent, Mining Pool testing, staff\r\n            salaries, future planning and proofing, software development, exchange of used and out of order parts and\r\n            other expenditures required to render the service on a best-effort basis. Some Contract types are not\r\n            subject to periodic Fees. The presence and specification of Fees for each Contract type can always be seen\r\n            on the Website. \r\n            <br>11.3. The Fees are deducted from your Balance once a day immediately after a Payout for all active Cloud\r\n            Machines (if more than 1 are active). \r\n            <br>11.4. LIQUID MINING reserves the right to change the fees at any time without prior notice. \r\n            <br>11.5. Fees are non-refundable.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            12. LIABILITY\r\n          </h2>\r\n          <p>\r\n            12.1. We provide and maintain the Website and the Service on an \"AS IS\" and \"AS AVAILABLE\" basis and we are\r\n            liable only to provide our services with reasonable skill and care. \r\n            <br>12.2. We give no other warranty in connection with the Website or the Service and we disclaim all\r\n            liability\r\n            for: \r\n            <br>12.2.1. to the extent allowed by these Terms and without affecting any other clauses within Section 12,\r\n            that\r\n            may apply, accuracy, currency or validity of information and material contained within and/or provided by\r\n            the Website, the Panel, the Support Service, in email newsletters and social media. You hereby agree, that\r\n            no radio, computer and internet communication equipment is completely free of fault, occasional technical\r\n            disruptions may affect the service and so can human error, which may result in misrepresentation of content\r\n            or miscommunication; \r\n            <br>12.2.2. any change in the exchange rate of Bitcoins or any other Cryptocurrency; \r\n            <br>12.2.3. any change in the difficulty of mining; \r\n            <br>12.2.4. any changes in applicable law or regulation, or the acts of any legislator or regulator in any\r\n            part\r\n            of the world; \r\n            <br>12.2.5. any interruptions to or error of the Website or the Service or other communications network; \r\n            <br>12.2.6. the infringement by any other person of any copyright or other intellectual property rights of\r\n            any\r\n            third party through any User Content or use of the Website or the Service; \r\n            <br>12.2.7. the availability, quality, content or nature of External Sites; \r\n            <br>12.2.8. any amount or kind of loss or damage due to viruses or other malicious software that may infect\r\n            a\r\n            user's computer equipment, software, data or other property caused by any other person accessing, using or\r\n            downloading the Website, the Service or any User Content; and \r\n            <br>12.2.9. all representations, warranties, conditions and other terms and conditions which, but for this\r\n            notice, would have effect. \r\n            <br>12.3. We will not be liable in any amount for failure to perform any obligation under these terms of\r\n            service\r\n            if that failure is caused by the occurrence of an event beyond our reasonable control. \r\n            <br>12.4. Except as provided above there are no other warranties, conditions or other terms and conditions,\r\n            express or implied, statutory or otherwise, and all of those terms and conditions are hereby excluded to the\r\n            maximum extent permitted by law. \r\n            <br>12.5. To the maximum extent permitted by law, we exclude liability for any losses or damages which you\r\n            may\r\n            suffer, whether the same are suffered directly or indirectly or are immediate or consequential, which fall\r\n            within any of the following categories: \r\n            <br>12.5.1. special damage even though that party was aware of the circumstances in which such special\r\n            damage\r\n            could arise; \r\n            <br>12.5.2. loss of anticipated savings; \r\n            <br>12.5.3. loss of business opportunity and management time; \r\n            <br>12.5.4. loss of goodwill; \r\n            <br>12.5.5. loss of Cryptocurrency arising as a result of any of your acts or omissions of those of any\r\n            third\r\n            party; \r\n            <br>12.5.5.1. loss arising out of or in connection with: \r\n            <br>12.5.5.2. any defect or insecurity in any systems you use to store or transmit Cryptocurrency or to\r\n            access\r\n            or use the Website or the Service ; \r\n            <br>12.5.5.3. any inaccurate or incomplete information you provide, including Cryptocurrency wallet\r\n            addresses; \r\n            <br>12.5.5.4. any changes to the amount of Cryptocurrency awarded to Miners; \r\n            <br>12.5.5.5. any changes to the regulatory, legislative or technical environment applicable to\r\n            Cryptocurrencies; \r\n            <br>12.5.5.6. the acts or omissions of any bank or provider of banking services; or \r\n            <br>12.5.5.7. any change in the value of Cryptocurrency howsoever arising (including as a result of the acts\r\n            or\r\n            omissions of IQ). \r\n            <br>12.6. To the maximum extent permitted by law, our aggregate liability in respect of any claims made in\r\n            connection with or arising out of the use of the Website or the Service (whether in contract, tort\r\n            (including negligence), breach of statutory duty, or otherwise) for direct losses will be limited to the\r\n            Fees. \r\n            <br>12.7. You agree not to use the Website or the Service in any way which: \r\n            <br>12.7.1. is unlawful; \r\n            <br>12.7.2. may give rise to civil or criminal liability for IQ; or \r\n            <br>12.7.3. may bring IQ into disrepute. \r\n            <br>12.8. You hereby agree to indemnify, defend and hold us and our officers, directors, owners, agents,\r\n            information providers, affiliates, licensors and licensees (collectively, the \"Indemnified Parties\")\r\n            harmless from and against any and all liability and costs (including reasonable legal fees) incurred by the\r\n            Indemnified Parties in connection with any claim arising out of: \r\n            <br>12.8.1. any fraud or fraudulent misrepresentation you commit; \r\n            <br>12.8.2. any inaccuracy or defect of any of the information you have provided to us; \r\n            <br>12.8.3. any breach of applicable law or regulation you commit; \r\n            <br>12.8.4. any other person’s use of your Account; \r\n            <br>12.8.5. any breach by you of these terms of service; and \r\n            <br>12.8.6. third party claims arising from your use of the Website or the Service, any of Your Content or\r\n            any\r\n            use of your Account (whether or not such use was by you). \r\n            <br>12.9. You shall cooperate with us in the defense of any claim. We reserve the right, at our own expense,\r\n            to\r\n            assume the exclusive defense and control of any matter otherwise subject to indemnification by you.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            13. BREACH, SUSPENSION AND TERMINATION\r\n          </h2>\r\n          <p>\r\n            13.1. Without limiting any other rights we have, we may suspend or terminate access to your Account, the\r\n            Website and/or the Service, nullify your Account Balance and/or hold the ability to withdraw mined funds if\r\n            you breach any of these Terms of Service. \r\n            <br>13.2. If we have grounds to suspect that you are using the Website or the Service fraudulently or\r\n            improperly, we will suspend your Account until you are able to demonstrate to our satisfaction: \r\n            <br>13.2.1. your identity; and \r\n            <br>13.2.2. that no fraud or impropriety has occurred or been attempted. \r\n            <br>13.3. We will try to give you reasonable notice of any anticipated termination of the Website or the\r\n            Service. \r\n            <br>13.4. If you become aware of or suspect another user or Miner's breach of these terms of service, or any\r\n            fraud or impropriety by another user, you must contact us immediately. \r\n            <br>13.5. In case of any Credit Card purchase (refer to section 14.5.4.) LIQUID MINING has the right to\r\n            place\r\n            the Customer's Account on Hold (hold the ability to withdraw any mined funds from the Customer's Account\r\n            Balance) for a period of up to 30 days as a security measure of anti-fraud related regulations and policies.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            14. PAYMENT TERMS, ORDER CANCELLATION, ORDER CHANGES AND ORDER REFUNDS\r\n          </h2>\r\n          <p>\r\n            14.1. All invoices are issued in USD (United States dollar) by default. Payments performed in any other\r\n            currency must account for the exchange rate of said currency to USD at the moment of invoice generation and\r\n            any commissions for currency exchange. \r\n            <br>14.2. A Customer is able to purchase a Contract using a variety of payment methods\r\n            <br>14.3. A Customer has the right not to pay for the order in case the order has been created but not yet\r\n            paid,\r\n            if the Customer decides not to complete the order. The order will be expired after a given period of time\r\n            (dependent on the payment method) and the Customer will not be obliged to proceed with the order. LIQUID\r\n            MINING will not process requests to cancel unpaid orders, as it is intended the unpaid orders will be\r\n            expired.\r\n            <br>14.4. A Customer is solely responsible for the accuracy of payment, including but not limited to: the\r\n            destination account, transferable amount and payment details: \r\n            <br>14.4.1. If the transferred amount is below requested, IQ reserves the right, at its sole discretion, to\r\n            adjust the Contract accordingly to received funds or request the missing amount to be paid, before\r\n            activating the Contract. \r\n            <br>14.4.2. If the transferred amount is above requested, IQ reserves the right, at its sole discretion, to\r\n            adjust the Contract accordingly to received funds, add the excessive amount to Customer's Account Balance or\r\n            return the excessive amount through the payment system the Customer has used to pay for the order\r\n            initially. \r\n            <br>14.4.3. If the Customer initiates the payment with incorrect/insufficient details and/or to the wrong\r\n            destination account, LIQUID MINING will attempt, if possible, to process the order in a timely matter. If\r\n            the destination address does not belong to LIQUID MINING (directly or via a third-party service) and/or is\r\n            not related to LIQUID MINING in any way, LIQUID MINING will not be held responsible and will decline any\r\n            claims. \r\n            <br>14.4.4. LIQUID MINING is not obliged to proactively resolve payment related issues without a claim\r\n            submitted\r\n            by the Customer. \r\n            <br>14.5. In case of payment related issues a claim must be raised: \r\n            <br>14.5.1. A Customer has the right to raise a payment related claim/dispute by contacting support within\r\n            14\r\n            days from the creation of payment with proof of payment. Requests submitted after 14 days may not be\r\n            processed. \r\n            <br>14.5.2. LIQUID MINING reserves the right to request proof of payment, if there are suspicions or facts\r\n            the\r\n            payment was not received but the Contract was activated. The Customer is obliged to provide proof of payment\r\n            within 14 days of reception of such request. \r\n            <br>14.5.3. Proof of payment includes but is not limited to: LIQUID MINING order number, unique transaction\r\n            ID\r\n            or number, destination account, transferred amount, account statement from the payment system used. \r\n            <br>14.5.4. Credit Card purchases may require proof of ownership of the payment method and an identification\r\n            request. \r\n            <br>14.5.5. If proof of payment is not provided within 14 days or provided proof is deemed insufficient\r\n            and/or\r\n            invalid: \r\n            <br>14.5.5.1. if the claim was initiated by a Customer: LIQUID MINING reserves the right to decline\r\n            Customer's\r\n            claim(s); \r\n            <br>14.5.5.2. if the claim was initiated by LIQUID MINING: LIQUID MINING reserves the right to adjust/cancel\r\n            related Contracts and adjust Customer's Account Balance by amounts mined by related Contract. \r\n            <br>14.6. Unless otherwise provided by law or by a particular offer, all purchases are final and\r\n            non-refundable.\r\n            IQ reserves the right to issue refunds at IQ's sole discretion. If we issue a refund, we are under no\r\n            obligation to issue the same or similar refund in the future. This refund policy does not affect any\r\n            statutory rights that may apply. \r\n            <br>14.7. In the case of a refund: \r\n            <br>14.8.1. Customer will receive a reimbursement of spent funds to start the service, unless any funds were\r\n            withdrawn from Customer's Account Balance. If any amount was successfully withdrawn from the Account\r\n            Balance, no refund requests will be processed on said Account. \r\n            <br>14.9.2. LIQUID MINING has the right to nullify or deduct any Hashrate and/or funds mined by the Hashrate\r\n            of\r\n            the refunded purchase from the Customer's Account Balance as well as any funds provided as a Referral Bonus\r\n            for the refunded purchase from the Referrer's Account Balance. \r\n            <br>14.9.3. LIQUID MINING is not obliged to reimburse any funds spent for the Maintenance and Electricity\r\n            Fees. \r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            15. COMMUNICATIONS\r\n          </h2>\r\n          <p>\r\n            15.1. The Website may enable the display of third party content (\"User Content\"). \r\n            <br>15.2. Although we are not obliged to do so, we may remove or reject any User Content. \r\n            <br>15.3. You agree that we may process and store any content you submit to the Website (\"Your Content\"). \r\n            <br>15.4. You may be able to send Your Content to other Miners of the Website, and other Miners of the\r\n            Website\r\n            may be able to send User Content to you. \r\n            <br>15.5. You agree to the distribution of Your Content by us both internally and externally. Therefore, you\r\n            should ensure that Your Content does not contain information, which you intend to keep confidential or\r\n            private. \r\n            <br>15.6. By making available, posting or transmitting Your Content to the Website, you are granting us a\r\n            non-exclusive, transferable, sublicensable, royalty-free, irrevocable, perpetual worldwide license to use\r\n            and exploit Your Content for any purpose. \r\n            <br>15.7. You agree that you are entitled to make available, post or transmit Your Content to the Website. \r\n            <br>15.8. You will not make available, post or transmit to the Website any statement, material or other\r\n            content,\r\n            nor use the Website in any way, that: \r\n            <br>15.8.1. is unlawful or may give rise to civil or criminal liability; \r\n            <br>15.8.2. infringes any copyright or other intellectual property rights of any third party; \r\n            <br>15.8.3. infringes any third party's rights of privacy or rights of publicity; \r\n            <br>15.8.4. includes any computer virus or other malicious software; \r\n            <br>15.8.5. is abusive, pornographic, defamatory, discriminatory or obscene; \r\n            <br>15.8.6. harasses any other person; \r\n            <br>15.8.7. interferes with another user's use and enjoyment of the Website; \r\n            <br>15.8.8. impersonates any moderator, administrator or any staff or any other person connected with IQ; \r\n            <br>15.8.9. contains the confidential information of any other person; \r\n            <br>15.8.10. solicits passwords or personal information; \r\n            <br>15.8.11. contains video, photographs, or images of any other person without his or her permission (or in\r\n            the\r\n            case of a minor, the minor's legal guardian); \r\n            <br>15.8.12. exploits any other person; \r\n            <br>15.8.13. we consider inappropriate; or \r\n            <br>15.8.14. encourages or provokes any other person to do any of the acts listed above. \r\n            <br>15.9. The Website may provide means by which you can communicate with us. We will communicate with you\r\n            at\r\n            the email address you have provided or through other means of communication that may be provided by the\r\n            Website. Notices that are applicable to all our Miners shall be made available on the Website publicly. You\r\n            will be deemed to have received a notice at the time the email is sent or the time the notice is posted on\r\n            the Website. We will be deemed to have received a notice when we issue a confirmation to you. \r\n            <br>15.10. All emails (or other messages) we send are intended for the addressee only.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            16 . Confidentiality\r\n          </h2>\r\n          <p>\r\n            16.1 The customer should not disclose any information, related to the Company, including but not limited to\r\n            information on accounts, operations, clients of the Company, accounts opened for the clients, balance and\r\n            operations on the accounts of clients and any other information related to the clients of the Company and\r\n            their activity, information on shareholders, managers, employees of the Company, its affiliates, partners\r\n            and contractors, any agreements concluded between Company and any other party, its projects and products,\r\n            marketing strategies and plans, financial information and statements, and any other information that should\r\n            be reasonably recognized as confidential in accordance with applicable legislation.\r\n            <br>16.2 In case of forced disclosure of the information listed hereabove on demand of governmental and\r\n            regulating authorities, customer shall inform the Company on the day of receiving the appropriate request.\r\n            <br>16.3 In case of unauthorized disclosure of the aforementioned information or any other violation of this\r\n            confidentiality provision by the customer, the Company has the right to terminate the Agreement and to close\r\n            the account without any prior notices and with immediate effect.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            17. GENERAL\r\n          </h2>\r\n          <p>\r\n            17.1. These terms of service are subject to your statutory and common law consumer rights and will not limit\r\n            any rights you might have that cannot be excluded under applicable law. These terms of service will not\r\n            exclude or limit our liability for death or personal injury resulting from our negligence nor any fraudulent\r\n            acts or representations or for any statutory liability not capable of limitation. \r\n            <br>17.2. We may deduct any monies you owe us from any monies we owe you. \r\n            <br>17.3. These terms of service, together with the terms of use, privacy policy and any instructions,\r\n            guidance\r\n            and similar information found on the Website (from time to time), constitute the entire agreement between\r\n            you and IQ relating to your use of the Website and the Service and mining through the Website or the\r\n            Service, to the exclusion of any other terms. \r\n            <br>17.4. Our failure to enforce any term does not constitute our waiver of that term. \r\n            <br>17.5. If any part of these Terms is found to be unenforceable, it will be amended to the minimum extent\r\n            necessary to make it enforceable and the remainder of the provisions will remain in full force and effect. \r\n            <br>17.6. No representation or warranty is made as to whether the Website or the Service complies with the\r\n            laws\r\n            of any jurisdiction other than UK. \r\n            <br>17.7. The parties submit to the exclusive jurisdiction of the UK courts. These terms of service are\r\n            subject\r\n            to and interpreted in accordance with the laws of UK, provided that these terms of service shall not be\r\n            interpreted as conferring any statutory EU consumer protection laws, including any rights of withdrawal or\r\n            cancellation under implementations of Directive 2011/83/EU on consumer rights, on any individual not\r\n            ordinarily a resident of an EU Member State. \r\n            <br>17.8. This Website the Panel are presented in multiple languages. In the case of a conflict between\r\n            translations, the English version will prevail. \r\n            <br>17.9. IQ will be entitled to assign and otherwise transfer the agreement covered by these terms of\r\n            service\r\n            by giving you reasonable notice, which may include notice given via the Website. \r\n            <br>17.10. All questions, comments or complaints should be directed to us via Customer Support and we will\r\n            try\r\n            to respond to within 48 hours.\r\n          </p>\r\n        </div>\r\n        <div>\r\n          <h2>\r\n            18. PLEDGING\r\n          </h2>\r\n          <p>\r\n            18.1. When pledging a contract, you receive the residual value from the contract on the balance of your\r\n            trading account, depending on the number of days remaining on the contract.\r\n            <br>18.2. When pledging at least one of the contracts, all withdrawals from the account become unavailable.\r\n            <br>18.3. You can pledge any number of contracts and for any amount.\r\n            <br>18.4. The repayment of the pledged contract can be made at any time from the contract account for the\r\n            amount\r\n            that was pledged.\r\n            <br>18.5. Contract pledging is an additional service provided by LIQUID MINING and is optional to use.\r\n\r\n          </p>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <ng-template #de>\r\n        <div class=\"col-md-12\">\r\n          <h2 style=\"margin-bottom: 10px;\"> LIQUID MINING DIENSTLEISTUNGSBEDINGUNGEN </h2>\r\n          <h3>EINLEITUNG</h3>\r\n          <p>DIESE DIENSTLEISTUNGSBEDINGUNGEN GELTEN FÜR DIE NUTZUNG DER LIQUID MINING.COM CLOUD MINING-DIENSTLEISTUNG\r\n            UND DER LIQUID MINING-WEBSITE, DIE SICH UNTER LIQUID MINING.COM UND IHREN SUBDOMAINS BEFINDET. DIE WEBSITE\r\n            UND DIE DIENSTLEISTUNG SIND EIGENTUM VON LM LIMITED.</p>\r\n          <p>\r\n            SIE LEGEN FEST, WIE DER LIQUID MINING.COM CLOUD HOSTED CRYPTOCURRENCY MINING SERVICE FUNKTIONIERT UND\r\n            BESCHREIBEN ALLE DAMIT VERBUNDENEN RECHTE UND VERANTWORTLICHKEITEN. DIE LIQUID MINING.COM\r\n            DIENSTLEISTUNGSBEDINGUNGEN UND ALLE ANWEISUNGEN, ANLEITUNGEN UND ÄHNLICHE INFORMATIONEN, DIE AUF DER WEBSITE\r\n            (VON ZEIT ZU ZEIT) ZU FINDEN SIND, GELTEN AUCH FÜR DIE NUTZUNG DES LIQUID MINING.COM CLOUD MINING SERVICE\r\n            (ZUSAMMEN DER \"VERTRAG\"). DURCH DIE NUTZUNG DER WEBSITE UND/ODER DER DIENSTLEISTUNG ERKLÄREN SIE SICH MIT\r\n            DIESEN DIENSTLEISTUNGSBEDINGUNGEN EINVERSTANDEN; WENN SIE NICHT EINVERSTANDEN SIND, DÜRFEN SIE DIE WEBSITE\r\n            UND/ODER DIE DIENSTLEISTUNG NICHT NUTZEN.\r\n          </p>\r\n          <p>\r\n            LIQUID MINING BEHÄLT SICH DAS RECHT VOR, DIESE DIENSTLEISTUNGSBEDINGUNGEN JEDERZEIT NACH EIGENEM ERMESSEN ZU\r\n            ERGÄNZEN, ZU ÄNDERN, ZU MODIFIZIEREN, ZU ERGÄNZEN ODER TEILE DAVON ZU ENTFERNEN. ES LIEGT IN IHRER\r\n            VERANTWORTUNG, DIESE BEDINGUNGEN REGELMÄSSIG AUF ÄNDERUNGEN ZU ÜBERPRÜFEN. IHRE FORTGESETZTE NUTZUNG DER\r\n            WEBSITE UND/ODER DES DIENSTES NACH DER VERÖFFENTLICHTEN AKTUALISIERUNG DER BEDINGUNGEN BEDEUTET, DASS SIE\r\n            DIE ÄNDERUNGEN AKZEPTIEREN UND IHNEN ZUSTIMMEN. SOLANGE SIE DIESEN BEDINGUNGEN ZUSTIMMEN UND SIE EINHALTEN,\r\n            GEWÄHRT IHNEN LIQUID MINING EIN PERSÖNLICHES, NICHT EXKLUSIVES, NICHT ÜBERTRAGBARES, BEGRENZTES PRIVILEG,\r\n            DIE WEBSITE UND DEN SERVICE ZU BETRETEN UND ZU NUTZEN.\r\n          </p>\r\n          <p>\r\n            CLOUD MINING BIRGT FINANZIELLE RISIKEN UND IST MÖGLICHERWEISE NICHT FÜR ALLE MENSCHEN GEEIGNET. DIE HIER\r\n            PRÄSENTIERTEN INFORMATIONEN DIENEN NUR ZU INFORMATIONS- UND BILDUNGSZWECKEN UND SOLLTEN NICHT ALS ANGEBOT\r\n            ODER AUFFORDERUNG ZUR INVESTITION IN LIQUID MINING ODER ANDERSWO BETRACHTET WERDEN. ALLE\r\n            INVESTITIONSENTSCHEIDUNGEN, DIE SIE TREFFEN, LIEGEN ALLEIN IN IHRER VERANTWORTUNG. IQ MINING BIETET KEINE\r\n            DIENSTLEISTUNGEN FÜR EINWOHNER DER USA AN.\r\n          </p>\r\n          <div>\r\n            <h2>\r\n              1. ÜBER DIE DIENSTLEISTUNG, DIE WEBSITE UND DIESE DIENSTLEISTUNGSBEDINGUNGEN\r\n            </h2>\r\n            <p>\r\n              1.1. Dies ist eine Vereinbarung (im Folgenden als \"Bedingungen\" bezeichnet) zwischen LM Limited (in diesen\r\n              Bedingungen auch als \"LIQUID MINING\", \"LM\", \"wir\", \"uns\" oder \"unser\" bezeichnet) und Ihnen (in diesen\r\n              Bedingungen auch als \"Kunde\", \"Sie\", \"Ihr\" bezeichnet), der Person, die auf den Cloud-Mining-Dienst LIQUID\r\n              MINING.com zugreift und ihn nutzt und diese Bedingungen akzeptiert.\r\n              <br>1.2. In diesen Bedingungen:\r\n              <br>1.2.1. ein Verweis auf \"Cryptocurrency\", \"Cryptocurrencies\" ist ein Verweis auf die verteilten,\r\n              dezentralen Peer-to-Peer-Digitalwährungen:\r\n              <br>1.2.1.1. \"Bitcoins\" ist ein Verweis auf eine Cryptocurrency, die als Bitcoin bekannt ist;\r\n              <br>1.2.1.2. \"Altcoins\" ist ein Verweis auf alle Cryptocurrencies außer Bitcoin, wie z.B. Litecoin;\r\n              <br>1.2.2. \"Miner\" sind Personen, die sich registrieren, um Bitcoins und/oder Altcoins mit einer\r\n              Cloud-Maschine zu minen. Wenn Sie sich erfolgreich für die Verwaltung einer Cloud-Maschine bewerben, sind\r\n              Sie ein Miner;\r\n              <br>1.2.3. ein \"Mining Pool\" ist ein organisierter Zusammenschluss von Minern von Cryptocurrencies. Die\r\n              Mitglieder dieser Vereinigungen arbeiten zusammen, um Kryptowährungen zu schürfen, und diese\r\n              Kryptowährungen werden unter den Mitgliedern verteilt, basierend auf dem Beitrag, den jedes Mitglied zum\r\n              Schürfen leistet;\r\n              <br>1.2.4. die \"Mining-Hardware\" ist die Computer-Hardware, die nicht im Eigentum steht, sondern als Quelle\r\n              für die Mining-Effizienz und die Kostenberechnung durch IQ Mining verwendet wird;\r\n              <br>1.2.5. \"Hashrate\" oder \"Hash-Rate\" ist die Mining-Leistung der Mining-Hardware, die zum Mining von\r\n              Kryptowährungen verwendet wird. Die Hashrate ist abhängig vom Mining-Algorithmus (SHA-256, Scrypt, X11\r\n              usw.);\r\n              <br>1.2.6. \"Cloud-Maschine\" ist die virtuelle Mining-Leistung des Dienstes, die von einem Miner erworben und\r\n              von einem Miner über die Website verwaltet wird. Eine \"Cloud-Maschine\" ist ein Derivat einer realen\r\n              Mining-Maschine;\r\n              <br>1.2.7. \"Service\" ist ein LIQUID MINING Vertrag, der es Einzelpersonen ermöglicht, virtuell\r\n              Cryptocurrencies für sich selbst zu schürfen. Die Leistung des LIQUID MINING Vertrages hängt von der\r\n              Effizienz und den Kosten der Mining Hardware ab. Der LIQUID MINING \"Service\" sollte in keiner Weise als\r\n              Kauf von echtem Mining-Equipment betrachtet werden;\r\n              <br>1.2.8. der \"Support\" oder \"Kundendienst\" oder \"Helpdesk\" ist der technische Kundendienst von LIQUID\r\n              MINING, der per E-Mail/Ticket-System zur Verfügung gestellt wird und in der LIQUID\r\n              MINING-Wissensdatenbank/FAQ unter http://support.LIQUID MINING.com verfügbar ist, wo Kunden Antworten auf\r\n              allgemeine Fragen finden und Unterstützung anfordern können, indem sie eine Anfrage einreichen;\r\n              <br>1.2.9. das \"Panel\" ist die grafische Benutzeroberfläche des Dienstes, mit der der Bergmann interagiert, um\r\n              alle Aktionen im Zusammenhang mit dem Dienst durchzuführen;\r\n              <br>1.2.10. die \"Website\" ist LIQUID MINING.com und alle Anwendungen, Software, E-Mails oder andere Websites,\r\n              die wir verwenden, um die Dienste von LIQUID MINING.com (einschließlich des Dienstes) anzubieten;\r\n              <br>1.2.11. eine \"Auszahlung\" ist die periodische Einzahlung auf Ihr Guthaben, abhängig von Ihrer Cloud\r\n              Machine. LIQUID MINING kann die Häufigkeit der Auszahlungen jederzeit ändern, maximal jedoch einmal pro 24\r\n              Stunden;\r\n              <br>1.2.12. \"Gebühren\" sind Wartungs- und Stromkosten, die täglich vom Guthaben abgezogen werden;\r\n              <br>1.2.13. \"Konto\" ist Ihr persönlicher Zugang zum Dienst, der in Abschnitt 6 näher beschrieben wird;\r\n              <br>1.2.14. \"Saldo\" ist Ihr persönliches Kontoguthaben;\r\n              <br>1.2.15. ein \"Vertrag\" ist der Zugang zu einer Cloud-Maschine mit einem bestimmten Hash-Tarif;\r\n              <br>1.2.16. Eine \"Vertragslaufzeit\" ist der Zeitraum, für den ein Schürfer zugestimmt hat, für die Verwaltung\r\n              einer Cloud-Maschine zu zahlen; IQ bietet standardmäßig Verträge auf Lebenszeit an, die kein Ablaufdatum\r\n              haben, sofern nicht anders angegeben;\r\n              <br>1.2.17. \"Hold\" ist der Zustand, in den ein Konto versetzt werden kann, der das Konto daran hindert,\r\n              Abhebungen vorzunehmen, und der als Sicherheitsmaßnahme dient;\r\n              <br>1.2.18. eine \"Vorbestellung\" ist ein Vertrag mit einem Startdatum in der Zukunft. Das Startdatum ist\r\n              geschätzt und kann sich ändern;\r\n              <br>1.2.19. das \"Empfehlungsprogramm\" oder \"Partnerprogramm\" ist die Funktionalität, die es einem Kunden\r\n              ermöglicht, finanzielle Belohnungen für Verträge zu erhalten, die von anderen Kunden gekauft wurden;\r\n              <br>1.2.20. ein \"Empfehlungscode\" ist eine alphanumerische Sequenz (mindestens 6 Zeichen lang), die mit dem\r\n              Konto eines Kunden verknüpft ist;\r\n              <br>1.2.21. ein \"Empfehlungslink\" ist die URL mit einem Empfehlungscode, die es einem neuen Kunden ermöglicht,\r\n              sich bei LIQUID MINING zu registrieren;\r\n              <br>1.2.22. ein \"Referral\" ist ein Kunde, der sich über den Referral Link eines anderen Kunden registriert\r\n              hat;\r\n              <br>1.2.23. ein \"Empfehler\" ist ein Kunde, der einen anderen Kunden dazu veranlasst hat, sich über seinen\r\n              Empfehlungslink zu registrieren;\r\n              <br>1.2.24. ein \"Empfehlungskauf\" oder \"Empfohlener Kauf\" ist ein Kauf, der durch eine Empfehlung getätigt\r\n              wurde;\r\n              <br>1.2.25. ein \"Empfehlungsbonus\" ist die Belohnung, die ein Empfehler für einen Empfehlungskauf erhält;\r\n              <br>1.2.26. ein \"Partnernetzwerk\" ist eine Website Dritter, die es jeder Person (mit oder ohne LIQUID\r\n              MINING-Konto) ermöglicht, finanzielle Belohnungen für LIQUID MINING-Verträge zu erhalten, die von\r\n              geworbenen Kunden gekauft wurden.\r\n              <br>1.3. Diese Bedingungen gelten für jeden Bergbau, den Sie durch die Nutzung des Dienstes und der Website\r\n              betreiben, und sie bilden eine rechtsgültige Vereinbarung zwischen Ihnen und IQ bei der Annahme Ihres\r\n              Antrags auf ein Konto (wie unten dargelegt).\r\n              <br>1.4. Sollte es jemals einen Konflikt zwischen diesen Nutzungsbedingungen und den IQ-Nutzungsbedingungen\r\n              oder den Anweisungen, Anleitungen und ähnlichen Informationen auf der Website geben, haben diese\r\n              Nutzungsbedingungen Vorrang.\r\n              <br>1.5. ES IST UNS NICHT MÖGLICH, DEFINITIV ANZUGEBEN, WIE VIELE BITCOINS, LITECOINS UND/ODER ANDERE\r\n              KRYPTOWÄHRUNGSEINHEITEN VON EINEM MINER UND/ODER EINER BESTIMMTEN CLOUD-MASCHINE GESCHÜRFT WERDEN.\r\n              <br>1.6. Indem Sie sich als Miner registrieren lassen, bestätigen Sie, dass Sie diese Nutzungsbedingungen\r\n              verstehen und akzeptieren (und in der Lage sind, sie zu verstehen und zu akzeptieren) und dass Sie\r\n              zustimmen, dass Sie an sie gebunden sind. Sie sollten die Website regelmäßig auf Änderungen an den\r\n              Nutzungsbedingungen, Anweisungen, Anleitungen und ähnlichen Informationen auf der Website überprüfen.\r\n              <br>1.7. Sie können sich nur dann als Miner registrieren lassen, wenn:\r\n              <br>1.7.1. Sie 18 Jahre alt oder älter sind; und\r\n              <br>1.7.2. es für Sie rechtmäßig ist, dies zu tun.\r\n              <br>1.8. Um sich als Schürfer zu registrieren, können wir von Ihnen verlangen, dass Sie sich ausweisen oder\r\n              andere Dokumente vorlegen, um uns zu helfen, Betrug oder Geldwäsche zu verhindern. Dazu können ein\r\n              Lichtbildausweis und ein aktueller Adressnachweis gehören. Wir können auch unsere eigenen Identitäts-,\r\n              Betrugs- und Kreditprüfungen durchführen.\r\n              <br>1.9. Es ist Minern untersagt, die Webseite zu besuchen oder den Dienst über anonyme Proxys (wie Tor) und\r\n              andere Dienste oder Technologien zu nutzen, die die tatsächliche Internetverbindung des Nutzers verbergen.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              2. RISIKOHINWEIS\r\n            </h2>\r\n            <p>\r\n              2.1. Handlungen mit Kryptowährungen sind mit Risiken verbunden. Da Kryptowährungen unreguliert und\r\n              dezentralisiert sind, ist ihr Wert nicht durch juristische Personen versichert. Der Wert eines Vertrages\r\n              oder eines Betrages einer Cryptocurrency kann sich aufgrund einer Reihe von Faktoren, die außerhalb der\r\n              Kontrolle von LIQUID MINING liegen, ändern. Zu diesen Faktoren gehören u.a. Änderungen der\r\n              Mining-Schwierigkeit und/oder anderer Mining-Parameter/Eigenschaften, schwankende Preise (in Fiat-Währung\r\n              zu Cryptocurrency-Wechselkursen, wie z.B. USD/BTC) von Cryptocurrencies. Sie verstehen und stimmen zu,\r\n              dass der Wert jedes Kontakts und jeder Menge an abgebauter Cryptocurrency zu jedem Zeitpunkt aufgrund der\r\n              Natur von Cryptocurrencies an Wert verlieren kann. Sie verstehen, dass Sie allein für die Verwaltung der\r\n              Cryptocurrencies in Ihrem Guthaben verantwortlich sind, sowie für jegliche Verluste oder Gebühren, die\r\n              durch Dritte entstehen.\r\n              <br>2.2. Alle Informationen, die sich auf Kryptowährungen und das Mining von Kryptowährungen beziehen und von\r\n              LIQUID MINING über jegliche Kommunikationskanäle (einschließlich, aber nicht beschränkt auf: auf der\r\n              Website, im Panel, über den Support-Service, per E-Mail-Newsletter, in den sozialen Medien) gepostet,\r\n              veröffentlicht und/oder zur Verfügung gestellt wurden, können sich ändern.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              3. KRYPTOWÄHRUNGEN\r\n            </h2>\r\n            <p>\r\n              3.1. Sie dürfen Cryptocurrencies nicht schürfen, kaufen, verkaufen, tauschen, halten, besitzen oder\r\n              anderweitig nutzen oder ausbeuten, wenn dies durch die für Sie geltenden Gesetze oder Vorschriften\r\n              verboten ist.\r\n              3.2. Kryptowährungen sind möglicherweise nicht für jeden geeignet. Bevor Sie Kryptowährungen schürfen,\r\n              sollten Sie sich über sie informieren, um sicherzustellen, dass sie für Sie geeignet sind. Wie bei allen\r\n              Währungen gibt es auch bei Kryptowährungen Nachteile. Zu den besonderen Risiken von Kryptowährungen\r\n              gehören:\r\n              <br>3.2.1. Währungsschwankungen - der Preis von Bitcoin und/oder einer anderen Cryptocurrency kann stark\r\n              fallen und sogar auf Null sinken;\r\n              <br>3.2.2. Transaktionen mit Kryptowährungen können für eine gewisse Zeit unbestätigt sein. Obwohl es sehr\r\n              unwahrscheinlich ist, können einige Cryptocurrency-Transaktionen nie bestätigt werden -\r\n              Cryptocurrency-Transaktionen, die unbestätigt sind, werden nicht abgeschlossen;\r\n              <br>3.2.3. Transaktionen mit Cryptocurrencies sind nicht rückgängig zu machen - wenn Sie einen beliebigen\r\n              Betrag einer Cryptocurrency an die falsche Person senden, können Sie diese Gelder möglicherweise nicht\r\n              zurückerhalten;\r\n              <br>3.2.4. Kryptowährungen können verloren gehen, wenn Sie PINs oder Passwörter verlieren oder vergessen, die\r\n              für den Zugang und die Ausgabe dieser Kryptowährungen erforderlich sind;\r\n              <br>3.2.5. unbekannte technische Mängel, die Kryptowährungen innewohnen; und\r\n              <br>3.2.6. neue Vorschriften, die sich auf die Verwendung von Kryptowährungen auswirken.\r\n              <br>3.3. Durch die Zustimmung zu diesen Nutzungsbedingungen oder durch das Mining von Kryptowährungen durch\r\n              die Nutzung des Dienstes geben Sie an, dass Sie die mit Kryptowährungen verbundenen Risiken verstehen,\r\n              verstehen können und akzeptieren.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              4. REGISTRIERUNG\r\n            </h2>\r\n            <p>\r\n              4.1. Durch Ihre Anmeldung geben Sie ein Angebot ab, eine Vereinbarung über diese Nutzungsbedingungen\r\n              einzugehen. Einmal abgegeben, können Sie Ihr Angebot nicht mehr zurückziehen.\r\n              <br>4.2. Nur wir können entscheiden, ob Ihre Anmeldung angenommen wird. Wenn Ihre Anmeldung angenommen wird,\r\n              kommt ein rechtsgültiger und durchsetzbarer Vertrag zwischen Ihnen und uns zustande. Vorbehaltlich\r\n              etwaiger gesetzlicher Rechte können Sie den Vertrag, der durch diese Nutzungsbedingungen abgedeckt ist,\r\n              nicht kündigen und haben keinen Anspruch auf eine Rückerstattung.\r\n            </p>\r\n          </div>\r\n\r\n          <div>\r\n            <h2>\r\n              5. VERTRAGSLAUFZEIT UND ABBAUZEIT\r\n            </h2>\r\n            <p>\r\n              5.1. Diese Nutzungsbedingungen gelten auf unbestimmte Zeit, auch nach Kündigung des Kontos.\r\n              <br>5.2. Die Vertragslaufzeit für LIQUID MINING.com Cloud Maschinen ist standardmäßig unbegrenzt, sofern nicht\r\n              anders angegeben. Der Vertrag ist gültig, solange er rentabel ist, bis er abläuft oder bis er gekündigt\r\n              wird (siehe Abschnitt 13), je nachdem, was zuerst eintritt.\r\n              <br>5.3. Verträge mit einem angegebenen Ablaufdatum enden an diesem Datum und die Cloud-Maschine wird\r\n              eingestellt.\r\n              <br>5.4. Vorbestellte Verträge, die nicht sofort beim Kauf aktiviert werden, werden zum angegebenen Datum\r\n              aktiviert.\r\n              <br>5.5. Der Mining-Prozess wird solange fortgesetzt, bis das Mining profitabel ist. Das bedeutet, dass der\r\n              Mining-Prozess gestoppt wird, wenn die Wartungs- und Stromkosten höher werden als die Auszahlung. Wenn das\r\n              Mining für 21 aufeinanderfolgende Tage unrentabel bleibt, wird der Service dauerhaft beendet\r\n              (Hashrate-Typ-spezifisch). Während des 21-tägigen Zeitraums werden auch die Auszahlungen und Gebühren\r\n              vorübergehend eingestellt. Sollten sich während der Aussetzung die vertragsbezogenen Faktoren (wie z.B.\r\n              der Wechselkurs und die Schwierigkeit des Abbaus), die außerhalb der Kontrolle von LIQUID MINING liegen,\r\n              positiv verändern, so dass der Abbau wieder profitabel wird, wird der Service wieder freigegeben und die\r\n              Verträge reaktiviert. Die Anfangskosten werden nach Vertragsende nicht zurückerstattet.\r\n              <br>5.6. LIQUID MINING behält sich das Recht vor, das Startdatum, die Vertragslaufzeit und/oder die\r\n              Mining-Laufzeit eines Vertrages zu ändern.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              6. ACCOUNT\r\n            </h2>\r\n            <p>\r\n              6.1. Um sich zu registrieren, müssen Sie einige persönliche Daten, eine gültige E-Mail-Adresse (die als\r\n              Benutzername und zur Benutzeridentifikation verwendet wird) für Ihr Website-Konto (\"Konto\") und ein\r\n              Passwort (\"Passwort\") angeben. Um Geld abheben zu können, müssen Sie mindestens eine Wallet für die\r\n              Cryptocurrency angeben, die Sie schürfen. Das Konto kann Ihnen erlauben, mehr als eine\r\n              Cryptocurrency-Wallet hinzuzufügen.\r\n              <br>6.2. Sie müssen sicherstellen, dass alle Informationen, die wir über Sie haben, wahr, vollständig, nicht\r\n              irreführend und aktuell sind.\r\n              <br>6.3. Der Benutzername und das Passwort werden Ihnen zugewiesen, wenn Sie sich erfolgreich als Miner\r\n              registrieren lassen.\r\n              <br>6.4. Sie benötigen Ihren Benutzernamen und Ihr Passwort, um auf einige Teile der Website zuzugreifen. Ihr\r\n              Benutzername und Ihr Passwort sind für Sie persönlich bestimmt und dürfen nicht an andere Personen\r\n              weitergegeben werden.\r\n              <br>6.5. Die Anzahl der Konten ist auf 1 pro Begünstigtem begrenzt.\r\n              <br>6.6. Wenn Sie sich registrieren, können Sie einen Auftrag zur Verwaltung einer Cloud-Maschine erteilen.\r\n              Dieser Auftrag ermöglicht es Ihnen, die Rechenleistung der Cloud-Maschine zu bestimmen. Nur LIQUID MINING\r\n              kann entscheiden, ob die Bestellung erfolgreich sein wird, und die Annahme hängt unter anderem von der\r\n              Verfügbarkeit ab.\r\n              <br>6.7. Ihre Bestellung ist eine Aufforderung, einen Vertrag von uns zu erwerben und stellt keinen\r\n              Vertragsabschluss dar. Wenn wir Ihre Bestellung annehmen, werden wir Ihren Vertrag mit Ihrem Konto\r\n              verknüpfen. Bis dahin gilt eine Bestellung als schwebend und LIQUID MINING behält sich das Recht vor, Ihre\r\n              Zahlung abzulehnen.\r\n              <br>6.8. Vorbehaltlich der Zahlung etwaiger Gebühren können Miner Kryptowährungen auf der Grundlage der\r\n              Verarbeitungsleistung der Cloud-Maschine und der Zeitspanne, in der die Cloud-Maschine Mining betreibt,\r\n              erhalten. Die Miner können die Cloud-Maschine nur während der Vertragslaufzeit verwalten. Diese\r\n              Kryptowährungen werden auf Ihre Anfrage hin auf Ihre Brieftasche übertragen, wenn diese Anfrage bestätigt\r\n              wird.\r\n              <br>6.9. Wenn Sie den Zugang zu Ihrem Konto verlieren, kann LIQUID MINING Sie auffordern, bestimmte Arten von\r\n              Daten, einschließlich personenbezogener Daten, zur Verfügung zu stellen, um die Eigentümerschaft des\r\n              Kontos zu bestimmen. Dazu können unter anderem gehören: Identitätsnachweis, Nachweis des Wohnsitzes,\r\n              Nachweis der Telefonnummer/E-Mail-Eigentümerschaft und alle identifizierbaren Aktivitäten auf der Website,\r\n              wie Transaktions-IDs, Bestellnummern, Abhebungsbeträge und andere.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              7. NUTZUNG IHRES KONTOS\r\n            </h2>\r\n            <p>\r\n              7.1. Sie dürfen Cryptocurrencies nur zu Ihrem eigenen Nutzen minen. Durch die Nutzung der Website und/oder\r\n              des Dienstes bestätigen Sie, dass Sie nicht zum Nutzen einer anderen Person oder Einrichtung handeln.\r\n              <br>7.2. Wir sind berechtigt, davon auszugehen, dass jede Nutzung Ihres Kontos von Ihnen vorgenommen wird. Sie\r\n              sind allein verantwortlich und haftbar für jede Nutzung der Website oder des Dienstes unter Ihrem Konto\r\n              oder jede andere Nutzung Ihres Benutzernamens und Passworts.\r\n              <br>7.3. Sie dürfen nur ein Konto besitzen. Wenn Sie Ihren Benutzernamen oder Ihr Passwort vergessen haben,\r\n              können Sie die Option zur Wiederherstellung des Passworts nutzen oder den Support kontaktieren.\r\n              <br>7.4. GEBEN SIE IHR PASSWORT NICHT AN ANDERE PERSONEN WEITER UND ERLAUBEN SIE KEINER ANDEREN PERSON DIE\r\n              NUTZUNG IHRES KONTOS. WIR HAFTEN NICHT FÜR DIE MISSBRÄUCHLICHE NUTZUNG IHRES PASSWORTS ODER KONTOS DURCH\r\n              SIE ODER EINE ANDERE PERSON. WENN SIE GRUND ZUR ANNAHME HABEN, DASS EINE ANDERE PERSON IHR PASSWORT KENNT\r\n              ODER DASS IHR KONTO VON EINER ANDEREN PERSON BENUTZT WURDE, MÜSSEN SIE UNS SOFORT INFORMIEREN.\r\n              <br>7.5. Wenn Sie sich 12 Monate lang nicht in Ihr Konto einloggen, können wir das Konto kündigen. Sie werden,\r\n              wenn möglich, im Voraus benachrichtigt. Wenn wir Sie nicht erreichen können oder Sie keine Maßnahmen\r\n              ergreifen, um die Kontokündigung zu verhindern, wird Ihr Guthaben annulliert.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              8. EINSCHRÄNKUNGEN UND VERPFLICHTUNGEN\r\n            </h2>\r\n            <p>\r\n              8.1. Sie verpflichten sich, alle geltenden Gesetze und Vorschriften, diese Nutzungsbedingungen und alle\r\n              für die Nutzung der Website und des Dienstes geltenden Regeln einzuhalten.\r\n              <br>8.2. Sie verpflichten sich, im Umgang mit IQ keine falschen Angaben zu machen oder sich anderweitig falsch\r\n              darzustellen.\r\n              <br>8.3. Es ist Ihnen nicht gestattet, Kampagnen, Rabatte, Empfehlungsboni und/oder Empfehlungssysteme zu\r\n              missbrauchen, die von Zeit zu Zeit von IQ und/oder seinen Partnern angeboten werden.\r\n              <br>8.4. Es ist Ihnen nicht gestattet, Ihren Internetverkehr und Ihre IP-Adresse zu verschleiern (z.B. Proxy,\r\n              Tor, VPN und andere).\r\n              <br>8.5. Multi-Level-Marketing (MLM)- und/oder High-Yield-Investment-Projekte (HYIP)-Systemen ist es\r\n              untersagt, ihren Nutzern oder Partnern irgendwelche Dienstleistungen anzubieten, die auf LIQUID MINING\r\n              und/oder LIQUID MINING basieren, einschließlich, aber nicht beschränkt auf LIQUID MINING und/oder LIQUID\r\n              MINING Produkte und/oder Dienstleistungen.\r\n              <br>8.6. Es ist Ihnen strengstens untersagt, Fehler im Design der Website, des Dienstes und/oder aller ihrer\r\n              Teile, nicht dokumentierte Funktionen und/oder \"Programmfehler\" für kommerzielle/persönliche Zwecke oder\r\n              als Mittel zur Störung und/oder Destabilisierung des Dienstes und/oder der Website zu verwenden oder\r\n              auszunutzen. Sollten Sie zufällig auf einen solchen Fehler stoßen, sind Sie verpflichtet, Ihre\r\n              Feststellungen an support@LIQUID MINING.com zu melden.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              9. VERWALTUNG DES BERGBAUS\r\n            </h2>\r\n            <p>\r\n              9.1. Während der Vertragslaufzeit können Sie die Website nutzen, um:\r\n              <br>9.1.1. Ihre Registrierungs- und Kontaktangaben zu ändern oder zu aktualisieren;\r\n              <br>9.1.2. mit Hilfe des Kundensupports Ihr Konto deaktivieren oder reaktivieren sowie einen aktiven Vertrag\r\n              kündigen;\r\n              <br>9.1.3. mit Hilfe des Kundensupports die Login-E-Mail-Adresse ändern;\r\n              <br>9.1.4. einige Parameter für den Abbau Ihrer Cloud-Maschine ändern; und\r\n              <br>9.1.5. Ihre kryptowährungsspezifischen Wallet-Adressen zu ändern.\r\n              <br>9.2. Vorbehaltlich der Zahlung und zusätzlicher Gebühren im Voraus, können Sie die Website nutzen, um:\r\n              <br>9.2.1. eine neue Cloud-Maschine hinzuzufügen; und\r\n              <br>9.2.2. die Verarbeitungsleistung Ihrer Cloud-Maschine zu erhöhen.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              10. BILANZ\r\n            </h2>\r\n            <p>\r\n              10.1. Ihr Guthaben im Panel ist Ihr persönlicher Betrag, der Ihnen zur Verfügung steht.\r\n              <br>10.2. Der Dienst kann mehrere Guthaben haben. Derzeit verfügbare Guthaben sind:\r\n              <br>10.2.1. Das BTC-Guthaben wird in BTC (Bitcoins) gemessen, mit einer Genauigkeit von\r\n              0,00000001 BTC (1 Satoshi, der kleinste unteilbare Betrag von BTC);\r\n              <br>10.2.2. ETH Guthaben wird in ETH (Ethereum) gemessen, genau auf\r\n              0,00000001 ETH (10 GWei).\r\n              <br>10.3. Andere Kryptowährungsguthaben können jederzeit eingeführt und/oder entfernt werden.\r\n              <br>10.4. Die geschürften Gelder werden direkt auf Ihr Guthaben übertragen. Dies kann bis zu 24 Stunden ab dem\r\n              Datum der Generierung der Münzen dauern.\r\n              <br>10.5. Das Guthaben kann auf die folgenden Arten verwendet werden:\r\n              <br>10.5.1. Sie können Ihr Guthaben jederzeit abheben, wenn es die Mindestanforderungen erfüllt, sofern nicht\r\n              anders angegeben (Änderungen vorbehalten).\r\n              <br>10.5.2. Sie können zusätzliche(n) Vertrag(e) für die Cloud-Maschine(n) erwerben, um Ihre Gesamthashrate zu\r\n              erhöhen.\r\n              <br>10.6. LIQUID MINING behält sich das Recht vor, rückwirkende Neuberechnungen von Guthaben, Cloud-Maschinen,\r\n              Hash-Rate und Protokollen vorzunehmen, insbesondere im Falle eines Fehlers im Dienst, um Fehler oder\r\n              Unstimmigkeiten zu korrigieren.\r\n              <br>10.7. Der Saldo kann negativ sein. In diesem Fall muss der Saldo über den Mindestbetrag hinaus positiv\r\n              werden, bevor Abhebungen und/oder Käufe damit getätigt werden können.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              11. GEBÜHREN\r\n            </h2>\r\n            <p>\r\n              11.1. Wir stellen eine Plattform zur Verfügung, die es Einzelpersonen ermöglicht, Kryptowährungen mit\r\n              Hilfe einer Cloud Machine zu schürfen. Im Gegenzug erheben wir regelmäßige Wartungs- und Stromgebühren\r\n              (\"Gebühren\"), die sich aus dem Stromverbrauch sowie den Kosten für die Wartung der Mining-Ausrüstung\r\n              ergeben. Die Wartungskosten für den Betrieb der Ausrüstung umfassen unter anderem: Hardware-Setup, Miete\r\n              des Rechenzentrums, Mining-Pool-Tests, Mitarbeitergehälter, Zukunftsplanung und -sicherung,\r\n              Software-Entwicklung, Austausch von gebrauchten und nicht mehr lieferbaren Teilen und andere Ausgaben, die\r\n              für die Erbringung der Dienstleistung auf einer Best-Effort-Basis erforderlich sind. Für einige\r\n              Vertragsarten fallen keine regelmäßigen Gebühren an. Das Vorhandensein und die Spezifizierung der Gebühren\r\n              für jeden Vertragstyp können jederzeit auf der Website eingesehen werden.\r\n              <br>11.3. Die Gebühren werden einmal pro Tag unmittelbar nach einer Auszahlung für alle aktiven\r\n              Cloud-Maschinen (falls mehr als eine aktiv ist) von Ihrem Guthaben abgezogen.\r\n              <br>11.4. LIQUID MINING behält sich das Recht vor, die Gebühren jederzeit und ohne vorherige Ankündigung zu\r\n              ändern.\r\n              <br>11.5. Die Gebühren sind nicht erstattungsfähig.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              12. HAFTBARKEIT\r\n            </h2>\r\n            <p>\r\n              12.1. Wir stellen die Website und den Dienst auf einer \"AS IS\"- und \"AS AVAILABLE\"-Basis zur Verfügung und\r\n              pflegen sie, und wir haften nur dafür, unsere Dienste mit angemessener Sachkenntnis und Sorgfalt\r\n              bereitzustellen.\r\n              <br>12.2. Wir geben keine weitere Garantie in Verbindung mit der Website oder dem Service und lehnen jede\r\n              Haftung ab für:\r\n              <br>12.2.1. in dem durch diese Bedingungen erlaubten Umfang und ohne Beeinträchtigung anderer Klauseln\r\n              innerhalb von Abschnitt 12, die möglicherweise gelten, für die Richtigkeit, Aktualität oder Gültigkeit von\r\n              Informationen und Materialien, die auf der Website, dem Panel, dem Support-Service, in E-Mail-Newslettern\r\n              und sozialen Medien enthalten sind und/oder von diesen bereitgestellt werden. Sie erklären sich hiermit\r\n              damit einverstanden, dass kein Funkgerät, kein Computer und keine Internet-Kommunikationseinrichtung\r\n              völlig fehlerfrei ist, dass gelegentliche technische Störungen den Dienst beeinträchtigen können und dass\r\n              auch menschliches Versagen zu einer falschen Darstellung von Inhalten oder zu Fehlkommunikation führen\r\n              kann;\r\n              <br>12.2.2. jede Änderung des Wechselkurses von Bitcoins oder einer anderen Kryptowährung;\r\n              <br>12.2.3. jede Änderung des Schwierigkeitsgrades des Minings;\r\n              <br>12.2.4. jegliche Änderungen der anwendbaren Gesetze oder Vorschriften oder die Handlungen von Gesetzgebern\r\n              oder Regulierungsbehörden in irgendeinem Teil der Welt;\r\n              <br>12.2.5. jegliche Unterbrechungen oder Fehler der Website oder des Dienstes oder eines anderen\r\n              Kommunikationsnetzwerks;\r\n              <br>12.2.6. die Verletzung von Urheberrechten oder anderen geistigen Eigentumsrechten Dritter durch eine\r\n              andere Person durch Benutzerinhalte oder die Nutzung der Website oder des Dienstes;\r\n              <br>12.2.7. die Verfügbarkeit, die Qualität, der Inhalt oder die Art der externen Sites;\r\n              <br>12.2.8. Verluste oder Schäden jeglicher Art aufgrund von Viren oder anderer bösartiger Software, die die\r\n              Computerausrüstung, Software, Daten oder sonstiges Eigentum eines Benutzers infizieren können, die durch\r\n              andere Personen verursacht werden, die auf die Website, den Dienst oder Benutzerinhalte zugreifen, diese\r\n              nutzen oder herunterladen; und\r\n              <br>12.2.9. alle Zusicherungen, Garantien, Bedingungen und sonstigen Bestimmungen, die ohne diesen Hinweis\r\n              gelten würden.\r\n              <br>12.3. Wir haften in keiner Weise für die Nichterfüllung von Verpflichtungen im Rahmen dieser\r\n              Nutzungsbedingungen, wenn diese Nichterfüllung auf ein Ereignis zurückzuführen ist, das sich unserer\r\n              Kontrolle entzieht.\r\n              <br>12.4. Mit Ausnahme der oben genannten Bestimmungen gibt es keine weiteren ausdrücklichen oder\r\n              stillschweigenden, gesetzlichen oder sonstigen Garantien, Bedingungen oder sonstigen Bestimmungen und\r\n              Bedingungen, und alle diese Bestimmungen und Bedingungen werden hiermit im größtmöglichen gesetzlich\r\n              zulässigen Umfang ausgeschlossen.\r\n              <br>12.5. Soweit gesetzlich zulässig, schließen wir die Haftung für Verluste oder Schäden aus, die Sie\r\n              erleiden, unabhängig davon, ob es sich um direkte oder indirekte, unmittelbare oder Folgeschäden handelt,\r\n              die unter eine der folgenden Kategorien fallen:\r\n              <br>12.5.1. besondere Schäden, auch wenn der betreffenden Partei die Umstände bekannt waren, unter denen\r\n              solche besonderen Schäden entstehen könnten;\r\n              <br>12.5.2. Verlust von erwarteten Ersparnissen;\r\n              <br>12.5.3. Verlust von Geschäftsmöglichkeiten und Managementzeit;\r\n              <br>12.5.4. Verlust von Geschäftswert;\r\n              <br>12.5.5. Verlust von Cryptocurrency, der durch Ihre Handlungen oder Unterlassungen oder die eines Dritten\r\n              entsteht;\r\n              <br>12.5.5.1. Verlust, der aus oder in Verbindung mit:\r\n              <br>12.5.5.2. einem Defekt oder einer Unsicherheit in Systemen, die Sie zum Speichern oder Übertragen von\r\n              Cryptocurrency oder für den Zugang oder die Nutzung der Website oder des Dienstes verwenden;\r\n              <br>12.5.5.3. ungenaue oder unvollständige Informationen, die Sie angeben, einschließlich\r\n              Cryptocurrency-Wallet-Adressen;\r\n              <br>12.5.5.4. jegliche Änderungen der Menge an Cryptocurrency, die Minern zugeteilt wird;\r\n              <br>12.5.5.5. alle Änderungen des regulatorischen, gesetzlichen oder technischen Umfelds, das für\r\n              Cryptocurrencies gilt;\r\n              <br>12.5.5.6. die Handlungen oder Unterlassungen einer Bank oder eines Anbieters von Bankdienstleistungen;\r\n              oder\r\n              <br>12.5.5.7. jegliche Veränderung des Wertes von Kryptowährungen, wie auch immer sie zustande kommt\r\n              (einschließlich als Folge von Handlungen oder Unterlassungen von IQ).\r\n              <br>12.6. Soweit gesetzlich zulässig, ist unsere Gesamthaftung in Bezug auf Ansprüche, die im Zusammenhang mit\r\n              der Nutzung der Website oder des Dienstes erhoben werden oder daraus entstehen (sei es durch Vertrag,\r\n              unerlaubte Handlung (einschließlich Fahrlässigkeit), Verletzung gesetzlicher Pflichten oder anderweitig)\r\n              für direkte Verluste auf die Gebühren beschränkt.\r\n              <br>12.7. Sie verpflichten sich, die Website oder den Dienst nicht in einer Weise zu nutzen, die:\r\n              <br>12.7.1. ungesetzlich ist;\r\n              <br>12.7.2. eine zivil- oder strafrechtliche Haftung für IQ nach sich ziehen kann; oder\r\n              <br>12.7.3. IQ in Verruf bringen kann.\r\n              <br>12.8. Sie verpflichten sich hiermit, uns und unsere leitenden Angestellten, Direktoren, Eigentümer,\r\n              Vertreter, Informationsanbieter, verbundenen Unternehmen, Lizenzgeber und Lizenznehmer (zusammen die\r\n              \"freigestellten Parteien\") zu entschädigen, zu verteidigen und schadlos zu halten von und gegen jegliche\r\n              Haftung und Kosten (einschließlich angemessener Anwaltskosten), die den freigestellten Parteien im\r\n              Zusammenhang mit Ansprüchen entstehen, die sich ergeben aus:\r\n              <br>12.8.1. einem von Ihnen begangenen Betrug oder einer betrügerischen Falschdarstellung;\r\n              <br>12.8.2. einer Ungenauigkeit oder eines Mangels der von Ihnen bereitgestellten Informationen;\r\n              <br>12.8.3. jeglicher Verstoß gegen geltendes Recht oder Vorschriften, den Sie begehen;\r\n              <br>12.8.4. die Nutzung Ihres Kontos durch eine andere Person;\r\n              <br>12.8.5. jede Verletzung dieser Nutzungsbedingungen durch Sie; und\r\n              <br>12.8.6. Ansprüche Dritter, die sich aus Ihrer Nutzung der Website oder des Dienstes, Ihrer Inhalte oder\r\n              der Nutzung Ihres Kontos ergeben (unabhängig davon, ob diese Nutzung durch Sie erfolgte oder nicht).\r\n              <br>12.9. Sie müssen mit uns bei der Verteidigung gegen jegliche Ansprüche zusammenarbeiten. Wir behalten uns\r\n              das Recht vor, auf eigene Kosten die ausschließliche Verteidigung und Kontrolle einer Angelegenheit zu\r\n              übernehmen, die ansonsten der Entschädigung durch Sie unterliegt.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              13. VERLETZUNG, AUSSETZUNG UND KÜNDIGUNG\r\n            </h2>\r\n            <p>\r\n              13.1. Ohne unsere sonstigen Rechte einzuschränken, können wir den Zugriff auf Ihr Konto, die Website\r\n              und/oder den Dienst aussetzen oder beenden, Ihr Kontoguthaben für ungültig erklären und/oder die\r\n              Möglichkeit einbehalten, abgebaute Gelder abzuheben, wenn Sie gegen eine dieser Nutzungsbedingungen\r\n              verstoßen.\r\n              <br>13.2. Wenn wir den begründeten Verdacht haben, dass Sie die Website oder den Dienst in betrügerischer oder\r\n              unangemessener Weise nutzen, werden wir Ihr Konto sperren, bis Sie zu unserer Zufriedenheit nachweisen\r\n              können:\r\n              <br>13.2.1. Ihre Identität; und\r\n              <br>13.2.2. dass kein Betrug oder unangemessenes Verhalten stattgefunden hat oder versucht wurde.\r\n              <br>13.3. Wir werden uns bemühen, Sie in angemessener Weise über eine voraussichtliche Beendigung der Website\r\n              oder des Dienstes zu informieren.\r\n              <br>13.4. Wenn Sie einen Verstoß eines anderen Nutzers oder eines Miners gegen diese Nutzungsbedingungen oder\r\n              einen Betrug oder ein unangemessenes Verhalten eines anderen Nutzers bemerken oder vermuten, müssen Sie\r\n              uns sofort kontaktieren.\r\n              <br>13.5. Im Falle eines Kaufs per Kreditkarte (siehe Abschnitt 14.5.4.) hat LIQUID MINING das Recht, das\r\n              Konto des Kunden für einen Zeitraum von bis zu 30 Tagen als Sicherheitsmaßnahme zur Betrugsbekämpfung zu\r\n              sperren (und damit die Möglichkeit einzubehalten, Geld vom Kontostand des Kunden abzuheben).\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              14. ZAHLUNGSBEDINGUNGEN, AUFTRAGSSTORNIERUNG, AUFTRAGSÄNDERUNGEN UND AUFTRAGSRÜCKERSTATTUNG\r\n            </h2>\r\n            <p>\r\n              14.1. Alle Rechnungen werden standardmäßig in USD (United States Dollar) ausgestellt. Bei Zahlungen in\r\n              anderen Währungen sind der Wechselkurs dieser Währung zum Zeitpunkt der Rechnungserstellung und eventuelle\r\n              Umtauschgebühren zu berücksichtigen.\r\n              <br>14.2. Der Kunde hat die Möglichkeit, einen Vertrag mit verschiedenen Zahlungsmitteln zu erwerben\r\n              <br>14.3. Der Kunde hat das Recht, die Bestellung nicht zu bezahlen, wenn die Bestellung zwar erstellt, aber\r\n              noch nicht bezahlt wurde, wenn der Kunde beschließt, die Bestellung nicht abzuschließen. Die Bestellung\r\n              verfällt nach einer bestimmten Zeit (abhängig von der Zahlungsmethode) und der Kunde ist nicht\r\n              verpflichtet, die Bestellung fortzusetzen. LIQUID MINING wird keine Anträge auf Stornierung unbezahlter\r\n              Bestellungen bearbeiten, da die unbezahlten Bestellungen verfallen sollen.\r\n              <br>14.4. Der Kunde ist allein für die Richtigkeit der Zahlung verantwortlich, einschließlich, aber nicht\r\n              beschränkt auf: das Zielkonto, den überweisbaren Betrag und die Zahlungsdetails:\r\n              <br>14.4.1. Liegt der überwiesene Betrag unter dem geforderten Betrag, behält sich IQ das Recht vor, den\r\n              Vertrag nach eigenem Ermessen an die eingegangenen Gelder anzupassen oder den fehlenden Betrag zu\r\n              verlangen, bevor der Vertrag aktiviert wird.\r\n              <br>14.4.2. Liegt der überwiesene Betrag über dem geforderten Betrag, behält sich IQ das Recht vor, den\r\n              Vertrag nach eigenem Ermessen an die eingegangenen Gelder anzupassen, den zu viel überwiesenen Betrag dem\r\n              Kontostand des Kunden hinzuzufügen oder den zu viel überwiesenen Betrag über das Zahlungssystem, mit dem\r\n              der Kunde die Bestellung ursprünglich bezahlt hat, zurückzuzahlen.\r\n              <br>14.4.3. Wenn der Kunde die Zahlung mit falschen/unzureichenden Angaben und/oder auf ein falsches Zielkonto\r\n              veranlasst, wird LIQUID MINING versuchen, die Bestellung nach Möglichkeit zeitnah zu bearbeiten. Wenn die\r\n              Zieladresse nicht zu LIQUID MINING gehört (direkt oder über einen Drittdienst) und/oder in keiner Weise\r\n              mit LIQUID MINING in Verbindung steht, kann LIQUID MINING nicht verantwortlich gemacht werden und lehnt\r\n              jegliche Ansprüche ab.\r\n              <br>14.4.4. LIQUID MINING ist nicht verpflichtet, Probleme im Zusammenhang mit der Zahlung proaktiv zu lösen,\r\n              ohne dass der Kunde eine Forderung eingereicht hat.\r\n              <br>14.5. Im Falle von Zahlungsproblemen muss eine Reklamation eingereicht werden:\r\n              <br>14.5.1. Der Kunde hat das Recht, innerhalb von 14 Tagen nach der Erstellung der Zahlung unter Vorlage des\r\n              Zahlungsnachweises eine Reklamation/Streitigkeit im Zusammenhang mit der Zahlung geltend zu machen, indem\r\n              er sich an den Support wendet. Anfragen, die nach 14 Tagen eingereicht werden, können nicht bearbeitet\r\n              werden.\r\n              <br>14.5.2. LIQUID MINING behält sich das Recht vor, einen Zahlungsnachweis anzufordern, wenn der Verdacht\r\n              besteht oder Tatsachen vorliegen, dass die Zahlung nicht eingegangen ist, der Vertrag aber aktiviert\r\n              wurde. Der Kunde ist verpflichtet, den Zahlungsnachweis innerhalb von 14 Tagen nach Erhalt einer solchen\r\n              Aufforderung zu erbringen.\r\n              <br>14.5.3. Der Zahlungsnachweis umfasst, ist aber nicht beschränkt auf: LIQUID MINING Auftragsnummer,\r\n              eindeutige Transaktions-ID oder -nummer, Zielkonto, überwiesener Betrag, Kontoauszug des verwendeten\r\n              Zahlungssystems.\r\n              <br>14.5.4. Bei Käufen mit Kreditkarte kann der Nachweis des Eigentums an der Zahlungsmethode und eine\r\n              Identifikationsanfrage erforderlich sein.\r\n              <br>14.5.5. Wenn der Zahlungsnachweis nicht innerhalb von 14 Tagen erbracht wird oder der erbrachte Nachweis\r\n              als unzureichend und/oder ungültig erachtet wird:\r\n              <br>14.5.5.1. wenn die Forderung von einem Kunden initiiert wurde: LIQUID MINING behält sich das Recht vor,\r\n              die Forderung(en) des Kunden abzulehnen;\r\n              <br>14.5.5.2. wenn der Anspruch von LIQUID MINING initiiert wurde: LIQUID MINING behält sich das Recht vor,\r\n              die entsprechenden Verträge anzupassen/zu kündigen und den Kontostand des Kunden um die durch den\r\n              entsprechenden Vertrag gewonnenen Beträge anzupassen.\r\n              <br>14.6. Sofern gesetzlich oder in einem bestimmten Angebot nicht anders vorgesehen, sind alle Käufe\r\n              endgültig und nicht erstattungsfähig. IQ behält sich das Recht vor, nach eigenem Ermessen Rückerstattungen\r\n              zu gewähren. Wenn wir eine Rückerstattung gewähren, sind wir nicht verpflichtet, die gleiche oder eine\r\n              ähnliche Rückerstattung in der Zukunft zu gewähren. Diese Rückerstattungspolitik berührt nicht die\r\n              gesetzlichen Rechte, die möglicherweise gelten.\r\n              <br>14.7. Im Falle einer Rückerstattung:\r\n              <br>14.8.1. Der Kunde erhält eine Rückerstattung der für den Start des Dienstes ausgegebenen Gelder, es sei\r\n              denn, es wurden Gelder vom Kontostand des Kunden abgehoben. Wenn ein Betrag erfolgreich vom Kontostand\r\n              abgehoben wurde, werden keine Rückerstattungsanträge für dieses Konto bearbeitet.\r\n              <br>14.9.2. LIQUID MINING hat das Recht, jegliche Hashrate und/oder Guthaben, die durch die Hashrate des\r\n              rückerstatteten Kaufs abgebaut wurden, vom Kontostand des Kunden zu annullieren oder abzuziehen, sowie\r\n              jegliches Guthaben, das als Empfehlungsbonus für den rückerstatteten Kauf bereitgestellt wurde, vom\r\n              Kontostand des Empfehlers abzuziehen.\r\n              <br>14.9.3. LIQUID MINING ist nicht verpflichtet, die für die Wartungs- und Stromgebühren aufgewendeten Mittel\r\n              zu erstatten.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              15. KOMMUNIKATION\r\n            </h2>\r\n            <p>\r\n              15.1. Die Website kann die Anzeige von Inhalten Dritter (\"Benutzerinhalte\") ermöglichen.\r\n              <br>15.2. Obwohl wir dazu nicht verpflichtet sind, können wir Benutzerinhalte entfernen oder ablehnen.\r\n              <br>15.3. Sie erklären sich damit einverstanden, dass wir alle von Ihnen an die Website übermittelten Inhalte\r\n              (\"Ihre Inhalte\") verarbeiten und speichern dürfen.\r\n              <br>15.4. Sie können Ihre Inhalte an andere Miner der Website senden, und andere Miner der Website können\r\n              Benutzerinhalte an Sie senden.\r\n              <br>15.5. Sie erklären sich damit einverstanden, dass wir Ihre Inhalte sowohl intern als auch extern\r\n              verbreiten. Daher sollten Sie sicherstellen, dass Ihre Inhalte keine Informationen enthalten, die Sie\r\n              vertraulich oder privat halten wollen.\r\n              <br>15.6. Indem Sie Ihre Inhalte auf der Website zur Verfügung stellen, veröffentlichen oder übermitteln,\r\n              gewähren Sie uns eine nicht exklusive, übertragbare, unterlizenzierbare, gebührenfreie, unwiderrufliche,\r\n              unbefristete, weltweite Lizenz zur Nutzung und Verwertung Ihrer Inhalte für jeden Zweck.\r\n              <br>15.7. Sie erklären sich damit einverstanden, dass Sie berechtigt sind, Ihre Inhalte auf der Website zur\r\n              Verfügung zu stellen, zu veröffentlichen oder zu übertragen.\r\n              <br>15.8. Sie werden auf der Website keine Aussagen, Materialien oder andere Inhalte zur Verfügung stellen,\r\n              veröffentlichen oder übertragen und die Website in keiner Weise nutzen, die:\r\n              <br>15.8.1. ungesetzlich ist oder eine zivil- oder strafrechtliche Haftung nach sich ziehen kann;\r\n              <br>15.8.2. das Urheberrecht oder andere geistige Eigentumsrechte Dritter verletzen;\r\n              <br>15.8.3. die Rechte Dritter auf Privatsphäre oder Publizität verletzen;\r\n              <br>15.8.4. einen Computervirus oder andere bösartige Software enthält;\r\n              <br>15.8.5. beleidigend, pornografisch, verleumderisch, diskriminierend oder obszön ist;\r\n              <br>15.8.6. eine andere Person belästigt;\r\n              <br>15.8.7. die Nutzung der Website durch einen anderen Nutzer beeinträchtigt;\r\n              <br>15.8.8. sich als ein Moderator, Administrator, Mitarbeiter oder eine andere mit IQ verbundene Person\r\n              ausgibt;\r\n              <br>15.8.9. die vertraulichen Informationen einer anderen Person enthält;\r\n              <br>15.8.10. bittet um Passwörter oder persönliche Informationen;\r\n              <br>15.8.11. Videos, Fotografien oder Bilder einer anderen Person ohne deren Zustimmung (oder im Falle von\r\n              Minderjährigen die des gesetzlichen Vertreters) enthält;\r\n              <br>15.8.12. eine andere Person ausbeutet;\r\n              <br>15.8.13. die wir für unangemessen halten; oder\r\n              <br>15.8.14. eine andere Person zu einer der oben genannten Handlungen ermutigt oder provoziert.\r\n              <br>15.9. Die Website kann Mittel bereitstellen, über die Sie mit uns kommunizieren können. Wir kommunizieren\r\n              mit Ihnen über die von Ihnen angegebene E-Mail-Adresse oder über andere Kommunikationsmittel, die auf der\r\n              Website zur Verfügung gestellt werden können. Mitteilungen, die für alle unsere Bergleute gelten, werden\r\n              auf der Website öffentlich zugänglich gemacht. Es wird davon ausgegangen, dass Sie eine Mitteilung zu dem\r\n              Zeitpunkt erhalten haben, zu dem die E-Mail gesendet oder die Mitteilung auf der Website veröffentlicht\r\n              wurde. Eine Mitteilung gilt als bei uns eingegangen, wenn wir eine Bestätigung an Sie ausstellen.\r\n              <br>15.10. Alle von uns gesendeten E-Mails (oder sonstigen Nachrichten) sind nur für den Empfänger bestimmt.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              16 . Vertraulichkeit\r\n            </h2>\r\n            <p>\r\n              16.1 Der Kunde darf keine Informationen weitergeben, die sich auf das Unternehmen beziehen,\r\n              einschließlich, aber nicht beschränkt auf Informationen über Konten, Operationen, Kunden des Unternehmens,\r\n              Konten, die für Kunden eröffnet wurden, Saldo und Operationen auf den Konten der Kunden und alle anderen\r\n              Informationen, die sich auf die Kunden des Unternehmens und ihre Aktivitäten beziehen, Informationen über\r\n              Aktionäre, Manager, Mitarbeiter des Unternehmens, seine verbundenen Unternehmen, Partner und\r\n              Auftragnehmer, alle Vereinbarungen, die zwischen dem Unternehmen und einer anderen Partei geschlossen\r\n              wurden, seine Projekte und Produkte, Marketingstrategien und -pläne, Finanzinformationen und -abrechnungen\r\n              und alle anderen Informationen, die nach geltendem Recht vernünftigerweise als vertraulich anerkannt\r\n              werden sollten.\r\n              <br>16.2 Im Falle einer erzwungenen Offenlegung der oben aufgeführten Informationen auf Verlangen von\r\n              Regierungs- und Regulierungsbehörden muss der Kunde das Unternehmen am Tag des Erhalts der entsprechenden\r\n              Aufforderung informieren.\r\n              <br>16.3 Im Falle einer unbefugten Offenlegung der vorgenannten Informationen oder eines sonstigen Verstoßes\r\n              gegen diese Vertraulichkeitsbestimmung durch den Kunden hat das Unternehmen das Recht, den Vertrag zu\r\n              kündigen und das Konto ohne vorherige Ankündigung und mit sofortiger Wirkung zu schließen.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              17. ALLGEMEINES\r\n            </h2>\r\n            <p>\r\n              17.1. Diese Nutzungsbedingungen unterliegen Ihren gesetzlichen und gewohnheitsrechtlichen\r\n              Verbraucherrechten und schränken keine Rechte ein, die Sie möglicherweise haben und die nach geltendem\r\n              Recht nicht ausgeschlossen werden können. Diese Nutzungsbedingungen schließen unsere Haftung für\r\n              Todesfälle oder Personenschäden, die auf unsere Fahrlässigkeit zurückzuführen sind, sowie für\r\n              betrügerische Handlungen oder Zusicherungen oder für jegliche gesetzliche Haftung, die nicht eingeschränkt\r\n              werden kann, weder aus noch beschränken sie diese.\r\n              <br>17.2. Wir können Gelder, die Sie uns schulden, von Geldern, die wir Ihnen schulden, abziehen.\r\n              <br>17.3. Diese Nutzungsbedingungen bilden zusammen mit den Nutzungsbedingungen, der Datenschutzrichtlinie und\r\n              allen Anweisungen, Anleitungen und ähnlichen Informationen, die (von Zeit zu Zeit) auf der Website zu\r\n              finden sind, die gesamte Vereinbarung zwischen Ihnen und IQ in Bezug auf Ihre Nutzung der Website und des\r\n              Dienstes und des Bergbaus über die Website oder den Dienst, unter Ausschluss aller anderen Bedingungen.\r\n              <br>17.4. Unser Versäumnis, eine Bedingung durchzusetzen, stellt keinen Verzicht auf diese Bedingung dar.\r\n              <br>17.5. Sollte sich ein Teil dieser Bedingungen als nicht durchsetzbar erweisen, wird er so weit abgeändert,\r\n              wie es für seine Durchsetzbarkeit erforderlich ist, und die übrigen Bestimmungen bleiben in vollem Umfang\r\n              in Kraft und wirksam.\r\n              <br>17.6. Es wird keine Zusicherung oder Garantie dafür gegeben, dass die Website oder der Dienst mit den\r\n              Gesetzen einer anderen Rechtsordnung als der des Vereinigten Königreichs übereinstimmt.\r\n              <br>17.7. Die Parteien unterwerfen sich der ausschließlichen Zuständigkeit der britischen Gerichte. Diese\r\n              Nutzungsbedingungen unterliegen den Gesetzen des Vereinigten Königreichs und werden in Übereinstimmung mit\r\n              diesen ausgelegt, mit der Maßgabe, dass diese Nutzungsbedingungen nicht so ausgelegt werden dürfen, dass\r\n              sie einer Person, die ihren gewöhnlichen Wohnsitz nicht in einem EU-Mitgliedstaat hat, gesetzliche\r\n              EU-Verbraucherschutzgesetze, einschließlich etwaiger Rücktritts- oder Widerrufsrechte gemäß der Umsetzung\r\n              der Richtlinie 2011/83/EU über Verbraucherrechte, übertragen.\r\n              <br>17.8. Diese Website und das Panel sind in mehreren Sprachen verfügbar. Im Falle eines Konflikts zwischen\r\n              den Übersetzungen ist die englische Version maßgebend.\r\n              <br>17.9. IQ ist berechtigt, den durch diese Nutzungsbedingungen abgedeckten Vertrag abzutreten oder\r\n              anderweitig zu übertragen, indem es Ihnen eine angemessene Mitteilung macht, die auch eine Mitteilung über\r\n              die Website umfassen kann.\r\n              <br>17.10. Alle Fragen, Kommentare oder Beschwerden sollten über den Kundensupport an uns gerichtet werden,\r\n              und wir werden versuchen, innerhalb von 48 Stunden zu antworten.\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h2>\r\n              18. PLEDGING\r\n            </h2>\r\n            <p>\r\n              18.1. Bei der Verpfändung eines Kontrakts erhalten Sie den Restwert des Kontrakts auf Ihr Handelskonto,\r\n              abhängig von der Anzahl der verbleibenden Tage des Kontrakts.\r\n              <br>18.2. Bei der Verpfändung von mindestens einem der Kontrakte werden alle Abhebungen vom Konto nicht mehr\r\n              möglich.\r\n              <br>18.3. Sie können eine beliebige Anzahl von Verträgen und in beliebiger Höhe verpfänden.\r\n              <br>18.4. Die Rückzahlung des verpfändeten Vertrags kann jederzeit vom Vertragskonto in Höhe des verpfändeten\r\n              Betrags erfolgen.\r\n              <br>18.5. Die Verpfändung von Verträgen ist ein zusätzlicher Service von LIQUID MINING, dessen Nutzung\r\n              optional ist.\r\n\r\n            </p>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/withdraw/withdraw.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsWithdrawWithdrawComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"sections pt-50 pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-6\">\r\n                <h1 class=\"fw-bold text-yellow \">{{'withdrawal.withdrawal' | translate}}</h1>\r\n                <!-- <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing\r\n                    and typesetting industry. Lorem Ipsum has been\r\n                    the industry's standard dummy text ever since\r\n                    the 1500s, when an unknown printerrem Ipsum has been\r\n                    the industry's standard dummy text ever since\r\n                    the 1500s, when an unknown printer took a\r\n                    galley of type and scrambled it to make a type\r\n                    specimen book.</p> -->\r\n            </div>\r\n            <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/images/withdrawal_img.png\" height=\"300\" class=\"mw-100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"sections pt-50 pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9 mx-auto text-center mb-5\">\r\n                <!-- <h1 class=\"fw-bold text-yellow \">Lorem Ipsum Dolor Sit</h1>\r\n                <p class=\"text-white mt-4\">Lorem Ipsum is simply dummy text of the printing\r\n                    and typesetting industry. Lorem Ipsum has been\r\n                    the industry's standard dummy text ever since\r\n                    the 1500s, when an unknown printerr</p> -->\r\n            </div>\r\n            <div class=\"stepedbar mb-5 \">\r\n                <span>1</span>\r\n                <div class=\"line\"></div>\r\n                <span>2</span>\r\n                <div class=\"line\"></div>\r\n                <span>3</span>\r\n            </div>\r\n\r\n\r\n            <h5 class=\"fw-bold text-yellow text-center\"></h5>\r\n            <div class=\"col-md-6 mx-auto my-3\">\r\n                <!-- <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex align-items-center\">\r\n                            <div class=\"flex-grow-1\">\r\n                                <small class=\"text-white\">SHA-256</small>\r\n                                <p class=\"text-yellow mb-0 mt-3\">0.0000000BTC</p>\r\n                            </div>\r\n\r\n                            <div class=\"text-right\">\r\n                                <small class=\"text-white\">ID :-</small>\r\n                                <p class=\"text-yellow mb-0 mt-3\">0.00000 GH/s</p>\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <img height=\"12\" src=\"assets/images/yellow_triangle.png\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex my-5 align-items-center justify-content-between\">\r\n                    <p class=\"mb-0 text-white\">Your Available Balance is:</p>\r\n                    <h4 class=\"text-success mb-0\">0.00000BTC</h4>\r\n                </div> -->\r\n\r\n                <div class=\"d-flex mb-4 justify-content-between\">\r\n                    <!-- <div>\r\n                        <p class=\"mb-0 text-white\">Don't have a Transcrypt.eu account?</p>\r\n                        <a href=\"#\" class=\"text-primary\">Open a free wallet now</a>\r\n                        \r\n                    </div> -->\r\n                    <div class=\"form-group mb-1\">\r\n                        <label style=\"width: 170%;\" class=\"form-remember\">\r\n                            <input style=\"background: #fff; margin-bottom: 5px;\" type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"btcAddress\" placeholder=\"{{'withdraw.enter_your_btc_address' | translate }}\" />\r\n\r\n                        </label>\r\n                        <label class=\"d-block\" for=\"balance\" style=\"color: #ccc\">{{'withdrawal.total_bal' | translate}}: {{userBalance}}</label>\r\n                    </div>\r\n                    <div style=\"margin-bottom: 5px;\">\r\n                        <button class=\"btn btn-yellow\" (click)=\"submitWithdraw()\">{{'withdrawal.withdraw' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"header-card p-md-4 p-3\">\r\n                        <h4 class=\"text-yellow mb-0 text-center\">{{'withdrawal.withdrawal_history' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"p-3 bg-white\">\r\n                        <div *ngIf=\"withdrawHistory?.length\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th scope=\"col\">Status</th>\r\n                                    <th scope=\"col\">Name</th>\r\n                                    <th scope=\"col\">{{'withdrawal.amount' | translate}}</th>\r\n                                    <th scope=\"col\">{{'withdrawal.address' | translate}}</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let withdraw of withdrawHistory | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n                                    <th scope=\"row\">{{withdraw.status}}</th>\r\n                                    <td>{{withdraw?.user?.firstName}} {{withdraw?.user?.lastName}}</td>\r\n                                    <td>{{withdraw?.amount}}</td>\r\n                                    <td [title]=\"withdraw.address\">{{withdraw?.address}}</td>\r\n                                  </tr>\r\n                                  \r\n                                </tbody>\r\n                              </table>\r\n                              <pagination-controls (pageChange)=\"getWithdraw($event)\"></pagination-controls>\r\n                        </div>\r\n                        <h4 class=\"text-muted text-center py-5\" *ngIf=\"!withdrawHistory || !withdrawHistory.length\">{{'withdrawal.no_history' | translate}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./guards/admin.guard */
    "./src/app/guards/admin.guard.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/user.guard */
    "./src/app/guards/user.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/login/login.module */
        "./src/app/modules/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/dashboard/dashboard.module */
        "./src/app/modules/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      },
      canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/profile/profile.module */
        "./src/app/modules/profile/profile.module.ts")).then(function (m) {
          return m.ProfileModule;
        });
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-admin-admin-module */
        "modules-admin-admin-module").then(__webpack_require__.bind(null,
        /*! ./modules/admin/admin.module */
        "./src/app/modules/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      },
      canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent(router) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.router = router;
      this.title = 'liquid-mining';
      this.showfooter = true;
      this.router.events.subscribe(function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
          // Show loading indicator
          if (['/auth/login', '/auth/register', '/auth/forgot-password'].includes(event.url)) {
            _this.showfooter = false;
          } else {
            _this.showfooter = true;
          }
        }

        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {// Hide loading indicator
        }

        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
        }
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules */
    "./src/app/modules/index.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./interceptors/token.interceptor */
    "./src/app/interceptors/token.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
        }
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _modules__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderRouterModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderHttpModule"].forRoot({
        showForeground: true
      })],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbActiveModal"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      exports: []
    })], AppModule); // required for AOT compilation

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
    }
    /***/

  },

  /***/
  "./src/app/components/about/about.component.scss": function srcAppComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".aboutbg {\n  position: relative;\n  background-image: url('about_corner.png'), url('planet_earth_bg.png');\n  background-size: 50%, cover;\n  background-position: top left, bottom center;\n  background-repeat: no-repeat;\n  padding-bottom: 140px;\n}\n\n.fancypres {\n  position: relative;\n  padding-left: 90px;\n}\n\n.fancypres span.count {\n  left: 0;\n  font-weight: 900;\n  position: absolute;\n  font-size: 100px;\n  opacity: 0.1;\n}\n\n.fancypres h3 {\n  font-weight: 900;\n}\n\n.iconinput {\n  position: relative;\n}\n\n.iconinput .roundinput {\n  background: #141c33;\n  border-width: 0px;\n  padding: 13px;\n  width: 100%;\n  border-radius: 25px;\n  color: #fff;\n}\n\n.iconinput img {\n  position: absolute;\n  right: 15px;\n  top: 12px;\n}\n\n.contactbg {\n  background-image: url('contactFormBg.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7QUNHUjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FERkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURGSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNJUjs7QURBQTtFQUNJLDBDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0Ymcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0X2Nvcm5lci5wbmcnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BsYW5ldF9lYXJ0aF9iZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlLCBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0LCBib3R0b20gY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNDBweDtcclxufVxyXG4uZmFuY3lwcmVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHNwYW4uY291bnQge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxufVxyXG4uaWNvbmlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5yb3VuZGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxYzMzO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3RiZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdEZvcm1CZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCIuYWJvdXRiZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dF9jb3JuZXIucG5nXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BsYW5ldF9lYXJ0aF9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlLCBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQsIGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNDBweDtcbn1cblxuLmZhbmN5cHJlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xufVxuLmZhbmN5cHJlcyBzcGFuLmNvdW50IHtcbiAgbGVmdDogMDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjE7XG59XG4uZmFuY3lwcmVzIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmljb25pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pY29uaW5wdXQgLnJvdW5kaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjMTQxYzMzO1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmljb25pbnB1dCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEycHg7XG59XG5cbi5jb250YWN0Ymcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3RGb3JtQmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts": function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(utilityService, router) {
        _classCallCheck(this, AboutComponent);

        this.utilityService = utilityService;
        this.router = router;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToBuyMore",
        value: function navigateToBuyMore() {
          this.utilityService.setViewPort('buy-now');
          this.router.navigate(['/home']);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/account/account.component.scss": function srcAppComponentsAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-block {\n  display: block;\n}\n\n.white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSIsIi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/account/account.component.ts": function srcAppComponentsAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(restfulService, toastService) {
        _classCallCheck(this, AccountComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.profile = {
          files: ['', '']
        };
        this.passwords = {};
        this.allFiles = [];
        this.page = 1;
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMyPackages();
          this.getMyProfile();
        }
      }, {
        key: "getMyPackages",
        value: function getMyPackages(page) {
          var _this2 = this;

          this.page = page || 1;
          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.myPackages + "?page=".concat(this.page, "&take=10")).subscribe(function (res) {
            _this2.packages = res.data.data;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (this.allFiles.length) {
            this.allFiles[0] = this.allFiles[0] ? this.allFiles[0] : '';
            this.profile.files = this.allFiles;
          }

          this.restfulService.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.updateUser, this.profile).subscribe(function (res) {
            if (res.success) {
              _this3.toastService.success(res.message, 'Success!');

              _this3.getMyProfile();
            }
          }, function (err) {
            _this3.toastService.error(err.error.message, 'Error!');
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(whichComponent) {
          if (whichComponent == 'passport') document.getElementById('passport-file').click();else document.getElementById('verification-file').click();
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(e, whichFile) {
          var _this4 = this;

          console.log(e, whichFile);
          var file = e.target.files[0];
          var fileSize = file.size / 1024;

          if (fileSize > 10000) {
            this.toastService.error('Please select a file with maximum size of 10MB', 'Error!');
            return;
          }

          var formData = new FormData();
          formData.append('files', file);
          this.restfulService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.uploadFile, formData).subscribe(function (res) {
            if (res.success) {
              _this4.toastService.success(res.message, 'Success!');

              if (whichFile == 'passport') {
                _this4.allFiles[0] = res.data[0].file;
              } else _this4.allFiles[1] = res.data[0].file;
            }
          }, function (err) {
            _this4.toastService.error(err.error.message, 'Error!');
          });
        }
      }, {
        key: "getMyProfile",
        value: function getMyProfile() {
          var _this5 = this;

          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.myProfile).subscribe(function (res) {
            _this5.profile = res.data;
            _this5.profile.files = _this5.profile.files && _this5.profile.files.length ? _this5.profile.files : [];
            _this5.allFiles = _this5.profile.files;
          }, function (err) {
            _this5.toastService.error(err.error.message);
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this6 = this;

          if (this.passwords.password != this.passwords.confirmPassword) {
            this.toastService.error('New password and confirm password dont match', 'Error!');
            return;
          }

          this.restfulService.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.changePassword, {
            password: this.passwords.password
          }).subscribe(function (res) {
            if (res.success) {
              _this6.passwords = {};

              _this6.toastService.success(res.message, 'Success!');
            }
          }, function (err) {
            _this6.passwords = {};

            _this6.toastService.error(err.error.message, 'Error!');
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]
      }];
    };

    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.scss */
      "./src/app/components/account/account.component.scss"))["default"]]
    })], AccountComponent);
    /***/
  },

  /***/
  "./src/app/components/admin-purchase/admin-purchase.component.scss": function srcAppComponentsAdminPurchaseAdminPurchaseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcHVyY2hhc2UvYWRtaW4tcHVyY2hhc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin-purchase/admin-purchase.component.ts": function srcAppComponentsAdminPurchaseAdminPurchaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPurchaseComponent", function () {
      return AdminPurchaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/restful/restful.service */
    "./src/app/services/restful/restful.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminPurchaseComponent = /*#__PURE__*/function () {
      function AdminPurchaseComponent(restfulService) {
        _classCallCheck(this, AdminPurchaseComponent);

        this.restfulService = restfulService;
        this.page = 1;
      }

      _createClass(AdminPurchaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPurchaseList();
        }
      }, {
        key: "getPurchaseList",
        value: function getPurchaseList(page) {
          var _this7 = this;

          this.page = page || 1;
          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.adminPurchase + "?page=".concat(this.page, "&take=10&order=DESC&sortBy=createdAt&status=ACTIVE")).subscribe(function (res) {
            _this7.packages = res.data.data;
          });
        }
      }]);

      return AdminPurchaseComponent;
    }();

    AdminPurchaseComponent.ctorParameters = function () {
      return [{
        type: _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]
      }];
    };

    AdminPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-admin-purchase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-purchase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-purchase/admin-purchase.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-purchase.component.scss */
      "./src/app/components/admin-purchase/admin-purchase.component.scss"))["default"]]
    })], AdminPurchaseComponent);
    /***/
  },

  /***/
  "./src/app/components/admin-users/admin-users.component.scss": function srcAppComponentsAdminUsersAdminUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".green {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW4tdXNlcnNcXGFkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59IiwiLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin-users/admin-users.component.ts": function srcAppComponentsAdminUsersAdminUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () {
      return AdminUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/restful/restful.service */
    "./src/app/services/restful/restful.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsersComponent = /*#__PURE__*/function () {
      function AdminUsersComponent(restfulService) {
        _classCallCheck(this, AdminUsersComponent);

        this.restfulService = restfulService;
      }

      _createClass(AdminUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this8 = this;

          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.adminUsers).subscribe(function (res) {
            _this8.users = res.data.data;
          });
        }
      }]);

      return AdminUsersComponent;
    }();

    AdminUsersComponent.ctorParameters = function () {
      return [{
        type: _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]
      }];
    };

    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-admin-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-users/admin-users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-users.component.scss */
      "./src/app/components/admin-users/admin-users.component.scss"))["default"]]
    })], AdminUsersComponent);
    /***/
  },

  /***/
  "./src/app/components/admin-withdraw/admin-withdraw.component.scss": function srcAppComponentsAdminWithdrawAdminWithdrawComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi13aXRoZHJhdy9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW4td2l0aGRyYXdcXGFkbWluLXdpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLXdpdGhkcmF3L2FkbWluLXdpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4td2l0aGRyYXcvYWRtaW4td2l0aGRyYXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5tci0xMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn0iLCIucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubXItMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/admin-withdraw/admin-withdraw.component.ts": function srcAppComponentsAdminWithdrawAdminWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminWithdrawComponent", function () {
      return AdminWithdrawComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/toaster/toaster.service */
    "./src/app/services/toaster/toaster.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminWithdrawComponent = /*#__PURE__*/function () {
      function AdminWithdrawComponent(restfulService, toasterService) {
        _classCallCheck(this, AdminWithdrawComponent);

        this.restfulService = restfulService;
        this.toasterService = toasterService;
      }

      _createClass(AdminWithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWithdrawList();
        }
      }, {
        key: "getWithdrawList",
        value: function getWithdrawList(page) {
          var _this9 = this;

          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.adminWithdraw).subscribe(function (res) {
            _this9.withdrawList = res.data.data;
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(status, withdraw) {
          var _this10 = this;

          this.restfulService.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.updateWithdraw + "/".concat(withdraw.id), {
            status: status
          }).subscribe(function (res) {
            _this10.getWithdrawList();

            _this10.toasterService.success(res.message, 'Success!');
          }, function (err) {
            _this10.toasterService.error(err.error.message, 'Error!');
          });
        }
      }]);

      return AdminWithdrawComponent;
    }();

    AdminWithdrawComponent.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }];
    };

    AdminWithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-admin-withdraw',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-withdraw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-withdraw/admin-withdraw.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-withdraw.component.scss */
      "./src/app/components/admin-withdraw/admin-withdraw.component.scss"))["default"]]
    })], AdminWithdrawComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/forgot-password/forgot-password.component.scss": function srcAppComponentsAuthForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  line-height: 1.6em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.overlay, .form-panel.one:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n}\n\n.form {\n  z-index: 15;\n  position: relative;\n  background: #FFFFFF;\n  width: 600px;\n  border-radius: 4px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  margin: 100px auto 10px;\n  overflow: hidden;\n}\n\n.form-toggle {\n  z-index: 10;\n  position: absolute;\n  top: 60px;\n  right: 60px;\n  background: #FFFFFF;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  transform-origin: center;\n  transform: translate(0, -25%) scale(0);\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.form-toggle:before, .form-toggle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 4px;\n  background: #4285F4;\n  transform: translate(-50%, -50%);\n}\n\n.form-toggle:before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.form-toggle:after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.form-toggle.visible {\n  transform: translate(0, -25%) scale(1);\n  opacity: 1;\n}\n\n.form-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 0 20px;\n}\n\n.form-group:last-child {\n  margin: 0;\n}\n\n.form-group label {\n  display: block;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n}\n\n.two .form-group label {\n  color: #FFFFFF;\n}\n\n.form-group input {\n  outline: none;\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  transition: 0.3s ease;\n}\n\n.form-group input:focus {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.two .form-group input {\n  color: #FFFFFF;\n}\n\n.two .form-group input:focus {\n  color: #FFFFFF;\n}\n\n.form-group button {\n  outline: none;\n  background: #4285F4;\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  padding: 12px 20px;\n  color: #FFFFFF;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.two .form-group button {\n  background: #FFFFFF;\n  color: #4285F4;\n}\n\n.form-group .form-remember {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.form-group .form-remember input[type=checkbox] {\n  display: inline-block;\n  width: auto;\n  margin: 0 10px 0 0;\n}\n\n.form-group .form-recovery {\n  color: #4285F4;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.form-panel {\n  padding: 60px;\n  box-sizing: border-box;\n}\n\n.form-panel.one:before {\n  content: \"\";\n  display: block;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s ease;\n}\n\n.form-panel.one.hidden:before {\n  display: block;\n  opacity: 1;\n  visibility: visible;\n}\n\n.form-panel.two {\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 95%;\n  background: #4285F4;\n  width: 100%;\n  min-height: 100%;\n  padding: 60px calc(10% + 60px) 60px 60px;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n\n.form-panel.two:before, .form-panel.two:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 60px;\n  left: 1.5%;\n  background: rgba(255, 255, 255, 0.2);\n  height: 30px;\n  width: 2px;\n  transition: 0.3s ease;\n}\n\n.form-panel.two:after {\n  left: 3%;\n}\n\n.form-panel.two:hover {\n  left: 93%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-panel.two:hover:before, .form-panel.two:hover:after {\n  opacity: 0;\n}\n\n.form-panel.two.active {\n  left: 10%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n\n.form-panel.two.active:before, .form-panel.two.active:after {\n  opacity: 0;\n}\n\n.form-header {\n  margin: 0 0 40px;\n}\n\n.form-header h1 {\n  padding: 4px 0;\n  color: #4285F4;\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.two .form-header h1 {\n  position: relative;\n  z-index: 40;\n  color: #FFFFFF;\n}\n\n.pen-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 600px;\n  margin: 20px auto 100px;\n}\n\n.pen-footer a {\n  color: #FFFFFF;\n  font-size: 12px;\n  text-decoration: none;\n  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.pen-footer a .material-icons {\n  width: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n  font-size: 12px;\n}\n\n.cp-fab {\n  background: #FFFFFF !important;\n  color: #4285F4 !important;\n}\n\nfooter {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXV0aFxcYXV0aC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSw0RkFBQTtFQUNBLHlCQWxCSztFQW1CTCxlQTFCZTtFQTJCZixrQkF6QmlCO0VBMEJqQixtQ0FBQTtFQUNBLGtDQUFBO0FDM0JGOztBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFuQ007RUFvQ04sWUFoQ1U7RUFpQ1Ysa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzNCRjs7QUQ4QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWpESTtFQWtESixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM1Qko7O0FEOEJJO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFuRUc7RUFvRUgsZ0NBQUE7QUM3Qk47O0FEZ0NJO0VBQ0UsOENBQUE7QUM5Qk47O0FEaUNJO0VBQ0UsK0NBQUE7QUMvQk47O0FEa0NJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0FDaENOOztBRG9DRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxTQUFBO0FDbENOOztBRHFDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQXRHQztFQXVHRCxlQUFBO0VBQ0EsZ0JBckhLO0VBc0hMLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDbkNOOztBRHFDTTtFQUNFLGNBM0dBO0FDd0VSOztBRHVDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTNIQztFQTRIRCxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBM0lLO0VBNElMLG9CQUFBO0VBQ0EscUJBQUE7QUNyQ047O0FEdUNNO0VBQ0UseUJBcElJO0FDK0ZaOztBRHdDTTtFQUNFLGNBcElBO0FDOEZSOztBRHdDUTtFQUNFLGNBdklGO0FDaUdSOztBRDJDSTtFQUNFLGFBQUE7RUFDQSxtQkE3SUc7RUE4SUgsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FuSkU7RUFvSkYsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQXRLSztFQXVLTCxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3pDTjs7QUQyQ007RUFDRSxtQkE1SkE7RUE2SkEsY0E1SkM7QUNtSFQ7O0FENkNJO0VBQ0UsZUFBQTtFQUNBLGdCQXBMSTtFQXFMSixpQkFBQTtFQUNBLG9CQUFBO0FDM0NOOztBRDZDTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDM0NSOztBRCtDSTtFQUNFLGNBOUtHO0VBK0tILGVBQUE7RUFDQSxxQkFBQTtBQzdDTjs7QURrREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNoREo7O0FEb0RNO0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ3BEUjs7QUR3RFE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDdERWOztBRDRESTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBcE5HO0VBcU5ILFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDMUROOztBRDRETTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQzNEUjs7QUQ4RE07RUFDRSxRQUFBO0FDNURSOztBRCtETTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtBQzdEUjs7QUQrRFE7RUFFRSxVQUFBO0FDOURWOztBRGtFTTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNoRVI7O0FEa0VRO0VBRUUsVUFBQTtBQ2pFVjs7QUR3RUU7RUFDRSxnQkFBQTtBQ3RFSjs7QUR3RUk7RUFDRSxjQUFBO0VBQ0EsY0F6UUc7RUEwUUgsZUFBQTtFQUNBLGdCQTNSQztFQTRSRCx5QkFBQTtBQ3RFTjs7QUR3RU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQWxSQTtBQzRNUjs7QURrRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBOVJVO0VBK1JWLHVCQUFBO0FDaEZGOztBRGtGRTtFQUNFLGNBdFNJO0VBdVNKLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FDaEZKOztBRGtGSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDaEZOOztBRHFGQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNsRkY7O0FEd0ZBO0VBQ0Usd0JBQUE7QUNyRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnQgV2VpZ2h0c1xyXG4kdGhpbjogMTAwO1xyXG4kbGlnaHQ6IDMwMDtcclxuJHJlZ3VsYXI6IDQwMDtcclxuJHNlbWlib2xkOiA1MDA7XHJcbiRib2xkOiA3MDA7XHJcbiR1bHRyYTogODAwO1xyXG5cclxuLy8gQmFzZSBGb250XHJcblxyXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XHJcbiRiYXNlLWZvbnQtd2VpZ2h0OiAkcmVndWxhcjtcclxuJGJhc2UtbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRibGFjazogIzAwMDAwMDtcclxuJGRhcmstZ3JheTogcmdiYSgkYmxhY2ssIDAuOCk7XHJcbiRncmF5OiByZ2JhKCRibGFjaywgMC42KTtcclxuJGxpZ2h0LWdyYXk6IHJnYmEoJGJsYWNrLCAwLjQpO1xyXG4kbGlnaHRlci1ncmF5OiByZ2JhKCRibGFjaywgMC4yKTtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYWNjZW50OiAjNDI4NUY0O1xyXG5cclxuLy8gRm9ybSBTZXR0aW5nc1xyXG4kbWF4LXdpZHRoOiA2MDBweDtcclxuJG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4kZ3V0dGVyczogMjRweDtcclxuXHJcbmh0bWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDY2LCAxODMsIDI0NSwgMC44KSAwJSwgcmdiYSg2NiwgMjQ1LCAxODksIDAuNCkgMTAwJSk7XHJcbiAgY29sb3I6ICRncmF5O1xyXG4gIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAkYmFzZS1saW5lLWhlaWdodDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgkYmxhY2ssIDAuOCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgei1pbmRleDogMTU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICB3aWR0aDogJG1heC13aWR0aDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgkYmxhY2ssIC4xKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMTAwcHggYXV0byAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC8vIFRvZ2dsZVxyXG4gICYtdG9nZ2xlIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgcmlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKSBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhY2NlbnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi52aXNpYmxlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSkgc2NhbGUoMSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRzZW1pYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuMmVtO1xyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkYmxhY2ssIDAuMSk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkc2VtaWJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogJGFjY2VudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkc2VtaWJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAudHdvICYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBjb2xvcjogJGFjY2VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLXJlbWVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogJHJlZ3VsYXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHJcbiAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1yZWNvdmVyeSB7XHJcbiAgICAgIGNvbG9yOiAkYWNjZW50O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFBhbmVsXHJcbiAgJi1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAvLyBQYW5lbCBPbmVcclxuICAgICYub25lIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIEBleHRlbmQgLm92ZXJsYXk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oaWRkZW4ge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFuZWwgVHdvXHJcbiAgICAmLnR3byB7XHJcbiAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiA5NSU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhY2NlbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA2MHB4IGNhbGMoMTAlICsgNjBweCkgNjBweCA2MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6YmVmb3JlLFxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGxlZnQ6IDEuNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkd2hpdGUsIDAuMik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiAzJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgbGVmdDogOTMlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoJGJsYWNrLCAwLjIpO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSGVhZGVyXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDAgNDBweDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICBjb2xvcjogJGFjY2VudDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAudHdvICYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA0MDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb250ZW50XHJcbiAgJi1jb250ZW50IHt9XHJcblxyXG4gICYtZm9vdGVyIHt9XHJcbn1cclxuXHJcbi8vIFBlbiBGb290ZXJcclxuLnBlbi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTAwcHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDAgcmdiYSgkYmxhY2ssIC4xKTtcclxuXHJcbiAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNwLWZhYiB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICRhY2NlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmZvcm0tZ3JvdXAge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNjYsIDE4MywgMjQ1LCAwLjgpIDAlLCByZ2JhKDY2LCAyNDUsIDE4OSwgMC40KSAxMDAlKTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ub3ZlcmxheSwgLmZvcm0tcGFuZWwub25lOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgei1pbmRleDogMTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZm9ybS10b2dnbGUge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpIHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZm9ybS10b2dnbGU6YmVmb3JlLCAuZm9ybS10b2dnbGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICM0Mjg1RjQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmZvcm0tdG9nZ2xlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uZm9ybS10b2dnbGU6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5mb3JtLXRvZ2dsZS52aXNpYmxlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSkgc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMCAyMHB4O1xufVxuLmZvcm0tZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbn1cbi50d28gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4udHdvIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udHdvIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1ncm91cCBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHdvIC5mb3JtLWdyb3VwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjNDI4NUY0O1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tcmVtZW1iZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLXJlbWVtYmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tcmVjb3Zlcnkge1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9ybS1wYW5lbCB7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZm9ybS1wYW5lbC5vbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLmZvcm0tcGFuZWwub25lLmhpZGRlbjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mb3JtLXBhbmVsLnR3byB7XG4gIHotaW5kZXg6IDU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA5NSU7XG4gIGJhY2tncm91bmQ6ICM0Mjg1RjQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IGNhbGMoMTAlICsgNjBweCkgNjBweCA2MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLXBhbmVsLnR3bzpiZWZvcmUsIC5mb3JtLXBhbmVsLnR3bzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMS41JTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAycHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbi5mb3JtLXBhbmVsLnR3bzphZnRlciB7XG4gIGxlZnQ6IDMlO1xufVxuLmZvcm0tcGFuZWwudHdvOmhvdmVyIHtcbiAgbGVmdDogOTMlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZm9ybS1wYW5lbC50d286aG92ZXI6YmVmb3JlLCAuZm9ybS1wYW5lbC50d286aG92ZXI6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLmZvcm0tcGFuZWwudHdvLmFjdGl2ZSB7XG4gIGxlZnQ6IDEwJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZm9ybS1wYW5lbC50d28uYWN0aXZlOmJlZm9yZSwgLmZvcm0tcGFuZWwudHdvLmFjdGl2ZTphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uZm9ybS1oZWFkZXIge1xuICBtYXJnaW46IDAgMCA0MHB4O1xufVxuLmZvcm0taGVhZGVyIGgxIHtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGNvbG9yOiAjNDI4NUY0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udHdvIC5mb3JtLWhlYWRlciBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnBlbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTAwcHg7XG59XG4ucGVuLWZvb3RlciBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5wZW4tZm9vdGVyIGEgLm1hdGVyaWFsLWljb25zIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNwLWZhYiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0Mjg1RjQgIWltcG9ydGFudDtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/auth/forgot-password/forgot-password.component.ts": function srcAppComponentsAuthForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(restfulService, toastService, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.router = router;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgot",
        value: function forgot() {
          var _this11 = this;

          if (!this.email || !this.email.length) {
            this.toastService.error('Please enter your email id', 'Error');
            return;
          }

          this.restfulService.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.forgotPassword, {
            email: this.email.toLowerCase()
          }).subscribe(function (res) {
            _this11.toastService.success(res.message, 'Success!');

            _this11.email = '';
          }, function (err) {
            _this11.toastService.error(err.error.message, 'Error!');
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/components/auth/forgot-password/forgot-password.component.scss"))["default"]]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/login/login.component.scss": function srcAppComponentsAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  line-height: 1.6em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.overlay, .form-panel.one:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n}\n\n.form {\n  z-index: 15;\n  position: relative;\n  background: #FFFFFF;\n  width: 600px;\n  border-radius: 4px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  margin: 100px auto 10px;\n  overflow: hidden;\n}\n\n.form-toggle {\n  z-index: 10;\n  position: absolute;\n  top: 60px;\n  right: 60px;\n  background: #FFFFFF;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  transform-origin: center;\n  transform: translate(0, -25%) scale(0);\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.form-toggle:before, .form-toggle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 4px;\n  background: #4285F4;\n  transform: translate(-50%, -50%);\n}\n\n.form-toggle:before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.form-toggle:after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.form-toggle.visible {\n  transform: translate(0, -25%) scale(1);\n  opacity: 1;\n}\n\n.form-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 0 20px;\n}\n\n.form-group:last-child {\n  margin: 0;\n}\n\n.form-group label {\n  display: block;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n}\n\n.two .form-group label {\n  color: #FFFFFF;\n}\n\n.form-group input {\n  outline: none;\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  transition: 0.3s ease;\n}\n\n.form-group input:focus {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.two .form-group input {\n  color: #FFFFFF;\n}\n\n.two .form-group input:focus {\n  color: #FFFFFF;\n}\n\n.form-group button {\n  outline: none;\n  background: #4285F4;\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  padding: 12px 20px;\n  color: #FFFFFF;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.two .form-group button {\n  background: #FFFFFF;\n  color: #4285F4;\n}\n\n.form-group .form-remember {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.form-group .form-remember input[type=checkbox] {\n  display: inline-block;\n  width: auto;\n  margin: 0 10px 0 0;\n}\n\n.form-group .form-recovery {\n  color: #4285F4;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.form-panel {\n  padding: 60px;\n  box-sizing: border-box;\n}\n\n.form-panel.one:before {\n  content: \"\";\n  display: block;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s ease;\n}\n\n.form-panel.one.hidden:before {\n  display: block;\n  opacity: 1;\n  visibility: visible;\n}\n\n.form-panel.two {\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 95%;\n  background: #4285F4;\n  width: 100%;\n  min-height: 100%;\n  padding: 60px calc(10% + 60px) 60px 60px;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n\n.form-panel.two:before, .form-panel.two:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 60px;\n  left: 1.5%;\n  background: rgba(255, 255, 255, 0.2);\n  height: 30px;\n  width: 2px;\n  transition: 0.3s ease;\n}\n\n.form-panel.two:after {\n  left: 3%;\n}\n\n.form-panel.two:hover {\n  left: 93%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-panel.two:hover:before, .form-panel.two:hover:after {\n  opacity: 0;\n}\n\n.form-panel.two.active {\n  left: 10%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n\n.form-panel.two.active:before, .form-panel.two.active:after {\n  opacity: 0;\n}\n\n.form-header {\n  margin: 0 0 40px;\n}\n\n.form-header h1 {\n  padding: 4px 0;\n  color: #4285F4;\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.two .form-header h1 {\n  position: relative;\n  z-index: 40;\n  color: #FFFFFF;\n}\n\n.pen-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 600px;\n  margin: 20px auto 100px;\n}\n\n.pen-footer a {\n  color: #FFFFFF;\n  font-size: 12px;\n  text-decoration: none;\n  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.pen-footer a .material-icons {\n  width: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n  font-size: 12px;\n}\n\n.cp-fab {\n  background: #FFFFFF !important;\n  color: #4285F4 !important;\n}\n\nfooter {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRoXFxhdXRoLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSw0RkFBQTtFQUNBLHlCQWxCSztFQW1CTCxlQTFCZTtFQTJCZixrQkF6QmlCO0VBMEJqQixtQ0FBQTtFQUNBLGtDQUFBO0FDM0JGOztBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFuQ007RUFvQ04sWUFoQ1U7RUFpQ1Ysa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzNCRjs7QUQ4QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWpESTtFQWtESixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM1Qko7O0FEOEJJO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFuRUc7RUFvRUgsZ0NBQUE7QUM3Qk47O0FEZ0NJO0VBQ0UsOENBQUE7QUM5Qk47O0FEaUNJO0VBQ0UsK0NBQUE7QUMvQk47O0FEa0NJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0FDaENOOztBRG9DRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxTQUFBO0FDbENOOztBRHFDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQXRHQztFQXVHRCxlQUFBO0VBQ0EsZ0JBckhLO0VBc0hMLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDbkNOOztBRHFDTTtFQUNFLGNBM0dBO0FDd0VSOztBRHVDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTNIQztFQTRIRCxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBM0lLO0VBNElMLG9CQUFBO0VBQ0EscUJBQUE7QUNyQ047O0FEdUNNO0VBQ0UseUJBcElJO0FDK0ZaOztBRHdDTTtFQUNFLGNBcElBO0FDOEZSOztBRHdDUTtFQUNFLGNBdklGO0FDaUdSOztBRDJDSTtFQUNFLGFBQUE7RUFDQSxtQkE3SUc7RUE4SUgsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FuSkU7RUFvSkYsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQXRLSztFQXVLTCxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3pDTjs7QUQyQ007RUFDRSxtQkE1SkE7RUE2SkEsY0E1SkM7QUNtSFQ7O0FENkNJO0VBQ0UsZUFBQTtFQUNBLGdCQXBMSTtFQXFMSixpQkFBQTtFQUNBLG9CQUFBO0FDM0NOOztBRDZDTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDM0NSOztBRCtDSTtFQUNFLGNBOUtHO0VBK0tILGVBQUE7RUFDQSxxQkFBQTtBQzdDTjs7QURrREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNoREo7O0FEb0RNO0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ3BEUjs7QUR3RFE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDdERWOztBRDRESTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBcE5HO0VBcU5ILFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDMUROOztBRDRETTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQzNEUjs7QUQ4RE07RUFDRSxRQUFBO0FDNURSOztBRCtETTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtBQzdEUjs7QUQrRFE7RUFFRSxVQUFBO0FDOURWOztBRGtFTTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNoRVI7O0FEa0VRO0VBRUUsVUFBQTtBQ2pFVjs7QUR3RUU7RUFDRSxnQkFBQTtBQ3RFSjs7QUR3RUk7RUFDRSxjQUFBO0VBQ0EsY0F6UUc7RUEwUUgsZUFBQTtFQUNBLGdCQTNSQztFQTRSRCx5QkFBQTtBQ3RFTjs7QUR3RU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQWxSQTtBQzRNUjs7QURrRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBOVJVO0VBK1JWLHVCQUFBO0FDaEZGOztBRGtGRTtFQUNFLGNBdFNJO0VBdVNKLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FDaEZKOztBRGtGSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDaEZOOztBRHFGQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNsRkY7O0FEd0ZBO0VBQ0Usd0JBQUE7QUNyRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250IFdlaWdodHNcclxuJHRoaW46IDEwMDtcclxuJGxpZ2h0OiAzMDA7XHJcbiRyZWd1bGFyOiA0MDA7XHJcbiRzZW1pYm9sZDogNTAwO1xyXG4kYm9sZDogNzAwO1xyXG4kdWx0cmE6IDgwMDtcclxuXHJcbi8vIEJhc2UgRm9udFxyXG5cclxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xyXG4kYmFzZS1mb250LXdlaWdodDogJHJlZ3VsYXI7XHJcbiRiYXNlLWxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuXHJcbi8vIENvbG9yc1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRkYXJrLWdyYXk6IHJnYmEoJGJsYWNrLCAwLjgpO1xyXG4kZ3JheTogcmdiYSgkYmxhY2ssIDAuNik7XHJcbiRsaWdodC1ncmF5OiByZ2JhKCRibGFjaywgMC40KTtcclxuJGxpZ2h0ZXItZ3JheTogcmdiYSgkYmxhY2ssIDAuMik7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGFjY2VudDogIzQyODVGNDtcclxuXHJcbi8vIEZvcm0gU2V0dGluZ3NcclxuJG1heC13aWR0aDogNjAwcHg7XHJcbiRtYXgtaGVpZ2h0OiA0MDBweDtcclxuJGd1dHRlcnM6IDI0cHg7XHJcblxyXG5odG1sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2NiwgMTgzLCAyNDUsIDAuOCkgMCUsIHJnYmEoNjYsIDI0NSwgMTg5LCAwLjQpIDEwMCUpO1xyXG4gIGNvbG9yOiAkZ3JheTtcclxuICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcclxuICBsaW5lLWhlaWdodDogJGJhc2UtbGluZS1oZWlnaHQ7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAwLjgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIHotaW5kZXg6IDE1O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDEwMHB4IGF1dG8gMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAvLyBUb2dnbGVcclxuICAmLXRvZ2dsZSB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWNjZW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYudmlzaWJsZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpIHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkc2VtaWJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcclxuXHJcbiAgICAgIC50d28gJiB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogJHNlbWlib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50d28gJiB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhY2NlbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogJHNlbWlib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1yZW1lbWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRyZWd1bGFyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tcmVjb3Zlcnkge1xyXG4gICAgICBjb2xvcjogJGFjY2VudDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQYW5lbFxyXG4gICYtcGFuZWwge1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgLy8gUGFuZWwgT25lXHJcbiAgICAmLm9uZSB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBAZXh0ZW5kIC5vdmVybGF5O1xyXG5cclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhbmVsIFR3b1xyXG4gICAgJi50d28ge1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogOTUlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWNjZW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNjBweCBjYWxjKDEwJSArIDYwcHgpIDYwcHggNjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmJlZm9yZSxcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAxLjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwLjIpO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGxlZnQ6IDkzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRibGFjaywgMC4yKTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRibGFjaywgMC4yKTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEhlYWRlclxyXG4gICYtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgY29sb3I6ICRhY2NlbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogNDA7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudFxyXG4gICYtY29udGVudCB7fVxyXG5cclxuICAmLWZvb3RlciB7fVxyXG59XHJcblxyXG4vLyBQZW4gRm9vdGVyXHJcbi5wZW4tZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDEwMHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwIHJnYmEoJGJsYWNrLCAuMSk7XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jcC1mYWIge1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkYWNjZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5mb3JtLWdyb3VwIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyB9XHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDY2LCAxODMsIDI0NSwgMC44KSAwJSwgcmdiYSg2NiwgMjQ1LCAxODksIDAuNCkgMTAwJSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLm92ZXJsYXksIC5mb3JtLXBhbmVsLm9uZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybSB7XG4gIHotaW5kZXg6IDE1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMTAwcHggYXV0byAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZvcm0tdG9nZ2xlIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKSBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmZvcm0tdG9nZ2xlOmJlZm9yZSwgLmZvcm0tdG9nZ2xlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5mb3JtLXRvZ2dsZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLmZvcm0tdG9nZ2xlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG4uZm9ybS10b2dnbGUudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpIHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cbi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG4udHdvIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLnR3byAuZm9ybS1ncm91cCBpbnB1dCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnR3byAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzQyODVGNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnR3byAuZm9ybS1ncm91cCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzQyODVGNDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLXJlbWVtYmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1yZW1lbWJlciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLXJlY292ZXJ5IHtcbiAgY29sb3I6ICM0Mjg1RjQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvcm0tcGFuZWwge1xuICBwYWRkaW5nOiA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZvcm0tcGFuZWwub25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbi5mb3JtLXBhbmVsLm9uZS5oaWRkZW46YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZm9ybS1wYW5lbC50d28ge1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogOTUlO1xuICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNjBweCBjYWxjKDEwJSArIDYwcHgpIDYwcHggNjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1wYW5lbC50d286YmVmb3JlLCAuZm9ybS1wYW5lbC50d286YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDEuNSU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4uZm9ybS1wYW5lbC50d286YWZ0ZXIge1xuICBsZWZ0OiAzJTtcbn1cbi5mb3JtLXBhbmVsLnR3bzpob3ZlciB7XG4gIGxlZnQ6IDkzJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmZvcm0tcGFuZWwudHdvOmhvdmVyOmJlZm9yZSwgLmZvcm0tcGFuZWwudHdvOmhvdmVyOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5mb3JtLXBhbmVsLnR3by5hY3RpdmUge1xuICBsZWZ0OiAxMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmZvcm0tcGFuZWwudHdvLmFjdGl2ZTpiZWZvcmUsIC5mb3JtLXBhbmVsLnR3by5hY3RpdmU6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgNDBweDtcbn1cbi5mb3JtLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnR3byAuZm9ybS1oZWFkZXIgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5wZW4tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDEwMHB4O1xufVxuLnBlbi1mb290ZXIgYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucGVuLWZvb3RlciBhIC5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IDAgNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcC1mYWIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDI4NUY0ICFpbXBvcnRhbnQ7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/auth/login/login.component.ts": function srcAppComponentsAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(restfulService, toasterService, router, utilityService) {
        _classCallCheck(this, LoginComponent);

        this.restfulService = restfulService;
        this.toasterService = toasterService;
        this.router = router;
        this.utilityService = utilityService;
        this.auth = {};
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this12 = this;

          this.auth.email = this.auth.email.toLowerCase();
          this.restfulService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.login, this.auth).subscribe(function (response) {
            console.log(response);

            _this12.utilityService.setItem('token', response.data.token.accessToken);

            _this12.utilityService.setItem('user', JSON.stringify(response.data.user));

            _this12.toasterService.success('Login successfully', 'Success');

            if (response.data.user.role === 'ADMIN') _this12.router.navigate(['/admin/users']);else _this12.router.navigate(['/dashboard']);

            _this12.utilityService.updateHeaderData(true);
          }, function (err) {
            _this12.toasterService.error(err.error.message, 'Error!');

            _this12.utilityService.removeItem('token');

            _this12.utilityService.updateHeaderData(false);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["RestfulService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/auth/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/register/register.component.scss": function srcAppComponentsAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  line-height: 1.6em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.overlay, .form-panel.one:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n}\n\n.form {\n  z-index: 15;\n  position: relative;\n  background: #FFFFFF;\n  width: 600px;\n  border-radius: 4px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  margin: 100px auto 10px;\n  overflow: hidden;\n}\n\n.form-toggle {\n  z-index: 10;\n  position: absolute;\n  top: 60px;\n  right: 60px;\n  background: #FFFFFF;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  transform-origin: center;\n  transform: translate(0, -25%) scale(0);\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.form-toggle:before, .form-toggle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 4px;\n  background: #4285F4;\n  transform: translate(-50%, -50%);\n}\n\n.form-toggle:before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.form-toggle:after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.form-toggle.visible {\n  transform: translate(0, -25%) scale(1);\n  opacity: 1;\n}\n\n.form-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 0 20px;\n}\n\n.form-group:last-child {\n  margin: 0;\n}\n\n.form-group label {\n  display: block;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n}\n\n.two .form-group label {\n  color: #FFFFFF;\n}\n\n.form-group input {\n  outline: none;\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  transition: 0.3s ease;\n}\n\n.form-group input:focus {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.two .form-group input {\n  color: #FFFFFF;\n}\n\n.two .form-group input:focus {\n  color: #FFFFFF;\n}\n\n.form-group button {\n  outline: none;\n  background: #4285F4;\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  padding: 12px 20px;\n  color: #FFFFFF;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.two .form-group button {\n  background: #FFFFFF;\n  color: #4285F4;\n}\n\n.form-group .form-remember {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.form-group .form-remember input[type=checkbox] {\n  display: inline-block;\n  width: auto;\n  margin: 0 10px 0 0;\n}\n\n.form-group .form-recovery {\n  color: #4285F4;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.form-panel {\n  padding: 60px;\n  box-sizing: border-box;\n}\n\n.form-panel.one:before {\n  content: \"\";\n  display: block;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s ease;\n}\n\n.form-panel.one.hidden:before {\n  display: block;\n  opacity: 1;\n  visibility: visible;\n}\n\n.form-panel.two {\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 95%;\n  background: #4285F4;\n  width: 100%;\n  min-height: 100%;\n  padding: 60px calc(10% + 60px) 60px 60px;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n\n.form-panel.two:before, .form-panel.two:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 60px;\n  left: 1.5%;\n  background: rgba(255, 255, 255, 0.2);\n  height: 30px;\n  width: 2px;\n  transition: 0.3s ease;\n}\n\n.form-panel.two:after {\n  left: 3%;\n}\n\n.form-panel.two:hover {\n  left: 93%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-panel.two:hover:before, .form-panel.two:hover:after {\n  opacity: 0;\n}\n\n.form-panel.two.active {\n  left: 10%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n\n.form-panel.two.active:before, .form-panel.two.active:after {\n  opacity: 0;\n}\n\n.form-header {\n  margin: 0 0 40px;\n}\n\n.form-header h1 {\n  padding: 4px 0;\n  color: #4285F4;\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.two .form-header h1 {\n  position: relative;\n  z-index: 40;\n  color: #FFFFFF;\n}\n\n.pen-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 600px;\n  margin: 20px auto 100px;\n}\n\n.pen-footer a {\n  color: #FFFFFF;\n  font-size: 12px;\n  text-decoration: none;\n  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.pen-footer a .material-icons {\n  width: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n  font-size: 12px;\n}\n\n.cp-fab {\n  background: #FFFFFF !important;\n  color: #4285F4 !important;\n}\n\nfooter {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRoXFxhdXRoLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSw0RkFBQTtFQUNBLHlCQWxCSztFQW1CTCxlQTFCZTtFQTJCZixrQkF6QmlCO0VBMEJqQixtQ0FBQTtFQUNBLGtDQUFBO0FDM0JGOztBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFuQ007RUFvQ04sWUFoQ1U7RUFpQ1Ysa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzNCRjs7QUQ4QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWpESTtFQWtESixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM1Qko7O0FEOEJJO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFuRUc7RUFvRUgsZ0NBQUE7QUM3Qk47O0FEZ0NJO0VBQ0UsOENBQUE7QUM5Qk47O0FEaUNJO0VBQ0UsK0NBQUE7QUMvQk47O0FEa0NJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0FDaENOOztBRG9DRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxTQUFBO0FDbENOOztBRHFDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQXRHQztFQXVHRCxlQUFBO0VBQ0EsZ0JBckhLO0VBc0hMLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDbkNOOztBRHFDTTtFQUNFLGNBM0dBO0FDd0VSOztBRHVDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTNIQztFQTRIRCxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBM0lLO0VBNElMLG9CQUFBO0VBQ0EscUJBQUE7QUNyQ047O0FEdUNNO0VBQ0UseUJBcElJO0FDK0ZaOztBRHdDTTtFQUNFLGNBcElBO0FDOEZSOztBRHdDUTtFQUNFLGNBdklGO0FDaUdSOztBRDJDSTtFQUNFLGFBQUE7RUFDQSxtQkE3SUc7RUE4SUgsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FuSkU7RUFvSkYsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQXRLSztFQXVLTCxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3pDTjs7QUQyQ007RUFDRSxtQkE1SkE7RUE2SkEsY0E1SkM7QUNtSFQ7O0FENkNJO0VBQ0UsZUFBQTtFQUNBLGdCQXBMSTtFQXFMSixpQkFBQTtFQUNBLG9CQUFBO0FDM0NOOztBRDZDTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDM0NSOztBRCtDSTtFQUNFLGNBOUtHO0VBK0tILGVBQUE7RUFDQSxxQkFBQTtBQzdDTjs7QURrREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNoREo7O0FEb0RNO0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ3BEUjs7QUR3RFE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDdERWOztBRDRESTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBcE5HO0VBcU5ILFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDMUROOztBRDRETTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQzNEUjs7QUQ4RE07RUFDRSxRQUFBO0FDNURSOztBRCtETTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtBQzdEUjs7QUQrRFE7RUFFRSxVQUFBO0FDOURWOztBRGtFTTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNoRVI7O0FEa0VRO0VBRUUsVUFBQTtBQ2pFVjs7QUR3RUU7RUFDRSxnQkFBQTtBQ3RFSjs7QUR3RUk7RUFDRSxjQUFBO0VBQ0EsY0F6UUc7RUEwUUgsZUFBQTtFQUNBLGdCQTNSQztFQTRSRCx5QkFBQTtBQ3RFTjs7QUR3RU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQWxSQTtBQzRNUjs7QURrRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBOVJVO0VBK1JWLHVCQUFBO0FDaEZGOztBRGtGRTtFQUNFLGNBdFNJO0VBdVNKLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FDaEZKOztBRGtGSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDaEZOOztBRHFGQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNsRkY7O0FEd0ZBO0VBQ0Usd0JBQUE7QUNyRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250IFdlaWdodHNcclxuJHRoaW46IDEwMDtcclxuJGxpZ2h0OiAzMDA7XHJcbiRyZWd1bGFyOiA0MDA7XHJcbiRzZW1pYm9sZDogNTAwO1xyXG4kYm9sZDogNzAwO1xyXG4kdWx0cmE6IDgwMDtcclxuXHJcbi8vIEJhc2UgRm9udFxyXG5cclxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xyXG4kYmFzZS1mb250LXdlaWdodDogJHJlZ3VsYXI7XHJcbiRiYXNlLWxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuXHJcbi8vIENvbG9yc1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRkYXJrLWdyYXk6IHJnYmEoJGJsYWNrLCAwLjgpO1xyXG4kZ3JheTogcmdiYSgkYmxhY2ssIDAuNik7XHJcbiRsaWdodC1ncmF5OiByZ2JhKCRibGFjaywgMC40KTtcclxuJGxpZ2h0ZXItZ3JheTogcmdiYSgkYmxhY2ssIDAuMik7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGFjY2VudDogIzQyODVGNDtcclxuXHJcbi8vIEZvcm0gU2V0dGluZ3NcclxuJG1heC13aWR0aDogNjAwcHg7XHJcbiRtYXgtaGVpZ2h0OiA0MDBweDtcclxuJGd1dHRlcnM6IDI0cHg7XHJcblxyXG5odG1sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2NiwgMTgzLCAyNDUsIDAuOCkgMCUsIHJnYmEoNjYsIDI0NSwgMTg5LCAwLjQpIDEwMCUpO1xyXG4gIGNvbG9yOiAkZ3JheTtcclxuICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcclxuICBsaW5lLWhlaWdodDogJGJhc2UtbGluZS1oZWlnaHQ7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAwLjgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIHotaW5kZXg6IDE1O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDEwMHB4IGF1dG8gMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAvLyBUb2dnbGVcclxuICAmLXRvZ2dsZSB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWNjZW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYudmlzaWJsZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpIHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkc2VtaWJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcclxuXHJcbiAgICAgIC50d28gJiB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogJHNlbWlib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50d28gJiB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhY2NlbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogJHNlbWlib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1yZW1lbWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRyZWd1bGFyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tcmVjb3Zlcnkge1xyXG4gICAgICBjb2xvcjogJGFjY2VudDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQYW5lbFxyXG4gICYtcGFuZWwge1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgLy8gUGFuZWwgT25lXHJcbiAgICAmLm9uZSB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBAZXh0ZW5kIC5vdmVybGF5O1xyXG5cclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhbmVsIFR3b1xyXG4gICAgJi50d28ge1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogOTUlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWNjZW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNjBweCBjYWxjKDEwJSArIDYwcHgpIDYwcHggNjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmJlZm9yZSxcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAxLjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwLjIpO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGxlZnQ6IDkzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRibGFjaywgMC4yKTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRibGFjaywgMC4yKTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEhlYWRlclxyXG4gICYtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgY29sb3I6ICRhY2NlbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgLnR3byAmIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogNDA7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudFxyXG4gICYtY29udGVudCB7fVxyXG5cclxuICAmLWZvb3RlciB7fVxyXG59XHJcblxyXG4vLyBQZW4gRm9vdGVyXHJcbi5wZW4tZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDEwMHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwIHJnYmEoJGJsYWNrLCAuMSk7XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jcC1mYWIge1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkYWNjZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5mb3JtLWdyb3VwIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyB9XHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDY2LCAxODMsIDI0NSwgMC44KSAwJSwgcmdiYSg2NiwgMjQ1LCAxODksIDAuNCkgMTAwJSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLm92ZXJsYXksIC5mb3JtLXBhbmVsLm9uZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybSB7XG4gIHotaW5kZXg6IDE1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMTAwcHggYXV0byAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZvcm0tdG9nZ2xlIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKSBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmZvcm0tdG9nZ2xlOmJlZm9yZSwgLmZvcm0tdG9nZ2xlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5mb3JtLXRvZ2dsZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLmZvcm0tdG9nZ2xlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG4uZm9ybS10b2dnbGUudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpIHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cbi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG4udHdvIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLnR3byAuZm9ybS1ncm91cCBpbnB1dCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnR3byAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzQyODVGNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnR3byAuZm9ybS1ncm91cCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzQyODVGNDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLXJlbWVtYmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1yZW1lbWJlciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLXJlY292ZXJ5IHtcbiAgY29sb3I6ICM0Mjg1RjQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvcm0tcGFuZWwge1xuICBwYWRkaW5nOiA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZvcm0tcGFuZWwub25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbi5mb3JtLXBhbmVsLm9uZS5oaWRkZW46YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZm9ybS1wYW5lbC50d28ge1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogOTUlO1xuICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNjBweCBjYWxjKDEwJSArIDYwcHgpIDYwcHggNjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1wYW5lbC50d286YmVmb3JlLCAuZm9ybS1wYW5lbC50d286YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDEuNSU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4uZm9ybS1wYW5lbC50d286YWZ0ZXIge1xuICBsZWZ0OiAzJTtcbn1cbi5mb3JtLXBhbmVsLnR3bzpob3ZlciB7XG4gIGxlZnQ6IDkzJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmZvcm0tcGFuZWwudHdvOmhvdmVyOmJlZm9yZSwgLmZvcm0tcGFuZWwudHdvOmhvdmVyOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5mb3JtLXBhbmVsLnR3by5hY3RpdmUge1xuICBsZWZ0OiAxMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmZvcm0tcGFuZWwudHdvLmFjdGl2ZTpiZWZvcmUsIC5mb3JtLXBhbmVsLnR3by5hY3RpdmU6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgNDBweDtcbn1cbi5mb3JtLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnR3byAuZm9ybS1oZWFkZXIgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5wZW4tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDEwMHB4O1xufVxuLnBlbi1mb290ZXIgYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucGVuLWZvb3RlciBhIC5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IDAgNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcC1mYWIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDI4NUY0ICFpbXBvcnRhbnQ7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/auth/register/register.component.ts": function srcAppComponentsAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(restfulService, toastService, router, activatedRoute) {
        _classCallCheck(this, RegisterComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.register = {};
        this.terms = false;
        this.confirmpolicy = false;
        this.risk = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.register.referralCode = this.activatedRoute.snapshot.queryParams.referral;
        }
      }, {
        key: "registerForm",
        value: function registerForm() {
          var _this13 = this;

          var _a = this.register,
              firstName = _a.firstName,
              lastName = _a.lastName,
              phone = _a.phone,
              email = _a.email,
              password = _a.password,
              rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["firstName", "lastName", "phone", "email", "password"]);

          if (!this.terms && !this.confirmpolicy && !this.risk) {
            this.toastService.warning('Please accept terms conditions, confirmation any risk policy', 'Warning');
            return;
          }

          if (!password || password.length < 6) {
            this.toastService.warning('Please enter password with minimum 6 charater length', 'Warning');
            return;
          }

          if (password !== this.register.confirmPassword) {
            this.toastService.warning('Confirm password and new password should be same', 'Warning');
            return;
          }

          var body = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email.toLowerCase(),
            password: password
          };
          this.restfulService.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.register, body).subscribe(function (res) {
            _this13.toastService.success(res.message, 'Success');

            _this13.router.navigate(['/auth/login']);

            _this13.register = {};
          }, function (err) {
            _this13.toastService.error(err.error.message, 'Error');

            _this13.register.password = '';
            _this13.register.confirmPassword = '';
            _this13.register.email = '';
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/components/auth/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/reset-password/reset-password.component.scss": function srcAppComponentsAuthResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/auth/reset-password/reset-password.component.ts": function srcAppComponentsAuthResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/toaster/toaster.service */
    "./src/app/services/toaster/toaster.service.ts");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(restfulService, toaster, utilityService, activatedRoute, translateService, router) {
        _classCallCheck(this, ResetPasswordComponent);

        this.restfulService = restfulService;
        this.toaster = toaster;
        this.utilityService = utilityService;
        this.activatedRoute = activatedRoute;
        this.translateService = translateService;
        this.router = router;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this14 = this;

          if (!this.newPassword || this.newPassword.length < 6) {
            this.toaster.warning('Please enter password with minimum 6 charater length', 'Warning');
            return;
          }

          if (this.confirmPassword !== this.newPassword) {
            this.toaster.warning('Confirm password and new password should be same', 'Warning');
            return;
          }

          if (!this.confirmPassword || !this.newPassword) return;
          var body = {
            password: this.newPassword
          };
          var params = {
            'Authorization': "Bearer ".concat(this.activatedRoute.snapshot.queryParams.token.toString()),
            'Accept-Language': this.translateService.store.currentLang || 'en'
          };
          this.utilityService.setItem('token', this.activatedRoute.snapshot.queryParams.token.toString());
          this.restfulService.patch(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.resetPassword, body, true, params).subscribe(function (res) {
            _this14.utilityService.removeItem('token');

            _this14.toaster.success(res.message, 'Success!');

            _this14.newPassword = '';
            _this14.confirmPassword = '';

            _this14.router.navigate(['/auth/login']);
          }, function (err) {
            _this14.toaster.error(err.error.message, 'Error!');
          });
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_6__["RestfulService"]
      }, {
        type: _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.scss */
      "./src/app/components/auth/reset-password/reset-password.component.scss"))["default"]]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/verify-user/verify-user.component.scss": function srcAppComponentsAuthVerifyUserVerifyUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC92ZXJpZnktdXNlci92ZXJpZnktdXNlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/auth/verify-user/verify-user.component.ts": function srcAppComponentsAuthVerifyUserVerifyUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function () {
      return VerifyUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerifyUserComponent = /*#__PURE__*/function () {
      function VerifyUserComponent(restfulService, translateService, activatedRoute, utilityService, toaster, router) {
        _classCallCheck(this, VerifyUserComponent);

        this.restfulService = restfulService;
        this.translateService = translateService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.toaster = toaster;
        this.router = router;
      }

      _createClass(VerifyUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var body = {};
          var params = {
            'Authorization': "Bearer ".concat(this.activatedRoute.snapshot.queryParams.token.toString()),
            'Accept-Language': this.translateService.store.currentLang || 'en'
          };
          this.utilityService.setItem('token', this.activatedRoute.snapshot.queryParams.token.toString());
          this.restfulService.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.verifyUser, body, true, params).subscribe(function (res) {
            _this15.utilityService.removeItem('token');

            _this15.toaster.success(res.message, 'Success');

            _this15.router.navigate(['/auth/login']);
          }, function (err) {
            _this15.toaster.error(err.error.message, 'Error!');
          });
        }
      }]);

      return VerifyUserComponent;
    }();

    VerifyUserComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_5__["RestfulService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    VerifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-verify-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/verify-user/verify-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-user.component.scss */
      "./src/app/components/auth/verify-user/verify-user.component.scss"))["default"]]
    })], VerifyUserComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.scss": function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contactbg {\n  background-image: url('contactFormBg.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.iconinput {\n  position: relative;\n}\n\n.iconinput .roundinput {\n  background: #141c33;\n  border-width: 0px;\n  padding: 13px;\n  width: 100%;\n  border-radius: 25px;\n  color: #fff;\n}\n\n.iconinput img {\n  position: absolute;\n  right: 15px;\n  top: 12px;\n}\n\n.content-center {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREFFO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRU47O0FEQUU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRU47O0FERUE7RUFDRSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdGJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdEZvcm1CZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmljb25pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5yb3VuZGlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzE0MWMzMztcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgdG9wOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIi5jb250YWN0Ymcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3RGb3JtQmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaWNvbmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmljb25pbnB1dCAucm91bmRpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICMxNDFjMzM7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaWNvbmlucHV0IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTJweDtcbn1cblxuLmNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts": function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(restfulService, toastService) {
        _classCallCheck(this, ContactComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.contact = {};
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this16 = this;

          this.restfulService.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.createContact, this.contact).subscribe(function (res) {
            _this16.toastService.success(res.data.message, 'Success');

            _this16.contact = {};
          }, function (err) {
            _this16.toastService.error(err.error.message, 'Error!');
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.scss": function srcAppComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn small {\n  font-size: 0.55rem !important;\n  display: block;\n  background: #f44336;\n  padding: 1px 10px;\n  border-radius: 10px;\n  margin-bottom: -15px;\n  color: #fff;\n}\n\n.min-h-435 {\n  height: 435px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRTpcXHByb2plY3RzXFxMaXF1aWQtbWluaW5nLWFuZ3VsYXJcXGlxbWluaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4gc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAwLjU1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5taW4taC00MzUge1xyXG4gICAgaGVpZ2h0OiA0MzVweDtcclxufVxyXG4iLCIuYnRuIHNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjU1cmVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBwYWRkaW5nOiAxcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWluLWgtNDM1IHtcbiAgaGVpZ2h0OiA0MzVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts": function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(restfulService, toastService, http, utilityService, router) {
        _classCallCheck(this, DashboardComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.http = http;
        this.utilityService = utilityService;
        this.router = router;
        this.dashboard = {};
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDashboard();
          this.utilityService.setViewPort(null);
        }
      }, {
        key: "getDashboard",
        value: function getDashboard() {
          var _this17 = this;

          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.dashboard).subscribe(function (res) {
            _this17.dashboard = res.data;
            _this17.dashboard.weeklyIncome = (_this17.dashboard.dailyIncome * 7).toFixed(4);
            _this17.dashboard.monthlyIncome = (_this17.dashboard.dailyIncome * 30).toFixed(4);
            _this17.dashboard.annualIncome = (_this17.dashboard.dailyIncome * 365).toFixed(4);
            _this17.dashboard.incomePerHash = _this17.dashboard.totalHashRate ? (_this17.dashboard.dailyIncome / _this17.dashboard.totalHashRate).toFixed(4) : 0;
            _this17.dashboard.dailyIncome = _this17.dashboard.dailyIncome.toFixed(4);

            _this17.convertToBtc(_this17.dashboard);
          }, function (err) {
            _this17.toastService.error(err.error.message, 'Error!');
          });
        }
      }, {
        key: "changePlan",
        value: function changePlan(plan) {
          var _this18 = this;

          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.hashRate + plan).subscribe(function (res) {
            _this18.dashboard.totalHashRate = res.data;
          });
        }
      }, {
        key: "convertToBtc",
        value: function convertToBtc(dashboard) {
          var _this19 = this;

          var _loop = function _loop(d) {
            if (d != 'userBalances' && d != 'totalHashRate') {
              _this19.http.get('https://blockchain.info/tobtc?currency=USD&value=' + dashboard[d]).subscribe(function (res) {
                _this19.dashboard["".concat(d, "Btc")] = res;
              });
            }
          };

          for (var d in dashboard) {
            _loop(d);
          } // return 0

        }
      }, {
        key: "navigateToBuyMore",
        value: function navigateToBuyMore() {
          this.utilityService.setViewPort('buy-now');
          this.router.navigate(['/home']);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/components/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/income-chart/income-chart.component.scss": function srcAppComponentsDashboardIncomeChartIncomeChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2luY29tZS1jaGFydC9pbmNvbWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/income-chart/income-chart.component.ts": function srcAppComponentsDashboardIncomeChartIncomeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeChartComponent", function () {
      return IncomeChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var IncomeChartComponent = /*#__PURE__*/function () {
      function IncomeChartComponent() {
        _classCallCheck(this, IncomeChartComponent);

        this.data = [];
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
          chart: {
            type: 'areaspline',
            height: 350
          },
          title: {
            text: ''
          },
          subtitle: {
            style: {
              position: 'absolute',
              right: '0px',
              bottom: '10px'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1
          },
          xAxis: {
            categories: ['1 July, 2021', '2 July, 2021', '3 July, 2021', '4 July, 2021', '5 July, 2021', '6 July, 2021', '7 July, 2021', '8 July, 2021', '9 July, 2021', '10 July, 2021', '11 July, 2021', '12 July, 2021', '13 July, 2021']
          },
          yAxis: {
            title: {
              text: 'Income'
            }
          },
          tooltip: {
            shared: true,
            valueSuffix: ' BTC'
          },
          plotOptions: {
            area: {
              fillOpacity: 0.5
            }
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'Income',
            data: [1, 3, 4, 3, 3, 5, 4, 1, 10, 6, 8, 0.5, 3]
          }]
        };
      }

      _createClass(IncomeChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.chartOptions.xAxis.categories = [];
          this.chartOptions.series[0].data = [];
          this.data.forEach(function (it) {
            _this20.chartOptions.xAxis.categories.push(moment__WEBPACK_IMPORTED_MODULE_3__["utc"](it.calculationDate).format('DD MMMM, YYYY'));

            _this20.chartOptions.series[0].data.push(+it.balance);
          });
        }
      }]);

      return IncomeChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IncomeChartComponent.prototype, "data", void 0);
    IncomeChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./income-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/income-chart/income-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./income-chart.component.scss */
      "./src/app/components/dashboard/income-chart/income-chart.component.scss"))["default"]]
    })], IncomeChartComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss": function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sections {\n  padding: 50px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxufVxyXG4iLCIuc2VjdGlvbnMge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts": function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(translate, restfulService, _renderer2, toastrService, viewportScroller, utilityService, http, _document) {
        _classCallCheck(this, HomeComponent);

        this.translate = translate;
        this.restfulService = restfulService;
        this._renderer2 = _renderer2;
        this.toastrService = toastrService;
        this.viewportScroller = viewportScroller;
        this.utilityService = utilityService;
        this.http = http;
        this._document = _document;
        this.miningCalculator = {
          daily: 0,
          monthly: 0,
          yearly: 0,
          power: 0,
          yearlyPower: 0
        };
        this.validities = [{
          name: '1 year',
          year: 1
        }, {
          name: '2 years',
          year: 2
        }, {
          name: '5 years',
          year: 5
        }];
        this.contracts = ['SHA-256', 'SHA-256 Pro', 'SHA-256 BCH', 'Ethereum'];
        this.contract = 'SHA-256';
        this.validity = 1;
        this.amount = '1000';
        translate.setDefaultLang('en');
      }

      _createClass(HomeComponent, [{
        key: "onKeyDown",
        value: function onKeyDown($event) {
          // console.log($event)
          if (this.calculatorTouched && $event.code == 'Enter') {
            this.calculate();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var script = this._renderer2.createElement('script');

          script.type = "text/javascript";
          script.text = "\n       \n        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();\n        (function(){\n        var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];\n        s1.async=true;\n        s1.src='https://embed.tawk.to/6103d03c649e0a0a5cceaa19/1fbrearnk';\n        s1.charset='UTF-8';\n        s1.setAttribute('crossorigin','*');\n        s0.parentNode.insertBefore(s1,s0);\n        })();\n        \n        ";

          this._renderer2.appendChild(this._document.body, script);

          parseFloat(this.amount) > 0 ? this.calculate() : null; // this.viewportScroller.scrollToAnchor('buy-now');
          // this.getCryptoNews();
        }
      }, {
        key: "getCryptoNews",
        value: function getCryptoNews() {
          var _this21 = this;

          this.http.get('https://cryptopanic.com/api/v1/posts/?auth_token=a5b01c39df4d8709b721ce6ef239db52a51c4d7c&public=true').subscribe(function (res) {
            console.log(res);
            _this21.cryptoNews = res;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this22 = this;

          var viewPort = this.utilityService.getViewPort();
          viewPort ? this.viewportScroller.scrollToAnchor(viewPort) : null;
          setTimeout(function () {
            return _this22.utilityService.setViewPort(null);
          }, 1000);
        }
      }, {
        key: "calculate",
        value: function calculate() {
          this.miningCalculator = {
            daily: 0,
            monthly: 0,
            yearly: 0,
            power: 0
          }; // if(!this.amount.includes('$')){
          //   this.toastrService.error('Please add currency unit at last. Example: "1000$"', 'Error!')
          //   return;
          // }

          var amount = parseFloat(this.amount);

          if (!amount) {
            return;
          }

          var dailyFormula;
          var additional;
          var percentage;

          switch (this.contract) {
            case "SHA-256":
              this.miningCalculator.yearlyPower = amount * 19.31;
              percentage = amount / 100000;
              additional = this.parse(this.miningCalculator.yearlyPower * this.validity) * this.parse(percentage);
              this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional);

              if (this.validity > 1) {
                additional = this.parse(this.miningCalculator.yearlyPower) * this.parse(percentage);
                this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional);
              }

              this.miningCalculator.daily = this.miningCalculator.power * 0.242867 / 1000;

              if (this.validity > 1) {
                var b = this.miningCalculator.daily / 100;
                this.miningCalculator.daily = this.miningCalculator.daily / this.validity + b * 5;
              }

              this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional)).toFixed(4);
              break;

            case "SHA-256 Pro":
              this.miningCalculator.yearlyPower = amount * 16.735;
              percentage = amount / 100000;
              additional = this.parse(this.miningCalculator.yearlyPower * this.validity) * this.parse(percentage);
              this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional);

              if (this.validity > 1) {
                additional = this.parse(this.miningCalculator.yearlyPower) * this.parse(percentage);
                this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional);
              }

              this.miningCalculator.daily = this.miningCalculator.power * 0.242867 / 1000;

              if (this.validity > 1) {
                var _b = this.miningCalculator.daily / 100;

                this.miningCalculator.daily = this.miningCalculator.daily / this.validity + _b * 5;
              }

              this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional)).toFixed(4);
              break;

            case "SHA-256 BCH":
              this.miningCalculator.yearlyPower = amount * 17.25;
              percentage = amount / 100000;
              additional = this.parse(this.miningCalculator.yearlyPower * this.validity) * this.parse(percentage);
              this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional);

              if (this.validity > 1) {
                additional = this.parse(this.miningCalculator.yearlyPower) * this.parse(percentage);
                this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional);
              }

              this.miningCalculator.daily = this.miningCalculator.power * 0.242867 / 1000;

              if (this.validity > 1) {
                var _b2 = this.miningCalculator.daily / 100;

                this.miningCalculator.daily = this.miningCalculator.daily / this.validity + _b2 * 5;
              }

              this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional).toFixed(4);
              break;

            case "Ethereum":
              this.miningCalculator.yearlyPower = amount * 0.000058 + 0.01;
              percentage = amount / 100000;
              additional = this.parse(this.miningCalculator.yearlyPower * this.validity) * this.parse(percentage);
              this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional);

              if (this.validity > 1) {
                additional = this.parse(this.miningCalculator.yearlyPower) * this.parse(percentage);
                this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional);
              }

              this.miningCalculator.daily = this.miningCalculator.power * 56.72;

              if (this.validity > 1) {
                var _b3 = this.miningCalculator.daily / 100;

                this.miningCalculator.daily = this.miningCalculator.daily / this.validity + _b3 * 5;
              }

              this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower * this.validity) + this.parse(additional)).toFixed(4);
              break;
          }

          this.miningCalculator.monthly = (this.parse(this.miningCalculator.daily) * 30).toFixed(4);
          this.miningCalculator.yearly = (this.parse(this.miningCalculator.monthly) * 12).toFixed(4);
          this.miningCalculator.daily = this.miningCalculator.daily.toFixed(4);
          this.calculatorTouched = false;
        }
      }, {
        key: "parse",
        value: function parse(number) {
          return parseFloat(number);
        }
      }, {
        key: "selectChanged",
        value: function selectChanged(e) {
          // console.log(e)
          this.calculatorTouched = true;
          parseFloat(this.amount) > 0 ? this.calculate() : null;
        }
      }, {
        key: "scrollToCalc",
        value: function scrollToCalc(e) {
          this.viewportScroller.scrollToAnchor('mining-calculator');
        }
      }, {
        key: "navigateToId",
        value: function navigateToId() {
          this.viewportScroller.scrollToAnchor('buy-now');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"]
      }, {
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('keydown', ['$event'])], HomeComponent.prototype, "onKeyDown", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/mining-contract-table/mining-contract-table.component.scss": function srcAppComponentsHomeMiningContractTableMiningContractTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section_cntr .box-tab-cont {\n  border-radius: 0 0 10px 10px;\n  border: 2px solid #edf5f7;\n  border-top: none;\n}\n\n.calc-table {\n  display: flex;\n  padding-top: 18px;\n}\n\n.calc-column {\n  border-radius: 10px;\n  position: relative;\n  width: 16.66%;\n  background-color: #fff;\n  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.calc-column:first-child .calc-row {\n  padding-left: 30px;\n  padding-right: 5px;\n}\n\n.calc-row_modmh70 {\n  min-height: 70px;\n}\n\n.calc-row {\n  min-height: 85px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: center;\n}\n\n.calc-td_title {\n  color: #2b2d33;\n  font-weight: 500;\n  text-align: left;\n}\n\n.calc-td {\n  font-weight: 300;\n  color: #2b2d33;\n}\n\n.calc-row:nth-child(even) {\n  background-color: #f8fbfc;\n}\n\n.section_cntr .box-tab-cont {\n  border-radius: 0 0 10px 10px;\n  border: 2px solid #edf5f7;\n  border-top: none;\n}\n\n.calc-column:not(:first-child):hover {\n  overflow: hidden;\n  z-index: 1;\n  box-shadow: 0 29px 64px rgba(49, 87, 125, 0.39);\n}\n\n.tab-content {\n  background: #fff;\n}\n\nul.nav.nav-tabs {\n  background: #fff;\n}\n\nul.nav.nav-tabs li .nav-link {\n  text-transform: uppercase;\n  color: #000;\n  border-radius: 0px;\n  background: transparent;\n  border-width: 0px 0px 1px 1px;\n  padding: 20px 25px;\n  display: inline-block;\n}\n\nul.nav.nav-tabs li .active {\n  background: #44acff;\n  color: #fff;\n}\n\n.calc-td .btn {\n  margin-top: 10px;\n  border-radius: 4px;\n  padding: 10px 25px;\n  background-color: #44acff;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.line-through {\n  -webkit-text-decoration: line-through red;\n          text-decoration: line-through red;\n}\n\n.border-normal {\n  border: 1px solid #ccc !important;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-15 {\n  margin-right: 15px;\n}\n\n.mr-20 {\n  margin-right: 20px;\n}\n\n.coin-div {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.coin {\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.coin:hover, .coin:focus {\n  box-shadow: 0 29px 64px rgba(49, 87, 125, 0.39);\n}\n\n.hidden {\n  display: none;\n}\n\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  margin: auto;\n  display: none;\n  border-top: 20px solid #f00;\n}\n\n.child-coin-div {\n  left: 37%;\n  display: inline;\n  position: absolute;\n  background-color: white;\n  padding: 12px;\n  margin-top: 19px;\n  list-style: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 1px 2px 3px #ccc;\n}\n\n.child-coin-img {\n  margin-right: 10px;\n  border-right: 1px solid #ccc;\n  padding: 0 7px;\n  font-size: 20px;\n  z-index: 99;\n}\n\n.child-coin-img:last-child {\n  border-right: none;\n}\n\n.mt-8 {\n  margin-top: 8px;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.mt-11 {\n  margin-top: 11px;\n}\n\n.mt-3 {\n  margin-top: 3px;\n}\n\n.payment-div {\n  width: 80%;\n  margin: auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.c-green {\n  color: green;\n}\n\n.payment-p {\n  margin: 0;\n  font-weight: 500;\n}\n\n.payment-header {\n  border: 1px solid green;\n  background-color: #00800036;\n  text-align: right;\n  margin-left: 20px;\n  width: 95%;\n  padding: 10px;\n}\n\n.copy-add {\n  margin-left: 5px;\n  /* height: 36px; */\n  background-color: #e8e8e896;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.buy-btn {\n  float: right;\n  position: relative;\n  bottom: 38px;\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.border-radius-5 {\n  border-radius: 5px;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.d-inline {\n  display: inline;\n}\n\n.d-block {\n  display: block;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\n.border-right-left {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.package-name-SHA-256 {\n  box-shadow: 0px 2px 4px 1px #ccc;\n}\n\n.package-name-SHA-256-PRO {\n  background-image: linear-gradient(to bottom, rgba(208, 208, 208, 0.32), #afa7a7);\n}\n\n.package-name-USDT {\n  background-image: linear-gradient(to bottom, rgba(193, 117, 3, 0.13), #c17503);\n}\n\n.package-name-SHA-256-BCH {\n  background-image: linear-gradient(to bottom, #ff570729, #ff5707);\n}\n\n.package-name3 {\n  background-image: linear-gradient(to bottom, rgba(255, 129, 0, 0.13), #ff8100);\n}\n\n.package-name-ETHEREUM {\n  background-image: linear-gradient(to bottom, rgba(33, 30, 30, 0.13), #211e1e);\n}\n\n.p-0-10 {\n  padding: 0 10px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.input-div {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.input-field {\n  width: 79%;\n  border: 1px solid #ccc;\n}\n\n.input-go-btn {\n  margin-bottom: 9px;\n  margin-left: 29px;\n  margin-top: 9px;\n  padding: 2px 14px;\n}\n\n.coin-child {\n  display: flex;\n}\n\n@media screen and (max-width: 900px) {\n  .input-div {\n    display: block;\n  }\n\n  .input-field {\n    width: 100%;\n  }\n\n  .input-go-btn {\n    margin-bottom: 0px;\n    margin-left: 0px;\n  }\n\n  .coin-child {\n    position: static;\n    width: 100%;\n    border: none !important;\n    box-shadow: none;\n    display: inline;\n  }\n\n  .img-position-static {\n    position: static;\n  }\n\n  .child-coin-img {\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL21pbmluZy1jb250cmFjdC10YWJsZS9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcbWluaW5nLWNvbnRyYWN0LXRhYmxlXFxtaW5pbmctY29udHJhY3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9taW5pbmctY29udHJhY3QtdGFibGUvbWluaW5nLWNvbnRyYWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFHRSxhQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSwyREFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFFQSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQU47O0FER0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNETjs7QURNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7QUNIRjs7QURNQTtFQUNFLGlDQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLCtDQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FER0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FERUE7RUFDRSxTQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBRUUsa0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURIQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ01GOztBREhBO0VBQ0UsdUJBQUE7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtBQ0tKOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0FDUUY7O0FETEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUUY7O0FETEE7RUFDRSxpQkFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7QUNTRjs7QURQQTtFQUNFLHFCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0FDV0Y7O0FEVEE7RUFDRSxjQUFBO0FDWUY7O0FEVkE7RUFDRSxpQkFBQTtBQ2FGOztBRFhBO0VBQ0UsNEJBQUE7RUFDRSw2QkFBQTtBQ2NKOztBRFhBO0VBQ0UsZ0NBQUE7QUNjRjs7QURYQTtFQUNFLGdGQUFBO0FDY0Y7O0FEVEE7RUFDRSw4RUFBQTtBQ1lGOztBRFRBO0VBQ0UsZ0VBQUE7QUNZRjs7QURUQTtFQUNFLDhFQUFBO0FDWUY7O0FEVkE7RUFDRSw2RUFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7QUNlRjs7QURiQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFVBQUE7RUFBWSxzQkFBQTtBQ2tCZDs7QURoQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQW1CLGVBQUE7RUFBaUIsaUJBQUE7QUNxQnRDOztBRG5CQTtFQUNFLGFBQUE7QUNzQkY7O0FEbkJBO0VBQ0U7SUFDRSxjQUFBO0VDc0JGOztFRHBCQTtJQUNFLFdBQUE7RUN1QkY7O0VEckJBO0lBQ0Usa0JBQUE7SUFDRixnQkFBQTtFQ3dCQTs7RUR0QkE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ3lCRjs7RUR2QkE7SUFDRSxnQkFBQTtFQzBCRjs7RUR4QkE7SUFDRSxZQUFBO0VDMkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbWluaW5nLWNvbnRyYWN0LXRhYmxlL21pbmluZy1jb250cmFjdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uX2NudHIgLmJveC10YWItY29udCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWRmNWY3O1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5jYWxjLXRhYmxlIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uY2FsYy1jb2x1bW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNi42NiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xyXG59XHJcblxyXG4uY2FsYy1jb2x1bW46Zmlyc3QtY2hpbGQgLmNhbGMtcm93IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2FsYy1yb3dfbW9kbWg3MCB7XHJcbiAgbWluLWhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmNhbGMtcm93IHtcclxuICBtaW4taGVpZ2h0OiA4NXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGMtdGRfdGl0bGUge1xyXG4gIGNvbG9yOiAjMmIyZDMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhbGMtdGQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMyYjJkMzM7XHJcbn1cclxuXHJcbi5jYWxjLXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZiZmM7XHJcbn1cclxuXHJcbi5zZWN0aW9uX2NudHIgLmJveC10YWItY29udCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWRmNWY3O1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5jYWxjLWNvbHVtbjpub3QoOmZpcnN0LWNoaWxkKTpob3ZlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAyOXB4IDY0cHggcmdiKDQ5IDg3IDEyNSAvIDM5JSk7XHJcbiAgYm94LXNoYWRvdzogMCAyOXB4IDY0cHggcmdiKDQ5IDg3IDEyNSAvIDM5JSk7XHJcbn1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxudWwubmF2Lm5hdi10YWJzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICBsaSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDRhY2ZmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYWxjLXRkIC5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhY2ZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZS10aHJvdWdoIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCByZWQ7XHJcbn1cclxuXHJcbi5ib3JkZXItbm9ybWFsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1sLTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLm1yLTE1IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1yLTIwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxufVxyXG4uY29pbi1kaXYge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuLmNvaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb2luOmhvdmVyLCAuY29pbjpmb2N1c3tcclxuICBib3gtc2hhZG93OiAwIDI5cHggNjRweCByZ2IoNDkgODcgMTI1IC8gMzklKTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvaW46aG92ZXIgLmNoaWxkLWNvaW4taW1ne1xyXG4gIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAvLyBib3gtc2hhZG93OiAwIDI5cHggNjRweCByZ2IoNDkgODcgMTI1IC8gMzklKTtcclxufVxyXG4uYXJyb3ctZG93biB7XHJcbiAgd2lkdGg6IDA7IFxyXG4gIGhlaWdodDogMDsgXHJcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgI2YwMDtcclxufVxyXG4uY2hpbGQtY29pbi1kaXYge1xyXG4gIGxlZnQ6IDM3JTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNjY2M7XHJcbn1cclxuLmNoaWxkLWNvaW4taW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAwIDdweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiBcclxufVxyXG4uY2hpbGQtY29pbi1pbWc6bGFzdC1jaGlsZCB7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogbm9uZSBcclxufVxyXG4ubXQtOCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm10LTExIHtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59XHJcbi5tdC0zIHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnBheW1lbnQtZGl2IHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYy1ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuLnBheW1lbnQtcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwMzY7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIC8vIHBhZGRpbmc6IDU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29weS1hZGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgLyogaGVpZ2h0OiAzNnB4OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg5NjtcclxufVxyXG4ubXItNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLm10LTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5tdC0xNSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ1eS1idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAzOHB4O1xyXG59XHJcblxyXG4ucC0xMCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmJvcmRlci1yYWRpdXMtNSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5kLWlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5kLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5kLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubWwtMjAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbn1cclxuLmJvcmRlci1yaWdodC1sZWZ0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5wYWNrYWdlLW5hbWUtU0hBLTI1NiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMXB4ICNjY2M7XHJcbn1cclxuXHJcbi5wYWNrYWdlLW5hbWUtU0hBLTI1Ni1QUk8ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMDggMjA4IDIwOCAvIDMyJSksIHJnYigxNzUgMTY3IDE2NykpO1xyXG4gICAgXHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDRweCAxcHggI2NjYztcclxuICAgIFxyXG59XHJcbi5wYWNrYWdlLW5hbWUtVVNEVCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE5MyAxMTcgMyAvIDEzJSksIHJnYigxOTMgMTE3IDMpKTtcclxufVxyXG5cclxuLnBhY2thZ2UtbmFtZS1TSEEtMjU2LUJDSCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNTcwNzI5LCAjZmY1NzA3KTtcclxuXHJcbn1cclxuLnBhY2thZ2UtbmFtZTMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyNTUgMTI5IDAgLyAxMyUpLCByZ2IoMjU1IDEyOSAwKSk7XHJcbn1cclxuLnBhY2thZ2UtbmFtZS1FVEhFUkVVTSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDMzIDMwIDMwIC8gMTMlKSwgcmdiKDMzIDMwIDMwKSk7XHJcbn1cclxuLnAtMC0xMCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dC1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHdpZHRoOiA3OSU7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmlucHV0LWdvLWJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyOXB4OyBtYXJnaW4tdG9wOiA5cHg7IHBhZGRpbmc6IDJweCAxNHB4XHJcbn1cclxuLmNvaW4tY2hpbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmlucHV0LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaW5wdXQtZ28tYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAuY29pbi1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5pbWctcG9zaXRpb24tc3RhdGljIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG4gIC5jaGlsZC1jb2luLWltZyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59IiwiLnNlY3Rpb25fY250ciAuYm94LXRhYi1jb250IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VkZjVmNztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmNhbGMtdGFibGUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4uY2FsYy1jb2x1bW4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNi42NiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xufVxuXG4uY2FsYy1jb2x1bW46Zmlyc3QtY2hpbGQgLmNhbGMtcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jYWxjLXJvd19tb2RtaDcwIHtcbiAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLmNhbGMtcm93IHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWxjLXRkX3RpdGxlIHtcbiAgY29sb3I6ICMyYjJkMzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYWxjLXRkIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyYjJkMzM7XG59XG5cbi5jYWxjLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYmZjO1xufVxuXG4uc2VjdGlvbl9jbnRyIC5ib3gtdGFiLWNvbnQge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWRmNWY3O1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY2FsYy1jb2x1bW46bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjlweCA2NHB4IHJnYmEoNDksIDg3LCAxMjUsIDAuMzkpO1xuICBib3gtc2hhZG93OiAwIDI5cHggNjRweCByZ2JhKDQ5LCA4NywgMTI1LCAwLjM5KTtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudWwubmF2Lm5hdi10YWJzIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbnVsLm5hdi5uYXYtdGFicyBsaSAubmF2LWxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAxcHg7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxudWwubmF2Lm5hdi10YWJzIGxpIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNDRhY2ZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhbGMtdGQgLmJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhY2ZmO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGluZS10aHJvdWdoIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggcmVkO1xufVxuXG4uYm9yZGVyLW5vcm1hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbn1cblxuLm1sLTUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubXItMTUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tci0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvaW4tZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb2luOmhvdmVyLCAuY29pbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMjlweCA2NHB4IHJnYmEoNDksIDg3LCAxMjUsIDAuMzkpO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93LWRvd24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgI2YwMDtcbn1cblxuLmNoaWxkLWNvaW4tZGl2IHtcbiAgbGVmdDogMzclO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2NjYztcbn1cblxuLmNoaWxkLWNvaW4taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmNoaWxkLWNvaW4taW1nOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5tdC04IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm10LTExIHtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuLm10LTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5wYXltZW50LWRpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYy1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBheW1lbnQtcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBheW1lbnQtaGVhZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDAzNjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29weS1hZGQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICAvKiBoZWlnaHQ6IDM2cHg7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg5Njtcbn1cblxuLm1yLTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ1eS1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzOHB4O1xufVxuXG4ucC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYm9yZGVyLXJhZGl1cy01IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1sLTIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ib3JkZXItcmlnaHQtbGVmdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ucGFja2FnZS1uYW1lLVNIQS0yNTYge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAxcHggI2NjYztcbn1cblxuLnBhY2thZ2UtbmFtZS1TSEEtMjU2LVBSTyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zMiksICNhZmE3YTcpO1xufVxuXG4ucGFja2FnZS1uYW1lLVVTRFQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE5MywgMTE3LCAzLCAwLjEzKSwgI2MxNzUwMyk7XG59XG5cbi5wYWNrYWdlLW5hbWUtU0hBLTI1Ni1CQ0gge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY1NzA3MjksICNmZjU3MDcpO1xufVxuXG4ucGFja2FnZS1uYW1lMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAxMjksIDAsIDAuMTMpLCAjZmY4MTAwKTtcbn1cblxuLnBhY2thZ2UtbmFtZS1FVEhFUkVVTSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzMsIDMwLCAzMCwgMC4xMyksICMyMTFlMWUpO1xufVxuXG4ucC0wLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogNzklO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uaW5wdXQtZ28tYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBwYWRkaW5nOiAycHggMTRweDtcbn1cblxuLmNvaW4tY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuaW5wdXQtZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5pbnB1dC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaW5wdXQtZ28tYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5jb2luLWNoaWxkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgLmltZy1wb3NpdGlvbi1zdGF0aWMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAuY2hpbGQtY29pbi1pbWcge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/mining-contract-table/mining-contract-table.component.ts": function srcAppComponentsHomeMiningContractTableMiningContractTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiningContractTableComponent", function () {
      return MiningContractTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var MiningContractTableComponent = /*#__PURE__*/function () {
      function MiningContractTableComponent(restfulService, utilityService, router, toast, ngbModal, viewportScroller, activeModal) {
        var _this23 = this;

        _classCallCheck(this, MiningContractTableComponent);

        this.restfulService = restfulService;
        this.utilityService = utilityService;
        this.router = router;
        this.toast = toast;
        this.ngbModal = ngbModal;
        this.viewportScroller = viewportScroller;
        this.activeModal = activeModal;
        this.miningCalculatorEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.packages = {
          oneYear: [],
          twoYear: [],
          fiveYear: [],
          lifetimeYear: []
        };
        this.contractYear = "One";
        this.buyContract = {};
        this.coins = [{
          name: "LTCT",
          key: "ltct"
        }, {
          key: "visa",
          name: "visa"
        }, {
          key: "bitcoin",
          name: "bitcoin"
        }, {
          key: "altcoins",
          name: "Altcoins",
          coins: [{
            name: "ethereum"
          }, {
            name: "litecoin"
          }, {
            name: "dash"
          }, {
            name: "zcash"
          }]
        }, {
          key: "stablecoins",
          name: "Stablecoins",
          coins: [{
            name: "USDT"
          }, {
            name: "TUSD"
          }, {
            name: "USDC"
          }]
        }];
        this.miningCalculator = {
          daily: 0,
          monthly: 0,
          yearly: 0,
          power: 0,
          yearlyPower: 0
        };
        this.utilityService.updateNetwork.subscribe(function (res) {
          if (res) _this23.network = _this23.utilityService.getItem("network");
        });
      }

      _createClass(MiningContractTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContract(this.contractYear);
          this.network = this.utilityService.getItem("network");
          this.lang = this.utilityService.getItem('lang');
          console.log(this.lang);
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.windowSize = window.innerWidth;
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this24 = this;

          var timer = 1800;
          var minutes;
          var seconds;
          this.timerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).subscribe(function (x) {
            minutes = Math.floor(timer / 60);
            seconds = Math.floor(timer % 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            _this24.time = minutes + ":" + seconds;
            --timer;

            if (timer < 0) {
              console.log("timer is ended");
              _this24.transactionSuccess = false;
              _this24.showPaymentDiv = false;
            } // console.log(this.time)

          });
        }
      }, {
        key: "getContract",
        value: function getContract(contract) {
          var _this25 = this;

          this.restfulService.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.rootPackages + contract).subscribe(function (res) {
            _this25.packages[_this25.contractYear.toLowerCase() + "Year"] = res.data.map(function (it) {
              var name = it.name.split(" ").join("-");
              it = Object.assign({}, it, {
                className: "package-name-".concat(name),
                investmentAmount: "1000"
              });

              _this25.calculate(it);

              return it;
            });
          });
        }
      }, {
        key: "buyNow",
        value: function buyNow(data) {
          var _this26 = this;

          this.selectedPackage = data;
          this.transactionSuccess = false;
          this.showPaymentDiv = false;
          this.time = null;

          if (this.utilityService.getToken()) {
            this.buyContract = {
              payBy: "LTCT"
            }; // this.ngbModal.open(this.buyPackageContent, {size: 'lg', backdrop: 'static'})
            // this.buyNowDiv = true;

            this.submit();
            setTimeout(function () {
              return _this26.navigateToHash();
            }, 0);
          } else {
            this.buyNowDiv = false;

            if (this.lang == "de") {
              this.toast.error("Pitte einloggen zum Fortfahren", "Fehler!");
            } else {
              this.toast.error("Please Login First", "Error!");
            }

            this.router.navigate(["/auth/login"]);
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this27 = this;

          // if(!this.buyContract.units) {
          //   this.toast.error('Please enter some units to buy', 'Error!')
          //   return;
          // }
          if (!this.buyContract.payBy) {
            if (this.lang == "de") {
              this.toast.error("Bitte wählen Sie ein Zahlungsmittel aus", "Fehler!");
            } else {
              this.toast.error("Please select some pay medium", "Error!");
            }

            return;
          }

          this.restfulService.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.purchasePackage, {
            packageId: this.selectedPackage.id
          }).subscribe(function (res) {
            //this.network == "test" ? this.approve() : null;
            if (_this27.network == "test") {
              _this27.approveTestPackage();

              return;
            } // this.toast.success(res.message, 'Success!')


            var purchasePackageId = res.data.purchasedPackageId;
            _this27.buyContract.payBy = "LTCT";

            _this27.restfulService.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.createTransaction, {
              purchasedPackageId: purchasePackageId,
              currency: _this27.buyContract.payBy
            }).subscribe(function (res) {
              _this27.transactionData = res.data;
              _this27.transactionSuccess = true;
              _this27.buyNowDiv = false;
              _this27.timerSub && _this27.timerSub.unsubscribe();

              _this27.startTimer(); // this.toast.success(res.message, 'Success!')


              if (_this27.lang == "de") {
                _this27.toast.success("Bitte bezahlen Sie Ihren Vertrag, indem Sie unten eine beliebige Münze auswählen.", "Transaktion Abgeschlossen");
              } else {
                _this27.toast.success("Please pay for your contract by selecting any coin below.", "Transaction Complete");
              }

              _this27.network = _this27.utilityService.getItem("network");
              _this27.network == "test" ? _this27.approve() : null; // this.ngbModal.open(this.transactionTemplate, {size: 'm', backdrop: 'static'})
            }, function (err) {
              _this27.toast.error(err.error.message, "Error!");
            }); // modal.dismiss('')

          }, function (err) {
            // modal.dismiss('')
            _this27.toast.error(err.error.message, "Error!");
          });
        }
      }, {
        key: "whichContractyear",
        value: function whichContractyear() {
          return this.contractYear.includes("Lifetime") ? "Lifetime" : this.contractYear == "One" ? "One Year" : this.contractYear + " Years";
        }
      }, {
        key: "approve",
        value: function approve() {
          // modal.dismiss('')
          if (this.lang == "de") {
            this.toast.success("Danke fürs Bezahlen! Wir werden Ihr Paket aktualisieren, sobald es bestätigt ist", "Erfolg!");
          } else {
            this.toast.success("Thanks for paying! We will update your package once it is confirmed", "Success!");
          }

          this.buyNowDiv = false;
          this.transactionSuccess = false;
          this.showPaymentDiv = false;
          this.time = null;
          this.timerSub && this.timerSub.unsubscribe();
        }
      }, {
        key: "approveTestPackage",
        value: function approveTestPackage() {
          if (this.lang == "de") {
            this.toast.success("Paket erfolgreich gekauft!");
          } else {
            this.toast.success("Package purchased successfully!");
          }

          this.buyNowDiv = false;
          this.transactionSuccess = false;
          this.showPaymentDiv = false;
          this.time = null;
          this.timerSub && this.timerSub.unsubscribe();
        }
      }, {
        key: "copied",
        value: function copied(e) {
          if (this.lang == "de") {
            this.toast.success("Adresse kopiert!", "Erfolg!");
          } else {
            this.toast.success("Address copied!", "Success!");
          }
        }
      }, {
        key: "fees",
        value: function fees() {
          var fee = parseFloat(this.buyContract.units) / 10 * parseFloat(this.selectedPackage.discountedPrice) + parseFloat(this.buyContract.units) / 10 * parseFloat(this.selectedPackage.maintenanceFee);
          return fee.toFixed(2); // this.fees = this.fees.toFixed(4)
        }
      }, {
        key: "showChild",
        value: function showChild(coin) {
          this.coins.forEach(function (it) {
            if (coin.key != it.key) it.show = false;
          });
          coin.show = !coin.show;
          this.selectedCoin = coin.key;

          if (!coin.coins || !coin.coins.length) {
            this.showPaymentDiv = false;
            this.time = null;
            this.showPaymentDiv = true;
            this.coins.forEach(function (it) {
              if (coin.key != it.key) it.show = false;
            });
          }
        }
      }, {
        key: "scrollToCalc",
        value: function scrollToCalc() {
          this.miningCalculatorEmitter.emit(true);
        }
      }, {
        key: "showInvestmentReturns",
        value: function showInvestmentReturns(item) {
          this.calculate(item);
        }
      }, {
        key: "calculate",
        value: function calculate(item) {
          item.returns = {
            daily: 0,
            monthly: 0,
            yearly: 0,
            power: 0
          }; // if (!item.investmentAmount.includes("$")) {
          //   this.toast.error(
          //     'Please add currency unit at last. Example: "1000$"',
          //     "Error!"
          //   );
          //   return;
          // }

          var amount = parseFloat(item.investmentAmount);

          if (!amount) {
            return;
          }

          var dailyFormula;
          var additional;
          var percentage;
          var validity;

          if (this.contractYear == "One") {
            validity = 1;
          } else if (this.contractYear == "Two") {
            validity = 2;
          } else validity = 5;

          switch (item.name) {
            case "SHA-256":
              item.returns.yearlyPower = amount * 19.31;
              percentage = amount / 100000;
              additional = this.parse(item.returns.yearlyPower * validity) * this.parse(percentage);
              item.returns.power = this.parse(item.returns.yearlyPower * validity) + this.parse(additional);

              if (validity > 1) {
                additional = this.parse(item.returns.yearlyPower) * this.parse(percentage);
                item.returns.power = this.parse(item.returns.yearlyPower) + this.parse(additional);
              }

              item.returns.daily = item.returns.power * 0.242867 / 1000;

              if (validity > 1) {
                var b = item.returns.daily / 100;
                item.returns.daily = item.returns.daily / validity + b * 5;
              }

              item.returns.power = (this.parse(item.returns.yearlyPower * validity) + this.parse(additional)).toFixed(4);
              break;

            case "SHA-256 PRO":
              item.returns.yearlyPower = amount * 16.735;
              percentage = amount / 100000;
              additional = this.parse(item.returns.yearlyPower * validity) * this.parse(percentage);
              item.returns.power = this.parse(item.returns.yearlyPower * validity) + this.parse(additional);

              if (validity > 1) {
                additional = this.parse(item.returns.yearlyPower) * this.parse(percentage);
                item.returns.power = this.parse(item.returns.yearlyPower) + this.parse(additional);
              }

              item.returns.daily = item.returns.power * 0.242867 / 1000;

              if (validity > 1) {
                var _b4 = item.returns.daily / 100;

                item.returns.daily = item.returns.daily / validity + _b4 * 5;
              }

              item.returns.power = (this.parse(item.returns.yearlyPower * validity) + this.parse(additional)).toFixed(4);
              break;

            case "SHA-256 BCH":
              item.returns.yearlyPower = amount * 17.25;
              percentage = amount / 100000;
              additional = this.parse(item.returns.yearlyPower * validity) * this.parse(percentage);
              item.returns.power = this.parse(item.returns.yearlyPower * validity) + this.parse(additional);

              if (validity > 1) {
                additional = this.parse(item.returns.yearlyPower) * this.parse(percentage);
                item.returns.power = this.parse(item.returns.yearlyPower) + this.parse(additional);
              }

              item.returns.daily = item.returns.power * 0.242867 / 1000;

              if (validity > 1) {
                var _b5 = item.returns.daily / 100;

                item.returns.daily = item.returns.daily / validity + _b5 * 5;
              }

              item.returns.power = this.parse(item.returns.yearlyPower * validity) + this.parse(additional).toFixed(4);
              break;

            case "ETHEREUM":
              item.returns.yearlyPower = amount * 0.000058 + 0.01;
              percentage = amount / 100000;
              additional = this.parse(item.returns.yearlyPower * validity) * this.parse(percentage);
              item.returns.power = this.parse(item.returns.yearlyPower * validity) + this.parse(additional);

              if (validity > 1) {
                additional = this.parse(item.returns.yearlyPower) * this.parse(percentage);
                item.returns.power = this.parse(item.returns.yearlyPower) + this.parse(additional);
              }

              item.returns.daily = item.returns.power * 56.72;

              if (validity > 1) {
                var _b6 = item.returns.daily / 100;

                item.returns.daily = item.returns.daily / validity + _b6 * 5;
              }

              item.returns.power = (this.parse(item.returns.yearlyPower * validity) + this.parse(additional)).toFixed(4);
              break;
          }

          item.returns.monthly = (this.parse(item.returns.daily) * 30).toFixed(4);
          item.returns.yearly = (this.parse(item.returns.monthly) * 12).toFixed(4);
          item.returns.daily = item.returns.daily.toFixed(4);
        }
      }, {
        key: "parse",
        value: function parse(number) {
          return parseFloat(number);
        }
      }, {
        key: "navigateToHash",
        value: function navigateToHash() {
          this.viewportScroller.scrollToAnchor("hashdiv");
        }
      }]);

      return MiningContractTableComponent;
    }();

    MiningContractTableComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("buyPackage", {
      "static": false
    })], MiningContractTableComponent.prototype, "buyPackageContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("transaction", {
      "static": false
    })], MiningContractTableComponent.prototype, "transactionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], MiningContractTableComponent.prototype, "miningCalculatorEmitter", void 0);
    MiningContractTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-mining-contract-table",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mining-contract-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/mining-contract-table/mining-contract-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mining-contract-table.component.scss */
      "./src/app/components/home/mining-contract-table/mining-contract-table.component.scss"))["default"]]
    })], MiningContractTableComponent);
    /***/
  },

  /***/
  "./src/app/components/includes/footer/footer.component.scss": function srcAppComponentsIncludesFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jbHVkZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/includes/footer/footer.component.ts": function srcAppComponentsIncludesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/includes/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/includes/header/header.component.scss": function srcAppComponentsIncludesHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topheader {\n  background: #484e60;\n  width: 100%;\n}\n\n.navbar {\n  background: #111930 !important;\n}\n\n.navbar .nav-btn-outline {\n  border: 2px solid #dbef42;\n  border-radius: 30px;\n  padding: 5px 12px;\n  color: #fff;\n}\n\n.nav-btn-fill {\n  background-color: #dbef42;\n  border-radius: 30px;\n  padding: 5px 12px;\n  color: #223363 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNsdWRlcy9oZWFkZXIvRTpcXHByb2plY3RzXFxMaXF1aWQtbWluaW5nLWFuZ3VsYXJcXGlxbWluaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGluY2x1ZGVzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNsdWRlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSw4QkFBQTtBQ0VKOztBRERJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jbHVkZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ4NGU2MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzExMTkzMCAhaW1wb3J0YW50O1xyXG4gICAgLm5hdi1idG4tb3V0bGluZSB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RiZWY0MjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbi5uYXYtYnRuLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWY0MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjMjIzMzYzICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnRvcGhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM0ODRlNjA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogIzExMTkzMCAhaW1wb3J0YW50O1xufVxuLm5hdmJhciAubmF2LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RiZWY0MjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LWJ0bi1maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWY0MjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGNvbG9yOiAjMjIzMzYzICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/includes/header/header.component.ts": function srcAppComponentsIncludesHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js"); // import { MatIconModule } from '@angular/material/icon';


    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(translate, utilityService, activatedR, router) {
        var _this28 = this;

        _classCallCheck(this, HeaderComponent);

        this.translate = translate;
        this.utilityService = utilityService;
        this.activatedR = activatedR;
        this.router = router;
        this.language = "Eng";
        this.eng = 'Eng';
        this.spe = 'Spa';
        this.network = 'Main';
        translate.setDefaultLang('en');
        console.log(this.activatedR);
        this.utilityService.updateHeader.subscribe(function (res) {
          if (res) {
            _this28.token = _this28.utilityService.getToken();
            _this28.user = _this28.utilityService.getItem('user') && JSON.parse(_this28.utilityService.getItem('user'));
            _this28.isAdmin = _this28.user.role.toLowerCase() === 'admin';
          } else {
            _this28.token = null;
            _this28.isAdmin = false;
          }
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var lang = this.utilityService.getItem('lang');
          this.token = this.utilityService.getToken();
          var network = this.utilityService.getItem('network');
          lang ? this.translate.use(lang) : null;
          this.language = lang == 'de' ? 'Ger' : 'Eng';
          this.network = network ? network : this.network;
          this.user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'));
          this.isAdmin = this.user && this.user.role.toLowerCase() === 'admin';
        }
      }, {
        key: "changelang",
        value: function changelang(lang) {
          if (lang == 'spa') {
            return this.language = 'Spa';
          } else if (lang == 'eng') return this.language = 'Eng';
        }
      }, {
        key: "useLanguage",
        value: function useLanguage(code, language) {
          this.language = language;
          this.translate.use(code);
          this.utilityService.setItem('lang', code);
          this.utilityService.updateLangData(code);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.utilityService.clearStorage();
          this.utilityService.updateHeaderData(false);
          this.router.navigate(['/home']);
        }
      }, {
        key: "useNetwork",
        value: function useNetwork(d) {
          this.network = d;
          this.utilityService.setItem('network', this.network);
          this.utilityService.updateNetworkData(true);
          location.reload();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/includes/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/index.ts": function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"];
    });
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/components/account/account.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return _account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"];
    });
    /* harmony import */


    var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/forgot-password/forgot-password.component */
    "./src/app/components/auth/forgot-password/forgot-password.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"];
    });
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/components/auth/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"];
    });
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/components/auth/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"];
    });
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"];
    });
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"];
    });
    /* harmony import */


    var _home_mining_contract_table_mining_contract_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/mining-contract-table/mining-contract-table.component */
    "./src/app/components/home/mining-contract-table/mining-contract-table.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MiningContractTableComponent", function () {
      return _home_mining_contract_table_mining_contract_table_component__WEBPACK_IMPORTED_MODULE_8__["MiningContractTableComponent"];
    });
    /* harmony import */


    var _dashboard_income_chart_income_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/income-chart/income-chart.component */
    "./src/app/components/dashboard/income-chart/income-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IncomeChartComponent", function () {
      return _dashboard_income_chart_income_chart_component__WEBPACK_IMPORTED_MODULE_9__["IncomeChartComponent"];
    });
    /* harmony import */


    var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./includes/footer/footer.component */
    "./src/app/components/includes/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"];
    });
    /* harmony import */


    var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./includes/header/header.component */
    "./src/app/components/includes/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _includes_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"];
    });
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"];
    });
    /* harmony import */


    var _referral_referral_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./referral/referral.component */
    "./src/app/components/referral/referral.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReferralComponent", function () {
      return _referral_referral_component__WEBPACK_IMPORTED_MODULE_13__["ReferralComponent"];
    });
    /* harmony import */


    var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./withdraw/withdraw.component */
    "./src/app/components/withdraw/withdraw.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"];
    });
    /* harmony import */


    var _auth_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./auth/verify-user/verify-user.component */
    "./src/app/components/auth/verify-user/verify-user.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function () {
      return _auth_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_15__["VerifyUserComponent"];
    });
    /* harmony import */


    var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/reset-password/reset-password.component */
    "./src/app/components/auth/reset-password/reset-password.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordComponent"];
    });
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/components/loader/loader.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"];
    });
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/components/privacy/privacy.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyComponent"];
    });
    /* harmony import */


    var _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./terms/terms.component */
    "./src/app/components/terms/terms.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
      return _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"];
    });
    /* harmony import */


    var _admin_purchase_admin_purchase_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-purchase/admin-purchase.component */
    "./src/app/components/admin-purchase/admin-purchase.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminPurchaseComponent", function () {
      return _admin_purchase_admin_purchase_component__WEBPACK_IMPORTED_MODULE_20__["AdminPurchaseComponent"];
    });
    /* harmony import */


    var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin-users/admin-users.component */
    "./src/app/components/admin-users/admin-users.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () {
      return _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_21__["AdminUsersComponent"];
    });
    /* harmony import */


    var _admin_withdraw_admin_withdraw_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin-withdraw/admin-withdraw.component */
    "./src/app/components/admin-withdraw/admin-withdraw.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminWithdrawComponent", function () {
      return _admin_withdraw_admin_withdraw_component__WEBPACK_IMPORTED_MODULE_22__["AdminWithdrawComponent"];
    });
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"];
    });
    /***/

  },

  /***/
  "./src/app/components/loader/loader.component.scss": function srcAppComponentsLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* my-loader.component.css */\n.loading-spinner {\n  background-color: #0000001f;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n.loading-spinner img {\n  align-self: end;\n}\n.loading-message {\n  text-align: center;\n  align-self: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvRTpcXHByb2plY3RzXFxMaXF1aWQtbWluaW5nLWFuZ3VsYXJcXGlxbWluaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQUE7QUFDQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBteS1sb2FkZXIuY29tcG9uZW50LmNzcyAqL1xyXG4ubG9hZGluZy1zcGlubmVyeyAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmxvYWRpbmctc3Bpbm5lciBpbWd7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4ubG9hZGluZy1tZXNzYWdle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxufSIsIi8qIG15LWxvYWRlci5jb21wb25lbnQuY3NzICovXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciBpbWcge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbi5sb2FkaW5nLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/loader/loader.component.ts": function srcAppComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(loaderService, ngxService) {
        _classCallCheck(this, LoaderComponent);

        // this.loaderService.isLoading.subscribe((v) => {
        //   // console.log(v);
        //   this.loading = v;
        //   this.loading ? this.ngxService.start() : this.ngxService.stop();
        this.loaderService = loaderService;
        this.ngxService = ngxService; // });
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
      }, {
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/components/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/components/main/main.component.scss": function srcAppComponentsMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts": function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/components/main/main.component.scss"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/components/privacy/privacy.component.scss": function srcAppComponentsPrivacyPrivacyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/privacy/privacy.component.ts": function srcAppComponentsPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyComponent = /*#__PURE__*/function () {
      function PrivacyComponent(translateService, utilityService) {
        var _this29 = this;

        _classCallCheck(this, PrivacyComponent);

        this.translateService = translateService;
        this.utilityService = utilityService;
        this.currentLang = 'en';
        this.utilityService.updateLang.subscribe(function (res) {
          _this29.currentLang = _this29.utilityService.getItem('lang');
        });
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0); // console.log(this.currentLang)
        }
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy/privacy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.component.scss */
      "./src/app/components/privacy/privacy.component.scss"))["default"]]
    })], PrivacyComponent);
    /***/
  },

  /***/
  "./src/app/components/referral/referral.component.scss": function srcAppComponentsReferralReferralComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img.clipboardicon {\n  position: absolute;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZlcnJhbC9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVmZXJyYWxcXHJlZmVycmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZmVycmFsL3JlZmVycmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZmVycmFsL3JlZmVycmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmNsaXBib2FyZGljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiaW1nLmNsaXBib2FyZGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/referral/referral.component.ts": function srcAppComponentsReferralReferralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferralComponent", function () {
      return ReferralComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/app/services/index.ts");

    var ReferralComponent = /*#__PURE__*/function () {
      function ReferralComponent(utilityService, router, toastService) {
        _classCallCheck(this, ReferralComponent);

        this.utilityService = utilityService;
        this.router = router;
        this.toastService = toastService;
        this.urlToCopy = '';
        this.title = 'toaster-not';
      }

      _createClass(ReferralComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.utilityService.getItem('user'))
          this.urlToCopy = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user')).referralCode;
          this.referralLink = "http://ec2-35-182-218-180.ca-central-1.compute.amazonaws.com/auth/register?referral=".concat(this.urlToCopy);
        }
      }, {
        key: "copyMessage",
        value: function copyMessage(val) {
          var selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = val;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          alert('URL Copied!');
        }
      }, {
        key: "copied",
        value: function copied(e) {
          // console.log(e)
          if (e.isSuccess) {
            // this.referralLink =  `http://ec2-35-182-218-180.ca-central-1.compute.amazonaws.com/auth/register?referral=${e.content}`
            this.toastService.success('Link copied', 'Success!');
          }
        }
      }, {
        key: "redirect",
        value: function redirect() {
          this.router.navigate(['auth/register'], {
            queryParams: {
              referral: this.urlToCopy
            }
          });
        }
      }]);

      return ReferralComponent;
    }();

    ReferralComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    ReferralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-referral',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./referral.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/referral/referral.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./referral.component.scss */
      "./src/app/components/referral/referral.component.scss"))["default"]]
    })], ReferralComponent);
    /***/
  },

  /***/
  "./src/app/components/terms/terms.component.scss": function srcAppComponentsTermsTermsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/terms/terms.component.ts": function srcAppComponentsTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
      return TermsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");

    var TermsComponent = /*#__PURE__*/function () {
      function TermsComponent(translateService, utilityService) {
        var _this30 = this;

        _classCallCheck(this, TermsComponent);

        this.translateService = translateService;
        this.utilityService = utilityService;
        this.currentLang = 'en';
        this.utilityService.updateLang.subscribe(function (res) {
          _this30.currentLang = _this30.utilityService.getItem('lang');
        });
      }

      _createClass(TermsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0);
        }
      }]);

      return TermsComponent;
    }();

    TermsComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }];
    };

    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/terms/terms.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms.component.scss */
      "./src/app/components/terms/terms.component.scss"))["default"]]
    })], TermsComponent);
    /***/
  },

  /***/
  "./src/app/components/withdraw/withdraw.component.scss": function srcAppComponentsWithdrawWithdrawComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepedbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.stepedbar .line {\n  border: 1px dashed #ffffff;\n  flex-grow: 1;\n  margin: 0px 20px;\n}\n.stepedbar span {\n  height: 40px;\n  width: 40px;\n  background: #dbef42;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 40px;\n  box-shadow: 0px 0px 0px 10px rgba(219, 239, 66, 0.41);\n}\nlabel {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXRoZHJhdy9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcd2l0aGRyYXdcXHdpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dpdGhkcmF3L3dpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQ0RKO0FES0E7RUFDRSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpdGhkcmF3L3dpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBlZGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAubGluZSB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZmZmZjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkYmVmNDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEwcHggcmdiKDIxOSAyMzkgNjYgLyA0MSUpO1xyXG4gIH1cclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iLCIuc3RlcGVkYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zdGVwZWRiYXIgLmxpbmUge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZmZmZjtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuLnN0ZXBlZGJhciBzcGFuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogI2RiZWY0MjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEwcHggcmdiYSgyMTksIDIzOSwgNjYsIDAuNDEpO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/withdraw/withdraw.component.ts": function srcAppComponentsWithdrawWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return WithdrawComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WithdrawComponent = /*#__PURE__*/function () {
      function WithdrawComponent(restfulService, toastService, utilityService) {
        _classCallCheck(this, WithdrawComponent);

        this.restfulService = restfulService;
        this.toastService = toastService;
        this.utilityService = utilityService;
        this.btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
        this.page = 1;
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWithdraw();
          this.userBalance = JSON.parse(this.utilityService.getItem('user')).totalBalance;
        }
      }, {
        key: "submitWithdraw",
        value: function submitWithdraw() {
          var _this31 = this;

          if (!this.btcAddress || !this.btcRegex.test(this.btcAddress)) {
            this.toastService.error('Please enter valid address', 'Error!');
            return;
          }

          this.restfulService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.withdraw, {
            address: this.btcAddress
          }).subscribe(function (res) {
            // this.withdrawHistory = res.data
            _this31.toastService.success(res.message, 'Success!');

            _this31.getWithdraw();

            _this31.btcAddress = '';
          }, function (err) {
            _this31.toastService.error(err.error.message, 'Error!');

            _this31.btcAddress = '';
          });
        }
      }, {
        key: "getWithdraw",
        value: function getWithdraw(page) {
          var _this32 = this;

          this.page = page || 1;
          this.restfulService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.getWithdraw + "?page=".concat(this.page, "&take=10")).subscribe(function (res) {
            _this32.withdrawHistory = res.data.data;
          });
        }
      }]);

      return WithdrawComponent;
    }();

    WithdrawComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RestfulService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-withdraw',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./withdraw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/withdraw/withdraw.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./withdraw.component.scss */
      "./src/app/components/withdraw/withdraw.component.scss"))["default"]]
    })], WithdrawComponent);
    /***/
  },

  /***/
  "./src/app/config/app-config.ts": function srcAppConfigAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
      return AppConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AppConfig = {
      endpoints: {
        login: 'auth/login',
        register: 'auth/register',
        verifyUser: 'auth/verify',
        forgotPassword: 'auth/forgot-password',
        resetPassword: 'auth/reset-password',
        packages: 'packages',
        rootPackages: 'packages/root-packages?contractYear=',
        purchasePackage: 'packages/purchase-package',
        createTransaction: 'transaction/create-transaction',
        myPackages: 'packages/my-packages',
        withdraw: 'withdraw-amount',
        getWithdraw: 'withdraw-amount',
        myProfile: 'auth/me',
        changePassword: 'auth/change-password',
        updateUser: 'users/update-user',
        uploadFile: 'file/upload-file',
        dashboard: 'dashboard',
        hashRate: 'dashboard/total-hash-rate?packageName=',
        adminUsers: 'admin/users',
        adminWithdraw: 'admin/withdraw-amount/complete-withdraw-history',
        adminPurchase: 'admin/purchased-packages',
        updateWithdraw: 'admin/withdraw-amount/update-status',
        createContact: 'customer-support',
        updateContact: 'admin/customer-support',
        getConcerns: 'admin/customer-support'
      },
      hashRates: {
        'SHA-256': 19.31,
        'SHA-256 Pro': 16.73,
        'SHA-256 BCH': 17.25,
        'Ethereum': 0.000068
      }
    };
    /***/
  },

  /***/
  "./src/app/guards/admin.guard.ts": function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(utilityService, toastService, router) {
        _classCallCheck(this, AdminGuard);

        this.utilityService = utilityService;
        this.toastService = toastService;
        this.router = router;
      }

      _createClass(AdminGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          var user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'));

          if (!!user && user.role.toLowerCase() == 'admin') {
            return true;
          }

          this.utilityService.clearStorage();
          this.toastService.warning('Please login first', 'Warning');
          this.router.navigate(['/auth/login']);
          return false;
        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AdminGuard);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts": function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, utilityService, toastService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.utilityService = utilityService;
        this.toastService = toastService;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          var token = this.utilityService.getToken();

          if (!!token) {
            return true;
          }

          this.utilityService.clearStorage();
          this.toastService.warning('Please login first', 'Warning');
          this.router.navigate(['/auth/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/route.guard.ts": function srcAppGuardsRouteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuard", function () {
      return RouteGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RouteGuard = /*#__PURE__*/function () {
      function RouteGuard(utilityService, toastService, router) {
        _classCallCheck(this, RouteGuard);

        this.utilityService = utilityService;
        this.toastService = toastService;
        this.router = router;
      }

      _createClass(RouteGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var token = this.utilityService.getToken();
          if (token) return true;
          this.toastService.warning('Please login first', 'Warning');
          this.router.navigate(['/auth/login']);
          return false;
        }
      }]);

      return RouteGuard;
    }();

    RouteGuard.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RouteGuard);
    /***/
  },

  /***/
  "./src/app/guards/user.guard.ts": function srcAppGuardsUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
      return UserGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserGuard = /*#__PURE__*/function () {
      function UserGuard(utilityService, toastService, router) {
        _classCallCheck(this, UserGuard);

        this.utilityService = utilityService;
        this.toastService = toastService;
        this.router = router;
      }

      _createClass(UserGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          var user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'));

          if (!!user && user.role && user.role.toLowerCase() != 'admin') {
            return true;
          }

          this.utilityService.clearStorage();
          this.toastService.warning('Please login first', 'Warning');
          this.router.navigate(['/auth/login']);
          return false;
        }
      }]);

      return UserGuard;
    }();

    UserGuard.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserGuard);
    /***/
  },

  /***/
  "./src/app/interceptors/auth.interceptor.ts": function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(utilityService, router) {
        _classCallCheck(this, AuthInterceptor);

        this.utilityService = utilityService;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this33 = this;

          if (!request.url.includes('auth/login') && !request.url.includes('https://blockchain.info/tobtc?currency=USD')) {
            request = request.clone({
              setHeaders: {
                network: this.utilityService.getItem('network') || 'main',
                lang: this.utilityService.getItem('lang') || 'en'
              }
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {}, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
              if (err.error.statusCode !== 401) {
                return;
              }

              _this33.utilityService.updateHeaderData(false);

              _this33.utilityService.clearStorage();

              _this33.router.navigate(['auth/login']);
            }
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/interceptors/token.interceptor.ts": function srcAppInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(utilityService) {
        _classCallCheck(this, TokenInterceptor);

        this.utilityService = utilityService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (this.utilityService.getToken() && !request.url.includes('https://blockchain.info/tobtc?currency=USD')) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(this.utilityService.getToken())
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard-routing.module.ts": function srcAppModulesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_route_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../guards/route.guard */
    "./src/app/guards/route.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");

    var routes = [{
      path: 'referral',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["ReferralComponent"]
    }, {
      path: 'withdraw',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["WithdrawComponent"],
      canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_1__["RouteGuard"]]
    }, {
      path: '',
      pathMatch: 'full',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_1__["RouteGuard"]]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.module.ts": function srcAppModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/modules/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/interceptors/token.interceptor */
    "./src/app/interceptors/token.interceptor.ts");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["IncomeChartComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ReferralComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["WithdrawComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: src_app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
        multi: true
      }],
      exports: [_components__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["IncomeChartComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ReferralComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["WithdrawComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/modules/home/home-routing.module.ts": function srcAppModulesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'about',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'privacy',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]
    }, {
      path: 'terms-and-conditions',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"]
    }, {
      path: 'contact',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/home/home.module.ts": function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/modules/home/home-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["MiningContractTableComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__["QRCodeModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
      exports: [_components__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["MiningContractTableComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/modules/index.ts": function srcAppModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/modules/dashboard/dashboard.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"];
    });
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/modules/home/home.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return _home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"];
    });
    /* harmony import */


    var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.module */
    "./src/app/modules/login/login.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"];
    });
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/modules/profile/profile.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"];
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"];
    });
    /***/

  },

  /***/
  "./src/app/modules/login/login-routing.module.ts": function srcAppModulesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");

    var routes = [{
      path: 'login',
      pathMatch: 'full',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'forgot-password',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
    }, {
      path: 'verify-user',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["VerifyUserComponent"]
    }, {
      path: 'reset-password',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/login/login.module.ts": function srcAppModulesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../components/auth/reset-password/reset-password.component */
    "./src/app/components/auth/reset-password/reset-password.component.ts");
    /* harmony import */


    var _components_auth_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../components/auth/verify-user/verify-user.component */
    "./src/app/components/auth/verify-user/verify-user.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/modules/login/login-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _components_auth_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_2__["VerifyUserComponent"], _components_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]],
      exports: [_components__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _components_auth_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_2__["VerifyUserComponent"], _components_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordComponent"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/modules/profile/profile-routing.module.ts": function srcAppModulesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_guards_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/guards/route.guard */
    "./src/app/guards/route.guard.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");

    var routes = [{
      path: 'account',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
      canActivate: [src_app_guards_route_guard__WEBPACK_IMPORTED_MODULE_3__["RouteGuard"]]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/profile/profile.module.ts": function srcAppModulesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/modules/profile/profile-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/interceptors/token.interceptor */
    "./src/app/interceptors/token.interceptor.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: src_app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
        multi: true
      }],
      exports: [_components__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/modules/shared/shared.module.ts": function srcAppModulesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/interceptors/auth.interceptor */
    "./src/app/interceptors/auth.interceptor.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [src_app_components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: src_app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
        multi: true
      }],
      exports: [//modules
      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], //components
      src_app_components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/services/index.ts": function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/notification/notification.service */
    "./src/app/services/notification/notification.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"];
    });
    /* harmony import */


    var _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/restful/restful.service */
    "./src/app/services/restful/restful.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RestfulService", function () {
      return _services_restful_restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"];
    });
    /* harmony import */


    var _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/toaster/toaster.service */
    "./src/app/services/toaster/toaster.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"];
    });
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"];
    });
    /* harmony import */


    var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loader/loader.service */
    "./src/app/services/loader/loader.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"];
    });
    /***/

  },

  /***/
  "./src/app/services/loader/loader.service.ts": function srcAppServicesLoaderLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService = function LoaderService() {
      _classCallCheck(this, LoaderService);

      this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    };

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/services/notification/notification.service.ts": function srcAppServicesNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationService = function NotificationService() {
      _classCallCheck(this, NotificationService);
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/restful/restful.service.ts": function srcAppServicesRestfulRestfulServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestfulService", function () {
      return RestfulService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RestfulService = /*#__PURE__*/function () {
      function RestfulService(http, utilityService) {
        _classCallCheck(this, RestfulService);

        this.http = http;
        this.utilityService = utilityService;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURI;
      }

      _createClass(RestfulService, [{
        key: "getHeaders",
        value: function getHeaders(defaultHeaders) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();

          if (defaultHeaders) {
            for (var i in defaultHeaders) {
              headers = headers.set(i, defaultHeaders[i]);
            }
          }

          return {
            headers: headers
          };
        }
      }, {
        key: "get",
        value: function get(url, params, setHeader, headers) {
          if (setHeader) return this.http.get(this.baseURL + url, this.getHeaders(headers));
          return this.http.get(this.baseURL + url);
        }
      }, {
        key: "put",
        value: function put(url, body, setHeader, headers) {
          if (setHeader) return this.http.put(this.baseURL + url, body, this.getHeaders(headers));
          return this.http.put(this.baseURL + url, body);
        }
      }, {
        key: "post",
        value: function post(url, body, setHeader, headers) {
          if (setHeader) {
            return this.http.post(this.baseURL + url, body, this.getHeaders(headers));
          }

          return this.http.post(this.baseURL + url, body);
        }
      }, {
        key: "delete",
        value: function _delete(url, body) {
          return this.http["delete"](this.baseURL + url, body);
        }
      }, {
        key: "patch",
        value: function patch(url, body, setHeader, headers) {
          if (setHeader) return this.http.patch(this.baseURL + url, body, this.getHeaders(headers));
          return this.http.patch(this.baseURL + url, body);
        }
      }]);

      return RestfulService;
    }();

    RestfulService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    RestfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], RestfulService);
    /***/
  },

  /***/
  "./src/app/services/toaster/toaster.service.ts": function srcAppServicesToasterToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ToasterService = /*#__PURE__*/function () {
      function ToasterService(toastr) {
        _classCallCheck(this, ToasterService);

        this.toastr = toastr;
      }

      _createClass(ToasterService, [{
        key: "success",
        value: function success(message, title) {
          this.toastr.success(message || 'Success', title);
        }
      }, {
        key: "error",
        value: function error(message, title) {
          this.toastr.error(message || 'Something went wrong.', title);
        }
      }, {
        key: "warning",
        value: function warning(message, title) {
          this.toastr.error(message, title);
        }
      }, {
        key: "info",
        value: function info(message, title) {
          this.toastr.error(message, title);
        }
      }]);

      return ToasterService;
    }();

    ToasterService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToasterService);
    /***/
  },

  /***/
  "./src/app/services/utility/utility.service.ts": function srcAppServicesUtilityUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UtilityService = /*#__PURE__*/function () {
      function UtilityService() {
        _classCallCheck(this, UtilityService);

        this.updateHeader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.updateLang = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.updateNetwork = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.navigateToViewPort = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(UtilityService, [{
        key: "getViewPort",
        value: function getViewPort() {
          return this.viewPort;
        }
      }, {
        key: "setViewPort",
        value: function setViewPort(d) {
          this.viewPort = d;
        }
      }, {
        key: "updateHeaderData",
        value: function updateHeaderData(d) {
          this.updateHeader.next(d);
        }
      }, {
        key: "updateNetworkData",
        value: function updateNetworkData(d) {
          this.updateNetwork.next(d);
        }
      }, {
        key: "updateLangData",
        value: function updateLangData(d) {
          this.updateLang.next(d);
        }
      }, {
        key: "viewPortRedirect",
        value: function viewPortRedirect(viewPort) {
          this.navigateToViewPort.next(viewPort);
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          var data = localStorage.getItem(key);
          return data;
        }
      }, {
        key: "setItem",
        value: function setItem(key, data) {
          localStorage.setItem(key, data);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          localStorage.clear();
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          localStorage.removeItem(item);
        }
      }, {
        key: "isString",
        value: function isString(data) {
          return typeof data;
        }
      }]);

      return UtilityService;
    }();

    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilityService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts": function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config/app-config */
    "./src/app/config/app-config.ts");

    var environment = {
      production: true,
      baseURI: 'http://ec2-3-139-59-21.us-east-2.compute.amazonaws.com/api/v1/',
      endpoints: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].endpoints
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config/app-config */
    "./src/app/config/app-config.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURI: 'http://ec2-3-139-59-21.us-east-2.compute.amazonaws.com/api/v1/',
      endpoints: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].endpoints
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\projects\Liquid-mining-angular\iqmining-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map