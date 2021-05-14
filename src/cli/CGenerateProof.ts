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
        // console.log(stdout)
        if (stdout.match(/_r=true/) && stdout.match(/proof_afid=[0-9,a-z,A-Z]*/)) {
            const proof_afid = stdout.match(/proof_afid=[0-9,a-z,A-Z]*/)![0].substr(11)
            return { proof_afid }
        }
        throw Error('Unexpected CLI behavior')
    }

}

export default CGenerateProof