import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Provider } from "@/components/Provider";
import Image from "next/image";
import * as React from "react";

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
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Provider>
          <Header />
          <PreloadImages />
          {props.children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
