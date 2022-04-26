import Image from "next/image";
function ArrowGoal() {
  return (
    <div className="h-[17px] w-[9px]">
      <div className="flex-1 my-[3.8px] -mx-[3.8px] w-[16.63px] origin-center -rotate-90">
        <Image className="flex-1 -my-[3.8px] mx-[3.8px] w-[9.02px] origin-center rotate-90 object-cover" src="/img/stroke-1-1@1x.png" layout="fill" alt = ""/>
      </div>
    </div>
  );
}

export default ArrowGoal;
