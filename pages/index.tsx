import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, {
  ChangeEvent, FC, useRef, useState,
} from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import Modal from '@Reuseables/Modal';
import Discover from '@UI/Discover';
import EditAndConvert from '@UI/EditAndConvert';
import Hero from '@UI/Hero';
import Pricing from '@UI/Pricing';
import Reassurance from '@UI/Reassurance';
import UniquePoints from '@UI/UniquePoints';
import WhoAreWe from '@UI/WhoAreWe';
import useEditor from 'hooks/useEditor';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Home: FC<Props> = () => {
  const [showModal, setShowModal] = useState(false);
  const [hovering, setHovering] = useState(false);
  const { handleChange } = useEditor();

  const pickerRef = useRef<any>();

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();

    const e = {
      ...event,
      target: {
        files: event?.dataTransfer?.files,
      },
    };
    handleChange?.(e as unknown as ChangeEvent<Element>);
  };

  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <Hero setShowModal={setShowModal} />
      </Stack>
      <Discover setShowModal={setShowModal} />
      <EditAndConvert />
      <UniquePoints showGradient={false} />
      <Reassurance />
      <Pricing setShowModal={setShowModal} />
      <WhoAreWe setShowModal={setShowModal} />
      <Footer
        quote={
          <>
            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              pb="2em"
              gap="2em"
              px={{ base: '1em', md: '5em' }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Heading
                size="lg"
                py="1em"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Get more with premium and join The PDF software trusted by
                thousands of users
              </Heading>
              <FilledBtn px="3em" onClick={() => setShowModal(true)} >Start Now</FilledBtn>
            </Flex>
            <Divider borderWidth={1} borderColor="#D9D9D9" />
          </>
        }
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
        <Box
          onDragOver={(e) => {
            e.preventDefault();
            setHovering(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setHovering(false);
          }}
          onDrop={(e) => handleDrop(e as any)}
          py="4rem"
          px="2em"
          border="2px solid rgba(127, 144, 187, 0.3)"
          w="100%"
          borderRadius={4}
          position="relative"
          backgroundColor={hovering ? 'Highlight' : 'transparent'}
        >
          <Button
            position="absolute"
            top={0}
            right={0}
            onClick={() => setShowModal(false)}
            bgColor="transparent"
            _hover={{ bgColor: 'transparent !important' }}
            opacity={0.5}
          >
            X
          </Button>
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
                handleChange?.(event);
              }}
              ref={pickerRef}
              display="none"
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
export default Home;
