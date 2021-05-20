"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const Config_1 = __importDefault(require("../Config"));
const exec = util_1.promisify(child_process_1.exec);
class CVerifyProof {
    constructor(afs_path) {
        this.afs_path = afs_path;
    }
    async verifyProof(proof_afid, check_afid, sector_afid) {
        const { stdout } = await exec(`${this.afs_path} ";_f=verify_proof;proof_afid=${proof_afid};check_afid=${check_afid};sector_afid=${sector_afid};"`);
        // console.log(stdout)
        if (stdout.match(/_r=true/)) {
            return true;
        }
        return false;
    }
}
CVerifyProof.shared = new CVerifyProof(Config_1.default.shared.afs_path);
exports.default = CVerifyProof;
