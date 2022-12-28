import { Button, ChakraProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props extends ChakraProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const OutlinedBtn: FC<Props> = ({ children, onClick, ...rest }) => (
  <Button
    variant="outline"
    borderWidth={2}
    borderColor="#FD900F"
    color="#FD900F"
    px="2em"
    _hover={{
      borderColor: '#e3830e',
      color: '#e3830e',
      backgroundColor: 'transparent !important',
    }}
    onClick={onClick}
    {...rest}
  >
    {children}
  </Button>
);

export default OutlinedBtn;
