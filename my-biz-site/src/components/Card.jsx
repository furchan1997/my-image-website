import { NavLink } from "react-router-dom";

function Card({
  title,
  description,
  image,
  alt,
  siteName,
  goToSite,
  goToCode,
}) {
  return (
    <div className="card shadow-sm mb-4" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text">{description} </p>
        <div className="d-flex gap-1 justify-content-center">
          <a
            className=" fw-bold text-orange"
            href={goToSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="btn text-muted bg-orang hover-bg-blue text-center fw-bold">
              {siteName}
            </strong>
          </a>

          <button className="btn text-muted bg-orang hover-bg-blue text-center fw-bold">
            {goToCode}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
