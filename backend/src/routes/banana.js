"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const banana_1 = require("../controllers/banana");
const router = express_1.default.Router();
router.post('/', banana_1.createBanana);
router.get('/get-bananas', banana_1.getAllBananas);
exports.default = router;
