import { useState, useEffect } from 'react';
import React from 'react';
import ReactModal from 'react-modal';
import Image from 'next/image';
import StakingContract from '../Web3/StakingContract';
import NftContract from '../Web3/NftContract';
import StakeModal from '../StakeModal';
import { useAddress } from '../AddressProvider';

const StakingBody = () => {
  const { address } = useAddress();
  const [isStake, setIsStake] = useState(false);
  const [isUnStake, setIsUnStake] = useState(false);
  const [tokenPerBlock, setTokenPerBlock] = useState<String | undefined>(undefined);
  const [amountNft, setAmountNft] = useState<String | undefined>(undefined);
  const [tokenIds, setTokenIds] = useState<Array<{token_id:string}> | undefined>(undefined);

  function openModal() {

  }

  function closeModal() {
    setIsUnStake(false);
    setIsStake(false);
  }

  const getTokenPerBlock = async () => {
    const tokensPerBlock = await StakingContract.methods.tokensPerBlock.call().call();
    // setTokenPerBlock(tokensPerBlock);
  }

  const getTokenIdsofWallet = async (account: String | undefined) => {
    if (!account) {
      return;
    }
    try {
      const tokenIds = await NftContract.methods.walletOfOwner(account).call();
      setTokenIds(tokenIds);
      setAmountNft(tokenIds.length);
      console.log(tokenIds);
    } catch (e: any) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (address) {

      // getTokenPerBlock();
      // getTokenIdsofWallet(address);
    }
  }, [address])

  return (
    <div id="staking-body" className='flex justify-center'>
      <div className="container flex flex-row justify-center items-center max-w-[1000px] mx-[50px] my-[50px]">
        <div id="staking-body-card" className='flex flex-col items-center w-2/3 max-w-[400px] m-auto h-[400px] rounded-[25px] bg-white shadow-[0_5px_15px_#0000004d]'>
          <div className='text-xxl font-bold my-[25px]'>
            STAKING
          </div>
          <div className='flex flex-col justify-center text-center my-[20px]'>
            <div className='flex flex-row  space-x-12'>
              <div className='text-xl font-bold text-center items-center my-[20px]'>
                NFT: <span>{amountNft}</span>
              </div>
              <div className='text-xl font-bold text-center items-center my-[20px]'>
                TokensPerBlock: <span>{tokenPerBlock}</span>
              </div>
            </div>
            <div className='text-xl font-bold'>
              AVAILABLE TO STAKE
            </div>
          </div>
          <div className='text-xxl font-bold my-[20px]'>
            Nft to stake
          </div>
          <div id="staking" className='flex h-[40px] w-[150px] text-center rounded-[25px] shadow-[0_5px_15px_#0000004d] bg-[#9ae0fe] my-[25px]  hover:border border-gray-900 cursor-pointer'>
            <button className='flex-1 font-avenirnext-bold font-bold text-xl rounded-[25px] text-center text-x04051a w-full h-full' onClick={() => {setIsStake(true); setIsUnStake(false)}}>
              Choose Nft
            </button>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-[25px] h-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
          </div>
        </div>
        <div className='w-[50px] h-[50px]'>
          <Image src='/images/vs.png' width={40} height={40} />
        </div>
        <div className='flex flex-col items-center w-2/3 max-w-[400px] h-[400px] m-auto rounded-[25px] bg-white shadow-[0_5px_15px_#0000004d]'>
          <div className='text-xxl font-bold my-[25px]'>
            UNSTAKING
          </div>
          <div className='flex flex-col justify-center my-[20px]'>
            <div className='text-xl font-bold text-center items-center my-[20px]'>
              NFT: <span>{0}</span>
            </div>
            <div className='text-xl font-bold'>
              AVAILABLE TO UNSTAKE
            </div>
          </div>
          <div className='text-xxl font-bold my-[20px]'>
            Nft to unStake
          </div>
          <div id="unstaking" className='flex w-[150px] h-[40px] text-center rounded-[25px] bg-[#ffe782] shadow-[0_5px_15px_#0000004d] my-[25px] hover:border border-gray-900 cursor-pointer'>
            <button className='flex-1 font-avenirnext-bold font-bold text-xl rounded-[25px] text-center text-x04051a w-full h-full' onClick={() => {setIsUnStake(true); setIsStake(false)}}>
              Choose Nft
            </button>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-[25px] h-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
          </div>

        </div>

      </div>
      <StakeModal tokenIds={[{token_id:"12"}, {token_id:"12"}, {token_id:"12"}]} isClaim={false} isStake={isStake} isUnStake={isUnStake} closeModal={closeModal} />
    </div>
  )
}

export default StakingBody;