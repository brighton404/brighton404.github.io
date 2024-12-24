// src/pages/Error404.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
            <Link to="/" style={styles.link}>Go back to Home</Link>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '8rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0',
    },
    link: {
        marginTop: '1rem',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: '#007bff',
        padding: '0.5rem 1rem',
        border: '1px solid #007bff',
        borderRadius: '5px',
        transition: 'all 0.3s',
    },
    linkHover: {
        backgroundColor: '#007bff',
        color: '#fff',
    },
};

export default Error404;
