import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Provider } from "@/components/Provider";
import * as React from "react";

export const metadata = {
  title: "Nibav Lifts",
  description: "Now Luxury in Every Home",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Provider>
          <Header />
          {props.children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
