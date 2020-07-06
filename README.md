# disgeo-demo-2
Repository voor het ontwikkelen van de fase 2 demonstrator voor het project Doorontwikkeling in Samenhang (DiS Geo). 

In fase 1 hebben we een demonstrator ontwikkeld met als onderwerp 'gebouwen en wegen' die als doel had om te beproeven en aan een breed publiek te laten zien hoe geodata in samenhang kan worden gepubliceerd op het web. Hoe dit is afgelopen is te lezen in de [Lessons Learned](https://docs.geostandaarden.nl/disgeo/dll/). 

In fase 2, waarvoor deze repository is aangemaakt, gaan we een "High 5" sessie uitvoeren. In vijf dagen zetten we met een compact team een opvolger van de eerste demonstrator in elkaar. Doel: laten zien wat linked data voor DisGeo kan betekenen, uitgaande van de wens om datasets binnen en buiten de basisregistraties met elkaar te kunnen combineren en integraal te kunnen bevragen. Dit willen we etaleren en hiermee willen we inspireren. In tegenstelling tot fase 1, waarin we uitgingen van een situatie waarin data via web APIs verkrijgbaar is, hebben we in fase 2 als vertrekpunt het 'ideaalplaatje' dat alle data als linked data beschikbaar is. In een fase 3 kunnen we dan gaan experimenteren met tussenoplossingen om van de huidige situatie naar de ideale eindsituatie te komen.

De High 5 week is exploratief van aard; de taken zijn niet van tevoren uitgewerkt en er is geen vast programma. De uitkomst van deze High 5 is ook zeker niet een doelarchitectuur voor DisGeo. Architectuuroverwegingen en andere lessen die we leren tijdens het ontwikkelen van deze demonstrator zullen we weer uitgebreid documenteren, zodat iedereen er kennis van kan nemen.

# overzicht data (work in progress)
Standaard Linked Data Bronnen:
* BAG (via KDP)
* BRT (via KDP) (waarbij in de nieuwe BRT release een flinke update is geweest rond scholen)
* BGT (demo set via labs kadaster)

Scholenregister (DUO via KDP: Pano zoekt uit of dit interessant is)
* CBS Wijken en Buurten (via PLDN)
* NDW (proef Linked Data beschikbaar: Erwin vraagt Arnoud)
* KvK (of via Bart, of via download bestand, of APIs: erwin zoekt uit)
* Kinderdagverblijven (via Bart)
* Monumenten register (Pano)?

(niet lInked data, misschien wel interessant: 3D gebouwen van NL)

"water" gerelateerde datasets:
* GWSW: Rioned
  * https://sparql.gwsw.nl/repositories/TestDatastory is een set van Castricum
  * GWSW heeft een waardetype in gml met RD geometrieen en een geo:asWKT geometrie in WGS84

* DAMO: https://sparql.gwsw.nl is instance data vanuit West-Brabant, een testset van enkele afvalwatertransportleidingen en een rwzi. Nog erg basaal en klein, als test voor alles wat later dit jaar komen gaat.

Asset/Imbor gegevens:
* Er is een open dataset van Provincie Noord-Holland beschikbaar in Linked Data van omgeving Castricum/Uitgeest.
  * Geometrie is gestransformeerd naar een geo:asWKT geometrie in WGS84
  * overlap met de GWSW set op de Zeeweg (N513) kruising met de Heereweg (N512)
  * model: [areaaldata_ontologie](https://provincienh.github.io/OTL/)
  * hele basale mapping naar IMBOR-LD (mapping)[https://github.com/provincieNH/OTL/tree/master/mappings]

