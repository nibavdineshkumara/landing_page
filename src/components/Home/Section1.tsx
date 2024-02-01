import { Box, Button, Divider, Stack, Typography, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

export const Section1 = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const aboveMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const belowTab = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack sx={{ maxHeight: { xs: "100dvh", sm: "80dvh", md: "90dvh" } }}>
      <Stack
        sx={{
          px: { xs: 2, md: 10 },
          mt: { xs: 2, md: 5 },
          overflow: "hidden",
        }}
        direction={{ md: "row" }}
        spacing={10}
      >
        <Stack spacing={3} sx={{ flex: 10, zIndex: 4 }}>
          <Typography
            level="h1"
            sx={{ fontSize: { xs: 32, md: 58 }, fontWeight: 600 }}
          >
            Revolutionise Your Home with NIBAV Home Lifts in Switzerland!
          </Typography>
          <Typography>
            Nibav Home Elevators: Luxurious and safe pneumatic technology for
            vertical transportation, designed with European safety standards and
            powered by abundant air.
          </Typography>
        </Stack>
        <Stack
          sx={{
            // height: { xs: 1250 },
            height: "100%",
            pr: { md: 15 },
            flex: { md: 6 },
            alignItems: { xs: "center", md: "unset" },
          }}
        >
          <Image
            src={"/gold_elevator.svg"}
            alt="Gold Elevator"
            style={{ zIndex: 2, height: "100%" }}
            priority
            width={149}
            height={1054}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 400, sm: 500, md: 290 },
          bottom: 0,
          zIndex: 1,
          height: { xs: 900, md: 700 },
          width: { sm: "100%" },
          overflow: "hidden !important",
        }}
      >
        <img
          src="/mountain.svg"
          style={{
            objectFit: "cover",
            ...(!isDesktop && {
              height: belowTab ? "60%" : "auto",
              width: "100%",
            }),
          }}
        />
      </Stack>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "700px",
          top: { xs: 400, sm: 300, md: 290 },
          zIndex: 3,
          background:
            "linear-gradient(352.67deg, #201F25 26.92%, rgba(32, 31, 37, 0) 70.9%)",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 650, md: 600 },
          zIndex: 4,
          px: { xs: 2, md: 10 },
        }}
      >
        <Stack spacing={2}>
          <Button
            sx={{ color: "white", bgcolor: "#444159", width: "max-content" }}
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
            <Counts count={1000} caption={<>Satisfied families globally</>} />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

type CountsProps = {
  count: number;
  caption: React.ReactNode;
};
export const Counts = (props: CountsProps) => {
  return (
    <div>
      <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={4}>
        <Typography
          sx={{ fontSize: { xs: 40, sm: 64, color: "white" }, fontWeight: 600 }}
        >
          {props?.count}+
        </Typography>
        <Typography sx={{ color: "white", fontSize: { xs: 12, sm: 16 } }}>
          {props?.caption}
        </Typography>
      </Stack>
      <Divider sx={{ height: 2, backgroundColor: "gray" }} />
    </div>
  );
};
