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
var protractor_1 = require("protractor");
var Util_1 = require("../Utility/Util");
var pageEl_1 = require("../Utility/pageEl");
var log = require("../config/log4js").default;
var OpenAccountPage = /** @class */ (function () {
    function OpenAccountPage() {
        this.custData = require("../testdata/Cust");
        /*Customers = element(by.id('userSelect'));
        options = this.Customers.all(by.tagName('option'));
        Currency = element(by.id('currency')); //$ = by.css
        Process = element(by.buttonText("Process"));*/
        this.Customers = new pageEl_1.pageEl(protractor_1.by.id('userSelect'));
        this.Process = new pageEl_1.pageEl(protractor_1.by.buttonText("Process"));
        this.Currency = new pageEl_1.pageEl(protractor_1.by.id('currency'));
        this.name = this.custData.customers.firstname + " " + this.custData.customers.lastname;
    }
    /*SelectACustomer(){
        let name = this.name;
        log.debug(name);
        this.options.then(function(items){
            //log4jsconfig.Log().debug("Dropdown option size " + items.length);
            log.debug("Dropdown option size " + items.length);
            for(let i=0 ; i < items.length ; i++){
                 items[i].getText().then(function(txt: any){
                     log.debug(txt);
                     if(txt == name){
                         log.debug("Item found on the list");
                         items[i].click();
                     }
                 })
            }
        })
    }*/
    /*async SelectACustomer(){
        let name = this.name;
        log.debug(name);
        log.debug("Dropdown option size " + (await this.options).length);
        log.debug("Customers count " + (await this.options).length);
        for (let i = 0; i < (await this.options).length; i++) {
            log.debug(await this.options.get(i).getText());
            if (await this.options.get(i).getText() == name) {
                await this.options.get(i).click();
            }
        }
    }*/
    OpenAccountPage.prototype.SelectACustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = this.name;
                        log.debug(name);
                        return [4 /*yield*/, this.Customers.selectByOptionText(name)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.selectACustomer = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.debug(name);
                        return [4 /*yield*/, this.Customers.selectByOptionText(name)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.selectACurrency = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Currency.selectByOptionText(txt)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.SelectDollar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await this.Currency.$('[value="Dollar"]').click();
                    return [4 /*yield*/, this.Currency.selectByOptionText("Dollar")];
                    case 1:
                        //await this.Currency.$('[value="Dollar"]').click();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.ProcessIt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Process.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.VerifyAndCloseAlert("Account created")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OpenAccountPage;
}());
exports.OpenAccountPage = OpenAccountPage;
//# sourceMappingURL=OpenAccountPage.js.map