import {
  Flex, Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  title: string;
  description?: string;
  path?: string;
}

const Card: FC<Props> = ({
  title,
  description,
  path = '/assets/convert.png',
}) => (
    <Flex
      borderRadius={7}
      h="100%"
      p="1em"
      boxShadow="0px 1px 3px 0 rgba(0,0,0,0.1)"
    >
      <Image src={path} alt="convert" w={50} h={50} />
      <Stack px="1em">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </Stack>
    </Flex>
);

export default Card;
