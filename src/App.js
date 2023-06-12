import './App.css';
import me from './me-best.png';
import git from './git.png';
import lkin from './likn.png';
import insta from './insta.png';
import ttr from './ttr.png';
import lctn from './location.png';

function App() {
  return (
    <>
      <div className='first'>
        <h1 className='porth1'>My Portfolio</h1>
        <div className='image'><img id='image' src={me} alt="myImage" /></div>
        <div className='info'>
          <p><h1>This side Aditya Chaudhary</h1>
            <h2>(MERN stack developer)</h2><br />
            <h2>Specialities</h2>
            <h3>&#171;&nbsp;&nbsp;Html     &nbsp;&#187;</h3>
            <h3>&#171;&nbsp;&nbsp;CSS      &nbsp;&#187;</h3>
            <h3>&#171;&nbsp;&nbsp;Bootstrap&nbsp;&#187;</h3>
            <h3>&#171;&nbsp;&nbsp;React Js &nbsp;&#187;</h3>
            <h3>&#171;&nbsp;&nbsp;Node Js  &nbsp;&#187;</h3>
            <h3>&#171;&nbsp;&nbsp;Mongondb &nbsp;&#187;</h3>
          </p>
        </div>
      </div>

      <div className='projects'>PROJECTS</div>
      <div class="link-boxes">
        <a href="https://tictactoe2317.vercel.app/" class="box1" >
          <div class="box-label"></div>
        </a>
        {/* <a href="https://story-lane.vercel.app/" class="box2" >
          <div class="box-label"></div>
        </a>
        <a href="https://your-advicer.netlify.app/" class="box3" >
          <div class="box-label"></div>
        </a>
        <a href="https://your-advicer.netlify.app/" class="box4" >
          <div class="box-label"></div>
        </a> */}

      </div>
      <div class="link-boxes">
        <a href="https://story-lane.vercel.app/" class="box2" >
          <div class="box-label"></div>
        </a>
      </div>
      <div class="link-boxes3">
        <a href="https://your-advicer.netlify.app/" class="box3" >
          <div class="box-label"></div>
        </a>
      </div>
      {/* <div class="link-boxes">
        <a href="https://tictactoe2317.vercel.app/" class="box4" >
          <div class="box-label"></div>
        </a>
      </div> */}

      {/* //..footer..// */}

      <div class="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div class="footer_center">
              <div class="leftf">
                <a id="a1" href="https://github.com/ChaudharyAadii/"><img width="35px" src={git} alt="git" /><span class="text">GitHub</span></a>
                <a id="a2" href="https://www.linkedin.com/in/aditya-chaudhary-73a7b2226"><img width="35px" src={lkin} alt="linkedin" /><span class="text">LinkedIn</span></a>
                <a id="a3" href="https://www.instagram.com/aadi.chaudhary._/"><img width="35px" src={insta} alt="insta" /><span class="text">Instagram</span></a>
                <a id="a4" href="https://www.instagram.com/aadi.chaudhary._/"><img width="35px" src={ttr} alt="twitter" /><span class="text">Twitter</span></a>
              </div>

              <div className="rightf">
                {/* <p>chaudharyaditya1232@gmail.com <br /></p> */}
                {/* <p>7906259764</p> */}
                <p><img src={lctn} alt="" width="25px" />&nbsp;&nbsp;Bareilly, U.P. <br /></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
