require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note snow clutch gesture beauty equal genuine'; 
let testAccounts = [
"0xfd1aa1a53476c9694a06f470cf75039dd5334a3a830c17179d1be5d7e953cdc7",
"0x897fc39f540f7c86ecaebb1477011be16075698216799069e4cebe1a5c8b9803",
"0x073b126ccf15afcfe5583150fa184ee701b27118980102121fac160da989d644",
"0xdd292f43ac11d3f872915c505cea50978b08eb6755ab5098727b2ad56446348a",
"0x06f42ff4f099b3b3e758835155c4b8dfb9d89565f4c3b88deb603d36c41683c3",
"0x9e61c4b405983533f8956232ab39125182ef3316d63148e6b057f1ef89dea1b1",
"0x90e6afe7606aa511a78b2ab1e4a08b0f352859795249fb88c307eb31b7a49925",
"0x7455a19d29d5dd4c0f66cb5a6721c26cdc0b170dc513135569776e0f413f0547",
"0x02c577a00ff44ba402d44223dc49c6dd02efc02342c539b4c91b53db27f45229",
"0x196064e77d677a788a4f5fcea5ffd381e1d39bb5c1eb770b527705c2c372cc57"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

