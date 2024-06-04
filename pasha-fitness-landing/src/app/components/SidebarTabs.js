import React, { useState } from "react";
import PdfViewer from "@/app/components/PdfViewer";
import UploadImage from "@/app/components/UploadImage";
import ResultViewer from "@/app/components/ResultViewer";

const RowTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuOpen, setMenuOpen] = useState(false);

  const resultsData = [
    {
      photoUrl:
        "https://gratisography.com/wp-content/uploads/2024/03/gratisography-holographic-suit-1170x780.jpg",
      date: "2024-06-01",
    },
    {
      photoUrl:
        "https://gratisography.com/wp-content/uploads/2024/03/gratisography-holographic-suit-1170x780.jpg",
      date: "2024-07-01",
    },
    {
      photoUrl:
        "https://gratisography.com/wp-content/uploads/2024/03/gratisography-holographic-suit-1170x780.jpg",
      date: "2024-07-07",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="pdf-container">
            <h1>Программа питания</h1>
            <PdfViewer fileUrl="/eskem.pdf" />
          </div>
        );
      case "tab2":
        return (
          <div className="pdf-container">
            <h1>Программа тренировок</h1>
            <PdfViewer fileUrl="/eskem.pdf" />
          </div>
        );
      case "tab3":
        return (
          <div>
            <h1>Image Upload Example</h1>
            <UploadImage />
          </div>
        );
      case "tab4":
        return (
          <div>
            <h1>Photos report</h1>
            <ResultViewer resultsData={resultsData} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className={`tabs ${menuOpen ? "open" : ""}`}>
        <button
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("tab1");
            setMenuOpen(false);
          }}>
          Программа питания
        </button>

        <button
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("tab2");
            setMenuOpen(false);
          }}>
          Программа тренировок
        </button>

        <button
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("tab3");
            setMenuOpen(false);
          }}>
          Добавить фото
        </button>

        <button
          className={`tab ${activeTab === "tab4" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("tab4");
            setMenuOpen(false);
          }}>
          Фото отчеты
        </button>
      </div>
      <div className="content">{renderContent()}</div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }

        .tabs {
          gap: 50px;
          display: flex;
          justify-content: center;
          padding: 10px 0;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          overflow-x: auto;
          white-space: nowrap;
        }

        .tab {
          padding: 10px 20px;
          cursor: pointer;
          margin: 0 10px;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          text-align: center;
          color: #fff;
          flex-shrink: 0;
        }

        .tab:hover {
          transform: scale(1.2);
        }

        .active {
          background: #585b6a !important;
          background-color: #007bff;
          border-color: #007bff;
        }

        .content {
          max-height: 80%;
          overflow-y: hidden;
          margin-bottom: 50px;

          flex-grow: 1;
          padding: 20px;
          padding-bottom: 50px;
          display: flex;
          align-items: baseline;
          justify-content: center;
        }

        .pdf-container {
          height: 100%;
        }

        .menu-toggle {
          display: none;
          position: fixed;
          top: 0px;
          left: 10px;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001;
          color: white;
          padding: 10px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .tabs {
            position: fixed;
            top: 0;
            left: 0;
            width: 90%;
            height: 100vh;
            background-color: #3f4e85;
            flex-direction: column;
            align-items: flex-start;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 1000;
          }

          .tabs.open {
            transform: translateX(0);
          }

          .tab {
            margin: 5px 0;
            width: 100%;
            text-align: left;
            padding: 15px;
          }

          .content {
            padding: 10px;
          }

          .pdf-container {
            height: 80vh;
          }

          .menu-toggle {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .tab {
            padding: 8px 15px;
          }

          .content {
            padding: 5px;
          }

          .pdf-container {
            height: 70vh;
          }
        }
      `}</style>
    </div>
  );
};

export default RowTabs;
