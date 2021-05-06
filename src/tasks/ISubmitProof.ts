import { RNode } from "@tfc-chain/adapter";
import RNodeShared from "../chain/RNodeShared";
import CGenerateProof from '../cli/CGenerateProof';
import ITask from "./ITask";

class ISubmitProof extends ITask {

    static shared = new ISubmitProof(RNodeShared)

    sectors: Buffer[]
    rnode: RNode

    constructor(rnode: RNode) {
        super()
        this.rnode = rnode
        this.sectors = []
    }

    async initialize() {
        this.sectors.forEach(sector => {
            this.rnode.onSectorVerificationTask((afid, seed)=>{
                CGenerateProof.shared.generateProof(afid.toString('hex'), seed.toString('hex'))
            }, sector)
        })
    }

}

export default ISubmitProof