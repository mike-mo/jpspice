const siteToken = "56ecf53bc39d4b41ad270b3197cadcfb";

if (location.origin === "https://jpspice.com") {
  const beacon = document.createElement("script");
  beacon.type = "module";
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.dataset.cfBeacon = JSON.stringify({ token: siteToken });
  beacon.addEventListener("error", () => {
    console.warn("Site analytics could not load. The website remains available.");
  });
  document.head.append(beacon);
}
