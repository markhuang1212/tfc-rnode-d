"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VerifierShared_1 = __importDefault(require("../chain/VerifierShared"));
const CVerifyProof_1 = __importDefault(require("../cli/CVerifyProof"));
const ITask_1 = __importDefault(require("./ITask"));
class IVerifyProof extends ITask_1.default {
    constructor(verifier) {
        super();
        this.verifier = verifier;
    }
    async initialize() {
        this.verifier.onSectorProofSubmitted(async (sector_afid, seed, proof, verification) => {
            const proof_afid = proof.toString('hex');
            const check_afid = seed.toString('hex');
            const ret = await CVerifyProof_1.default.shared.verifyProof(proof_afid, check_afid, sector_afid.toString('hex'));
            this.verifier.verifyProof(verification, ret);
        });
    }
}
IVerifyProof.shared = new IVerifyProof(VerifierShared_1.default);
exports.default = IVerifyProof;
