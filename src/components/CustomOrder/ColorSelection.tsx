import {
  Radio,
  RadioGroup,
  Sheet,
  Stack,
  Typography,
  radioClasses,
} from "@mui/joy";
type ColorOption = {
  label: string;
  color: string;
};
const Standard: ColorOption[] = [
  {
    color: "#fffffe",
    label: "white",
  },
  {
    color: "#e0e0c5",
    label: "cream",
  },
  {
    color: "#979797",
    label: "ashen_grey",
  },
];
const Premium: ColorOption[] = [
  {
    color: "#1a1919",
    label: "black",
  },
  {
    color: "#616a69",
    label: "gray",
  },
  {
    color: "#75a488",
    label: "green",
  },
  {
    color: "#c7423b",
    label: "brown",
  },
  {
    color: "#324a89",
    label: "blue",
  },
  {
    color: "#503025",
    label: "brown",
  },
];
const Metallic: ColorOption[] = [
  {
    color: "#ba9d57",
    label: "gold",
  },
  {
    color: "#d5e0d2",
    label: "silver",
  },
];
export const ColorSelection = () => {
  return (
    <Stack sx={{ alignItems: "center" }} spacing={3}>
      <Typography sx={{ fontWeight: "xl", fontSize: "xl" }}>Color</Typography>
      <Selection label="Standard" options={Standard} />
      <Selection label="Premium" options={Premium} />
      <Selection label="Metallic" options={Metallic} />
      <Stack spacing={1} textAlign={"center"}>
        <Typography>Color: Ashen Grey</Typography>
        <Typography>₹55,750</Typography>
      </Stack>
    </Stack>
  );
};

type SelectionProps = {
  label: string;
  options: ColorOption[];
};
const Selection = (props: SelectionProps) => {
  return (
    <Stack sx={{ alignItems: "center" }} spacing={2}>
      <Typography level="body-xs">{props?.label}</Typography>
      <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="M"
        sx={{
          gap: 2,
          mb: 2,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {props?.options.map((color) => (
          <Sheet
            key={color?.color}
            sx={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${color.color}`,
              "&:hover": {
                bgcolor: `${color.color}`,
              },
              "--joy-focus-outlineOffset": "14px",
              "--joy-palette-focusVisible": (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: "lg",
                },
                [`& .${radioClasses.action}`]: {
                  "--variant-borderWidth": "3px",
                  borderColor: "text.secondary",
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: "2px",
              },
            }}
          >
            <Radio overlay disableIcon value={color?.color} sx={{}} />
          </Sheet>
        ))}
      </RadioGroup>
    </Stack>
  );
};
