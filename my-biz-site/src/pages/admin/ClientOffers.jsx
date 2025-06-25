import { useEffect, useState } from "react";
import Offers from "../../components/Offers";
import { jobOfferService } from "../../server/jobOffers";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/adminContext";

function ClientOffers() {
  const { getJobOffers, offers, delateOffer } = useAdmin();

  useEffect(() => {
    getJobOffers();
  }, []);

  const handleDeleteClick = async (ID) => {
    await delateOffer(ID);
    await getJobOffers();
  };

  return (
    <div>
      {offers?.length === 0
        ? "לא קיימים הצעות עדיין."
        : offers.map((offer) => (
            <Offers
              key={offer?._id}
              id={offer?._id}
              fullName={offer.fullName}
              phone={offer.phone}
              websiteType={offer.websiteType}
              otherSiteType={offer.otherSiteType}
              goalOfProject={offer.goalOfProject}
              otherGoleProject={offer.otherGoleProject}
              targetAudience={offer.targetAudience}
              features={offer.features}
              exampleFavoriteSite={offer.exampleFavoriteSite}
              budget={offer.budget}
              deleteOffer={() => handleDeleteClick(offer?._id)}
            />
          ))}
    </div>
  );
}

export default ClientOffers;
