# Decentralized Voting dApp

A blockchain-based decentralized voting application that enables secure, transparent, and immutable voting processes. This platform allows users to create polls, cast votes, and view results in a trustless environment.

## 🌟 Features

- **Poll Creation**: Create new voting polls with customizable options
- **Secure Voting**: One vote per address using blockchain technology
- **Real-time Results**: Instant vote counting and result display
- **Voter Verification**: Transparent verification of voter eligibility
- **Immutable Records**: All votes are permanently recorded on the blockchain
- **Admin Controls**: Poll management and voter registration system

## 🛠️ Technology Stack

- **Frontend**: React.js, HTML, CSS
- **Web3**: Web3.js for blockchain interaction
- **Smart Contracts**: Solidity
- **Development Framework**: Truffle
- **Wallet Integration**: MetaMask
- **Network**: Ethereum (Testnet/Mainnet)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MetaMask](https://metamask.io/) browser extension
- [Truffle](https://www.trufflesuite.com/truffle) (`npm install -g truffle`)
- [Ganache](https://trufflesuite.com/ganache/) (for local development)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/sm-junior0/dapp_voting_donation.git
cd voting_dapp
```

2. Install dependencies:
```bash
npm install
```

3. Configure Truffle:
   - Update `truffle-config.js` with your network settings
   - Add your preferred network (e.g., Sepolia, Goerli) configuration

4. Deploy the smart contract:
```bash
truffle migrate --network <your-network>
```

5. Start the development server:
```bash
npm start
```

## 💻 Usage

### For Voters
1. Connect your MetaMask wallet
2. Browse available polls
3. Select your preferred option
4. Confirm the transaction in MetaMask
5. View real-time results

### For Poll Creators
1. Connect your MetaMask wallet
2. Navigate to "Create Poll"
3. Enter poll details and options
4. Set voting period
5. Deploy the poll

### For Administrators
1. Connect your MetaMask wallet (must be the admin address)
2. Manage voter registration
3. Monitor active polls
4. Handle poll finalization

## 🔒 Smart Contract Functions

- `createPoll(string, string[])`: Create a new voting poll
- `castVote(uint256, uint256)`: Cast a vote in a poll
- `getPollResults(uint256)`: Get the results of a poll
- `registerVoter(address)`: Register a new voter (admin only)
- `endPoll(uint256)`: End a poll and finalize results (admin only)

## 🧪 Testing

Run the test suite:
```bash
truffle test
```

## 📝 Contract Events

- `PollCreated`: Emitted when a new poll is created
- `VoteCast`: Emitted when a vote is cast
- `VoterRegistered`: Emitted when a new voter is registered
- `PollEnded`: Emitted when a poll is finalized

## 🔐 Security Considerations

- One vote per registered address
- Poll creator cannot vote in their own poll
- Time-locked voting periods
- Admin-only voter registration
- Immutable vote records
- Gas optimization for vote casting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- SHEJA MANENE Junior - Initial work

## 🙏 Acknowledgments

- Ethereum Foundation
- Truffle Suite
- MetaMask Team
- OpenZeppelin for security best practices

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

**Note**: This dApp is for educational purposes. Always test thoroughly on testnets before deploying to mainnet.

## 🔄 Project Structure

```
voting_dapp/
├── contracts/          # Smart contract source files
├── migrations/         # Contract deployment scripts
├── src/               # Frontend application
│   ├── components/    # React components
│   ├── contracts/     # Contract ABIs and addresses
│   └── App.js         # Main application component
├── test/              # Test files
├── truffle-config.js  # Truffle configuration
└── package.json       # Project dependencies
```

## 🎯 Future Enhancements

- [ ] Anonymous voting system
- [ ] Quadratic voting implementation
- [ ] Delegated voting
- [ ] Mobile-responsive design
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with other blockchains
- [ ] Off-chain voting with on-chain verification 