"use client";

import NotificationC from "@/app/components/Notification/NotificationC";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/hooks/LanguageContext";

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
      <h2 class="major">{t("get_in_touch")}</h2>
      <form
        style={{ scale: 0.9 }}
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        action="#">
        <div class="row ">
          <div className="col-12 col-12-xsmall">
            <label for="name">{t("name")} *</label>
            <input
              className={errors.name && "error-input"}
              {...register("name", { required: true })}
              type="text"
              placeholder={t("name")}
            />
            <p className="error-text">
              {" "}
              {errors.name && errors.name.type === "required" && textRequired}
            </p>
          </div>

          <div className="col-12 col-12-xsmall">
            <label>{t("phone")} *</label>
            <input
              className={errors.phone && "error-input"}
              {...register("phone", { required: true })}
              type="text"
              placeholder={t("phone")}
            />

            <p className="error-text">
              {errors.phone && errors.phone.type === "required"
                ? textRequired
                : errors.phone &&
                  errors.phone.type === "pattern" &&
                  "*Invalid phone"}
            </p>
          </div>

          <div className="col-12 col-12-xsmall">
            <label>{t("additional_comments")}</label>
            <textarea
              className={errors.comments && "error-input"}
              {...register("comments", {})}
              name={t("additional_comments")}
              id="comments"
              placeholder={t("additional_comments")}
              rows="6"></textarea>
          </div>
          <p className="error-text">
            {errors.comments &&
              errors.comments.type === "required" &&
              textRequired}
          </p>

          <div className="col-12 col-12-xsmall padding-top-m">
            <button style={{ width: "100%" }} type="submit">
              {t("submit")}
            </button>
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
