import { Box, Card, Stack, Typography } from "@mui/joy";

export const Section3 = () => {
  return (
    <Stack sx={{}} spacing={3}>
      <Stack sx={{ alignItems: "center" }}>
        <Typography
          level="h1"
          sx={{ fontSize: { xs: 36, md: 64 }, fontWeight: 500, my: 10 }}
        >
          Why Choose Nibav Home Lifts
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={3}
        px={{ xs: 2, md: 0 }}
      >
        <SectionCard
          icon="/value_and_quality_icon.svg"
          title="Value and Quality"
          body="Our strategy provides high-quality at affordable prices bycombining
          Australian Technology, European Componentsand investing in high-tech
          production lines."
        />
        <SectionCard
          icon="/easy_installation_icon.svg"
          title="Easy Installation"
          body="
        Nibav home lifts ensures that this elevator needs zero civil work which reduces the installation time to 24 working hours.
        "
        />
        <SectionCard
          icon="/european_standards_icon.svg"
          title="European Standards"
          body="We are also ISO 9001 certified, this warranties a consistentstandard of high-quality across our industrial andmanagement processes."
        />
      </Stack>
      <Box
        sx={{
          height: { xs: 580, md: 320 },
          background: "#212026",
          marginTop: { xs: "-550px !important", md: "-250px !important" },
        }}
      />
    </Stack>
  );
};

type SectionCardProps = {
  icon: string;
  title: string;
  body: string;
};
const SectionCard = (props: SectionCardProps) => {
  return (
    <Card
      sx={{
        p: "40px",
        bgcolor: "#F4F4F4",
        width: "350px",
        minHeight: "327px",
        borderRadius: 0,
      }}
    >
      <Stack spacing={5}>
        <Box
          sx={{
            bgcolor: "white",
            width: 80,
            height: 80,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={props?.icon} />
        </Box>
        <Typography fontWeight={"bold"} sx={{}}>
          {props?.title}
        </Typography>
        <Typography fontSize={14}>{props?.body}</Typography>
      </Stack>
    </Card>
  );
};
