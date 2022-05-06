import {formatToCurrency} from "../../utils"

interface myWalletProps {
  balance: String | undefined,
}
const MyWallet = (Props: myWalletProps) => {
  
  return (
    <div className="flex flex-col mt-14 items-start w-[338px] ">
      <div className="font-poppins text-xxxl font-bold text-wallet mt-1 ml-3.5 mb-4">My Wallet</div>
      <div className="flex mt-2.5 rounded-lg w-full h-[201px]">
        <div className="flex flex-col ml-0 mt-0 w-full h-full rounded-lg" style={{ background: 'linear-gradient(139.94deg, #000c65 0%, #a9bac6 70.71%)' }}>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between w-full'>
              <img className="h-[41px] w-[84px] ml-5 mt-6" src="/img/voidcard-logo-1@1x.png" alt=""/>
              <div className="bg-[url('/img/rectangle-333@1x.png')] bg-center bg-cover flex mt-[29px] mr-4 h-[24px] w-[24px]">
                <img className="flex-1 h-[3.5px] mx-1 mt-2.5" src="/img/more-hor--1@1x.png" alt=""/>
              </div>
            </div>
            <div className="flex flex-row justify-around space-x-8 items-center mt-3 mb-1.5 text-wild-sand font-nunito_sans 2xl:text-xl xl:text-fsl font-normal">
              <div className="">****</div>
              <div className="">****</div>
              <div className="">****</div>
              <div className="">1999</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full mt-4 bg-[url('/img/blur-rectangle-1@1x.png')] bg-cover h-[83px] ">
            <div className="mt-5 pl-6 font-medium text-wild-sand text-fsl font-avenirnext-medium">Balance in Void Token</div>
            <div className='flex flex-row justify-between items-center mt-2.5'>
              <div className="ml-5 font-bold text-xxl text-white font-avenirnext-bold">{formatToCurrency(Number(Props.balance))}</div>
              <div className="mr-1 text-center text-fsl font-medium font-avenirnext-medium text-wild-sand">BALANCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWallet
