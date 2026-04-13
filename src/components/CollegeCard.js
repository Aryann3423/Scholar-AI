import React from 'react';

export default function CollegeCard({ college, onView, onSave }) {
  return (
    <div className="college-card" onClick={() => onView(college)}>
      <div className="college-banner" style={{ background: college.color }}>
        {college.emoji}
      </div>
      <div className="college-body">
        <div className="college-name">{college.name}</div>
        <div className="college-loc">📍 {college.location}</div>
        <div className="college-tags">
          {college.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="college-row">
          <div>
            <div className="fee-text">{college.fee}</div>
            <div className="rating-row">⭐ {college.rating}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="match-badge">{college.match}% match</span>
            <button
              className={`save-btn${college.saved ? ' saved' : ''}`}
              onClick={e => { e.stopPropagation(); onSave(college.id); }}
              title={college.saved ? 'Remove from saved' : 'Save college'}
            >
              {college.saved ? '♥' : '♡'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
