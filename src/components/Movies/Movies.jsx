import './Movies.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <div className='movies'>
      <Header />
      <Content>
        <SearchForm />
        <MoviesCardList />
      </Content>
      <Footer />
    </div>
  );
}
