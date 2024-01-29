import { Link, LinkProps } from "@mui/joy";

export const HeaderLink = (props: LinkProps) => {
  return <Link sx={{ textDecorationLine: "none" }}>{props?.children}</Link>;
};
