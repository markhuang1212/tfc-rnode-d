import Config from '../Config'

class CGenerateProof {
    
    static shared = new CGenerateProof(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

}

export default CGenerateProof