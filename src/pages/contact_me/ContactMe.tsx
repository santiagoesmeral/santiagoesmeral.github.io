import { ReactElement, useState } from "react";
import { GithubLogo, LinkedInLogo, TelegramLogo, File } from "../../images";
import "./ContactMe.scss";

interface LinkWithCopyInterface {
  id?: string;
  text?: string;
  title?: string;
  href?: string;
  icon?: ReactElement;
  copyToClipboardFunction: () => any;
}

function LinkWithCopy({
  id,
  text,
  href,
  title,
  icon,
  copyToClipboardFunction,
}: LinkWithCopyInterface) {
  /*
    There is no Easter Bunny, there is no Tooth Fairy, and you cant have a single button with more than one interactive function!

    HTML5 specifies that no interactive element may be nested inside another interactive element. 
    aka no <button><button/></button>

    So instead, we make 2 buttons, and we make them look as if they are one, using absolute positioning or clever border stuff.

    To remember: a lot of people have problems clicking on small buttons. Dont do the Zoom button thing! buttons should be fat and big. And with labels if possible.
  */
  const [didCopy, setDidCopy] = useState(false);
  const handleCopyButton = () => {
    copyToClipboardFunction();
    setDidCopy(true);
    setTimeout(() => setDidCopy(false), 1337);
  };
  return (
    <div className={"button-with-copy-container"}>
      <a
        className="button-with-copy-main"
        id={id}
        title={title || "Oops, forgot a title"}
        href={href || ""}
      >
        {icon}
        {text || "button"}
      </a>
      <button
        className={
          "button-with-copy-secondary" + (didCopy ? " show-copy-feedback" : "")
        }
        title="Copy to Clipboard"
        onClick={() => handleCopyButton()}
      >
        {didCopy ? "✔" : "📋"}
      </button>
    </div>
  );
}
export default function ContactMe() {
  return (
    <section className="contact-me take-remaining-space-in-page">
      <h1 className="contact-me-title">Thank you for visiting my page!</h1>
      <div className="contact-me-text-container">
        <p className="contact-me-text">
          I created this page to implement the features that i would've liked to
          have in a homepage, while also using it as a bit of a challenge.
          <br />
          I tried to avoid using as many extra libraries as possible purely to
          make me learn new things.
          <br />I hope you like it! and if you have feedback, or you're
          interested in hiring me, don't hesitate to contact me.
        </p>
      </div>
      <div className="contact-me-links">
        <LinkWithCopy
          id="skip-navigation-target"
          text="santiagoesmeral@hotmail.com"
          href="mailto:santiagoesmeral@hotmail.com"
          title="Send email to santiagoesmeral@hotmail.com"
          icon={<p className="fake-email-icon">✉</p>}
          copyToClipboardFunction={() =>
            navigator.clipboard.writeText("santiagoesmeral@hotmail.com")
          }
        />

        <LinkWithCopy
          id="link-to-telegram"
          text="@santiago_esmeral"
          href="https://t.me/santiago_esmeral"
          title="Send message via Telegram"
          icon={<TelegramLogo />}
          copyToClipboardFunction={() =>
            navigator.clipboard.writeText("@santiago_esmeral")
          }
        />

        <a
          id="link-to-github"
          href="https://github.com/santiagoesmeral"
          title="Santiago Esmeral's Github profile"
        >
          <GithubLogo className="set-icon-to-white" />
          My Github Profile
        </a>
        <a
          id="link-to-linkedin"
          href="https://www.linkedin.com/in/santiago-alfredo-esmeral-albarracin-37250516b/"
          title="Santiago Esmeral's LinkedIn profile"
        >
          <LinkedInLogo />
          My LinkedIn Profile
        </a>
        <a
          id="CV Preview"
          title="Preview my CV (.pdf)"
          href="https://drive.google.com/file/d/1gEPawyT0Mc3keyUzhIISF3YxlmXFT8ju/view?usp=sharing"
        >
          <File className="set-icon-to-white" />
          Get my CV
        </a>
        <button
          id="link-to-codepen"
          title="Santiago Esmeral's Codepen (coming soon)"
          disabled
        >
          My Codepen (coming soon)
        </button>
      </div>
    </section>
  );
}
