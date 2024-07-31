import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
    return(
       <ChakraProvider theme={theme}>
       <NavBar />
       <Outlet />
       <Footer />
       </ChakraProvider>
    
        
    );
}

export default App;