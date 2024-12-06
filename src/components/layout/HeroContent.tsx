import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <div className="max-w-2xl text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Grow your programming skills through{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          visualization
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        Learn programming, data structures & algorithms, and prepare for the interview
        - all in one place.
      </p>
      <Button size="lg" className="bg-primary text-primary-foreground">
        Join for free
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}