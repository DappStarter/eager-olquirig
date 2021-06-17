require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone street renew shift pudding include enroll slot gift'; 
let testAccounts = [
"0xb3ef5ac2c6940a00514c95b7c04ae89769dc38046432278ce5b0fff116216c0c",
"0xbb0f89b4045654c57f63c28763fc989520d074eab6e64f4d8d3c5242d5d3fea6",
"0x9351ca18ebaaab32a1164d997d1909031154027330c2a9db5fa509546818b7d5",
"0x0952ae3223e24b0eff0579c9421d9b1707c5d6c589136c1987c723b7fff3f0a2",
"0x02003528d9becc075fda76d4f43b2ce45cd0f83fc625d7e90f47508f31b28d7f",
"0xe4be91f347c84fde5dc4a6406510182407dd7e11ff76878f591014914bea0da1",
"0x40191c811f9538df389df2d4ba4a3f92ff5c77626d855e4cecbd1b4628be7e49",
"0xaa5c8ba80e7f84c61dd5fd79b2792799ad965a655e9d3d88988ccab57f8d8c02",
"0x93dbe56b053c25146bbc2e39908a3d45b06206ce8e058c7c49c04c64899ef83f",
"0xad13bd5c8b18115421a0af1160540f31dc11e16022256c287ae61a66f0432a0e"
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

