"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Preloader />
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
