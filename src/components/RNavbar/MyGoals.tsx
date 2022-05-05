import ArrowGoal from "../ArrowGoal";

const data = {
  mygoals: "My Goals",
  vacation: "Vacation",
  lambo: "Lambo",
  vacationPro: "33%",
  lamboPro: "10%",
}

const MyGoals = () => {
  return (
    <div>
      <div className="flex flex-col w-[338px] h-[294px]">
        <div className="flex flex-col bg-white rounded-lg h-[130px] w-full shadow-[10px_24px_54px_#0000000f]">
          <div className="flex flex-row items-center -mt-10">
            <div className="ml-2.5 font-poppins font-semibold text-x04051a text-xxl 2xl:text-xxxl">{data.mygoals}</div>
            <div className="flex flex-1 w-full ml-40">
              <div className="flex flex-col flex-1 items-start ml-0.5 mr-1 mt-1">
                <div className="relative -mt-px w-[16px] h-[4px]">
                  <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" alt="" />
                  <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" alt="" />
                  <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" alt="" />
                </div>
                <div className="relative mt-px w-[16px] h-[4px]">
                  <img className="absolute left-[3px] top-0 object-cover h-[4px] w-[4px]" src="/img/vector-8@1x.png" alt="" />
                  <img className="absolute left-[6px] top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-9@1x.png" alt="" />
                  <img className="absolute left-0 top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-10@1x.png" alt="" />
                </div>
                <div className="relative mt-px w-[16px] h-[4px]">
                  <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" alt="" />
                  <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" alt="" />
                  <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-10 items-center mt-8">
            <div className="relative w-[92px] h-[92px]">
              <img className="absolute left-[46px] top-0 object-cover h-[69px] w-[46px]" src="/img/pfad-1@1x.png" alt="" />
              <img className="absolute left-0 top-0 object-cover h-[92px] w-[85px]" src="/img/pfad-2@1x.png" alt="" />
              <div className="absolute left-[25px] top-[36px] text-center font-arial-regular text-green-blue text-fsm 2xl:text-xl font-normal ">{data.vacationPro}</div>
            </div>
            <div className=" font-avenirnext-medium text-x04051a 2xl:text-xxxl text-xxl font-bold">{data.vacation}</div>
            <ArrowGoal />
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-10 items-center mt-8 bg-white shadow-[10px_24px_54px_#0000000f]">
          <div className="relative w-[92px] h-[92px]">
            <img className="absolute left-[46px] top-0 object-cover h-[16px] w-[27px]" src="/img/pfad-3@1x.png" alt="" />
            <img className="absolute left-[67px] top-[9px] object-cover w-[24px] h-[74px]" src="/img/pfad-4@1x.png" alt="" />
            <img className="absolute left-0 top-0 object-cover h-[92px] w-[73px]" src="/img/pfad-5@1x.png" alt="" />
            <div className="absolute left-[25px] top-[33px] tracking-normal text-center font-arial-regular font-normal text-green-blue text-fsm 2xl:text-xl">{data.lamboPro}</div>
          </div>
          <div className="font-avenirnext-medium text-x04051a 2xl:text-xxxl text-xxl font-bold">{data.lambo}</div>
          <ArrowGoal />
        </div>
      </div>
    </div>
  )
}

export default MyGoals
