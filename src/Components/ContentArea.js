import Encabezado from './Header'
import '../Style/header.css'
import Footer from './Footer'

const ContentArea = () => {
    
    const settings = {
        language: "es" // Puedes cambiarlo según el idioma seleccionado
    }

    return (
        <div>
            <Encabezado settings={settings}></Encabezado>
            <Footer></Footer>
        </div>

    )
}

export default ContentArea;