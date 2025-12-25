"use client";

import React, { useState } from 'react';
import styles from './login.module.css';
import { redirect } from 'next/navigation';

export default function LoginCard() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here

        if(username === '' || password === '') {
            alert('Please enter both username and password');
            return;
        }

        // On successful login, redirect to admin dashboard

        redirect('/dashboard');

    }

    return (
        <main className={styles.login}>
            <div className={styles.login_card}>
                <form action="" className={styles.login_form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className={styles.login_input} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className={styles.login_input} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className={styles.login_button}>Login</button>
                </form>
            </div>
        </main>
    )
}