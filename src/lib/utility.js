import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faXbox,
  faApple,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export const convertToPlatformIcon = slug => {
  if (slug === "xbox" || slug === "xbox-one") {
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (slug === "pc") {
    return <FontAwesomeIcon icon={faDesktop} />;
  }
  if (slug === "playstation" || slug === "playstation4") {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (
    slug === "nintendo" ||
    slug === "nintendo-switch" ||
    slug === "nintendo-3ds"
  ) {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
  if (slug === "mac" || slug === "macos") {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (slug === "linux") {
    return <FontAwesomeIcon icon={faLinux} />;
  }
};

export const createPlatformNodes = platforms => {
  console.log(platforms);
  return platforms.map(platform => (
    <div className="platform" key={platform.platform.slug}>
      {convertToPlatformIcon(platform.platform.slug)}
    </div>
  ));
};

/*  
iOs     
Android     
MAC     
Linux      
Switch
*/
