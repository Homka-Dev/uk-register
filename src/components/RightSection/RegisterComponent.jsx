import React  from "react";
import styles from '@/styles/RightSectionComponent.module.css'

export default function RegisterComponent() {
    return (
        <div className={styles.section}>
            <div className={styles.sectionName}>Регістрація</div>
						<form className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        {/* <label htmlFor="username" className={styles.label}>Ім'я користувача</label> */}
                        <input type="text" id="username" name="username" className={styles.input} placeholder="Введіть ім'я користувача" />
                    </div>
                    <div className={styles.formGroup}>
                        {/* <label htmlFor="password" className={styles.label}>Пароль</label> */}
                        <input type="password" id="password" name="password" className={styles.input} placeholder="Введіть пароль" />
                        <input type="password" id="password" name="password" className={styles.input__repeat} placeholder="Повторіть пароль" />
                    </div>
											<button type="submit" className={styles.register__Button}>Зареєструватись</button>
                </form>
				</div>
    );
}
