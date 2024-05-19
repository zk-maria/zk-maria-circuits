![ZK MARIA LOGO](zkmaria2.png)
# ZK-Maria

Leveraging zk proofs to ensure privacy while verifying age, nationality, and valid ID for secure government authorizations.

## The problem

In current Mexican legislation regarding the possession and medicinal and recreational use of marijuana, there is a gray area that allows Mexican citizens over 18 years old, with valid identification, to request an injunction to carry marijuana for personal use of up to 0.15 ounces without fear of being detained. However, the procedure requires the person to identify themselves by providing personal data such as ID number, full name, age, profession, and address. Despite meeting these requirements, the government can still deny the permit.

## Our Solution

zk-maria allows individuals to prove they meet the requirements for age, nationality, and valid ID for various government permissions without revealing their full identity. This ensures privacy and security, making it easier for people to access services without compromising personal information.

## How it Works

### For the Users/Citizens

Three simple steps:

1. Register whit mail or gmail account in zk-maria platform.
    * We create a wallet for the user

2. Upload an ID photo to coomplete the KYC.
    * Giza ZKML helps to extract the values of the ID like: Nationaliti, ID expiration date, and calculate the age

3. Complete some fields for the format that the user want to reques, sign and send to the institution.
    * In this step we generate the zk proof that the user is older or equal than 18yo, is Mexican and his Id does not expiry in the next 30days

### For the institutions

1. Accept or Reject requests
    * in case the institution accept the request they mint an nft permission

![Zero-knowledge dApp example](assets/zk_maria_diagram.png)

## Tech stack

* [ReactJS](https://react.dev/)
* [Circom](https://docs.circom.io/)
* [Giza ZKML](https://actions.gizatech.xyz/giza-platform/architecture)
* [Solidity & Hardhat](https://hardhat.org/)
* [Aleph Zero dapp template](https://github.com/Cardinal-Cryptography/zk-dapp-template)


### Zero-knowledge dApp example in Aleph Zero

- `/circuits` circuit written in circom language
- `/contracts` Solidity smart contract for on-chain circuit verification
- `/frontend` React frontend, submitting zero-knowledge proofs to smart contract

## Usage

1. Run `npm install`.
2. Put private key for deployment account in `contracts/hardhat.config.ts`
3. From root directory, execute `npm run deploy` to deploy smart contracts on-chain. You will get contract address.
4. Put contract address in `frontend/src/RsaChallengeComponent.tsx`. Execute `npm run start`.
