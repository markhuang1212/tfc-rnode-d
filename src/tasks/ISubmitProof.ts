import { RNode } from "@tfc-chain/adapter";
import RNodeShared from "../chain/RNodeShared";
import CGenerateProof from '../cli/CGenerateProof';
import ITask from "./ITask";
import fs from 'fs'
import path from 'path'

class ISubmitProof extends ITask {

    static shared = new ISubmitProof(RNodeShared)

    sectors: Set<string>
    rnode: RNode

    constructor(rnode: RNode) {
        super()
        this.rnode = rnode
        this.sectors = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/sectors.json'), 'utf-8')) as string[])
    }

    async initialize() {
        this.rnode.onSectorVerificationTask(async (afid, seed, verification) => {
            if (this.sectors.has(afid.toString())) {
                const proof = await CGenerateProof.shared.generateProof(afid.toString('hex'), seed.toString('hex'))
                this.rnode.submitProof(verification, Buffer.from(proof.proof_afid, 'hex'))
            }
        }, null)
    }

}

export default ISubmitProof