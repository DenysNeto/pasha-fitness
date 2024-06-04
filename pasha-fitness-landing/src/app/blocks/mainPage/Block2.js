import SectionC from "@/app/components/SectionC";
import Image from "next/image";
import ImageSection2 from "@/app/assets/img/fitness_img/exercise3-removebg-preview.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Block2 = (props) => {
  //className alt - right
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });

  const { t } = useTranslation();
  return (
    <SectionC className="wrapper alt  spotlight style2">
      <div class="inner">
        <div
          style={{ display: "flex", flexDirection: "row-reverse" }}
          class="content row">
          <div className="col-6 col-12-xsmall">
            <h2 class="major">{t("block2.first")}</h2>
            <p
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__bounceIn" : "invissible"
              }`}>
              {t("block2.second")}
            </p>
          </div>
          <div className="col-6 col-12-xsmall">
            <Image
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__backInRight" : "invissible"
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

export default Block2;
