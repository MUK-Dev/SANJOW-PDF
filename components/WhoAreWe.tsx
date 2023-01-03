import {
  Flex, Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const WhoAreWe: FC = () => (
  <Flex
    px={{ base: '1em', md: '5em' }}
    py={{ base: '1em', md: '4em' }}
    alignItems="center"
    w="100%"
    direction={{ base: 'column', md: 'row' }}
    gap="2em"
  >
    <Stack flexGrow={1}>
      <Heading>Who are we?</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In a iste
        culpa voluptates tempore praesentium hic, non consequuntur aliquid,
        beatae exercitationem doloremque nostrum quidem, error repellat
        distinctio eaque! Totam, dolorum?
      </Text>
    </Stack>
    <Stack flexGrow={1}>
      <Image
        src="/assets/who-we-are.jpg"
        alt="Who We Are"
        objectFit="cover"
        borderRadius={7}
      />
    </Stack>
  </Flex>
);

export default WhoAreWe;
