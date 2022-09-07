import "./HireMe.scss";

interface ButtonWithCopyInterface {
  id?: string;
}

function ButtonWithCopy({ id }: ButtonWithCopyInterface) {
  /*
    There is no Easter Bunny, there is no Tooth Fairy, and you cant have a single button with more than one interactive function!

    HTML5 specifies that no interactive element may be nested inside another interactive element. 
    aka no <button><button/></button>

    So instead, we make 2 buttons, and we make them look as if they are one, using absolute positioning or clever border stuff.

    To remember: a lot of people have problems clicking on small buttons. Dont do the zoom button thing! buttons should be fat and big. And with labels if possible.
  */
  return (
    <div className={"button-with-copy-container"}>
      <button className="button-with-copy-main" id={id}>
        {"button"}
      </button>
      <button className="button-with-copy-secondary">{"📋"}</button>
    </div>
  );
}
export default function HireMe() {
  /*
    The idea for the address: 
    implement a list of buttons, each with a direct redirect and a copy to clipboard small button inside.

    here's a rough concept of the layout:
    where-button-goes: [direct-link | copy]

    and have a list of all of those.
    Some of the buttons wont have a copy and will instead be a direct redirect, so keep that in mind.

    TODO: add skip navigation id
  */
  return (
    <section className="hire-me take-remaining-space-in-page">
      <h1 className="hire-me-title">Thank you for visiting my page!</h1>
      <div className="hire-me-text-container">
        <p className="hire-me-text">
          I created this page to implement the features that i would've liked to
          have in a homepage, while also using it as a bit of a challenge.
          <br />
          I tried to avoid using as many extra libraries as possible purely to
          make me learn new things.
          <br />I hope you like it! and if you have feedback, or you're
          interested in hiring me, don't hesitate to contact me.
        </p>
      </div>
      {/* TODO: maybe make this an <address> tag */}
      <div className="hire-me-links">
        <div className="hire-me-link">
          <label>Label:</label>
          <ButtonWithCopy id="skip-navigation-target" />
        </div>
        <div className="hire-me-link">
          <label>Label:</label>
          <ButtonWithCopy />
        </div>
        <div className="hire-me-link">
          <label>Label:</label>
          <ButtonWithCopy />
        </div>
        <div className="hire-me-link">
          <label>Label:</label>
          <ButtonWithCopy />
        </div>
        <div className="hire-me-link">
          <label>Label:</label>
          <button>button</button>
        </div>
      </div>
    </section>
  );
}

/*
<address className="hire-me-address">work in progress :)</address>
    <address className="hire-me-address">
        Contact me
        <br />
        Email: <a href="santiagoesmeral@hotmailcom">Email</a>
        <br />
        Telegram: <a href="https://t.me/santiago_esmeral">@santiago_esmeral</a>
      </address>
  */
