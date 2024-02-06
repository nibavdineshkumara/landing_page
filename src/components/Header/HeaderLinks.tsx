import { Link as JoyLink, LinkProps } from "@mui/joy";

import Link from "next/link";

export const HeaderLink = (props: LinkProps) => {
  return (
    <Link href={props?.href || ""}>
      <JoyLink
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "none", fontWeight: "500" },
        }}
      >
        {props?.children}
      </JoyLink>
    </Link>
  );
};
