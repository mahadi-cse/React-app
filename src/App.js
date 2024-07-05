import logo from './logo.svg';
import './App.css';

function App() {
  // create a product array of objects with adobe products ans prices
  const products = [
    { name: 'Adobe Photoshop', price: 100 },
    { name: 'Adobe Illustrator', price: 150 },
    { name: 'Adobe InDesign', price: 120 },
    { name: 'Adobe XD', price: 170 },
  ];

  return (
    <div className="App">
      <header className="App-header">
       {/* <Product product={products[0]}></Product> */}
       <ul>
        {products.map(product=> <li> { product.name} , Price :{product.price} <button>Buy now</button></li>)}
        </ul> 
      </header>
    </div>
  );
}
function Product(props){
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>Price: {props.product.price}</p>
      <button>Buy now</button>
    </div>
  );
}
function Person (){
  return (
    <div>
      <h2>Person</h2>
      <p>Name: John Doe</p>
      <p>Age: 30</p>
    </div>
  );
}
export default App;
