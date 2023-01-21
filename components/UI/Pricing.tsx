import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';

interface Props {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pricing: FC<Props> = ({ setShowModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Stack w="100%" alignItems="center" id="pricing">
      <Stack
        boxShadow="0 4px 12px rgba(0,0,0,0.25)"
        py="3em"
        px="4em"
        borderRadius={8}
        alignItems="center"
        bgColor="white"
        transform="translateY(-3rem)"
      >
        <Heading>$19.90</Heading>
        <Text>/month</Text>
        <FilledBtn
          onClick={setShowModal ? () => setShowModal(true) : scrollToTop}
        >
          Start Now
        </FilledBtn>
        <Heading fontSize="md">7-day trial for only $0.99</Heading>
        <UnorderedList>
          <ListItem>Editing and convert</ListItem>
          <ListItem>Unlimited documents</ListItem>
          <ListItem>Storage in the cloud</ListItem>
          <ListItem>Banking-level security</ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};

export default Pricing;
