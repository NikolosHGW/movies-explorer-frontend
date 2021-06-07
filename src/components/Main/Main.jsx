import AboutProject from '../AboutProject/AboutProject';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import './Main.css';

export default function Main() {
  return (
    <div className='main'>
      <Header />
      <Content>
        <Promo />
        <AboutProject />
      </Content>
    </div>
  );
}
