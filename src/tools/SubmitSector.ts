import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import RNodeShared from '../chain/RNodeShared'
import CSubmitSector from '../cli/CSubmitSector'
import fs from 'fs'
import path from 'path'

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
        console.error(e.stack)
    }

    try {
        await RNodeShared.submitSector(Buffer.from(argv.afid as string, 'hex'))
    } catch (e) {
        console.error('Failed to submit sector to TFC-Chain')
        console.error(e.stack)
    }

    const sectors =
        JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/sectors.json'), 'utf-8')) as string[]
    sectors.push(argv.afid as string)
    fs.writeFileSync(path.join(__dirname, '../../data/sectors.json'), JSON.stringify(sectors, undefined, 4))


    console.log('Program Finish')
}

execute()