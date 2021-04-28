import Config from "../Config"

class CVerifyProof {
    
    static shared = new CVerifyProof(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

}

export default CVerifyProof