"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = require("./api");
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// Have Node serve the files for our built React app
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client/public')));
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from CatWiki!' });
});
app.get('/breeds', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const breeds = yield (0, api_1.GetBreeds)();
        res.json(breeds.data);
    }
    catch (err) {
        console.error(err);
        res.json(err);
    }
}));
app.get('/breeds/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const breed = (yield (0, api_1.GetBreedById)(req.params.id));
        res.json(breed.data);
    }
    catch (err) {
        console.error(err);
        res.json(err);
    }
}));
app.get('/breeds/:id/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = (yield (0, api_1.GetImagesByBreedId)(req.params.id));
        res.json(images.data);
    }
    catch (err) {
        console.error(err);
        res.json(err);
    }
}));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../client/public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
