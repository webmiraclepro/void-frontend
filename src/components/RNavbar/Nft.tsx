const Nft = () => {
  return (
    <div className="items-start flex flex-col mt-8 w-[338px]">
      <div className="pl-6 min-h-[35px] text-x04051a font-poppins text-xxxl font-semibold">NFT</div>
      <div className="rounded-lg h-[201px] mt-2.5 w-full">
        <div className="bg-[url('/img/rectangle-687@1x.png')] items-end bg-center bg-cover rounded-lg flex h-full min-w-full ml-0 mt-0">
          <div className="flex flex-col w-full mt-4 bg-[url('/img/blur-rectangle-1@1x.png')] bg-cover h-[83px]">
            <div className="pl-6 mt-5 font-medium text-wild-sand text-fsm font-avenirnext-medium">MINT</div>
            <div className='flex flex-row justify-between items-center mt-2.5'>
              <div className="ml-5 font-bold text-xxl text-white font-avenirnext-bold">$2,432,864</div>
              <div className="mr-1 text-center text-fsl font-medium font-avenirnext-medium text-wild-sand">LOCKED / 356 DAYS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nft
