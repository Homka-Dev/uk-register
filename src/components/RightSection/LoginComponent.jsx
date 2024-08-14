import React from "react";
import styles from '@/styles/RightSectionComponent.module.css';

export default function LoginComponent() {
    return (

            <div className={styles.section}>
                <div className={styles.sectionName}>Авторизація</div>
                <form className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        {/* <label htmlFor="username" className={styles.label}>Ім'я користувача</label> */}
                        <input type="text" id="username" name="username" className={styles.input} placeholder="Введіть ім'я користувача" />
                    </div>
                    <div className={styles.formGroup}>
                        {/* <label htmlFor="password" className={styles.label}>Пароль</label> */}
                        <input type="password" id="password" name="password" className={styles.input} placeholder="Введіть пароль" />
												<span className={styles.forget__password}>Забули пароль?</span>
                    </div>
											<button type="submit" className={styles.submitButton}>Увійти</button>
											<button type="submit" className={styles.registerButton}>Реєстрація</button>
                </form>
            </div>

    );
}
