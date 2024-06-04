import SectionC from "@/app/components/SectionC";
import Image from "next/image";
import ImageSection2 from "@/app/assets/img/fitness_img/equipments-removebg-preview.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Block6 = (props) => {
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });
  const { t } = useTranslation();
  return (
    <SectionC className="wrapper spotlight style3">
      <div class="inner">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          className="content row">
          <div className="col-6 col-12-xsmall">
            <h2 class="major">{t("block6.1")} </h2>

            <ul
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__slideInDown" : "invissible"
              }`}
              style={{ textAlign: "left" }}>
              <li>
                {" "}
                <strong>{t("block6.2")}</strong> <p>{t("block6.3")}</p>
              </li>
              <li>
                {" "}
                <strong>{t("block6.4")}</strong> <p> {t("block6.5")}</p>
              </li>
              <li>
                {" "}
                <strong>{t("block6.6")}</strong>
                <p>{t("block6.7")}</p>
              </li>
              <li>
                {" "}
                <strong>{t("block6.8")}</strong>
                <p>{t("block6.9")}</p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-12-xsmall">
            <Image
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__slideInUp" : "invissible"
              }`}
              ref={ref1}
              style={{ maxWidth: "100%", height: "auto" }}
              src={ImageSection2}></Image>
          </div>
        </div>
      </div>
    </SectionC>
  );
};

export default Block6;
