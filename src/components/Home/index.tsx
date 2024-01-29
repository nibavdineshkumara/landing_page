import Sheet from "@mui/joy/Sheet";
import { Section1 } from "./Section1";

export default function Home() {
  return (
    <Sheet
      sx={{
        minHeight: "90dvh",
        pt: "10dvh",
      }}
    >
      <Section1 />
    </Sheet>
  );
}
