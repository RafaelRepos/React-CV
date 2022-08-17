import { useDispatch, useSelector } from "react-redux";
import './App.scss';
import AboutMe from "./components/About";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import { ed, exp } from "./redux/buttons/buttons.actions";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const { showEducation } = useSelector((state) => state.showEducation);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>CURRICULUM VITAE</h1>
      <div className="hero">
        <Hero hero={hero} />
      </div>
      <div className="about">
        <AboutMe hero={hero.aboutMe} />
      </div>
      <div className="buttons">
        <button className="myButton" onClick={() => dispatch(ed())}>
          Education
        </button>
        <button className="myButton" onClick={() => dispatch(exp())}>
          Experience
        </button>
      </div>
      <div className="abc">
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        <More
          languages={languages}
          habilities={habilities}
          volunteer={volunteer}
        />
      </div>
    </div>
  );
}

export default App;
