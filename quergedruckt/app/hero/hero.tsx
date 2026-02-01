import './hero.scss';
import Image from 'next/image';
import LanguageSelect from '../language-select/languageSelect';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <Image 
          src="https://www.figma.com/api/mcp/asset/82b4404f-ae80-4102-a83f-81b3189633f7" 
          alt="" 
          fill 
          className="hero-bg-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-header">
          <div className="hero-logo">
            <Image 
              src="/images/Quergedruckt.svg" 
              alt="Quergedruckt Logo" 
              width={200} 
              height={30}
            />
          </div>
          <div className="hero-navigation">
            <p className="nav-item active">Home</p>
            <p className="nav-item">About Us</p>
            <p className="nav-item">3D Model</p>
            <p className="nav-item">Contact</p>
          </div>
          <div className="hero-actions">
            <div className="language-select-wrapper">
              <div className="language-avatar">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/c089fb30-d19d-4c0b-bd66-2bb8cb0c6a31" 
                  alt="" 
                  width={30} 
                  height={30}
                />
              </div>
              <div className="language-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/d5b5bbad-a59b-4e3a-9c89-acfe411dab7f" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
            <button className="btn-primary">Get a Quote</button>
          </div>
        </div>
        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              Get the benefits of<br />3D printing
            </h1>
          </div>
          <div className="hero-description">
            <p className="hero-description-text">
              Custom 3D Printing, Prototyping, and Design Services for Innovators, Makers, and Businesses.
            </p>
            <div className="hero-cta">
              <button className="btn-primary">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

