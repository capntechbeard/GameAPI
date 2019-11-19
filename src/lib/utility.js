import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

export const convertToPlatformIcon = slug => {
  if (slug === "xbox") {
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (slug === "pc") {
    return <FontAwesomeIcon icon={faDesktop} />;
  }
  if (slug === "playstation" || slug === "playstation4") {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
};
]
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
