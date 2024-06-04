"use client";
import pashaFitnessLogo from "@/app/assets/img/pasha-fitness-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/hooks/LanguageContext";

const NavigationC = (props) => {
  //className alt - right
  const { t, changeLanguage } = useTranslation();
  return (
    <div id="wrapp" style={{ direction: "ltr !important" }}>
      <div>
        <Image
          style={{ height: "auto", width: "10vh", scale: 1.5 }}
          src={pashaFitnessLogo}></Image>
      </div>

      <div>
        <nav>
          <button
            onClick={() => {
              document.documentElement.dir = "ltr";
              changeLanguage("rus");
            }}
            style={{ marginRight: "20px" }}>
            RUS
          </button>
          <button
            onClick={() => {
              document.documentElement.dir = "rtl";
              changeLanguage("ils");
            }}
            style={{ marginRight: "20px" }}>
            HEB
          </button>

          <Link href="/login">
            <button style={{ marginRight: "20px", minWidth: "80px" }}>
              Kабинет
            </button>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        #wrapp {
          direction: ltr !important,
          height: 50px;
          width: 100%;
          background: rgba(53, 56, 73, 0.95);
          position: fixed;
          top: 0;
          left: 0;
              display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100000;
        }
      `}</style>
    </div>
  );
};

export default NavigationC;
