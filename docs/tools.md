# Tools
De volgende tools zijn ingezet voor de demonstrator.

## Ontodia
[Ontodia](https://metaphacts.com/ontodia) is een linked data viewer waarmee je zowel datamodelen als data kunt visualiseren. Deze tool maakt mooi zichtbaar hoe je door samenhangende data heen kan browsen. Bijzonder hierbij is dat de data niet op één plek hoeft te staan. Je kunt, als er maar links tussen datasets aangebracht zijn, naadloos van object naar object browsen ongeacht in welke datasets deze objecten staan, als ze maar op het web gepubliceerd zijn. 

Je kunt [hier](https://labs.kadaster.nl/demonstrators/graph-browser/) de in de demonstrator gebruikte data bekijken in Ontodia. 

## 3D viewer

Deze viewer toont een interactief 3D model van Rotterdam van waaruit je met SPARQL access informatie kunt opvragen uit DisGeo bronnen. Je kunt zo de kracht van een GIS systeem (de 3D viewer is gebaseerd op ArcGIS) combineren met de kracht van linked data waardoor je administratieve gegevens kunt integreren met geodata.  

## Data stories
[Data stories](https://labs.kadaster.nl/stories/) zijn een medium dat het Kadaster Science team gebruikt om verhalen rondom data te vertellen. Een data story combineert interactieve datavisualisaties met toelichtende tekst. De datavisualisaties zijn altijd gebaseerd op actuele data omdat deze gebruik maken van SPARQL bevragingen. 

- Data story [DisGeo data analyse](https://labs.kadaster.nl/stories/disgeo/)
- Data story [Integratie Linked Data & Geo-data](https://labs.kadaster.nl/stories/high5-imbor/)

## Voyager
De Analytics tool [Voyager](http://vega.github.io/voyager/) is een javascript library voor data visualisatie die met CSV output van een SPARQL query kan werken. Deze wordt in de Rotterdam use case toepast voor de 'analyse achteraf' stap.

## Visual SPARQL Builder
Deze tool maakt het zelf maken van SPARQL queries eenvoudiger met een user interface. 

In combinatie met Ontodia kan dit een krachtige tool zijn. Als je in Ontodia een interessant gegevenspatroon hebt gevonden, kun je dit omzetten naar een query, die je met behulp van de Visual Query Builder kunt parameteriseren en dan loslaten op een dataset om vergelijkbare data te vinden. Op basis hiervan kun je dan bijvoorbeeld weer rapporten maken. 

<aside class="voorbeeld">Je bekijkt in Ontodia alle gegevens van het pand waar een brand is geweest; dit is blijkbaar een interessante combinatie van eigenschappen die ervoor zorgde dat het incident kon plaatsvinden. Dit gegevenspatroon laat je met behulp van de Visual Query Builder los op alle panden in Rotterdam, zodat je vergelijkbare panden kunt vinden en preventieve maatregelen nemen om te voorkomen dat daar een vergelijkbare brand uitbreekt.</aside>

## RML en R2RML
[RML](https://rml.io/specs/rml/) en [R2RML](https://www.w3.org/TR/r2rml/) zijn de specificaties die gebruikt worden om een mapping te beschrijven om JSON, XML, CSV en databases om te zetten naar RDF formaat. Er zijn tools beschikbaar die het mogelijk maken om deze mappings uit te voeren. Binnen deze high-five zijn [CARML](https://github.com/carml/carml) en [LinkedDataFactory](https://github.com/netage) (wordt binnenkort beschikbaar met open source licentie) gebruikt.

## XRM
Om mappings te maken in RML zodat bestanden omgezet kunnen worden naar RDF is de tool [Expressive RDF Mapper](https://zazuko.com/products/expressive-rdf-mapper/) gebruikt. XRM werkt met een "domain specific language" en bevat een simpele syntax die binnen Eclipse gebruikt kan worden om een mapping vorm te geven en vervolgens geautomatiseerd de volledige mapping uitwerkt. Hierdoor worden mappings beheersbehaar en makkelijk op te bouwen en aan te passen.
