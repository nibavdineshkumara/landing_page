import { Button, Stack, Typography } from "@mui/joy";

export const Section2 = () => {
  return (
    <Stack direction={{ md: "row" }} sx={{}}>
      <Stack
        sx={{
          background: "linear-gradient(180deg, #F4F4F4 60%, #FFFFFF 50%)",
          px: { md: 10 },
          pt: 10,
        }}
        justifyContent={"flex-end"}
        direction={"row"}
        spacing={5}
      >
        <img src="/elevator_2.png" style={{ flex: 1 }} />
        <Stack spacing={10} sx={{ flex: 1, p: 15, px: 20 }}>
          <Stack spacing={3}>
            <Typography level="body-lg">ABOUT US</Typography>
            <Typography level="h2">
              Discover the Future of Home Mobility
            </Typography>
            <Typography level="body-md">
              A self-supporting home lifts, built with bulletproof glass,
              aircraft-grade aluminium and galvanized steel. It provides an
              elegant design, European safety standards, and zero impact on your
              home infrastructure. Our compact home lifts consume less energy
              than a home appliance, require 90% less maintenance than its
              alternatives, and only need a small space to be installed.
            </Typography>
            <Button sx={{ width: "max-content" }} variant="outlined">
              Know More
            </Button>
          </Stack>
          <Stack spacing={3}>
            <Typography fontWeight={"bold"}>Certified By:</Typography>
            <Stack spacing={3} direction={"row"}>
              <img src="/Layer_1.png" width={75} height={75} />
              <img src="/lettre.png" height={75} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
