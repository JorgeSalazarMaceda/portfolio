import '../Style/LanguageDropDown.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const LanguageDropDown = (props) => {

    const clickHandle = () => {
        const newLanguage = props.settings.language === 'es' ? 'en' : 'es';
        props.settings.changeLanguage(newLanguage);
    };

    return (
        <div>
            {/* <button onClick={clickHandle} className='languageButton'>{props.children}</button> */}
            <select onChange={clickHandle} className="languageButton" data-width="fit">
                <option data-content='<span class="flag-icon flag-icon-us"></span> English'>Español</option>
                <option data-content='<span class="flag-icon flag-icon-es"></span> Español'>English</option>
            </select>
        </div>

    )
}

export default LanguageDropDown