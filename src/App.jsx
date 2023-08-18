import React from 'react';

function withProducts(WrappedComponent, products) {
  return function(props) {
    return <WrappedComponent {...props} products={products} />;
  };
}

function ProductList(props) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {props.products.map((product) => (
          <li key={product.id} style={{listStyle:"none"}}>
            <img src={product.image} alt={product.name} style={{widows:200 , height:200}} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const products = [
  { id: 1, name: 'Product 1', price: '$10.00', image: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { id: 2, name: 'Product 2', price: '$20.00', image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { id: 3, name: 'Product 3', price: '$30.00', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600' },
];

const ProductListWithProducts = withProducts(ProductList, products);

function App() {
  return (
    <div>
      <ProductListWithProducts />
    </div>
  );
}
export default App;
