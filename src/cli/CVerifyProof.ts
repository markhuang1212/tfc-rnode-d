import Config from "../Config"

class CVerifyProof {

    static shared = new CVerifyProof(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

    async verifyProof(sector_afid: string, proof_afid: string) {
        
    }

}

export default CVerifyProof