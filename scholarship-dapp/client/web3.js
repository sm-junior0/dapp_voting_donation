const contractAddress = "0x606fe01D374FB0f95319a3eFC26Df7f0d213cD9b";

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "applicant",
        "type": "address"
      }
    ],
    "name": "Applied",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "donor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Donated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FundsReleased",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "applicants",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "applyForScholarship",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalDonations",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];


let web3;
let contract;
let accounts;

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('account').innerText = `Connected: ${accounts[0]}`;
      contract = new web3.eth.Contract(contractABI, contractAddress);
      await getTotalDonations();
    } catch (err) {
      console.error("Access denied", err);
    }
  } else {
    alert("Please install MetaMask!");
  }
}

async function donate() {
  const amount = document.getElementById('donationAmount').value;
  if (!amount) return alert("Please enter an amount");

  const weiValue = web3.utils.toWei(amount, 'ether');
  try {
    await contract.methods.donate().send({
      from: accounts[0],
      value: weiValue
    });
    alert("Donation successful!");
    await getTotalDonations();
  } catch (err) {
    alert("Donation failed: " + err.message);
  }
}

async function applyForScholarship() {
  try {
    await contract.methods.applyForScholarship().send({ from: accounts[0] });
    alert("Application submitted!");
  } catch (err) {
    alert("Application failed: " + err.message);
  }
}

async function releaseFunds() {
  const recipient = document.getElementById('recipientAddress').value;
  const amount = document.getElementById('releaseAmount').value;
  
  if (!recipient) return alert("Please enter recipient address");
  if (!amount) return alert("Please enter amount to release");
  
  const weiValue = web3.utils.toWei(amount, 'ether');
  
  try {
    await contract.methods.releaseFunds(recipient, weiValue).send({ from: accounts[0] });
    alert("Funds released!");
  } catch (err) {
    alert("Release failed: " + err.message);
  }
}

async function getTotalDonations() {
  try {
    const total = await contract.methods.totalDonations().call();
    const totalInEth = web3.utils.fromWei(total, 'ether');
    document.getElementById('totalDonations').innerText = `Total Donations: ${totalInEth} ETH`;
  } catch (err) {
    console.error("Failed to get total donations:", err);
  }
}
