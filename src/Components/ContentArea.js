import React, { useState } from 'react'; // Importa useState
import Encabezado from './Header'
import '../Style/header.css'
import Footer from './Footer'

const ContentArea = () => {
    
    const [language, setLanguage] = useState('es'); // Estado para almacenar el idioma

    // Función para cambiar el idioma
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    // const settings = {
    //     language: "es" // Puedes cambiarlo según el idioma seleccionado
    // }

    return (
        <div>
            <Encabezado settings={{language, changeLanguage}}></Encabezado>
            <Footer></Footer>
        </div>

    )
}

export default ContentArea;