import './whyChooseUs.scss';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="why-choose-us-image">
        <Image 
          src="https://www.figma.com/api/mcp/asset/bec1ee29-72be-477a-92f4-0ac6c41137e2" 
          alt="" 
          fill
          className="why-choose-us-img"
        />
      </div>
      <div className="why-choose-us-content">
        <div className="why-choose-us-header">
          <p className="section-label">Why Choose Us</p>
          <h2 className="why-choose-us-title">Trusted by Global Innovators</h2>
        </div>
        <div className="why-choose-us-features">
          <div className="why-feature-item">
            <div className="why-feature-header">
              <div className="why-feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/394ee60d-a25b-4a4c-9e81-49d5544cfefc" 
                  alt="" 
                  width={32} 
                  height={32}
                />
              </div>
              <h3 className="why-feature-title">Advanced Tech</h3>
            </div>
            <p className="why-feature-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
          <div className="why-feature-item highlighted">
            <div className="why-feature-header">
              <div className="why-feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/f56c9b8a-d355-4c0b-9dae-6e40bba76901" 
                  alt="" 
                  width={32} 
                  height={32}
                />
              </div>
              <h3 className="why-feature-title">Quality Checks</h3>
            </div>
            <p className="why-feature-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
          <div className="why-feature-item">
            <div className="why-feature-header">
              <div className="why-feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9311d866-3206-4faf-906c-f9d855ba7345" 
                  alt="" 
                  width={28} 
                  height={28}
                />
              </div>
              <h3 className="why-feature-title">Eco Practices</h3>
            </div>
            <p className="why-feature-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

