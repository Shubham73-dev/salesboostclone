"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useInterval,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import WelcomeBg from "@/assets/images/welcome-bg.png";
// import Search from "@/components/UI/Search";

function Welcome() {
  const [dateState, setDateState] = useState<string>(moment().format("hh:mm"));

  useInterval(() => {
    setDateState(moment().format("hh:mm"));
  }, 30000);

  const paddingValues = useBreakpointValue({
    base: "30px 20px",
    md: "30px",
    lg: "65px 60px",
  });

  return (
    <Box
      className="welcome-wrapper"
      minHeight="100vh"
      bgImage={`url(${WelcomeBg})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      padding={paddingValues}
    >
      <Container>
        <Flex align="center">
          <Box flex="1">
            <Box>
              <Heading
                fontSize="48px"
                fontWeight="400"
                lineHeight="1"
                color="#000"
              >
                {dateState}
              </Heading>
              <Text
                fontSize="20px"
                fontWeight="400"
                lineHeight="1"
                color="#000"
                marginTop="2px"
              >
                Welcome To Home
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box textAlign="right">
              <Text
                color="#c4ccd8"
                fontSize="16px"
                fontWeight="400"
                marginBottom="5px"
              >
                Quote of the Day
              </Text>
              <Text color="#000" fontSize="16px" fontWeight="400" margin="0">
                “We grow fearless when we do the things we fear.”
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* <Search /> */}

      <Container>
        <Box marginTop="30px">
          <Text className="recent-heading" fontSize="lg">
            <Box as="span" className="icons-clock" marginRight="5px" />
            RECENT SEARCHES
          </Text>
          <Flex flexWrap="wrap" marginTop="10px">
            {[...Array(6)].map((_, index) => (
              <Button
                key={index}
                className="button"
                marginRight="4"
                marginBottom="4"
              >
                Walmart TAAS
              </Button>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Welcome;
