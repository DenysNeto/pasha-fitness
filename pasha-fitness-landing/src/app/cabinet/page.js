"use client";
import {
  handleFacebookClick,
  handleWhatsappClick,
  handleInstagramClick,
  handleTelegramClick,
  handlePhoneClick,
} from "@/app/hooks/ContactManager";

import FormAskQuestions from "@/app/components/FormAskQuestions";
import NavigationC from "@/app/components/NavigationC";
import UploadImage from "@/app/components/UploadImage";
import RowTabs from "@/app/components/SidebarTabs";

import PdfViewer from "@/app/components/PdfViewer";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div style={{ position: "fixed", width: "97%" }}>
        <RowTabs />
      </div>
    </>
  );
}
