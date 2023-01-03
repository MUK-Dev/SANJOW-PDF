import { FormControl, FormErrorMessage, FormLabel , Stack , Radio, RadioGroup, RadioGroupProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Controller, useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

import { RadioOption } from './RadioField';

type Props = {
  name: string;
  label: string;
  direction?: 'row' | 'column';
  isRequired?: boolean;
  defaultValue?: string;
};

export function PolarRadioField({
  label,
  name,
  direction = 'row',
  isRequired = true,
  defaultValue = '',
  ...rest
}: Props & Omit<RadioGroupProps, 'children'>) {
  const { t, ready } = useTranslation('form');
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = localizeErrorMessage(t, getByPath(errors, name, ''));

  const options: RadioOption[] = [
    {
      label: t('fields.yes'),
      value: 'yes',
    },
    {
      label: t('fields.no'),
      value: 'no',
    },
  ];

  if (!ready) return <>Loading...</>;

  return (
    <FormControl
      as="fieldset"
      flex={1}
      isInvalid={!!error}
      isRequired={isRequired}
    >
      <FormLabel as="legend">{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState: { invalid } }) => (
          <RadioGroup {...field} {...rest}>
            <Stack direction={direction}>
              {options.map(({ label, value }) => (
                <Radio value={value} key={value} isInvalid={invalid}>
                  {label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default PolarRadioField;
