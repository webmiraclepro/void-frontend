import { useState, useEffect } from 'react'
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { AbiItem } from 'web3-utils'
import { DIVIDEN_ABI } from "../../abis";
import { CHAIN_ID } from '../../config';
import TransactionHistory from './TransactionHistory'
import Statistic from './Statistic'
import Reward from './Reward'

import {useAddress} from '../AddressProvider';

const data = {
  title: "Dashboard",
}

const DashBoard = () => {
  const {address} = useAddress();
  const [totalDistributed, setTotalDistributed] = useState<String | undefined>(undefined)
  const [claimableReward, setClaimableRewrd] = useState<String | undefined>(undefined)
  const [totalReward, setTotalReward] = useState<String | undefined>(undefined)

  const getRewardInfo = async () => {
    const dividenDistributor = await voidContract.methods.distributorAddress.call().call();
    const dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);
    const totalRewardDistributend = await dividenContract.methods.totalDistributed.call().call();
    setTotalDistributed(totalRewardDistributend);

    const myclaimableReward = await dividenContract.methods.getUnpaidEarnings(address).call();
    setClaimableRewrd(myclaimableReward);

    const totalRealised = await dividenContract.methods.getTotalRealised(address).call();
    setTotalReward(totalRealised);
  }


  useEffect(()=> {
    if(address && window.ethereum.chainId === CHAIN_ID) {
      getRewardInfo();
    }
  },[address]);

  return (
    // <div className="items-start flex flex-col ml-[28px] mt-[73.5px] min-h-[1161px] xl:w-3/5 2xl:grow">
    <div className="items-start flex flex-col ml-7 mt-20 grow">
      <div className=" ml-4 min-h-[47px] font-poppins font-medium text-x04051a text-xxxxxl">{data.title}</div>
      <Reward claimableReward ={claimableReward} totalReward = {totalReward} totalDistributed ={totalDistributed}/>
      <Statistic/>
      <TransactionHistory />
    </div>
  );
}

export default DashBoard;