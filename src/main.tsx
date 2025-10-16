import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"; // ✅ Added this
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics /> {/* ✅ Add this below your App */}
    <SpeedInsights />
  </>
);
