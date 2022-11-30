import React from 'react';
import {
  Flex,
  Heading,
  Input
} from '@chakra-ui/react';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Home: React.FC<Props> = (props) => {
  const { handleChange } = props  
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" mt={100}>
          <Heading as='h1' size='2xl'>SANJOW PDF</Heading><br />
          <Input
            onChange={handleChange}
            type="file"
          />
        </Flex>
      </Flex>
    </div>
  )
}
export default Home;
