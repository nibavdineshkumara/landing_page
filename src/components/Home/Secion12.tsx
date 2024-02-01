import { Box, Button, Stack, Typography } from "@mui/joy";
import "./styles.module.css";
import { Counts } from "./Section1";
import Image from "next/image";
export const Section12 = () => {
  return (
    <Stack>
      <Stack
        spacing={3}
        sx={{
          flex: 12,
          zIndex: 4,
          px: { xs: 2, md: 10 },
          maxWidth: { md: "60%", lg: "50%" },
          position: "absolute",
        }}
      >
        <Typography
          level="h1"
          sx={{ fontSize: { xs: 32, md: 58 }, fontWeight: 600 }}
        >
          Revolutionise Your Home with NIBAV Home Lifts in Switzerland!
        </Typography>
        <Typography sx={{ maxWidth: { md: "60%" } }}>
          Nibav Home Elevators: Luxurious and safe pneumatic technology for
          vertical transportation, designed with European safety standards and
          powered by abundant air.
        </Typography>
      </Stack>
      <Stack
        sx={{
          marginTop: 10,
          //   minHeight: { xs: "100dvh", sm: "80dvh", md: "90dvh" },
          background: "url(/mountain.svg)",
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          overflow: "hidden",
          zIndex: 1,
          height: "90dvh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            zIndex: 5,
            // marginTop: 10,
            background:
              "linear-gradient(352.67deg, #201F25 26.92%, rgba(32, 31, 37, 0) 70.9%)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              height: "100%",
              alignItems: "flex-end",
              width: "100%",
              px: { xs: 2, md: 10 },
              //   bgcolor: "green",
            }}
          >
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#444159",
                  width: "max-content",
                }}
              >
                What Makes Us Unique
              </Button>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  columnGap: 10,
                  rowGap: 5,
                }}
              >
                <Counts
                  count={100}
                  caption={
                    <>
                      No of lifts sales across <b>Switzerland</b>
                    </>
                  }
                />
                <Counts
                  count={50}
                  caption={
                    <>
                      Projects across <b>Switzerland</b> on 9 cities
                    </>
                  }
                />
                <Counts
                  count={150}
                  caption={
                    <>
                      Showrooms in <b>Switzerland</b>
                    </>
                  }
                />
                <Counts
                  count={1000}
                  caption={<>Satisfied families globally</>}
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Stack
          sx={{
            // height: { xs: 1250 },
            // height: "100%",
            pr: { md: 15 },
            // flex: { md: 1 },
            alignItems: { xs: "center", md: "unset" },
            zIndex: 1,
            position: "absolute",
            right: { md: "12%", lg: "25%" },
            alignSelf: "center",
            top: { xs: "3%", md: "2%" },
            overflow: "hidden",
          }}
        >
          <Image
            src={"/gold_elevator.png"}
            alt="Gold Elevator"
            style={{ zIndex: 5, height: "100%" }}
            priority
            width={130}
            height={1054}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
