# Tools
The following tools have been used for the demonstrator.

## Ontodia
[Ontodia] (https://metaphacts.com/ontodia) is a linked data viewer with which you can visualize both data models and data. This tool clearly shows how you can browse through related data. What is special here is that the data does not have to be in one place. As long as there are links between datasets, you can seamlessly browse from object to object regardless of which datasets contain these objects, as long as they are published on the web.

You can view the data used in the demonstrator in Ontodia [here] (https://labs.kadaster.nl/demonstrators/graph-browser/).

## 3D viewer

This viewer shows an interactive 3D model of Rotterdam from which you can request information from DisGeo sources with SPARQL access. In this way you can combine the power of a GIS system (the 3D viewer is based on ArcGIS) with the power of linked data, allowing you to integrate administrative data with geodata.

## Data stories
[Data stories] (https://labs.kadaster.nl/stories/) are a medium that the Kadaster Science team uses to tell stories about data. A data story combines interactive data visualisations with explanatory text. The data visualisations are always based on current data because they use SPARQL queries.

- Data story [DisGeo data analysis] (https://labs.kadaster.nl/stories/disgeo/)
- Data story [Integration Linked Data & Geo-data] (https://labs.kadaster.nl/stories/high5-imbor/)

## Voyager
The Analytics tool [Voyager] (http://vega.github.io/voyager/) is a javascript library for data visualization that can work with CSV output from a SPARQL query. This is applied in the Rotterdam use case for the 'analysis afterwards' step.

## Visual SPARQL Builder
This tool makes it easier to create SPARQL queries yourself with a user interface.

In combination with Ontodia, this can be a powerful tool. If you have found an interesting data pattern in Ontodia, you can convert it into a query, which you can parameterize using the Visual Query Builder and then release it on a dataset to find comparable data. You can then, for example, make reports based on this.

<aside class = "example"> In Ontodia you view all data of the building where a fire occurred; apparently this is an interesting combination of features that allowed the incident to happen. With the help of the Visual Query Builder, you can apply this data pattern to all buildings in Rotterdam, so that you can find comparable buildings and take preventive measures to prevent a similar fire breaking out there. </aside>

## RML and R2RML
[RML] (https://rml.io/specs/rml/) and [R2RML] (https://www.w3.org/TR/r2rml/) are the specifications used to describe a mapping to JSON , XML, CSV and databases to convert to RDF format. There are tools available that make it possible to execute these mappings. Within these high-five, [CARML] (https://github.com/carml/carml) and [LinkedDataFactory] (https://github.com/netage) (soon available with open source license) are used.

## XRM
To make mappings in RML so that files can be converted to RDF, the tool [Expressive RDF Mapper] (https://zazuko.com/products/expressive-rdf-mapper/) was used. XRM works with a "domain specific language" and contains a simple syntax that can be used within Eclipse to design a mapping and then automatically works out the entire mapping. This makes mappings manageable and easy to build and adapt.