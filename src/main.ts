import ISubmitProof from './tasks/ISubmitProof';
import IVerifyProof from './tasks/IVerifyProof';

ISubmitProof.shared.initialize().catch(e => {
    console.error('cannot initialize task ISubmitProof')
    console.error(e.stack)
}).then(() => {
    console.log('task ISubmitProof listeneng')
})

IVerifyProof.shared.initialize().catch(e => {
    console.error('cannot initialize task ISubmitProof')
    console.error(e.stack)
}).then(() => {
    console.log('task IVerifyProof listening')
})