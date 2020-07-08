# De Lessons Learned
Lessons learned komen hier...

## Linksetjes... snel gemaakt, maar niet beheerd

Er worden tijdens de High 5 linksets gemaakt, bijvoorbeeld tussen scholen uit de Duo dataset en BAG verblijfsobjecten en tussen Rijksmonumenten uit de RCE dataset en kadastrale percelen. Dat is vrij eenvoudig te doen, met behulp van een SPARQL query, als er hiervoor maar aanknopingspunten in de data zijn. Het eerste 'linksetje' verscheen zo al binnen de eerste uurtjes van de High 5. 

**MAAR** deze linksets worden vaak eenmalig gemaakt op basis van een query. Terwijl ze eigenlijk in de data zouden moeten zitten en **beheerd worden**. De data wijzigt immers voordurend. Dit beheer gebeurt echter meestal niet, want wie is verantwoordelijk voor de linkset? Wie beheert de links en betaalt daar dus ook voor? 

Er is bijvoorbeeld ook een linkset beschikbaar tussen BRK en BAG. Is open, maar nooit gepubliceerd (wel beschikbaar via labs). Maar uris hierin kunnen verouderd zijn want de id's van een van de datasets zijn veranderd. 

Een andere linkset, tussen de BRT en de BAG, wordt wel beheerd. Deze gebruiken we niet in de demonstrator, maar noemen we hier als goed voorbeeld van een koppeling tussen twee datasets waarvan het beheer netjes geregeld is. Als onderdeel van de het up to date houden van de BRT wordt ook gekeken naar de BAG panden. Deze relatie van BRT naar BAG werd vroeger echter weer weggegooid; nu wordt dit doorgespeeld aan het Kadaster data science team dat op basis van deze input de linkset tussen BRT en BAG up to date houdt.

Zie ook [governance op het snijvlak](https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak).  