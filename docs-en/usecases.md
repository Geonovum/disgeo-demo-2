# Use cases

## Fire brigade case Rotterdam

Relevant area: ** Rotterdam region **

There is a major fire in a building somewhere in Rotterdam. In order to fight the fire as effectively as possible and to limit the consequences for the environment, all kinds of information must be collected.

1. ** During the fire **, the fire brigade wants to know everything that is relevant, in a clear manner.
- Information that is relevant for firefighting (building, owner, company, SBI codes from the Chamber of Commerce, known risk factors, etc.)
- Information that is relevant for evacuation of the environment such as dangerous companies in the area, day care centers, schools, sports halls (for daycare), etc.

<figure>
    <img src = "media / disgeo-story.png" alt = "overview data sources" />
    <figcaption> Overview of the environmental information for a point in Rotterdam. The data comes from the Land Registry and the Chamber of Commerce and retrieved with the help of a linked data survey. </figcaption>
</figure>

2. ** Afterwards ** an impact analysis is done: what was the estimated impact of the fire; how many companies had to be evacuated; has there been traffic nuisance and what was the economic damage, how long did it last, what is the environmental damage, etc.

The use case is described in detail and shown in Data story [DisGeo data analysis] (https://labs.kadaster.nl/stories/disgeo/).

<aside class = "note"> You can also achieve this in a data warehouse where all kinds of relevant datasets are put together. However, the gain in this demonstrator is under the hood. The data remains at the source and is extensively integrated by means of linking, and can therefore be used in conjunction. </aside>

## Fire fighting water case Castricum

Relevant area: ** Castricum **

There is a fire at a location in Castricum. Fire brigade is on site and there is plenty of extinguishing.

If extinguishing takes a long time, questions arise about the availability of the extinguishing water:
- Can we continue to draw the water from the current point?
- What is the effect on the surrounding waters?
- The dike that lies along the water will it not collapse or dry out?
- What is the influence on the groundwater level and should this be taken into account given surrounding companies that depend on it?

The other big question is where the used extinguishing water goes. Usually it concerns a lot of water that is also often polluted, for example with chloride or asbestos particles. This plays a role:
- What is the fire extinguishing water contaminated with and what risks are involved, what is the possible environmental damage?
- Where does the used extinguishing water flow to (think of ditches that are connected to surrounding surface water, overflow wells, sewers that discharge water to the pumping station and water purification installations)?
- How much water is this, what is the capacity of the area for discharging the water, is there a risk of flooding?

This use case demonstrates linking your own closed data to key registration data. In this case, these are the public space management (BOR) objects, also known as area data, of the Province of Noord-Holland, which are linked to the corresponding BGT objects via a link and can ultimately be related to the GWSW sewer network data via the BGT. The [data story] (https://labs.kadaster.nl/stories/high5-imbor/) mainly elaborates on the question "* where does the used extinguishing water flow to *".

<figure>
    <img src = "media / sor-additional-story.png" alt = "overview data sources" />
    <figcaption> Overview of affected data sources </figcaption>
</figure>

Advantage of the availability of this information in conjunction:
- Scenario planning becomes possible on the spot and at any time
- With AI you can preventively detect weaknesses in the system

The use case is described in detail and shown in Data story [Integration Linked Data & Geo-data] (https://labs.kadaster.nl/stories/high5-imbor/).