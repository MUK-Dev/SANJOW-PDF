import { FC } from 'react';
import { Button, Divider, Heading, Stack } from '@chakra-ui/react';

import Header from '@Reuseables/Header';
import LandingHero from '@UI/LandingHero';
import HowItWorks from '@UI/HowItWorks';
import Discover from '@UI/Discover';
import UniquePoints from '@UI/UniquePoints';
import Pricing from '@UI/Pricing';
import Reassurance from '@UI/Reassurance';
import WhoAreWe from '@UI/WhoAreWe';
import Footer from '@Reuseables/Footer';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Landing: FC<Props> = props => {
  const { handleChange } = props;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <LandingHero handleChange={handleChange} />
      </Stack>
      <HowItWorks />
      <Discover />
      <UniquePoints />
      <Pricing />
      <Reassurance />
      <WhoAreWe />
      <Footer
        quote={
          <>
            <Stack alignItems="center" pb="2em" px={{ base: '1em', md: '5em' }}>
              <Heading textAlign="center" fontStyle="italic" size="lg" py="1em">
                Works with digital and scanned files. Get started and upload
                your document to our online PDF editor and converter.
              </Heading>
              <Button
                onClick={scrollToTop}
                variant="outline"
                color="white"
                bgColor="#70e963"
              >
                Upload a PDF document
              </Button>
            </Stack>
            <Divider borderWidth={1} borderColor="#7F90BB" />
          </>
        }
      />
    </>
  );
};
export default Landing;
