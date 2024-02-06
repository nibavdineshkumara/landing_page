import { Button, FormLabel, Stack, Typography } from "@mui/joy";
import { Selection } from "./Selection";

const ACCESSORIES = [
  {
    name: "Foldable Chair",
    price: "₹55,750",
    img: "/configurator/accessories/foldable_chair.png",
  },
  {
    name: "Alexa",
    price: "₹55,750",
    img: "/configurator/accessories/alexa.png",
  },
  {
    name: "Cover Plate Roof",
    price: "₹55,750",
    img: "/configurator/placeholder.png",
  },
  {
    name: "Cpver Plate Floor",
    price: "₹55,750",
    img: "/configurator/placeholder.png",
  },
  {
    name: "Earthquake Bracket",
    price: "₹55,750",
    img: "/configurator/placeholder.png",
  },
];
export const Accessories = () => {
  return (
    <Stack spacing={2}>
      <FormLabel
        id="storage-label"
        sx={{
          mb: 2,
          fontWeight: "xl",
          fontSize: "xl",
          letterSpacing: "0.15rem",
          justifyContent: "center",
        }}
      >
        Accessories
      </FormLabel>
      <Stack spacing={10}>
        {ACCESSORIES?.map((accessory) => (
          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <Selection
              options={[
                {
                  id: "1",
                  imgSrc: accessory?.img,
                },
              ]}
              helperText=""
              variant={
                accessory?.img?.endsWith("placeholder.png")
                  ? "solid"
                  : "outlined"
              }
            />
            <Typography sx={{ fontWeight: "xl" }}>{accessory?.name}</Typography>
            <Typography sx={{ fontWeight: "xl" }}>
              {accessory?.price}
            </Typography>
            <Stack>
              <Button color="neutral" sx={{ alignSelf: "center" }}>
                Learn More
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
