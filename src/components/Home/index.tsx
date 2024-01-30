import Sheet from "@mui/joy/Sheet";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

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
    </Sheet>
  );
}
