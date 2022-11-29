import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  Input
} from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = (props) => {
  const { handleChange } = props
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" mt={100}>
          <Heading as='h1' size='2xl'>SANJOW PDF</Heading><br />
          {/* <Text align="center" paddingTop={10}>Go to PDF editor</Text> */}
          <Input
            onChange={handleChange}
            type="file"
          />
          {/* <Link href='editor' textAlign="center">
          <IconButton
            aria-label="Login"
            icon={<ChevronRightIcon color="sanjow.100" />}
            variant="outline"
            link="editor"
            size="lg"
            textAlign="center"
            margin="auto"
          />
        </Link> */}
        </Flex>
      </Flex>
    </div>
  )
}
export default Home;
