import { FC } from 'react';

import {
  Button,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const Pricing: FC = () => {
  return (
    <Stack w="100%" alignItems="center">
      <Stack
        boxShadow="0 4px 12px rgba(0,0,0,0.25)"
        py="3em"
        px="4em"
        borderRadius={8}
        alignItems="center"
        bgColor="white"
        transform="translateY(-3rem)"
      >
        <Heading>$39.95</Heading>
        <Text>/month</Text>
        <Button variant="outline" color="white" bgColor="#70e963">
          Start Now
        </Button>
        <Heading fontSize="md">14-day trial for only $0.99</Heading>
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
