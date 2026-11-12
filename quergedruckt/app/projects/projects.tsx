"use client";

import './projects.scss';
import Image from 'next/image';
import { useTranslation } from '../i18n/i18n';

const ARROW = 'https://www.figma.com/api/mcp/asset/a22f620f-4cad-45ef-8123-4597ed3dfc86';

type Project = { id: string; image: string };

// In the design, the image sits left of the text in the first row and right of it in the second.
const PROJECT_ROWS: { imageFirst: boolean; projects: Project[] }[] = [
  {
    imageFirst: true,
    projects: [
      { id: 'filament', image: 'https://www.figma.com/api/mcp/asset/ae8c3b1f-941c-4c8d-b717-8e28ba4c7ede' },
      { id: 'architecture', image: 'https://www.figma.com/api/mcp/asset/a64ea85a-f555-4c5e-b170-0ba09e00415a' },
    ],
  },
  {
    imageFirst: false,
    projects: [
      { id: 'rcCar', image: 'https://www.figma.com/api/mcp/asset/5f0b968f-9007-49c3-b0c3-762d7128253b' },
      { id: 'trophy', image: 'https://www.figma.com/api/mcp/asset/83be27e4-d397-4e82-8599-d9fe675135ef' },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects" id="projects">
      <div className="projects-bg"></div>
      <div className="projects-content">
        <div className="projects-header">
          <p className="section-label">{t('projects.label')}</p>
          <h2 className="projects-title">{t('projects.title')}</h2>
        </div>
        <div className="projects-grid">
          {PROJECT_ROWS.map(({ imageFirst, projects }, rowIndex) => (
            <div className="projects-row" key={rowIndex}>
              {projects.map(({ id, image }) => {
                const imageBlock = (
                  <div className="project-image">
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="project-img"
                    />
                  </div>
                );
                return (
                  <div className="project-card" key={id}>
                    <div className="project-card-content">
                      {imageFirst && imageBlock}
                      <div className="project-details">
                        <div className="project-text">
                          <h3 className="project-title">{t(`projects.items.${id}.title`)}</h3>
                          <p className="project-description">
                            {t(`projects.items.${id}.description`)}
                          </p>
                        </div>
                        <div className="project-link">
                          <p className="link-text">{t('common.learnMore')}</p>
                          <div className="link-arrow">
                            <Image
                              src={ARROW}
                              alt=""
                              width={20}
                              height={20}
                              className="arrow-icon"
                            />
                          </div>
                        </div>
                      </div>
                      {!imageFirst && imageBlock}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* TODO: "Discover More" is hidden until its destination is decided.
            <button className="btn-outline">Discover More</button> */}
      </div>
    </div>
  );
}

export default Projects;
