"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.afs_path = '/tos/bin/tfs-x86_64b'; // path of the executable of tfc-x86_64b
        this.chain_endpoint = 'http://localhost:8545'; // endpoint of the Tfc-Chain
        this.chain_tfc_addr = '0xD2729225e815e49F1058827Bc12a7F72AF0F4778';
        // address of the Tfc-Chain contract
        this.rnode_privkey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1';
        // private key with RNode Role
        this.verifier_prikey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1';
        // private key with Verifier Role
        this.seed_submitter_privkey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1';
        // private key with SeedSubmitter Role
    }
}
Config.shared = new Config(); // DO NOT CHANGE THIS LINE
exports.default = Config;
