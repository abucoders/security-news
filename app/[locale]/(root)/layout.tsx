import { ChildProps } from "@/types";

import { Footer, Navbar } from "./_components";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
