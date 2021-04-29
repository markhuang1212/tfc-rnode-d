import { RNode } from "@tfc-chain/adapter";
import RNodeShared from "../chain/RNodeShared";
import ITask from "./ITask";

class ISubmitProof extends ITask {

    static shared = new ISubmitProof(RNodeShared)

    rnode: RNode
    sector_afids = [] as string[]

    constructor(rnode: RNode) {
        super()
        this.rnode = rnode
    }

    async initialize() {
        // this.rnode.onSectorVerificationTask((sector_afid: Buffer, seed: Buffer) => {

        // },)
    }

    async task() {

    }
}

export default ISubmitProof