import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Keyboard, Award, Zap, Target, BarChart3, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import About from "@/components/About";
import TestCard from "@/components/TestCard";

export default function Index() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const startTest = (duration: number) => {
    if (!userName.trim()) return;
    navigate(`/test?duration=${duration}&name=${encodeURIComponent(userName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-center overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24" id="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-gradient-primary p-6 rounded-2xl shadow-glow"
            >
              <Keyboard className="h-16 w-16 text-white" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Master Your Typing Skills
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your speed, challenge yourself, and earn professional typing
            certificates — all in one sleek and interactive platform.
          </p>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6"
          >
            <Button className="px-8 py-3 text-lg bg-gradient-to-r from-primary to-secondary">
              Explore Features
            </Button>
          </motion.a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Why Choose <span className="text-primary">Typix</span>?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-12 w-12 text-accent mx-auto mb-4" />,
              title: "Real-Time Tracking",
              desc: "Monitor your speed, accuracy, and error rate live while you type.",
            },
            {
              icon: <Award className="h-12 w-12 text-primary mx-auto mb-4" />,
              title: "Instant Certificates",
              desc: "Get downloadable professional certificates after each test.",
            },
            {
              icon: <Target className="h-12 w-12 text-success mx-auto mb-4" />,
              title: "Progress Analytics",
              desc: "Visualize your performance with interactive progress graphs.",
            },
            {
              icon: (
                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              ),
              title: "Flexible Timers",
              desc: "Choose from multiple test durations that fit your goals.",
            },
            {
              icon: (
                <BarChart3 className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              ),
              title: "Performance Insights",
              desc: "Understand your strengths and improve your weak spots easily.",
            },
            {
              icon: (
                <Keyboard className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              ),
              title: "Modern Interface",
              desc: "Smooth animations, clean visuals, and responsive experience.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Name Input Section */}
      <motion.section
        id="start"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mt-16 mb-12"
      >
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <Label
            htmlFor="userName"
            className="text-lg font-semibold mb-2 block"
          >
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
            Your name will appear on your certificate.
          </p>
        </div>
      </motion.section>

      {/* Test Duration Cards */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Test Duration
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <TestCard duration={1} onClick={() => startTest(1)} />
          <TestCard duration={3} onClick={() => startTest(3)} />
          <TestCard duration={5} onClick={() => startTest(5)} />
        </div>
        {!userName.trim() && (
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Please enter your name before starting a test.
          </p>
        )}
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-muted/20 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              step: "1",
              title: "Choose Your Test",
              desc: "Pick a test duration that fits your schedule or skill level.",
            },
            {
              step: "2",
              title: "Start Typing",
              desc: "Type the given text as accurately and quickly as possible.",
            },
            {
              step: "3",
              title: "View Results",
              desc: "Instantly see your WPM, accuracy, and typing efficiency.",
            },
            {
              step: "4",
              title: "Download Certificate",
              desc: "Generate your personalized certificate and share it online.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-lg p-6 text-left shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <About />
    </div>
  );
}
