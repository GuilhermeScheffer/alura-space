import Tags from "../Tags";
import styles from './Gallery.module.scss'
import fotos from './fotos.json'
import Cards from "./Cards";
import { useState } from "react";

export default function Gallery() {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map(valor => valor.tag))] // Neste códigos nós extraímos a tag do arquivo json de fotos e colocacmos em um array. Para que não seja repetido essas tags, passamos o new Set e colocamos .. para espalhar dentro da lista

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) =>  {
            return foto.tag === tag;
        });
        setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
            <Cards itens={itens} styles={styles}/>
        </section>
    )
}