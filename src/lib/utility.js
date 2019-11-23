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
  if (slug === "xbox") {
    return <img className="NintendoSwitchSpecial" src="/NintendoSwitch.svg" />;
  }
  if (slug === "steam") {
    return <FontAwesomeIcon icon={faSteam} />;
  }
  if (slug === "playstation") {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (slug === "nintendo") {
    return <img src="../public/NintendoSwitch.svg"></img>;
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
  const filteredPlatforms = filterDuplicatePlatforms(platforms);
  return filteredPlatforms.map(platform => (
    <div className="platformIcon" key={platform.slug}>
      {convertToPlatformIcon(platform.slug)}
    </div>
  ));
};

export const createStoreNodes = stores => {
  const filteredStores = filterDuplicateStores(stores);
  return filteredStores.map(store => (
    <div className="storeIcon" key={store.slug}>
      {convertToStoreIcon(store.slug)}
    </div>
  ));
};

export const filterDuplicatePlatforms = platforms => {
  const filteredArray = [];
  for (let platform of platforms) {
    if (platform.platform.slug.indexOf("xbox") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "xbox")) {
        filteredArray.push({
          slug: "xbox"
        });
      }
    }
    if (platform.platform.slug.indexOf("playstation") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "playstation")) {
        filteredArray.push({
          slug: "playstation"
        });
      }
    }
  }
  return filteredArray;
};

export const filterDuplicateStores = stores => {
  const filteredArray = [];
  for (let store of stores) {
    if (store.store.slug.indexOf("xbox") >= 0) {
      if (!filteredArray.some(store => store.slug === "xbox")) {
        filteredArray.push({
          slug: "xbox"
        });
      }
    }
    if (store.store.slug.indexOf("playstation") >= 0) {
      if (!filteredArray.some(store => store.slug === "playstation")) {
        filteredArray.push({
          slug: "playstation"
        });
      }
    }
  }
  return filteredArray;
};
