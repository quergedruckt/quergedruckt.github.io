import './faq.scss';
import Image from 'next/image';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-text">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
            </p>
          </div>
          <button className="btn-primary">Contact Us</button>
        </div>
        <div className="faq-items">
          <div className="faq-item expanded">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">How fast is production?</h3>
                <p className="faq-answer">
                  Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                </p>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/92878b1d-e5f5-49a8-9f00-5ea314170080" 
                  alt="" 
                  width={24} 
                  height={24}
                  className="faq-arrow"
                />
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">What materials do you offer?</h3>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">Can you print large parts?</h3>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">What about resale value?</h3>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">Do you provide design help?</h3>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question-wrapper">
              <div className="faq-question-content">
                <h3 className="faq-question">Is shipping available worldwide?</h3>
              </div>
              <div className="faq-icon">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207" 
                  alt="" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

