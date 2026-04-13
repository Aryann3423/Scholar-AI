import React, { useState } from 'react';
import { SCENARIOS } from '../data';

export default function ScenarioGame({ onComplete }) {
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState([]);
  const [done, setDone] = useState(false);

  const handlePick = (newTags) => {
    const merged = [...tags, ...newTags];
    setTags(merged);
    if (step < SCENARIOS.length - 1) {
      setStep(s => s + 1);
    } else {
      setDone(true);
      setTimeout(() => onComplete(merged), 1500);
    }
  };

  const pct = (step / SCENARIOS.length) * 100;
  const sc = SCENARIOS[step];

  if (done) return (
    <div className="onboard-bg" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Profile Complete!</div>
        <div style={{ color: '#64748b', fontSize: 15 }}>Building your personalized college recommendations...</div>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#7c3aed', animation: `typingAnim 1.2s ${i * 0.2}s infinite` }} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="onboard-bg">
      <div style={{ padding: '24px 24px 0', maxWidth: 680, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div className="logo">✦ Interest Discovery</div>
          <div style={{ fontSize: 13, color: '#64748b' }}>Scenario {step + 1} of {SCENARIOS.length}</div>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="onboard-wrap">
        <div className="onboard-card">
          <div className="onboard-step">🎮 Interest Discovery Game</div>
          <div className="onboard-q">{sc.q}</div>
          <div className="onboard-hint">Your choice reveals your personality and ideal campus culture</div>

          <div className="option-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {sc.options.map((o, i) => (
              <div key={i} className="option-card" onClick={() => handlePick(o.tags)}
                style={{ textAlign: 'left', padding: '20px 16px', cursor: 'pointer' }}>
                <div style={{ fontSize: 13, color: '#7c3aed', marginBottom: 8, fontWeight: 600 }}>
                  Option {String.fromCharCode(65 + i)}
                </div>
                <div style={{ fontSize: 14, color: '#e8eaf6' }}>{o.text}</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {o.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
