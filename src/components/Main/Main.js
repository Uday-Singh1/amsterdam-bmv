import TextCard from "../Sections/TextCard/TextCard";
import RightSectionFirst from "../Sections/afbeeldingen/afbeeldingen";
import Werk from "../Sections/OnsWerk/OnsWerk";
import Organisatie from "../Sections/Organisatie/Organisatie";
import Kombij from "../Sections/kom-bij/kom-bij";
import "./Main.css";


const Main = (props) => {
  return (
    <main className="main">
      <>
        <h3  className="Project__title">Projecten</h3>
        <ul className="Section__wrapper">
        <TextCard />
        <RightSectionFirst />
        </ul>
        
        <h3 id='projecten' className="Main__titles">Ons Werk</h3>
        <Werk />
        <h3 id='organisatie' className="Main__titles">Organisatie</h3>
        <Organisatie />
        <h3 id='werken'className="Main__titles__work">Werken bij</h3>
        <Kombij />
      </>
      
 
    </main>
  );
};

export default Main;