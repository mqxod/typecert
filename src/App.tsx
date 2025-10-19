import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TypingTest from "./pages/TypingTest";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<TypingTest />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
