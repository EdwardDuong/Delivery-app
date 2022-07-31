import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import Image from "next/dist/client/image";
import LeftA from "../../assets/arrowLeft.png";
import RightA from "../../assets/arrowRight.png";
import { useState } from "react";
export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      quantity === 1 ? null : setQuantity((prev) => prev - 1);
    }
  };
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            layout="fill"
            unoptimized
            obj="cover"
          />
        </div>
        {/* right side */}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>$ </span>{" "}
            {pizza.price[size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.SizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          {/* quantity counter */}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftA}
                height={20}
                width={20}
                onClick={() => handleQuantity()}
              />
              <span>{quantity}</span>
              <Image
                src={RightA}
                height={20}
                width={20}
                onClick={() => handleQuantity("add")}
              />
            </div>
          </div>
          {/* button */}
          <div className={`btn ${css.btn}`}>Add to cart</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current=='${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
