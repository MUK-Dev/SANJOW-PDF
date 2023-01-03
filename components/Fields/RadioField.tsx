
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  Radio,
  RadioProps,
  RadioGroup,
  RadioGroupProps,
  VStack,
  Text,
  SimpleGrid,
  FlexboxProps,
  IconProps,
  ComponentWithAs,
  Icon,
  Center,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

export type RadioOption = {
  icon?: ComponentWithAs<'svg', IconProps>;
  label: string;
  value: string;
} & RadioProps;

type Props = {
  name: string;
  options: RadioOption[];
  label?: string | ReactNode;
  direction?: 'row' | 'column';
  stackDirection?: 'row' | 'column';
  elementsDirection?: 'row' | 'column';
  elementsJustifyContent?: FlexboxProps['justifyContent'] | undefined;
  elementsSpacing?: string | number;
  isRequired?: boolean;
  defaultValue?: string;
  help?: string;
};

export function RadioField({
  label,
  name,
  options,
  direction = 'row',
  stackDirection = 'row',
  elementsDirection = 'row',
  elementsJustifyContent = 'flex-start',
  elementsSpacing = 4,
  isRequired = true,
  defaultValue = '',
  help,
  ...rest
}: Props & Omit<RadioGroupProps, 'children'>) {
  const { t, ready } = useTranslation('form');
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = localizeErrorMessage(t, getByPath(errors, name, ''));
  const isRow = direction === 'row';
  const elementsInColumn = elementsDirection === 'column';

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
        defaultValue={defaultValue}
        render={({ field, fieldState: { invalid } }) => (
          <RadioGroup {...field} {...rest}>
            <Stack
              direction={stackDirection}
              justifyContent={elementsJustifyContent}
              spacing={elementsSpacing}
            >
              {options.map(({ label, value, icon, ...rest }) => (
                <Stack key={value}>
                  {icon && (
                    <Center>
                      <Icon as={icon} w={8} h={8} />
                    </Center>
                  )}
                  <Radio
                    value={value}
                    isInvalid={invalid}
                    alignItems={elementsInColumn ? 'center' : 'flex-start'}
                    flexDirection={elementsInColumn ? 'column-reverse' : 'row'}
                    gap={elementsInColumn ? 2 : 0}
                    {...rest}
                  >
                    <Text
                      mt={elementsInColumn ? 15 : -1}
                      ml={elementsInColumn ? -2 : 0}
                    >
                      {label}
                    </Text>
                  </Radio>
                </Stack>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </>
  );

  if (!ready) return <>Loading...</>;

  return (
    <FormControl
      as="fieldset"
      flex={1}
      isInvalid={!!error}
      isRequired={isRequired}
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

export default RadioField;
