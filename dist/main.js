/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    margin: 0;\\r\\n    display: grid;\\r\\n    grid-template-rows: 40px 1fr 40px;\\r\\n    min-height: 100vh;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter{\\r\\n    background-color: #f8f9fa;\\r\\n    outline: 1px solid black;\\r\\n}\\r\\n\\r\\n.boards{\\r\\n    display: grid;\\r\\n    align-items: center;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    \\r\\n}\\r\\n\\r\\n.player,\\r\\n.ai{\\r\\n    height: 300px;\\r\\n    width: 300px;\\r\\n    background-color: #e9ecef;\\r\\n    display: grid;\\r\\n    grid-template: repeat(10, 1fr)/repeat(10,1fr);\\r\\n    position: relative;\\r\\n    grid-gap: 0;\\r\\n}\\r\\n\\r\\n.boardContainer{\\r\\n    background-color: #f8f9fa;\\r\\n    height: 100%;\\r\\n    border: solid 1px black;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.placeShip{\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    top: calc(180px + 50%);\\r\\n    background-color: antiquewhite;\\r\\n}\\r\\n\\r\\n.tilesPlayer,\\r\\n.tilePlace,\\r\\n.tilesAi{\\r\\n\\r\\n    border: 1px solid;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: 28px;\\r\\n    width: 28px;\\r\\n}\\r\\n\\r\\n.playeShip{\\r\\n    position: absolute;\\r\\n\\r\\n    height: 100px;\\r\\n    left: 10px;\\r\\n    top: 100px;\\r\\n    margin-top: -100px;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Component_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/Gameboard */ \"./src/Component/Gameboard.js\");\n/* harmony import */ var _Component_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/Ship */ \"./src/Component/Ship.js\");\n\r\n\r\n\r\nfunction App() {\r\n    let startgame = false\r\n    const template = () => {\r\n      return `\r\n          <header>HEADER!</header>\r\n          <div class=\"boards\">\r\n            <div class=\"boardContainer\">\r\n              <div class=\"player\"> \r\n              </div>\r\n              <div class=\"placeShip\">\r\n              </div>\r\n            </div>\r\n            <div class=\"boardContainer\">\r\n              <div class=\"ai\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <footer>FOOTER!</footer>\r\n        `;\r\n    }\r\n\r\n    const initialize = () => {\r\n      document.body.innerHTML = template(); \r\n      const tileClick = document.getElementsByClassName('tilesAi');  \r\n      const tileClickPlayer = document.getElementsByClassName('tilesPlayer');  \r\n      const shipList = [4,4,3,3,2,2,1,1];\r\n      const playerBoard = (0,_Component_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Player\");\r\n      const aiBoard = (0,_Component_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Ai\")\r\n      playerBoard.createGameboard(\"player\");\r\n      aiBoard.createGameboard(\"ai\")\r\n\r\n      \r\n      let shipPlaced = dragShip(playerBoard, shipList);\r\n      let aishipPlaced = aiShip(aiBoard, shipList);\r\n\r\n      console.log(playerBoard.getBoard());\r\n\r\n  \r\n  \r\n      \r\n   \r\n      Array.from(tileClick).forEach(\r\n        (element,index) => {\r\n          \r\n          element.addEventListener('click', ()=>{\r\n            if(startgame){\r\n              let randomNum =  Math.floor(Math.random() * 100);\r\n              if(!aiBoard.getBoard()[Math.floor(index/10)][index%10].attacked){\r\n                aiBoard.receiveAttack('Ai', index%10,Math.floor(index/10));\r\n                element.innerHTML = \"x\";\r\n                console.log(aiBoard.getBoard());\r\n\r\n                while (playerBoard.getBoard()[Math.floor(randomNum/10)][randomNum%10].attacked){\r\n                  randomNum =  Math.floor(Math.random() * 100)\r\n                }\r\n                playerBoard.receiveAttack('Player', randomNum%10,Math.floor(randomNum/10));\r\n                tileClickPlayer[randomNum].innerHTML = \"x\";\r\n\r\n              }\r\n              \r\n\r\n\r\n              if(aishipPlaced.every(ship => ship.isSunk())){\r\n                console.log(\"You Win\")\r\n              }\r\n\r\n             \r\n              if(shipPlaced.every(ship => ship.isSunk())){\r\n                console.log(\"You Lose\")\r\n              }\r\n          }})\r\n        }\r\n\r\n      )  \r\n      ////////////////////////////////////////////////////////////////////////////////////  \r\n    }\r\n    const dragShip= (playerBoard, shipList) => {\r\n      const shipPlace = document.querySelector('.placeShip');\r\n      const tileClick = document.getElementsByClassName('tilesPlayer');\r\n      const tilePlace = document.getElementsByClassName('tilePlace');\r\n      \r\n      let ships = [];\r\n      let num = 0;\r\n      let index = 0;\r\n      let shipIndex = 0;\r\n\r\n      shipList.forEach((element) => { \r\n        ships.push((0,_Component_Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`ship${num}`, element));\r\n        let spaceTiles = ''\r\n        for(let tile = 0; tile < ships[shipIndex].getLength(); tile++){\r\n            spaceTiles += \"<div class='tilePlace'></div>\"\r\n        }\r\n        shipPlace.innerHTML= spaceTiles;\r\n        num++;\r\n      })\r\n\r\n      shipPlace.setAttribute('draggable', true);\r\n      shipPlace.style.flexDirection = \"column\";\r\n      console.log(tileClick)\r\n      Array.from(tilePlace).forEach(\r\n        (element,i) =>{\r\n          element.addEventListener(\"mousedown\", (e) => {\r\n\r\n            console.log('mousedown: ',i)\r\n            index=i;\r\n          });  \r\n      })\r\n      \r\n\r\n      Array.from(tileClick).forEach(\r\n        (element) => {\r\n          element.addEventListener('dragover', (e)=>{\r\n            e.preventDefault();\r\n          })\r\n        }\r\n      ) \r\n      Array.from(tileClick).forEach(\r\n        (element,i) => {\r\n          element.addEventListener('drop', (e)=>{\r\n           \r\n            let spaceTiles = ''\r\n            console.log(index)\r\n            playerBoard.placeShip(ships[shipIndex],i%10,Math.floor(i/10-index));\r\n\r\n            if(ships[shipIndex].getPlaced()){\r\n              shipIndex++;\r\n            }\r\n            \r\n            \r\n\r\n          if(shipIndex >= shipList.length){\r\n            shipPlace.innerHTML = '';\r\n            const startBtn = document.createElement('button');\r\n            const resetBtn = document.createElement('button');\r\n            startBtn.innerText = 'START'\r\n            resetBtn.innerText = 'RESET'\r\n            shipPlace.append(startBtn,resetBtn);\r\n\r\n            startBtn.addEventListener('click',()=>{\r\n              startgame=true;\r\n              console.log('clicked')\r\n            })\r\n            resetBtn.addEventListener('click',()=>{\r\n              const game = App();\r\n              game.initialize();\r\n            })\r\n\r\n          }else{\r\n            for(let tile = 0; tile < ships[shipIndex].getLength(); tile++){\r\n              spaceTiles += \"<div class='tilePlace'></div>\"\r\n          }\r\n            shipPlace.innerHTML= spaceTiles;\r\n          }\r\n          \r\n          Array.from(tilePlace).forEach(\r\n            (element,i) =>{\r\n              element.addEventListener(\"mousedown\", (e) => {\r\n                index=i;\r\n              });  \r\n          })\r\n\r\n\r\n          })\r\n        }) \r\n        return ships\r\n    }\r\n    const aiShip= (aiBoard, shipList) => {\r\n      \r\n      let ships = [];\r\n      let num = 0;\r\n      let shipIndex = 0;\r\n\r\n  \r\n      shipList.forEach((element) => { \r\n        ships.push((0,_Component_Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`ship${num}`, element));\r\n        num++;\r\n      })\r\n\r\n      \r\n      while(shipIndex < ships.length){\r\n        let digitx =  Math.floor(Math.random() * 100);\r\n        console.log(digitx)\r\n        aiBoard.placeShip(ships[shipIndex],digitx%10,Math.floor(digitx/10));\r\n        if(ships[shipIndex].getPlaced()){\r\n          shipIndex++;\r\n        }\r\n        \r\n      }\r\n      \r\n\r\n        return ships\r\n    }\r\n    \r\n\r\n    return{template, initialize, dragShip};\r\n  };\r\n\r\n\r\n  const game = App();\r\n\r\n  game.initialize();\n\n//# sourceURL=webpack://battleship/./src/App.js?");

/***/ }),

/***/ "./src/Component/Gameboard.js":
/*!************************************!*\
  !*** ./src/Component/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Gameboard (name) {\r\n    const board = [];\r\n    const tileClick = document.getElementsByClassName(`tiles${name}`);\r\n\r\n    const createGameboard = (string) => {\r\n        const boardname = document.querySelector(`.${string}`)\r\n        for (let y = 0; y < 10; y++) {\r\n            board[y] = [];\r\n            for (let x = 0; x < 10; x++) {\r\n                const tiles = document.createElement(\"div\");\r\n                tiles.classList.add(`tiles${string.charAt(0).toUpperCase() + string.slice(1)}`);\r\n                board[y].push({shipObject: null, shipIndex: undefined, attacked :false })\r\n                boardname.appendChild(tiles);\r\n            }\r\n        }\r\n\r\n    }\r\n    const getBoard = () => {\r\n        return board\r\n    }\r\n\r\n    const isAvailable = (ship, x, y) => {\r\n        for(let checkTiles = 0; checkTiles < ship.getLength(); checkTiles++){\r\n            if(y+checkTiles >= 10 || y+checkTiles <0){\r\n                return false\r\n            }\r\n            if(board[y+checkTiles][x].shipObject !== null){\r\n                return false\r\n            } \r\n        }\r\n        return true;\r\n    }\r\n\r\n    const placeShip = (ship, x, y) =>{\r\n        if(isAvailable(ship, x, y)){\r\n            for(let loop = 0; loop < ship.getLength(); loop++){\r\n                Array.from(tileClick)[(y)*10 + (x) + loop*10].style.backgroundColor = \"#b4d2e7\";\r\n                Array.from(tileClick)[(y)*10 + (x) + loop*10].classList.add('target');\r\n                board[y+loop][x].shipObject = ship;\r\n                board[y+loop][x].shipIndex = loop;\r\n                ship.isPlaced()\r\n            } \r\n        }\r\n    }\r\n\r\n    const receiveAttack = (box, x, y) => {\r\n        console.log(x,y);\r\n        if(!board[y][x].attacked){\r\n            if(board[y][x].shipObject !== null){\r\n                const hitTarget = document.getElementsByClassName(`tiles${box}`);\r\n                board[y][x].shipObject.hit(board[y][x].shipIndex); \r\n                hitTarget[y*10+x].style.color = \"blue\";\r\n\r\n              } \r\n\r\n            board[y][x].attacked = true;  \r\n        } \r\n\r\n    }\r\n\r\n    \r\n\r\n    return {createGameboard, getBoard, isAvailable, placeShip, receiveAttack}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/Component/Gameboard.js?");

/***/ }),

/***/ "./src/Component/Ship.js":
/*!*******************************!*\
  !*** ./src/Component/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship (name, length) {\r\n    let health = length;\r\n    let placed = false;\r\n    let shipArray = [];\r\n    for(let arrIndex = 0; arrIndex < length; arrIndex++){\r\n        shipArray.push({ hit: false });\r\n    }\r\n    const hit = (index) => shipArray[index].hit = true;\r\n    const isSunk = () => shipArray.every((element) => element.hit ==true);\r\n    const isPlaced = () => placed = true;\r\n    const getPlaced = () => placed;\r\n    const getLength = () => length;\r\n    const getHealth = () => health;\r\n    const getShipArray= () => shipArray;\r\n    const getName = () => name;\r\n    \r\n    return{\r\n        hit,   isSunk, isPlaced,\r\n        getShipArray, getLength, getHealth,\r\n        getName, getPlaced\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Component/Ship.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;