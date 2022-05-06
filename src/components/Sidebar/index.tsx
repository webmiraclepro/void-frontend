
const data = {
    dashboard: "Dashboard",
    announcement: "Announcement",
    taxCalculator: "Tax Calculator",
    staking: "Staking",
    disconnect: "Disconnect",
}

const SideBar = () => {
    return (
        <div className="-mt-32 md:hidden lg:block">
            <div className="flex items-end justify-center h-full">
                <div className="bg-x04051a h-[1476px] -mb-16 pr-12 border border-violet-blue">
                    <div className="flex flex-col 2xl:ml-16 ml-12 pr-12 mt-40 items-center h-full">
                        <img className="2xl:h-[102px] 2xl:w-[212px] xl:h-[80px] xl:w-[160px] object-cover" src="/img/voidcard-logo@1x.png" alt="voidlogo" />
                        <div className="flex flex-row justify-start items-center w-full space-x-10 mt-28">
                            <div className="bg-[url('/img/combined-shape@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-px"></div>
                            <div className="tracking-[0.12px] text-blueberry font-avenirnext-medium 2xl:text-xxxl xl:text-xxl font-medium">{data.dashboard}</div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full space-x-10 mt-14">
                            <div className="bg-[url('/img/combined-shape-1-1x-png@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-px "></div>
                            <div className="tracking-[0.12px] font-avenirnext-medium text-white 2xl:text-xxxl xl:text-xxl font-medium">{data.announcement}</div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full space-x-10 mt-14">
                            <div className="bg-[url('/img/combined-shape-2-1x-png@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-px "></div>
                            <div className="tracking-[0.12px] font-avenirnext-medium text-white 2xl:text-xxxl xl:text-xxl font-medium">{data.taxCalculator}</div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full space-x-10 mt-14">
                            <div className="bg-[url('/img/pfad-16@1x.png')] bg-center bg-cover h-[27px] w-[27px] ">
                                <img className="ml-3 mt-1.5 h-[14px] w-[2px] object-cover" src={"/img/pfad-17@1x.png"} alt="" />
                                <img className="ml-1.5 -mt-2 h-[2px] w-[14px] object-cover" src={"/img/pfad-18@1x.png"} alt="" />
                            </div>
                            <div className="tracking-[0.12px] font-avenirnext-medium text-white 2xl:text-xxxl xl:text-xxl font-medium">{data.staking}</div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full space-x-10 mt-auto mb-80">
                            <div className="bg-[url('/img/combined-shape-3@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-px"></div>
                            <div className="tracking-[0.12px] font-avenirnext-medium text-white 2xl:text-xxxl xl:text-xxl font-medium">{data.disconnect}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
