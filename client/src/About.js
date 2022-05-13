import "./styles/login.css";
import * as octocat from './image/PNG/GitHub-Mark-32px.png'
function About() {
    const githubUrl = "https://github.com/"
  return (
    <div id="login-background">
      <div className="login" style={{'background-color': "rgba(255,255,255,0.6"}}>
      <br />
        <br />
        <h3 style={{color: 'black'}}>Phase 4 Project by: </h3>
        <a href={githubUrl + 'mChung89'}className="profile"><img src={octocat.default} alt="mChung89"/>/mChung89</a>
        <br />
        <a href={githubUrl + 'kevawnw'} className="profile"><img src={octocat.default} alt="kevawnw"/>/kevawnw</a>
      </div>
    </div>
  );
}

export default About;
