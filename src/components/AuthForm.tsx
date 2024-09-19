import React, { useState } from 'react';
import supabase from '@/lib/supabase';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.error('Error signing up:', error.message);
    else console.log('User signed up:', user);
  };

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) console.error('Error logging in:', error.message);
    else console.log('User logged in:', user);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthForm;
