function ChartBar(props: any) {
  const { caption, upheight, downheight} = props;
  return (
    <div className="flex flex-col items-end 2xl:ml-3.5 xl:ml-2.5 min-h-[254px] xl:w-[20px] 2xl:w-[31px]">
      <div className="flex items-end rounded-lg h-[156px] xl:min-w-[14px] 2xl:min-w-[25px]" style={{ background: 'linear-gradient(180deg, #0d18a2 0%, rgba(63, 58, 185, 0.47) 34.48%, rgba(255, 255, 255, 0) 100%)' }}>
        <div className={`bg-blue-charcoal rounded-lg xl:w-[20px] 2xl:w-[25px]`} style={{height:upheight}}></div>
      </div>
      <div className="flex items-start bg-ebb rounded-lg h-[53px] mt-1 min-w-[25px]">
        <div className={`bg-froly rounded-lg xl:w-[20px] 2xl:w-[25px]`} style={{height:downheight}}></div>
      </div>
      <div className="mr-px mt-5 min-h-[22px] text-center xl:w-[25px] 2xl:w-[30px]">{caption}</div>
    </div>
  );
}

export default ChartBar;
