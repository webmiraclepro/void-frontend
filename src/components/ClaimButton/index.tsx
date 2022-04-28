import React, { useEffect, useState } from "react";
import StakingContract from "../Web3/StakingContract";
import web3 from "../Web3";
import { AbiItem } from 'web3-utils'
// import { DIVIDEN_ABI } from "../../abis";
import { CHAIN_ID } from "../../config";
import { formatWalletAddress, readAddress } from "../../utils"

interface ButtonProps {
  actionText: string,
  onClaim: (bal: string | undefined) => void,
}

const ClaimButton = ({ actionText, onClaim }: ButtonProps) => {

  const claim = async () => {
    try {
      const selectedAddress = await readAddress();
      claimDividend(selectedAddress);
    } catch (e: any) {
      console.log(e);
    }
  }

  const claimDividend = async (account: string ) => {
    if (window.ethereum.chainId !== CHAIN_ID) {
      onClaim(undefined);
      return;
    }
    try {
      // const dividenDistributor = await StakingContract.methods.distributorAddress.call().call();
      // const dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);
      // const claimed = await dividenContract.methods.claimDividend().send({from: account});
      // console.log("claimed", claimed);
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <div className='flex w-[90px] h-[60px] text-center rounded-[45px] h-full shadow-[0_5px_15px_#0000004d] bg-white hover:border border-gray-900'>
      <button className='flex-1 font-avenirnext-medium font-medium text-xl rounded-[45px] border text-center text-[#eb99ca] w-full h-full' onClick={claim}>
        {actionText}
      </button>
    </div>
  );
};

export default ClaimButton;
