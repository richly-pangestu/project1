import React, { useState } from 'react';
import supabase from '@/lib/supabase';
import styles from '@/styles/landing.module.css'; // Import styles

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up:', data.user);
    }
  };

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Error logging in:', error.message);
    } else {
      console.log('User logged in:', data.user);
    }
  };

  return (
    <div className={styles.authFormContainer}>
      <h2 className={styles.authFormTitle}>Login or Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.authInput}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.authInput}
      />
      <div className={styles.authButtonContainer}>
        <button onClick={handleSignUp} className={styles.authButton}>Sign Up</button>
        <button onClick={handleLogin} className={styles.authButton}>Login</button>
      </div>
    </div>
  );
};

export default AuthForm;
