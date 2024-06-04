"use client";
import Image from "next/image";
import ImageSection2 from "@/app/assets/img/fitness_img/exercise3-removebg-preview.png";

import FormAskQuestions from "@/app/components/FormAskQuestions";
import Login from "@/app/components/Login";
import NavigationC from "@/app/components/NavigationC";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div>
        <Image src={ImageSection2}></Image>
        <Login></Login>
      </div>

      <style jsx>{`
        /* Ensure the parent container of the div uses flexbox to center its contents */
        body,
        html {
          height: 100%;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%; /* or any other width you prefer */
          height: 99vh; /* or any other height you prefer */
        }
      `}</style>
    </>
  );
}
