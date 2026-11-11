import Hero from "@/components/Hero";
import TmsSection from "@/components/TmsSection";
import WhyGoldstone from "@/components/WhyGoldstone";
import InsuranceSection from "@/components/InsuranceSection";
import HowItWorks from "@/components/HowItWorks";
import DoctorSection from "@/components/DoctorSection";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TmsSection />
      <WhyGoldstone />
      <InsuranceSection />
      <HowItWorks />
      <DoctorSection />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}
