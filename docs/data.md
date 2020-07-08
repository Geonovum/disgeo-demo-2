# Data
De gebruikte databronnen beschrijven we hier. 

Selectiecriteria voor de data: 
- Het uitgangspunt is dat ALLE data die we in de demonstrator gebruiken, Linked Data is. In sommige gevallen zetten we data zelf nog om.
- Primaire voorkeur voor productiedata
- De data moet beschikbaar zijn voor Rotterdam en/of Castricum

## DisGeo data
Basisregistratie Adressen en Gebouwen (BAG)
- Productiedata via Kadaster
- https://bag.basisregistraties.overheid.nl
- Of via Kadaster Labs

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
- Via ? waarsch PLDN
- Met koppeling naar de BAG

Rijksmonumentenregister
- Via RCE endpoint
- Willen we met percelen koppelen 

## Voor use case Water
Rioleringsdata
- Van RIONED 
- Via hun SPARQL endpoint
- Is beschikbaar voor delen van Nederland

Beheer openbare ruimte (BOR) data
- Areaaldata van Provincie Noord-Holland van de trajecten N203 en N513 (Uitgeest, Castricum) 
- [SPARQL endpoint](https://data.labs.kadaster.nl/disgeo/AreaaldataN203N513/sparql/AreaaldataN203N513)

Kwaliteitsdata rioolwater
- Laat vervuiling van rioolwater zien met specifieke stoffen
- Misschien beschikbaar, nog niet zeker

Evt nog coronadataset RIVM, KLIC historische graafschade, WOZ waarde klasse. Is ook beschikbaar via Kadaster Labs. Maar deze data gebruiken we waarschijnlijk niet.

