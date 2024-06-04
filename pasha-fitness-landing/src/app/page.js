"use client";
import {
  handleFacebookClick,
  handleWhatsappClick,
  handleInstagramClick,
  handleTelegramClick,
  handlePhoneClick,
} from "@/app/hooks/ContactManager";
import Block1 from "@/app/blocks/mainPage/Block1";
import Block2 from "@/app/blocks/mainPage/Block2";
import Block3 from "@/app/blocks/mainPage/Block3";
import Block4 from "@/app/blocks/mainPage/Block4";
import Block5 from "@/app/blocks/mainPage/Block5";
import Block6 from "@/app/blocks/mainPage/Block6";
import FormAskQuestions from "@/app/components/FormAskQuestions";
import NavigationC from "@/app/components/NavigationC";
import { useTranslation } from "@/app/hooks/LanguageContext";
import "animate.css/animate.min.css";
import useTypewriter from "@/app/hooks/useTypewriter";

import ModalC from "@/app/components/ModalC";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { t, changeLanguage } = useTranslation();
  const displayedSubheader = useTypewriter(t("main.subheader"));
  return (
    <>
      <NavigationC></NavigationC>
      <section style={{ marginTop: "50px" }} id="banner">
        <div class="inner">
          <div class="logo">
            <span class="icon fa-gem"></span>
          </div>
          <h2 className="animate__animated animate__slow animate__slideInDown">
            {t("main.header")}
          </h2>
          <p>{displayedSubheader}</p>
          <button onClick={openModal} style={{ width: "100%" }}>
            {t("zapisatsa")}
          </button>
        </div>
      </section>
      <section id="wrapper">
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
        <Block4></Block4>
        <Block5></Block5>
        <Block6></Block6>

        <ModalC isOpen={isModalOpen} onClose={closeModal}>
          <FormAskQuestions />
        </ModalC>
        <h2 style={{ textAlign: "center" }} class="major">
          {t("main.clients")}
        </h2>
        <div
          style={{
            justifyContent: "center",
            padding: 20,
            margin: "0!important",
            gap: 20,
          }}
          className="row">
          <div class="col-5  col-12-xsmall video-container">
            <iframe
              src="https://drive.google.com/file/d/110VjkAJV-RXklKocd34NHcBYIIPL7Mxr/preview"
              allow="autoplay"></iframe>
          </div>
          <div class="col-5 col-12-xsmall  video-container">
            <iframe
              src="https://drive.google.com/file/d/1-DjM-KM5-PrEJoRzCxOSFvqZRFm_V4mV/preview"
              allow="autoplay"></iframe>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }} class="major">
          {t("main.motivation")}
        </h2>
        <div
          style={{
            justifyContent: "center",
            margin: "0!important",
            padding: 20,
            gap: 20,
          }}
          class="row">
          <div class="col-5 col-12-xsmall video-container">
            <iframe
              src="https://drive.google.com/file/d/10UEti-uMo7mSnegiyGgHXtoQqfeV6_KP/preview"
              allow="autoplay"></iframe>
          </div>
          <div class="col-5  col-12-xsmall video-container">
            <iframe
              src="https://drive.google.com/file/d/14Qh5fgV07_j7lCXpq63j_PxO4jKOaX43/preview"
              allow="autoplay"></iframe>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            margin: "0!important",
            padding: 20,
            gap: 20,
          }}
          class="row">
          <div class="col-5 col-12-xsmall  video-container">
            <iframe
              src="https://drive.google.com/file/d/1Bd-XtXiJx_qHedB7TJ9BfR_sTjsfXMRS/preview"
              allow="autoplay"></iframe>
          </div>
          <div class="col-5 col-12-xsmall video-container">
            <iframe
              src="https://drive.google.com/file/d/11w3UqjJboeNcVSHt0mYP2CXrFiiPgJ6A/preview"
              allow="autoplay"></iframe>
          </div>
        </div>
      </section>

      <section style={{ direction: "ltr" }} id="footer">
        <div class="inner">
          <FormAskQuestions></FormAskQuestions>

          <ul class="contact">
            <li
              style={{ cursor: "pointer" }}
              onClick={handlePhoneClick}
              class="icon solid fa-phone">
              +972 52-835-1116
            </li>
            <li onClick={handleTelegramClick} class="icon brands fa-telegram">
              <a href="#">Telegram</a>
            </li>
            <li onClick={handleWhatsappClick} class="icon brands fa-whatsapp">
              <a href="#">Whatsapp</a>
            </li>
            <li onClick={handleInstagramClick} class="icon brands fa-instagram">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
