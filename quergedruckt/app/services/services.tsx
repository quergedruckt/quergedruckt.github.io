import './services.scss';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <div className="services-title-section">
          <p className="section-label">Our Services</p>
          <h2 className="services-title">Custom 3D solutions for every need</h2>
        </div>
        <button className="btn-outline">Discover More</button>
      </div>
      <div className="services-grid">
        <div className="services-row">
          <div className="service-card">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/ac00708f-84eb-4b7a-8ae2-7d6c2881fe6e" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">Rapid Prototyping</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card highlighted">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg highlighted">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/b4c8e385-be5c-4bc0-b170-c688d4083bdc" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">Design & Engineering</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text highlighted">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/a22f620f-4cad-45ef-8123-4597ed3dfc86" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/10fe9b44-cfbe-4f7d-aa87-65cc3e79d4de" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">Custom 3D Printing</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-row">
          <div className="service-card">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/38476bab-c1bb-455e-b7ab-1f52d2599b8c" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">3D Scanning</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/525a239c-07db-41e1-9d5d-fd7e531e06e3" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">Production Parts</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-card-content">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/4f2bf326-2df2-4d81-8662-039ba0aca739" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <div className="service-details">
                <div className="service-text">
                  <h3 className="service-title">Reverse Engineering</h3>
                  <p className="service-description">
                    Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                  </p>
                </div>
                <div className="service-link">
                  <p className="link-text">Learn More</p>
                  <div className="link-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17" 
                      alt="" 
                      width={20} 
                      height={20}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

