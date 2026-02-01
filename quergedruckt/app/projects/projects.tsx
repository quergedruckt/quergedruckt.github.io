import './projects.scss';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-bg"></div>
      <div className="projects-content">
        <div className="projects-header">
          <p className="section-label">Our Projects</p>
          <h2 className="projects-title">High-quality 3D projects for all</h2>
        </div>
        <div className="projects-grid">
          <div className="projects-row">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/ae8c3b1f-941c-4c8d-b717-8e28ba4c7ede" 
                    alt="" 
                    fill
                    className="project-img"
                  />
                </div>
                <div className="project-details">
                  <div className="project-text">
                    <h3 className="project-title">Custom 3d printed filament</h3>
                    <p className="project-description">
                      Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                    </p>
                  </div>
                  <div className="project-link">
                    <p className="link-text">Learn More</p>
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
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/a64ea85a-f555-4c5e-b170-0ba09e00415a" 
                    alt="" 
                    fill
                    className="project-img"
                  />
                </div>
                <div className="project-details">
                  <div className="project-text">
                    <h3 className="project-title">Architectural Building Model</h3>
                    <p className="project-description">
                      Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                    </p>
                  </div>
                  <div className="project-link">
                    <p className="link-text">Learn More</p>
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
          </div>
          <div className="projects-row">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-details">
                  <div className="project-text">
                    <h3 className="project-title">Rc Car 3d Printed</h3>
                    <p className="project-description">
                      Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                    </p>
                  </div>
                  <div className="project-link">
                    <p className="link-text">Learn More</p>
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
                <div className="project-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/5f0b968f-9007-49c3-b0c3-762d7128253b" 
                    alt="" 
                    fill
                    className="project-img"
                  />
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-details">
                  <div className="project-text">
                    <h3 className="project-title">Champion Trophy Design</h3>
                    <p className="project-description">
                      Founded with passion for technology and design, quergedruckt stands for creative problem-solving and precision craftsmanship.
                    </p>
                  </div>
                  <div className="project-link">
                    <p className="link-text">Learn More</p>
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
                <div className="project-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/83be27e4-d397-4e82-8599-d9fe675135ef" 
                    alt="" 
                    fill
                    className="project-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-outline">Discover More</button>
      </div>
    </div>
  );
}

export default Projects;

