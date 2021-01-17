import React from "react";
import Products from "./components/products";
import Filter from "./components/filter";
import data from "./data.json";

class App extends React.Component{
  constructor(){
    super();
      this.state = {
        products: data.products,
        sizes: "",
        sort: "",
      };
    
  }
  render(){
  return (
        <div className='grid-container'>
            <header>
              <a href='./'>React Shoppin Cart</a>
            </header>

                  <main>
                    <div className="content">
                      <div className="main">
                      <Filter></Filter>
                      <Products products={this.state.products}></Products>
                      </div>

                    <div className="sidebar">Cart Items</div>

                    </div>
                  </main>


                  <footer>
                    All rights is reserved
                  </footer>
        </div>
  );
}
}

export default App;
