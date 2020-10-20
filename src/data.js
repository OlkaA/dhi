
const cykelDataAPI = `https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:cykeldata_kk&outputFormat=json&SRSNAME=EPSG:4326`;
const cykelInfrastrukturAPI = `https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:supercykelsti_inspektion_foto&SRSNAME=EPSG:4326&outputFormat=application%2Fjson`;

async function fetchCykelData() {
    const response = await fetch(cykelDataAPI);
    const data = await response.json();
    const json = await data.features;
    return json;
}

async function fetchCykelInfrastrukturData() {
    const response = await fetch(cykelInfrastrukturAPI);
    const data = await response.json();
    const json = await data.features;
    return json;
}

export {fetchCykelData, fetchCykelInfrastrukturData}