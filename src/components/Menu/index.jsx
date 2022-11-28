import home from '../../assets/icones/home-ativo.png'
import moreLiked from '../../assets/icones/mais-curtidas-inativo.png'
import mostSeen from '../../assets/icones/mais-vistas-inativo.png'
import news from '../../assets/icones/novas-inativo.png'
import surpriseMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={moreLiked} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostSeen} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={news} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}