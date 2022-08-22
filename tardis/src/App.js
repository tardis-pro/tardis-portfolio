import "./App.css";
import Navlink from "./Components/Navlink";
import OurProjects from "./Components/OurProjects";
import OurServices from "./Components/OurServices";
import ContactForm from "./Components/ContactForm";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Navlink />
      <Main />
      <OurServices />
      <OurProjects />
      <ContactForm />
    </>
  );
}

export default App;
