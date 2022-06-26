function harvest(fieldAreaInput, grapesProducedInput, wineReqInput, workersInput) {
    let fieldArea = Number(fieldAreaInput);
    let grapesProduced = Number(grapesProducedInput);
    let wineReq = Number(wineReqInput);
    let workers = Number(workersInput);

    let totalGrapesProduced = fieldArea * grapesProduced;
    let wineProduced = (totalGrapesProduced * 0.4) / 2.5;

    if (wineProduced < wineReq) {
        let wineNeeded = wineReq - wineProduced;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    } else {
        let remainingWine = wineProduced - wineReq;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        console.log(`${Math.ceil(remainingWine)} liters left -> ${Math.ceil(remainingWine / workers)} liters per person.`);
    }
}

harvest(1020, 1.5, 425, 4);