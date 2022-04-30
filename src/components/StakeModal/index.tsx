import { useState, useCallback, useEffect } from 'react'
import StakeCard from "../StakeCard"
import ReactModal from 'react-modal';

interface ModalProps {
  tokenIds: Array<{ token_id: string }> | undefined,
  isStake: boolean,
  isUnStake: boolean,
  isClaim: boolean,
  closeModal: () => void,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// ReactModal.setAppElement('#yourAppElement');

const StakeModal = ({ tokenIds, isStake, isUnStake, isClaim, closeModal }: ModalProps) => {

  let action: string;

  const actionText = () => {
    if (isStake) {
      action = "stake";
    }
    if (isUnStake) {
      action = "unStake";
    }
    if (isClaim) {
      action = "claim";
    }
  }
  const handleStakeCard = useCallback(() => {
    console.log("handleStakeCard")
    closeModal();
  }, [])


  actionText();

  return (
    <ReactModal
      isOpen={isStake ? isStake : isUnStake ? isUnStake : isClaim ? isClaim : false}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='flex flex-row items-center justify-between my-[10px]'>
        <h2 className="">NFT!</h2>
        <button onClick={closeModal}>x</button>
      </div>
      <div className='flex flex-col space-y-4 justify-center'>
        {
          tokenIds?.map((k: any) => {
            return (
              <div className="">
                <StakeCard onhandle={handleStakeCard} tokenId={k.token_id} action={action} />
              </div>
            )
          })

        }
      </div>
    </ReactModal>
  )
}

export default StakeModal;