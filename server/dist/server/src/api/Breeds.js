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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBreedById = exports.GetBreeds = void 0;
const axios_1 = __importDefault(require("axios"));
const errors_1 = require("./errors");
const GetBreeds = () => {
    return axios_1.default.get(`${process.env.API_ROOT}breeds`);
};
exports.GetBreeds = GetBreeds;
const GetBreedById = (breedId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(`${process.env.API_ROOT}breeds/${breedId}`);
        if (Object.keys(result.data).length > 0) {
            return result;
        }
        else {
            throw new Error(errors_1.ERRORS.CannotFindBreed);
        }
    }
    catch (err) {
        return err;
    }
});
exports.GetBreedById = GetBreedById;
