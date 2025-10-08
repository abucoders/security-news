import Logo from "@/components/shared/logo";
import ModeToggle from "@/components/shared/mode-toggle";

function Navbar() {
  return (
    <div className="bg-background fixed inset-0 z-50 flex h-[10vh] justify-between border-b px-2 lg:px-4">
      <Logo />

      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
