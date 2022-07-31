import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";
import Image from "next/dist/client/image";
export default function Menu({ pizzas }) {
  console.log(pizzas);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always </span>
        <span>Make You Fall In Love</span>
      </div>
      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <div className={css.imageWrapper}>
                <Image
                  loader={() => src}
                  src={src}
                  objectFit="cover"
                  layout="fill"
                  width={20}
                  height={20}
                />
              </div>
              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$ </span>
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}