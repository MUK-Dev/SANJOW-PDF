import { Box } from '@chakra-ui/react';
import { useRef, MutableRefObject, FC } from 'react';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const DrawerButton: FC<Props> = ({ onClick, isOpen }) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <>
      <style>{`
.toggle
{
position: relative;
width: 70px;
height: 70px;
background: #fff;
justify-content: center;
align-items: center;
overflow: hidden;
  scale: 0.6
}

.toggle span
{
position: absolute;
width: 40px;
height: 4px;
background: #1863ff;
border-radius: 4px;
transition: 0.5s;

}

.toggle span:nth-child(1)
{
transform: translateY(-15px);
width: 25px;
left: 15px;

}
.toggle.active span:nth-child(1)
{
width: 40px;
transform: translateY(0px) rotate(45deg );
transition-delay: 0.125s;
}

.toggle span:nth-child(2)
{
transform: translateY(15px);
width: 15px;
left: 15px;

}
.toggle.active span:nth-child(2)
{
width: 40px;
transform: translateY(0px) rotate(315deg );
transition-delay: 0.25s;

}

.toggle.active span:nth-child(3)
{
transform: translateX(60px);
}
        `}</style>
      <Box
        ref={ref}
        className={`toggle ${isOpen ? 'active' : ''}`}
        onClick={onClick}
        display={{ base: 'flex', md: 'none' }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Box>
    </>
  );
};

export default DrawerButton;
