import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatsDisplay from "@/components/StatsDisplay";
import { getRandomParagraph } from "@/data/paragraphs";
import { ArrowLeft } from "lucide-react";

export default function TypingTest() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const duration = parseInt(searchParams.get("duration") || "1");
  const userName = searchParams.get("name") || "Anonymous";

  const [paragraph] = useState(getRandomParagraph());
  const [userInput, setUserInput] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsFinished(true);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isActive, timeRemaining]);

  // Fixed: Move navigation logic here with proper calculations
  useEffect(() => {
    if (isFinished) {
      const timeElapsed = duration * 60 - timeRemaining;
      const words = userInput.trim().split(/\s+/).length;
      const wpm =
        timeElapsed === 0 ? 0 : Math.round(words / (timeElapsed / 60));

      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === paragraph[i]) {
          correctChars++;
        }
      }
      const accuracy =
        userInput.length === 0
          ? 100
          : Math.round((correctChars / userInput.length) * 100);

      let errors = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] !== paragraph[i]) {
          errors++;
        }
      }

      const results = {
        wpm,
        accuracy,
        errors,
        totalWords: words,
        timeElapsed,
        userName,
      };

      navigate("/results", { state: results });
    }
  }, [
    isFinished,
    userInput,
    timeRemaining,
    duration,
    paragraph,
    userName,
    navigate,
  ]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!isActive && value.length > 0) {
      setIsActive(true);
    }

    setUserInput(value);

    if (value.length >= paragraph.length) {
      setIsFinished(true);
      setIsActive(false);
    }
  };

  const calculateWPM = () => {
    const timeElapsed = (duration * 60 - timeRemaining) / 60;
    if (timeElapsed === 0) return 0;
    const words = userInput.trim().split(/\s+/).length;
    return Math.round(words / timeElapsed);
  };

  const calculateAccuracy = () => {
    if (userInput.length === 0) return 100;

    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === paragraph[i]) {
        correctChars++;
      }
    }

    return Math.round((correctChars / userInput.length) * 100);
  };

  const calculateErrors = () => {
    let errors = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== paragraph[i]) {
        errors++;
      }
    }
    return errors;
  };

  const renderParagraph = () => {
    return paragraph.split("").map((char, index) => {
      let className = "text-2xl";

      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += " text-success font-semibold";
        } else {
          className += " text-destructive font-semibold bg-destructive/10";
        }
      } else if (index === userInput.length) {
        className += " text-foreground border-l-2 border-primary animate-pulse";
      } else {
        className += " text-muted-foreground";
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg-colored">
          <h1 className="text-3xl font-bold text-center mb-8">
            {duration} Minute Typing Test
          </h1>

          <StatsDisplay
            wpm={calculateWPM()}
            accuracy={calculateAccuracy()}
            timeRemaining={timeRemaining}
            errors={calculateErrors()}
          />

          <div className="bg-secondary/50 rounded-lg p-8 mb-6 min-h-[300px] relative">
            <div className="leading-relaxed select-none">
              {renderParagraph()}
            </div>
          </div>

          <textarea
            ref={inputRef}
            value={userInput}
            onChange={handleInputChange}
            className="w-full h-32 p-4 border-2 border-primary rounded-lg text-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Click here and start typing..."
            disabled={isFinished}
          />

          <div className="mt-6 text-center space-y-2">
            <p className="text-muted-foreground">
              {isActive
                ? "Keep typing! Your test is in progress."
                : "Start typing to begin the test."}
            </p>
            {isActive && (
              <Button variant="outline" onClick={() => navigate("/")}>
                Cancel Test
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
