import { Verifier } from "@tfc-chain/adapter";
import VerifierShared from "../chain/VerifierShared";
import ITask from "./ITask";

class IVerifyProof extends ITask {

    static shared = new IVerifyProof(VerifierShared)

    verifier: Verifier

    constructor(verifier: Verifier) {
        super()
        this.verifier = verifier
    }

    async initialize() {
        // this.verifier.onSectorProofSubmitted((sector_afid, seed, proof) => {

        // }, 0)
    }

}

export default IVerifyProof