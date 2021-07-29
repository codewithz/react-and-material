import './App.css';
import React from 'react';
import { BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import NavigationComponent from './components/routing/NavigationComponent';
import Home from './components/routing/Home';
import Posts from './components/routing/Posts';
import Dashboard from './components/routing/admin/Dashboard';
import Products from './components/routing/Products';
import ProductDetails from './components/routing/ProductDetails';
import NotFound from './components/routing/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavigationComponent />
      <div>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" render={(props)=> <Products sortBy="newest" {...props}/>}/>
        <Route path="/posts/:year?/:month?" component={Posts}/>
        <Redirect from="/messages" to="/posts" />
        <Route path="/admin" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact  component={Home} />
        <Redirect to="/not-found" />

      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
