import './testimonials.scss';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-title-section">
          <h2 className="testimonials-title">Our Happy Clients Says</h2>
          <p className="testimonials-description">
            Discover how Haven has transformed ordinary spaces into extraordinary living experiences, creating timeless interiors that clients cherish and proudly recommend.
          </p>
        </div>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-card-inner">
            <div className="testimonial-profile">
              <div className="testimonial-avatar">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/31640cf4-8699-48b7-ad1c-bb366e6d5ce1" 
                  alt="" 
                  width={40} 
                  height={40}
                />
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">Annette Black</p>
                <p className="testimonial-role">Web Designer</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="stars">
                <Image src="https://www.figma.com/api/mcp/asset/108c52b8-d6db-4e2d-970d-a7364c93424c" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/936033c1-b875-4b0b-9614-615267dea1a7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/d3cdbdf1-eab1-4d44-9086-c6e75fb7bf98" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/73596593-f8f3-40b3-bfaa-048bdcb5f6f7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/b05c6235-1927-47be-a507-c558a507d8c1" alt="" width={16} height={16} />
              </div>
              <p className="rating-text">5.0</p>
            </div>
            <p className="testimonial-text">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-inner">
            <div className="testimonial-profile">
              <div className="testimonial-avatar">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/4930e330-97fa-4d93-9331-a2d0fd970976" 
                  alt="" 
                  width={40} 
                  height={40}
                />
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">Darlene Robertson</p>
                <p className="testimonial-role">Marketing Coordinator</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="stars">
                <Image src="https://www.figma.com/api/mcp/asset/108c52b8-d6db-4e2d-970d-a7364c93424c" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/936033c1-b875-4b0b-9614-615267dea1a7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/d3cdbdf1-eab1-4d44-9086-c6e75fb7bf98" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/73596593-f8f3-40b3-bfaa-048bdcb5f6f7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/b05c6235-1927-47be-a507-c558a507d8c1" alt="" width={16} height={16} />
              </div>
              <p className="rating-text">5.0</p>
            </div>
            <p className="testimonial-text">
              Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-inner">
            <div className="testimonial-profile">
              <div className="testimonial-avatar">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/6578ae1f-7f00-4b61-bbfe-81f90cfa65c0" 
                  alt="" 
                  width={40} 
                  height={40}
                />
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">Jerome Bell</p>
                <p className="testimonial-role">Dog Trainer</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="stars">
                <Image src="https://www.figma.com/api/mcp/asset/108c52b8-d6db-4e2d-970d-a7364c93424c" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/936033c1-b875-4b0b-9614-615267dea1a7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/d3cdbdf1-eab1-4d44-9086-c6e75fb7bf98" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/73596593-f8f3-40b3-bfaa-048bdcb5f6f7" alt="" width={16} height={16} />
                <Image src="https://www.figma.com/api/mcp/asset/b05c6235-1927-47be-a507-c558a507d8c1" alt="" width={16} height={16} />
              </div>
              <p className="rating-text">5.0</p>
            </div>
            <p className="testimonial-text">
              Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials-pagination">
        <div className="pagination-button inactive">
          <Image 
            src="https://www.figma.com/api/mcp/asset/16584371-a0c4-4475-be0e-1717e05df02e" 
            alt="" 
            width={24} 
            height={24}
            className="pagination-icon"
          />
        </div>
        <div className="pagination-button active">
          <Image 
            src="https://www.figma.com/api/mcp/asset/3233c87b-acc3-4b12-aa8f-d382654a9e52" 
            alt="" 
            width={24} 
            height={24}
            className="pagination-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

