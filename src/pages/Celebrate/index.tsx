import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { AnimationProps, motion } from "framer-motion";
import React from 'react';
import Lottie from 'react-lottie';
import flowerAnimation1 from '../../assets/lotties/animation_flower_1.json';
import flowerAnimation2 from '../../assets/lotties/animation_flower_2.json';
import flowerAnimation3 from '../../assets/lotties/animation_flower_3.json';
import AnimatedText from './AnimatedText';
import './index.css';

const flowerAnimation1Options = {
  loop: true,
  autoplay: true,
  animationData: flowerAnimation1,
};
const flowerAnimation2Options = {
  loop: true,
  autoplay: true,
  animationData: flowerAnimation2,
};
const flowerAnimation3Options = {
  loop: true,
  autoplay: true,
  animationData: flowerAnimation3,
};

const flowerAnimVariants: AnimationProps["variants"] = {
  hidden: {
    x: -200,
    scale: 0.5,
  },
  visible: {
    x: -50,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const Celebrate: React.FC = () => {
  return (
    <Container backgroundColor={'#ff9cb4'} paddingBlock={'10px'} style={{
      overflowX: 'hidden'
    }}>
      <AnimatedText
        type="chars"
        animation={{
          x: '0px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.08}
        duration={1}
        tag="h1"
        className="animated-header"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        OCTOBER 20 WOMEN'S DAY
      </AnimatedText>
      <motion.div
        initial={{ y: "-200px", x: '200px' }}
        style={{
          position: 'relative',
          width: '75%',
          margin: '0 auto',
          aspectRatio: '1 / 1',
          marginTop: '50px'
        }}
        animate={{ y: "0", x: '0' }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://chiasetainguyen.com/upload-file/demo-chu-happy-women-day-55c677582cdf35.jpg"
          alt='avatar'
          position={'absolute'}
          transform={'rotate(-10deg)'}
          className="border-image"
          objectFit={'cover'}
          width={'100%'}
          height={'100%'}
        />
        <motion.div variants={flowerAnimVariants} initial="hidden" animate="visible">
          <Box position={'absolute'} top={'-80px'}>
            <Lottie
              options={flowerAnimation1Options}
              height={150}
              width={150}
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ y: "500px", x: "-400px" }}
          animate={{ y: "-60px", x: '170px' }}
          style={{
            width: '200px',
            height: '200px',
          }}
          transition={{ duration: 0.5 }}
        >
          <Lottie
            options={flowerAnimation3Options}
          />
        </motion.div>
      </motion.div>
      <Stack direction={'row'} mt={'50px'}>
        <Box width={'30%'} position={'relative'}>
          <Box position={'absolute'} top={-20} left={-20} transform={'rotate(-50deg)'}>
            <Lottie
              options={flowerAnimation2Options}
              height={300}
              width={300}
            />
          </Box>
        </Box>
        <Box width={'70%'} color={'white'} fontSize={'35px'} textAlign={'center'} className='font-face-gm'>
          <AnimatedText
            type="chars"
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="wave"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
          >
            Let's celebrate the force  the bravery the beauty of all women on this special day
          </AnimatedText>
        </Box>
      </Stack>
    </Container>
  )
}

export default Celebrate