import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import RNodeShared from '../chain/RNodeShared'
import CSubmitSector from '../cli/CSubmitSector'

const argv = yargs(hideBin(process.argv)).argv

async function execute() {
    await RNodeShared.submitSector(Buffer.from(argv.afid as string, 'hex'))
    await CSubmitSector.shared.submitSector(argv.afid as string, argv.location as string)
    console.log('Success!')
}

execute()