class Config {

    static shared = new Config()                // DO NOT CHANGE THIS LINE

    afs_path = '/tos/bin/tfs-x86_64b'           // path of the executable of tfc-x86_64b

    chain_endpoint = 'http://localhost:8545'    // endpoint of the Tfc-Chain
    chain_tfc_addr = ''                         // address of the Tfc-Chain contract

    rnode_privkey = ''                          // private key with RNode Role
    verifier_prikey = ''                        // private key with Verifier Role
    seed_submitter_privkey = ''                 // private key with SeedSubmitter Role

}

export default Config