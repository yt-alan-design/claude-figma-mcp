import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  label?: string;
  title: string;
  description?: string;
  tag?: string;
  buttonLabel?: string;
  image: StaticImageData | string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

export default function Card({
  label,
  title,
  description,
  tag,
  buttonLabel = "Read more",
  image,
  imageAlt = "",
  onButtonClick,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover" }} />
      </div>

      <div className={styles.body}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.footer}>
          {tag && <span className={styles.tag}>{tag}</span>}
          <button className={styles.button} onClick={onButtonClick}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
