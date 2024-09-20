"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _figlet = _interopRequireDefault(require("figlet"));
var _Standard = _interopRequireDefault(require("./Standard.flf"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Monscii = exports["default"] = /*#__PURE__*/function () {
  function Monscii() {
    _classCallCheck(this, Monscii);
    _defineProperty(this, "animationFrameId", null);
    _defineProperty(this, "lastFrameTime", 0);
    _defineProperty(this, "heroLines", []);
    if (!Monscii.stylesInjected) {
      this.injectStyles();
      Monscii.stylesInjected = true;
    }
    _figlet["default"].parseFont("Standard", _Standard["default"]);
  }
  return _createClass(Monscii, [{
    key: "convertImageToASCII",
    value: function () {
      var _convertImageToASCII = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(imageSrc) {
        var options,
          _options$width,
          width,
          _options$targetElemen,
          targetElement,
          _options$charSet,
          charSet,
          _options$sensitivity,
          sensitivity,
          _options$hero,
          hero,
          img,
          canvas,
          imageData,
          asciiElement,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _options$width = options.width, width = _options$width === void 0 ? 100 : _options$width, _options$targetElemen = options.targetElement, targetElement = _options$targetElemen === void 0 ? document.body : _options$targetElemen, _options$charSet = options.charSet, charSet = _options$charSet === void 0 ? " .,:;i1tfLCG08@" : _options$charSet, _options$sensitivity = options.sensitivity, sensitivity = _options$sensitivity === void 0 ? 1 : _options$sensitivity, _options$hero = options.hero, hero = _options$hero === void 0 ? "" : _options$hero;
              _context.prev = 2;
              _context.next = 5;
              return this.loadImage(imageSrc);
            case 5:
              img = _context.sent;
              canvas = this.createCanvas(img.width, img.height, width);
              imageData = this.getImageDataFromCanvas(canvas, img);
              if (!hero) {
                _context.next = 14;
                break;
              }
              _context.next = 11;
              return this.generateHeroText(hero, width);
            case 11:
              this.heroLines = _context.sent;
              _context.next = 15;
              break;
            case 14:
              this.heroLines = [];
            case 15:
              _context.next = 17;
              return this.createASCIIArt(imageData, charSet, sensitivity);
            case 17:
              asciiElement = _context.sent;
              targetElement.appendChild(asciiElement);
              _context.next = 25;
              break;
            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](2);
              console.error("Error converting image to ASCII:", _context.t0);
              throw _context.t0;
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 21]]);
      }));
      function convertImageToASCII(_x) {
        return _convertImageToASCII.apply(this, arguments);
      }
      return convertImageToASCII;
    }()
  }, {
    key: "convertVideoToASCII",
    value: function () {
      var _convertVideoToASCII = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(videoSrc) {
        var _this = this;
        var options,
          _options$width2,
          width,
          _options$targetElemen2,
          targetElement,
          _options$charSet2,
          charSet,
          _options$sensitivity2,
          sensitivity,
          _options$fps,
          fps,
          _options$playbackSpee,
          playbackSpeed,
          _options$hero2,
          hero,
          video,
          canvas,
          context,
          asciiElement,
          frameInterval,
          _renderFrame,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _options$width2 = options.width, width = _options$width2 === void 0 ? 100 : _options$width2, _options$targetElemen2 = options.targetElement, targetElement = _options$targetElemen2 === void 0 ? document.body : _options$targetElemen2, _options$charSet2 = options.charSet, charSet = _options$charSet2 === void 0 ? " .,:;i1tfLCG08@" : _options$charSet2, _options$sensitivity2 = options.sensitivity, sensitivity = _options$sensitivity2 === void 0 ? 1 : _options$sensitivity2, _options$fps = options.fps, fps = _options$fps === void 0 ? 30 : _options$fps, _options$playbackSpee = options.playbackSpeed, playbackSpeed = _options$playbackSpee === void 0 ? 1 : _options$playbackSpee, _options$hero2 = options.hero, hero = _options$hero2 === void 0 ? "" : _options$hero2;
              video = document.createElement("video");
              video.src = videoSrc;
              video.crossOrigin = "Anonymous";
              video.autoplay = true;
              video.muted = true;
              video.loop = true;
              video.playbackRate = playbackSpeed;
              _context2.next = 11;
              return new Promise(function (resolve, reject) {
                video.onloadedmetadata = function () {
                  resolve();
                };
                video.onerror = function () {
                  reject(new Error("Failed to load the video"));
                };
              });
            case 11:
              canvas = this.createCanvas(video.videoWidth, video.videoHeight, width);
              context = canvas.getContext("2d");
              if (context) {
                _context2.next = 15;
                break;
              }
              throw new Error("Could not get canvas context");
            case 15:
              if (!hero) {
                _context2.next = 22;
                break;
              }
              console.log("Generating hero text...");
              _context2.next = 19;
              return this.generateHeroText(hero, width);
            case 19:
              this.heroLines = _context2.sent;
              _context2.next = 23;
              break;
            case 22:
              this.heroLines = [];
            case 23:
              asciiElement = document.createElement("div");
              asciiElement.className = "monscii-art";
              targetElement.appendChild(asciiElement);
              frameInterval = 1000 / fps;
              _renderFrame = function renderFrame(currentTime) {
                if (video.paused || video.ended) {
                  return;
                }
                if (currentTime - _this.lastFrameTime >= frameInterval) {
                  context.drawImage(video, 0, 0, canvas.width, canvas.height);
                  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                  var asciiString = _this.generateASCIIString(imageData, charSet, sensitivity);
                  asciiElement.innerHTML = asciiString;
                  _this.lastFrameTime = currentTime;
                }
                _this.animationFrameId = requestAnimationFrame(_renderFrame);
              };
              video.play();
              this.animationFrameId = requestAnimationFrame(_renderFrame);
              video.onpause = function () {
                if (_this.animationFrameId) {
                  cancelAnimationFrame(_this.animationFrameId);
                }
              };
              video.onended = function () {
                if (_this.animationFrameId) {
                  cancelAnimationFrame(_this.animationFrameId);
                }
              };
            case 32:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function convertVideoToASCII(_x2) {
        return _convertVideoToASCII.apply(this, arguments);
      }
      return convertVideoToASCII;
    }()
  }, {
    key: "injectStyles",
    value: function injectStyles() {
      var style = document.createElement("style");
      style.id = "monscii-styles";
      style.textContent = "\n      .monscii-art {\n        font-family: monospace;\n        font-size: 10px;\n        line-height: 10px;\n        color: #fff;\n        background-color: #000;\n        margin: 0;\n        padding: 0;\n        user-select: none;\n        white-space: pre;\n        display: block;\n      }\n    ";
      document.head.appendChild(style);
    }
  }, {
    key: "loadImage",
    value: function () {
      var _loadImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(imageSrc) {
        var img;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              img = new Image();
              img.crossOrigin = "Anonymous";
              if (!(imageSrc instanceof File)) {
                _context3.next = 8;
                break;
              }
              _context3.next = 5;
              return this.readFileAsDataURL(imageSrc);
            case 5:
              img.src = _context3.sent;
              _context3.next = 9;
              break;
            case 8:
              img.src = imageSrc;
            case 9:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                img.onload = function () {
                  return resolve(img);
                };
                img.onerror = function () {
                  return reject(new Error("Failed to load the image"));
                };
              }));
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function loadImage(_x3) {
        return _loadImage.apply(this, arguments);
      }
      return loadImage;
    }()
  }, {
    key: "readFileAsDataURL",
    value: function readFileAsDataURL(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
          return resolve(reader.result);
        };
        reader.onerror = function () {
          return reject(new Error("Failed to read the file"));
        };
        reader.readAsDataURL(file);
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(originalWidth, originalHeight, targetWidth) {
      var canvas = document.createElement("canvas");
      var aspectRatio = originalHeight / originalWidth;
      canvas.width = targetWidth;
      canvas.height = targetWidth * aspectRatio;
      return canvas;
    }
  }, {
    key: "getImageDataFromCanvas",
    value: function getImageDataFromCanvas(canvas, image) {
      var context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Could not get canvas context");
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return context.getImageData(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "createASCIIArt",
    value: function () {
      var _createASCIIArt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(imageData, charSet, sensitivity) {
        var asciiString, asciiElement;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              asciiString = this.generateASCIIString(imageData, charSet, sensitivity);
              asciiElement = document.createElement("div");
              asciiElement.className = "monscii-art";
              asciiElement.innerHTML = asciiString;
              return _context4.abrupt("return", asciiElement);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createASCIIArt(_x4, _x5, _x6) {
        return _createASCIIArt.apply(this, arguments);
      }
      return createASCIIArt;
    }()
  }, {
    key: "generateASCIIString",
    value: function generateASCIIString(imageData, charSet, sensitivity) {
      var width = imageData.width,
        height = imageData.height,
        data = imageData.data;
      var asciiLines = [];
      var heroStartY = Math.floor((height - this.heroLines.length) / 2);
      for (var y = 0; y < height; y++) {
        var line = "";
        for (var x = 0; x < width; x++) {
          var asciiChar = " ";
          if (this.heroLines.length > 0 && y >= heroStartY && y < heroStartY + this.heroLines.length && x < this.heroLines[y - heroStartY].length) {
            var heroChar = this.heroLines[y - heroStartY][x];
            if (heroChar !== " ") {
              asciiChar = heroChar;
            } else {
              asciiChar = this.getAsciiCharAtPosition(x, y, width, data, charSet, sensitivity);
            }
          } else {
            asciiChar = this.getAsciiCharAtPosition(x, y, width, data, charSet, sensitivity);
          }
          line += asciiChar;
        }
        asciiLines.push(line);
      }
      return asciiLines.join("<br>");
    }
  }, {
    key: "getAsciiCharAtPosition",
    value: function getAsciiCharAtPosition(x, y, width, data, charSet, sensitivity) {
      var offset = (y * width + x) * 4;
      var r = data[offset];
      var g = data[offset + 1];
      var b = data[offset + 2];
      var brightness = this.calculateBrightness(r, g, b);
      brightness = this.adjustBrightness(brightness, sensitivity);
      var asciiChar = this.mapBrightnessToChar(brightness, charSet);
      return asciiChar;
    }
  }, {
    key: "calculateBrightness",
    value: function calculateBrightness(r, g, b) {
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }
  }, {
    key: "adjustBrightness",
    value: function adjustBrightness(brightness, sensitivity) {
      var factor = sensitivity;
      brightness = (brightness - 128) * factor + 128;
      brightness = Math.max(0, Math.min(255, brightness));
      return brightness;
    }
  }, {
    key: "mapBrightnessToChar",
    value: function mapBrightnessToChar(brightness, charSet) {
      var charIndex = Math.floor((charSet.length - 1) * brightness / 255);
      return charSet.charAt(charIndex);
    }
  }, {
    key: "generateHeroText",
    value: function generateHeroText(text, maxWidth) {
      return new Promise(function (resolve, reject) {
        _figlet["default"].text(text, {
          font: "Standard",
          horizontalLayout: "default",
          verticalLayout: "default"
        }, function (err, data) {
          if (err) {
            console.error("Error generating hero text:", err);
            reject(err);
            return;
          }
          var lines = data.split("\n");
          var adjustedLines = lines.map(function (line) {
            if (line.length > maxWidth) {
              return line.substring(0, maxWidth);
            } else {
              return line.padEnd(maxWidth, " ");
            }
          });
          resolve(adjustedLines);
        });
      });
    }
  }]);
}();
_defineProperty(Monscii, "stylesInjected", false);