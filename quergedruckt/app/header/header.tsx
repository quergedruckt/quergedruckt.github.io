import '../header/header.scss'
import Image from 'next/image'
import LanguageSelect from '../language-select/languageSelect';

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <Image src='/images/Quergedruckt.svg' alt='Quergedruckt Logo' fill className='quergedrucktLogo' /></div>
            <div className="navigationItems">
                <button className="btn btn-text">Home</button>
                <button className="btn btn-text">About Us</button>
                <button className="btn btn-text">Contact</button>
            </div>
            <div className="actions">
                <LanguageSelect />
                <button className="btn btn-primary">Get a Quote</button>
            </div>
        </div>
    )
}

export default Header;