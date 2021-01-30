import React from "react";
import Products from "./components/products";
import Filter from "./components/filter";
import data from "./data.json";

class App extends React.Component{
  constructor(){
    super();
      this.state = {
        products: data.products,
        size: "",
        sort: "",
      };
    
  }


sortProducts=(event)=>{
  //implement sort code
  const sort = event.target.value;
  console.log(event.target.value);
  this.setState((state)=>({
    sort: sort,
    products : this.state.products
    .slice()
    .sort((a,b)=>
      sort === "Lowest"?
      a.price > b.price
      ?1
      :-1
      :sort === "Highest"?
      a.price < b.price
      ?1
      :-1
      :a._id < b._id
      ?1
      :-1
    ),
  }));
};


filterProducts = (event)=>{
  //implement size code
  if(event.target.value === ""){
    this.setState({size: event.target.value, products: data.products});
  }else{
    this.setState({
      size: event.target.value,
      products: data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0)
    })

  }
 
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
                      <Filter count={this.state.products.length}
                      size={this.state.sizes}
                      sort={this.state.sort}
                      filterProducts={this.filterProducts}
                      sortProducts={this.sortProducts}
                      ></Filter>
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
