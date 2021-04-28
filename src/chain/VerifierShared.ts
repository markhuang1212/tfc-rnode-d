import { Verifier } from '@tfc-chain/adapter'
import Config from '../Config'

const VerifierShared = new Verifier(Config.shared.chain_endpoint, Config.shared.verifier_prikey, Config.shared.chain_tfc_addr)

export default VerifierShared