# De Lessons Learned
Lessons learned komen hier...

## belang van linken van geodata

Veel van de datasets die we gebruiken in de demonstrator zijn wel op basis van linked data standaarden gepubliceerd, maar bevatten geen links naar andere data, ook niet naar bestaande basisregistraties. Toch is juist dit gelinkt zijn erg belangrijk. De Spatial Data on the Web Best Practices [[sdw-bp]] beveelt dit aan in [best practice 3: Link resources together to create the Web of data](https://www.w3.org/TR/sdw-bp/#linking). Geodata wordt pas echt onderdeel van het web van data, als het administratieve links bevat naar andere data op het web. Onze basisregistraties zijn bij uitstek geschikt om naar te linken. Toch gebeurt dit nog veel te weinig. 

Bijvoorbeeld
- De water data die we in de Brandweer bluswater case Castricum gebruiken, bevat geen administratieve links naar basisregistraties [welke zouden dit dan moeten zijn?].
- De Rijksmonumenten dataset zou eigenlijk links tussen rijksmonumenten en kadastrale percelen moeten bevatten, maar deze zijn niet aanwezig.

Beide datasets bevatten wel *ruimtelijke relaties* met objecten uit basisregistraties. Door zelf een ruimtelijke vraag te stellen, bijvoorbeeld 'met welk kadastraal perceel overlapt dit rijksmonument?' kun je de informatie wel achterhalen. Maar dit heeft een aantal nadelen. 

- Niet alle gebruikers beschikken over de kennis en/of tooling om dit soort vragen te kunnen implementeren. Je hebt hier ofwel GeoSPARQL (voor redelijk eenvoudige selecties), ofwel een GIS systeem (voor analyses) voor nodig. 
- Gebruikers kunnen verkeerde conclusies trekken als bv meerdere percelen met een rijksmonument overlappen, of als twee objecten ruimtelijk overlappen maar eigenlijk niet de relatie met elkaar hebben die de gebruiker veronderstelt [voorbeeld] 

Aan de andere kant is het ook niet te doen om alle mogelijke ruimtelijke relaties die er zijn tussen objecten, administratief vast te leggen. Dit zou veel te veel relaties opleveren die niet allemaal toegevoegde waarde hebben. 

De vraag is dan: welke ruimtelijke links ga je administratief vastleggen, en welke niet? 

Om in de demonstrator met de datasets in samenhang te kunnen werken, zijn er ad hoc linksets (koppeltabellen) tussen de data gemaakt. Meer hierover in [[#linksetjes-snel-gemaakt-maar-niet-beheerd]].

## Linksetjes... snel gemaakt, maar niet beheerd

Er worden tijdens de High 5 linksets gemaakt, bijvoorbeeld tussen scholen uit de Duo dataset en BAG verblijfsobjecten en tussen Rijksmonumenten uit de RCE dataset en kadastrale percelen. Dat is vrij eenvoudig te doen, met behulp van een SPARQL query, als er hiervoor maar aanknopingspunten in de data zijn. Het eerste 'linksetje' verscheen zo al binnen de eerste uurtjes van de High 5. 

**MAAR** deze linksets worden vaak eenmalig gemaakt op basis van een query. Terwijl ze eigenlijk in de data zouden moeten zitten en **beheerd worden**. De data wijzigt immers voordurend. Dit beheer gebeurt echter meestal niet, want wie is verantwoordelijk voor de linkset? Wie beheert de links en betaalt daar dus ook voor? 

Er is bijvoorbeeld ook een linkset beschikbaar tussen BRK en BAG. Is open, maar nooit gepubliceerd (wel beschikbaar via labs). Maar uris hierin kunnen verouderd zijn want de id's van een van de datasets zijn veranderd. 

Een andere linkset, tussen de BRT en de BAG, wordt wel beheerd. Deze gebruiken we niet in de demonstrator, maar noemen we hier als goed voorbeeld van een koppeling tussen twee datasets waarvan het beheer netjes geregeld is. Als onderdeel van de het up to date houden van de BRT wordt ook gekeken naar de BAG panden. Deze relatie van BRT naar BAG werd vroeger echter weer weggegooid; nu wordt dit doorgespeeld aan het Kadaster data science team dat op basis van deze input de linkset tussen BRT en BAG up to date houdt.

Zie ook [governance op het snijvlak](https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak).  

## Open en gesloten linked data
Hoe koppel je open en gesloten knowledge graphs aan elkaar? Afhankelijk van wat je triple store kan, is het tegenwoordig al mogelijk om ofwel op graph niveau, ofwel op objectniveau in te stellen op basis van welke voorwaarden gebruikers de data mogen ontvangen. 

Er zijn twee belangrijke use cases hiervoor: 
- Als de data belangrijk is voor een commercieel verdienmodel, zoals bijvoorbeeld bij een bedrijf dat data verkoopt voor gebruik in apps. Dit bedrijf wil aan de ene kant goed gevonden worden en dus de data vindbaar via Google hebben, maar aan de andere kant ook weer niet de complete data in al haar rijkheid, want die wil ze kunnen verkopen. Een deel van de data is dan open, een deel alleen beschikbaar voor wie betaalt. Denk bijvoorbeeld aan een online krant.
- Als de data privacygevoelig is. Je wilt dan een gebruiker alleen toegang geven tot persoonlijke informatie als via bv digid geverifieerd is dat die persoon die data mag zien. 

## Netwerken in DisGeo opnemen, en koppelen met fysieke objecten

Objecten spelen vaak een rol in een netwerk, bijvoorbeeld rioolputten in een waterafvoernetwerk, bruggen in een wegtransportnetwerk, of sluizen in een watertransportnetwerk. 

De beheerders van deze netwerken (waterschappen, wegbheerders) leggen de fysieke- en beheerkenmerken van zulke objecten vast in een systeem, en het netwerk met haar knooppunten en verbindingen in een ander systeem. Bij het beantwoorden van vragen zoals in onze brandweer use cases, maar ook bijvoorbeeld in vele mobiliteits use cases, zijn *beide* van belang en vooral ook *in samenhang met elkaar*. 

Dit betekent dat DisGeo de mogelijkheid moet bieden om netwerkenmodellen op te nemen, en er dus een netwerk / topologie model in het DisGeo informatiemodel moet zitten. Dit netwerkmodel moet geharmoniseerd zijn met de nieuwe NEN 2660, omdat deze standaard gevolgd zal worden in de systemen die gebruikt worden voor het beheer van de objecten. 

Het betekent ook dat er links gelegd moeten worden tussen de knooppunten en verbindingslijnen in het netwerk enerzijds, en de fysieke objecten die het netwerk realiseren in de fysieke werkelijkheid anderszijds. Bijvoorbeeld: een link tussen BGT waterdeel dat een deel van een kanaal representeert en corresponderende verbindingslijn in waternetwerk.

Alle fysieke objecten én alle knooppunten en verbindingslijnen moeten dus een ID hebben zodat er links naartoe gelegd kunnen worden. Ze moeten voldoen aan Spatial Data on the Web [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids).