import Card from './components/card';
import Pagination from './components/pagination';
import './App.css';

const product = {
  "id": "n03aecr0qrokr9kjkav",
  "images": [
    "https://content1.rozetka.com.ua/goods/images/big_tile/191836868.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/191836880.jpg"
  ],
  "title": "Ноутбук Asus VivoBook 15 X513EA-BQ409 (90NB0SG4-M05090) Black",
  "rating": 3.83,
  "price": 22000,
  "category": "laptops",
  "brand": "asus"
};

function App() {
  const pageSize = 9;
  return (
    <div className="App">
      <Card product={product} />
      <Pagination totalPages={12}/>
    </div>
  );
}

export default App;
