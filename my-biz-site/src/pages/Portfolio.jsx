import Card from "../components/Card";

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2 className="text-primary">עבודות נבחרות</h2>
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        <Card
          title={"card 1"}
          description={"this is card"}
          image={"frontEndImg.png"}
          goToSite={"https://cards-app.onrender.com/"}
          siteName={"אל האתר"}
          goToCode={"אל הקוד"}
        />
        <Card
          title={"card 1"}
          description={"this is card"}
          image={"fullStackImg.png"}
          goToCode={"אל הקוד"}
        />
        <Card
          title={"card 1"}
          description={"this is card"}
          image={"gameImg.png"}
          siteName={"אל המשחק"}
          goToSite={"/game/fourInARow.html"} // שים לב לשם הנכון של הקובץ
          goToCode={"אל הקוד"}
        />
        <Card
          title={"card 1"}
          description={"this is card"}
          image={"LandingPage.png"}
          siteName={"דף הנחיתה המלא"}
          goToSite={"landingPage/index.html"}
          goToCode={"אל הקוד"}
        />
      </div>
      <hr />
    </section>
  );
}

export default Portfolio;
