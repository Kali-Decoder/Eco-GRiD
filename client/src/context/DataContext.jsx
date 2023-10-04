import React, { createContext, useContext, useState, useEffect } from "react";

import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
import { usePublicClient, useAccount, useNetwork } from "wagmi";
import { useEthersSigner } from "../web3-services/signer.ts";

const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChainId] = useState(chain?.id);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);
  const { address, isDisconnected } = useAccount();
  const signer = useEthersSigner(activeChain);
  const [confetti, setConfetti] = useState(false);
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onRegisterUser=()=>{
    setConfetti(true);
    sleep(500 * 1000);
    
    setConfetti(false);
  }


  useEffect(() => {
    if (!signer) return;
  }, [signer, address]);


  return (
    <UserDataContext.Provider
      value={{
        onRegisterUser,
        confetti
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);