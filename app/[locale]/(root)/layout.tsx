import { Particles } from "@/components/ui/particles";
import { ChildProps } from "@/types";

import { Footer, Navbar } from "./_components";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      <main className="relative">
        <Particles
          className="absolute inset-0 z-0"
          quantity={400}
          ease={80}
          refresh
        />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
