"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetImagesByBreedId = void 0;
const axios_1 = __importDefault(require("axios"));
const GetImagesByBreedId = (breedId) => {
    return axios_1.default.get(`${process.env.API_ROOT}images/search?breed_ids=${breedId}`);
};
exports.GetImagesByBreedId = GetImagesByBreedId;
