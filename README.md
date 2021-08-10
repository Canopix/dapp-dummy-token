# dApp Interview

You can test this app here:
 [DEMO](http://dummy-dapp.netlify.app "DEMO")

### About DUMMY Token
This application interacts with the DUMMY token deployed on Ropsten.
Contract Address here:
https://ropsten.etherscan.io/address/0xCa498a756ea7f05BBa1958542C2CD8B7C99AFcB3

To test this app, you should be on Ropsten Network on Metamask; anyways, the app will show you a Warning about this if you are not on Ropsten. 

### How to set the contract address
To set the contract address, please create a `.env` file in the root directory with the following content
```
REACT_APP_CONTRACT_ADDRESS=0xCa498a756ea7f05BBa1958542C2CD8B7C99AFcB3
```

That address is the address where I deployed with hardhat the Dummy Token and now the address `0x1D9aa2025b67f0F21d1603ce521bda7869098f8a` (address of engineering team) have 500000 Dummy Token (Actual worth: 0, please hodl 😂)

### Technical Decisions
In the exercise, redux-sagas was one of those things that should be were nice to have.
I used to work with redux-saga, and it works perfectly, being a modern way to manage the state, fetching external resources, and more.

But I decided no to use it in the development of this app, and there is a special point of why I make this decision: 

- I want to show the team that reviews my code another tool that, IMHO is the easiest way to manage the state, called easy-peasy. This is one idea that I already thought to make an Issue on the Decentraland GitHub repository and suggest it

### How to run this app
You can run this app through the following command 
`npm run start` or `yarn start`

