import "./App.css";
import { Box,  } from "@chakra-ui/react";
import Header from "./components/Header";
import {  primaryLight } from "./constants";
import HomeComponent from "./components/Home";
import Qualities from "./components/Qualities";
import ExpertiseSection from "./components/Expertise";
import ProjectTrustSection from "./components/ProjectTrustSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {
  return (
    <Box>
      <Header/>
      <HomeComponent  color={primaryLight} textColor={'black'} />
      <Qualities/>
      <ExpertiseSection/>
      <ProjectTrustSection/>
      <ContactForm/>
      <Footer/>
    </Box>
  );
}

export default App;
