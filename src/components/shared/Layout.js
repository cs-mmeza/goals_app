import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './Header.js'
import Footer from './Footer.js'
import Aside from './Aside.js';
import styles from './Layout.module.css'

function Layout({privato}) {

    return (
        <>
          <Header></Header>
          <main className={styles.main}>
            {privato && <Aside />}
            <section className={styles.section}>
              <Outlet></Outlet>
            </section>
          </main>
          <Footer></Footer>
        </>
      );
}

export default Layout;
