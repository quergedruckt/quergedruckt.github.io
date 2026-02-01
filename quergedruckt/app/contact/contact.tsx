import './contact.scss';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-header">
            <div className="contact-badge">
              <p className="badge-text">Contact Us</p>
            </div>
            <div className="contact-title-section">
              <h2 className="contact-title">Let's enhance your excellent enterprise with an amazing website</h2>
              <p className="contact-description">
                For every prosperous enterprise, a proficient website is necessary, and I'm the expert for it. Contact me now, let's kick-start!
              </p>
            </div>
          </div>
          <div className="contact-social">
            <p className="social-label">Also you can find me here:</p>
            <div className="social-icons">
              <div className="social-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/ec41deb2-edd3-4c36-993c-7f056db03b35" 
                  alt="" 
                  width={18} 
                  height={18}
                />
              </div>
              <div className="social-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/2a508c81-ed63-4e4c-aca1-d45907b05ac3" 
                  alt="" 
                  width={20} 
                  height={20}
                />
              </div>
              <div className="social-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/15fce118-2e81-4996-b00b-23408711200d" 
                  alt="" 
                  width={20} 
                  height={20}
                />
              </div>
              <div className="social-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/791a3252-461e-48b8-bf68-3e0024e745ee" 
                  alt="" 
                  width={20} 
                  height={20}
                />
              </div>
              <div className="social-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/4a506562-1146-4b49-94f0-44f9cb5080fe" 
                  alt="" 
                  width={20} 
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <div className="field-label">
                  <p className="label-text">First name</p>
                  <p className="label-required">*</p>
                </div>
                <div className="field-input">
                  <p className="input-placeholder">First name</p>
                </div>
              </div>
              <div className="form-field">
                <div className="field-label">
                  <p className="label-text">Last name</p>
                  <p className="label-required">*</p>
                </div>
                <div className="field-input">
                  <p className="input-placeholder">Last name</p>
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                <p className="label-text">Email</p>
                <p className="label-required">*</p>
              </div>
              <div className="field-input">
                <p className="input-placeholder">you@email.com</p>
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                <p className="label-text">Phone number</p>
              </div>
              <div className="field-input phone">
                <div className="phone-prefix">
                  <p className="prefix-text">US</p>
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/df8b9635-b4d0-4fe9-99c9-e12723f4862f" 
                    alt="" 
                    width={20} 
                    height={20}
                  />
                </div>
                <p className="input-placeholder">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="form-field message">
              <div className="field-label">
                <p className="label-text">Message</p>
                <p className="label-required">*</p>
              </div>
              <div className="field-input message-input">
                <p className="input-placeholder">Leave us a message...</p>
                <div className="message-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/6c3d6f4f-afff-4ca7-a9d5-dc6d3ca10e1b" 
                    alt="" 
                    width={12} 
                    height={12}
                  />
                </div>
              </div>
            </div>
            <div className="form-checkbox">
              <div className="checkbox"></div>
              <p className="checkbox-text">
                You agree to our friendly <span className="link">Privacy policy</span>.
              </p>
            </div>
            <button className="btn-submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

