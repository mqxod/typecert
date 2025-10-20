import { Keyboard, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/80 backdrop-blur-md mt-20">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
            <Keyboard className="h-5 w-5 text-white" />
          </div>
          <h2 className="font-semibold text-lg bg-gradient-primary bg-clip-text text-transparent">
            TypeCert
          </h2>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-muted-foreground">
          <a
            href="https://github.com/mqxod/tpyecert"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/company/typecert"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://maqsood-dev.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TypeCert — Built by{" "}
          <span className="font-medium text-primary">Maqsood Ahmed</span>
        </p>
      </div>
    </footer>
  );
}
