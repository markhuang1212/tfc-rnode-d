import Config from "../Config"

class CUploadSector {

    static shared = new CUploadSector(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

}

export default CUploadSector