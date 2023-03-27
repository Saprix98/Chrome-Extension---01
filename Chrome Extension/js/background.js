document.writeln("<script type='text/javascript' src='./../assets/backgroundApi.js'></script>");

chrome.runtime.onMessageExternal.addListener(function (request) {
  console.log(request);
  const { action = "", shopName = "" } = request;
  if (action === "STORE_SHOP_NAME") {
    chrome.storage.sync.set({ shopName }, () => {
      console.log(`Shop name set shopName: ${shopName}`);
    });
  }
});

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    const { type = '' } = request;
    const tab = sender?.tab || {};

    if (type) {
      sendResponse(type);
    }
  },
);

chrome.webRequest.onSendHeaders.addListener(
  function (details) {
    if (details.url.includes('api/v1/users/info')) {
      chrome.storage.sync.set({ "dataStoreDser": details.requestHeaders }, () => {
      });
      chrome.storage.sync.set({ "urlUserInfo": details.url }, () => {
      });
    }
    if (details.url.includes('/api/v1/prod/list') && !details.url.includes('isAr=true')) {
      chrome.storage.sync.set({ "dataProductListDser": details.requestHeaders }, () => {
      });
      chrome.storage.sync.set({ "dataUrlGetListProduct": details.url }, () => {
      });
    }
  },
  { urls: ["https://*.dsers.com/*"] },
  ["extraHeaders", "requestHeaders"]
);