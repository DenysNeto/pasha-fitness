import SectionC from "@/app/components/SectionC";
import Image from "next/image";
import ImageSection2 from "@/app/assets/img/fitness_img/exercise1-removebg-preview.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Block2 = (props) => {
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });
  const { t } = useTranslation();
  return (
    <SectionC className="wrapper alt  spotlight style2">
      <div class="inner">
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
            class="content row">
            <div className=" col-6 col-12-xsmall">
              <h2 class="major">{t("block5.1")}</h2>

              <ul
                className={`animate__animated animate__slow  ${
                  isVisibleImg ? "animate__slideInDown" : "invissible"
                }`}
                ref={ref1}
                style={{ textAlign: "left" }}>
                <li>
                  {" "}
                  <strong>{t("block5.2")}</strong> <p>{t("block5.3")}</p>
                </li>
                <li>
                  {" "}
                  <strong>{t("block5.4")} </strong> <p> {t("block5.5")}</p>
                </li>
                <li>
                  {" "}
                  <strong>{t("block5.6")}</strong>
                  <p>{t("block5.7")}</p>
                </li>
                <li>
                  {" "}
                  <strong>{t("block5.8")}</strong>
                  <p>{t("block5.9")}</p>
                </li>
              </ul>
            </div>
            <div className="col-6 col-12-xsmall">
              <Image
                className={`animate__animated animate__slow  ${
                  isVisibleImg ? "animate__slideInUp" : "invissible"
                }`}
                style={{ maxWidth: "100%", height: "auto" }}
                src={ImageSection2}></Image>
            </div>
          </div>
        </div>
      </div>
    </SectionC>
  );
};

export default Block2;
