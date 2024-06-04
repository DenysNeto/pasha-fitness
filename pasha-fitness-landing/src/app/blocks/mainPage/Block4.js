import Image from "next/image";
import pashaFitnessLogo from "@/app/assets/img/pasha-fitness-logo.png";
import { useTranslation } from "@/app/hooks/LanguageContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
const Block4 = (props) => {
  const { t } = useTranslation();
  const [ref1, isVisibleImg] = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <div>
      <div
        style={{ margin: "0!important", direction: "ltr !important" }}
        className="row">
        <div className="col-6 col-12-xsmall video-container">
          <iframe
            src="https://drive.google.com/file/d/1_hPAgczCVRaWif0d_qDnWvTkBr4QZuIk/preview"
            allow="autoplay"></iframe>
        </div>
        <div className="col-5 col-12-xsmall">
          <Image
            className={`animate__animated animate__slow  ${
              isVisibleImg ? "animate__bounceIn" : "invissible"
            }`}
            ref={ref1}
            style={{ maxWidth: "100%", height: "auto" }}
            src={pashaFitnessLogo}></Image>
        </div>
      </div>

      {/* Zapisatsa */}
      <div className="inner" style={{ width: "100%", padding: "20px" }}>
        <button style={{ width: "100%", scale: "1 !important" }}>
          {t("zapisatsa")}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .row {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Block4;
