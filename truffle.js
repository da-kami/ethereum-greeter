module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0x8dd5f4e7803ce2abd420de20ea8fa284458281ff"
    }
  }
};
