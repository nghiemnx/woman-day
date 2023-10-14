import React from "react";
import { useNavigate } from "react-router-dom";
import { pathnames } from "../../config/router";
import MainLayout from "../../layout/MainLayout";
import { Heading, Stack, Text } from "@chakra-ui/react";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathnames.auth);
  };

  return (
    <MainLayout>
      <Stack spacing={1}>
        <Heading size="lg">Welcome Page</Heading>
        <Text>
          Chào cô gái, em hẳn là một trong những người con gái đẹp nhất hôm nay!
        </Text>
      </Stack>
    </MainLayout>
  );
};

export default AuthPage;
