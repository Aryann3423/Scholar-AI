import React, { useState, useRef } from 'react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const otpRefs = useRef([]);

  const handleSubmit = () => {
    if (!form.email || !form.password) { setError('Please fill all fields'); return; }
    setError('');
    if (isLogin) {
      onLogin({ name: 'Aryan Sharma', email: form.email }, false);
    } else {
      setShowOTP(true);
    }
  };

  // eslint-disable-next-line

  const handleOtpChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const n = [...otp]; n[i] = val; setOtp(n);
    if (val && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const handleVerify = () => {
    onLogin({ name: form.name || 'Student', email: form.email }, true);
  };

  return (
    <div className="auth-bg">
      <div className="auth-orb" style={{ width: 400, height: 400, background: '#4f46e5', top: -100, right: -100 }} />
      <div className="auth-orb" style={{ width: 300, height: 300, background: '#7c3aed', bottom: -80, left: -80 }} />
      <div className="auth-card">
        <div className="logo">✦ ScholarAI</div>
        <div className="auth-title">{isLogin ? 'Welcome back' : 'Create account'}</div>
        <div className="auth-sub">{isLogin ? 'Sign in to your college journey' : 'Start your personalized college journey'}</div>

        {!showOTP ? (
          <>
            {!isLogin && (
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input className="input-field" placeholder="Aryan Sharma" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
            )}
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input-field" type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <input className="input-field" type="password" placeholder="••••••••" value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            </div>
            {error && <div style={{ color: '#ef4444', fontSize: 13, marginBottom: 12 }}>{error}</div>}
            <button className="btn-primary" onClick={handleSubmit}>
              {isLogin ? 'Sign In →' : 'Send OTP →'}
            </button>
            <div className="auth-switch">
              {isLogin ? 'New here? ' : 'Already have an account? '}
              <span style={{color:'#a78bfa',cursor:'pointer'}} onClick={() => { setIsLogin(!isLogin); setShowOTP(false); setError(''); }}>
                {isLogin ? 'Create account' : 'Sign in'}
              </span>
            </div>
            {isLogin && (
              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#475569' }}>
                Demo: enter any email & password
              </div>
            )}
          </>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>
                Enter the 6-digit OTP sent to <strong style={{ color: '#a78bfa' }}>{form.email}</strong>
              </div>
              <div className="otp-row">
                {otp.map((v, i) => (
                  <input key={i} ref={el => otpRefs.current[i] = el} className="otp-input"
                    maxLength={1} value={v} onChange={e => handleOtpChange(i, e.target.value)} />
                ))}
              </div>
              <div style={{ fontSize: 12, color: '#475569', marginTop: 8 }}>Demo: enter any 6 digits</div>
            </div>
            <button className="btn-primary" onClick={handleVerify}>Verify & Continue →</button>
            <div className="auth-switch"><span style={{color:'#a78bfa',cursor:'pointer'}} onClick={() => setShowOTP(false)}>← Change email</span></div>
          </>
        )}
      </div>
    </div>
  );
}
