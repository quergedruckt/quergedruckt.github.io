import './contactUsPage.scss';
import Image from 'next/image';
import Footer from '../footer/footer';
import NavItem from '../navItems/nav-item';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-hero">
        <div className="contact-us-hero-bg">
          <div className="contact-us-hero-image">
            <Image 
              src="https://www.figma.com/api/mcp/asset/999b1912-7513-4cc8-952e-36b71c88a13d" 
              alt="" 
              fill
              className="contact-us-hero-img"
            />
          </div>
          <div className="contact-us-hero-overlay"></div>
        </div>
        <div className="contact-us-hero-content">
          <div className="contact-us-hero-header">
            <div className="contact-us-hero-logo">
              <Image 
                src="/images/Quergedruckt.svg" 
                alt="Quergedruckt Logo" 
                width={200} 
                height={30}
              />
            </div>
            <NavItem wrapperClass="contact-us-hero-navigation" />
            <div className="contact-us-hero-actions">
              <div className="language-select-wrapper">
                <div className="language-avatar">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/044a1fc5-b668-47f1-908e-2483f0389215" 
                    alt="" 
                    width={30} 
                    height={30}
                  />
                </div>
                <div className="language-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/defe665f-d38f-4295-8430-b4abbcc56a30" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <button className="btn-primary">Get a Quote</button>
            </div>
          </div>
          <div className="contact-us-hero-title">
            <h1 className="contact-us-hero-heading">Contact Us</h1>
            <p className="contact-us-hero-breadcrumb">
              <span>Home/ </span>
              <span className="bold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <div className="contact-us-main">
        <div className="contact-us-content">
          <div className="contact-us-header-section">
            <div className="contact-us-header-left">
              <div className="contact-us-label">
                <p className="label-text">Contact Us</p>
              </div>
              <div className="contact-us-title-section">
                <h2 className="contact-us-title">Let's enhance your excellent.</h2>
                <p className="contact-us-description">
                  Whether you're looking for personalized coaching, consulting services, or simply want to learn more about how we can help you grow your business, our team is here to assist.
                </p>
              </div>
            </div>
            <div className="contact-us-header-right">
              <p className="social-label">Also you can find me here:</p>
              <div className="social-icons">
                <div className="social-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/bc36a2f5-f91f-4d38-86a3-9669cc01d541" 
                    alt="" 
                    width={16} 
                    height={16}
                  />
                </div>
                <div className="social-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/ba79feee-0a3b-45be-a42f-e81ebed0a3d3" 
                    alt="" 
                    width={18} 
                    height={18}
                  />
                </div>
                <div className="social-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/a84c5402-7af8-4bbe-b711-c15cd54cf7f6" 
                    alt="" 
                    width={18} 
                    height={18}
                  />
                </div>
                <div className="social-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/b8b44530-a2db-4816-80a7-18475ce2415c" 
                    alt="" 
                    width={18} 
                    height={18}
                  />
                </div>
                <div className="social-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/2fcfcc93-896b-4da8-a600-a9eca491439c" 
                    alt="" 
                    width={20} 
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-us-form-container">
            <form className="contact-us-form">
              <div className="form-fields">
                <div className="form-row">
                  <div className="form-field">
                    <div className="input-with-label">
                      <div className="label-wrapper">
                        <p className="label-text">First name</p>
                        <p className="required">*</p>
                      </div>
                      <div className="input-field">
                        <input 
                          type="text" 
                          placeholder="Name" 
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="input-with-label">
                      <div className="label-wrapper">
                        <p className="label-text">Last name</p>
                        <p className="required">*</p>
                      </div>
                      <div className="input-field">
                        <input 
                          type="text" 
                          placeholder="Name" 
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <div className="input-with-label">
                    <div className="label-wrapper">
                      <p className="label-text">Email</p>
                      <p className="required">*</p>
                    </div>
                    <div className="input-field">
                      <input 
                        type="email" 
                        placeholder="Exampalyour@email.com" 
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <div className="input-with-label">
                    <div className="label-wrapper">
                      <p className="label-text">Phone number</p>
                    </div>
                    <div className="phone-input">
                      <div className="phone-dropdown">
                        <p className="country-code">US</p>
                        <Image 
                          src="https://www.figma.com/api/mcp/asset/10578d47-c789-4ca4-9b00-cf2f0924f56b" 
                          alt="" 
                          width={20} 
                          height={20}
                        />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="phone-input-field"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-field textarea-field">
                  <div className="input-with-label">
                    <div className="label-wrapper">
                      <p className="label-text">Message</p>
                      <p className="required">*</p>
                    </div>
                    <div className="textarea-container">
                      <textarea 
                        placeholder="Leave us a message..." 
                        className="textarea"
                        rows={4}
                      />
                      <div className="resize-handle">
                        <Image 
                          src="https://www.figma.com/api/mcp/asset/30443e89-66fa-4032-b8fa-2d12a361a351" 
                          alt="" 
                          width={12} 
                          height={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-checkbox">
                  <div className="checkbox-input">
                    <input type="checkbox" className="checkbox" />
                  </div>
                  <p className="checkbox-text">
                    You agree to our friendly <span className="link">Privacy policy</span>.
                  </p>
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-us-direct">
            <h3 className="direct-title">Reach Us Directly</h3>
            <div className="direct-cards">
              <div className="direct-card">
                <div className="direct-card-content">
                  <div className="direct-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/f55ce000-6325-4e40-aca6-cf980974e7a5" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <div className="direct-text">
                    <p className="direct-label">Phone number</p>
                    <p className="direct-value">+880 1234-567-89</p>
                  </div>
                </div>
              </div>
              <div className="direct-card">
                <div className="direct-card-content">
                  <div className="direct-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/1167661b-d57e-48d8-838f-a1052c52c9ff" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <div className="direct-text">
                    <p className="direct-label">Our Email</p>
                    <p className="direct-value">hello@mariq.health</p>
                  </div>
                </div>
              </div>
              <div className="direct-card">
                <div className="direct-card-content">
                  <div className="direct-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/dc4d7293-4e68-4ec2-8180-d57017c39cd2" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <div className="direct-text">
                    <p className="direct-label">Our Address</p>
                    <p className="direct-value">Binger Straße 122, 55128 Ingelheim am Rhein</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUsPage;

