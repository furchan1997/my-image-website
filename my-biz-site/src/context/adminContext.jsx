import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { jobOfferService } from "../server/jobOffers";

export const AdminContext = createContext();
AdminContext.displayName = "Admin";

export function AdminProvider({ children }) {
  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await jobOfferService.signIn(password);
      if (response.status === 200) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getJobOffers = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await jobOfferService.getJobOffer();
      setOffers(response?.data?.data);
    } catch (err) {
      setError(err?.response || err?.response?.data);
      if (err?.response?.status === 401) {
        navigate("/admin/sign-in");
        setOffers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const delateOffer = async (ID) => {
    setError(null);
    setLoading(true);

    try {
      const response = await jobOfferService.deleteOffer(ID);
      return response.data;
    } catch (err) {
      setError(err?.response || err?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  const createOffer = async (offer) => {
    setError(null); // שגיאה גלובלית בקונטקסט
    setLoading(true);

    try {
      const response = await jobOfferService.createOffer(offer);

      if (response?.status !== 201) {
        const customErr = new Error("שגיאה לא צפויה");
        customErr.response = response;
        throw customErr;
      }

      setOffers(response.data.offer);
      setSuccessMsg(true);
      return response.data.offer;
    } catch (err) {
      console.log("caught error:", err);

      // ניהול שגיאה לגלובלי
      if (err?.message === "Network Error") {
        setError("שגיאת רשת");
      } else if (err?.response?.status === 404) {
        setError("העמוד לא נמצא");
      } else if (err?.response?.status === 400) {
        setError("ודא שכל השדות מולאו בצורה תקינה");
      } else {
        setError("ודא שכל השדות מולאו בצורה תקינה");
      }

      // חשוב: כדי שגם Formik יוכל לתפוס
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return (
    <AdminContext.Provider
      value={{
        signIn,
        setPassword,
        password,
        error,
        logout: jobOfferService.logout,
        getJobOffers,
        offers,
        delateOffer,
        createOffer,
        successMsg,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
