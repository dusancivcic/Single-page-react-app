
import '../../App.css';
import Newsletter from './Newsletter';

function Fotter() {
  return (
  <>
      <Newsletter/>
      <section className='fotter-section'>
        <div className='fotter-container'>
            <h2>Contact us. <br />Let's Talk.</h2>
            <div className='fotter-links'>
                <div>
                  <h3>Resource</h3>
                  <a href="">About us</a>
                  <a href="">Accessories & tolls</a>
                  <a href="">Mobile design</a>
                </div>

                <div>
                  <h3>Where we are</h3>
                  <a href="">Lorem ipsum dolor</a>
                </div>

                <div>
                  <h3>Our contact info</h3>
                  <a href="mailto:contact@gmail.com">contact@gmail.com</a>
                  <a href="tel:+381 66 222 333">+381 66 222 333</a>
                </div>
            </div>
        </div>
      </section>
  </>
  );
}

export default Fotter;
