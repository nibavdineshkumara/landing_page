import { Box, Divider, Stack, Typography } from "@mui/joy";
import { Hidden } from "@mui/material";
import { HeadingLabel } from "./HeadingLabel";

const KeyAdvantages = [
  {
    icon: "/key_advantage_icons/compact.svg",
    title: "Compact and Comfortable",
    caption:
      "Our home lifts require only 1010 mm diameter for its base space, while offering enough cabin space for two people to fit comfortably.",
  },
  {
    icon: "/key_advantage_icons/light_weight.svg",
    title: "Light Weight",
    caption:
      "Nibav Home Lifts are manufactured using the combination of Aluminium and Galvanised Steel, This allows the elevator to be light weight without compromising the strength.",
  },
  {
    icon: "/key_advantage_icons/eco_friendly.svg",
    title: "Eco-Friendly",
    caption:
      "Nibav home elevator operates on single phase power and consumes almost to Zero power when going up. During descend, this elevator consumes ZERO power which make it a GREEN Elevator.",
  },
  {
    icon: "/key_advantage_icons/no_machine.svg",
    title: "No Machine Room Required",
    caption:
      "Our installation does not require extra room for installation of the lift’s engine or any other structural requirements; this allows you to optimise your space, protect the integrity of your home and quickly install the lift.",
  },
  {
    icon: "/key_advantage_icons/360_panoramic.svg",
    title: "360 Panoramic Glass View",
    caption:
      "It is quite common for one to get claustrophobic especially when traveling in an enclosed elevator. Nibav Home Elevator allows you to enjoy the panoramic view of your home with all its glory.",
  },
  {
    icon: "/key_advantage_icons/superior_aesthetics.svg",
    title: "Superior Aesthetics",
    caption:
      "With a panoramic glass view on all sides, Nibav home lifts provide you superior aesthetics when compared to the machinery look of conventional elevators.",
  },
];
export const Section7 = () => {
  return (
    <Stack sx={{ width: "100%", mt: 10 }} spacing={4}>
      <HeadingLabel>Key Advantages Offered by Nibav Home Lifts</HeadingLabel>
      <Stack sx={{ alignItems: "center", px: { md: 25 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            maxHeight: { md: 800 },
            background: "url(/flag-switzerland 1.png) repeat scroll",
            backgroundColor: "rgba(0, 0, 0, 1)",
          }}
        >
          <Stack sx={{ p: 5 }}>
            <Stack spacing={5}>
              {KeyAdvantages?.map((advantage) => (
                <>
                  <KeyAdvantage key={advantage.icon} {...advantage} />
                  <Divider sx={{ background: "#414141" }} />
                </>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

type KeyAdvantageType = {
  icon: string;
  title: string;
  caption: string;
};
const KeyAdvantage = (props: KeyAdvantageType) => {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 3fr",
            sm: "1fr 2fr 3fr",
          },
        }}
      >
        <div>
          <img src={props?.icon} />
        </div>
        <div>
          <Typography sx={{ color: "white" }}>{props?.title}</Typography>
        </div>
        <Hidden smDown>
          <Typography sx={{ color: "white", fontSize: 12 }}>
            {props?.caption}
          </Typography>
        </Hidden>
      </Box>
      <Hidden smUp>
        <Typography sx={{ color: "white", fontSize: 12 }}>
          {props?.caption}
        </Typography>
      </Hidden>
    </Stack>
  );
};
