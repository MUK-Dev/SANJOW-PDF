import { FormControl, FormErrorMessage, FormLabel , Input, InputProps , SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from 'utils';

type Props = {
  name: string;
  label?: string;
  isRequired?: boolean;
  defaultValue?: string;
  help?: string;
  direction?: 'row' | 'column';
};

export function TextField({
  label,
  name,
  isRequired = true,
  defaultValue = '',
  help,
  direction = 'column',
  variant = 'default',
  ...rest
}: Props & InputProps) {
  const { t, ready } = useTranslation('form');
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = localizeErrorMessage(t, getByPath(errors, name, ''));
  const isRow = direction === 'row';
  const isHidden = rest.type === 'hidden';
  const labelProps = {};

  if (!ready) return <>Loading...</>;

  const Field = () => (
    <>
      <VStack alignItems="flex-start" spacing={-2}>
        {label && <FormLabel {...labelProps}>{label}</FormLabel>}
        {help && (
          <Text fontSize="xs" color="gray.500" fontWeight="medium" pb={3}>
            {help}
          </Text>
        )}
      </VStack>

      <Input
        bg={'white'}
        size={'md'}
        borderWidth={'2px'}
        borderColor={'brand'}
        borderRadius={'0'}
        defaultValue={defaultValue}
        {...register(name)}
        {...rest}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </>
  );

  return (
    <FormControl
      id={name}
      flex={1}
      isInvalid={!!error}
      isRequired={isRequired}
      hidden={isHidden}
    >
      {isRow ? (
        <SimpleGrid
          columns={12}
          templateColumns={{ base: '12fr', lg: '4fr 5fr 3fr' }}
          spacing={{ base: 0, lg: 10 }}
          alignItems="flex-start"
        >
          {Field()}
        </SimpleGrid>
      ) : (
        <>{Field()}</>
      )}
    </FormControl>
  );
}

export default TextField;
