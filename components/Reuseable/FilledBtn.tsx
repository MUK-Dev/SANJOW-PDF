import { Button, ChakraProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props extends ChakraProps {
  children: ReactNode | ReactNode[];
  onClick?: () => void;
  disabled: boolean;
}

const FilledBtn: FC<Props> = ({ children, onClick, ...rest }) => (
  <Button onClick={onClick} variant="outline" color="white" bgColor="#FD900F" {...rest}>
    {children}
  </Button>
);

export default FilledBtn;
