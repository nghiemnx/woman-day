import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { animationWel } from "./animation";
import axios from "axios";

const WelcomePage: React.FC = () => {
  const [userInfo, setUserInfo] =
    useState<
      Omit<TokenResponse, "error" | "error_description" | "error_uri">
    >();
  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => setUserInfo(tokenResponse),
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      axios
        .get("https://www.googleapis.com/auth/userinfo.profile", {
          headers: {
            Authorization: `Bearer ${userInfo?.access_token}`,
          },
        })
        .then((res) => {
          console.log("🚀 ~ file: index.tsx:25 ~ useEffect ~ res:", res);
        })
        .catch((error) => {
          console.log("🚀 ~ file: index.tsx:27 ~ useEffect ~ error:", error);
        });
    }
  }, [userInfo]);

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
        <motion.div
          variants={animationWel.text1Variants}
          initial="hidden"
          animate="visible"
        >
          <Text
            fontWeight={800}
            textAlign={"center"}
            fontSize={"2xl"}
            textTransform={"uppercase"}
          >
            20 October
          </Text>
        </motion.div>
        <motion.div
          variants={animationWel.text2Variants}
          initial="hidden"
          animate="visible"
        >
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
        <motion.div
          variants={animationWel.text3Variants}
          initial="hidden"
          animate="visible"
        >
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
                variants={animationWel.text4Variants}
                initial="hidden"
                animate="visible"
              >
                <ArrowForwardIcon />
              </motion.div>
            }
            color={"tomato"}
            variant="text"
            onClick={() => handleLogin()}
          >
            Let's go, bae
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default WelcomePage;
