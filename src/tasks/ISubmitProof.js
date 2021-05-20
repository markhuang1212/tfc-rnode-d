"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RNodeShared_1 = __importDefault(require("../chain/RNodeShared"));
const CGenerateProof_1 = __importDefault(require("../cli/CGenerateProof"));
const ITask_1 = __importDefault(require("./ITask"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ISubmitProof extends ITask_1.default {
    constructor(rnode) {
        super();
        this.rnode = rnode;
        this.sectors = new Set(JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../data/sectors.json'), 'utf-8')));
    }
    async initialize() {
        this.rnode.onSectorVerificationTask(async (afid, seed, verification) => {
            if (this.sectors.has(afid.toString())) {
                const proof = await CGenerateProof_1.default.shared.generateProof(afid.toString('hex'), seed.toString('hex'));
                this.rnode.submitProof(verification, Buffer.from(proof.proof_afid, 'hex'));
            }
        }, null);
    }
}
ISubmitProof.shared = new ISubmitProof(RNodeShared_1.default);
exports.default = ISubmitProof;
