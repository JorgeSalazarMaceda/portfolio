import '../Style/LanguageDropDown.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LanguageDropDown = (props) => {

    const clickHandle = (event) => {
        const newLanguage = event.target.value;
        props.settings.changeLanguage(newLanguage);
        console.log(newLanguage)
    };

    return (
        <div>
            <select onChange={clickHandle} className="languageButton" data-width="fit">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="ja">Japan</option>
            </select>
        </div>
    );
};

export default LanguageDropDown;
