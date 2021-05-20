"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ISubmitProof_1 = __importDefault(require("./tasks/ISubmitProof"));
const IVerifyProof_1 = __importDefault(require("./tasks/IVerifyProof"));
ISubmitProof_1.default.shared.initialize().catch(e => {
    console.error('cannot initialize task ISubmitProof');
    console.error(e.stack);
}).then(() => {
    console.log('task ISubmitProof listeneng');
});
IVerifyProof_1.default.shared.initialize().catch(e => {
    console.error('cannot initialize task ISubmitProof');
    console.error(e.stack);
}).then(() => {
    console.log('task IVerifyProof listening');
});
