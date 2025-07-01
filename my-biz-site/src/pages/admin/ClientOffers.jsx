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
  console.log(offers.map((o) => ({ [o.fullName]: o.createdAt })));
  // console.log(offers);
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
              targetAudience={offer.targetAudience.join(", ")}
              features={offer.features.join(", ")}
              exampleFavoriteSite={offer.exampleFavoriteSite}
              budget={offer.budget}
              createdAt={offer.createdAt}
              deleteOffer={() => handleDeleteClick(offer?._id)}
            />
          ))}
    </div>
  );
}

export default ClientOffers;
