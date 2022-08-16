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
  return (
    <li
      className="homepage-link-card-container"
      key={id}
      style={{ gridArea: "numpad-" + id }}
    >
      <a
        className="homepage-link-card"
        href={url}
        data-pseudoelem-content={content}
        title={content}
      >
        {icon}
      </a>
    </li>
  );
}
