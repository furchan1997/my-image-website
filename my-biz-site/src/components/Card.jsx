import { NavLink } from "react-router-dom";

function Card({
  title,
  description,
  image,
  alt,
  siteName,
  goToSite,
  goToCode,
  repoLink,
  haveSite = false,
  haveRepo = false,
}) {
  return (
    <div className="card shadow-sm mb-4" style={{ width: "22rem" }}>
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text">{description} </p>
        <div className="d-flex gap-1 justify-content-center">
          {haveSite && (
            <a
              href={goToSite}
              className=" fw-bold text-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="btn text-muted bg-orang hover-bg-blue text-center fw-bold">
                {siteName}
              </strong>
            </a>
          )}

          {haveRepo && (
            <a
              href={repoLink}
              className=" fw-bold text-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <strong className="btn text-muted bg-orang hover-bg-blue text-center fw-bold">
                {goToCode}
              </strong>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
