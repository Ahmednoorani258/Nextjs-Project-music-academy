import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialCard from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWEbinars";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <TestimonialCard/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
