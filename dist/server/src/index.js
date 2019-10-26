/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "./queries"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = __importDefault(require("express"));
    const queries_1 = require("./queries");
    const app = express_1.default();
    app.get("/all-callees", (_, res) => {
        res.status(200).send(queries_1.queryAllCallees());
    });
});
//# sourceMappingURL=index.js.map