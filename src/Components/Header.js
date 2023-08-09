import "../Style/header.css";
import CustomButton from './Button';
import translations from '../strings/StringStorage.json'

const Encabezado = (props) => {


    return (
        <div className="centrado">
            <header>
                <CustomButton >{translations.language_strings[props.settings.language]["sobre_mi"]}</CustomButton >
                <CustomButton>{translations.language_strings[props.settings.language]["proyectos"]}</CustomButton>
                <CustomButton>{translations.language_strings[props.settings.language]["contacto"]}</CustomButton>
            </header>
        </div>
    )

}

export default Encabezado;