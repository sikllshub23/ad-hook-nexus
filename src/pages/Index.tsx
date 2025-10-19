import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SurveySection from "@/components/SurveySection";
import AdHooksSection from "@/components/AdHooksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SurveySection />
      <AdHooksSection />
      <Footer />
    </main>
  );
};

export default Index;
