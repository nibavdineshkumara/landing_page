import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Provider } from "@/components/Provider";
import Image from "next/image";
import * as React from "react";
import { RM } from "@request-metrics/browser-agent";
import { Box } from "@mui/joy";
export const metadata = {
  title: "Nibav Lifts",
  description: "Now Luxury in Every Home",
};

const color_variants = [
  "white",
  "cream",
  "black",
  "gray",
  "green",
  "brown",
  "blue",
  "gold",
  "silver",
];
const PreloadImages = () => {
  return (
    <>
      {color_variants?.map((color) => (
        <Image
          src={`/color_variants/${color}.png`}
          alt={color}
          layout="fill"
          priority
          hidden
          key={color}
        />
      ))}
    </>
  );
};
export default function RootLayout(props: { children: React.ReactNode }) {
  RM.install({
    token: "z8kh3ih:d2ij8eg",
  });
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Provider>
          <Header disableHideOnScroll />
          <PreloadImages />
          <Box
            sx={{
              height: `calc(100dvh - var(--Header-height, 0))`,
              paddingTop: "10dvh",
            }}
          >
            {props.children}
          </Box>
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
}
