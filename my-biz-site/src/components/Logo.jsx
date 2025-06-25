function Logo({ fontSize }) {
  return (
    <h1
      className={`navbar-brand  text-orange fs-${fontSize} `}
      style={{
        fontFamily: "'Cormorant Garamond', serif", // או 'Bebas Neue', sans-serif
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      <span>FURCHAN</span>
    </h1>
  );
}

export default Logo;
