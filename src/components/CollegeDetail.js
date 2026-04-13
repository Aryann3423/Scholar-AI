import React from 'react';

export default function CollegeDetail({ college, onBack, onSave, onChatAbout }) {
  return (
    <div>
      <button className="back-btn" onClick={onBack}>← Back to colleges</button>

      <div className="detail-banner" style={{ background: college.color }}>
        {college.emoji}
      </div>

      <div className="detail-grid">
        {/* Left Column */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              {college.full}
            </div>
            <div style={{ color: '#64748b', fontSize: 14, marginBottom: 12 }}>📍 {college.location}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {college.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-section-title">Courses Offered</div>
            <div className="course-list">
              {college.courses.map(co => (
                <div key={co} className="course-item">
                  <span style={{ color: '#7c3aed' }}>▸</span>{co}
                </div>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-section-title">Student Reviews</div>
            {college.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-author">⭐⭐⭐⭐⭐ {r.author}</div>
                <div className="review-text">"{r.text}"</div>
              </div>
            ))}
          </div>

          <div className="detail-card">
            <div className="detail-section-title">Campus Map</div>
            <div style={{
              height: 180, borderRadius: 12,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8, color: '#64748b'
            }}>
              <div style={{ fontSize: 32 }}>🗺️</div>
              <div style={{ fontSize: 13 }}>{college.location}</div>
              <div style={{ fontSize: 11 }}>Map integration available with Google Maps API</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
            <div className="match-ring">
              <div className="match-pct">{college.match}%</div>
              <div className="match-lbl">Match</div>
            </div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 600, color: '#22c55e', marginBottom: 4 }}>
              Excellent Fit
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Based on your profile & interests</div>
          </div>

          <div className="detail-card">
            <div className="detail-section-title">Fee Structure</div>
            <table className="fee-table" style={{ width: '100%' }}>
              <tbody>
                <tr><td className="fee-label">Tuition</td><td className="fee-amount">{college.feeDetails.tuition}</td></tr>
                <tr><td className="fee-label">Housing</td><td className="fee-amount">{college.feeDetails.housing}</td></tr>
                <tr><td className="fee-label">Other</td><td className="fee-amount">{college.feeDetails.other}</td></tr>
                <tr>
                  <td className="fee-label" style={{ fontWeight: 600, color: '#e8eaf6' }}>Total</td>
                  <td className="fee-amount" style={{ color: '#a78bfa' }}>{college.fee}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="detail-card">
            <div className="detail-section-title">Quick Stats</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Rating', '⭐ ' + college.rating + '/5.0'],
                ['Country', '🌍 ' + college.country],
                ['Category', college.tags.join(', ')],
              ].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ color: '#64748b' }}>{l}</span>
                  <span style={{ color: '#94a3b8', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="btn-next"
            style={{ width: '100%', marginBottom: 10 }}
            onClick={() => onSave(college.id)}
          >
            {college.saved ? '💛 Saved' : '🔖 Save College'}
          </button>

          <button
            className="btn-ghost"
            style={{ width: '100%' }}
            onClick={() => onChatAbout(college.name)}
          >
            💬 Ask AI about this college
          </button>
        </div>
      </div>
    </div>
  );
}
