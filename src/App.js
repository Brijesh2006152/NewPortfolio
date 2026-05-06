import './App.css';
import Header from './components/Header';
import Objective from './components/Objective';
import SkillSection from './components/SkillSection';

function App() {
  let skill_1_body = "I have completed HTML, CSS and JavaScript. Currently I am learning React to work with modern industry standards.";
  let skill_2_body = "I learnt python for automation and rapid development of algorithms."

  return (
    <div className="App">
      <Header />
      <Objective />
      <div className="skills">
        <SkillSection head="Web Development" body={skill_1_body}/>
        <SkillSection head="Python" body={skill_2_body}/>
      </div>
      
    </div>
  );
}

export default App;
