import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react'

import ConnectButton from "../ConnectButton";
import ClaimButton from "../ClaimButton";
import MyWallet from './MyWallet';
import Nft from './Nft';
import MyGoals from './MyGoals';

const RNavBar = () => {

  const handleOnClaim = useCallback(() => {
    console.log("handleOnClaim")
  }, [])

  const [active, setActive] = useState(false)
  const [balance, setBalance] = useState<String | undefined>(undefined)

  const handleBalanceChange = useCallback((bal: string | undefined) => {
    setBalance(bal)
  }, [])

  useEffect(() => {
    console.log("balance", balance);
    setBalance(balance);
  }, [balance])

  return (
    <div className="2xl:h-[1280px]">
      <div className="flex h-full w-full">
        <div className="flex flex-row h-full bg-white w-full -mb-10">
          <img className="object-cover w-[1px] h-full" src="/img/linie-2@1x.png" alt="verticalline" />
          <div className="flex flex-col mt-24 px-8 items-start">
            <div className="flex items-start">
              <div className="-mt-10 w-[219px] h-[58px]" >
                <ConnectButton actionText="Connect Wallet" onBalanceChange={handleBalanceChange} />
              </div>
              <div className="-mt-10 2xl:ml-3 xl:ml-0 w-[108px] h-[58px]">
                <ClaimButton actionText="Claim" onClaim={handleOnClaim} />
              </div>
            </div>
            <MyWallet balance={balance} />
            <Nft />
            <div className="flex flex-col mt-8 w-[338px] h-full pb-5 bg-[url('/img/pfad-6@1x.png')] bg-cover bg-white shadow-[10px_24px_54px_#0000000f]">
              <div className="pl-6 font-poppins font-semibold text-x04051a text-xxxl">Total Rewards in $DAI</div>
              <div className='flex flex-row justify-between items-center w-full mt-16'>
                <div className="pl-6 font-bold font-avenirnext-demibold text-x04051a text-xxxl">$2400</div>
                <div className="pr-10 font-avenirnext-medium font-semibold text-x04051a text-fsl">BALANCE</div>
              </div>
            </div>
            <MyGoals />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RNavBar
