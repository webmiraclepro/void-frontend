import { useState, useCallback, useEffect } from 'react'
import StakeCard from "../StakeCard"
import ReactModal from 'react-modal';
const close_icon = '/svg/close_icon.svg';

interface ModalProps {
  tokenIds: Array<{ token_id: string }> | undefined,
  isStake: boolean,
  isUnStake: boolean,
  isClaim: boolean,
  closeModal: () => void,
}

const customStyles = {
  overlay: {
    // position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
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
      // onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='flex flex-row items-center justify-between my-2.5'>
        <div className="font-bold text-xxl">NFT!</div>
        <button onClick={closeModal}>
          <img className="w-[30px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
        </button>
      </div>
      <div className='flex flex-col w-1/2 h-1/2 space-y-4 justify-center'>
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