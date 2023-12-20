
import './App.css';
import Product from './Component/Product';
import Book from './Component/Book';
import QrCodeGenerator from './Component/QrCodeGenerator';
import TokenId from './Component/TokenId';

function App() {
  return (
    <div className="App">
     <Product/>
     <Book/>
     <h1>QR Code Generator</h1>
      <QrCodeGenerator />
      <TokenId/>

    </div>
  );
}

export default App;
