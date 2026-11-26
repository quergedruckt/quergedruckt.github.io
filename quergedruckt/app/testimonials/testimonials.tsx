"use client";

import './testimonials.scss';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../i18n/i18n';

const STAR_COUNT = 5;

// To add a testimonial: add an entry here and matching `role` and `text` in both
// locale files under testimonials.items.<id>. Names are not translated. The arrows
// appear automatically once there are more than PAGE_SIZE entries.
// The section stays hidden while this list is empty. Only add real feedback, with the
// person's permission.
const TESTIMONIALS: { id: string; name: string; avatar: string }[] = [];

const PAGE_SIZE = 3;

const Testimonials = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  if (TESTIMONIALS.length === 0) return null;

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
                  {Array.from({ length: STAR_COUNT }, (_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
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
            <ArrowRight size={24} className="pagination-icon" />
          </button>
          <button
            type="button"
            className="pagination-button next"
            aria-label={t('testimonials.next')}
            disabled={page === pageCount - 1}
            onClick={() => setPage((current) => Math.min(current + 1, pageCount - 1))}
          >
            <ArrowRight size={24} className="pagination-icon" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
