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
        define(["require", "exports", "express", "./queries", "cors", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = __importDefault(require("express"));
    const queries_1 = require("./queries");
    const cors_1 = __importDefault(require("cors"));
    const path_1 = __importDefault(require("path"));
    const app = express_1.default();
    app.use(cors_1.default());
    app.get("/api/all-callees", (_, res) => {
        try {
            const result = queries_1.queryAllCallees();
            res.status(200).send(result);
        }
        catch (_a) {
            res.status(500).send("An unknown error occurred on the server.");
        }
    });
    app.get("/api/menus/:menuID", function (req, res) {
        try {
            const result = queries_1.queryMenu(req.params.menuID);
            res.status(200).send(result);
        }
        catch (_a) {
            res.status(500).send("An unknown error occurred on the server.");
        }
    });
    app.use("/", express_1.default.static(path_1.default.join(__dirname, "..", "client", "build")));
    app.listen(process.env.PORT, () => {
        console.log("Listening on port " + process.env.PORT);
    });
});
//# sourceMappingURL=index.js.map