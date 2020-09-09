class DomManipulator {
  constructor(dom) {
    this.dom = dom;
  }

  process() {
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbDUGUJE', this.get('Iznos'));
    this.select('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_ddlMODEL2', this.get('ModelKorisnika'));
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbPOZBR2', this.get('PozivNaBrojKorisnika'));
    this.select('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_ddlPOTINS', this.get('RacunKorisnika').substr(0, 3));
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbPOTPAR', this.get('RacunKorisnika').substr(3).match(/[1-9]+/)[0]);
    this.select('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_ddlVEZOZN', this.get('SifraPlacanja'));
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbOPISNO', this.get('SvrhaDoznake'));
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbPOTNAZ', this.get('NazivKorisnika') + ", " + this.get('MestoKorisnika'));
    this.select('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_ddlMODEL1', this.get('ModelNalogodavca'));
    this.text('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_txbPOZBR1', this.get('PozivNaBrojNalogodavca'));
    this.select('ctl00_ContentPlaceHolder1_KorisnickaKontrola2_ddlDUGPAR', this.get('RacunNalogodavca').substr(3).match(/[1-9]+/)[0]);
  }

  text(id, value) {
    value && this.executeScript('document.getElementById("' + id + '").value = "' + value + '";')
  }

  select(id, value) {
    value && this.executeScript('document.querySelector("#' + id + ' [value=\'' + value + '\']").selected = true;')
  }

  executeScript(code) {
    chrome.tabs.executeScript({
      code: code
    });
  }

  get(tag) {
    let elem = this.dom.getElementsByTagName(tag)[0].childNodes[0];

    return elem ? elem.nodeValue : '';
  }
}
