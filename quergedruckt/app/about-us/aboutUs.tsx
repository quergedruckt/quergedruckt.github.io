import './aboutUs.scss';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <div className="about-us-header">
            <p className="section-label">About Us</p>
            <div className="about-us-title-section">
              <h2 className="about-us-title">Shaping Tomorrow with Precision</h2>
              <p className="about-us-description">
                We craft powerful ideas into sleek digital journeys that inspire action, connect with users, and elevate brands globally
              </p>
            </div>
          </div>
          <div className="about-us-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/a9d19fc8-b2c6-4ce3-b734-d29ddd839fd9" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
              <p className="feature-text">Insight-led creativity</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/a9d19fc8-b2c6-4ce3-b734-d29ddd839fd9" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
              <p className="feature-text">Scalable impact</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/a9d19fc8-b2c6-4ce3-b734-d29ddd839fd9" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
              <p className="feature-text">Audience-centric thinking</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/a9d19fc8-b2c6-4ce3-b734-d29ddd839fd9" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
              <p className="feature-text">Strategy meets storytelling</p>
            </div>
          </div>
        </div>
        <div className="about-us-image">
          <Image 
            src="https://www.figma.com/api/mcp/asset/f28c7ac6-6ce3-4512-93ab-775f85fb147c" 
            alt="" 
            fill
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
