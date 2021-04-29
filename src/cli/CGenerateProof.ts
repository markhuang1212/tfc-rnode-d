import { exec as __exec } from 'child_process'
import { promisify } from 'util'
import Config from "../Config"

const exec = promisify(__exec)

class CGenerateProof {

    static shared = new CGenerateProof(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

    async generateProof(sector_afid: string, check_afid: string) {
        const { stdout } = await exec(`${this.afs_path} ";_f=generate_proof;sector_afid=${sector_afid};check_afid=${check_afid};"`)
        if (stdout.match(/_r=false/)) {
            return false;
        }
        if (stdout.match(/_r=true/)) {
            const proof_afid = stdout.match(/proof_afid=[0-9,a-z,A-Z]*/)![0].substr(11)
            const merkle_root = stdout.match(/merkleroot=[0-9,a-z,A-Z]*/)![0].substr(12)
            return { proof_afid, merkle_root }
        }
        throw Error('Unexpected CLI behavior')
    }

}

export default CGenerateProof