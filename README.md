# Eco-GRiD: Empowering Clean Energy Trading with Blockchain

## Problem Statement and Solution

**Intent:** We aim to create a peer-to-peer blockchain marketplace for buying and selling renewable energy, fostering local energy production and consumption while reducing reliance on centralized power grids.

**Impact:** Traditional centralized energy grids often prove inefficient and reliant on fossil fuels. Our vision is to revolutionize the energy sector with a blockchain-based energy trading platform that empowers individuals and communities to produce and sell excess renewable energy. This innovative approach incentivizes the adoption of clean energy sources, significantly reduces greenhouse gas emissions, and creates more resilient and sustainable energy systems. Additionally, promoting local energy production and consumption can lead to increased energy security and sustainability.

**Approach:** In response to the Verihack Problem Statement 5, we propose an Energy Trading marketplace that encompasses both Peer-to-Peer (P2P) and Prosumer-to-Grid (P2G) or Grid-to-Prosumer (G2P) transactions. P2P trading bridges the gap between one nation's grid and another, facilitating decentralized trading of renewable energy. To establish trust and transparency, we employ blockchain technology, securely recording every energy transaction on an immutable ledger.

Within national grids, our solution empowers prosumers, including users, substations, and power stations, to engage in energy transactions, buying and selling. Users can efficiently sell surplus renewable energy to their nearest grid, enhancing grid stability. Additionally, machine learning algorithms continuously analyze energy data, predict demand trends, and optimize renewable resource utilization for efficient and sustainable energy use.

**Assumptions:** Our solution relies on several key assumptions, including stakeholder willingness to adopt blockchain technology, data availability for machine learning predictions, regulatory support for decentralized trading, and active prosumer participation. Adequate funding for infrastructure development and ongoing technological advancements are also assumed.

**VeriDoc API Use Case:** Our platform requires just three routes for user authorization:- 

Submit Document Route (/api/submitdocument)
Why? :- Users can register by utilizing the Veri-doc API's Submit-Doc functionality for document submission.(Submitting PAN card Document).
Generation QRCode Route (/api/generateqr)
	Why? :- Is it necessary to attach a QR code for verification after completing the registration.
At Last Verification Route (/api/verification)
	Why?:- For Verification of the user Docs on the chain .

The same process applies when placing buy and sell orders, with the platform automatically generating invoices.



## Team Members:
- Neeraj Choubisa
- Rakesh Roushan
- Sneha Gupta


## Core Features:
- Cross-Border P2P Trading
- P2G and G2P Transactions
- Blockchain Trust
- Prosumer Empowerment
- Real-time Monitoring
- Automated Settlements

## How to Get Started:
1. Clone the repository.
2. Set up the required dependencies.
3. Explore the codebase, including the VeriDoc API integration.
4. Run the application locally to see our solution in action.


## Flowchart:
![SIH-2](https://github.com/Kali-Decoder/Eco-GRiD/assets/82640789/952ca8ff-f460-4c7e-9bd7-a763c9a768c1)



**Screenshots:**
<img width="1470" alt="Landing Page" src="https://github.com/Kali-Decoder/Eco-GRiD/assets/82640789/1967874f-15f7-4679-bd8b-2b926fae0b9b">
<img width="1470" alt="Marketplace" src="https://github.com/Kali-Decoder/Eco-GRiD/assets/82640789/b6881907-e04e-4b87-8021-e0ad1606b0c8">

**Team Members:**
- Neeraj Choubisa
- Rakesh Roushan
- Sneha Gupta

Explore the future of clean energy trading with EcoGRiD. Join us on this journey towards a sustainable and eco-friendly energy future.
