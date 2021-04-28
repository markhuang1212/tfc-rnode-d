import { RNode } from '@tfc-chain/adapter'
import Config from '../Config'

const RNodeShared = new RNode(Config.shared.chain_endpoint, Config.shared.rnode_privkey, Config.shared.chain_tfc_addr)

export default RNodeShared