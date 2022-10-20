"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBreeds = void 0;
const axios_1 = __importDefault(require("axios"));
const GetBreeds = () => {
    return axios_1.default.get(`${process.env.API_ROOT}breeds`);
};
exports.GetBreeds = GetBreeds;
