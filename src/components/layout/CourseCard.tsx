import { cn } from "@/lib/utils";

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  upcoming?: boolean;
}

export function CourseCard({ icon, title, upcoming }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-shadow min-h-[160px] w-full">
      <div className="text-4xl">{icon}</div>
      <div className="text-center">
        <div className="font-medium">{title}</div>
        {upcoming && (
          <span className="text-sm text-blue-500">(upcoming)</span>
        )}
      </div>
    </div>
  );
}