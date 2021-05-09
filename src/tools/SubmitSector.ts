import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import RNodeShared from '../chain/RNodeShared'
import CSubmitSector from '../cli/CSubmitSector'

const argv = yargs(hideBin(process.argv))
    .option('afid', {
        type: 'string',
        description: 'afid of the sector'
    })
    .option('location', {
        type: 'string',
        description: 'location that the sector should submit to'
    })
    .demandOption(['afid', 'location'], 'Afid and Location are compulsary')
    .argv

async function execute() {
    try {
        await CSubmitSector.shared.submitSector(argv.afid as string, argv.location as string)
    } catch (e) {
        console.error('Failed to submit sector to the cluster')
    }

    try {
        await RNodeShared.submitSector(Buffer.from(argv.afid as string, 'hex'))
    } catch (e) {
        console.error('Failed to submit sector to TFC-Chain')
    }

    console.log('Success!')
}

execute()