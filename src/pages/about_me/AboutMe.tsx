import "./AboutMe.scss";
export default function AboutMe() {
  /*
    Hello! thank you for visiting my page. 
    I created this page to implement the features that i would've liked to have in a homepage, while also using it as a bit of a challenge. 
    I tried to avoid using as many extra libraries as possible purely to make me learn new things. 
    I hope you like it! and if you have feedback, or you're interested in hiring me, don't hesitate to contact me.
    I hope you have a great day.

    <address className="about-me-address">
        Contact me
        <br />
        Email: <a href="santiagoesmeral@hotmailcom">Email</a>
        <br />
        Telegram: <a href="https://t.me/santiago_esmeral">@santiago_esmeral</a>
      </address>
  */
  return (
    <section className="about-me take-remaining-space-in-page">
      <h1 className="about-me-title">Thank you for visiting my page!</h1>
      <p className="about-me-text">
        I created this page to implement the features that i would've liked to
        have in a homepage, while also using it as a bit of a challenge.
        <br />
        I tried to avoid using as many extra libraries as possible purely to
        make me learn new things.
        <br />I hope you like it! and if you have feedback, or you're interested
        in hiring me, don't hesitate to contact me.
      </p>
      <address className="about-me-address">work in progress :)</address>
    </section>
  );
}
