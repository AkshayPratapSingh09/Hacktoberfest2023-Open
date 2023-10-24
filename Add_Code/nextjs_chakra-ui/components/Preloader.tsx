import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("load", () => {
  //       setLoading(false);
  //     });

  //     return () => {
  //       window.removeEventListener("load", () => {
  //         setLoading(false);
  //       });
  //     };
  //   }
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="rgba(0, 0, 0, 1)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="9999"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        // emptyColor="gray.200"
        color="#0DBA63"
        size="xl"
      />
    </Box>
  ) : null;
};

export default Preloader;
