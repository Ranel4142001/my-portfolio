import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { useEffect } from "react";
import Admin from '../features/admin/Admin';
import { PortfolioService } from "../api/services/tracker.service";

const queryClient = new QueryClient();
const PageViewTracker = () => {
  const location = useLocation(); 
  useEffect(() => {
    const track = async () => {
      try {

        await PortfolioService.trackVisit(location.pathname);
      } catch (err) {
        console.warn("Analytics tracking skipped.");
      }
    };

    track();
  }, [location.pathname]);

  return null; 
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/admin" element={<Admin />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);



export default App;
