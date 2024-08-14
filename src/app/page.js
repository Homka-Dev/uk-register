import Image from "next/image";
import NewsComponent from "@/components/MainContent/NewsComponent";
import styles from "@/styles/MainPage.module.css"

export default function Home() {
  return (
    <div className={styles.main}>
		<NewsComponent/>
        <NewsComponent/>
        <NewsComponent/>
        <NewsComponent/>

    </div>
  );
}
