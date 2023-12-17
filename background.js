function redirect(requestDetails) {

    let url = new URL(requestDetails.url);

    if (url.hostname === 'www.reddit.com' || url.hostname === 'reddit.com') {
      return {
        redirectUrl: `https://old.reddit.com${url.pathname}`
      };
    }
}
  
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["*://*.reddit.com/*"], types: ["main_frame"] }, ["blocking"]
);