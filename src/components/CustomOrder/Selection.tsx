import { Box, Stack, Typography, useTheme } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import { SxProps } from "@mui/joy/styles/types";

type Option = {
  id: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  imgSrc?: string;
};
type Props = {
  options: Option[];
  label?: string;
  subLabel?: string;
  helperText?: React.ReactNode | string;
  variant?: "solid" | "soft" | "outlined" | "plain";
};
export function Selection(props: Props) {
  return (
    <Stack sx={{ px: 1 }} spacing={2}>
      {props?.label && (
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
      )}
      {props?.subLabel && (
        <FormLabel
          id="sub_label"
          sx={{
            mb: 2,
            fontWeight: "xl",
            fontSize: "lg",
            letterSpacing: "0.15rem",
          }}
        >
          {props?.subLabel}
        </FormLabel>
      )}
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue={props?.options[0].id}
        size="lg"
        orientation="horizontal"
        sx={{
          gap: 1.5,
          justifyContent: "space-between",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        {props?.options?.map((option) => (
          <RenderOption
            id={option?.id}
            label={option?.label}
            helperText={option?.helperText}
            sx={{
              minWidth: 60,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            disabled={option?.disabled}
            imgSrc={option?.imgSrc}
            variant={props?.variant}
          />
        ))}
      </RadioGroup>
      {props?.helperText && (
        <>
          {typeof props.helperText === "string" ? (
            <Typography
              textAlign={"center"}
              sx={{
                fontWeight: "bold",
              }}
            >
              {props?.helperText}
            </Typography>
          ) : (
            props?.helperText
          )}
        </>
      )}
    </Stack>
  );
}

type RenderOptionType = {
  id: string;
  label?: string;
  helperText: string;
  sx?: SxProps;
  disabled?: boolean;
  imgSrc?: string;
  variant?: "solid" | "soft" | "outlined" | "plain";
};
const RenderOption = ({
  id,
  label,
  helperText,
  sx,
  disabled,
  imgSrc,
  variant,
}: RenderOptionType) => {
  return (
    <Stack spacing={2}>
      <Sheet
        key={id}
        variant={variant}
        sx={{
          p: 2,
          borderRadius: "md",
          boxShadow: "sm",
          ...sx,
        }}
      >
        <Radio
          label={
            <>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                sx={{
                  fontWeight: "lg",
                  fontSize: "md",
                }}
              >
                {imgSrc ? (
                  <Stack
                    alignItems={"center"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    <img src={imgSrc} alt={label} style={{}} />
                  </Stack>
                ) : (
                  <Typography
                    sx={{ width: "100%" }}
                    color={disabled ? "neutral" : "primary"}
                  >
                    {label}
                  </Typography>
                )}
              </Stack>
            </>
          }
          overlay
          disabled={disabled}
          disableIcon
          value={id}
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
      {helperText && (
        <Typography sx={{ width: "100%" }} textAlign={"center"}>
          {helperText}
        </Typography>
      )}
    </Stack>
  );
};
