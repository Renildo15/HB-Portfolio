"use client";

import React, { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        if (res.ok) {
            router.push("/admin")
        } else {
            alert("Login inválido")
        }
    }

    return (
        <main className={styles.login}>
            <div className={styles.login_card}>
                <form action="" className={styles.login_form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" className={styles.login_input} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className={styles.login_input} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className={styles.login_button}>Login</button>
                </form>
            </div>
        </main>
    )
}