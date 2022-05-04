import Image from "next/image";

function TransactionListMenu() {
  return (
    <div className="items-center flex-col flex mt-6 w-full">
      <div className="items-start flex flex-row justify-between mr-2 mt-1 w-full px-4 mb-3 font-poppins font-light text-x04051a text-fsl">
        <div className="">Tx Hash</div>
        <div className="">Date</div>
        <div className="">Value</div>
        <div className="">Status</div>
      </div>
      <img className="h-[1px] mt-1 w-full object-cover" src="/img/linie-1@1x.png" alt=""/>
    </div>
  );
}

export default TransactionListMenu;
