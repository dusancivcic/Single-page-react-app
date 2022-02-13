
import '../../App.css';
import Header from './Header'
import About from './About'
import Technologie from './Technologie'
import News from './News'
import Newsletter from './Newsletter';

function App(props) {
  return (
    <>
      <Header />
      <About />
      <Technologie/>
      <News newsId={props.newsId} setNewsId={props.setNewsId}/>
    </>
  );
}

export default App;
