
import '../../App.css';
import client from '../images/client.jpg'
import keyboard from '../images/keyboard.jpg'
import metting from '../images/metting.jpg'

function About() {
  return (
   <section className='about-section'>
      <div className='about-container'>
        <h3>Our focus</h3>
        <div className='about-container-content'>
            <div className='about-container-card'>
                <div>
                  <div>
                    <h4>Customer</h4>
                    <p>Lorem ipsum dolor</p>
                  </div>
                  <a href="">
                    View Details
                    <div></div>
                  </a>
                </div>
                <img src={client} alt="" />
            </div>

            <div className='about-container-card'>
                  <div>
                    <div>
                      <h4>Content</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <a href="">
                      View Details
                    <div></div>
                    </a>
                  </div>
                <img src={metting} alt="" />
            </div>

            <div className='about-container-card'>
                  <div>
                   <div>
                    <h4>Touchpoints</h4>
                    <p>Lorem ipsum dolor</p>
                   </div>
                    <a href="">
                      View Details
                      <div></div>
                      </a>
                  </div>
                <img src={keyboard} alt="" />
            </div>
        </div>
      </div>
   </section>
  );
}

export default About;
