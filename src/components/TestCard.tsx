import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TestCardProps {
  duration: number;
  onClick: () => void;
}

export default function TestCard({ duration, onClick }: TestCardProps) {
  return (
    <Card
      className="hover:shadow-lg-colored transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-gradient-primary p-4">
            <Clock className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {duration} Minute{duration > 1 ? "s" : ""}
        </h3>
        <p className="text-muted-foreground mb-4">Test your typing speed</p>
        <Button variant="gradient" className="w-full">
          Start Test
        </Button>
      </CardContent>
    </Card>
  );
}
