"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectToDB_1 = require("./lib/connectToDb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3050;
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const item_1 = __importDefault(require("./routes/item"));
const banana_1 = __importDefault(require("./routes/banana"));
app.use('/item', item_1.default);
app.use('/banana', banana_1.default);
(0, connectToDB_1.connectToDb)();
connectToDB_1.connection.once('open', () => {
    console.log(`connected to DB`);
    app.listen(port, () => console.log(`app is alive at http://localhost:${port}`));
});
