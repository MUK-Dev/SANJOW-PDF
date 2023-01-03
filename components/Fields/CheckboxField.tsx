import {
  Checkbox,
  CheckboxProps,
  CheckboxGroup,
  CheckboxGroupProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

export type CheckboxOption = {
  label: string | ReactNode;
  value?: string;
};

type Props = {
  name: string;
  options: (CheckboxOption & CheckboxProps)[];
  label?: string;
  direction?: 'row' | 'column';
  stackDirection?: 'row' | 'column';
  isRequired?: boolean;
  help?: string;
  variant?: 'ein' | 'default';
  checked?: boolean;
};

export function CheckboxField({
  label,
  name,
  options,
  direction = 'column',
  stackDirection = 'row',
  isRequired = true,
  help,
  variant = 'default',
  checked = false,
  ...rest
}: Props & CheckboxGroupProps) {
  const { t, ready } = useTranslation('form');
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = localizeErrorMessage(t, getByPath(errors, name, ''));
  const isRow = direction === 'row';

  const Field = () => (
    <>
      <VStack alignItems="flex-start" spacing={-2}>
        {label && <FormLabel as="legend">{label}</FormLabel>}
        {help && (
          <Text fontSize="xs" color="gray.500" fontWeight="medium" pb={3}>
            {help}
          </Text>
        )}
      </VStack>

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { invalid } }) => (
          <CheckboxGroup defaultValue={rest.defaultValue} {...field} {...rest}>
            <Stack direction={stackDirection} spacing={4}>
              {options.map(({ label, value, ...rest }, index) => (
                <Checkbox
                  key={index}
                  isInvalid={invalid}
                  alignItems="flex-start"
                  value={value}
                  defaultValue={value}
                  colorScheme="blue"
                  {...rest}
                >
                  <Text mt={-1}>{label}</Text>
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        )}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </>
  );

  if (!ready) return <>Loading...</>;

  return (
    <FormControl as="fieldset" isInvalid={!!error} isRequired={isRequired}>
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

export default CheckboxField;
