const contractAddress = "0x7eb498B6D065271de065b0BC2d4FF8B46a772df2";
let contractABI;
let web3;
let votingContract;

async function loadABI() {
  const res = await fetch('/build/contracts/Voting.json');
  contractABI = await res.json();
}

async function connectMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      document.getElementById('account').innerText = `Connected Account: ${accounts[0]}`;

      if (!contractABI) await loadABI();
      votingContract = new web3.eth.Contract(contractABI.abi, contractAddress);
      loadCandidates(votingContract, accounts[0]);
    } catch (err) {
      alert("Connection failed");
    }
  } else {
    alert("MetaMask not detected!");
  }
}

async function loadCandidates(contract, account) {
  const count = await contract.methods.candidatesCount().call();
  const list = document.getElementById("candidates");
  list.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const candidate = await contract.methods.candidates(i).call();
    const li = document.createElement("li");
    li.innerText = `${candidate.name} - ${candidate.voteCount} votes`;

    const button = document.createElement("button");
    button.innerText = "Vote";
    button.onclick = () => vote(contract, account, i);

    li.appendChild(button);
    list.appendChild(li);
  }
}

async function vote(contract, account, candidateId) {
  try {
    await contract.methods.vote(candidateId).send({ from: account });
    alert("Vote cast successfully!");
    loadCandidates(contract, account);
  } catch (err) {
    alert("Vote failed or already voted.");
  }
}
