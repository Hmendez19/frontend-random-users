import  React from 'react';
import styles from "./Layout.module.css";
import UserSection from '../UserSection/UserSection';
import Header from '../../Shared/Views/Components/Header/Header';
import { AppName, DeveloperName, FooterDescription } from '../../Shared/Constants/Mixed';
import Footer from '../../Shared/Views/Components/Footer/Footer';

const Layout:React.FC = () => {
    return (
        <>
            <div className={`${styles['template']}`}>
                <Header classNames={styles} title={AppName}>
                    <ul className={`${styles['template__nav']}`}>
                        <li className={`${styles['template__nav-item']}`}>
                            <div>
                                <span className='active'>{DeveloperName}</span>
                            </div>
                        </li>
                    </ul>
                </Header>
                <main className={`${styles['template__main']}  ${styles['container']}  ${styles['container--vertical']}`}>
                   <section className={`${styles['template__section']}`}>
                     <UserSection />
                   </section>
                </main>
                <Footer classNames={styles} title={FooterDescription}/>
            </div>
        </>
    )
}


export default Layout;