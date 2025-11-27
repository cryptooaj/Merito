# 🛡️ Merito: Private, Merit-Based Governance Framework (Compact DApp)

**Status:** Proof-of-Concept (PoC) | **Proposed For:** Project Catalyst - Midnight Compact DApps | **License:** Apache License, Version 2.0

## 💡 Project Overview

The **Merito Compact DApp** is a foundational open-source framework designed to solve the critical challenges of plutocracy and Sybil attacks in decentralized governance.

Merito enables **merit-based (shāyesteh-sālārī) voting** by leveraging Midnight's **Private State** and **ZK-proofs** to allow users to privately prove their expertise (via Verifiable Credentials) and unique identity, ensuring vote weight is determined by verifiable qualifications, not token holdings.

### Core Value Proposition

  * **Privacy-Preserving Sybil Resistance:** Implements a mechanism to link multiple DIDs to a single, verified identity, storing the linkage hash securely in the Private State.
  * **Selective Disclosure for Merit:** Generates Zero-Knowledge Proofs (ZKPs) to prove a user possesses the required VCs and calculate their weighted vote score ($W$), without revealing the sensitive credentials themselves.
  * **Reusable Tooling:** Provides the definitive reference architecture for combining ZK logic, Compact Contracts, and the TypeScript ecosystem on Midnight.

## ⚙️ Architecture and Components

The DApp is composed of three interconnected, modular repositories:

| Component | Technology | Role |
| :--- | :--- | :--- |
| **MeritoWeightingEngine** | Compact Language (Rust) | The auditable, on-chain contract that verifies the ZKP and updates the vote tally. **Does not access private data.** |
| **TypeScript SDK** | TypeScript/JavaScript | The local engine responsible for reading VCs, running the ZK circuit, and generating the proof of eligibility and weight. |
| **PoC UI** | TypeScript/React | The user interface demonstrating the private identity linking, VC upload, and transaction submission flow. |

## 🚀 Getting Started

To run the full Proof-of-Concept locally, you must have the required Midnight SDK and tooling installed.

### Prerequisites

  * Rust Toolchain (for Compact Contract compilation)
  * Node.js (LTS version)
  * Yarn or npm
  * Midnight SDK/Toolchain (refer to official documentation)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/YourRepo/merito-compact-dapp.git
cd merito-compact-dapp

# 1. Setup Compact Contract environment
cd compact
cargo build # Ensure the contract compiles

# 2. Setup TypeScript SDK and UI (Dependencies are shared)
cd ../sdk-ts 
npm install 
```

## 🧪 Usage and Verification

### 1\. Running the PoC UI

This command starts the local web interface for demonstration purposes.

```bash
npm run start:poc
```

### 2\. Verification and Testing

Validation of the Merito DApp is focused on the correctness of the ZK logic and contract verification.

| Component | Purpose | Command |
| :--- | :--- | :--- |
| **Compact Contract** | Ensure the `verify_and_cast_vote` function correctly accepts valid ZK proofs and rejects invalid/tampered proofs. | `cd compact && cargo test --package merito_contract` |
| **TypeScript SDK** | Verify the SDK reliably generates the required ZKP and calculates the correct weighted score ($W$) given specific VC inputs. | `cd sdk-ts && npm test --suite=proof_generation` |

## 🧩 Reusability and Extension Points

Developers are encouraged to reuse and extend the core components:

  * **Custom Governance Logic:** Modify the **Meritocratic Weighting Formula** within the `MeritoWeightingEngine.compact` source code.
  * **Private Identity:** Reuse the **Private Identity Linking** pattern demonstrated in the SDK for any DApp requiring Sybil-resistant user access.
  * **SDK Integration:** Integrate the `merito_sdk.proof.generateMeritProof()` API into any external DAO front-end.

## 👥 Team

| Name | Role | Profile Link |
| :--- | :--- | :--- |
| **Omid Ajourlou** | Software Architect & Project Lead | [https://www.linkedin.com/in/omidajorlou/] |
| **Sadegh Ghoroghi** | Software Engineer | [Link to LinkedIn/Portfolio] |

## 📜 License

This project is released under the **Apache 2.0 License**. See the `LICENSE` file for details.

-----

[Link to Project Proposal Documentation] | [Link to Technical Tutorials]
