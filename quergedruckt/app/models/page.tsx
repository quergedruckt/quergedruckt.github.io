import './modelsPage.scss';
import Image from 'next/image';
import Footer from '../footer/footer';
import NavItem from '../navItems/nav-item';

const ModelsPage = () => {
  return (
    <div className="models-page">
      <div className="models-hero">
        <div className="models-hero-bg">
          <div className="models-hero-image">
            <Image 
              src="https://www.figma.com/api/mcp/asset/431ed13e-3e23-415c-ac40-5b7f0210c263" 
              alt="" 
              fill
              className="models-hero-img"
            />
          </div>
          <div className="models-hero-overlay"></div>
        </div>
        <div className="models-hero-content">
          <div className="models-hero-header">
            <div className="models-hero-logo">
              <Image 
                src="/images/Quergedruckt.svg" 
                alt="Quergedruckt Logo" 
                width={200} 
                height={30}
              />
            </div>
            <NavItem wrapperClass="models-hero-navigation" />
            <div className="models-hero-actions">
              <div className="language-select-wrapper">
                <div className="language-avatar">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/e183b8b5-97cf-4075-88d4-0cca2e34c4fb" 
                    alt="" 
                    width={30} 
                    height={30}
                  />
                </div>
                <div className="language-icon">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/80a8eae5-b15a-48ea-9d5a-d50373f5e275" 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <button className="btn-primary">Get a Quote</button>
            </div>
          </div>
          <div className="models-hero-title">
            <h1 className="models-hero-heading">3D Models</h1>
            <p className="models-hero-breadcrumb">
              <span>Home/ </span>
              <span className="bold">3D Models</span>
            </p>
          </div>
        </div>
      </div>

      <div className="models-main">
        <div className="models-intro">
          <div className="models-intro-bg"></div>
          <div className="models-intro-ellipse">
            <Image 
              src="https://www.figma.com/api/mcp/asset/8873ac79-a73f-4eb3-9454-96e0ec4678be" 
              alt="" 
              fill
              className="models-intro-ellipse-img"
            />
          </div>
          <div className="models-intro-content">
            <h2 className="models-intro-title">3D Models</h2>
            <p className="models-intro-description">
              Whether you're looking to enhance your 3D printing experience with accessories or need to replace a printer part with a printed one, we have you covered. You can download and print models from a wide selection available just a click away.
            </p>
          </div>
        </div>

        <div className="models-content">
          <div className="models-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-section-header">
                <p className="sidebar-section-title">Categories</p>
              </div>
              <div className="sidebar-section-content">
                <div className="sidebar-item active">
                  <p className="sidebar-item-text">All Models</p>
                </div>
                <div className="sidebar-category">
                  <div className="sidebar-category-header">
                    <p className="sidebar-item-text">3D Printer</p>
                    <div className="sidebar-arrow expanded">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                        alt="" 
                        width={24} 
                        height={24}
                        className="arrow-icon"
                      />
                    </div>
                  </div>
                  <div className="sidebar-category-items">
                    <div className="sidebar-item nested active">
                      <p className="sidebar-item-text">3D Printer Accessories</p>
                    </div>
                    <div className="sidebar-item nested">
                      <p className="sidebar-item-text">3D Printer Parts</p>
                    </div>
                    <div className="sidebar-item nested">
                      <p className="sidebar-item-text">Test Models</p>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Art & Design</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Costumes & Accessories</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Education</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Fashion & DIY</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Household</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Miniatures</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Props & Cosplays</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Tools & Games</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Generatives 3D Modes</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-section-header">
                <p className="sidebar-section-title">Model Tag</p>
              </div>
              <div className="sidebar-tags">
                <div className="tag-row">
                  <div className="tag">Art & Design</div>
                  <div className="tag">Exclusive</div>
                  <div className="tag">CyberBrick</div>
                </div>
                <div className="tag-row">
                  <div className="tag">Maker`s Supply</div>
                  <div className="tag">Customizable</div>
                </div>
                <div className="tag">Parametric</div>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-section-header">
                <p className="sidebar-section-title">Print Profile</p>
              </div>
              <div className="sidebar-section-content">
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Printer</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-category">
                  <div className="sidebar-category-header">
                    <p className="sidebar-item-text">Nozzle Diameter</p>
                    <div className="sidebar-arrow expanded">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/925e27f2-557c-4be0-88f7-00c660ce23af" 
                        alt="" 
                        width={24} 
                        height={24}
                        className="arrow-icon"
                      />
                    </div>
                  </div>
                  <div className="sidebar-tags">
                    <div className="tag-row">
                      <div className="tag">0.2mm</div>
                      <div className="tag">0.4mm</div>
                      <div className="tag">0.6mm</div>
                      <div className="tag">0.8mm</div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-category">
                  <div className="sidebar-category-header">
                    <p className="sidebar-item-text">Color</p>
                    <div className="sidebar-arrow expanded">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                        alt="" 
                        width={24} 
                        height={24}
                        className="arrow-icon"
                      />
                    </div>
                  </div>
                  <div className="sidebar-tags">
                    <div className="tag-row">
                      <div className="tag">Solid Color</div>
                      <div className="tag">Multicolor</div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Print Time</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
                <div className="sidebar-item">
                  <p className="sidebar-item-text">Total Weight</p>
                  <div className="sidebar-arrow">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/b5c2dbf1-f3d1-4ca6-8d89-e2645c965301" 
                      alt="" 
                      width={24} 
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-section-header">
                <p className="sidebar-section-title">File type</p>
              </div>
              <div className="sidebar-tags">
                <div className="tag-row">
                  <div className="tag">All Types</div>
                  <div className="tag">3D Model Files</div>
                  <div className="tag">G-code Print</div>
                </div>
                <div className="tag">SLA Print Files</div>
              </div>
            </div>

            <button className="sidebar-reset">Reset All Filters</button>
          </div>

          <div className="models-grid-container">
            <div className="models-grid">
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/a018fc34-bac4-46b8-a920-1595a706d3ca" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">H2 simple AMS Flipper</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/c763124b-fec6-4700-9528-f70e4d7f541d" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">openGrid Core One Side Panel</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button active">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/dcbc60e8-b978-409f-b2ff-2d8ecb7f2701" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Flexible Chili Pepper keychain</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/978b3067-b131-40dc-87a3-b4453901c4b5" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Tapo Gundam Original Skin</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/4915ae3a-efac-49cb-a833-65fdf7710b47" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Prusa.MK4</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/950d9d45-987d-4317-b1be-3d3f804cc037" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Skull Bowl (High Capacity)</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/42f3f80e-3d18-4c63-acae-70c4b09d20fe" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">mechanical Godzilla</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/5560351e-30a6-4c26-b7d2-1c3c55cf23f8" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Filament Enclosure</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
              <div className="model-card">
                <div className="model-card-image">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/4903f1b8-00c3-48c4-85cd-3719f8ac8b13" 
                    alt="" 
                    fill
                    className="model-card-img"
                  />
                  <div className="model-card-icon">
                    <Image 
                      src="https://www.figma.com/api/mcp/asset/c436348a-89e5-4fed-b40b-ebf463fedd88" 
                      alt="" 
                      width={40} 
                      height={40}
                    />
                  </div>
                </div>
                <div className="model-card-content">
                  <h3 className="model-card-title">Clay Calloway Lion from the....</h3>
                  <p className="model-card-designer">Design by quergedruckt</p>
                  <div className="model-card-footer">
                    <div className="model-card-downloads">
                      <Image 
                        src="https://www.figma.com/api/mcp/asset/809c7cd4-69d5-4863-8557-1d25ee9d3a3f" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                      <p className="download-count">405</p>
                    </div>
                    <button className="model-card-button">Details</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-pagination">
              <button className="pagination-button">
                <Image 
                  src="https://www.figma.com/api/mcp/asset/e16646d7-84e7-4ea8-b050-a7cf4ec0784c" 
                  alt="" 
                  width={16} 
                  height={16}
                />
                <p className="pagination-text">Back</p>
              </button>
              <div className="pagination-pages">
                <div className="pagination-page">
                  <p className="pagination-number">1</p>
                </div>
                <div className="pagination-page active">
                  <p className="pagination-number active">2</p>
                </div>
                <div className="pagination-page">
                  <p className="pagination-number">3</p>
                </div>
                <div className="pagination-page">
                  <p className="pagination-number">4</p>
                </div>
                <div className="pagination-page">
                  <Image 
                    src="https://www.figma.com/api/mcp/asset/1ab38585-bcbf-4a28-be55-ab5d85183287" 
                    alt="" 
                    width={16} 
                    height={16}
                  />
                </div>
                <div className="pagination-page">
                  <p className="pagination-number">25</p>
                </div>
              </div>
              <button className="pagination-button">
                <p className="pagination-text">Next</p>
                <Image 
                  src="https://www.figma.com/api/mcp/asset/819d9e11-0dc0-44fc-a91e-5c3b6ad9d8bc" 
                  alt="" 
                  width={16} 
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ModelsPage;

