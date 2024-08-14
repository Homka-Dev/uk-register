import React from 'react';
import styles from '@/styles/FooterComponent.module.css';

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <p>Приєднуйся до нас:</p>
                <p>Discord</p>
                <p>Telegram</p>
                <p>Tiktok</p>
            </section>
            <section className={styles.section}>
                {/* Можливо, тут додати контент або залишити порожнім */}
            </section>
            <section className={styles.section}>
                {/* Можливо, тут додати контент або залишити порожнім */}
            </section>
            <p className={styles.footerText}>
                <small>Horizone Project © 2024 by Ukraine Horizone is licensed under CC BY-NC-ND 4.0 </small>
            </p>
        </footer>
    );
}
