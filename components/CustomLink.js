import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";
import React from "react";

export default withRouter(({ router, children, as, href, ...rest }) => (
  <Link {...rest} href={href} as={as}>
    {React.cloneElement(Children.only(children), {
      className:
        router.pathname === href || router.asPath === as ? `active` : null
    })}
  </Link>
));

// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default ({ href, children }) => {
//   const router = useRouter();

//   let className = children.props.className || "";
//   if (router.pathname === href) {
//     className = `${className} selected`;
//   }

//   return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
// };

// import { withRouter } from "next/router";
// import Link from "next/link";
// import React, { Children } from "react";
// const ActiveLink = ({ router, children, ...props }) => {
//   const child = Children.only(children);

//   let className = child.props.className || "";
//   if (router.pathname === props.href && props.activeClassName) {
//     className = `${className}${props.activeClassName}`.trim();
//   }

//   delete props.activeClassName;

//   return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
// };

// export default withRouter(ActiveLink);
