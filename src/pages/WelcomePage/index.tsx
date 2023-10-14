import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { AnimationProps, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { pathnames } from "../../config/router";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathnames.auth);
  };

  const text1Variants: AnimationProps["variants"] = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 2,
      },
    },
  };

  const text2Variants: AnimationProps["variants"] = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 1,
      },
    },
  };

  const text3Variants: AnimationProps["variants"] = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 3,
      },
    },
  };

  const text4Variants: AnimationProps["variants"] = {
    hidden: {
      x: -5,
    },
    visible: {
      x: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <Box
      h={"100vh"}
      backgroundImage={"./images/background.png"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      display={"grid"}
      placeItems={"center"}
      placeContent={"center"}
    >
      <Stack w={"90%"} spacing={3}>
        <motion.div variants={text1Variants} initial="hidden" animate="visible">
          <Text
            fontWeight={800}
            textAlign={"center"}
            fontSize={"2xl"}
            textTransform={"uppercase"}
          >
            20 October
          </Text>
        </motion.div>
        <motion.div variants={text2Variants} initial="hidden" animate="visible">
          <Text
            as="b"
            textAlign={"center"}
            fontSize={"5xl"}
            style={{
              lineHeight: "1.1",
            }}
            textTransform={"uppercase"}
            color={"tomato"}
          >
            Happy Woman's Day
          </Text>
        </motion.div>
      </Stack>
      <Stack spacing={3} w={"70%"}>
        <motion.div variants={text3Variants} initial="hidden" animate="visible">
          <Text
            fontWeight={500}
            textAlign={"center"}
            fontSize={"sm"}
            fontStyle={"italic"}
          >
            "Celebrating amazing women with love, joy, and gratitude"
          </Text>
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0.2, 0.4, 0.8, 1],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          transition={{ duration: 3 }}
        >
          <Button
            rightIcon={
              <motion.div
                variants={text4Variants}
                initial="hidden"
                animate="visible"
              >
                <ArrowForwardIcon />
              </motion.div>
            }
            color={"tomato"}
            variant="text"
            onClick={handleClick}
          >
            Let's go, bae
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default WelcomePage;
