import TextCard from "../Sections/TextCard/TextCard";
import RightSectionFirst from "../Sections/afbeeldingen/afbeeldingen";
import Werk from "../Sections/OnsWerk/OnsWerk";
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
        
        <h3 className="Werk__title">Ons Werk</h3>
        <Werk />
       
      </>
      
 
    </main>
  );
};

export default Main;