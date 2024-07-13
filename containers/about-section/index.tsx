import Image from "next/image";
import styles from "./style.module.scss";
import React, { FC } from "react";
import aboutBigger from "@/_assets/about_bigger.png";
import aboutSmall from "@/_assets/about_smal.png";
import SectionTitle from "@/components/Titles/SectionTitle";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Link from "next/link";
interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutSection__inner}>
        <div className={styles.aboutSection__inner__img}>
          <div>
            <Image
              src={aboutBigger}
              style={{ objectFit: "cover" }}
              alt="Section Image"
            />
          </div>
          <div>
            <Image
              src={aboutSmall}
              style={{ objectFit: "cover" }}
              alt="Section Image"
            />
          </div>
        </div>
        <div className={styles.aboutSection__inner__content}>
          <div className={styles.aboutSection__inner__title}>
            <SectionTitle theme="dark" text="About Quantum Force" highlight="About" />
          </div>
          <div className={styles.aboutSection__inner__content__info}>
            <div className={styles.aboutSection__inner__content__info__title}>
              <h1>
                Introduction To Best <span>Software House</span>{" "}
              </h1>
            </div>
            <div className={styles.aboutSection__inner__content__info__desc}>
              <p>
            We are expert digital product developers serving businesses of all sizes. Our reputation is built on reliability and excellence in engineering apps, websites, mobile solutions, widgets, e-commerce platforms, and enterprise portals. We stand behind every product we create, offering lifetime support for our high-quality work. Our commitment: delivering dependable digital solutions that drive your business forward.
                <br />
                <br />
                Cutting-edge digital solutions: From concept to launch
                We create robust apps, dynamic websites, and innovative digital products. Our full-service approach covers every step, ensuring seamless development and delivery.
              </p>
            </div>
            <div className={styles.aboutSection__inner__content__info__button}>
              <Link href={'#contact'}>
                <PrimaryButton text="Hire Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
