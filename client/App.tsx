import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Intent from "./pages/Intent";
import IntentPrivacy from "./pages/IntentPrivacy";
import IntentTerms from "./pages/IntentTerms";
import DexPrivacy from "./pages/DexPrivacy";
import DexSupport from "./pages/DexSupport";
import MainLayout from "@/components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intent" element={<Intent />} />
            <Route path="/intent/privacy" element={<IntentPrivacy />} />
            <Route path="/intent/terms" element={<IntentTerms />} />
            <Route path="/dex/privacy" element={<DexPrivacy />} />
            <Route path="/dex/support" element={<DexSupport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
