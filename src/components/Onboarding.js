import React, { useState } from 'react';

const STEPS = [
  { id: 'countries', title: 'Where do you want to study?', hint: 'Select all that interest you', type: 'multi',
    options: [{ v: 'USA', e: '🇺🇸' }, { v: 'UK', e: '🇬🇧' }, { v: 'Canada', e: '🇨🇦' }, { v: 'Germany', e: '🇩🇪' }, { v: 'Australia', e: '🇦🇺' }, { v: 'Singapore', e: '🇸🇬' }, { v: 'India', e: '🇮🇳' }, { v: 'France', e: '🇫🇷' }] },
  { id: 'budget', title: "What's your annual budget?", hint: 'Including tuition and living expenses', type: 'slider', min: 5000, max: 100000, step: 1000 },
  { id: 'interests', title: 'What are your academic interests?', hint: 'Choose your top fields', type: 'multi',
    options: [{ v: 'Engineering', e: '⚙️' }, { v: 'Technology', e: '💻' }, { v: 'Business', e: '📊' }, { v: 'Medicine', e: '🏥' }, { v: 'Arts', e: '🎨' }, { v: 'Science', e: '🔬' }, { v: 'Law', e: '⚖️' }, { v: 'Design', e: '✏️' }] },
  { id: 'hobbies', title: 'What do you love outside academics?', hint: 'Your hobbies matter for college fit', type: 'multi',
    options: [{ v: 'Coding', e: '👨‍💻' }, { v: 'Music', e: '🎵' }, { v: 'Sports', e: '⚽' }, { v: 'Reading', e: '📚' }, { v: 'Travel', e: '✈️' }, { v: 'Art', e: '🖌️' }, { v: 'Gaming', e: '🎮' }, { v: 'Research', e: '🔭' }] },
  { id: 'gpa', title: "What's your academic GPA?", hint: "On a 4.0 scale (or we'll convert)", type: 'slider', min: 2.0, max: 4.0, step: 0.1 },
];

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ countries: [], budget: 30000, interests: [], hobbies: [], gpa: 3.5 });

  const cur = STEPS[step];
  const pct = (step / STEPS.length) * 100;

  const toggle = (field, val) => {
    setData(d => {
      const arr = d[field] || [];
      return { ...d, [field]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
    });
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else onComplete(data);
  };

  return (
    <div className="onboard-bg">
      <div style={{ padding: '24px 24px 0', maxWidth: 680, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div className="logo">✦ ScholarAI</div>
          <div style={{ fontSize: 13, color: '#64748b' }}>{step + 1} of {STEPS.length}</div>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="onboard-wrap">
        <div className="onboard-card">
          <div className="onboard-step">Step {step + 1}</div>
          <div className="onboard-q">{cur.title}</div>
          <div className="onboard-hint">{cur.hint}</div>

          {cur.type === 'multi' && (
            <div className="option-grid">
              {cur.options.map(o => (
                <div key={o.v} className={`option-card${(data[cur.id] || []).includes(o.v) ? ' selected' : ''}`} onClick={() => toggle(cur.id, o.v)}>
                  <span className="option-emoji">{o.e}</span>
                  {o.v}
                </div>
              ))}
            </div>
          )}

          {cur.type === 'slider' && (
            <div className="slider-wrap">
              <div className="slider-val">
                {cur.id === 'budget'
                  ? `$${Math.round(data.budget / 1000)}K/yr`
                  : `${parseFloat(data.gpa || 3.5).toFixed(1)} GPA`}
              </div>
              <input type="range" min={cur.min} max={cur.max} step={cur.step}
                value={data[cur.id]}
                onChange={e => setData(d => ({ ...d, [cur.id]: parseFloat(e.target.value) }))} />
              <div className="slider-labels">
                <span>{cur.id === 'budget' ? '$5K' : '2.0'}</span>
                <span>{cur.id === 'budget' ? '$100K+' : '4.0'}</span>
              </div>
            </div>
          )}

          <div className="nav-btns">
            {step > 0 && <button className="btn-ghost" onClick={() => setStep(s => s - 1)}>← Back</button>}
            <button className="btn-next" onClick={next}>
              {step === STEPS.length - 1 ? 'Next: Interest Quiz →' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
