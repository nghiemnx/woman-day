import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { User } from "../../@types/user";

const HomePage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User>();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  }, []);
  return (
    <MainLayout>
      <Stack spacing={1}>
        <Heading size="lg">Home Page</Heading>
        <Text>
          {userInfo && (
            <>
              <Text>
                Tên em là{" "}
                <Text as="span" fontWeight="bold">
                  {userInfo.name}
                </Text>
              </Text>
              <Image src={userInfo.picture} />
            </>
          )}
        </Text>
      </Stack>
    </MainLayout>
  );
};

export default HomePage;
