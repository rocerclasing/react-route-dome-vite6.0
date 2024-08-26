import {Outlet} from 'react-router-dom';

const LayoutPublic = () => {
    return(

        <div className="container">
          
             <Outlet/>

        {/*Configuracion de rutas*/}
        <footer>Este es el footer</footer>


  </div>

    )

}

export default LayoutPublic