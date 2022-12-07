import { FC, useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Reassurance: FC = () => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    // initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
      // spacing: 15,
    },
    loop: true,
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Stack
      alignItems="center"
      w="100%"
      py={{ base: '1em', md: '6em' }}
      px={{ base: '1em', md: '5em' }}
    >
      <style>{`
        .dot {
          border: none;
          width: 10px;
          height: 10px;
          background: #c5c5c5;
          border-radius: 50%;
          margin: 0 5px;
          padding: 5px;
          cursor: pointer;
        }
        
        .dot:focus {
          outline: none;
        }
        
        .dot.active {
          background: #000;
        }
        `}</style>
      <Heading mb="1em">Reassurance</Heading>
      <Flex
        as="div"
        className="keen-slider"
        ref={ref}
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        gap="1em"
        py="2em"
      >
        {Array.from(Array(5).keys()).map(i => (
          <Stack className="keen-slider__slide" alignItems="center">
            <Text>John Doe {i + 1} </Text>
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? 'teal.500' : 'gray.300'} />
                ))}
            </Box>
          </Stack>
        ))}
      </Flex>
      <Flex>
        {Array.from(Array(5).keys()).map(idx => {
          return (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};

export default Reassurance;
