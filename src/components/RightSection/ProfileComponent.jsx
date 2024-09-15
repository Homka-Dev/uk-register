import React  from "react";
import styles from '@/styles/RightSectionComponent.module.css'
import { RiUserLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";

export default function ProfileComponent() {
    return (
        <div className={styles.sectionProfile}>
            <div className={styles.sectionName}>Профіль</div>
						<p className={styles.username}>IKENLO</p>
						<div className={styles.avatar}>50x50</div>
						<span className={styles.money}><LiaCoinsSolid className={styles.coin}/>100</span>
						<span className={styles.gameMoney}> <FaSackDollar className={styles.torbaCoin}/>2542</span>

						<ul className={styles.list}>
							<li className={styles.profileItem}> <RiUserLine className={styles.ItemIcons}/> Особистий кабінет</li>
							<li className={styles.profileItem}> <IoDiamondOutline className={styles.ItemIcons}/> Поповнення балансу</li>
							<li className={styles.profileItem}> <BsCurrencyDollar className={styles.ItemIcons}/> Купівля переваг</li>
							<li className={styles.profileItem}> <MdOutlineShoppingCart className={styles.ItemIcons}/> Магазин ресурсів</li>
							<li className={styles.profileItem}> <FaUserPlus className={styles.ItemIcons}/> Реферальна система</li>
							<li className={styles.profileItem}> <LiaPiggyBankSolid className={styles.ItemIcons}/> Задіяти промокод</li>
							<li className={styles.profileItem}> <VscSettings className={styles.ItemIcons}/> Налаштування</li>
						</ul>

						<button className={styles.profileButton}>Вихід</button>
				</div>
    );
}
