import { ReactNode } from "react";
import "./HomepageLinkCard.scss";

interface HomepageLinkCardPropObject {
  id: string;
  url?: string;
  content: string;
  icon: ReactNode;
}

export default function HomepageLinkCard({
  id,
  url = "#",
  content,
  icon,
}: HomepageLinkCardPropObject) {
  //TODO: add a numpad key icon in the corner of each of them
  return (
    <li className="homepage-link-card-container" key={id}>
      <a
        className="homepage-link-card"
        href={url}
        data-pseudoelem-content={content}
        title={content}
        id={"homepage-link-card-number-" + id}
      >
        {icon}
      </a>
    </li>
  );
}
