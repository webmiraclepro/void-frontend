import { formatToCurrency } from "../../utils"

interface rewardProps {
  totalReward: String | undefined,
  claimableReward: String | undefined,
  totalDistributed: String | undefined,
}

function Reward(props: rewardProps) {
  return (
    <div className="flex flex-col items-start bg-black-haze rounded-lg ml-px mt-5 min-h-[309px] w-full py-7 px-4">
      <div className="min-h-[35px] ml-6 font-poppins font-semibold text-x04051a text-xxxl">Reward in DAI</div>
      <div className="flex flex-row items-center bg-white rounded-lg shadow-[10px_24px_50px_#0000000f] py-5 w-full px-4">
        <div className="w-1/3 font-avenirnext-medium text-x04051a text-xxl font-medium">Claimable Rewards</div>
        <div className="w-1/3 font-avenirnext-medium font-medium text-x04051a text-xxl">My Total Rewards</div>
        <div className="w-1/3 font-avenirnext-medium font-medium text-x04051a text-xxl">Total Rewards Distributed</div>
      </div>
      <div className="flex flex-row -mt-10 w-full mb-6">
        <div className="w-1/3 flex flex-col items-start mt-5 ml-1">
          <div className="mt-16 min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">{formatToCurrency(Number(props.claimableReward))}</div>
          <div className="flex items-center mt-2 min-w-[204px] h-[22px]">
            <div className="bg-[url('/img/pfad-21@1x.png')] bg-center bg-cover flex items-center h-[13px] mb-px -ml-px min-w-[13px] py-0 px-0">
              <img className="object-cover h-[12px] w-[12px]" src="/img/pfad-22-2@1x.png" alt="arrow22" />
            </div>
            <div className="self-end -mb-1 ml-7 min-h-[24px] font-avenirnext-medium text-x04051a text-fsl font-medium">20% From last month</div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start mt-5">
          <div className="mt-16 min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">{formatToCurrency(Number(props.totalReward))}</div>
          <div className="flex items-start -ml-px mt-2.5 h-[24px] min-w-[189px]">
            <div className="flex flex-col items-start -mt-[33px] min-h-[176px] rotate-90 w-[86px]">
              <div className="-ml-3.5 mt-[110px] w-[13px] h-[13px]">
                <img className="ml-0 mt-0 object-cover h-full w-full -rotate-90" src="/img/pfad-21-1@1x.png" alt="arrow21" />
                <img className="ml-0.5 -mt-3.5 object-cover h-[12px] w-[12px] -rotate-90" src="/img/pfad-22-1@1x.png" alt="arrow22" />
              </div>
            </div>
            <div className="-ml-9 min-h-[24px] font-avenirnext-medium font-medium text-x04051a text-fsl">7% From last month</div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start mt-5 ">
          <div className="mt-16 min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">{formatToCurrency(Number(props.totalDistributed))}</div>
          <div className="flex items-start -ml-px mt-2.5 h-[24px] min-w-[189px]">
            <div className="bg-center bg-cover items-center flex mt-px h-[13px] min-w-[13px] py-0 px-0 bg-[url('/img/pfad-21-2@1x.png')]" >
              <img className="object-cover h-[12px] w-[12px]" src="/img/pfad-22-2@1x.png" alt="arrow22" />
            </div>
            <div className="ml-5 min-h-[24px] font-avenirnext-medium font-medium text-x04051a text-fsl">17% From last month</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
