
 {/*Componentes*/}
import Navbar from "./Components/Navbar";
{/*Rutas publicas*/}
import LayoutPublic from './Layouts/LayoutPublic';
 {/*Configuras rutas pages*/}
import {Routes,Route} from 'react-router-dom';
{/*Pages o configuraciónes de rutas*/}
import Inicio from './Pages/Inicio';
import Contacto from './Pages/Contacto';
import Blog from './Pages/Blog';
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
  return (

      <div>

        <Navbar/>

        <Routes>

              <Route path="/" element={<LayoutPublic/>}>

                  <Route element={<Inicio/>} index></Route>

                  <Route element={<Contacto/>} path="/contacto"></Route>


                  <Route element={<Blog/>} path="/blog"></Route>

                  <Route element={<BlogDetails/>} path="/blog/:id"></Route>

                  <Route element={<NotFound/>} path="*"></Route>

              </Route>

        


         </Routes>


      
        

    </div>


  )
   
      
  
 
}

export default App;

