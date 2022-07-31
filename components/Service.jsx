import Image from "next/image";
import css from "../styles/Service.module.css";
import image1 from "../assets/s1.png";
import image2 from "../assets/s2.png";
import image3 from "../assets/s3.png";
export default function Service() {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <span>WHAT WE SERVE</span>
        <span>YOUR FAVOURITE FOOD</span>
        <span>Delivery Partner</span>
      </div>
      <div className={css.services}>
        <div className={css.feature}>
          <Image src={image1} width={300} height={300} layout="intrinsic" />
          <span>Easy to Order</span>
          <span>You only need a few steps in food ordering</span>
        </div>
        <div className={css.feature}>
          <Image src={image2} width={300} height={300} layout="intrinsic" />
          <span>Easy to Order</span>
          <span>Delivery that is always on time even faster</span>
        </div>
        <div className={css.feature}>
          <Image src={image3} width={300} height={300} layout="intrinsic" />
          <span>Easy to Order</span>
          <span>Not only fast for us, quality is also number one</span>
        </div>
      </div>
    </div>
  );
}
