const JSON_PATH = window.location.origin + '/data.json';

async function loadData(onLoad) {
  const response = await fetch(JSON_PATH);
  
  const json = await response.json()

  onLoad(json);
}
