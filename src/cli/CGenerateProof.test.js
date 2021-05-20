"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const CGenerateProof_1 = __importDefault(require("./CGenerateProof"));
test('Generate Proof', async () => {
    const afid = await promises_1.default.readFile(path_1.default.join(__dirname, './afid.txt'), 'utf-8');
    const ret = await CGenerateProof_1.default.shared.generateProof(afid, '1e000000000022445ca65e09e3faabededcb6f42b76d4b3a0c2362a02eda751990632526dadf7cc91a530745b093b919a3d48441035cc52dc8e9f471fe7dbdb9');
    expect(ret.proof_afid).toBeDefined();
});
