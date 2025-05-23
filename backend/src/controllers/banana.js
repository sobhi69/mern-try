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
exports.getAllBananas = exports.createBanana = void 0;
const banana_1 = __importDefault(require("../model/banana"));
const createBanana = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bananaColor, bananaName } = req.body;
    const newBanana = yield banana_1.default.create({
        bananaColor,
        bananaName
    });
    try {
        res.status(201).json(newBanana);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createBanana = createBanana;
const getAllBananas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBananas = yield banana_1.default.find().sort();
        res.json(allBananas);
    }
    catch (error) {
        console.error(`error in getAllbananas ${error}`);
        res.status(500).json({ message: error.message });
    }
});
exports.getAllBananas = getAllBananas;
