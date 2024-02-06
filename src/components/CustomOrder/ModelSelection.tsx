import * as React from "react";
import Box from "@mui/joy/Box";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import { Stack, Typography } from "@mui/joy";

type Option = {
  model: string;
  price: string;
};
const Options: Option[] = [
  {
    model: "Model Y",
    price: "$32,890",
  },
  {
    model: "Model Y Long Range",
    price: "$37,890",
  },
  {
    model: "Model Y Performance",
    price: "$41,390",
  },
];
type Props = {
  options?: Option[];
  label?: string;
};
export function ModelSelection(props: Props) {
  return (
    <Box sx={{ px: 1 }}>
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
        {props?.label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue={props?.options[0].model}
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {props?.options?.map((option, i) => (
          <RenderOption value={option} key={i} />
        ))}
      </RadioGroup>
    </Box>
  );
}

const RenderOption = ({ value }) => {
  return (
    <Sheet
      key={value.model}
      sx={{
        p: 2,
        borderRadius: "md",
        boxShadow: "sm",
      }}
    >
      <Radio
        label={
          <>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                fontWeight: "lg",
                fontSize: "md",
              }}
            >
              <Typography>{value.model}</Typography>
              <Typography>{value.price}</Typography>
            </Stack>
          </>
        }
        overlay
        disableIcon
        value={value.model}
        sx={{ width: "100%" }}
        slotProps={{
          label: ({ checked }) => ({
            sx: {
              fontWeight: "lg",
              fontSize: "md",
              color: checked ? "text.primary" : "text.secondary",
            },
          }),
          action: ({ checked }) => ({
            sx: (theme) => ({
              ...(checked && {
                "--variant-borderWidth": "2px",
                "&&": {
                  // && to increase the specificity to win the base :hover styles
                  borderColor: theme.vars.palette.primary[500],
                },
              }),
            }),
          }),
        }}
      />
    </Sheet>
  );
};
