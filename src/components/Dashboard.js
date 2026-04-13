import React, { useState } from 'react';
import { COLLEGES, NOTIFICATIONS } from '../data';
import CollegeCard from './CollegeCard';
import CollegeDetail from './CollegeDetail';
import Chat from './Chat';

const NAV = [
  ['dashboard', '🏠', 'Dashboard'],
  ['colleges', '🎓', 'Colleges'],
  ['saved', '🔖', 'Saved'],
  ['chat', '💬', 'AI Chat'],
  ['notifications', '🔔', 'Alerts'],
  ['profile', '👤', 'Profile'],
];

function Toast({ msg, onClose }) {
  React.useEffect(() => { 
    const t = setTimeout(onClose, 3000); 
    return () => clearTimeout(t); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="toast">{msg}</div>;
}

export default function Dashboard({ user, onSignOut }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [colleges, setColleges] = useState(COLLEGES);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(null);
  const [chatInput, setChatInput] = useState('');

  const saved = colleges.filter(c => c.saved);
  const sorted = [...colleges].sort((a, b) => b.match - a.match);

  const saveToggle = (id) => {
    setColleges(cs => cs.map(c => c.id === id ? { ...c, saved: !c.saved } : c));
    const col = colleges.find(c => c.id === id);
    setToast(col?.saved ? 'Removed from saved' : `${col?.name} saved! ✨`);
  };

  const viewCollege = (c) => {
    setSelected(colleges.find(x => x.id === c.id));
    window.scrollTo(0, 0);
  };

  const goChat = (collegeName) => {
    setChatInput(`Tell me more about ${collegeName}`);
    setActiveNav('chat');
    setSelected(null);
  };

  const navigate = (id) => {
    setActiveNav(id);
    setSelected(null);
  };

  const renderPage = () => {
    if (selected) return (
      <CollegeDetail
        college={colleges.find(c => c.id === selected.id)}
        onBack={() => setSelected(null)}
        onSave={saveToggle}
        onChatAbout={goChat}
      />
    );

    if (activeNav === 'dashboard') return (
      <div>
        <div className="page-title">Good morning, {user?.name?.split(' ')[0]} 👋</div>
        <div className="page-sub">Here's your personalized college overview</div>
        <div className="stats-row">
          {[
            ['Colleges Matched', '8', 'Top global fits'],
            ['Saved', '' + saved.length, 'Your shortlist'],
            ['Profile Score', '87%', 'Strong profile'],
            ['Days Active', '14', 'Keep exploring'],
          ].map(([l, v, s]) => (
            <div key={l} className="stat-card">
              <div className="stat-label">{l}</div>
              <div className="stat-val">{v}</div>
              <div className="stat-sub">{s}</div>
            </div>
          ))}
        </div>
        <div className="activity-row">
          <div className="activity-card">
            <div className="section-title">Recent Activity</div>
            {[['Viewed MIT', '2h ago', '#a78bfa'], ['Saved Stanford', 'Yesterday', '#22c55e'], ['Chat: scholarships', 'Yesterday', '#60a5fa'], ['Completed onboarding', '3d ago', '#f59e0b']].map(([t, time, color]) => (
              <div key={t} className="activity-item">
                <div className="activity-dot" style={{ background: color }} />
                <div style={{ flex: 1, fontSize: 13, color: '#94a3b8' }}>{t}</div>
                <div style={{ fontSize: 11, color: '#475569' }}>{time}</div>
              </div>
            ))}
          </div>
          <div className="activity-card">
            <div className="section-title">Your Profile Tags</div>
            <div className="tag-cloud" style={{ marginTop: 8 }}>
              {['Engineering', 'Technology', 'USA', 'UK', 'Research', 'STEM', 'Innovation', 'Global'].map(t => (
                <span key={t} className="profile-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="section-title">Top Recommendations for You</div>
        <div className="colleges-grid">
          {sorted.slice(0, 4).map(c => (
            <CollegeCard key={c.id} college={c} onView={viewCollege} onSave={saveToggle} />
          ))}
        </div>
      </div>
    );

    if (activeNav === 'colleges') return (
      <div>
        <div className="page-title">All Colleges</div>
        <div className="page-sub">Sorted by your match score • {colleges.length} colleges</div>
        <div className="colleges-grid">
          {sorted.map(c => <CollegeCard key={c.id} college={c} onView={viewCollege} onSave={saveToggle} />)}
        </div>
      </div>
    );

    if (activeNav === 'saved') return (
      <div>
        <div className="page-title">Saved Colleges</div>
        <div className="page-sub">{saved.length} college{saved.length !== 1 ? 's' : ''} in your shortlist</div>
        {saved.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔖</div>
            <div style={{ fontSize: 16, color: '#94a3b8', marginBottom: 8 }}>No saved colleges yet</div>
            <div style={{ fontSize: 14 }}>Browse colleges and click ♡ to save them here</div>
            <button className="btn-next" style={{ marginTop: 20 }} onClick={() => navigate('colleges')}>Browse Colleges →</button>
          </div>
        ) : (
          <div className="colleges-grid">
            {saved.map(c => <CollegeCard key={c.id} college={c} onView={viewCollege} onSave={saveToggle} />)}
          </div>
        )}
      </div>
    );

    if (activeNav === 'chat') return (
      <Chat
        initialInput={chatInput}
        onInputConsumed={() => setChatInput('')}
      />
    );

    if (activeNav === 'notifications') return (
      <div>
        <div className="page-title">Notifications</div>
        <div className="page-sub">Stay updated on deadlines and opportunities</div>
        {NOTIFICATIONS.map(n => (
          <div key={n.id} className="notif-item">
            <div className="notif-icon" style={{ background: n.color }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <div className="notif-title">{n.title}</div>
              <div className="notif-desc">{n.desc}</div>
              <div className="notif-time">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    );

    if (activeNav === 'profile') return (
      <div>
        <div className="page-title">My Profile</div>
        <div className="page-sub">Your academic & personal summary</div>
        <div className="detail-card" style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="profile-avatar" style={{ margin: '0 auto 16px' }}>🎓</div>
          <div className="profile-name">{user?.name}</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>{user?.email}</div>
          <div style={{ marginTop: 16 }}><span className="match-badge">Profile 87% complete</span></div>
        </div>
        <div className="info-grid">
          {[
            ['Preferred Countries', 'USA, UK, Germany, Singapore'],
            ['Annual Budget', '$30,000/year'],
            ['Academic Interests', 'Engineering, Technology'],
            ['GPA', '3.8 / 4.0'],
            ['Hobbies', 'Coding, Research, Reading'],
            ['Profile Tags', 'STEM, Innovation, Global'],
          ].map(([l, v]) => (
            <div key={l} className="info-box">
              <div className="info-box-label">{l}</div>
              <div className="info-box-val">{v}</div>
            </div>
          ))}
        </div>
        <div className="detail-card">
          <div className="detail-section-title">Interest Tags</div>
          <div className="tag-cloud">
            {['Tech', 'Engineering', 'Innovation', 'Research', 'STEM', 'AI', 'Entrepreneurship', 'Leadership'].map(t => (
              <span key={t} className="profile-tag">{t}</span>
            ))}
          </div>
        </div>
        <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => setToast('Profile updated! ✨')}>
          Save Profile
        </button>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-logo">✦ ScholarAI</div>
        {NAV.map(([id, icon, label]) => (
          <button key={id} className={`nav-item${activeNav === id && !selected ? ' active' : ''}`} onClick={() => navigate(id)}>
            <span className="nav-icon">{icon}</span>
            {label}
            {id === 'saved' && saved.length > 0 && (
              <span style={{ marginLeft: 'auto', background: 'rgba(124,58,237,.3)', color: '#a78bfa', borderRadius: 10, padding: '1px 7px', fontSize: 11 }}>{saved.length}</span>
            )}
            {id === 'notifications' && (
              <span style={{ marginLeft: 'auto', background: 'rgba(239,68,68,.2)', color: '#ef4444', borderRadius: 10, padding: '1px 7px', fontSize: 11 }}>4</span>
            )}
          </button>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <button className="nav-item" onClick={onSignOut}>
            <span className="nav-icon">🚪</span>Sign Out
          </button>
        </div>
      </div>

      <div className="main-content">{renderPage()}</div>
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
