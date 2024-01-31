import { Button, Stack, Typography } from "@mui/joy";

type Props = {
  children: string;
};
export const HeadingLabel = (props: Props) => {
  return (
    <Stack sx={{ alignItems: { xs: "center", md: "unset" } }}>
      <Label>{props?.children}</Label>
    </Stack>
  );
};

export const HeadingLabelWithAction = (props: {
  label: string;
  buttonLabel: string;
}) => {
  return (
    <Stack
      direction={{ md: "row" }}
      sx={{ justifyContent: "space-between" }}
      px={{ xs: 2, md: 10 }}
    >
      <Typography sx={{ fontSize: { xs: 36, md: 64 }, fontWeight: 500, px: 2 }}>
        {props.label}
      </Typography>
      <Button variant="outlined" sx={{ width: "max-content" }}>
        {props.buttonLabel}
      </Button>
    </Stack>
  );
};

const Label = ({ children }: any) => {
  return (
    <Typography
      level="h1"
      sx={{
        fontSize: { xs: 36, md: 64 },
        fontWeight: 500,
        my: 10,
        px: 2,
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};
