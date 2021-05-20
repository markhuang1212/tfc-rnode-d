"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
const RNodeShared_1 = __importDefault(require("../chain/RNodeShared"));
const CSubmitSector_1 = __importDefault(require("../cli/CSubmitSector"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const argv = yargs_1.default(helpers_1.hideBin(process.argv))
    .option('afid', {
    type: 'string',
    description: 'afid of the sector'
})
    .option('location', {
    type: 'string',
    description: 'location that the sector should submit to'
})
    .demandOption(['afid', 'location'], 'Afid and Location are compulsary')
    .argv;
async function execute() {
    try {
        await CSubmitSector_1.default.shared.submitSector(argv.afid, argv.location);
    }
    catch (e) {
        console.error('Failed to submit sector to the cluster');
        console.error(e.stack);
    }
    try {
        await RNodeShared_1.default.submitSector(Buffer.from(argv.afid, 'hex'));
    }
    catch (e) {
        console.error('Failed to submit sector to TFC-Chain');
        console.error(e.stack);
    }
    const sectors = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../data/sectors.json'), 'utf-8'));
    sectors.push(argv.afid);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, '../../data/sectors.json'), JSON.stringify(sectors, undefined, 4));
    console.log('Program Finish');
}
execute();
