import { FormControl, FormErrorMessage, FormLabel , Textarea, TextareaProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

type Props = {
  name: string;
  label?: string;
  isRequired?: boolean;
  defaultValue?: string;
  variant?: 'default' | 'mz' | 'flushed';
};

export function TextareaField({
  label,
  name,
  isRequired = true,
  defaultValue = '',
  variant = 'default',
  ...rest
}: Props & TextareaProps) {
  const { t, ready } = useTranslation('form');
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = localizeErrorMessage(t, getByPath(errors, name, ''));
  let inputProps: TextareaProps = {};
  let labelProps = {};

  switch (variant) {
    case 'mz':
      labelProps = { fontWeight: 'medium', fontSize: 'sm', mb: '10px' };
      inputProps = { borderRadius: '15px', fontSize: 'xs' };
      break;
    case 'flushed':
      inputProps = { variant: 'flushed' };
      break;
    default:
      inputProps = {
        bg: 'white',
        size: 'md',
        borderWidth: '2px',
        borderColor: 'brand',
        borderRadius: '0',
      };
  }

  if (!ready) return <>Loading...</>;

  return (
    <FormControl id={name} flex={1} isInvalid={!!error} isRequired={isRequired}>
      {label && <FormLabel {...labelProps}>{label}</FormLabel>}
      <Textarea
        defaultValue={defaultValue}
        {...register(name)}
        {...inputProps}
        {...rest}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextareaField;
