import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdFlow from "./pages/AdFlow";
import AccountResult from "./pages/AccountResult";
import AdminPanel from "./pages/AdminPanel";
import LinkGenerator from "./pages/LinkGenerator";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ads/:category" element={<AdFlow />} />
          <Route path="/account/:category" element={<AccountResult />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/generate" element={<LinkGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;