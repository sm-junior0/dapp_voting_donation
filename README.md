# Web3 dApp Projects

This repository contains two decentralized applications (dApps) built on the Ethereum blockchain:

1. **Scholarship Funding dApp** - A platform for transparent scholarship fund management
2. **Voting dApp** - A secure and immutable voting system

## 📁 Project Structure

```
web3/
├── scholarship-dapp/    # Scholarship funding application
│   ├── client/         # Frontend application
│   ├── contracts/      # Smart contracts
│   ├── migrations/     # Deployment scripts
│   └── test/          # Test files
│
└── voting_dapp/        # Voting application
    ├── src/           # React frontend
    ├── contracts/     # Smart contracts
    ├── migrations/    # Deployment scripts
    └── test/         # Test files
```

## 🎯 Project Overview

### 1. Scholarship Funding dApp
A decentralized platform that enables transparent scholarship fund management. It allows donors to contribute to a scholarship fund, students to apply for scholarships, and administrators to manage fund distribution.

**Key Features:**
- Transparent donation tracking
- One-click scholarship applications
- Secure fund distribution
- Real-time donation updates

[View Scholarship dApp Documentation](./scholarship-dapp/README.md)

### 2. Voting dApp
A secure and immutable voting system built on the Ethereum blockchain. It enables users to create polls, cast votes, and view results in a trustless environment.

**Key Features:**
- Poll creation and management
- One vote per address
- Real-time result tracking
- Voter registration system

[View Voting dApp Documentation](./voting_dapp/README.md)

## 🛠️ Common Technology Stack

Both projects share the following technologies:
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Development Framework**: Truffle
- **Wallet Integration**: MetaMask
- **Testing**: Truffle Test Suite

## 📋 Prerequisites

Before working with either project, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MetaMask](https://metamask.io/) browser extension
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://trufflesuite.com/ganache/) (for local development)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sm-junior0/dapp_voting_donation.git
cd web3
```

2. Choose a project to work with:
   - For Scholarship dApp: `cd scholarship-dapp`
   - For Voting dApp: `cd voting_dapp`

3. Follow the specific installation instructions in each project's README:
   - [Scholarship dApp Setup](./scholarship-dapp/README.md#installation)
   - [Voting dApp Setup](./voting_dapp/README.md#installation)

## 📝 Development Guidelines

- Always test on testnets before mainnet deployment
- Follow Solidity best practices
- Write comprehensive tests
- Document all smart contract functions
- Use proper error handling
- Implement security best practices

## 🔐 Security Considerations

Both projects implement:
- Access control mechanisms
- Input validation
- Proper error handling
- Gas optimization
- Secure fund management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Both projects are licensed under the MIT License. See individual project READMEs for details.

## 👥 Authors

- SHEJA MANENE Junior - Initial work

## 🙏 Acknowledgments

- Ethereum Foundation
- Truffle Suite
- MetaMask Team
- OpenZeppelin

## 📞 Support

For support:
- Open an issue in the repository
- Contact the maintainers
- Check the specific project documentation

---

**Note**: These dApps are for educational purposes. Always test thoroughly on testnets before deploying to mainnet.
