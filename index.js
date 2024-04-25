var linkTag = document.createElement("link");
linkTag.setAttribute("rel", "canonical");
linkTag.setAttribute("href", "https://kroma.works");

// TODO: make it dynamic, maybe even fetch from DB
const url = "https://heydrop.me/kKo_tay5gp1hek";

var metaTag = document.createElement("meta");
metaTag.setAttribute("http-equiv", "refresh");
metaTag.setAttribute("content", `0; url=${url}`);

document.getElementsByTagName("head")[0].appendChild(linkTag);
document.getElementsByTagName("head")[0].appendChild(metaTag);
