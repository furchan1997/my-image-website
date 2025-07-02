import { Formik, useFormik } from "formik";
import joi from "joi";
import { useAdmin } from "../context/adminContext";
import Input from "../components/Input";
import SelectComponent from "../components/SelectComponent";
import {
  websiteTypesMap,
  goalOfProject,
  budget,
  features,
  targetAudience,
  entriesOpt,
} from "../common/ClientOptions";
import Select from "react-select";

function CreateOffer() {
  const { error, createOffer, successMsg, loading } = useAdmin();

  const form = useFormik({
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,

    initialValues: {
      fullName: "",
      phone: "",
      websiteType: [],
      otherSiteType: "",
      goalOfProject: [],
      otherGoleProject: "",
      targetAudience: [],
      features: [],
      exampleFavoriteSite: "",
      budget: [],
    },

    validate(value) {
      const schema = joi.object({
        fullName: joi.string().min(2).max(20).required().messages({
          "string.empty": "שדה חובה",
          "string.min": "יש להזין לפחות 2 תווים",
          "string.max": "לא יותר מ-20 תווים",
        }),
        phone: joi.string().min(9).max(11).required().messages({
          "string.empty": "שדה חובה",
          "string.min": "מספר טלפון חייב להכיל לפחות 9 ספרות",
          "string.max": "מספר טלפון לא יכול להיות ארוך מ-11 ספרות",
        }),
        websiteType: joi.alternatives(
          joi.string(),
          joi.array().items(joi.string())
        ),
        otherSiteType: joi.string().min(2).max(20).allow("").messages({
          "string.min": "יש להזין לפחות 2 תווים",
          "string.max": "לא יותר מ-20 תווים",
        }),
        goalOfProject: joi.alternatives(
          joi.string(),
          joi.array().items(joi.string())
        ),
        otherGoleProject: joi.string().min(2).max(20).allow("").messages({
          "string.min": "יש להזין לפחות 2 תווים",
          "string.max": "לא יותר מ-20 תווים",
        }),
        targetAudience: joi
          .array()
          .items(joi.string())
          .min(1)
          .required()
          .messages({
            "array.base": "יש לבחור לפחות קהל יעד אחד.",
            "array.min": "יש לבחור לפחות קהל יעד אחד.",
            "any.required": "יש לבחור לפחות קהל יעד אחד.",
          }),

        features: joi.array().items(joi.string()).min(1).required().messages({
          "array.base": "יש לבחור לפחות תכונה אחת באתר.",
          "array.min": "יש לבחור לפחות תכונה אחת באתר.",
          "any.required": "יש לבחור לפחות תכונה אחת באתר.",
        }),

        exampleFavoriteSite: joi.string().min(2).max(200).allow("").messages({
          "string.min": "יש להזין לפחות 2 תווים",
          "string.max": "לא יותר מ-200 תווים",
        }),
        budget: joi.alternatives(joi.string(), joi.array().items(joi.string())),
      });

      const { error } = schema.validate(value, { abortEarly: false });

      let errors = {};
      if (!error) return null;

      for (let detali of error.details) {
        const path = detali.path.join(".");
        errors[path] = detali.message;
      }
      return errors;
    },

    onSubmit: async (offer) => {
      try {
        await createOffer(offer);
      } catch (err) {
        form.setStatus({ generalError: error }); // error מה־context
      }
    },
  });

  return (
    <div id="form" className="width-for-elements">
      <h2 className="fs-1 p-3 fw-bold text-primary">
        טופס קצר להיכרות והבנת הצרכים
      </h2>
      <p className="fs-5 fw-bold text-orange">
        מלא/י את הטופס – ונגלה יחד איך אפשר לבנות עבורך אתר או אפליקציה שיתאימו
        בדיוק למה שהעסק שלך צריך. אחרי שנבין את הדרישות, אשלח הצעת מחיר הוגנת
        ומהירה.
      </p>
      <strong>
        שדות המסומנים בכוכבית <span className="text-danger ms-1">(*)</span> הם
        שדות חובה.
      </strong>
      <form
        className="d-flex flex-column gap-3 mt-5"
        onSubmit={form.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Input
          requried
          lable={"שם מלא"}
          inputType={"text"}
          name={"fullName"}
          id={"fullName"}
          {...form.getFieldProps("fullName")}
          error={form.touched.fullName && form.errors.fullName}
        />

        <Input
          requried
          lable={"טלפון נייד"}
          inputType={"text"}
          name={"phone"}
          id={"phone"}
          {...form.getFieldProps("phone")}
          error={form.touched.phone && form.errors.phone}
        />

        <SelectComponent
          requried
          label={`בחר/י את סוג אתר או אפליקציה`}
          name="websiteType"
          value={form.values.websiteType}
          onChange={form.handleChange}
          option={entriesOpt(websiteTypesMap)}
          error={form?.touched?.websiteType && form?.errors?.websiteType}
        />

        <Input
          lable={"אחר או פרט/י"}
          inputType={"text"}
          name={"otherSiteType"}
          id={"otherSiteType"}
          {...form.getFieldProps("otherSiteType")}
          error={form.touched.otherSiteType && form.errors.otherSiteType}
        />

        <SelectComponent
          requried
          label={"מה המטרה המרכזית של הפרויקט?"}
          name={"goalOfProject"}
          value={form.values.goalOfProject}
          onChange={form.handleChange}
          option={entriesOpt(goalOfProject)}
          error={form.touched.goalOfProject && form.errors.goalOfProject}
        />

        <Input
          lable={"אחר, אנא פרט"}
          inputType={"text"}
          name={"otherGoleProject"}
          id={"otherGoleProject"}
          {...form.getFieldProps("otherGoleProject")}
          error={form.touched.otherGoleProject && form.errors.otherGoleProject}
        />

        <label className="form-label fw-bold">
          בחר/י את הקהלים שאליהם מכוון האתר או האפליקציה שלך{" "}
          <span className="text-danger ms-1">*</span>
        </label>

        {form.touched.targetAudience && form.errors.targetAudience && (
          <div className="text-danger">{form.errors.targetAudience}</div>
        )}
        <Select
          classNamePrefix="react-select"
          className="border-2 border-primary mb-3"
          isMulti
          placeholder="קהלי היעד"
          onChange={(selectedOptions) => {
            const values = selectedOptions.map((opt) => opt.value);
            form.setFieldValue("targetAudience", values, true);
            form.setFieldTouched("targetAudience", true, true); // ✅ חובה לעדכן עם validate
            setTimeout(() => form.validateForm(), 0); // 🔧 הטריק החשוב
          }}
          value={entriesOpt(targetAudience).filter((opt) =>
            form.values.targetAudience.includes(opt.value)
          )}
          options={entriesOpt(targetAudience)}
          menuPlacement="top"
          maxMenuHeight={300}
        />

        <label className="form-label fw-bold">
          איזה תכונות או פונקציות חשובות לך שיהיו באתר?
          <span className="text-danger ms-1">*</span>
        </label>
        {form.touched.features && form.errors.features && (
          <div className="text-danger">{form.errors.features}</div>
        )}
        <Select
          isMulti
          placeholder="תכונות ופיצ'רים חשובים"
          onChange={(selectedOptions) => {
            const values = selectedOptions.map((opt) => opt.value);
            form.setFieldValue("features", values, true);
            form.setFieldTouched("features", true, true);
            setTimeout(() => form.validateForm(), 0); // 🔧 הטריק החשוב
          }}
          value={entriesOpt(features).filter((opt) =>
            form.values.features.includes(opt.value)
          )}
          options={entriesOpt(features)}
          menuPlacement="top"
          maxMenuHeight={300}
        />

        <SelectComponent
          requried
          label={"תקציב משוער לפרויקט?"}
          name={"budget"}
          value={form.values.budget}
          onChange={form.handleChange}
          option={entriesOpt(budget)}
          error={form.touched.budget && form.errors.budget}
        />

        <Input
          lable={`דוגמאות לאתרים או אפליקציות שאהבת את העיצוב שלהם (אם יש)?`}
          inputType={"text"}
          name={"exampleFavoriteSite"}
          id={"exampleFavoriteSite"}
          {...form.getFieldProps("exampleFavoriteSite")}
          error={
            form.touched.exampleFavoriteSite && form.errors.exampleFavoriteSite
          }
        />

        <div>
          <div>
            {loading ? (
              <div>אנא המתן...</div>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : successMsg ? (
              <div className="alert alert-success">ההצעה נשלחה בהצלחה.</div>
            ) : null}
          </div>

          <button
            className="btn send-offer-btn text-muted bg-orang hover-bg-blue text-center fw-bold"
            type="submit"
          >
            שלח/י ונחזור אליך עם הצעה
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOffer;
