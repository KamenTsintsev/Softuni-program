function browserHistory(obj, arr) {
    let browserData = obj;

    for (const command of arr) {
        if (command === "Clear History and Cache") {
            browserData["Open Tabs"] = [];
            browserData["Recently Closed"] = [];
            browserData["Browser Logs"] = [];
            continue;
        }
        let [operation, siteName] = command.split(" ");

        switch (operation) {
            case "Open":
                browserData["Open Tabs"].push(siteName);
                browserData["Browser Logs"].push(command);
                break;
            case "Close":
                if (browserData["Open Tabs"].indexOf(siteName) >= 0) {
                    browserData["Recently Closed"].push(siteName);
                    let id = browserData["Open Tabs"].indexOf(siteName);
                    browserData["Open Tabs"].splice(id, 1)
                    browserData["Browser Logs"].push(command);
                }
                break;
        }
    }
    console.log(`${browserData["Browser Name"]}`);
    console.log(`Open Tabs: ${browserData["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browserData["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browserData["Browser Logs"].join(", ")}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])