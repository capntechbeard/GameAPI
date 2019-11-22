import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faXbox,
  faApple,
  faLinux,
  faSteam,
  faGooglePlay,
  faAndroid
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export const convertToPlatformIcon = slug => {
  if (slug === "xbox" || slug === "xbox-one" || slug === "xbox360") {
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (slug === "pc") {
    return <FontAwesomeIcon icon={faDesktop} />;
  }
  if (
    slug === "playstation" ||
    slug === "playstation4" ||
    slug === "playstation3"
  ) {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (
    slug === "nintendo" ||
    slug === "nintendo-switch" ||
    slug === "nintendo-3ds"
  ) {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
  if (slug === "mac" || slug === "macos" || slug === "ios") {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (slug === "linux") {
    return <FontAwesomeIcon icon={faLinux} />;
  }
  if (slug === "android") {
    return <FontAwesomeIcon icon={faAndroid} />;
  }
};

export const convertToStoreIcon = slug => {
  if (slug === "xbox-store" || slug === "xbox360") {
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (slug === "steam") {
    return <FontAwesomeIcon icon={faSteam} />;
  }
  if (slug === "playstation-store") {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (slug === "nintendo") {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
  if (slug === "apple-appstore") {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (slug === "gog") {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
  if (slug === "google-play") {
    return <FontAwesomeIcon icon={faGooglePlay} />;
  }
  if (slug === "epic-games") {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
};

export const createPlatformNodes = platforms => {
  console.log(platforms);
  return platforms.map(platform => (
    <div className="platformIcon" key={platform.platform.slug}>
      {convertToPlatformIcon(platform.platform.slug)}
    </div>
  ));
};

export const createStoreNodes = stores => {
  console.log(stores);
  return stores.map(store => (
    <div className="storeIcon" key={store.store.slug}>
      {convertToStoreIcon(store.store.slug)}
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
