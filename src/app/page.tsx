import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsPage from "@/components/NewsPage";
import GalleryPage from "@/components/GalleryPage";
import ContactPage from "@/components/ContactPage";
import NoticePopup from "@/components/NoticePopup";

export default function Home() {
  return (
    <>
      <NoticePopup />
      <HeroSection />
      <AboutSection />
      <PrincipalMessage />
      <AcademicsSection />
      <NewsPage />
      <GalleryPage />
      <AdmissionsSection />
      <TestimonialsSection />
      <ContactPage />
    </>
  );
}
