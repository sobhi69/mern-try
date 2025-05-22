"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_1 = require("../controllers/item");
const router = express_1.default.Router();
router.get('/get-items', item_1.getAllItems);
exports.default = router;
