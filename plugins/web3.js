// plugins/web3.js

import { defineNuxtPlugin } from '#app';

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Use MetaMask provider
  web3 = new Web3(window.ethereum);
} else {
  // Fallback to local provider
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

export default defineNuxtPlugin((nuxtApp) => {
  // Inject `web3` instance into Vue instances (context.app.$web3)
  nuxtApp.provide('web3', web3);
});