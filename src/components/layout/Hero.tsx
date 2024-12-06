import { HeroContent } from "./HeroContent";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-20 px-6 gap-12">
      <HeroContent />
      <HeroIllustration />
    </div>
  );
}