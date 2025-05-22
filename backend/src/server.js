"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const connectToDb_1 = require("./lib/connectToDb");
const app = (0, express_1.default)();
const port = process.env.PORT || 3050;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes 
const item_1 = __importDefault(require("./routes/item"));
app.use('/item', item_1.default);
(0, connectToDb_1.connectToDb)();
connectToDb_1.connection.once('open', () => {
    console.log(`connected to db`);
    app.listen(port, () => console.log(`server is alive at http://localhost:${port}`));
});
