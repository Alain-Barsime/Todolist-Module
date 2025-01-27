 import {BrowserRoutes,Routes,Route} from '../../react-router-dom'
 import Home from '../Pages/home' 
 
 
 function Heading(){

    const container = {
        width:"100%",
        height:"100px",
        backgroundColor:"red",
    }
    const text={
        fontSize:"25px",
        fontWeight:"800",
        
    }

    function Home(){
        return(
            <BrowserRoutes>
               <Routes>
                  <Route Index element={<Home />}>

                  </Route>
               </Routes>
            </BrowserRoutes>
        )
    }



    return(
        <>
        <div style={container}>
            <p style={text}>This is the header component</p> 
        </div>
        <ul>
            <li><button onClick={Home}>Home</button></li>
           
            </ul>
        </> 
    )

 }
 export default Heading;