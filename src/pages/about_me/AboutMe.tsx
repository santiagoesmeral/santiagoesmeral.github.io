import "./AboutMe.scss";
export default function AboutMe() {
  return (
    <section className="about-me take-remaining-space-in-page">
      <h1>Hello! I am Santiago Esmeral</h1>
      <p>
        I am a semisenior react developer from Argentina, looking for new
        oportunities.
      </p>

      <address className="about-me-address">
        Contact me
        <br />
        Email: <a href="santiagoesmeral@hotmailcom">Email</a>
        <br />
        Telegram: <a href="https://t.me/santiago_esmeral">@santiago_esmeral</a>
      </address>
    </section>
  );
}
