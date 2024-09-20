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
            <SectionTitle theme="dark" text="About StackNex Lab" highlight="About" />
          </div>
          <div className={styles.aboutSection__inner__content__info}>
            <div className={styles.aboutSection__inner__content__info__title}>
              <h1>
                About Us {" "}
              </h1>
            </div>
            <div className={styles.aboutSection__inner__content__info__desc}>
              <p>
              At StackNex Lab, we offer a comprehensive suite of services tailored to meet the unique needs of our clients. Our expertise spans across various digital domains, ensuring that we can provide comprehensive solutions for your business.

                <br />
                <br />
                We create robust apps, dynamic websites, and innovative digital products. Our full-service approach covers every step, ensuring seamless development and delivery.
              </p>
            </div>
            <div className={styles.aboutSection__inner__content__info__button}>
              <Link href={'https://wa.link/zip380'}>
                <PrimaryButton text="Lets Chat" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
