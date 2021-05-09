class Config {

    static shared = new Config()

    afs_path = '/tos/bin/tfs-x86_64b'

    chain_endpoint = 'http://localhost:8545'
    chain_tfc_addr = ''

    rnode_privkey = ''
    verifier_prikey = ''
    seed_submitter_privkey = ''

}

export default Config