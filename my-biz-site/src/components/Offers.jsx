import React from "react";

function Offers({
  id,
  fullName,
  phone,
  websiteType,
  otherSiteType,
  goalOfProject,
  otherGoleProject,
  targetAudience,
  features,
  exampleFavoriteSite,
  budget,
  deleteOffer = () => {},
}) {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h5 className="mb-0">Job Offer from {fullName}</h5>
          <button className="btn btn-primary fw-bold" onClick={deleteOffer}>
            מחק
          </button>
          <p>{id}</p>
        </div>
        <div className="card-body">
          <p>
            <strong>📞 Phone:</strong> {phone}
          </p>
          <p>
            <strong>🌐 Website Type:</strong> {websiteType}
          </p>
          {otherSiteType && (
            <p>
              <strong>Other Site Type:</strong> {otherSiteType}
            </p>
          )}
          <p>
            <strong>🎯 Goal of Project:</strong> {goalOfProject}
          </p>
          {otherGoleProject && (
            <p>
              <strong>Other Goal:</strong> {otherGoleProject}
            </p>
          )}
          <p>
            <strong>👥 Target Audience:</strong> {targetAudience}
          </p>
          <p>
            <strong>🔧 Features:</strong> {features}
          </p>
          {exampleFavoriteSite && (
            <p>
              <strong>🌟 Example Site:</strong>{" "}
              <a href={exampleFavoriteSite} target="_blank" rel="noreferrer">
                {exampleFavoriteSite}
              </a>
            </p>
          )}
          <p>
            <strong>💰 Budget:</strong> {budget}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
