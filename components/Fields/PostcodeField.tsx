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
  Select,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { formatPostcode, useEnvVars } from '@Utils';

type Props = {
  index: number;
};

export const PostcodeField = ({ index }: Props) => {
  const { API_ENDPOINT } = useEnvVars();
  const { setValue, trigger } = useFormContext();
  const [postcode, setPostcode] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState<Record<string, any>>([]);
  const [addressIndex, setAddressIndex] = useState(0);
  const [error, setError] = useState('');
  const cancelRef = useRef();

  const handleAddressSelection = async () => {
    const address = addresses[addressIndex];
    const { line_1, line_2, line_3, line_4, locality, town_or_city, county } =
      address;
    const address_line_1 = `${line_1} ${line_2}`.trim();
    const address_line_2 = `${line_3} ${line_4} ${locality}`.trim();
    setValue(`address.${index}.address_line_1`, address_line_1);
    setValue(`address.${index}.address_line_2`, address_line_2);
    setValue(`address.${index}.postcode`, postcode);
    setValue(`address.${index}.county`, county);
    setValue(`address.${index}.town`, town_or_city);
    setValue(`address.${index}.country`, 'gb');
    setIsOpen(false);

    await trigger([
      `address.${index}.address_line_1`,
      `address.${index}.address_line_2`,
      `address.${index}.postcode`,
      `address.${index}.county`,
      `address.${index}.town`,
      `address.${index}.country`,
    ]);
  };

  const fetchPostCode = () => {
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
            setError('');
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
            <FormLabel fontWeight="semibold">Address Postcode</FormLabel>
          </VStack>
          <HStack
            flexShrink={0}
            w={{ base: 'full', lg: 4.7 / 12 }}
            alignItems="flex-start"
          >
            <VStack w={3 / 5} alignItems="flex-start" spacing="1">
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
                _invalid={{ borderColor: 'black' }}
              />
              <FormErrorMessage color="gray" fontSize="xs" fontWeight="bold">
                {error}
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
                  size="sm"
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
