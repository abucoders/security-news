import { ChildProps } from "@/types";

import { Footer, Navbar } from "./_components";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
