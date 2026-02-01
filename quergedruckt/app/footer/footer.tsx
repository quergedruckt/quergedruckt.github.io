import './footer.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image 
            src="/images/Quergedruckt.svg" 
            alt="Quergedruckt Logo" 
            width={200} 
            height={30}
          />
        </div>
        <div className="footer-navigation">
          <p className="footer-nav-item">Home</p>
          <div className="footer-dot"></div>
          <p className="footer-nav-item">About Us</p>
          <div className="footer-dot"></div>
          <p className="footer-nav-item">Services</p>
          <div className="footer-dot"></div>
          <p className="footer-nav-item">Gallery</p>
          <div className="footer-dot"></div>
          <p className="footer-nav-item">Faqs</p>
        </div>
        <div className="footer-social">
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
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright © 2025 quergedruckt, All rights reserved.</p>
        <div className="footer-links">
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
