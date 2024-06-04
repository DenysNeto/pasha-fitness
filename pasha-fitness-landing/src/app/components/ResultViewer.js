import React, { useState } from "react";

const ResultViewer = ({ resultsData }) => {
  // Группировка фотографий по месяцам
  const groupedResults = resultsData.reduce((acc, result) => {
    const month = result.date.split("-")[1];
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(result);
    return acc;
  }, {});

  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Просмотр результатов</h2>
      {Object.entries(groupedResults).map(([month, photos], index) => (
        <MonthAccordion
          key={index}
          month={month}
          photos={photos}
          isOpen={index === openAccordionIndex}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const MonthAccordion = ({ month, photos, isOpen, toggleAccordion }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        style={{ cursor: "pointer", padding: "20px" }}
        onClick={toggleAccordion}>
        {getMonthName(month)} ({photos.length} фото)
      </button>
      {isOpen && (
        <div style={{ paddingTop: "20px" }}>
          {photos.map((photoSet, idx) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={idx}>
              <div key={idx} style={{ marginBottom: "20px" }}>
                <img
                  src={photoSet.photoUrl}
                  alt={`Результат ${idx + 1}`}
                  style={{ maxWidth: "50vw" }}
                />
                <p>Дата: {photoSet.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Функция для получения названия месяца
const getMonthName = (month) => {
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return monthNames[parseInt(month, 10) - 1];
};

export default ResultViewer;
