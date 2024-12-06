import { Button } from "@/components/ui/button";
import { PhoneCall, Menu } from "lucide-react";
import { Link } from "@/components/ui/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold">Log2Base2</div>
        <div className="hidden md:flex gap-6">
          <Link href="#" className="text-muted-foreground hover:text-primary">Original courses</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">Pricing</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link href="#" className="text-muted-foreground hover:text-primary">Regionals</Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">Partner+ courses</Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">Code juniors</Link>
        <PhoneCall className="w-5 h-5 text-muted-foreground" />
        <Button variant="ghost" className="text-primary">Sign in</Button>
        <Button className="bg-primary text-primary-foreground">Join for free</Button>
      </div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="w-6 h-6" />
      </Button>
    </nav>
  );
}