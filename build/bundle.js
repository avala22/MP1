/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/seacuke-bg.jpg */ "./assets/seacuke-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #0f1115;
  color: #f2f2f2;
  scroll-behavior: smooth;
}

h1, h2, h3 {
  font-weight: 600;
  margin-bottom: 1rem;
}

/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  z-index: 10;
}
.navbar .logo {
  color: #f2f2f2 !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.navbar .logo i {
  color: #4ab4a3;
  font-size: 1.5rem;
}
.navbar .logo:hover {
  color: #4ab4a3;
}
.navbar nav {
  display: flex;
  align-items: center;
}
.navbar nav a {
  color: #f2f2f2;
  margin: 0 0.5rem;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.navbar.shrink {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #f2f2f2;
  cursor: pointer;
}

/* Progress bar */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: #4ab4a3;
  width: 0%;
}

/* Active link highlight */
nav a.active {
  background: #4ab4a3;
  color: #0f1115;
  box-shadow: 0 0 10px #4ab4a3, 0 0 20px #4ab4a3;
  font-weight: bold;
}

/* HERO  */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/cover;
  background-attachment: fixed;
  animation: fadeIn 2s ease;
  z-index: 0;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
.hero h1, .hero p, .hero .btn {
  margin: 0.5rem 0;
  position: relative;
  z-index: 1;
  text-align: center;
}

.btn {
  background: #4ab4a3;
  color: #0f1115;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;
}
.btn:hover {
  transform: scale(1.1);
}

/*  BIOLOGY  */
.about {
  padding: 3rem 2rem;
  text-align: center;
}
.about .bio-grid {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.about .bio-card {
  background: #1a1f25;
  padding: 1.2rem;
  border-radius: 10px;
  flex: 1 1 250px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}
.about .bio-card:hover {
  transform: translateY(-5px);
}
.about .bio-card i {
  font-size: 2rem;
  color: #4ab4a3;
  margin-bottom: 0.5rem;
}

/*  CAROUSEL*/
.carousel-section {
  text-align: center;
  padding: 3rem 2rem;
}
.carousel-section .carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 900px;
  margin: auto;
}
.carousel-section .carousel .carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}
.carousel-section .carousel .slide {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.carousel-section .carousel .slide i {
  font-size: 2rem;
  color: #4ab4a3;
  margin-bottom: 0.5rem;
}
.carousel-section .carousel .slide img {
  width: 100%;
  max-width: 700px;
  height: 350px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.8rem;
}
.carousel-section .carousel .slide p {
  max-width: 700px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
}
.carousel-section .carousel button.prev,
.carousel-section .carousel button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  z-index: 5;
  transition: background 0.3s;
}
.carousel-section .carousel button.prev:hover,
.carousel-section .carousel button.next:hover {
  background: #4ab4a3;
}
.carousel-section .carousel button.prev {
  left: 10px;
}
.carousel-section .carousel button.next {
  right: 10px;
}

/* VIDEO */
.video {
  text-align: center;
  padding: 3rem 2rem;
}
.video video {
  max-width: 80%;
  border-radius: 10px;
}

/* RESEARCH*/
.modal-section {
  padding: 4rem 2rem;
  min-height: 50vh;
  text-align: center;
  background: #1a1f25;
}
.modal-section p {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}
.modal-section .research-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/*  CONTACT */
.contact {
  text-align: center;
  padding: 3rem 2rem;
}
.contact form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
.contact form input, .contact form textarea {
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 5px;
  border: none;
  font-family: "Poppins", sans-serif;
}

/* FOOTER  */
footer {
  text-align: center;
  padding: 1rem;
  background: #111;
}
footer .socials a {
  color: #f2f2f2;
  margin: 0 0.5rem;
  font-size: 1.2rem;
}

/*  MODAL  */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal[aria-hidden=true] {
  display: none;
}
.modal .modal-content {
  background: #f2f2f2;
  color: #0f1115;
  padding: 2rem;
  border-radius: 10px;
  max-width: 700px;
  position: relative;
}
.modal .close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/*  RESPONSIVE  */
@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }

  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
  }
  nav a {
    display: block;
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  nav.active {
    display: flex;
  }
}
@media (max-width: 768px) {
  .bio-grid {
    flex-direction: column;
  }

  .carousel-track {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["$brand: #4ab4a3;\r\n$dark: #0f1115;\r\n$light: #f2f2f2;\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n  background: $dark;\r\n  color: $light;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nh1, h2, h3 {\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* NAVBAR */\r\n.navbar {\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem;\r\n  background: rgba(0,0,0,0.8);\r\n  transition: all 0.3s ease;\r\n  z-index: 10;\r\n\r\n  .logo {\r\n    color: $light !important; \r\n    text-decoration: none; \r\n    font-weight: 700;\r\n    font-size: 1.4rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.4rem;\r\n\r\n    i {\r\n      color: $brand; \r\n      font-size: 1.5rem;\r\n    }\r\n\r\n    &:hover {\r\n      color: $brand; \r\n    }\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    align-items: center;\r\n    a {\r\n      color: $light;\r\n      margin: 0 0.5rem;\r\n      text-decoration: none;\r\n      padding: 0.4rem 0.8rem;\r\n      border-radius: 6px;\r\n      transition: all 0.3s ease;\r\n    }\r\n  }\r\n\r\n  &.shrink {\r\n    padding: 0.5rem;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n\r\n.hamburger {\r\n  display: none;\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  color: $light;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Progress bar */\r\n.progress-bar {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: $brand;\r\n  width: 0%;\r\n}\r\n\r\n/* Active link highlight */\r\nnav a.active {\r\n  background: $brand;\r\n  color: $dark;\r\n  box-shadow: 0 0 10px $brand, 0 0 20px $brand;\r\n  font-weight: bold;\r\n}\r\n\r\n/* HERO  */\r\n.hero {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center; \r\n  align-items: center;       \r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  background: url(\"../assets/seacuke-bg.jpg\") no-repeat center/cover;\r\n  background-attachment: fixed;\r\n  animation: fadeIn 2s ease;\r\n  z-index: 0;\r\n\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    inset: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 0;\r\n  }\r\n\r\n  h1, p, .btn {\r\n    margin: 0.5rem 0;\r\n    position: relative;\r\n    z-index: 1;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.btn {\r\n  background: $brand;\r\n  color: $dark;\r\n  padding: 0.6rem 1.2rem;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  transition: transform 0.2s;\r\n  &:hover { transform: scale(1.1); }\r\n}\r\n\r\n/*  BIOLOGY  */\r\n.about {\r\n  padding: 3rem 2rem;\r\n  text-align: center;\r\n\r\n  .bio-grid {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-top: 1.5rem;\r\n  }\r\n\r\n  .bio-card {\r\n    background: #1a1f25;\r\n    padding: 1.2rem;\r\n    border-radius: 10px;\r\n    flex: 1 1 250px;\r\n    max-width: 300px;\r\n    text-align: center;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.4);\r\n    transition: transform 0.3s ease;\r\n\r\n    &:hover { transform: translateY(-5px); }\r\n\r\n    i {\r\n      font-size: 2rem;\r\n      color: $brand;\r\n      margin-bottom: 0.5rem;\r\n    }\r\n  }\r\n}\r\n\r\n/*  CAROUSEL*/\r\n.carousel-section {\r\n  text-align: center;\r\n  padding: 3rem 2rem;\r\n\r\n  .carousel {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    max-width: 900px;\r\n    margin: auto;\r\n\r\n    .carousel-track {\r\n      display: flex;\r\n      transition: transform 0.5s ease;\r\n      width: 100%;\r\n    }\r\n\r\n    .slide {\r\n      min-width: 100%;\r\n      flex-shrink: 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      padding: 1rem;\r\n\r\n      i {\r\n        font-size: 2rem;\r\n        color: $brand;\r\n        margin-bottom: 0.5rem;\r\n      }\r\n\r\n      img {\r\n        width: 100%;\r\n        max-width: 700px;\r\n        height: 350px; \r\n        object-fit: cover; \r\n        border-radius: 10px;\r\n        margin-bottom: 0.8rem;\r\n      }\r\n\r\n      p {\r\n        max-width: 700px;\r\n        text-align: center;\r\n        font-size: 1rem;\r\n        line-height: 1.5;\r\n      }\r\n    }\r\n\r\n    button.prev,\r\n    button.next {\r\n      position: absolute;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      background: rgba(0, 0, 0, 0.5);\r\n      border: none;\r\n      color: white;\r\n      font-size: 2rem;\r\n      cursor: pointer;\r\n      padding: 0.5rem 1rem;\r\n      border-radius: 6px;\r\n      z-index: 5;\r\n      transition: background 0.3s;\r\n    }\r\n\r\n    button.prev:hover,\r\n    button.next:hover { background: $brand; }\r\n\r\n    button.prev { left: 10px; }\r\n    button.next { right: 10px; }\r\n  }\r\n}\r\n\r\n/* VIDEO */\r\n.video {\r\n  text-align: center;\r\n  padding: 3rem 2rem;\r\n  video { max-width: 80%; border-radius: 10px; }\r\n}\r\n\r\n/* RESEARCH*/\r\n.modal-section {\r\n  padding: 4rem 2rem;\r\n  min-height: 50vh;\r\n  text-align: center;\r\n  background: #1a1f25;\r\n\r\n  p {\r\n    max-width: 700px;\r\n    margin: 0 auto 2rem;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n  }\r\n\r\n  .research-buttons {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n/*  CONTACT */\r\n.contact {\r\n  text-align: center;\r\n  padding: 3rem 2rem;\r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 400px;\r\n    margin: auto;\r\n    input, textarea {\r\n      margin: 0.5rem 0;\r\n      padding: 0.6rem;\r\n      border-radius: 5px;\r\n      border: none;\r\n      font-family: 'Poppins', sans-serif;\r\n    }\r\n  }\r\n}\r\n\r\n/* FOOTER  */\r\nfooter {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  background: #111;\r\n  .socials a {\r\n    color: $light;\r\n    margin: 0 0.5rem;\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n/*  MODAL  */\r\n.modal {\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(0,0,0,0.8);\r\n  display: flex; justify-content: center; align-items: center;\r\n  &[aria-hidden=\"true\"] { display: none; }\r\n\r\n  .modal-content {\r\n    background: $light;\r\n    color: $dark;\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    max-width: 700px;\r\n    position: relative;\r\n  }\r\n  .close {\r\n    background: none;\r\n    border: none;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 10px; right: 10px;\r\n  }\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeIn {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n/*  RESPONSIVE  */\r\n@media (max-width: 1024px) {\r\n  .hamburger { display: block; }\r\n  nav {\r\n    display: none;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    text-align: center;\r\n    background: rgba(0,0,0,0.9);\r\n    a {\r\n      display: block;\r\n      padding: 1rem;\r\n      margin: 0;\r\n      border-bottom: 1px solid rgba(255,255,255,0.1);\r\n    }\r\n  }\r\n  nav.active { display: flex; }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .bio-grid { flex-direction: column; }\r\n  .carousel-track { width: 100%; }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/cucumber.jpeg":
/*!******************************!*\
  !*** ./assets/cucumber.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d9b311a45d3bd1b848b.jpeg";

/***/ }),

/***/ "./assets/mantis.jpg":
/*!***************************!*\
  !*** ./assets/mantis.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a66722ff516e9b78757a.jpg";

/***/ }),

/***/ "./assets/seacucumber.jpg":
/*!********************************!*\
  !*** ./assets/seacucumber.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7abd3bd5658b6412beea.jpg";

/***/ }),

/***/ "./assets/seacuke-bg.jpg":
/*!*******************************!*\
  !*** ./assets/seacuke-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ed6b2df9f0a2d062a95a.jpg";

/***/ }),

/***/ "./assets/seacuke.jpg":
/*!****************************!*\
  !*** ./assets/seacuke.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97c9340f3ef0349d2833.jpg";

/***/ }),

/***/ "./assets/seacuke.mp4":
/*!****************************!*\
  !*** ./assets/seacuke.mp4 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8969300bc0cab90b16e.mp4";

/***/ }),

/***/ "./assets/starfish.jpg":
/*!*****************************!*\
  !*** ./assets/starfish.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38764351d4acba8bebd7.jpg";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/seacucumber.jpg */ "./assets/seacucumber.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cucumber.jpeg */ "./assets/cucumber.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/starfish.jpg */ "./assets/starfish.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/mantis.jpg */ "./assets/mantis.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/seacuke.jpg */ "./assets/seacuke.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/seacuke.mp4 */ "./assets/seacuke.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <title>Sea Cucumber Bioinspiration</title>\r\n  <!-- Icons & Fonts -->\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"/>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n  <!-- Sticky Navbar -->\r\n  <header class=\"navbar\" id=\"navbar\">\r\n    <a href=\"#hero\" class=\"logo\"><i class=\"fa-solid fa-water\" aria-hidden=\"true\"></i> Sea Cucumber</a>\r\n\r\n    <button class=\"hamburger\" id=\"hamburger\" aria-label=\"Toggle navigation\">\r\n      <i class=\"fa-solid fa-bars\" aria-hidden=\"true\"></i>\r\n    </button>\r\n\r\n    <nav id=\"nav-links\" aria-label=\"Primary Navigation\">\r\n      <a href=\"#hero\">Home</a>\r\n      <a href=\"#about\">Biology</a>\r\n      <a href=\"#carousel\">Applications</a>\r\n      <a href=\"#video\">Video</a>\r\n      <a href=\"#modal-section\">Research</a>\r\n      <a href=\"#contact\">Contact</a>\r\n    </nav>\r\n\r\n    <div class=\"progress-bar\" id=\"progress-bar\"></div>\r\n  </header>\r\n\r\n  <!-- Hero -->\r\n  <section id=\"hero\" class=\"hero fade-in\">\r\n    <h1>Sea Cucumbers: Nature’s Shape Shifters</h1>\r\n    <p>Mutable collagenous tissue allows sea cucumbers to stiffen or soften their bodies in seconds that inspires innovations in robotics and medicine.</p>\r\n    <button class=\"btn\" data-open=\"#modal-biology\">Learn More</button>\r\n  </section>\r\n\r\n  <!-- Biology -->\r\n  <section id=\"about\" class=\"about\">\r\n    <h2>Biology: Mutable Collagenous Tissue</h2>\r\n    <div class=\"bio-grid\">\r\n      <div class=\"bio-card\">\r\n        <i class=\"fa-solid fa-water\" aria-hidden=\"true\"></i>\r\n        <p>Sea cucumbers can instantly change their body stiffness to avoid predators or squeeze through tight spaces.</p>\r\n      </div>\r\n      <div class=\"bio-card\">\r\n        <i class=\"fa-solid fa-dna\" aria-hidden=\"true\"></i>\r\n        <p>This is controlled by <strong>mutable collagenous tissue</strong>, which rearranges collagen fibers under nervous system signals.</p>\r\n      </div>\r\n      <div class=\"bio-card\">\r\n        <i class=\"fa-solid fa-shield-halved\" aria-hidden=\"true\"></i>\r\n        <p>Research (Wilkie, 2002) shows these tissues act like “biological smart materials” that toggle between soft and rigid states.</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Applications Carousel -->\r\n  <section id=\"carousel\" class=\"carousel-section\">\r\n    <h2>Bioinspired Applications</h2>\r\n    <div class=\"carousel\" aria-roledescription=\"carousel\">\r\n      <button class=\"prev\" aria-label=\"Previous slide\">&#10094;</button>\r\n      <div class=\"carousel-track\">\r\n        \r\n        <!-- Slide 1 -->\r\n        <div class=\"slide\">\r\n          <i class=\"fa-solid fa-robot\" aria-hidden=\"true\"></i>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Close-up of sea cucumber skin with collagen knobs\">\r\n          <p>Sea cucumber dermis demonstrates <strong>mutable collagenous tissue</strong>, a living smart material that can rapidly shift from soft to rigid.</p>\r\n        </div>\r\n        \r\n        <!-- Slide 2 -->\r\n        <div class=\"slide\">\r\n          <i class=\"fa-solid fa-screwdriver-wrench\" aria-hidden=\"true\"></i>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Stethoscope representing medical devices\">\r\n          <p>Medical devices like catheters and surgical tools could use this principle to remain flexible during navigation and lock rigidly when needed.</p>\r\n        </div>\r\n        \r\n        <!-- Slide 3 -->\r\n        <div class=\"slide\">\r\n          <i class=\"fa-solid fa-laptop-medical\" aria-hidden=\"true\"></i>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Underwater robot with multiple legs\">\r\n          <p>Soft-bodied underwater robots mimic sea cucumber tissue, allowing them to crawl gently across reefs yet stiffen to handle heavy loads.</p>\r\n        </div>\r\n        \r\n        <!-- Slide 4 -->\r\n        <div class=\"slide\">\r\n          <i class=\"fa-solid fa-layer-group\" aria-hidden=\"true\"></i>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Colorful mantis shrimp close-up\">\r\n          <p>The <strong>Bouligand structure</strong> of mantis shrimp shells and sea cucumber collagen inspire new <em>composite materials</em> for aerospace and biomedical use.</p>\r\n        </div>\r\n\r\n      </div>\r\n      <button class=\"next\" aria-label=\"Next slide\">&#10095;</button>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Video -->\r\n  <section id=\"video\" class=\"video\">\r\n    <h2>See It in Action</h2>\r\n    <video controls poster=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\">\r\n      <source src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" type=\"video/mp4\">\r\n      Your browser does not support HTML5 video.\r\n    </video>\r\n  </section>\r\n\r\n  <!-- Research Section -->\r\n  <section id=\"modal-section\" class=\"modal-section\">\r\n    <h2>Research Spotlight</h2>\r\n    <p>Explore the scientific research that connects sea cucumber biology to advanced engineering materials. Select a topic below to dive deeper:</p>\r\n    <div class=\"research-buttons\">\r\n      <button class=\"btn\" data-open=\"#modal-biology\">Biology Studies</button>\r\n      <button class=\"btn\" data-open=\"#modal-engineering\">Engineering Applications</button>\r\n      <button class=\"btn\" data-open=\"#modal-materials\">Materials Science</button>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Contact -->\r\n  <section id=\"contact\" class=\"contact\">\r\n    <h2>Get in Touch</h2>\r\n    <form>\r\n      <input type=\"text\" placeholder=\"Your name\" aria-label=\"Your name\" />\r\n      <input type=\"email\" placeholder=\"Your email\" aria-label=\"Your email\" />\r\n      <textarea rows=\"4\" placeholder=\"Your message\" aria-label=\"Your message\"></textarea>\r\n      <button class=\"btn\" type=\"submit\">Send</button>\r\n    </form>\r\n  </section>\r\n\r\n  <!-- Footer -->\r\n  <footer>\r\n    <p>© 2025 Sea Cucumber Bioinspiration</p>\r\n    <div class=\"socials\" aria-label=\"Social links\">\r\n      <a href=\"https://github.com/\" target=\"_blank\"><i class=\"fa-brands fa-github\"></i></a>\r\n      <a href=\"https://youtube.com/\" target=\"_blank\"><i class=\"fa-brands fa-youtube\"></i></a>\r\n      <a href=\"https://linkedin.com/\" target=\"_blank\"><i class=\"fa-brands fa-linkedin\"></i></a>\r\n    </div>\r\n  </footer>\r\n\r\n  <!-- Biology Modal -->\r\n  <div id=\"modal-biology\" class=\"modal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\">\r\n    <div class=\"modal-content\">\r\n      <button class=\"close\" data-close aria-label=\"Close modal\">&times;</button>\r\n      <h3>Biology Studies</h3>\r\n      <p><strong>Wilkie (2002)</strong> showed that mutable collagenous tissue can stiffen or soften within seconds under nervous system control.</p>\r\n      <p>This ability allows sea cucumbers to escape predators by softening or defend themselves by stiffening their dermis. It’s one of the clearest examples of “living smart materials.”</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Engineering Modal -->\r\n  <div id=\"modal-engineering\" class=\"modal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\">\r\n    <div class=\"modal-content\">\r\n      <button class=\"close\" data-close aria-label=\"Close modal\">&times;</button>\r\n      <h3>Engineering Applications</h3>\r\n      <p><strong>Zhang et al. (2016)</strong> developed polymers that mimic sea cucumber tissue, allowing robotic arms to bend softly and then stiffen to lift objects.</p>\r\n      <p>Applications include surgical tools, disaster relief robots, and adaptive wearable devices that need both flexibility and strength.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Materials Modal -->\r\n  <div id=\"modal-materials\" class=\"modal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\">\r\n    <div class=\"modal-content\">\r\n      <button class=\"close\" data-close aria-label=\"Close modal\">&times;</button>\r\n      <h3>Materials Science</h3>\r\n      <p><strong>Trotter et al. (1995)</strong> studied how collagen fibrils assemble/disassemble in echinoderms. These insights led to composite materials with tunable stiffness.</p>\r\n      <p>Modern research applies these principles to 3D-printed polymers, aerospace materials, and biomedical implants that adapt to mechanical stress.</p>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

/* Smooth Scroll */
function smoothScroll(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
  var start = window.scrollY;
  var end = target.getBoundingClientRect().top + window.scrollY - 50;
  var distance = end - start;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var progress = Math.min(timeElapsed / duration, 1);
    var ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, start + distance * ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}
/* Attach smooth scroll */


document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    if (target) smoothScroll(target, 800);
    document.getElementById("nav-links").classList.remove("active");
  });
});
/* Carousel */

var track = document.querySelector(".carousel-track");
var slides = track ? Array.from(track.children) : [];
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var index = 0;

function updateSlide() {
  if (track) track.style.transform = "translateX(-".concat(index * 100, "%)");
}

if (nextButton) nextButton.addEventListener("click", function () {
  index = (index + 1) % slides.length;
  updateSlide();
});
if (prevButton) prevButton.addEventListener("click", function () {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});
/* Modal */

document.querySelectorAll("[data-open]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(btn.dataset.open).setAttribute("aria-hidden", "false");
  });
});
document.querySelectorAll("[data-close]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".modal").setAttribute("aria-hidden", "true");
  });
});
/* Navbar shrink */

var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) navbar.classList.add("shrink");else navbar.classList.remove("shrink");
});
/* Progress bar */

var progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  var docHeight = document.body.scrollHeight - window.innerHeight;
  var scrollPercent = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
  progressBar.style.width = scrollPercent + "%";
});
/* Scroll spy */

var sections = document.querySelectorAll("section");
var navLinksAll = document.querySelectorAll("nav a");
window.addEventListener("scroll", function () {
  var fromTop = window.scrollY + navbar.offsetHeight + 50;
  var currentSection = null;
  sections.forEach(function (section) {
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinksAll.forEach(function (link) {
    link.classList.remove("active");

    if (currentSection && link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    navLinksAll.forEach(function (link) {
      return link.classList.remove("active");
    });
    document.querySelector('nav a[href="#contact"]').classList.add("active");
  }
});
/* Hamburger toggle */

var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map