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
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

export const convertToPlatformIcon = slug => {
  if (slug === "xbox" || slug === "xbox-one" || slug === "xbox360") {
    return (
      <span>
        <FontAwesomeIcon icon={faXbox} />
        <span className="Icon-text">Xbox One</span>
      </span>
    );
  }
  if (slug === "pc") {
    return (
      <span>
        <FontAwesomeIcon icon={faDesktop} />
        <span className="Icon-text">Windows</span>
      </span>
    );
  }
  if (
    slug === "playstation" ||
    slug === "playstation4" ||
    slug === "playstation3"
  ) {
    return (
      <span>
        <FontAwesomeIcon icon={faPlaystation} />
        <span className="Icon-text">Playstation 4</span>
      </span>
    );
  }
  if (
    slug === "nintendo" ||
    slug === "nintendo-switch" ||
    slug === "nintendo-3ds"
  ) {
    return (
      <span>
        <img className="nintendoSwitchSpecial" src="/NintendoSwitch.svg" />
        <span className="Icon-text">Switch</span>
      </span>
    );
  }
  if (slug === "mac" || slug === "macos") {
    return (
      <span>
        <FontAwesomeIcon icon={faApple} />
        <span className="Icon-text">MacOS</span>
      </span>
    );
  }
  if (slug === "ios") {
    return (
      <span>
        <FontAwesomeIcon icon={faApple} />
        <span className="Icon-text">iOS</span>
      </span>
    );
  }
  if (slug === "linux") {
    return (
      <span>
        <FontAwesomeIcon icon={faLinux} />
        <span className="Icon-text">Linux</span>
      </span>
    );
  }
  if (slug === "android") {
    return (
      <span>
        <FontAwesomeIcon icon={faAndroid} />
        <span className="Icon-text">Android</span>
      </span>
    );
  }
};

export const convertToStoreIcon = (slug, url_en) => {
  if (slug === "xbox") {
    const url = url_en ? url_en : "https://www.xbox.com/en-US/microsoft-store";
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faXbox} />
        <span className="Icon-text">Microsoft Store</span>
      </a>
    );
  }
  if (slug === "steam") {
    const url = url_en ? url_en : "https://store.steampowered.com/";
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faSteam} />
        <span className="Icon-text">Steam</span>
      </a>
    );
  }
  if (slug === "playstation") {
    const url = url_en
      ? url_en
      : "https://store.playstation.com/en-us/home/games";
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faPlaystation} />
        <span className="Icon-text">Playstation Store</span>
      </a>
    );
  }
  if (slug === "nintendo") {
    const url = url_en ? url_en : "https://www.nintendo.com/games/switch/";
    return (
      <a href={url}>
        <img className="nintendoSwitchSpecial" src="/NintendoSwitch.svg" />
        <span className="Icon-text">Nintendo Store</span>
      </a>
    );
  }
  if (slug === "apple") {
    const url = url_en ? url_en : "https://www.apple.com/ios/app-store/";
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faApple} />
        <span className="Icon-text">Apple App Store</span>
      </a>
    );
  }
  if (slug === "gog") {
    const url = url_en ? url_en : "https://www.gog.com/";
    return (
      <a href={url}>
        <img className="gogSpecial" src="/GOG.svg" />
        <span className="Icon-text">Good Old Games</span>
      </a>
    );
  }
  if (slug === "google") {
    const url = url_en ? url_en : "https://play.google.com/store";
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faGooglePlay} />
        <span className="Icon-text">Google Play</span>
      </a>
    );
  }
  if (slug === "epic") {
    const url = url_en ? url_en : "https://www.epicgames.com/store/";
    return (
      <a href={url}>
        <img className="epicGamesSpecial" src="/EpicGames.svg" />
        <span className="Icon-text">Epic Game Store</span>
      </a>
    );
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
      {convertToStoreIcon(store.slug, store.url_en)}
    </div>
  ));
};

export const filterDuplicatePlatforms = (platforms = []) => {
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

export const filterDuplicateStores = (stores = []) => {
  const filteredArray = [];
  for (let store of stores) {
    if (store.store.slug.indexOf("steam") >= 0) {
      if (!filteredArray.some(store => store.slug === "steam")) {
        filteredArray.push({
          slug: "steam",
          order: 1,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("gog") >= 0) {
      if (!filteredArray.some(store => store.slug === "gog")) {
        filteredArray.push({
          slug: "gog",
          order: 2,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("epic") >= 0) {
      if (!filteredArray.some(store => store.slug === "epic")) {
        filteredArray.push({
          slug: "epic",
          order: 3,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("xbox") >= 0) {
      if (!filteredArray.some(store => store.slug === "xbox")) {
        filteredArray.push({
          slug: "xbox",
          order: 11,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("playstation") >= 0) {
      if (!filteredArray.some(store => store.slug === "playstation")) {
        filteredArray.push({
          slug: "playstation",
          order: 12,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("nintendo") >= 0) {
      if (!filteredArray.some(store => store.slug === "nintendo")) {
        filteredArray.push({
          slug: "nintendo",
          order: 13,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("google") >= 0) {
      if (!filteredArray.some(store => store.slug === "google")) {
        filteredArray.push({
          slug: "google",
          order: 21,
          url_en: store.url_en
        });
      }
    }
    if (store.store.slug.indexOf("apple") >= 0) {
      if (!filteredArray.some(store => store.slug === "apple")) {
        filteredArray.push({
          slug: "apple",
          order: 22,
          url_en: store.url_en
        });
      }
    }
  }
  return filteredArray;
};
