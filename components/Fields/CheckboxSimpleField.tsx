import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { getByPath } from '@Utils';

type Props = {
  label: string | ReactNode;
  name: string;
  isRequired?: boolean;
  isHidden?: boolean;
  [rest: string]: string | number | boolean | ReactNode;
};

export function CheckboxSimpleField({
  label,
  name,
  isRequired = true,
  isHidden = false,
  ...rest
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = getByPath(errors, name, '');

  return (
    <FormControl
      id={name}
      flex={1}
      isInvalid={!!error}
      isRequired={isRequired}
      display={isHidden ? 'none' : 'initial'}
    >
      <HStack alignItems="flex-start">
        <Checkbox size="lg" spacing="6" mr="2" {...register(name)} {...rest}>
          {label}
        </Checkbox>
      </HStack>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
