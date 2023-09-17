import React, { useContext, useState, useEffect } from "react";
import { useNetwork, useAccount } from "wagmi";
import { useEthersSigner } from "../web3-services/signer.ts";
import { ethers, BigNumber } from "ethers";
import { db } from "../utils/firebase.js";
import {
  updateDoc,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  query,
  where,
  increment,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";

import axios from "axios";

const MarbleContext = React.createContext();

const EcoContextProvider = ({ children }) => {
  const { address } = useAccount();
  const { chains, chain } = useNetwork();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [activeChain, setActiveChainId] = useState(chain?.id);
  const [currentRaceid, setCurrentRaceId] = useState("");
  const [raceStatus, setRaceStatus] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [isElegible, setIsElegible] = useState(false);
  const [totalWager, setTotalWager] = useState(0);
  const [myBets, setMyBets] = useState([]);
  const [allBets, setAllBets] = useState([]);
  const [allRaces, setAllRaces] = useState([]);
  const [claims, setClaims] = useState([]);
  const [points, setPoints] = useState(0);
  const [betOnButtons, setBetOnButtons] = useState([]);
  const [owner, setOwner] = useState("");

  const [owner2, setOwner2] = useState("");

  const [betArray, setBetArray] = useState([]);

  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);

  // const signer = useEthersSigner(activeChain);
  // const getContractInstance = async (contractAddress, contractAbi) => {
  //   try {
  //     let contractInstance = new ethers.Contract(
  //       contractAddress,
  //       contractAbi,
  //       signer
  //     );
  //     return contractInstance;
  //   } catch (error) {
  //     console.log("Error in deploying contract", error);
  //   }
  // };
  // // async function updateCurrentId() {
  // //   let marbleInstance = await getContractInstance(
  // //     marbleContractAddress[activeChain],
  // //     marbleContractAbi
  // //   );
  // //   console.log(marbleInstance, "marble");
  // //   let currentRaceId = await marbleInstance.getCurrentRaceId();
  // //   let bettingStatus = await marbleInstance.bettingStatus();
  // //   if (bettingStatus == 0) {
  // //     setRaceStatus(true);
  // //   } else {
  // //     setRaceStatus(false);
  // //   }

  // //   setCurrentRaceId(+currentRaceId.toString());
  // // }

  // // async function sleep(ms) {
  // //   return new Promise((resolve) => setTimeout(resolve, ms));
  // // }

  // // const updateChainId = async () => {
  // //   try {
  // //     await sleep(2 * 1000);
  // //     setInterval(updateCurrentId, 10000);
  // //   } catch (error) {
  // //     console.log(error);
  // //   }
  // // };
  // // useEffect(() => {
  // //   if (!signer) return;
  // //   updateChainId();
  // // }, [signer]);

  // const calculateWinningBalance = (userBet, totalPLayerBet, totalWager) => {
  //   if (userBet && totalPLayerBet && totalWager) {
  //     return (userBet / totalPLayerBet) * totalWager;
  //   }
  // };
  // const endRace = async (winnerID) => {
  //   try {
  //     console.log(currentRaceid, "currentRaceid");
  //     toast.info("End Race Started !!!");
  //     let raceRef = doc(db, "games", currentRaceid.toString());
  //     const q = query(
  //       collection(raceRef, "bettors"),
  //       where("playerId", "==", +winnerID)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     const raceSnapshot = await getDoc(raceRef);
  //     querySnapshot.forEach(async (item) => {
  //       console.log("yoo", item.id, " => ", item.data());
  //       // doc.data() is never undefined for query doc snapshots

  //       const userRef = doc(db, "users", item.id);
  //       const userSnapshot = await getDoc(userRef);
  //       if (userSnapshot.exists()) {
  //         const winningBalance = calculateWinningBalance(
  //           +item.data().amount,
  //           +raceSnapshot.data()["betArray"][winnerID],
  //           +raceSnapshot.data()["total wager"]
  //         );
  //         console.log(winningBalance, "winningBalance");
  //         updateDoc(userRef, {
  //           balance: increment(+winningBalance),
  //         });
  //       }
  //     });
  //     updateDoc(raceRef, {
  //       winner: winnerID,
  //       isEnded: true,
  //     });

  //     setDoc(doc(db, "games", (+currentRaceid.toString() + 1).toString()), {
  //       "total wager": 0,
  //       betArray: [0, 0],
  //       isEnded: false,
  //       isBettingAllowed: true,
  //       Options: ["PINK", "YELLOW"],
  //       maxmiumPlayers: 2,
  //       raceId: +currentRaceid.toString() + 1,
  //       timestamp: new Date(),
  //       winner: 2,
  //     });

  //     toast.info("End Race Ended !!!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getElegibilty = async () => {
  //   try {
  //     console.log(currentRaceid, "currentRaceid");
  //     const userRef = doc(db, "games", currentRaceid.toString());
  //     const bettingAllowed = (await getDoc(userRef)).data().isBettingAllowed;
  //     setRaceStatus(bettingAllowed);
  //     if (!bettingAllowed) {
  //       setIsElegible(false);
  //       return;
  //     }
  //     const bettorRef = doc(userRef, "bettors", address);
  //     const snapRaceREef = await getDoc(bettorRef);
  //     if (snapRaceREef.exists()) {
  //       setIsElegible(false);
  //     } else {
  //       setIsElegible(true);
  //       console.log("User not found.");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // async function getRaces() {
  //   try {
  //     const gamesCollectionRef = collection(db, "games");
  //     /*       const querySnapshot = await getDocs(gamesCollectionRef); */

  //     // const raceRef = doc(userRef,"bettors",address);
  //     // const snapRaceREef= await getDoc(raceRef);
  //     // console.log("bets",snapRaceREef.data());
  //     // const userSnapshot = await getDoc(userRef);
  //     // if (userSnapshot.exists()) {
  //     //   const userData = userSnapshot.data();
  //     //   console.log("Racess",userData);
  //     // } else {
  //     //   console.log("User not found.");
  //     // }

  //     // console.log(querySnapshot,"snap")
  //     const q = query(gamesCollectionRef, orderBy("raceId"));
  //     onSnapshot(q, (querySnapshot) => {
  //       let raceArray = [];
  //       let optionsArray = [];
  //       querySnapshot.forEach((doc) => {
  //         let data = doc.data();

  //         if (data.isEnded == false) {
  //           for (let i in data.Options) {
  //             optionsArray.push({
  //               key: i,
  //               text: data.Options[i],
  //             });
  //           }
  //           setRaceStatus(true);
  //           console.log("Racses", data.raceId);
  //           setCurrentRaceId(+data.raceId);
  //         }

  //         raceArray.push({
  //           id: doc.id,
  //           totalAmount: data["total wager"],
  //           status: data.isEnded,
  //           raceId: data.raceId,
  //           maximumPlayers: data.maxmiumPlayers,
  //           timestamp: data.timestamp.seconds,
  //           options: data.Options,
  //           winner: data.winner,
  //           betArray: data.betArray,
  //         });
  //         console.log("total wager", +data["total wager"]);
  //         setTotalWager(+data["total wager"]);
  //       });

  //       console.log("Racses", raceArray);

  //       setAllRaces(raceArray);
  //       setBetOnButtons(optionsArray);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const updateRaceData = async (raceId, data) => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const placeYourBet = async (playerId, amount) => {
  //   try {
  //     if (playerId === undefined || amount === undefined || amount === 0) {
  //       console.log(playerId, amount);
  //       return toast.error("something went wrong!!!");
  //     }
  //     if (points < amount) {
  //       return toast.error("insufficient Balance!!!");
  //     }

  //     const userRef = doc(db, "games", currentRaceid.toString());
  //     const bettingAllowed = (await getDoc(userRef)).data().isBettingAllowed;
  //     if (!bettingAllowed) {
  //       toast.error("Betting is closed");
  //       return;
  //     }
  //     const bettorRef = doc(userRef, "bettors", address);
  //     const snapRaceREef = await getDoc(bettorRef);
  //     const raceSnap = await getDoc(userRef);
  //     const prevBalance = raceSnap.data()["total wager"];

  //     if (snapRaceREef.exists()) {
  //       toast.error("You have already placed your bet");
  //       return;
  //     } else {
  //       const betterArray = raceSnap.data()["betArray"];
  //       betterArray[playerId] = +betterArray[playerId] + +amount;

  //       await setDoc(bettorRef, {
  //         betted: true,
  //         amount: amount,
  //         playerId: playerId,
  //         timestamp: new Date(),
  //         walletAddress: address,
  //       });

  //       await updatePoints(-amount);
  //       await updateDoc(userRef, {
  //         "total wager": +amount + +prevBalance,
  //         betArray: betterArray,
  //       });
  //       toast.success("Bet Placed Successfully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // async function getPoints() {
  //   try {
  //     // Reference to the specific user document using their address
  //     const userRef = doc(db, "users", address);
  //     onSnapshot(userRef, (doc) => {
  //       if (doc.exists()) {
  //         const userData = doc.data();
  //         toast.success(
  //           `Balance Updated ${+userData.balance - +points} Bet Points`
  //         );
  //         setPoints(+userData.balance);

  //         return userData.balance;
  //       } else {
  //         setPoints(0);
  //         console.log("User not found.");
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error getting user balance:", error);
  //     return 0;
  //   }
  // }

  // async function updatePoints(newBalance) {
  //   try {
  //     // Reference to the specific user document using their address
  //     const userRef = doc(db, "users", address);

  //     if (newBalance < 0) {
  //       await updateDoc(userRef, {
  //         balance: increment(-Math.abs(newBalance)),
  //       });
  //     } else {
  //       await updateDoc(userRef, {
  //         balance: increment(Math.abs(newBalance)),
  //       });
  //     }

  //     console.log("User balance updated successfully.");
  //   } catch (error) {
  //     console.error("Error updating user balance:", error);
  //   }
  // }

  // const getTokenBalance = async () => {
  //   try {
  //     let tokenInstance = await getContractInstance(
  //       tokenContractAddress[activeChain],
  //       tokenContractAbi
  //     );

  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );
  //     let blockBetInstance = await getContractInstance(
  //       blockBetContractAddress,
  //       blockBetContractABI
  //     );

  //     let tokenAddressBalance = await tokenInstance.balanceOf(address);
  //     let decimals = await tokenInstance.decimals();
  //     let symbol = await tokenInstance.symbol();
  //     let owner = await marbleInstance.owner();
  //     let owner2 = await blockBetInstance.owner();

  //     setSymbol(symbol);
  //     const DECIMAL = BigNumber.from(10).pow(decimals);
  //     let _amount = BigNumber.from(tokenAddressBalance).div(DECIMAL);

  //     setTokenBalance(+_amount.toString());
  //     setOwner(owner);
  //     setOwner2(owner2);
  //     console.log("balance", tokenBalance);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getMyBets = async () => {
  //   try {
  //     const gamesCollectionRef = await collection(db, "games");
  //     const querySnapshot = await getDocs(gamesCollectionRef);
  //     const myBetsArray = [];

  //     querySnapshot.forEach(async (item) => {
  //       const raceRef = doc(db, "games", item.id.toString());
  //       const betRef = doc(raceRef, "bettors", address);
  //       const betSnap = await getDoc(betRef);
  //       if (betSnap.exists()) {
  //         console.log("bets", betSnap.data());
  //         let betData = betSnap.data();
  //         myBetsArray.push({
  //           raceId: item.id,
  //           amount: betData.amount,
  //           playerId: betData.playerId,
  //           timestamp: betData.timestamp?.seconds || 3000000,
  //           wallet_address: betData.walletAddress,
  //           betted: betData.betted,
  //         });
  //       }
  //     });
  //     setMyBets(myBetsArray);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getAllBets = async () => {
  //   try {
  //     const allBetsArray = [];
  //     for (let i = 0; i <= currentRaceid; i++) {
  //       const userRef = doc(db, "games", i.toString());
  //       const userSnapshot = await getDoc(userRef);
  //       if (userSnapshot.exists()) {
  //         const bettorsCollectionRef = await collection(userRef, "bettors");
  //         const querySnapshot = await getDocs(bettorsCollectionRef);

  //         querySnapshot.forEach((item) => {
  //           console.log("Bettors =--", item.id, item.data());
  //           allBetsArray.push({
  //             raceId: i,
  //             amount: item.data().amount,
  //             playerId: item.data().playerId,
  //             timestamp: item.data().timestamp.seconds,
  //             wallet_address: item.data().walletAddress,
  //             betted: item.data().betted,
  //           });
  //         });

  //         setAllBets(allBetsArray);
  //         console.log("CurrentBets", allBetsArray);
  //       } else {
  //         console.log("User not found.");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getDashboardDetails = async () => {
  //   try {
  //     let currentRaceId;
  //     let tokenAddressBalance;
  //     let bettingStatus;
  //     let symbol;

  //     let tokenInstance = await getContractInstance(
  //       tokenContractAddress[activeChain],
  //       tokenContractAbi
  //     );

  //     tokenAddressBalance = await tokenInstance.balanceOf(address);
  //     let decimals = await tokenInstance.decimals();
  //     const DECIMAL = BigNumber.from(10).pow(decimals);
  //     let _amount = BigNumber.from(tokenAddressBalance).div(DECIMAL);

  //     symbol = await tokenInstance.symbol();

  //     setSymbol(symbol);

  //     setTokenBalance(+_amount.toString());
  //     await getElegibilty();

  //     getPlayerIDLeaderboard();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const depositTokens = async (amount) => {
  //   try {
  //     const usersCollectionRef = await doc(db, "users", address);
  //     const querySnapshot = await getDoc(usersCollectionRef);

  //     let userExists = false;
  //     if (querySnapshot.exists()) {
  //       userExists = true;
  //     }

  //     console.log("User Exist", userExists);

  //     let tokenInstance = await getContractInstance(
  //       tokenContractAddress[activeChain],
  //       tokenContractAbi
  //     );

  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );

  //     let decimals = await tokenInstance.decimals();
  //     const DECIMAL = BigNumber.from(10).pow(decimals);
  //     let _amount = BigNumber.from(amount).mul(DECIMAL);
  //     let txs = await tokenInstance.approve(
  //       marbleContractAddress[activeChain],
  //       _amount
  //     );
  //     await txs.wait(1);
  //     let tx = await marbleInstance.deposit(_amount);
  //     await tx.wait(1);

  //     if (!userExists) {
  //       await setDoc(doc(db, "users", address), {
  //         balance: amount,
  //         address: address,
  //       });
  //     } else {
  //       await updatePoints(+amount);
  //     }

  //     //await getPoints();
  //     toast.success("Deposited Successfully !!!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const withdrawTokens = async (amount) => {
  //   try {
  //     if (amount > points) {
  //       toast.error("Insufficient Balance");
  //       return;
  //     }
  //     toast.info("Withdrawing Tokens");

  //     const response = await axios.post(
  //       "https://blockbet.onrender.com/api/withdraw",
  //       {
  //         address,
  //         amount,
  //       },
  //       {
  //         timeout: 120000,
  //       }
  //     );
  //     console.log(response.data);

  //     if (response.status === 200) {
  //       //await getPoints();
  //       await getDashboardDetails();
  //       toast.success("Withdraw Successful");
  //     } else {
  //       toast.error("Withdraw Failed, try again later");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Withdraw Failed, try again later");
  //   }
  // };
  // function formatTimestamp(timestamp) {
  //   const date = new Date(timestamp * 1000);

  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  //   const year = date.getFullYear();
  //   const month = months[date.getMonth()];
  //   const day = date.getDate();
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const seconds = date.getSeconds();

  //   // Add leading zero for single-digit numbers
  //   const formattedMonth = month.padStart(2, "0");
  //   const formattedDay = day.toString().padStart(2, "0");
  //   const formattedHours = hours.toString().padStart(2, "0");
  //   const formattedMinutes = minutes.toString().padStart(2, "0");
  //   const formattedSeconds = seconds.toString().padStart(2, "0");

  //   const formattedDate = `${formattedMonth} ${formattedDay}, ${year}`;
  //   const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  //   return `${formattedDate} ${formattedTime}`;
  // }

  // function trimAndAddAddress(address) {
  //   if (address) {
  //     const trimmedAddress = address.slice(0, 5) + "..." + address.slice(-5);
  //     return trimmedAddress;
  //   }
  // }

  // const getClaimDetails = async () => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getPlayerIDLeaderboard = async () => {
  //   try {
  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );

  //     let array = await marbleInstance.getPlayerIDLeaderboard(1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (!signer) return;
  //   getRaces();
  // }, [signer, address]);

  // useEffect(() => {
  //   if (!signer) return;
  //   getTokenBalance();
  //   getPoints();

  //   getElegibilty();
  //   getMyBets();
  //   getAllBets();

  //   // getDashboardDetails();
  //   console.log("Something is changed !!!");
  // }, [signer, address, currentRaceid]);

  // const claimYourBet = async (raceId) => {
  //   try {
  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );
  //     let tx = await marbleInstance.claim(raceId);
  //     await getDashboardDetails();
  //     await getMyBets();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const toggleBetting = async () => {
  //   try {
  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );
  //     let tx = await marbleInstance.toggleBetting();
  //     await getDashboardDetails();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const changePercentages = async (_taxPercentage, _burnPercentage) => {
  //   try {
  //     let marbleInstance = await getContractInstance(
  //       marbleContractAddress[activeChain],
  //       marbleContractAbi
  //     );

  //     let tx = await marbleInstance.changePercentages(
  //       _taxPercentage,
  //       _burnPercentage
  //     );
  //     await getDashboardDetails();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <MarbleContext.Provider value={{}}>{children}</MarbleContext.Provider>
    </>
  );
};

export const useMarbleContext = () => useContext(MarbleContext);

export default EcoContextProvider;
