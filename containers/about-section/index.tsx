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
            <SectionTitle theme="dark" text="About Canvas" highlight="About" />
          </div>
          <div className={styles.aboutSection__inner__content__info}>
            <div className={styles.aboutSection__inner__content__info__title}>
              <h1>
                Introduction To Best <span>Digital Agency</span>{" "}
              </h1>
            </div>
            <div className={styles.aboutSection__inner__content__info__desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at
                arcu enim id gravida pulvinar. Tristique consectetur mi
                curabitur congue enim dignissim amet justo. Porta morbi nulla
                aliquet adipiscing. Sed diam mauris erat faucibus eu posuere
                ultricies quisque amet. Quam pellentesque in tristique
                <br />
                <br />
                sed neque scelerisque quam pulvinar. Risus dictum elementum
                lacus urna. Neque eget sagittis vulputate nam id morbi id.
                Aliquam molestie posuere pulvinar arcu
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
