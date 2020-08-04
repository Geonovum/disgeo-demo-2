# De Lessons Learned
Tijdens het ontwikkelen van de demonstrator is er veel geleerd. Dit zijn belangrijke inzichten voor de verdere ontwikkeling van DISGeo en voor diverse standaardenactiviteiten. Wat goed bleek te werken, en wat (nog) niet, wordt in dit hoofdstuk beschreven.

## We zien nog weinig links

Veel van de datasets die we gebruiken in de demonstrator zijn wel op basis van linked data standaarden gepubliceerd, maar bevatten geen links naar andere data, ook niet naar bestaande basisregistraties. Toch zijn juist deze koppelingen erg waardevol. De Spatial Data on the Web Best Practices [[sdw-bp]] beveelt dit aan in [best practice 3: Link resources together to create the Web of data](https://www.w3.org/TR/sdw-bp/#linking). Geodata wordt pas echt onderdeel van het web van data, als het administratieve links bevat naar andere data op het web. 

Onze basisregistraties zijn bij uitstek geschikt om naar te linken. Toch gebeurt dit nog veel te weinig. 

<aside class="example">
<ul>
  <li>De data die we in de Brandweer bluswater case Castricum gebruiken, bevat geen administratieve links naar basisregistraties. Links tussen bijvoorbeeld IMGeo putten en GWSW rioolputten zouden veel toegevoegde waarde hebben. </li>
  <li>De Rijksmonumenten dataset zou eigenlijk links tussen rijksmonumenten en kadastrale percelen moeten bevatten, maar deze zijn niet aanwezig.
  </li>
</ul>
</aside>

Beide datasets bevatten wel *ruimtelijke relaties* met objecten uit basisregistraties. Door zelf een ruimtelijke vraag te stellen, bijvoorbeeld 'met welk kadastraal perceel overlapt dit rijksmonument?' kun je de informatie wel achterhalen. Maar dit heeft een aantal nadelen. 

Het eerste nadeel is een praktische: niet alle gebruikers beschikken over de kennis en/of tooling om dit soort vragen te kunnen stellen. Je hebt hier ofwel GeoSPARQL, ofwel een GIS systeem voor nodig. Dit is een drempel voor een deel van de potentiele gebruikers.

Het tweede nadeel heeft te maken met interpretatie van de data. Gebruikers kunnen op basis van zelf ontdekte ruimtelijke relaties verkeerde conclusies trekken. Objecten zullen soms ruimtelijk overlappen maar in feite niet de relatie met elkaar hebben die de gebruiker veronderstelt. Hoe interpreteer je bijvoorbeeld een situatie waar meerdere percelen met een rijksmonument overlappen? Of in welke mate topografische objecten die elkaar overlappen of raken, met elkaar te maken hebben? Kunstwerken die onder provinciale wegen doorlopen hoeven bijvoorbeeld geen onderdeel uit te maken van het provinciale wegennetwerk, maar kunnen alles te maken hebben met het waterschap ter plaatse. Of denk aan BGT wegdelen die in het gebied van een waterschap vallen, maar waar dat waterschap niet voor verantwoordelijk is.

Aan de andere kant is het ook niet te doen om alle mogelijke ruimtelijke relaties die er zijn tussen objecten, administratief vast te leggen. Dit zou veel te veel relaties opleveren, waardoor gebruikers door de bomen het bos niet meer zien. 

De vraag is dan: welke ruimtelijke links ga je administratief vastleggen, en welke niet? Binnen DISGeo moet hierover nagedacht worden. 

Om in de demonstrator met de datasets in samenhang te kunnen werken, zijn er tijdens de High 5 ad hoc linksets (koppeltabellen) tussen de data gemaakt. Meer hierover in [de geleerde les over linksets](#linksetjes-snel-gemaakt-maar-niet-beheerd).

## Wat kan je dan met die links

Op het moment dat die links tussen individuele objecten uit verschillende registraties er zijn, wordt werken met de data veel eenvoudiger. Dit laat de demonstrator zien. 

Je kunt bijvoorbeeld eenvoudig door de data browsen. We kunnen nu met behulp van een tool zoals Ontodia door data die gelinkt is heen klikken en daarbij zonder enige moeite doorklikken van een BOR object van een provincie naar het BGT object en van daaruit doorklikken naar het corresponderende GWSW object. Over de grenzen van registraties heen, waarbij de data echt fysiek op verschillende plekken staat. 

Je kunt op basis van deze gelinkte registraties ook eenvoudig rapportjes maken uit de data. Via de Ontodia browser kun je ook, als je een interessant data patroon bij elkaar hebt geklikt, daar een query van maken, die een beetje aanpassen in een query bouwtool en het resultaat vervolgens op een dashboard laten zien. 

Tenslotte kun je ook complexe analyses uitvoeren waarbij je baat hebt bij het gekoppeld zijn van de data. 

## Linksetjes... snel gemaakt, maar niet beheerd

Er zijn tijdens de High 5 meerdere linksets gemaakt, bijvoorbeeld tussen scholen uit de Duo dataset en BAG verblijfsobjecten en tussen Rijksmonumenten uit de RCE dataset en kadastrale percelen. Dat is, bij een dataset van beperkte omvang, vrij eenvoudig te doen met behulp van een SPARQL query, als er hiervoor maar aanknopingspunten in de data zijn. Het eerste 'linksetje' verscheen al tijdens de eerste uurtjes van de High 5. 

Zulke linksets worden echter vaak eenmalig gemaakt op basis van een query. Terwijl de desbetreffende links, die relaties tussen objecten vastleggen, eigenlijk in de data zouden moeten zitten en beheerd worden. De data wijzigt immers voordurend. Bovendien zou de kwaliteit van belangrijke links, zeker links van en naar basisregistraties, de verantwoordelijkheid van een data eigenaar moeten zijn. Dit beheer en eigenaarschap is er echter meestal niet, want wie is verantwoordelijk voor de linkset? Wie beheert de links en betaalt daar dus ook voor? 

Er zijn tegenwoordig al aardig wat als linked data gepubliceerde (overheids- geo-) datasets in Nederland. *Maar deze data is vrijwel nooit gelinkt aan andere datasets!* Het gaat in andere woorden veelal om vier sterren, geen vijf sterren linked data - de vijfde ster betreft namelijk het gelinkt zijn van de data. 

Er zijn maar enkele voorbeelden die we kennen van een beheerde linkset tussen basisregistraties; tussen de BRT en de BAG, de BRK en de BAG en de BGT en de BAG.

De linkset tussen de BRT en de BAG is een goed voorbeeld van een koppeling tussen twee datasets waarvan het beheer tegenwoordig geregeld is. Als onderdeel van het werkproces rondom het actualiseren van BRT data wordt ook gekeken naar de BAG panden, met als resultaat relaties tussen BRT objecten en gerelateerde BAG panden. Deze links werden tot voor kort echter weer weggegooid; tegenwoordig wordt deze informatie doorgespeeld aan het Kadaster data science team dat de linkset tussen BRT en BAG publiceert en actueel houdt.

Tijdens de High 5 gemaakte linksets: 
- Tussen BRK aliases (om verschillende URIs voor percelen te koppelen)
- Tussen BRK percelen en RCE Rijksmonumenten
- Tussen DUO onderwijsaanbieders en BAG verblijfsobjecten
- Tussen NHR adresgegevens en BAG nummeraanduidingen

Bij de vorige DISGeo demontrator kwam dit punt ook al naar voren: zie de uitleg in [governance op het snijvlak](https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak). Het is noodzakelijk dat niet alleen de objecten uit basisregistraties (en ook andere registraties), maar ook de *links tussen objecten* (relaties) beheerd worden. Zoals een toeschouwer van de einddemo op de laatste dag van de High 5 opmerkte: Het moet voor de gebruiker duidelijk zijn met welke actualiteit hij/zij werkt. Dit geldt ook voor de relaties die er tussen objecten zijn gelegd, want deze zijn gevoelig voor verandering als objecten veranderen. In de high 5 liepen we niet expliciet tegen problemen met actualiteit aan, maar we nemen dit punt wel mee in ons verdere werk voor DiS Geo. 

## Uniforme referentie naar basisregistraties

In de huidige praktijk is er gebrek aan eenduidigheid bij het refereren naar objecten uit basisregistraties, vanuit een eigen dataset of door basisregistraties onderling. Dit probleem is eerder al onderkend tijdens een [linked data onderzoek in INSPIRE context](https://github.com/inspire-eu-rdf/inspire-rdf-guidelines/issues/37).

Internationaal is er een gestandaardiseerd lijstje van linksoorten om te linken van het ene geo-object naar het andere (denk aan `within`, `touches`, `contains`). Dit is beschreven in Spatial Data on the Web [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links). 

Wat echter nog ontbreekt, is een gestandaardiseerde property waarmee partijen kunnen linken naar objecten in basisregistraties, op zo'n manier dat gebruikers kunnen zien dat het naar een basisgegeven linkt. Zo'n property zou gestandaardiseerd moeten worden in de DISGeo vocabulaire onder bijvoorbeeld de naam: `disgeo-object-ref` of `basisgegeven-ref`.

We vragen ons nog wel af of zo'n generieke verwijzing voldoende is, of dat wilt kunnen zien naar wat voor soort object de link verwijst. Bijvoorbeeld: `disgeo-pand-ref`, `disgeo-kunstwerk-ref`. Overwegingen hierbij:
- Meestal is een generieke link voldoende: je kunt achterhalen wat voor type object het is, door de link te volgen. 
- In het geval dat een object linkt naar meerdere basisregistratie objecten, dan hebben specifiekere referenties meerwaarde, want je kunt dan aan de linknaam zien om wat voor objecten het gaat. Je hoeft ze dan niet op te halen om te zien om wat voor type objecten het gaat .
- Als zulke, specifiekere links er zijn kun je op basis daarvan ook kwaliteitscontroles uitvoeren.

Er zijn ook andere standaarden die dit soort linknamen definiëren, bijvoorbeeld:
- Het top level model van de nieuwe NTA 8035 definieert een aantal relaties zoals `heeftBegrenzing`.
- De [building ontology](https://w3c-lbd-cg.github.io/bot/) definieert semantische relaties met geo-objecten, zoals `hasBuilding`. 
- Semantic Sensor Network Ontology [[vocab-ssn]] standaardiseert de link van metingen naar het object waarvan een eigenschap gemeten wordt.

Een gestandaardiseerde `disgeo-object-ref` staat niet in de weg van het gebruik van deze andere standaarden. Het is geen enkel probleem, sterker nog het verhoogt juist de interoperabiliteit, om in deze gevallen twee keer de link te leggen: één keer met behulp van de door DisGeo gestandaardiseerde link, en één keer met de link uit de andere standaard. 

<aside class='note'>
  Het is in linked data niet ongebruikelijk om één relatie tussen twee objecten met meerdere triples vast te leggen. Dit kan door het expliciet uitdrukken van deze triples, of bijvoorbeeld door afleiden van extra relaties op basis van inferencing.

  Naast de relatief semantisch zwakkere disgeo relaties is het alsnog mogelijk om:
  - als het object exact hetzelfde object is als in de basisregistratie,
    - direct gebruik te maken van de basisregistratie URI als onderwerp van eigen triples;
    - gebruik te maken van owl:sameAs om de objecten gelijk te stellen.
  - als het object niet exact hetzelfde is, maar wel gerelateerd, andere semantische relaties te gebruiken om de relatie tussen de objecten te beschrijven.
</aside>

## Open en gesloten linked data
Hoe koppel je open en gesloten knowledge graphs aan elkaar? Afhankelijk van wat je linked data opslagsysteem (oftwel triple store) kan is het tegenwoordig al mogelijk om ofwel op graph (dataset) niveau, ofwel op objectniveau in te stellen op basis van welke voorwaarden gebruikers de data mogen ontvangen. 

Twee belangrijke use cases hiervoor zijn: 
- Als de data belangrijk is voor een commercieel verdienmodel, zoals bijvoorbeeld bij een bedrijf dat data verkoopt voor gebruik in apps. Dit bedrijf wil aan de ene kant goed gevonden worden en dus de data vindbaar via Google laten zijn, maar aan de andere kant ook weer niet de complete data in al haar rijkheid, want die wil ze kunnen verkopen. Een deel van de data is dan open, een deel alleen beschikbaar voor wie betaalt. Denk bijvoorbeeld aan een online krant.
- Als de data privacygevoelig is. Je wilt dan een gebruiker alleen toegang geven tot persoonlijke informatie als via bijvoorbeeld Digid geverifiëerd is dat die persoon die data mag zien. 

In de demonstrator hebben we dit niet uitgebreid laten zien, juist omdat het al eenvoudig is om dit te doen. Het is wel een belangrijk punt om je te realiseren: linked data betekent niet per sé linked OPEN data; en gesloten en open linked data kunnen aan elkaar gekoppeld worden waarbij authenticatie en authorisatie van de gesloten data met standaard web technieken eenvoudig en goed geregeld zijn. 

## Links tussen netwerken en fysieke objecten

Geo-objecten spelen vaak een rol in een netwerk, bijvoorbeeld rioolputten in een waterafvoernetwerk, bruggen in een wegtransportnetwerk, of sluizen in een watertransportnetwerk. 

De beheerders van deze netwerken (bijvoorbeeld waterschappen, wegbeheerders) leggen doorgaans de fysieke- en beheerkenmerken van zulke objecten vast in een systeem, en het netwerk met haar knooppunten en verbindingen in een ander systeem. Bij het beantwoorden van vragen zoals in onze brandweer use cases, maar ook bijvoorbeeld in vele mobiliteits-use cases, zijn *beide* van belang en vooral ook *in samenhang met elkaar*. 

Wij trekken hieruit de conclusie dat DISGeo de mogelijkheid moet bieden om netwerkmodellen op te nemen. Dit netwerkmodel is idealiter geharmoniseerd met de nieuwe NEN 2660, omdat deze standaard gevolgd zal worden in de systemen die gebruikt worden voor het beheer van de objecten. 

Het betekent ook dat er links gelegd moeten worden tussen de knooppunten en verbindingslijnen in het netwerk enerzijds, en de fysieke objecten die het netwerk realiseren in de fysieke werkelijkheid anderszijds. Bijvoorbeeld: een link tussen het BGT waterdeel dat een deel van een kanaal representeert en de corresponderende verbindingslijn in het waternetwerk.

Alle fysieke objecten én alle knooppunten en verbindingslijnen moeten dus een ID hebben zodat er links naartoe gelegd kunnen worden. Met andere woorden, ze moeten voldoen aan Spatial Data on the Web [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids).

## Ruimtelijke vragen in linked data nu beter ondersteund
GeoSPARQL [[geosparql]] is de standaard querytaal voor het ruimtelijk bevragen van linked geodata. Onze ervaringen tijdens deze high 5 lieten zien dat vergeleken met 2 á 3 jaar geleden  de ondersteuning voor GeoSPARQL enorm verbeterd is, zowel wat betreft compliance aan de standaard, als wat betreft performance. Er heeft een verschuiving plaatsgevonden van academische implementaties naar commerciële. 

De meeste triple stores die GeoSPARQL support hebben, bieden: 
- Voor het uitdrukken van geometrie: WKT en vaak ook GML. 
- 2D en 3D support. 
- WGS84 als coordinaatsysteem, meestal geen support voor andere ruimtelijke referentiesystemen.
- Voor ruimtelijke relaties meestal alleen Simple Features (geen Egenhofer en RCC8). 
- Ruimtelijke indexering is meestal gebaseerd op WKT, 3D, en WGS84 coordinaten, dus je kan niet op centimeter nauwkeurigheid selecteren. 
- De GeoSPARQL onderdelen Query rewrite en RDFS entailment worden meestal niet ondersteund. 

De volgende tabel geeft voor een aantal gangbare triple stores aan of ze voldoen aan de GeoSPARQL standaard en hoe de performance is wat betreft ruimtelijke vragen. 

product    | compliance | performance
-----------|------------|------------
[GraphDB](http://graphdb.ontotext.com)    | ja         | redelijk, maar met grote datavolumes zoals die van de basisregistraties niet toereikend
[Stardog](https://www.stardog.com)    | ja         | ja
[Virtuoso](https://virtuoso.openlinksw.com)   | ja         | ja
[MarkLogic](https://www.marklogic.com)  | nee        | ja
[parliament](https://github.com/SemWebCentral/parliament) | verouderd  | onbekend

De performance van GeoSPARQL-ondersteunende triple stores kan getest worden met deze [dataset for benchmarking GeoSPARQL](https://data.labs.kadaster.nl/geosparql-test). 

## Wanneer GeoSPARQL, wanneer GIS
In de geowereld hebben we natuurlijk al lang de mogelijkheid om ruimtelijke vragen te stellen. Maar gegeven de beschikbaarheid van geo linked data, wanneer is het dan beter om GeoSPARQL te gebruiken, en wanneer een GIS? Je kunt je dit voorstellen als een tweetrapsraket. Vaak is er, om een ruimtelijk probleem op te lossen, eerst een selectie nodig van allerlei relevante data in een bepaald gebied. Data, die in verschillende systemen staat. Vervolgens wordt op die dataverzameling nadere analyse gedaan om de gestelde vraag te beantwoorden. In zo'n geval spelen zowel GeoSPARQL als GIS een cruciale rol: 
- De selectievraag wordt beantwoord met GeoSPARQL. Hiermee kun je eenvoudig heterogene data bij elkaar zoeken, uit verschillende registraties of systemen, en ongeacht of dit geodata is of niet. Denk bijvoorbeeld aan een combinatie van BAG panden, bijbehorende wijken en buurten en de CBS statistieken van dit gebied.  
- De analysevraag wordt na het inladen van deze geselecteerde data vervolgens beantwoord in een GIS.

## GeoSPARQL in federatieve queries
Bij het gebruik van GeoSPARQL is er nog wel een technische beperking. Eén van de sterke punten van linked data is het kunnen bevragen van meerdere data endpoints binnen één query, waardoor je in één stap informatie kunt halen uit meerdere registraties. Je kunt, simpel gezegd, aan een triple store vragen: 

"Geef mij het BGT object Wegdeel met id 12345 en zoek ook even bij dit andere endpoint op wat er nog meer over dit wegdeel bekend is"

Als je hierbij echter een geovraag wilt stellen (bijvoorbeeld: welke putten uit endpoint GWSW vallen binnen het polygoon van wegdeel Y uit endpoint BGT?) is dat nog maar zeer beperkt mogelijk. Tussen 2 endpoints van dezelfde vendor, bijvoorbeeld twee Virtuoso endpoints, werkt het mogelijk nog wel, maar tussen 2 endpoints van verschillende triple store producten niet. Hier laat de interoperabiliteit ons dus in de steek. Een mogelijke verklaring hiervoor is dat de endpoints alleen geovragen willen beantwoorden waarbij de objecten in de eigen ruimtelijke index staan.

Om te bewerkstelligen dat vendors dit mogelijk gaan maken, moet er in de GeoSPARQL standaard een aanbeveling komen over het ondersteunen van geovragen in federatieve queries. GeoSPARQL is ouder dan SPARQL 1.1, waarin federatie geregeld is.

In de demonstrator liepen we hier tegenaan bij de Castricum use case, en is dit opgelost door de gewenste query in stukken te knippen met een linkset tussen BGT en GWSW.

## Een adres is nog geen locatie
Bij objecten die een adres hebben, of aan een BAG verblijfsobject gekoppeld zijn, blijkt dit niet altijd te betekenen dat het object zich ook daadwerkelijk op dit adres bevindt. Pas dus altijd goed op hoe je dit interpreteert, en verifieer zo goed mogelijk wat er precies bedoeld wordt met een adreskoppeling. 

<aside class='example'>Tijdens de High 5 vonden we voor de Rotterdam use case een kinderdagverblijf vlak bij de locatie van ons fictieve incident. Althans... volgens het KvK vestigingsadres, waarvan ook Google ervan uitgaat dat dit de locatie van het kinderdagverblijf is. Echter, volgens de dataset van kinderdagverblijven bevindt dit kinderdagverblijf zich op een ander adres! Dit bleek het adres te zijn waar de bijbehorende stichting geregistreerd staat. Aan de link, met de naam <code>bagid</code>, is dit niet te zien. De kinderen bevinden zich dus daadwerkelijk op de locatie vlak bij de brand, maar als de brandweer was uitgegaan van de kinderdagverblijven dataset, hadden ze dit niet geweten. </aside>

Onze aanbeveling is om in DISGeo goed vast te leggen wat er precies wordt bedoeld met adreskoppelingen of andere indirecte koppelingen met een locatie. Betekent dit dat het object zich daadwerkelijk op die locatie bevindt? Of is het niet meer dan een administratieve aanduiding? Ook objecten met een indirecte koppeling aan een locatie kunnen dan in ruimtelijke vragen gebruikt worden, terwijl objecten met een administratieve locatieaanduiding daarbij niet meegenomen worden.

Bovendien zou het zinnige verrijking zijn om de daadwerkelijke locaties van objecten, waar dit van toepassing is, zo veel mogelijk op te nemen, naast eventuele administratieve aanduidingen zoals een postadres. Met een herkenbare link uiteraard. 


## Geen vendor lock in!
Tijdens de High 5, en ook tijdens het schrijven van deze Lessons Learned, waren we al snel zo lekker op dreef dat we ons op dag vier pas deze les realiseerden: 

We hadden helemaal geen afspraken vooraf gemaakt over de te gebruiken tooling en versies daarvan. En tóch werkte alles. 

Het feit dat we linked data standaarden gebruikten, en dat willekeurig welke tooling deze standaarden blijkbaar zonder ambiguiteiten ondersteunt, maakte het mogelijk dat we gewoon aan de slag konden met de toolset van onze voorkeur en daarbij geen enkel interoperabiliteitsprobleem ondervonden hebben. Dit is een belangrjike constatering, want hoewel het altijd de belofte van datastandaarden is geweest dat er interoperabiliteit mee bereikt wordt, werd dat in de praktijk nooit volledig waargemaakt. In dit geval wel!

## Samenhang werkt echt
Door het op de juiste manier doorvoeren van de links, in de tijdens de High 5 gerealiseerde linked data variant van de basisregistraties (de knowledge graph), is de waarde van de links direct zichtbaar te maken. Met een combinatie van de juiste [tooling](http://ontodia.org) en de juiste standaarden hebben we gezien dat bevragen van basisregistraties over hun silo grenzen heen prima werkt. De relaties tussen objectinstanties in bijvoorbeeld de WOZ, BAG en BRK zijn direct inzichtelijk te maken zonder de noodzaak om alle data in één systeem te laden.

Als een organisatie een interne, gesloten dataset gebruikt die volgens de standaarden refereert aan een basisregistratie is de koppeling direct bruikbaar waardoor de interne dataset direct verrijkt kan worden met gegevens uit de basisregistratie. Dit is te zien in de [Castricum use case](#brandweer-bluswater-case-castricum).

Zoals genoemd in één van de lessons learned, [Uniforme referentie naar basisregistraties](#uniforme-referentie-naar-basisregistraties), kan de relatie met de basisregistratie ook dienen als kwaliteitscheck voor de interne data.

<aside class='example'>Als een interne registratie gerelateerd is aan een verblijfsobject maar de link naar de basisregistratie wijst naar een pand is dat een indicatie van een data kwaliteits probleem.</aside>

<aside class='note'>De samenhang op deze manier is voornamelijk bruikbaar voor het verkennen van informatie van enkele instanties, grootschalige analyse is niet zonder meer mogelijk.</aside>

## Hoe nu verder
Tenslotte plaatsen we bij het succes van deze High 5 de volgende kanttekening. De deelnemers aan deze vijf dagen waren, zoals één van hen zei, waren de 'crème de la crème' van de Nederlandse linked data community. We gingen uit van een te realiseren 'ideaalplaatje', dat we met behulp van linked data standaarden en tooling hebben weten te realiseren. Alles wat we bereikt hebben, is mede te danken aan de expertise die er deze week aan tafel zat. Dit laat zien dat de mogelijkheden bijna onbegrensd zijn, en dat met behulp van linked data de DISGeo ambities te realiseren zijn bij de huidige stand van de techniek, mits er voldoende kennis aanwezig is. 

We zouden een soortgelijk experiment eigenlijk nog een keer moeten herhalen met ontwikkelaars die minder linked data kennis hebben. 