
import '../../App.css';

function Newsletter() {
  return (
    <section id='contact' className='newsletter-section'>
        <div className='newsletter-container'>
            <div className='newsletter-text'>
                <h3>Subscribe to our Newsletter!</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='newsletter-button'>
                <input type="email" placeholder='Enter your email address'/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
  );
}

export default Newsletter;
