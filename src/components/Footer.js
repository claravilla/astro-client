function Footer() {
  return (
    <div className="footer">
      <h6>Resources</h6>
      <div className="resources">
        {/* <p>Picture of the day</p> */}
        <p>
          <a href="https://lguerriero.opendatasoft.com/pages/home/">
            Catalogue data
          </a>
        </p>
        <p>
          <a href="https://www.nexstarsite.com/OddsNEnds/MessierDifficultyRatings.htm">
            Messier difficulty level
          </a>
        </p>
      </div>

      <div className="signature">
        <p>
          Built by <a href="https://github.com/claravilla">Clara</a>
          <br />
          March 2022
        </p>
      </div>
    </div>
  );
}
export default Footer;
