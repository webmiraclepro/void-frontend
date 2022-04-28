import NavBar from '../components/Navbar';
import StakingInfo from '../components/StakingInfo';
import StakingBody from '../components/StakingBody';

import AddressProvider from '../components/AddressProvider';

const Home = () => {
  return (
    <AddressProvider>
      <div className='flex flex-col'>
        <NavBar />
        <StakingInfo />
        <StakingBody />

      </div>

    </AddressProvider>
  )
}

export default Home;
