"use strict";
/* eslint-disable no-self-assign */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRApiUtils = void 0;
const axios_1 = __importDefault(require("axios"));
const urls_json_1 = require("./urls.json");
class BRApiUtils {
    type;
    code;
    constructor() {
        this.type = this.type;
        this.code = this.code;
    }
    async fetch({ type, code }) {
        const url = urls_json_1.urls[type] + code;
        try {
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    }
}
exports.BRApiUtils = BRApiUtils;
//# sourceMappingURL=Utils.js.map