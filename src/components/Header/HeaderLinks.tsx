import { Link, LinkProps } from "@mui/joy";

export const HeaderLink = (props: LinkProps) => {
  return (
    <Link
      sx={{
        textDecoration: "none",
        "&:hover": { textDecoration: "none", fontWeight: "500" },
      }}
    >
      {props?.children}
    </Link>
  );
};
