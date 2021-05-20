"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("@tfc-chain/adapter");
const Config_1 = __importDefault(require("../Config"));
const VerifierShared = new adapter_1.Verifier(Config_1.default.shared.chain_endpoint, Config_1.default.shared.verifier_prikey, Config_1.default.shared.chain_tfc_addr);
exports.default = VerifierShared;
