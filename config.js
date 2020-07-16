//-- ==================================================================================
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-- ==================================================================================
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                     // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  //specType: "HR",                   // Handreiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie standaard
  specType: "AL",                   // Algemeen document
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"     
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2020-05-14",  	      // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  //authors: 
  //[
  //  {
  //     name:       "Gerard Trouborst",
  //     company:    "Geonovum",
  //     companyURL: "https://www.geonovum.nl"
  //   }, 
  //  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "dll2", 	            // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "cvgg", 	              // Informatiemodel Geluid
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  pubDomain: "disgeo", 	          // Doorontwikkeling basisregistraties in samenhang
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://geonovum.github.io/disgeo-demo-2/",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/disgeo-demo-2/issues/",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/disgeo-demo-2",
  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "CITAAT":
      {
        title:      "Titel van het Citaat",
        href:       "http://url van de publicatie",
        status:     "versie van de publicatie",
        publisher:  "naam van de publiceerder",
        company:    "eventueel naam van bedrijf",
    },
    "DLL1": {
      id: "dll1",
      title: "DisGeo Demo Lessons Learned",
      href: "https://docs.geostandaarden.nl/disgeo/dll/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2020-02-19"
    },
    "ISO19108-2005": {
      "href": "https://www.iso.org/standard/39891.html",
      "title": "Geographic information -- Rules for application schema",
      "date": "2005-06",
      "publisher": "International Organization for Standardization"
    },
  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2020-05-14",    	    // Format is "YYYY-MM-DD"
  //previousMaturity: "GN-DEF",                 // kies 1 van deze 3 regels
  //previousMaturity: "CV",                   // kies 1 van deze 3 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
