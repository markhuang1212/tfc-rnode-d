"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const Config_1 = __importDefault(require("../Config"));
const exec = util_1.promisify(child_process_1.exec);
class CGenerateProof {
    constructor(afs_path) {
        this.afs_path = afs_path;
    }
    async generateProof(sector_afid, check_afid) {
        const { stdout } = await exec(`${this.afs_path} ";_f=generate_proof;sector_afid=${sector_afid};check_afid=${check_afid};"`);
        // console.log(stdout)
        if (stdout.match(/_r=true/) && stdout.match(/proof_afid=[0-9,a-z,A-Z]*/)) {
            const proof_afid = stdout.match(/proof_afid=[0-9,a-z,A-Z]*/)[0].substr(11);
            return { proof_afid };
        }
        throw Error('Unexpected CLI behavior');
    }
}
CGenerateProof.shared = new CGenerateProof(Config_1.default.shared.afs_path);
exports.default = CGenerateProof;
