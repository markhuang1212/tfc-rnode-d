import fs from 'fs/promises'
import path from 'path'
import CGenerateProof from './CGenerateProof'
import CVerifyProof from './CVerifyProof'

test('Verify Proof', async () => {
    const afid = await fs.readFile(path.join(__dirname, './afid.txt'), 'utf-8')
    const proof = await CGenerateProof.shared.generateProof(afid, '1e000000000022445ca65e09e3faabededcb6f42b76d4b3a0c2362a02eda751990632526dadf7cc91a530745b093b919a3d48441035cc52dc8e9f471fe7dbdb9')
    const ret = await CVerifyProof.shared.verifyProof(
        proof.proof_afid,
        '1e000000000022445ca65e09e3faabededcb6f42b76d4b3a0c2362a02eda751990632526dadf7cc91a530745b093b919a3d48441035cc52dc8e9f471fe7dbdb9',
        afid)
    expect(ret).toBe(true)

    const ret2 = await CVerifyProof.shared.verifyProof(
        '1e000000000022445ca65e09e3faabededcb6f42b76d4b3a0c2362a02eda751990632526dadf7cc91a530745b093b919a3d48441035cc52dc8e9f471fe7dbdb9',
        '1e000000000022445ca65e09e3faabededcb6f42b76d4b3a0c2362a02eda751990632526dadf7cc91a530745b093b919a3d48441035cc52dc8e9f471fe7dbdb9',
        afid
    )
    expect(ret2).toBe(false)
})