import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signin from "./components/ui/signin";
import Signup from "./components/ui/signup";
import Appointment from "./components/ui/appointment";
import VideoConsultation from "./components/ui/video-consultation";
import GetTreatment from "./components/ui/get-treatment";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/get-treatment" element={<GetTreatment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
