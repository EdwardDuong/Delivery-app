import css from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza from "../assets/p1.jpg";
export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>More than faster</span>
          <Image src={Cherry} width={40} height={25} />
        </div>
        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>
        <span className={css.miniText}>
          Our Mission is to filling your tummy with delicious food and with fast
          and free delivery
        </span>
        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>
      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} layout="intrinsic" />
        </div>
        <div className={css.contact}>
          <span>Contact us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>
        <div className={css.Pizza}>
          <div>
            <Image src={Pizza} objectFit="cover" layout="intrinsic" />
          </div>
          <div className={css.details}>
            <span>SPECIAL</span>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 17.5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
