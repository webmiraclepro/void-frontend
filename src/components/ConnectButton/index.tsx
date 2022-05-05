import React, { useEffect, useState } from "react";
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { CHAIN_ID } from "../../config";
import { formatWalletAddress, readAddress, isMetaMaskInstalled, changeNetwork } from "../../utils"

import {useAddress} from '../AddressProvider';

interface ButtonProps {
  actionText: string,
  onBalanceChange: (bal: string | undefined) => void,
}

const ConnectButton = ({ actionText, onBalanceChange }: ButtonProps) => {
  const {address, updateAddress} = useAddress();
  const connectWallet = async () => {
    if (address && window.ethereum.chainId === CHAIN_ID) {
      console.log('Already connected');
      return;
    }
    try {
      if(window.ethereum.chainId !== CHAIN_ID) {
        await changeNetwork(CHAIN_ID);
      }
      
      const selectedAddress = await readAddress();
      updateAddress(selectedAddress);
    } catch (e: any) {
      console.log(e);
    }
  };

  const getBalance = async (account: String | undefined) => {

    if (!account || window.ethereum.chainId !== CHAIN_ID) {
      onBalanceChange(undefined);
      return;
    }
    try {
      const value = await voidContract.methods.balanceOf(account).call();
      const bal = web3.utils.fromWei(value, "Gwei");
      onBalanceChange(bal);
    } catch (e: any) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!isMetaMaskInstalled()) {
      console.log('Please install metamask first');
      return;
    }
    // set current address
    setTimeout(() => updateAddress(window.ethereum?.selectedAddress as string), 100);
    
    const listenerAccountsChanged = ([selectedAddress]: string[]) => {
      updateAddress(selectedAddress);
    };
    const listenerChainChanged = (chainId: string) => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', listenerAccountsChanged);
    window.ethereum.on('chainChanged', listenerChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', listenerAccountsChanged);
      window.ethereum.removeListener('chainChanged', listenerChainChanged);
    };

  }, []);

  useEffect(() => {
    console.log('address hook');
    getBalance(address);
  }, [address]);

  return (
    <div className='flex rounded-lg border border-violet-blue text-center 2xl:w-full 2xl:h-full w-5/6 h-4/5'>
      <button className='flex-1 font-avenirnext-medium font-medium 2xl:text-xxxxl xl:text-xxl rounded-lg border border-violet-blue text-center text-x04051a w-full h-full ' onClick={connectWallet}>
        {address ? <span className="font-avenirnext-medium font-medium 2xl:text-xxxl xl:text-xl">{formatWalletAddress(address)}</span> : actionText}
      </button>
    </div>
  );
}

export default ConnectButton;
