<template>
  <div>
    <h1>Welcome to My NFT App</h1>
    <button @click="connectWallet">Connect Wallet</button>
    <div v-if="walletConnected">
      <p>Wallet Address: {{ walletAddress }}</p>
    </div>
  </div>
</template>

<script>
import web3 from '~/plugins/web3';

export default {
  data() {
    return {
      walletConnected: false,
      walletAddress: null,
    };
  },
  methods: {
    async connectWallet() {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.walletConnected = true;
        this.walletAddress = await web3.eth.getAccounts()[0];
      } catch (error) {
        console.error('Wallet connection error:', error);
      }
    },
  },
};
</script>