import { FC, useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const data = [
  {
    review:
      'Very easy to use and user friendly. This app has the ability to help with almost anything you can need when it comes to a document. I needed to convert a photo to a pdf and with one click I was good to go.',
    name: 'Thomas A. Anderson',
    src: '/assets/reviews/user1.png',
  },
  {
    review:
      "This is a great tool! I don't know what I would do without it. Appreciate you all who invented these programs to make my life at work simple. THANK YOU!!",
    name: 'Jose R.',
    src: '/assets/reviews/user2.png',
  },
  {
    review:
      'Simple easy, and needed a website to convert my pdf smaller for school application submissions!',
    name: 'Scott Erice',
    src: '/assets/reviews/user3.png',
  },
];

const Reassurance: FC = () => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    // initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 3,
      // spacing: 15,
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Stack
      alignItems="center"
      w="100%"
      py={{ base: '1em', md: '6em' }}
      px={{ base: '1em', md: '5em' }}
      pb={{ base: '3em', md: '2em' }}
      className="bg-gradient-to-right"
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
      <Box position="relative">
        <Heading mb="1em">Users Love Us</Heading>
        <Image
          src="/assets/usersLoveUs/quotes.png"
          alt="quotes"
          position="absolute"
          h="40px"
          right="-4.5em"
          top="-0.2em"
        />
      </Box>
      <Flex
        as="div"
        className="keen-slider"
        ref={ref}
        w="100%"
        gap="1em"
        px={{ base: '2em', md: '1em' }}
        py={{ base: '0', md: '2em' }}
        pb="1em"
        alignItems="start"
        direction={{ base: 'column', md: 'row' }}
      >
        {data.map(({ name, review, src }, i) => (
          // <Stack w="100%" className="keen-slider__slide">
          <Stack key={i} w="100%">
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? 'yellow.400' : 'gray.300'} />
                ))}
            </Box>
            <Text h="100%">{review}</Text>
            <Flex alignItems="center" gap="0.5em" pt="1em">
              <Avatar src={src} />
              <Text>{name}</Text>
            </Flex>
          </Stack>
        ))}
      </Flex>
      {/* <Flex>
        {Array.from(Array(data.length).keys()).map(idx => {
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
      </Flex> */}
    </Stack>
  );
};

export default Reassurance;
