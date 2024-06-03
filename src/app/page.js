import Adoption from "@/components/Adoption";
import Applications from "@/components/Applications";
import BuildOrScale from "@/components/BuildOrScale";
import Community from "@/components/Community";
import Ecosystem from "@/components/Ecosystem";
import Environment from "@/components/Environment";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Infrastructure from "@/components/Infrastructure";
import LogoSlider from "@/components/LogoSlider";
import NetworkUpgrades from "@/components/NetworkUpgrades";


export default function Home() {
  return (
     <>
       <HeroSection/>
       <LogoSlider/>
       <BuildOrScale/>
       <Infrastructure/>
       {/* <Applications/> */}
       <NetworkUpgrades/>
       {/* <Adoption/> */}
       <Environment/>
       <Community/>
       <Ecosystem/>
       <Footer/>
     </>
  );
}
