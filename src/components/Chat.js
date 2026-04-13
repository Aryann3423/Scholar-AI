import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../data';

const QUICK_CHIPS = [
  'Best STEM colleges', 'Scholarship tips', 'Compare MIT vs Stanford',
  'Budget options in Europe', 'IIT Bombay vs NUS', 'Career prospects in CS'
];

export default function Chat({ initialInput, onInputConsumed }) {
  const [msgs, setMsgs] = useState([
    { role: 'ai', text: "Hi! I'm your AI College Counselor 🎓 Ask me anything about colleges, admissions, scholarships, or career paths. I'm here to guide you!", time: 'now' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);

  useEffect(() => {
    if (initialInput) {
      setInput(initialInput);
      onInputConsumed();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialInput]);

  const send = (msg) => {
    const text = (msg || input).trim();
    if (!text) return;
    setInput('');
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMsgs(m => [...m, { role: 'user', text, time: t }]);
    setTyping(true);
    setTimeout(() => {
      const resp = getAIResponse(text);
      setTyping(false);
      setMsgs(m => [...m, {
        role: 'ai', text: resp,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000 + Math.random() * 800);
  };

  const startVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported in this browser. Try Chrome!'); return; }
    const rec = new SR();
    rec.lang = 'en-US'; rec.interimResults = false;
    setListening(true);
    rec.onresult = e => { setInput(e.results[0][0].transcript); setListening(false); };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    rec.start();
  };

  return (
    <div>
      <div className="page-title">AI Counselor Chat</div>
      <div className="page-sub">Ask anything about colleges, admissions, or career paths</div>

      <div className="chat-wrap">
        <div className="chat-header">
          <div className="ai-avatar">🤖</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#e8eaf6' }}>ScholarAI Assistant</div>
            <div style={{ fontSize: 12, color: '#22c55e' }}>● Online — Context-aware AI</div>
          </div>
          <button onClick={() => setMsgs([{ role: 'ai', text: 'Chat cleared! How can I help you?', time: 'now' }])}
            style={{ marginLeft: 'auto', background: 'none', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: '#64748b', padding: '6px 12px', cursor: 'pointer', fontSize: 12 }}>
            Clear
          </button>
        </div>

        <div className="chat-msgs">
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              <div className="msg-bubble">{m.text}</div>
              <div className="msg-time">{m.time}</div>
            </div>
          ))}
          {typing && (
            <div className="typing-indicator">
              <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="chip-row">
          {QUICK_CHIPS.map(c => (
            <button key={c} className="chip" onClick={() => send(c)}>{c}</button>
          ))}
        </div>

        <div className="chat-input-row">
          <button className={`mic-btn${listening ? ' listening' : ''}`} onClick={startVoice} title="Voice input">
            🎙️
          </button>
          <textarea
            className="chat-input"
            placeholder="Ask about colleges, scholarships, deadlines..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            rows={1}
          />
          <button className="send-btn" onClick={() => send()}>➤</button>
        </div>
      </div>
    </div>
  );
}
