import { FormControl, FormErrorMessage, FormLabel , SimpleGrid, Text, VStack , Select, SelectProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: SelectOption[];
  label: string;
  isRequired?: boolean;
  defaultValue?: string;
  help?: string;
  direction?: 'column' | 'row';
  variant?: 'default' | 'mz' | 'ein';
};

export function SelectField({
  label,
  name,
  options,
  isRequired = true,
  defaultValue = '',
  help,
  direction = 'column',
  variant = 'default',
  ...rest
}: Props & SelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t, ready } = useTranslation('form');
  const error = localizeErrorMessage(t, getByPath(errors, name, ''));
  const isRow = direction === 'row';
  const isMZ = variant === 'mz';
  const isEin = variant === 'ein';

  if (!ready) return <>Loading...</>;

  const conditionalStyles = () => {
    if (isMZ) {
      return { borderRadius: '15px', fontSize: 'xs' };
    } if (isEin) {
      return { borderRadius: 'md', borderColor: 'gray.300' };
    }
      return {
        bg: 'white',
        borderWidth: '2px',
        borderColor: 'brand',
        borderRadius: '0',
      };

  };
  const Field = () => (
    <>
      <VStack alignItems="flex-start" spacing={-2}>
        <FormLabel
          {...(isMZ && { fontWeight: 'medium', fontSize: 'sm', mb: '10px' })}
        >
          {label}
        </FormLabel>
        {help && (
          <Text as="p" fontSize="xs" color="gray.500" fontWeight="medium">
            {help}
          </Text>
        )}
      </VStack>

      <Select
        {...conditionalStyles()}
        defaultValue={defaultValue}
        {...register(name)}
        {...rest}
      >
        <option value="" disabled>
          {t('fields.select')}
        </option>
        {options.map(({ label, value }) => (
            <option value={value} key={`${label}-${value}`}>
              {label}
            </option>
          ))}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </>
  );

  return (
    <FormControl id={name} flex={1} isInvalid={!!error} isRequired={isRequired}>
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

export default SelectField;
