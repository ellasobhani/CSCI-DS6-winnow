

chrome.runtime.onInstalled.addListener(function () {
    let context = 'selection';
    let title = "Search Wikipedia for selection";
    chrome.contextMenus.create({
      title: title,
      contexts: [context],
      id: context
    });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {  
    let selection = item.selectionText;
    const url = new URL(`https://en.wikipedia.org/wiki/${selection}`);
    chrome.tabs.create({ url: url.href, index: tab.index + 1 });
  });