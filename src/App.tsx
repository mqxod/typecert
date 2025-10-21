import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import StateProtectedRoute from "./components/StateProtectedRoute";
import Index from "./pages/Index";
import TypingTest from "./pages/TypingTest";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children, requiredParams }) => {
  const [searchParams] = useSearchParams();

  const hasAllParams = requiredParams.every((param) => {
    const value = searchParams.get(param);
    return value !== null && value.trim() !== "";
  });

  if (!hasAllParams) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/test"
          element={
            <ProtectedRoute requiredParams={["duration", "name"]}>
              <TypingTest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/results"
          element={
            <StateProtectedRoute
              requiredStateKeys={["wpm", "accuracy", "userName"]}
            >
              <Results />
            </StateProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
