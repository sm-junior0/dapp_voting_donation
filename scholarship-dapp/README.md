# Decentralized Scholarship Funding dApp

A blockchain-based decentralized application (dApp) that enables transparent and trustless scholarship funding. This platform allows donors to contribute to a scholarship fund, students to apply for scholarships, and administrators to manage fund distribution.

## 🌟 Features

- **Wallet Integration**: Seamless MetaMask integration for Ethereum transactions
- **Donation System**: Easy-to-use interface for contributing to the scholarship fund
- **Application Process**: Simple one-click scholarship application for students
- **Admin Controls**: Secure fund distribution system for administrators
- **Transparent Tracking**: Real-time display of total donations
- **Smart Contract Security**: Built with Solidity best practices and security measures

## 🛠️ Technology Stack

- **Frontend**: HTML, CSS, JavaScript
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
git clone https://github.com/sm-junior0/dapp_voting_donation
cd scholarship-dapp
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

5. Update the contract address:
   - Copy the deployed contract address
   - Update `client/web3.js` with the new contract address

## 💻 Usage

### For Donors
1. Connect your MetaMask wallet
2. Enter the amount you wish to donate in ETH
3. Click "Donate" and confirm the transaction in MetaMask

### For Students
1. Connect your MetaMask wallet
2. Click "Apply for Scholarship"
3. Confirm the transaction in MetaMask

### For Administrators
1. Connect your MetaMask wallet (must be the admin address)
2. Enter the recipient's address
3. Specify the amount to release
4. Click "Release Funds" and confirm the transaction

## 🔒 Smart Contract Functions

- `donate()`: Contribute to the scholarship fund
- `applyForScholarship()`: Submit a scholarship application
- `releaseFunds(address, uint256)`: Release funds to a recipient (admin only)
- `getBalance()`: Check the contract's balance
- `totalDonations()`: View total donations received

## 🧪 Testing

Run the test suite:
```bash
truffle test
```

## 📝 Contract Events

- `Applied`: Emitted when a student applies for a scholarship
- `Donated`: Emitted when a donation is made
- `FundsReleased`: Emitted when funds are released to a recipient

## 🔐 Security Considerations

- Only the admin can release funds
- One application per address
- Input validation for all transactions
- Proper error handling and user feedback

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