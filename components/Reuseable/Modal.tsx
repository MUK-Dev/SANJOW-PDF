import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, children, onClose }) => (isOpen ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="rgba(68, 68, 68, 0.1)"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      backdropFilter='blur(4px)'
      onClick={onClose}
    >
      <Box bgColor="white" borderRadius={8} p="1em" zIndex={1000} onClick={(e) => e.stopPropagation()}>
        {children}
      </Box>
    </Flex>
) : null);

export default Modal;
