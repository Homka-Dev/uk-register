import React from 'react'
import Image from "next/image";
import styles from '@/styles/HeaderComponent.module.css'
import Circle from '/public/images/circle.png'
import Logo from '/public/images/Logo.svg'


export default function HeaderComponent() {
	return (
		<header className={styles.header}>
			<div className={styles.leftPanel}>
				<Image className={styles.circle} src={Circle} alt={"Woops"}/>
				<div className={styles.leftText}>

						Приєднуйся до гри
						прямо зараз!
				</div>
			</div>
			<Image className={styles.logo} src={Logo} alt={"Woops"} width={360} height={360}/>
			<div className={styles.centerpanel}>

			</div>
			<nav className={styles.navbar}>
				<ul className={styles.navlist}>
					<li className={styles.navitem}><a className={styles.navlink} href="/"><span className={styles.navtext}>Головна</span></a></li>
					<li className={styles.navitem}><a className={styles.navlink} href="/rules"><span  className={styles.navtext}>Правила</span></a></li>
					<li className={styles.navitem}><a className={styles.navlink} href="/servers"><span  className={styles.navtext}>Сервери</span></a></li>
					<li className={styles.navitem}><a className={styles.navlink} href="/shop"><span  className={styles.navtext}>Магазин</span></a></li>
				</ul>
			</nav>


		</header>
	)
}
