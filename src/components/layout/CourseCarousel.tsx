import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./CourseCard";
import { cn } from "@/lib/utils";
import { 
  Network, 
  FileCode2, 
  Code2, 
  Layout, 
  TestTube2,
  CircuitBoard 
} from "lucide-react";

export function CourseCarousel() {
  return (
    <div className="bg-primary py-12 px-6 mt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl text-white text-center mb-12">
          Improve your skills,{" "}
          <span className="bg-yellow-300 px-2 py-1 text-black font-medium">
            be remarkable.
          </span>{" "}
          🚀
        </h2>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white hover:bg-primary/20"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="grid grid-cols-6 gap-4">
            <CourseCard
              icon={<Network className="text-purple-500" />}
              title="Data Structures & Algorithms"
            />
            <CourseCard
              icon={<FileCode2 className="text-green-500" />}
              title="Python"
            />
            <CourseCard
              icon={<Code2 className="text-yellow-500" />}
              title="Interview Preparation"
            />
            <CourseCard
              icon={<Layout className="text-blue-500" />}
              title="Front-end Development"
            />
            <CourseCard
              icon={<TestTube2 className="text-orange-500" />}
              title="Selenium"
              upcoming
            />
            <CourseCard
              icon={<CircuitBoard className="text-cyan-500" />}
              title="C & Pointers"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-white hover:bg-primary/20"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full",
                i === 0 ? "bg-white" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
