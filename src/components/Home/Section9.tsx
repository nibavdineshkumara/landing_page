import { Button, Stack, Typography } from "@mui/joy";
import { Hidden } from "@mui/material";
import { Map } from "./Map";
export const Section9 = () => {
  return (
    <Stack sx={{ width: "100%", mt: 10 }} spacing={4}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        px={{ xs: 2, md: 10 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 36, md: 64 },
            maxWidth: { md: "50%" },
            fontWeight: 500,
          }}
        >
          Convenient Branches and Inspiring Showrooms
        </Typography>
        <Hidden mdDown>
          <Button variant="outlined" sx={{ alignSelf: "flex-end" }}>
            Explore
          </Button>
        </Hidden>
      </Stack>
      <Stack
        sx={{
          px: { xs: 2, md: 10 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Map />
      </Stack>
      <Hidden mdUp>
        <Button variant="outlined" sx={{ alignSelf: "center" }}>
          Explore
        </Button>
      </Hidden>
    </Stack>
  );
};
