import { FormControl, FormErrorMessage, FormLabel , HStack , Select } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

import { getByPath, localizeErrorMessage } from '@Utils';

type Props = {
  label: string;
  name: string;
  isRequired?: boolean;
  defaultValues?: string[];
};

export function TimeField({
  label,
  name,
  isRequired = true,
  defaultValues,
}: Props) {
  const { t, ready } = useTranslation('form');
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [hourDefaultValue, minuteDefaultValue] = defaultValues || ['', ''];
  const hourError = localizeErrorMessage(
    t,
    getByPath(errors, `${name}_hour`, ''),
  );
  const minuteError = localizeErrorMessage(
    t,
    getByPath(errors, `${name}_minute`, ''),
  );
  const isInvalid = hourError || minuteError;

  if (!ready) return <>Loading...</>;

  return (
    <FormControl
      as="fieldset"
      flex={1}
      isRequired={isRequired}
      isInvalid={isInvalid}
    >
      <FormLabel as="legend">{label}</FormLabel>

      <HStack>
        <Select
          borderWidth="2px"
          borderColor="brand"
          borderRadius="0"
          defaultValue={hourDefaultValue}
          {...register(`${name}_hour`)}
        >
          <option value="" disabled>
            {t('fields.hour')}
          </option>
          {[...Array(24)].map((_, index) => {
            const hour = index.toString().padStart(2, '0');
            return (
              <option value={hour} key={hour}>
                {hour}
              </option>
            );
          })}
        </Select>
        <Select
          borderWidth="2px"
          borderColor="brand"
          borderRadius="0"
          defaultValue={minuteDefaultValue}
          {...register(`${name}_minute`)}
        >
          <option value="" disabled>
            {t('fields.minute')}
          </option>

          {[...Array(12)].map((_, index) => {
            const minute = (5 * index).toString().padStart(2, '0');
            return (
              <option value={minute} key={minute}>
                {minute}
              </option>
            );
          })}
        </Select>
      </HStack>
      <FormErrorMessage flex={1} flexShrink={0} w={{ base: 'full', lg: 1 / 3 }}>
        {hourError || minuteError}
      </FormErrorMessage>
    </FormControl>
  );
}

export default TimeField;
