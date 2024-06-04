import SectionC from "@/app/components/SectionC";
import Image from "next/image";
import ImageSection3 from "@/app/assets/img/fitness_img/exercise2-removebg-preview.png";
import ImageArrowDown from "@/app/assets/img/fitness_img/arrowDown.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Block3 = (props) => {
  //className alt - right
  const { t } = useTranslation();
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });
  return (
    <SectionC className="wrapper spotlight style3">
      <div class="inner">
        <div
          style={{ display: "flex", flexDirection: "row" }}
          class="content row">
          <div className="col-6 col-12-xsmall">
            <h2 class="major"> {t("block3.first")}</h2>
            <p
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__zoomInUp" : "invissible"
              }`}>
              {t("block3.second")}
            </p>
          </div>
          <div className="col-6 col-12-xsmall">
            <Image
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__zoomInUp" : "invissible"
              }`}
              ref={ref1}
              style={{ maxWidth: "100%", height: "auto" }}
              src={ImageSection3}></Image>
          </div>
        </div>
        <Image
          id="arrow"
          className={`animate__animated animate__slow animate__infinite ${
            isVisibleImg ? "animate__shakeY" : "invissible"
          }`}
          style={{
            width: 600,
            height: "auto",
            position: "absolute",
            top: 400,
            zIndex: 10,
          }}
          src={ImageArrowDown}></Image>
      </div>
    </SectionC>
  );
};

export default Block3;
