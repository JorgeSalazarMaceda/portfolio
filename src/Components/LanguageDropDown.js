

const LanguageDropDown = (props) => {

    const clickHandle = () => {
        const newLanguage = props.settings.language === 'es' ? 'en' : 'es';
        props.settings.changeLanguage(newLanguage);
    };

    return (
        <button onClick={clickHandle}>{props.children}</button>
    )
}

export default LanguageDropDown