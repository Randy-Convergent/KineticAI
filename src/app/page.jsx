import Hero from "@/common/module/Hero/Hero";
import Introduction from "@/common/module/Introduction/Introduction";
import Testimonials from "@/common/module/Testimonials/Testimonials";
import Faq from "@/common/module/Faq/Faq";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import Pricing from "@/common/module/Pricing/Pricing";
import Services from "@/common/module/Feature/Services";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
      <Hero />
      <Introduction />
      <Services />
      {/* <Solution /> */}
      {/* <Testimonials />  */}
      {/* <HowItsWork /> */}
      {/* <Experience/> */}
      <Pricing />
      <Faq />
      <CardEndOffer />
    </div>
  );
}
