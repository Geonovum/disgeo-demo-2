# Use cases

## Brandweer case Rotterdam

Relevant gebied – **regio Rotterdam**

Er woedt een grote brand in een pand ergens in Rotterdam. Om de brand zo goed mogelijk te kunnen bestrijden en de gevolgen voor de omgeving te beperken, moet er allerlei informatie verzameld worden. 

1. **Tijdens de brand** wil de brandweer alles weten wat relevant is, op een overzichtelijke manier.  
- Informatie die relevant is voor de brandbestrijding (pand, eigenaar, bedrijf, SBI codes van het KvK, bekende risicofactoren etc.)
- Informatie die relevant is voor evacuatie van de omgeving zoals gevaarlijke bedrijven in de buurt, kinderdagverblijven, scholen, sportzalen (voor opvang), etc.

2. **Achteraf** wordt er een impactanalyse gedaan: wat was de geschatte impact van de brand; hoeveel bedrijven moesten ontruimd worden; is er verkeershinder geweest en wt was de economische schade daarvan, hoe lang duurde dat, wat is de milieuschade, etc.

<aside class="note">Dit kun je ook voor elkaar krijgen in een datawarehouse waar allerlei relevante datasets bij elkaar worden gezet. De winst in deze demonstrator zit echter onder de motorkap. De data blijft bij de bron en is verregaand geïntegreerd door middel van linking, en daardoor in samenhang te gebruiken. </aside>

## Brandweer bluswater case Castricum

Relevant gebied – **Castricum**

Er is een brand op een locatie in Castricum. Brandweer is ter plaatse en er wordt volop geblust. 

Als het blussen lang duurt, ontstaan er vragen over de beschikbaarheid van het bluswater: 
- Kunnen we het water blijven onttrekken uit het huidige punt? 
- Wat is het gevolg voor de omliggende wateren? 
- De dijk die langs het water ligt, gaat deze niet inzakken of uitdrogen? 
- Wat is de invloed op de grondwaterstand en moet hier rekening mee gehouden worden gegeven omliggende bedrijven die daarvan afhankelijk zijn?

De andere grote vraag is waar het gebruikte bluswater naar toe gaat. Meestal gaat het om veel water dat bovendien vaak vervuild is, bijvoorbeeld met chloride of asbestdeeltjes. Hierbij speelt: 
- Waarmee is het bluswater verontreinigd en welk risico zit hier aan, wat is de mogelijke milieuschade?
- Waar stroomt het gebruikte bluswater naar toe (denk aan sloten die verbonden zijn met omliggend oppervlaktewater, overstortputten, riool dat water afvoert richting gemaal en waterzuiveringsinstallaties)?
- Hoeveel water is dit, wat is de capaciteit van de omgeving voor het afvoeren van het water, is er risico op overstromingen?

Deze use case demonstreert het koppelen van eigen, gesloten data aan basisregistratie data. In dit geval zijn dit de beheer openbare ruimte (BOR) objecten, ook wel areaaldata, van de Provincie Noord-Holland, die via een link verbonden zijn aan de corresponderende BGT objecten, en via de BGT uiteindelijk aan de GWSW rioolnetwerkdata. In de [data story](https://labs.kadaster.nl/stories/high5-imbor/) is vooral de vraag *"waar stroomt het gebruikte bluswater naar toe"* uitgewerkt.

Voordeel van de beschikbaarheid van deze informatie in samenhang:
- Scenario planning wordt mogelijk ter plekke en op elk moment 
- Met AI kun je zwakheden in het systeem preventief detecteren 