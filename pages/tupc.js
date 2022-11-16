import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";

function TUPC() {
  return (
    <div>
      <Navbar />
      <Hero
        heading1="Technological University of the Philippines"
        heading3="Cavite Campus"
        address="CQT Avenue, Salawag, Dasmarinas, Cavite"
      />
      <OurVision />
      <OurMission />
    </div>
  );
}

export default TUPC;
