module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "host.docker.internal",
      port: 7545,
      websockets: true,
      gas: 6000000,
      gasPrice: 40000000000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      gasPrice: 4000000000,
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    simulation: {
      host: "blockchain", // Connect to geth on the specified
      port: 8545,
      gasPrice: 4000000000,
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  },
  mocha: {
      enableTimeouts: false
  }
};
