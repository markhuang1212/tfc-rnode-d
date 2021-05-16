class Config {

    static shared = new Config()                // DO NOT CHANGE THIS LINE

    afs_path = '/tos/bin/tfs-x86_64b'           // path of the executable of tfc-x86_64b

    chain_endpoint = 'http://localhost:8545'    // endpoint of the Tfc-Chain

    chain_tfc_addr = '0x56d58799F29f9187a3124E8605eBCA53f047D85d'                         
                                                // address of the Tfc-Chain contract

    rnode_privkey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1'                          
                                                // private key with RNode Role
    verifier_prikey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1'                        
                                                // private key with Verifier Role
    seed_submitter_privkey = 'd9e87e5a945ad4ac804c6715faa9ca0316306f2159971a3a2e92c62e3b9b95f1'                 
                                                // private key with SeedSubmitter Role

}

export default Config