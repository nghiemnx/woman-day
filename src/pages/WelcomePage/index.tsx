import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { animationWel } from "./animation";
import axios from "axios";
import { User } from "../../@types/user";
import { useNavigate } from "react-router-dom";
import { Pathname } from "../../config/router";
import { GET_USER_INFO_DOMAIN, checkEmailExists } from "../../helper";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [onProcess, setOnProcess] = useState(false);
  const toast = useToast();
  const loginAct = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setUserInfo(tokenResponse);
    },
    onError: (error) => {
      console.log(error);
      setOnProcess(false);
    },
  });
  const [userInfo, setUserInfo] =
    useState<
      Omit<TokenResponse, "error" | "error_description" | "error_uri">
    >();
  const handleLogin = () => {
    setOnProcess(true);
    loginAct();
  };

  useEffect(() => {
    if (userInfo) {
      const { access_token } = userInfo;
      axios
        .get(GET_USER_INFO_DOMAIN, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then(({ data }) => {
          const userInfo: User = data;
          if (userInfo.email && checkEmailExists(userInfo.email)) {
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            setTimeout(() => {
              setOnProcess(false);
              navigate(Pathname.home);
            }, 1000);
          } else {
            setOnProcess(false);
            toast({
              title: "You are not allowed to access this site",
              status: "warning",
              duration: 2000,
              isClosable: true,
            });
          }
        })
        .catch((error) => {
          console.log("🚀 ~ file: index.tsx:27 ~ useEffect ~ error:", error);
          toast({
            title: "Login Failed",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
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
            isLoading={onProcess}
            loadingText="Wait for processing"
          >
            Let's go, bae
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default WelcomePage;
