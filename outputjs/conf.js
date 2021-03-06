"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Reporter_1 = require("./config/Reporter");
var path = require('path');
var outputDir = path.join(process.cwd(), '/reports/json');
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 36000,
        print: function () { }
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: { 'args': ['disable-infobars'] },
        //browserName : 'firefox',
        //marionette : true,
        acceptSslCerts: true
    },
    suites: {
        homepage: '../Features/HomePageSanityCheck.feature',
        account: '../Features/LoginAndLogout.feature',
    },
    // SELENIUM_PROMISE_MANAGER: false,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    cucumberOpts: {
        require: [
            '../outputjs/stepDef/*.js',
            '../outputjs/config/*.js'
        ],
        format: "json:./reports/json/cucumber_report.json",
        tags: false,
        profile: false,
        'no-source': true
    },
    onPrepare: function () { return __awaiter(void 0, void 0, void 0, function () {
        var os, globals, browser;
        return __generator(this, function (_a) {
            os = require('os');
            globals = require('protractor');
            browser = globals.browser;
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
            browser.manage().timeouts().implicitlyWait(5000);
            Reporter_1.Reporter.createDirectory(outputDir);
            return [2 /*return*/];
        });
    }); },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onComplete: function () { Reporter_1.Reporter.createHTMLReport(); }
};
//# sourceMappingURL=conf.js.map