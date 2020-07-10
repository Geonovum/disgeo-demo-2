# Data
Er zijn allerlei verschillende databronnen gebruikt in de demonstrator. Sommmige daarvan zijn al beschikbare productiedata of waren al eerder ten behoeve van experimenten geproduceerd, andere zijn ter gelegenheid van deze demonstrator als linked data gepubliceerd. 

Selectiecriteria voor de data: 
- Het uitgangspunt is dat ALLE data die we in de demonstrator gebruiken, Linked Data is. In sommige gevallen zetten we data zelf nog om.
- Primaire voorkeur voor productiedata.
- De data moet beschikbaar zijn voor tenminste één van onze twee use case gebieden: Rotterdam en Castricum

Het verzamelen en prepareren van de data is in de weken voorafgaand aan de High 5 grotendeels al gedaan. Om 14:45 op dag 1 van de High 5 is alle data die nodig is voor de demonstrator redelijk compleet. Dit ging sneller dan bij eerdere soortgelijke experimenten. 

Datasets waarbij is aangegeven dat ze via Kadaster Labs beschikbaar zijn, zijn te vinden op de [Kadaster Labs DISGeo landingspagina](https://data.labs.kadaster.nl/disgeo/), ook te bevragen via het [SPARQL endpoint](https://api.labs.kadaster.nl/datasets/disgeo/disgeo/services/disgeo/sparql). Op de landingspagina is beschreven welke gegevens per dataset beschikbaar zijn en onder welke licentie deze eventueel te gebruiken is.

## DisGeo data
Basisregistratie Adressen en Gebouwen (BAG)
- Productiedata via Kadaster
- https://bag.basisregistraties.overheid.nl
- Of via Kadaster Labs
- Er is een linkset BAG-BKK (adres - perceel) gemaakt.
 
Basisregistratie Topografie (BRT)
- Productiedata via Kadaster
- https://brt.basisregistraties.overheid.nl
- Of via Kadaster Labs

Digitale Kadastrale kaart (DKK)
- Kadastrale percelen
- Productiedata via Kadaster [link]??
- Of via Kadaster Labs

Basisregistratie Grootschalige Topografie (BGT)
- Is voor enkele delen van Nederland beschikbaar via Kadaster labs omgeving
- Beperkt aantal objecttypen

## Voor use case Brand 
Nationale Databank Wegverkeersgegevens (NDW)
- 125 miljoen triples (Ongeveer de omvang van een gemiddelde basisregistratie). 
- Is geodata, sensordata
- Gebied: Rotterdam
- Inclusief stukje Nationaal Wegenbestand (NWB)
- Via Kadaster Labs

Handelsregister - data Kamer van Koophandel (KvK)
- Gebied: Rotterdam

CBS Wijken en Buurten
- Staat op PLDN server

3D data
- Gebied: Rotterdam
- via CGI demo

Scholenregister
- Van Duo
- Via ?? Kadaster labs, PLDN, zelf gehost door DUO?
- Met bijbehorende Linkset-query tussen onderwijsaanbieders en BAG verblijfsobjecten: https://api.triplydb.com/s/l8IruFAHc

Kinderdagverblijven
- Data beschikbaar via PLDN
- Met koppeling naar de BAG

Rijksmonumentenregister
- Via RCE endpoint
- Linkset naar percelen 

Incidenten en BRK
- Een gesloten dataset

Chloridegehalten
- Chloridegehalten in oppervlaktewater 
- Van waterschap Hollandse Delta

## Voor use case Water
Rioleringsdata
- Van RIONED 
- Via hun SPARQL endpoint
- Is beschikbaar voor delen van Nederland
- Deze data is niet gekoppeld aan BGT. Rioolputten uit GWSW zouden aan IMGeo rioolputten gekoppeld kunnen worden via een linkset.

Beheer openbare ruimte (BOR) data
- Areaaldata van Provincie Noord-Holland van de trajecten N203 en N513 (Uitgeest, Castricum) 
- [SPARQL endpoint](https://data.labs.kadaster.nl/disgeo/AreaaldataN203N513/sparql/AreaaldataN203N513)
- Open en vrij te gebruiken

Kwaliteitsdata rioolwater
- Laat vervuiling van rioolwater zien met specifieke stoffen
- Misschien beschikbaar, nog niet zeker

Evt nog coronadataset RIVM, KLIC historische graafschade, WOZ waarde klasse. Is ook beschikbaar via Kadaster Labs. Maar deze data gebruiken we waarschijnlijk niet.

