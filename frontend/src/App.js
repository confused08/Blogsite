import React, { useContext } from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Context } from "./context/Context"
import CategoryPage from "./components/category/category-page"
import AboutUs from "./pages/About"
import { Card } from "./components/blog/Card"
import { Blogs } from "./components/blog/Blogs"
import Contact from "./pages/Contact"

const App = () => {
  //after login
  const { user } = useContext(Context)
  console.log("hello"+process.env.REACT_APP_API)
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/post/:id' component={DetailsPages} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/category/:id' component={CategoryPage}/>
          <Route exact path='/create' component={Create} />
          <Route exact  path='/about' component={AboutUs}/>
          <Route exact path ='/blog' component={Blogs}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
