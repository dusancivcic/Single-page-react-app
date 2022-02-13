
import '../../App.css';
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

function Header() {

  const [isOpen, setOpen] = useState(false)

  return (
    <section className='header-section'>
        <div className='header-container'>
            <div className='header-container-text'>
              <h1>We make digital business simple</h1>
              <p>In everyting we do, we simply want to inspire people.
                  Through our ideas we strenghten brands and inspire their customers. We 
                  create great digital experiences for your visitors.
              </p>
              <div className='header-buttons'>
                  <a href="">
                    Explore Here
                    <div></div>  
                  </a>
                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                  <div className='playbutton-container' onClick={()=> setOpen(true)}>
                    <div className='playbutton-triangle pulse'></div>
                  
                    <button className="btn-primary" >Watch Video</button>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Header;
