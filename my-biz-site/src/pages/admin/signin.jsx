import { useEffect, useState } from "react";
import { jobOfferService } from "../../server/jobOffers";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/adminContext";

function SignIn() {
  const navigate = useNavigate();
  const { signIn, setPassword, password, error, logout, loading } = useAdmin();

  const handleSignIn = () => {
    signIn();
    navigate("/admin/offers/");
  };

  const handleLogout = () => {
    logout();
    setPassword("");
    navigate("/");
  };

  if (loading) {
    return <div>המתן...</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="fs-1">כנס למערכת</p>
      <div className="form">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>התחבר</button>
        {error && "סיסמא לא נכונה, תבדוק בפתקים"}
        <button onClick={handleLogout}>התנתק</button>
      </div>
    </div>
  );
}

export default SignIn;
