import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  DragEvent, FC, useRef, useState,
} from 'react';

interface Props {
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: any) => void;
}

const Hero: FC<Props> = ({ handleChange }) => {
  const [hovering, setHovering] = useState(false);
  const pickerRef = useRef<any>();

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    event.target;
    const e = {
      ...event,
      target: {
        files: event.dataTransfer.files,
      },
    };
    handleChange(e);
  };

  return (
    <Flex
      py={{ base: '1em', md: '6em' }}
      px={{ base: '1em', md: '5em' }}
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack flex={1}>
        <Heading>THE PDF CONVERTER IN SECONDS</Heading>
        <Text fontSize="3xl">
          Convert your PDF document to Word easily! The easiest and most
          efficient
        </Text>
      </Stack>
      <Stack
        flex={1}
        alignItems="center"
        w="100%"
        onDragOver={() => setHovering(true)}
        onDragLeave={() => setHovering(false)}
        onDrop={handleDrop}
      >
        <Heading mb={2}>Upload your file</Heading>
        <Box
          py="4rem"
          border="2px dashed black"
          w={{ base: '100%', md: '80%' }}
          borderRadius={7}
          backgroundColor={hovering ? 'Highlight' : 'white'}
        >
          <Stack alignItems="center">
            <Image src="/assets/files.png" alt="file" w={50} />
            <Text>Drop PDF Here</Text>
            <Text>or</Text>
            <Button
              colorScheme="teal"
              onClick={() => {
                pickerRef?.current?.click();
              }}
            >
              Browse
            </Button>
            <Input
              type="file"
              onChange={handleChange}
              ref={pickerRef}
              display="none"
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Hero;
