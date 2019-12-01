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
    return <img className="nintendoSwitchSpecial" src="/NintendoSwitch.svg" />;
  }
  if (slug === "mac" || slug === "macos") {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (slug === "ios") {
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
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (slug === "steam") {
    return <FontAwesomeIcon icon={faSteam} />;
  }
  if (slug === "playstation") {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (slug === "nintendo") {
    return <img className="nintendoSwitchSpecial" src="/NintendoSwitch.svg" />;
  }
  if (slug === "apple") {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (slug === "gog") {
    return <img className="gogSpecial" src="/GOG.svg" />;
  }
  if (slug === "google") {
    return <FontAwesomeIcon icon={faGooglePlay} />;
  }
  if (slug === "epic") {
    return <img className="epicGamesSpecial" src="/EpicGames.svg" />;
  }
};

export const orderPlatforms = platforms => {
  return platforms.sort((a, b) => a.order - b.order);
};

export const createPlatformNodes = platforms => {
  const filteredPlatforms = filterDuplicatePlatforms(platforms);
  const orderedPlatforms = orderPlatforms(filteredPlatforms);
  return orderedPlatforms.map(platform => (
    <div className="platformIcon" key={platform.slug}>
      {convertToPlatformIcon(platform.slug)}
    </div>
  ));
};

export const orderStores = stores => {
  return stores.sort((a, b) => a.order - b.order);
};

export const createStoreNodes = stores => {
  const filteredStores = filterDuplicateStores(stores);
  const orderedStores = orderStores(filteredStores);
  return orderedStores.map(store => (
    <div className="storeIcon" key={store.slug}>
      {convertToStoreIcon(store.slug)}
    </div>
  ));
};

export const filterDuplicatePlatforms = platforms => {
  const filteredArray = [];
  for (let platform of platforms) {
    if (platform.platform.slug.indexOf("pc") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "pc")) {
        filteredArray.push({
          slug: "pc",
          order: 1
        });
      }
    }
    if (platform.platform.slug.indexOf("mac") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "mac")) {
        filteredArray.push({
          slug: "mac",
          order: 2
        });
      }
    }
    if (platform.platform.slug.indexOf("linux") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "linux")) {
        filteredArray.push({
          slug: "linux",
          order: 3
        });
      }
    }
    if (platform.platform.slug.indexOf("xbox") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "xbox")) {
        filteredArray.push({
          slug: "xbox",
          order: 21
        });
      }
    }
    if (platform.platform.slug.indexOf("playstation") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "playstation")) {
        filteredArray.push({
          slug: "playstation",
          order: 22
        });
      }
    }
    if (platform.platform.slug.indexOf("nintendo") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "nintendo")) {
        filteredArray.push({
          slug: "nintendo",
          order: 23
        });
      }
    }
    if (platform.platform.slug.indexOf("android") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "android")) {
        filteredArray.push({
          slug: "android",
          order: 31
        });
      }
    }
    if (platform.platform.slug.indexOf("iOS") >= 0) {
      if (!filteredArray.some(platform => platform.slug === "iOS")) {
        filteredArray.push({
          slug: "iOS",
          order: 32
        });
      }
    }
  }

  return filteredArray;
};

export const filterDuplicateStores = stores => {
  const filteredArray = [];
  for (let store of stores) {
    if (store.store.slug.indexOf("steam") >= 0) {
      if (!filteredArray.some(store => store.slug === "steam")) {
        filteredArray.push({
          slug: "steam",
          order: 1
        });
      }
    }
    if (store.store.slug.indexOf("gog") >= 0) {
      if (!filteredArray.some(store => store.slug === "gog")) {
        filteredArray.push({
          slug: "gog",
          order: 2
        });
      }
    }
    if (store.store.slug.indexOf("epic") >= 0) {
      if (!filteredArray.some(store => store.slug === "epic")) {
        filteredArray.push({
          slug: "epic",
          order: 3
        });
      }
    }
    if (store.store.slug.indexOf("xbox") >= 0) {
      if (!filteredArray.some(store => store.slug === "xbox")) {
        filteredArray.push({
          slug: "xbox",
          order: 11
        });
      }
    }
    if (store.store.slug.indexOf("playstation") >= 0) {
      if (!filteredArray.some(store => store.slug === "playstation")) {
        filteredArray.push({
          slug: "playstation",
          order: 12
        });
      }
    }
    if (store.store.slug.indexOf("nintendo") >= 0) {
      if (!filteredArray.some(store => store.slug === "nintendo")) {
        filteredArray.push({
          slug: "nintendo",
          order: 13
        });
      }
    }
    if (store.store.slug.indexOf("google") >= 0) {
      if (!filteredArray.some(store => store.slug === "google")) {
        filteredArray.push({
          slug: "google",
          order: 21
        });
      }
    }
    if (store.store.slug.indexOf("apple") >= 0) {
      if (!filteredArray.some(store => store.slug === "apple")) {
        filteredArray.push({
          slug: "apple",
          order: 22
        });
      }
    }
  }
  return filteredArray;
};
