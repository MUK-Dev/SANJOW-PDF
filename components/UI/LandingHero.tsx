/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
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

import FilledBtn from '@Reuseables/FilledBtn';

interface Props {
  handleChange: (e: any) => void;
}

const LandingHero: FC<Props> = ({ handleChange }) => {
  const [hovering, setHovering] = useState(false);
  const pickerRef = useRef<any>();

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();

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
      // className="bg-gradient-to-right"
      direction={{ base: 'column', md: 'row' }}
      onDrop={(e) => e.preventDefault()}
    >
      <Stack flex={1} gap="1em">
        <Heading textAlign={{ base: 'center', md: 'left' }}>
          Modify, convert and manage PDF document online
        </Heading>
        <Text
          fontSize="lg"
          textAlign={{ base: 'center', md: 'left' }}
          pb={{ base: '2em', md: 0 }}
        >
          Edit and convert your PDF document easily! Simple and efficient.
        </Text>
        <Stack display={{ base: 'none', md: 'flex' }}>
          <Flex alignItems="center" gap="1em">
            <Image src="/assets/CheckOutlineIcon.svg" alt="check icon" />
            <Text fontSize="lg">Convert your PDFs into different format</Text>
          </Flex>
          <Flex alignItems="center" gap="1em">
            <Image src="/assets/CheckOutlineIcon.svg" alt="check icon" />
            <Text fontSize="lg">Keep your PDF files safe and secure</Text>
          </Flex>
          <Flex alignItems="center" gap="1em">
            <Image src="/assets/CheckOutlineIcon.svg" alt="check icon" />
            <Text fontSize="lg">Fast and easy PDF editing solution</Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        flex={1}
        alignItems="center"
        w="100%"
        onDragOver={(e) => {
          e.preventDefault();
          setHovering(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setHovering(false);
        }}
        onDrop={handleDrop}
      >
        <Heading mb={2}>Upload your files</Heading>
        <Box
          py="4rem"
          border="2px solid rgba(127, 144, 187, 0.3)"
          w={{ base: '100%', md: '80%' }}
          borderRadius={4}
          backgroundColor={hovering ? 'Highlight' : 'transparent'}
        >
          <Stack alignItems="center">
            <Image src="/assets/files.png" alt="file" w={70} />
            <Stack alignItems="center" gap="1em" w="100%">
              <Text>Drop PDF Here</Text>
              <Flex width="50%" gap="0.5em" alignItems="center">
                <Divider borderWidth={1} borderColor="black" flexGrow={1} />
                <Text>OR</Text>
                <Divider borderWidth={1} borderColor="black" flexGrow={1} />
              </Flex>
              <FilledBtn
                onClick={() => {
                  pickerRef?.current?.click();
                }}
              >
                Upload a PDF document
              </FilledBtn>
            </Stack>
            <Input
              type="file"
              onChange={(event) => {
                handleChange(event);
              }}
              ref={pickerRef}
              display="none"
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LandingHero;
