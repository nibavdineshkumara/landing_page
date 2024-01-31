import Sheet from "@mui/joy/Sheet";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { Section9 } from "./Section9";
import { Section41 } from "./Section41";

export default function Home() {
  return (
    <Sheet
      sx={{
        minHeight: "90dvh",
        pt: "10dvh",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <Section1 />
      </div>
      <div style={{ overflow: "hidden" }}>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section41 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
      <div>
        <Section7 />
      </div>
      <div>
        <Section8 />
      </div>
      <div>
        <Section9 />
      </div>
      <br />
      <br />
      <br />
    </Sheet>
  );
}
