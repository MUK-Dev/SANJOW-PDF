/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  ChangeEvent, FC, useRef, useState,
} from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import Modal from '@Reuseables/Modal';
import OutlinedBtn from '@Reuseables/OutlinedBtn';

interface Props {
  handleChange: (e: any) => void;
}

const Docs: FC<Props> = ({ handleChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pickerRef = useRef<any>();

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();

    const e = {
      ...event,
      target: {
        files: event?.dataTransfer?.files,
      },
    };
    handleChange(e as unknown as ChangeEvent<Element>);
  };

  return (
    <>
      <Box className="bg-gradient-to-right">
        <Header />
      </Box>
      <Flex minH="70vh" px="1em" justifyContent="center" alignItems="center">
        <Stack alignItems="flex-start" w={{ base: '100%', md: '80%' }}>
          <Heading fontSize="3xl">Your documents</Heading>
          <Stack pb="0.5em" alignItems="flex-end" w="100%">
            <OutlinedBtn onClick={() => setShowModal(true)}>
              + Add New
            </OutlinedBtn>
          </Stack>
          {Array.from(Array(5).keys()).map((i) => (
            <>
              <Flex
                key={i}
                justifyContent="space-between"
                w="100%"
                px="2em"
                py="0.5em"
              >
                <Flex gap="1em">
                  <Image src="/assets/docs/doc.png" alt="doc" />
                  <Link>Document12{i + 1}.pdf</Link>
                </Flex>
                <Flex gap="1em">
                  <Link fontWeight={600}>Edit</Link>
                  <Link fontWeight={600}>Download</Link>
                </Flex>
              </Flex>
              <Divider borderWidth={1} borderColor="rgba(68, 68, 68, 0.6)" />
            </>
          ))}
        </Stack>
      </Flex>
      <Footer quote={<></>} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Stack
          alignItems="center"
          p="2em 1em"
          onDragOver={(e) => {
            e.preventDefault();
            setHovering(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setHovering(false);
          }}
          onDrop={(e) => handleDrop(e as any)}
        >
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
      </Modal>
    </>
  );
};

export default Docs;
