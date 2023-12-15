import TextCard from "../Sections/TextCard/TextCard";
import RightSectionFirst from "../Sections/afbeeldingen/afbeeldingen";
import Werk from "../Sections/OnsWerk/OnsWerk";
import Organisatie from "../Sections/Organisatie/Organisatie";
import "./Main.css";


const Main = (props) => {
  return (
    <main class="main">
      <>
        <h3 className="Project__title">Projecten</h3>
        <ul className="Section__wrapper">
        <TextCard />
        <RightSectionFirst />
        </ul>
        
        <h3 className="Main__titles">Ons Werk</h3>
        <Werk />
        <h3 className="Main__titles">Organisatie</h3>
        <Organisatie />
      </>
      
 
    </main>
  );
};

export default Main;