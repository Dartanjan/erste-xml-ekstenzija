function handleFiles() {
  const fileList = this.files;

  if (! fileList.length) {
    alert("Nisi izabrao fajl");

    return false;
  }

  processFile(fileList[0]);
}

function processFile(file) {
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    let xmlParser = new window.DOMParser();
    let xmlDom = xmlParser.parseFromString(event.target.result, 'text/xml');
    
    rootEl = xmlDom.getElementsByTagName('SifraProizvodaCORE')[0];
    if (! rootEl) {
      alert("Ovo ne izgleda kao ROL XML fajl. Nedostaje tag <SifraProizvodaCORE>");

      return false;
    }

    const Dom = new DomManipulator(xmlDom);
    Dom.process();
  });

  reader.readAsText(file);
}

document.addEventListener("DOMContentLoaded", function() {
  const inputElement = document.getElementById("file");
  inputElement.addEventListener("change", handleFiles, false);
});
