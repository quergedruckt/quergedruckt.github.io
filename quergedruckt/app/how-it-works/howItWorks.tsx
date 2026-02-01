import './howItWorks.scss';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-works-header">
        <p className="section-label">How It Works</p>
        <h2 className="how-it-works-title">Turning Ideas into Reality Faster</h2>
      </div>
      <div className="how-it-works-content">
        <div className="how-it-works-steps">
          <div className="step-item">
            <div className="step-header">
              <p className="step-number">01</p>
              <h3 className="step-title">Design Your Model</h3>
            </div>
            <p className="step-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
          <div className="step-item">
            <div className="step-header">
              <p className="step-number">02</p>
              <h3 className="step-title">Precision 3D Printing</h3>
            </div>
            <p className="step-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
          <div className="step-item">
            <div className="step-header">
              <p className="step-number">03</p>
              <h3 className="step-title step-title-bold">Secure Fast Delivery</h3>
            </div>
            <p className="step-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
        </div>
        <div className="how-it-works-image">
          <Image 
            src="https://www.figma.com/api/mcp/asset/b4efa8b3-d86f-41da-ad32-60eef4fa556e" 
            alt="" 
            fill
            className="how-it-works-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

