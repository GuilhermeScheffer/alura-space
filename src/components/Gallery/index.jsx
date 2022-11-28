import Tags from "../Tags";
import styles from './Gallery.module.scss'
import fotos from './fotos.json'

export default function Gallery() {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__lista}>

            </ul>
        </section>
    )
}