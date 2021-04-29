import { exec as __exec } from 'child_process'
import { promisify } from 'util'
import Config from "../Config"

const exec = promisify(__exec)

class CSubmitSector {

    static shared = new CSubmitSector(Config.shared.afs_path)

    afs_path: string

    constructor(afs_path: string) {
        this.afs_path = afs_path
    }

    async submitSector(sector_afid: string, location: string) {
        const { stdout } = await exec(`${this.afs_path} ";_f=submit_sector;sector_afid=${sector_afid};location=${location};"`)
        if (stdout.match(/_r=true/)) {
            return true;
        }
        if (stdout.match(/_r=false/)) {
            return false;
        }
        throw Error('Unexpected CLI behavior')
    }
}

export default CSubmitSector