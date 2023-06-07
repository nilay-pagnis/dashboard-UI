import React from 'react'
import styles from "./dashboard.module.css"
import Image from 'next/image';
import Link from "next/link";
import Navbar from "../../components/navbar"
import Activities from "../../components/activities";
import TopProducts from "../../components/topProducts";
import Schedule from "../../components/schedule";
import dashboardImg from "../../assets/icons8-pie-chart-50.png";
import transactionImg from "../../assets/icons8-tag-50.png";
import settingImg from "../../assets/icons8-setting-50.png";
import scheduleImg from "../../assets/icons8-schedule-64.png";
import userImg from "../../assets/icons8-male-user-48.png";
import Info from '@/components/info';

const Dashboard = () => {
  return (
    <div className={styles.dashboard_main_container}>
      <div className={styles.dashboard_container}>
        <div className={styles.navigation}>
          <div className='text-4xl font-bold'>
            <Link href="/">Board.</Link>
          </div>
          <div className={styles.navigation_list}>
            <div className={styles.list}>
              <Image src={dashboardImg} alt='dashboard-img'></Image>
              <button>Dashboard</button>
            </div>
            <div className={styles.list}>
              <Image src={transactionImg} alt='transaction-img'></Image>
              <button>Transactions</button>
            </div>
            <div className={styles.list}>
              <Image src={scheduleImg} alt='schedule-img'></Image>
              <button>Schedules</button>
            </div>
            <div className={styles.list}>
              <Image src={userImg} alt='user-img'></Image>
              <button>Users</button>
            </div>
            <div className={styles.list}>
              <Image src={settingImg} alt='setting-img'></Image>
              <button>Settings</button>
            </div>
          </div>
          <br />
          <div className={styles.navigation_info}>
            <Link href='#'>Help</Link>
            <br />
            <br />
            <Link href='#'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.navbar_container}>
          <Navbar />
        </div>

        <div className={styles.info_container}>
          <Info />
        </div>

        <div className={styles.activity_container}>
          <Activities />
        </div>

        <div className={styles.topProducts_container}>
          <TopProducts />
        </div>

        <div className={styles.schedule_container}>
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;