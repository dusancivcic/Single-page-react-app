import '../../App.css';
import pimcore from '../images/pimcore.jpg'

function Technologie() {
  return (
    <section className='techno-section'>
        <div className='techno-container'>
            <img src={pimcore} alt="" />
            <div className='techno-container-text'>
                <h3>Impressing our customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio consectetur alias..</p>
                <div className='techno-container-cards'>
                    <div className='techno-container-card'>
                        <div>
                            <div></div>
                            <h4>Pimcore</h4>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia aliquam veritatis, numquam repellat eum ducimus</p>
                    </div>

                    <div className='techno-container-card'>
                        <div>
                            <div></div>
                            <h4>Pimcore</h4>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia aliquam veritatis, numquam repellat eum ducimus</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Technologie;
