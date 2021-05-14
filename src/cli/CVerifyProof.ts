import { exec as __exec } from "child_process"
import { promisify } from "util"
import Config from "../Config"

const exec = promisify(__exec)

class CVerifyProof {

    static shared = new CVerifyProof(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

    async verifyProof(proof_afid: string, check_afid: string, sector_afid: string) {
        const { stdout } = await exec(`${this.afs_path} ";_f=verify_proof;proof_afid=${proof_afid};check_afid=${check_afid};sector_afid=${sector_afid};"`)
        // console.log(stdout)
        if (stdout.match(/_r=true/)) {
            return true
        }
        return false
    }

}

export default CVerifyProof