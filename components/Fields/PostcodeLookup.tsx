import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  HStack,
  Stack,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
  Select,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useEnvVars, formatPostcode } from '@Utils';


type Props = {
  namePrefix: string;
  separator?: '_' | '.';
  setShowAddress: Dispatch<SetStateAction<boolean>>;
};

export const PostcodeLookup = ({
  namePrefix,
  separator = '_',
  setShowAddress,
}: Props) => {
  const { API_ENDPOINT } = useEnvVars();
  const {
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();
  const [postcode, setPostcode] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState<Record<string, any>>([]);
  const [addressIndex, setAddressIndex] = useState(0);
  const [error, setError] = useState('');
  const cancelRef = useRef();
  const hasPostcodeError = errors[`${namePrefix}${separator}postcode`];

  const handleAddressSelection = async () => {
    const address = addresses[addressIndex];
    const { town_or_city, county, country, formatted_address, line_1, line_2 } =
      address;
    let building_name_number = formatted_address[0];
    const building_number = formatted_address[0].split(' ')[0];

    if (building_number.match(/[0-9]+/)) {
      building_name_number = building_number;
    }

    setValue(
      `${namePrefix}${separator}building_name_number`,
      `${building_name_number}`,
    );
    setValue(`${namePrefix}${separator}street_name`, `${line_1}`);
    setValue(`${namePrefix}${separator}address_line_2`, `${line_2}`);
    setValue(`${namePrefix}${separator}town`, town_or_city);
    setValue(`${namePrefix}${separator}postcode`, postcode);
    setValue(`${namePrefix}${separator}county`, county);

    switch (country.toLowerCase()) {
      case 'england':
        setValue(`${namePrefix}${separator}country`, 'GBR01');
        break;
      case 'scotland':
        setValue(`${namePrefix}${separator}country`, 'GBR02');
        break;
      case 'wales':
        setValue(`${namePrefix}${separator}country`, 'GBR03');
        break;
      case 'northern ireland':
        setValue(`${namePrefix}${separator}country`, 'GBR04');
        break;
      case 'isle of man':
        setValue(`${namePrefix}${separator}country`, 'GBR05');
        break;
      case 'guernsey':
        setValue(`${namePrefix}${separator}country`, 'GBR06');
        break;
      case 'jersey':
        setValue(`${namePrefix}${separator}country`, 'GBR08');
        break;
      case 'default':
        setValue(`${namePrefix}${separator}country`, 'GBR');
        break;
    }

    setShowAddress(true);
    setIsOpen(false);
    await trigger();
  };

  const fetchPostCode = () => {
    setShowAddress(false);
    setError('');

    if (!postcode) {
      setError('Please specify a postcode to lookup');
      return;
    }

    fetch(`${API_ENDPOINT}/postcode/${postcode.replace(' ', '')}`)
      .then(response => response.json())
      .then(data => {
        const { success, addresses = [] } = data;
        if (success) {
          if (addresses.length) {
            setAddresses(addresses);
            setIsOpen(true);
          } else {
            setError('No address was found for this postcode');
          }
        } else {
          setError(
            "Couldn't lookup your postcode, please try again or enter your address manually",
          );
        }
      })
      .catch(() => {
        setError(
          "Couldn't lookup your postcode, please enter your address manually",
        );
      });
  };

  return (
    <>
      <FormControl flex={1} isInvalid={!!error}>
        <Stack
          spacing={{ base: '2', lg: '3' }}
          direction={{ base: 'column', lg: 'row' }}
          alignItems="flex-start"
          w="full"
        >
          <VStack
            flexShrink={0}
            w={{ base: 'full', lg: 4 / 12 }}
            alignItems="flex-start"
            spacing="-2"
          >
            <FormLabel>Address Postcode</FormLabel>
          </VStack>
          <HStack
            flexShrink={0}
            w={{ base: 'full', lg: 4.7 / 12 }}
            alignItems="flex-start"
          >
            <VStack w={3 / 5} alignItems="flex-start" spacing="2">
              <Input
                size="sm"
                py="4"
                borderColor="grey"
                borderRadius="5px"
                bg="white"
                mr="2"
                value={postcode}
                onChange={e => setPostcode(e.target.value)}
                onBlur={() => setPostcode(formatPostcode(postcode))}
              />
              <FormErrorMessage
                fontSize="xs"
                fontWeight="medium"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Text>{error}</Text>
                {postcode && (
                  <Button
                    mt={-1}
                    variant="unstyled"
                    fontSize="xs"
                    color="black"
                    onClick={() => {
                      setShowAddress(true);
                      setError('');
                    }}
                  >
                    Set Address Manually
                  </Button>
                )}
              </FormErrorMessage>
            </VStack>
            <Button
              type="button"
              size="sm"
              w={2 / 5}
              fontSize="sm"
              bg="black"
              color="white"
              borderWidth="2px"
              borderColor="black"
              _hover={{ bg: 'white', color: 'black' }}
              onClick={fetchPostCode}
            >
              Lookup Postcode
            </Button>
          </HStack>
          {hasPostcodeError && (
            <Text fontSize="sm" color="red.500" alignSelf="center">
              Postcode is required
            </Text>
          )}
        </Stack>
      </FormControl>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef.current}
        onClose={() => setIsOpen(false)}
        isCentered={true}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="base" fontWeight="semibold">
              Select your address
            </AlertDialogHeader>

            <AlertDialogBody>
              <VStack spacing="2" mb="6">
                <Select
                  value={addressIndex}
                  onChange={e => setAddressIndex(parseInt(e.target.value, 10))}
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  {addresses.map(
                    (
                      { formatted_address }: Record<string, any>,
                      key: number,
                    ) => {
                      const formattedAddress = formatted_address
                        .filter((val: string) => val)
                        .join(', ');

                      return (
                        <option key={key} value={key}>
                          {formattedAddress}
                        </option>
                      );
                    },
                  )}
                </Select>
                <Button
                  type="button"
                  bg="black"
                  w="full"
                  color="white"
                  borderWidth="2px"
                  borderColor="black"
                  _hover={{ bg: 'white', color: 'black' }}
                  onClick={handleAddressSelection}
                >
                  Select Address
                </Button>
              </VStack>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
