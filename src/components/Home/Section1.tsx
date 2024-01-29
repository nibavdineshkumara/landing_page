import { Box, Button, Divider, Stack, Typography } from "@mui/joy";

export const Section1 = () => {
  return (
    <Stack sx={{ maxHeight: "90dvh" }}>
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
          <Typography level="h1" sx={{ fontSize: { xs: 32, md: 58 } }}>
            Revolutionise Your Home with NIBAV Home Lifts in Switzerland!
          </Typography>
          <Typography level="body-sm">
            Nibav Home Elevators: Luxurious and safe pneumatic technology for
            vertical transportation, designed with European safety standards and
            powered by abundant air.
          </Typography>
        </Stack>
        <Stack
          sx={{
            height: { xs: 1250 },
            pr: { md: 15 },
            flex: { md: 6 },
          }}
        >
          <img
            src={"/gold_elevator.svg"}
            alt="Gold Elevator"
            height={"100%"}
            style={{ zIndex: 2 }}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 600, md: 290 },
          zIndex: 1,
          height: { xs: 900, md: 700 },
          width: "100%",
        }}
      >
        <img src="/mountain.svg" style={{ objectFit: "cover" }} />
      </Stack>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "700px",
          top: { xs: 600, md: 290 },
          zIndex: 3,
          background:
            "linear-gradient(352.67deg, #201F25 26.92%, rgba(32, 31, 37, 0) 70.9%)",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 850, md: 600 },
          zIndex: 4,
          px: { xs: 2, md: 10 },
        }}
      >
        <Stack spacing={2}>
          <Button
            sx={{ color: "white", bgcolor: "#0000000", width: "max-content" }}
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
        <Typography sx={{ fontSize: { xs: 40, sm: 64, color: "white" } }}>
          {props?.count}+
        </Typography>
        <Typography sx={{ color: "white" }}>{props?.caption}</Typography>
      </Stack>
      <Divider sx={{ height: 2, backgroundColor: "gray" }} />
    </div>
  );
};
