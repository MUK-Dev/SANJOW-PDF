import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import Discover from '../components/Discover';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Reassurance from '../components/Reassurance';
import UniquePoints from '../components/UniquePoints';
import WhoAreWe from '../components/WhoAreWe';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Home: FC<Props> = props => {
  const { handleChange } = props;
  return (
    <>
      <Header />
      <Hero handleChange={handleChange} />
      <HowItWorks />
      <Discover />
      <UniquePoints />
      {/* <Pricing /> */}
      <Reassurance />
      <WhoAreWe />
      <Heading textAlign="center" fontStyle="italic" size="lg">
        Your All-in-one PDF software
      </Heading>
      <Footer />
    </>
  );
};
export default Home;
