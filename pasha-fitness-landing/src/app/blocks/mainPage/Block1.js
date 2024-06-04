import SectionC from "@/app/components/SectionC";
import Image from "next/image";
import ImageSection1 from "@/app/assets/img/fitness_img/exercise4-removebg-preview.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Block1 = (props) => {
  const { t } = useTranslation();
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });
  return (
    <SectionC className="wrapper spotlight style1">
      <div class="inner">
        <div
          style={{ display: "flex", flexDirection: "row" }}
          class="content  row">
          <div className="col-6 col-12-xsmall">
            <h2 class="major ">{t("block1.first")} </h2>
            <p>{t("block1.second")}</p>
          </div>
          <div className="col-6 col-12-xsmall">
            <Image
              ref={ref1}
              className={`animate__animated animate__slow  ${
                isVisibleImg ? "animate__zoomIn" : "invissible"
              }`}
              style={{ maxWidth: "100%", height: "auto" }}
              src={ImageSection1}></Image>
          </div>
        </div>
      </div>
    </SectionC>
  );
};

export default Block1;
