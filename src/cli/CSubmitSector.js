"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const Config_1 = __importDefault(require("../Config"));
const exec = util_1.promisify(child_process_1.exec);
class CSubmitSector {
    constructor(afs_path) {
        this.afs_path = afs_path;
    }
    async submitSector(sector_afid, location) {
        const { stdout } = await exec(`${this.afs_path} ";_f=submit_sector;sector_afid=${sector_afid};location=${location};"`);
        if (stdout.match(/_r=true/)) {
            return true;
        }
        throw Error('Unexpected CLI behavior');
    }
}
CSubmitSector.shared = new CSubmitSector(Config_1.default.shared.afs_path);
exports.default = CSubmitSector;
