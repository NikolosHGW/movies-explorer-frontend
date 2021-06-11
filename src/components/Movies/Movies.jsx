import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

export default function Movies() {
  return (
    <div className='movies'>
      <Header />
      <Content></Content>
      <Footer />
    </div>
  );
}
