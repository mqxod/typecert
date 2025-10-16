import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Keyboard, Award, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TestCard from "@/components/TestCard";

export default function Index() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const startTest = (duration: number) => {
    if (!userName.trim()) {
      return;
    }
    navigate(`/test?duration=${duration}&name=${encodeURIComponent(userName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-primary p-6 rounded-2xl shadow-glow">
              <Keyboard className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Master Your Typing Skills
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your typing speed, get certified, and track your progress. 
            Improve your WPM and accuracy with our professional typing platform.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your WPM, accuracy, and errors as you type
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
            <p className="text-muted-foreground">
              Earn professional certificates for your achievements
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">
              See detailed statistics and performance ratings
            </p>
          </div>
        </div>

        {/* Name Input */}
        <div className="max-w-md mx-auto mt-16 animate-scale-in">
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <Label htmlFor="userName" className="text-lg font-semibold mb-2 block">
              Enter Your Name
            </Label>
            <Input
              id="userName"
              type="text"
              placeholder="Your full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mb-4 h-12 text-lg"
            />
            <p className="text-sm text-muted-foreground mb-6">
              Your name will appear on your certificate
            </p>
          </div>
        </div>

        {/* Test Duration Cards */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Test Duration</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <TestCard duration={1} onClick={() => startTest(1)} />
            <TestCard duration={3} onClick={() => startTest(3)} />
            <TestCard duration={5} onClick={() => startTest(5)} />
          </div>
          {!userName.trim() && (
            <p className="text-center text-muted-foreground mt-4 text-sm">
              Please enter your name before starting a test
            </p>
          )}
        </div>

        {/* How It Works */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Choose Your Test</h3>
                  <p className="text-muted-foreground">Select a duration that matches your skill level or time availability</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Type the Paragraph</h3>
                  <p className="text-muted-foreground">Type the displayed text as accurately and quickly as possible</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Get Your Results</h3>
                  <p className="text-muted-foreground">View your WPM, accuracy, and performance rating</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Download Certificate</h3>
                  <p className="text-muted-foreground">Generate and download your professional typing certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
