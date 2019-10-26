/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sampleData"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const samples = __importStar(require("./sampleData"));
    function queryAllCallees() {
        return samples.companies;
    }
    exports.queryAllCallees = queryAllCallees;
});
//# sourceMappingURL=queries.js.map