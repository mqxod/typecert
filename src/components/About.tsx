import { motion } from "framer-motion";
import { Users, Globe, Rocket, Keyboard } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-background to-muted/30 py-20 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TypeCert
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TypeCert is a modern typing platform built to help users improve
            their typing accuracy, speed, and confidence — while earning
            professional certifications that showcase their skills.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <h3 className="text-2xl font-semibold">
              Empowering Learners and Professionals
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you’re a student preparing for your next exam, a developer
              improving your coding speed, or a professional polishing your
              communication workflow — TypeCert provides a reliable environment
              to grow your typing proficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine performance analytics, real-time feedback, and
              achievement tracking to make learning not just effective — but
              enjoyable.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <p className="font-medium">10,000+ Active Users</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent" />
                <p className="font-medium">Global Reach</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 text-center"
          >
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <Keyboard className="h-10 w-10 text-primary mx-auto mb-2" />
              <h4 className="font-semibold">Accurate Testing</h4>
              <p className="text-sm text-muted-foreground">
                Type with precision and consistency
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <Rocket className="h-10 w-10 text-success mx-auto mb-2" />
              <h4 className="font-semibold">Performance Growth</h4>
              <p className="text-sm text-muted-foreground">
                Track progress and reach new milestones
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <Globe className="h-10 w-10 text-accent mx-auto mb-2" />
              <h4 className="font-semibold">Global Certificates</h4>
              <p className="text-sm text-muted-foreground">
                Download and share verified achievements
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <Users className="h-10 w-10 text-secondary mx-auto mb-2" />
              <h4 className="font-semibold">Community Driven</h4>
              <p className="text-sm text-muted-foreground">
                Join thousands improving together
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We believe typing is not just a skill — it’s a digital superpower.
            TypeCert aims to empower individuals worldwide by providing free,
            accessible, and enjoyable typing experiences that build confidence
            and open career opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
