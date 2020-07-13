# De Lessons Learned
Tijdens het ontwikkelen van de demonstrator is er veel geleerd. Belangrijke inzichten voor de verdere ontwikkeling van DISGeo en voor diverse standaardenactiviteiten. 

## Belang van linken van geodata

Veel van de datasets die we gebruiken in de demonstrator zijn wel op basis van linked data standaarden gepubliceerd, maar bevatten geen links naar andere data, ook niet naar bestaande basisregistraties. Toch zijn juist deze koppelingen erg waardevol. De Spatial Data on the Web Best Practices [[sdw-bp]] beveelt dit aan in [best practice 3: Link resources together to create the Web of data](https://www.w3.org/TR/sdw-bp/#linking). Geodata wordt pas echt onderdeel van het web van data, als het administratieve links bevat naar andere data op het web. 

Onze basisregistraties zijn bij uitstek geschikt om naar te linken. Toch gebeurt dit nog veel te weinig. 

Bijvoorbeeld
- De water data die we in de Brandweer bluswater case Castricum gebruiken, bevat geen administratieve links naar basisregistraties [welke zouden dit dan moeten zijn?].
- De Rijksmonumenten dataset zou eigenlijk links tussen rijksmonumenten en kadastrale percelen moeten bevatten, maar deze zijn niet aanwezig.

Beide datasets bevatten wel *ruimtelijke relaties* met objecten uit basisregistraties. Door zelf een ruimtelijke vraag te stellen, bijvoorbeeld 'met welk kadastraal perceel overlapt dit rijksmonument?' kun je de informatie wel achterhalen. Maar dit heeft een aantal nadelen. 

- Niet alle gebruikers beschikken over de kennis en/of tooling om dit soort vragen te kunnen stellen. Je hebt hier ofwel GeoSPARQL, ofwel een GIS systeem voor nodig. 
- Gebruikers kunnen verkeerde conclusies trekken als bv meerdere percelen met een rijksmonument overlappen, of als twee objecten ruimtelijk overlappen maar eigenlijk niet de relatie met elkaar hebben die de gebruiker veronderstelt [voorbeeld] 

Aan de andere kant is het ook niet te doen om alle mogelijke ruimtelijke relaties die er zijn tussen objecten, administratief vast te leggen. Dit zou veel te veel relaties opleveren, waardoor gebruikers door de bomen het bos niet meer zien. 

De vraag is dan: welke ruimtelijke links ga je administratief vastleggen, en welke niet? Binnen DISGeo moet hierover nagedacht worden. 

Om in de demonstrator met de datasets in samenhang te kunnen werken, zijn er tijdens de High 5 ad hoc linksets (koppeltabellen) tussen de data gemaakt. Meer hierover in [de geleerde les over linksets](#linksetjes-snel-gemaakt-maar-niet-beheerd).

## Wat kan je dan met die links

Op het moment dat die links tussen individuele objecten uit verschillende registraties er zijn, wordt werken met de data veel eenvoudiger. Dit laat de demonstrator zien. 

Je kunt bijvoorbeeld eenvoudig door de data browsen. We kunnen nu met behulp van een tool zoals Ontodia door data die gelinkt is heen klikken en daarbij zonder enige moeite doorklikken van een BOR object van een provincie naar het BGT object en van daaruit doorklikken naar het corresponderende GWSW object. Waarbij de data echt fysiek op verschillende plekken staat. 

Maar je kunt ook eenvoudig rapportjes maken uit de data. Via die browser kun je ook, als je een interessant data patroon bij elkaar hebt geklikt, daar een query van maken, die een beetje tweaken in een query bouwtool en het resultaat vervolgens op een dashboard laten zien. 

Tenslotte kun je ook complexe analyses uitvoeren waarbij je baat hebt bij het gekoppeld zijn van de data. 

## Linksetjes... snel gemaakt, maar niet beheerd

Er zijn tijdens de High 5 meerdere linksets gemaakt, bijvoorbeeld tussen scholen uit de Duo dataset en BAG verblijfsobjecten en tussen Rijksmonumenten uit de RCE dataset en kadastrale percelen. Dat is vrij eenvoudig te doen, met behulp van een SPARQL query, als er hiervoor maar aanknopingspunten in de data zijn. Het eerste 'linksetje' verscheen al tijdens de eerste uurtjes van de High 5. 

**MAAR** zulke linksets worden vaak eenmalig gemaakt op basis van een query. Terwijl ze eigenlijk in de data zouden moeten zitten en **beheerd worden**. De data wijzigt immers voordurend. Bovendien zou de kwaliteit van belangrijke links, zeker links van en naar basisregistraties, de verantwoordelijkheid van een data eigenaar moeten zijn. Dit beheer en eigenaarschap is er echter meestal niet, want wie is verantwoordelijk voor de linkset? Wie beheert de links en betaalt daar dus ook voor? 

Er zijn tegenwoordig al aardig wat als linked data gepubliceerde (overheids- geo-) datasets in Nederland. *Maar deze data is vrijwel nooit gelinkt aan andere datasets!* Het gaat in andere woorden veelal om vier sterren, geen vijf sterren linked data - de vijfde ster betreft namelijk het gelinkt zijn van de data. 

Het enige voorbeeld dat we kennen van een beheerde linkset is die tussen de BRT en de BAG. Deze gebruiken we niet in de demonstrator, maar noemen we hier als goed voorbeeld van een koppeling tussen twee datasets waarvan het beheer tegenwoordig geregeld is. Als onderdeel van het werkproces rondom het actualiseren van BRT data wordt ook gekeken naar de BAG panden, met als resultaat relaties tussen BRT objecten en gerelateerde BAG panden. Deze links werden tot voor kort echter weer weggegooid; tegenwoordig wordt deze informatie doorgespeeld aan het Kadaster data science team dat de linkset tussen BRT en BAG up to date houdt.

Tijdens de High 5 gemaakte linksets: 
- Tussen BRK aliases (om verschillende URIs voor percelen te mappen)
- Tussen BRK percelen en RCE Rijksmonumenten
- Tussen DUO onderwijsaanbieders en BAG verblijfsobjecten
- ...

Bij de vorige DISGeo demontrator kwam dit punt ook al naar voren. Zie [governance op het snijvlak](https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak). 

## Uniforme referentie naar basisregistraties

In de huidige praktijk is er gebrek aan eenduidigheid bij het refereren naar objecten uit basisregistraties, vanuit een eigen dataset of bij basisregistraties onderling. Dit probleem is eerder al onderkend tijdens een [linked data onderzoek in INSPIRE context](https://github.com/inspire-eu-rdf/inspire-rdf-guidelines/issues/37).

Internationaal is er een gestandaardiseerd lijstje van linksoorten om te linken van het ene geo-object naar het andere (denk aan `within`, `touches`, `contains`). Dit is beschreven in Spatial Data on the Web [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links). 

Wat echter nog ontbreekt, is een gestandaardiseerde property waarmee partijen kunnen linken naar objecten in basisregistraties, op zo'n manier dat gebruikers kunnen zien dat het naar een basisgegeven linkt.

Naam: `disgeo-object-ref` of `authoritative-ref` of iets dergelijks. Deze property zou in de DISGeo vocabulaire moeten worden gestandaardiseerd.

Overwegingen:
- Specifieker hoeft meestal niet: je kunt achterhalen wat voor type object het is, door de link te volgen. 
- In het geval dat een object linkt naar meerdere basisregistratie objecten, dan hebben specifiekere link namen meerwaarde, want je kunt dan aan de linknaam zien om wat voor objecten het gaat. Je hoeft ze dan niet op te halen om te zien om wat voor type objecten het gaat.
- Als zulke, specifiekere links er zijn kun je daar ook kwaliteitscontroles op loslaten.

Echter zijn er ook andere standaarden die dit soort linknamen definieren, bijvoorbeeld:
- De NTA8035
- De [building ontology](https://w3c-lbd-cg.github.io/bot/)
- Semantic Sensor Network Ontology [vocab-ssn] standaardiseert de link van metingen naar het object waarvan een eigenschap gemeten wordt

Een gestandaardiseerde `disgeo-object-ref` moet niet in de weg staan van het gebruik van deze andere standaarden. Wel kan de DISGeo vocabulaire deze property en de specifiekere properties aanbieden als convenience elementen die je kan, maar niet hoeft te gebruiken. 

## Open en gesloten linked data
Hoe koppel je open en gesloten knowledge graphs aan elkaar? Afhankelijk van wat je linked data opslagsysteem, je triple store kan, is het tegenwoordig al mogelijk om ofwel op graph niveau, ofwel op objectniveau in te stellen op basis van welke voorwaarden gebruikers de data mogen ontvangen. 

Er zijn twee belangrijke use cases hiervoor: 
- Als de data belangrijk is voor een commercieel verdienmodel, zoals bijvoorbeeld bij een bedrijf dat data verkoopt voor gebruik in apps. Dit bedrijf wil aan de ene kant goed gevonden worden en dus de data vindbaar via Google hebben, maar aan de andere kant ook weer niet de complete data in al haar rijkheid, want die wil ze kunnen verkopen. Een deel van de data is dan open, een deel alleen beschikbaar voor wie betaalt. Denk bijvoorbeeld aan een online krant.
- Als de data privacygevoelig is. Je wilt dan een gebruiker alleen toegang geven tot persoonlijke informatie als via bv digid geverifieerd is dat die persoon die data mag zien. 

In de demonstrator hebben we dit niet uitgebreid laten zien, juist omdat het al eenvoudig is om dit te doen. Het is wel een belangrijk punt om je te realiseren: linked data betekent niet per sé linked OPEN data; en gesloten en open linked data kunnen aan elkaar gekoppeld worden waarbij authenticatie en authorisatie van de gesloten data met standaard web technieken geregeld zijn. 

## Netwerken in DisGeo opnemen, en koppelen met fysieke objecten

Objecten spelen vaak een rol in een netwerk, bijvoorbeeld rioolputten in een waterafvoernetwerk, bruggen in een wegtransportnetwerk, of sluizen in een watertransportnetwerk. 

De beheerders van deze netwerken (bijvoorbeeld waterschappen, wegbeheerders) leggen de fysieke- en beheerkenmerken van zulke objecten vast in een systeem, en het netwerk met haar knooppunten en verbindingen in een ander systeem. Bij het beantwoorden van vragen zoals in onze brandweer use cases, maar ook bijvoorbeeld in vele mobiliteits use cases, zijn *beide* van belang en vooral ook *in samenhang met elkaar*. 

Wij trekken hieruit de conclusie dat DisGeo de mogelijkheid moet bieden om netwerkmodellen op te nemen, en er dus een netwerk / topologie model in het DisGeo informatiemodel moet zitten. Dit netwerkmodel moet geharmoniseerd zijn met de nieuwe NEN 2660, omdat deze standaard gevolgd zal worden in de systemen die gebruikt worden voor het beheer van de objecten. 

Het betekent ook dat er links gelegd moeten worden tussen de knooppunten en verbindingslijnen in het netwerk enerzijds, en de fysieke objecten die het netwerk realiseren in de fysieke werkelijkheid anderszijds. Bijvoorbeeld: een link tussen BGT waterdeel dat een deel van een kanaal representeert en de corresponderende verbindingslijn in het waternetwerk.

Alle fysieke objecten én alle knooppunten en verbindingslijnen moeten dus een ID hebben zodat er links naartoe gelegd kunnen worden. Met andere woorden, ze moeten voldoen aan Spatial Data on the Web [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids).

## Ruimtelijke vragen stellen aan linked data: de stand van zaken
GeoSPARQL [[geosparql]] is de standaard querytaal voor het ruimtelijk bevragen van linked geodata. Vergeleken met 2 á 3 jaar geleden is de ondersteuning voor GeoSPARQL enorm verbeterd. Er heeft een verschuiving plaatsgevonden van academische implementaties naar commerciële. 

De meeste triple stores die GeoSPARQL support hebben, bieden: 
- Voor het uitdrukken van geometrie: WKT en vaak ook GML. 
- 2D en 3D support. 
- Meestal alleen WGS84 support
- Voor ruimtelijke relaties meestal alleen Simple Features (geen Egenhofer en RCC8). 
- Ruimtelijke indexering is meestal gebaseerd op WKT, 3D, en WGS84 coordinaten, dus je kan niet op centimeter nauwkeurigheid selecteren. 
- Query rewrite en RDFS entailment onderdelen van GeoSPARQL worden meestal niet ondersteund. 

De volgende tabel toont een aantal gangbare triple stores, of ze voldoen aan de GeoSPARQL standaard en hoe de performance is wat betreft ruimtelijke vragen. 

product    | compliance | performance
-----------|------------|------------
GraphDB    | ja         | redelijk, maar met grote datavolumes zoals die van de basisregistraties niet toereikend
Stardog    | ja         | ja
virtuoso   | ja         | ja
marklogic  | nee        | ja
parliament | verouderd  | ...

De performance van GeoSPARQL-ondersteunende triple stores kan getest worden met deze [dataset for benchmarking GeoSPARQL](https://data.labs.kadaster.nl/geosparql-test). 

## Wanneer GeoSPARQL, wanneer GIS
In de geowereld hebben we natuurlijk al lang de mogelijkheid om ruimtelijke vragen te stellen. Maar **wanneer is het nu beter om GeoSPARQL te gebruiken, en wanneer een GIS**? Je kunt je dit voorstellen als een tweetrapsraket. Vaak is er, om een ruimtelijk probleem op te lossen, eerst een selectie nodig van allerlei relevante data in een bepaald gebied. Vervolgens wordt op die dataverzameling nadere analyse gedaan om de gestelde vraag te beantwoorden. In zo'n geval spelen zowel GeoSPARQL als GIS een cruciale rol: 
- De selectievraag wordt beantwoord met GeoSPARQL. Hiermee kun je eenvoudig heterogene data bij elkaar zoeken, ongeacht of dit geodata is of niet. Denk bijvoorbeeld aan een combinatie van BAG panden, bijbehorende wijken en buurten en de CBS statistieken van dit gebied.  
- De analysevraag wordt na het inladen van deze geselecteerde data vervolgens beantwoord in een GIS.

## Beperking: GeoSPARQL in federatieve queries
Bij het gebruik van GeoSPARQL is er nog wel een technische beperking. Eén van de sterke punten van linked data is het kunnen bevragen van meerdere data endpoints binnen één query, waardoor je in één stap informatie kunt . Je kunt, simpel gezegd, aan een triple store vragen: 

"Geef mij het BGT object Wegdeel met id 12345 en zoek ook even bij dit andere endpoint met adres xxx op wat er nog meer over dit wegdeel bekend is"

Als je hierbij echter een geovraag wilt stellen (bijvoorbeeld: welke putten uit endpoint GWSW vallen binnen het polygoon van wegdeel Y uit endpoint BGT?) is dat nog maar zeer beperkt mogelijk. Tussen 2 endpoints van dezelfde vendor, bijvoorbeeld twee Virtuoso endpoints, werkt het nog wel een beetje, maar tussen 2 verschillende niet. Mogelijke verklaring hiervoor is dat de endpoints alleen geovragen willen beantwoorden waarbij de objecten in de eigen ruimtelijke index staan.

Om te bewerkstelligen dat vendors dit gaan ondersteunen, moet er in de GeoSPARQL standaard een aanbeveling komen over het ondersteuenn van geovragen in federatieve queries. GeoSPARQL is ouder dan SPARQL 1.1, waarin federatie geregeld is.

In de demonstrator liepen we hier tegenaan bij de Castricum use case, en is dit opgelost door de gewenste query in stukken te knippen met een linkset tussen BGT en GWSW.

## Samenhang werkt echt
Door het op de juiste manier doorvoeren van de links in de linked data versie van de basis registraties is de waarde van de links direct zichtbaar te maken. De combinatie van de juiste [tooling](ontidia) en het toepassen van de juiste standaarden laat zien dat bevragen van basis registraties over hun silo grenzen heen prima werkt. De relatie van instanties in bijv de WOZ, BAG en BRK zijn direct inzichtelijk te maken zonder de noodzaak om alle data in 1 systeem te laden
Als een organisatie een interne dataset gebruikt die volgens de standaarden refereerd aan een basis registratie is de koppeling direct bruikbaar waardoor de interne dataset direct verrijkt kan worden met gegevens uit de basis registratie.[CASTRICUMUSECASE].
Zoals genoemd in [uniforme_referenties] kan de relatie met de basis registratie ook dienen als kwaliteits check voor de interne data.
<aside class='example'>Als een interne registratie gerelateerd is een verblijfsobject maar de link naar de basis registratie wijst naar een pand is dat een indicatie van een data kwaliteits probleem.</aside>
<aside class='note'>De samenhang op deze manier is voornamelijk bruikbaar voor het verkennen van informatie van enkele instanties, grootschalige analyse is niet zondermeer mogelijk.</aside>