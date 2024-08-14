import React from "react";
import styles from "@/styles/RightSectionComponent.module.css"
import LoginComponent from "@/components/RightSection/LoginComponent";
import RegisterComponent from "@/components/RightSection/RegisterComponent";
import MonitorComponent from "@/components/RightSection/MonitorComponent";
import ProfileComponent from "@/components/RightSection/ProfileComponent";

export default function RightSectionComponent() {
    return (
      <div className={styles.rightSection}>

          <LoginComponent/>
          <RegisterComponent/>
          <MonitorComponent/>
          <ProfileComponent/>

      </div>
    );
}
