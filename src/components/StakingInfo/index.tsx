import { useState, useCallback, useEffect } from 'react'
import ClaimButton from "../ClaimButton";
import web3 from '../Web3';
import FactoryTokenContract from "../Web3/FactoryTokenContract"
import StakingContract from '../Web3/StakingContract';
import NftContract from '../Web3/NftContract';
import {MAPESTAKE_ADDRESS} from '../../abis/Staking';
import {useAddress} from '../AddressProvider';
import { CHAIN_ID } from '../../config';

const StakingInfo = () => {
  const {address} = useAddress();
  const [totalToken, setTotalToken] = useState<String | undefined>(undefined);
  const [stakeEarned, setStakeEarned] = useState<String | undefined>(undefined);
  const [staked, setStaked] = useState<String | undefined> (undefined);

  const handleOnClaim = useCallback(() => {
    console.log("handleOnClaim")
  }, [])

  const getCurrentStakeEarned = async (tokenId: String | undefined) => {
    const curStakeEarned = await StakingContract.methods.getCurrentStakeEarned(tokenId).call();
    setStakeEarned(curStakeEarned);
  }

  const getFactoryTokenBalance = async (account: String | undefined) => {
    if(!account || window.ethereum.chainId !== CHAIN_ID) {
      setTotalToken(undefined)
    }
    try {
      const value = await FactoryTokenContract.methods.balanceOf(account).call();
      const bal = web3.utils.fromWei(value, "ether");
      setTotalToken(bal);

    } catch(e: any) {
      console.log(e);
    }
  }

  const getStaked = async (account: String | undefined) => {
    const staked = await NftContract.methods.walletOfOwner(account).call();
    console.log(staked);
    const len = staked.length;
    setStaked(len);
  }

  useEffect(() => {
    getFactoryTokenBalance(address);
    // getCurrentStakeEarned(address);// replace address into tokenId
    getStaked(MAPESTAKE_ADDRESS);
  }, [address])
  
  return (
    <div id="staking-info" className='flex justify-center'>

      <div className='flex flex-row items-center justify-center space-x-4 max-w-[1200px] rounded-[35px] shadow-[0_5px_15px_#0000004d] py-[10px] px-[4%]'>

        <div id="staking-info-item-staked" className="items-center text-center w-[200px] h-[60px] rounded-[35px] bg-[#ffe782] shadow-[0_5px_15px_#0000004d]">
          <div className="flex flex-col h-full justify-center" >
            <div className="">{staked}</div>
            <div className="">STAKED</div>
          </div>
        </div>
        <div id="staking-info-item-yield" className="w-[200px] h-[60px] rounded-[35px] bg-[#c5ff82] shadow-[0_5px_15px_#0000004d]">
          <div className="flex flex-col h-full justify-center">
            <h5 className="text-center">0</h5>
            <h5 className="text-center">YIELD</h5>
          </div>
        </div>
        <div id="staking-info-item-total" className="w-[200px] h-[60px] rounded-[35px] bg-[#9ae0fe] shadow-[0_5px_15px_#0000004d]">
          <div className="flex flex-col h-full justify-center">
            <h5 className="text-center">{totalToken}</h5>
            <h5 className="text-center">TOTAL</h5>
          </div>
        </div>
        <div id="staking-info-item-claimed" className="flex flex-row justify-between w-[300px] h-[60px] pl-5 pr-0 rounded-[45px] bg-[#eb99ca] shadow-[0_5px_15px_#0000004d]">
          <div className="flex flex-col h-full justify-center">
            <h5 className="text-center">{stakeEarned}</h5>
            <h5 className="text-center">UNREALIZED</h5>
          </div>
          <ClaimButton actionText="Claim" onClaim={handleOnClaim} />
        </div>
      </div>
    </div>
  )
}

export default StakingInfo;