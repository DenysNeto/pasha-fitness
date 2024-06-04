"use client";

import NotificationC from "@/app/components/Notification/NotificationC";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/hooks/LanguageContext";
import Link from "next/link";

const FormAskQuestions = (props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 3000);
  };

  const onSubmit = (data) => {
    fetch(
      "https://enjoy-site-backend-production.up.railway.app/submit_webstudio",
      {
        // Local server endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        showNotification("your_request_sent_sucessfully", "success");
        //  console.log("Success:", data);
        // Handle success - e.g., display a success message
      })
      .catch((error) => {
        showNotification("ERROR", "error");
        // Handle error - e.g., display an error message
      });
  };

  let textRequired = "*required";

  // size - large ,  small

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="post" action="#">
        <div class="row ">
          <div className="col-12 col-12-xsmall">
            <label for="name">{t("login")}*</label>
            <input
              className={errors.name && "error-input"}
              {...register("name", { required: true })}
              type="text"
              placeholder=""
            />
            <p className="error-text">
              {" "}
              {errors.name && errors.name.type === "required" && textRequired}
            </p>
          </div>

          <div className="col-12 col-12-xsmall">
            <label>{t("password")} *</label>
            <input
              type="password"
              className={errors.phone && "error-input"}
              {...register("phone", { required: true })}
              placeholder=""
            />
          </div>

          <div className="col-12 col-12-xsmall padding-top-m">
            <Link href="/cabinet">
              <button
                style={{ width: "100%", marginTop: "20px" }}
                type="submit">
                {t("submit")}
              </button>
            </Link>
          </div>
        </div>
      </form>
      <NotificationC
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onClose={() =>
          setNotification({ ...notification, show: false })
        }></NotificationC>
    </>
  );
};

export default FormAskQuestions;
