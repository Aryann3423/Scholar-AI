import React, { useState } from 'react';
import './index.css';
import Auth from './components/Auth';
import Onboarding from './components/Onboarding';
import ScenarioGame from './components/ScenarioGame';
import Dashboard from './components/Dashboard';

export default function App() {
  const [screen, setScreen] = useState('auth'); // auth | onboarding | scenario | dashboard
  const [user, setUser] = useState(null);

  const handleLogin = (userData, isNew) => {
    setUser(userData);
    setScreen(isNew ? 'onboarding' : 'dashboard');
  };

  const handleOnboarding = (data) => {
    setUser(u => ({ ...u, onboardData: data }));
    setScreen('scenario');
  };

  const handleScenario = (tags) => {
    setUser(u => ({ ...u, tags }));
    setScreen('dashboard');
  };

  const handleSignOut = () => {
    setUser(null);
    setScreen('auth');
  };

  if (screen === 'auth') return <Auth onLogin={handleLogin} />;
  if (screen === 'onboarding') return <Onboarding onComplete={handleOnboarding} />;
  if (screen === 'scenario') return <ScenarioGame onComplete={handleScenario} />;
  return <Dashboard user={user} onSignOut={handleSignOut} />;
}
