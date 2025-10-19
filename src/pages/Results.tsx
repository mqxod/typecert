import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Certificate from "@/components/Certificate";
import { getPerformanceRating } from "@/utils/performanceRating";
import { Trophy, RotateCcw, Home, Award } from "lucide-react";
import { useState } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCertificate, setShowCertificate] = useState(false);

  const results = location.state as {
    wpm: number;
    accuracy: number;
    errors: number;
    totalWords: number;
    timeElapsed: number;
    userName: string;
  };

  if (!results) {
    navigate("/");
    return null;
  }

  const performance = getPerformanceRating(results.wpm);
  const certificateId = `TC-${Date.now().toString(36).toUpperCase()}`;
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-hero py-12 mt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {!showCertificate ? (
          <>
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-primary p-6 rounded-full shadow-glow animate-scale-in">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Test Complete!
              </h1>
              <p className="text-xl text-muted-foreground">
                Great job, {results.userName}! Here are your results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 animate-slide-up">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Words Per Minute
                  </h3>
                  <p className="text-5xl font-bold text-accent mb-2">
                    {results.wpm}
                  </p>
                  <p className="text-sm text-muted-foreground">WPM</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Accuracy
                  </h3>
                  <p className="text-5xl font-bold text-success mb-2">
                    {results.accuracy}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Correct Characters
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Total Words
                  </h3>
                  <p className="text-5xl font-bold text-primary mb-2">
                    {results.totalWords}
                  </p>
                  <p className="text-sm text-muted-foreground">Words Typed</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Errors Made
                  </h3>
                  <p className="text-5xl font-bold text-destructive mb-2">
                    {results.errors}
                  </p>
                  <p className="text-sm text-muted-foreground">Mistakes</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-2 border-primary bg-gradient-to-br from-card to-primary/5 animate-scale-in">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Performance Rating</h2>
                <p className={`text-4xl font-bold mb-3 ${performance.color}`}>
                  {performance.title}
                </p>
                <p className="text-lg text-muted-foreground">
                  {performance.description}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setShowCertificate(true)}
                className="gap-2"
              >
                <Award className="h-5 w-5" />
                Generate Certificate
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <RotateCcw className="h-5 w-5" />
                Take Another Test
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <Home className="h-5 w-5" />
                Home
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Your Certificate</h1>
              <p className="text-lg text-muted-foreground">
                Congratulations on completing the typing test!
              </p>
            </div>

            <Certificate
              userName={results.userName}
              wpm={results.wpm}
              accuracy={results.accuracy}
              date={date}
              certificateId={certificateId}
            />

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowCertificate(false)}
              >
                Back to Results
              </Button>

              <Button
                variant="gradient"
                size="lg"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
