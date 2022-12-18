import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) =>
  isOpen ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="rgba(0,0,0,0.5)"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
    >
      <Box bgColor="white" p="1em">
        {children}
      </Box>
    </Flex>
  ) : null;

export default Modal;
