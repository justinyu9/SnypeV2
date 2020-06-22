;(function (e, a) {
  for (var i in a) e[i] = a[i]
})(
  exports,
  /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value)
      /******/ if (mode & 8) return value
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
      /******/ var ns = Object.create(null)
      /******/ __webpack_require__.r(ns)
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key]
            }.bind(null, key)
          )
      /******/ return ns
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/handler.ts'))
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/handler.ts':
        /*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
        /*! exports provided: hello, hi */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict'
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hello", function() { return hello; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hi", function() { return hi; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_dep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dep */ "./src/lib/dep.ts");\n\n\nconst hello = async (event, _context) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify({\n            message: \'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!\',\n            input: event,\n        }, null, 2),\n    };\n};\nconst hi = async (event, _context) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify({\n            message: \'function two is up!\',\n            version: 2,\n            dependency: Object(_lib_dep__WEBPACK_IMPORTED_MODULE_1__["default"])(),\n        }, null, 2),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oYW5kbGVyLnRzP2M0MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcbmltcG9ydCBkZXBlbmRlbmN5IGZyb20gJy4vbGliL2RlcCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XG5leHBvcnQgY29uc3QgaGVsbG86IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiAnR28gU2VydmVybGVzcyBXZWJwYWNrIChUeXBlc2NyaXB0KSB2MS4wISBZb3VyIGZ1bmN0aW9uIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseSEnLFxuICAgICAgICBpbnB1dDogZXZlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxuZXhwb3J0IGNvbnN0IGhpOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBfY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogJ2Z1bmN0aW9uIHR3byBpcyB1cCEnLFxuICAgICAgICB2ZXJzaW9uOiAyLFxuICAgICAgICBkZXBlbmRlbmN5OiBkZXBlbmRlbmN5KCksXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handler.ts\n'
          )

          /***/
        },

      /***/ './src/lib/dep.ts':
        /*!************************!*\
  !*** ./src/lib/dep.ts ***!
  \************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict'
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dependency; });\nfunction dependency() {\n    return \'this is a dependency\';\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2RlcC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvZGVwLnRzP2YyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwZW5kZW5jeSgpIHtcbiAgcmV0dXJuICd0aGlzIGlzIGEgZGVwZW5kZW5jeSdcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/dep.ts\n'
          )

          /***/
        },

      /***/ 'source-map-support/register':
        /*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          eval(
            'module.exports = require("source-map-support/register");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n'
          )

          /***/
        },

      /******/
    }
  )
)
