import { FormControl, FormErrorMessage, FormLabel , Flex, SimpleGrid , Select } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

import {
  getByPath,
  generateArrayOfYears,
  localizeErrorMessage,
} from '@Utils';

type Props = {
  name: string;
  label: string;
  isRequired?: boolean;
  future?: number;
  past?: number;
  defaultValues?: string[];
  direction?: 'column' | 'row';
  fields?: {
    day: boolean;
    month: boolean;
    year: boolean;
  };
  variant?: 'default' | 'ein';
};

export function DateField({
  label,
  name,
  isRequired = true,
  future,
  past,
  defaultValues,
  direction = 'column',
  fields = {
    day: true,
    month: true,
    year: true,
  },
  variant = 'default',
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t, ready } = useTranslation('form');
  const [dayDefaultValue, monthDefaultValue, yearDefaultValue] =
    defaultValues || ['', '', ''];
  const dayError = localizeErrorMessage(
    t,
    getByPath(errors, `${name}_day`, ''),
  );
  const monthError = localizeErrorMessage(
    t,
    getByPath(errors, `${name}_month`, ''),
  );
  const yearError = localizeErrorMessage(
    t,
    getByPath(errors, `${name}_year`, ''),
  );
  const isInvalid = dayError || monthError || yearError;
  const isRow = direction === 'row';
  const isEIN = variant === 'ein';

  if (!ready) return <>Loading...</>;

  const Field = () => (
    <>
      <FormLabel as="legend">{label}</FormLabel>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={isEIN ? 8 : 2}
      >
        {fields.day && (
          <Select
            borderWidth="2px"
            borderColor={isEIN ? 'gray.300' : 'brand'}
            borderRadius={isEIN ? 'md' : '0'}
            defaultValue={dayDefaultValue}
            {...register(`${name}_day`)}
          >
            <option value="" disabled>
              {t('fields.day')}
            </option>
            {[...Array(31)].map((_, index) => {
              const day = (index + 1).toString().padStart(2, '0');
              return (
                <option value={day} key={day}>
                  {day}
                </option>
              );
            })}
          </Select>
        )}

        {fields.month && (
          <Select
            order={isEIN ? '-1' : 0}
            borderWidth="2px"
            borderColor={isEIN ? 'gray.300' : 'brand'}
            borderRadius={isEIN ? 'md' : '0'}
            defaultValue={monthDefaultValue}
            {...register(`${name}_month`)}
          >
            <option value="" disabled>
              {t('fields.month')}
            </option>
            {[...Array(12)].map((_, index) => {
              const month = (index + 1).toString().padStart(2, '0');
              return (
                <option value={month} key={month}>
                  {month}
                </option>
              );
            })}
          </Select>
        )}

        {fields.year && (
          <Select
            borderWidth="2px"
            borderColor={isEIN ? 'gray.300' : 'brand'}
            borderRadius={isEIN ? 'md' : '0'}
            defaultValue={yearDefaultValue}
            {...register(`${name}_year`)}
          >
            <option value="" disabled>
              {t('fields.year')}
            </option>
            {[...generateArrayOfYears(future, past)].map(year => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
          </Select>
        )}
      </Flex>
      <FormErrorMessage flex={1} flexShrink={0}>
        {dayError || monthError || yearError}
      </FormErrorMessage>
    </>
  );

  return (
    <FormControl
      as="fieldset"
      flex={1}
      isRequired={isRequired}
      isInvalid={isInvalid}
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

export default DateField;
