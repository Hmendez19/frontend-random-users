import React,{memo} from "react";
import styles from "./Avatar.module.css";
import { ImageProp } from "../../../Interfaces/ImageProp";

const Avatar: React.FC<ImageProp> = memo(({src, alt,size}) => {
    return (
        <div className={`${styles.avatar} ${styles["avatar--"+size]} ${styles["avatar__img--"+size]}`}>
            <picture>
               <img className={`${styles['avatar__img']} ${styles["avatar__img--"+size]}`} src={src} alt={alt} />
            </picture>
        </div>
    )
})
  
export default Avatar;