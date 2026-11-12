"use client";

import './testimonials.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from '../i18n/i18n';

const STAR_ICONS = [
  'https://www.figma.com/api/mcp/asset/108c52b8-d6db-4e2d-970d-a7364c93424c',
  'https://www.figma.com/api/mcp/asset/936033c1-b875-4b0b-9614-615267dea1a7',
  'https://www.figma.com/api/mcp/asset/d3cdbdf1-eab1-4d44-9086-c6e75fb7bf98',
  'https://www.figma.com/api/mcp/asset/73596593-f8f3-40b3-bfaa-048bdcb5f6f7',
  'https://www.figma.com/api/mcp/asset/b05c6235-1927-47be-a507-c558a507d8c1',
];

const ARROW_ENABLED = 'https://www.figma.com/api/mcp/asset/3233c87b-acc3-4b12-aa8f-d382654a9e52';
const ARROW_DISABLED = 'https://www.figma.com/api/mcp/asset/16584371-a0c4-4475-be0e-1717e05df02e';

// To add a testimonial: add an entry here and matching `role` and `text` in both
// locale files under testimonials.items.<id>. Names are not translated. The arrows
// appear automatically once there are more than PAGE_SIZE entries.
const TESTIMONIALS = [
  { id: 'annette', name: 'Annette Black', avatar: 'https://www.figma.com/api/mcp/asset/31640cf4-8699-48b7-ad1c-bb366e6d5ce1' },
  { id: 'darlene', name: 'Darlene Robertson', avatar: 'https://www.figma.com/api/mcp/asset/4930e330-97fa-4d93-9331-a2d0fd970976' },
  { id: 'jerome', name: 'Jerome Bell', avatar: 'https://www.figma.com/api/mcp/asset/6578ae1f-7f00-4b61-bbfe-81f90cfa65c0' },
];

const PAGE_SIZE = 3;

const Testimonials = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);
  const visibleTestimonials = TESTIMONIALS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-title-section">
          <h2 className="testimonials-title">{t('testimonials.title')}</h2>
          <p className="testimonials-description">
            {t('testimonials.description')}
          </p>
        </div>
      </div>
      <div className="testimonials-grid">
        {visibleTestimonials.map(({ id, name, avatar }) => (
          <div className="testimonial-card" key={id}>
            <div className="testimonial-card-inner">
              <div className="testimonial-profile">
                <div className="testimonial-avatar">
                  <Image
                    src={avatar}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-name">{name}</p>
                  <p className="testimonial-role">{t(`testimonials.items.${id}.role`)}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                <div className="stars">
                  {STAR_ICONS.map((star) => (
                    <Image key={star} src={star} alt="" width={16} height={16} />
                  ))}
                </div>
                <p className="rating-text">5.0</p>
              </div>
              <p className="testimonial-text">
                {t(`testimonials.items.${id}.text`)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Only shown when there are more testimonials than fit on one page. */}
      {pageCount > 1 && (
        <div className="testimonials-pagination">
          <button
            type="button"
            className="pagination-button prev"
            aria-label={t('testimonials.previous')}
            disabled={page === 0}
            onClick={() => setPage((current) => Math.max(current - 1, 0))}
          >
            <Image
              src={page === 0 ? ARROW_DISABLED : ARROW_ENABLED}
              alt=""
              width={24}
              height={24}
              className="pagination-icon"
            />
          </button>
          <button
            type="button"
            className="pagination-button next"
            aria-label={t('testimonials.next')}
            disabled={page === pageCount - 1}
            onClick={() => setPage((current) => Math.min(current + 1, pageCount - 1))}
          >
            <Image
              src={page === pageCount - 1 ? ARROW_DISABLED : ARROW_ENABLED}
              alt=""
              width={24}
              height={24}
              className="pagination-icon"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
