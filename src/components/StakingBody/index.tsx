import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import StakingContract from '../Web3/StakingContract';
import NftContract from '../Web3/NftContract';
import StakeModal from '../StakeModal';
import { useAddress } from '../AddressProvider';
import { CHAIN_ID } from '../../config';

const stakeCardImg = '/images/Mike.png'
const GoopIcon = '/svg/Goop.svg';
const clockIcon = '/svg/clock.svg';
const unStakeImg = '/images/Quad1.png';

const StakingBody = () => {
  const { address } = useAddress();
  const [isStake, setIsStake] = useState(false);
  const [isUnStake, setIsUnStake] = useState(false);
  const [tokenPerBlock, setTokenPerBlock] = useState<String | undefined>(undefined);
  const [amountNft, setAmountNft] = useState<String | undefined>(undefined);
  const [tokenIds, setTokenIds] = useState<Array<{ token_id: string }> | undefined>(undefined);

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
    if (address && window.ethereum.chainId === CHAIN_ID) {
      getTokenPerBlock();
      getTokenIdsofWallet(address);
    }
  }, [address])

  return (
    <div id="staking-body" className='flex justify-center'>
      <div className="container flex flex-row justify-center items-center w-[95%] max-w-[1000px] mx-auto my-12">
        <div id="staking-body-card" className='flex flex-col items-center w-2/3 max-w-[400px] m-auto h-[400px] py-1 rounded-[25px] bg-[#fafafa] shadow-[0_5px_15px_#0000004d]'>
          <div className='text-xxl font-bold my-6'>
            STAKING
          </div>
          <div className='flex flex-row justify-around w-full text-center my-5'>
            <div className='flex flex-col items-center text-center'>
              <img src={stakeCardImg} className="w-[80px] h-auto mb-2.5" alt="stakecard" />
              <div className='text-fsm font-bold text-center items-center'>
                NFT: <span>{amountNft}</span>
              </div>
              <div className='text-fsm font-bold'>
                AVAILABLE TO STAKE
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img className='w-[80px] h-auto mb-2.5' src={GoopIcon} alt="goopicon" />
              <div className='text-fsm font-bold text-center items-center'>
                $GOOP: <span>{tokenPerBlock}</span>
              </div>
              <div className='text-fsm font-bold'>
                PER STAKED
              </div>
            </div>
          </div>
          <div className='text-xxl font-bold mt-5'>
            NFTS TO STAKE
          </div>
          <div className="flex justify-between rounded-[25px] w-3/5 mx-auto mt-5 mb-12 py-2.5 px-6 shadow-[0_5px_15px_#0000004d] border-2 border-[#9ae0fe] bg-[#9ae0fe] hover:border border-gray-900 cursor-pointer"
            onClick={() => { setIsStake(true); setIsUnStake(false) }}
          >
            <div className="font-avenirnext-bold font-bold text-fsl text-x04051a">CHOOSE NFTS</div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
          </div>
        </div>
        <div className='w-[50px] h-[50px]'>
          <Image src='/images/vs.png' width={40} height={40} />
        </div>
        <div className='flex flex-col items-center w-2/3 max-w-[400px] h-[400px] m-auto rounded-[25px] py-1 bg-[#fafafa] shadow-[0_5px_15px_#0000004d]'>
          <div className='text-xxl font-bold my-6'>
            UNSTAKING
          </div>
          <div className='flex flex-row justify-around w-full text-center my-5'>
            <div className='flex flex-col items-center text-center'>
              <img src={unStakeImg} className="w-[80px] h-auto mb-2.5" alt="stakecard" />
              <div className='text-fsm font-bold text-center items-center'>
                NFT: <span>{amountNft}</span>
              </div>
              <div className='text-fsm font-bold'>
                AVAILABLE TO UNSTAKE
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img className=' h-auto w-[50px] -mb-3' src={clockIcon} alt="goopicon" />
              <button id="unstake-queue-button" className='border-2 shadow-[0_5px_15px_#0000004d] bg-[#fafafa] rounded-[25px] py-2 px-5 mt-2.5 text-xs'>0 IN QUEUE</button>
              <button id="unstake-queue-button" className='border-2 shadow-[0_5px_15px_#0000004d] bg-[#fafafa] rounded-[25px] py-2 px-5 mt-2.5 text-xs'>0 IN COOLDOWN</button>
            </div>
          </div>
          <div className='text-xxl font-bold mt-5'>
            NFTS TO UNSTAKE
          </div>
          <div className="flex justify-between rounded-[25px] w-3/5 mx-auto mt-5 mb-12 py-2.5 px-6 shadow-[0_5px_15px_#0000004d] border-2 border-[#ffe782] bg-[#ffe782] hover:border border-gray-900 cursor-pointer"
            onClick={() => { setIsUnStake(true); setIsStake(false) }}
          >
            <div className="font-avenirnext-bold font-bold text-fsl text-x04051a">CHOOSE NFTS</div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="staking-select-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
          </div>
        </div>

      </div>
      <StakeModal tokenIds={[{ token_id: "12" }, { token_id: "12" }, { token_id: "12" }]} isClaim={false} isStake={isStake} isUnStake={isUnStake} closeModal={closeModal} />
    </div>
  )
}

export default StakingBody;