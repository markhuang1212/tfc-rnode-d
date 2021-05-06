import { Verifier } from "@tfc-chain/adapter";
import VerifierShared from "../chain/VerifierShared";
import CVerifyProof from "../cli/CVerifyProof";
import ITask from "./ITask";

class IVerifyProof extends ITask {

    static shared = new IVerifyProof(VerifierShared)

    verifier: Verifier

    constructor(verifier: Verifier) {
        super()
        this.verifier = verifier
    }

    async initialize() {
        this.verifier.onSectorProofSubmitted(async (sector_afid, seed, proof) => {
            const proof_afid = proof.toString('hex')
            const check_afid = seed.toString('hex')
            const ret = await CVerifyProof.shared.verifyProof(proof_afid, check_afid, sector_afid.toString('hex'))
            this.verifier.verifyProof(proof.toString(), ret)
        })
    }

}

export default IVerifyProof