Vertaaltypen
Tekstvertaling
Brontekst
3637 / 5000
Vertaalresultaten
# The Lessons Learned
Much has been learned during the development of the demonstrator. These are important insights for the further development of DiSGeo and for various standards activities. What turned out to work well, and what did not (yet), is described in this chapter.

## We don't see a lot of links yet

Many of the datasets that we use in the demonstrator are published on the basis of linked data standards, but do not contain links to other data, including existing key registers. Yet it is precisely these links that are very valuable. The Spatial Data on the Web Best Practices [[sdw-bp]] recommends this in [best practice 3: Link resources together to create the Web of data] (https://www.w3.org/TR/sdw-bp / # linking). Geodata only really becomes part of the web of data if it contains administrative links to other data on the web.

Our basic registrations are ideally suited to link to. Yet this still happens far too little.

<aside class = "example">
<ul>
  <li> The data that we use in the Castricum Fire Service Water Case does not contain any administrative links to key registers. Links between, for example, IMGeo wells and GWSW sewer wells would have a lot of added value. </li>
  <li> The National Monuments dataset should actually contain links between national monuments and cadastral parcels, but these are not present.
  </li>
</ul>
</aside>

Both datasets do contain * spatial relationships * with objects from basic registers. By asking a spatial question yourself, for example 'with which cadastral parcel does this national monument overlap?' you can retrieve the information. But this has some drawbacks.

The first disadvantage is a practical one: not all users have the knowledge and / or tooling to be able to ask these kinds of questions. You need either GeoSPARQL or a GIS system for this. This is a threshold for some of the potential users.

The second drawback has to do with the interpretation of the data. Users can draw wrong conclusions based on self-discovered spatial relationships. Objects will sometimes overlap spatially but in fact will not have the relationship with each other that the user assumes. For example, how do you interpret a situation where several parcels overlap with a national monument? Or to what extent topographic objects that overlap or touch each other are related? Structures that run under provincial roads, for example, do not have to be part of the provincial road network, but may have everything to do with the local water board. Or think of BGT parts of road that fall within the area of ​​a water board, but for which that water board is not responsible.

On the other hand, it is also impossible to record administratively all possible spatial relationships that exist between objects. This would create far too many relationships, so that users can no longer see the wood for the trees.

The question then is: which spatial links are you going to record administratively and which not? This needs to be considered within DiSGeo.

To be able to work in conjunction with the datasets in the demonstrator, ad hoc link sets (linking tables) were created between the data during the High 5. More about this in [the lesson learned about link sets] (# link sets-quickly-created-but-not-managed).

<aside class = 'advisement'>

** Considerations for Continuation **

Within DISGeo, think carefully about which spatial relationships should be recorded in the data. In addition, more emphasis should be placed on recording existing relationships.

</aside> 

## What can you do with those links

When the links between individual objects from different registrations exist, working with the data becomes much easier. This shows the demonstrator.

For example, you can easily browse through the data. Using a tool such as Ontodia, we can now click through data that has been linked and click through without any effort from a BOR object of a province to the BGT object and from there click through to the corresponding GWSW object. Across the boundaries of registrations, where the data is really physically in different places.

You can also easily create reports from the data based on these linked registrations. Via the Ontodia browser you can also, if you have clicked together an interesting data pattern, create a query from it, adjust it a bit in a query building tool and then show the result on a dashboard.

Finally, you can also perform complex analyzes that benefit you from linking the data.

<aside class = 'advisement'>

** Considerations for Continuation **

Within DiSGeo, emphasis has so far been placed mainly on the harmonization of the current geobase registrations by applying relationships, semantic harmonization and establishing the semantics between BGT, BRT, BAG, and WOZ in particular. From a policy point of view, it is of course essential that the information provided is correct, consistent and clear.

However, for broader adoption, much more attention should also be paid to the benefits that it offers the customer when he works with the same techniques. DiSGeo can be much more than a new, larger bin (silo) of geo-data that has been brought together. The great added value for buyers lies precisely in the relationship between that coherent object registration and the data around it, in registrations that are sector, domain or organization-specific (for example, the management data of the province of Noord Holland in one of our examples). This can be both open and closed data: it is precisely the integration with own, closed linked datasets that offers enormous advantages for organizations that can link their own data directly to the coherent object registration.

Within both the information model and the architecture of DisGeo, attention should therefore be paid to the benefits that it offers for consumers of the data when DisGeo data is published as linked data.

</aside>
## Link sets ... made quickly, but not managed

Several link sets were created during the High 5, for example between schools from the Duo dataset and BAG residential objects and between National Monuments from the RCE dataset and cadastral parcels. With a dataset of limited size, this is fairly easy to do with the help of a SPARQL query, as long as there are leads in the data for this. The first 'link set' already appeared during the first hours of the High 5.

Link sets made during the High 5:
- Between BRK aliases (to link different field URIs)
- Between BRK parcels and RCE National Monuments
- Between DUO education providers and BAG accommodation objects
- Between NHR address details and BAG number indications

However, such link sets are often created once from a query. Whereas the relevant links, which establish relationships between objects, should actually be in the data and managed. After all, the data is constantly changing. In addition, the quality of important links, especially links to and from key registers, should be the responsibility of a data owner. However, this management and ownership is usually not there, because who is responsible for the link set? Who manages the links and therefore pays for them?

There are already quite a few (government geo) datasets published as linked data in the Netherlands. * But this data is almost never linked to other datasets! * In other words, it usually concerns four stars, not five star linked data - the fifth star concerns the linking of the data.

There are only a few examples we know of a managed link set between key registers; between the BRT and the BAG, the BRK and the BAG and the BGT and the BAG.

The link set between the BRT and the BAG is a good example of a link between two datasets that are currently managed. As part of the work process for updating BRT data, the BAG properties are also examined, resulting in relationships between BRT objects and related BAG properties. Until recently, however, these links were thrown away again; nowadays this information is passed on to the Kadaster data science team that publishes the link set between BRT and BAG and keeps it up to date.

This point also emerged with the previous DISGeo demonstrator: see the explanation in [governance on the cutting edge] (https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak). It is necessary that not only the objects from basic registers (and also other registers), but also the * links between objects * (relations) are managed. As a spectator of the final demo on the last day of High 5 remarked: It must be clear to the user which current affairs he / she is working with. This also applies to the relationships that have been established between objects, because they are sensitive to change when objects change. In the High 5 we did not explicitly run into current issues, but we do take this point into account in our further work for DiSGeo.

<aside class = 'advisement'>

** Considerations for Continuation **

As already mentioned in the earlier demonstrator, [governance on the cutting edge] (https://docs.geostandaarden.nl/disgeo/dll/#governance-op-het-snijvlak) deserves much more attention. The necessity of this has also become clearly visible in this demonstrator.

When determining the content of the related object registration, the relationships between objects and the governance of these relationships must also be taken into account.

</aside>

## Uniform reference to key registers

In current practice, there is a lack of unambiguity when referring to objects from key registers, from one's own dataset or through key registers mutually. This problem has already been recognized during a [linked data research in INSPIRE context] (https://github.com/inspire-eu-rdf/inspire-rdf-guidelines/issues/37).

Internationally there is a standardized list of link types to link from one geo-object to another (think of `within`,` touches`, `contains`). This is described in Spatial Data on the Web [Best Practice 10: Use appropriate relation types to link Spatial Things] (https://www.w3.org/TR/sdw-bp/#entity-level-links).

What is still lacking, however, is a standardized property that allows parties to link to objects in key registers, in such a way that users can see that it links to basic data. Such a property should be standardized in the DISGeo vocabulary under the name: `disgeo-object-ref` or` basic data-ref`.

We still wonder whether such a generic referral is sufficient. It could be of added value to have more specific references that show you what kind of object the link is pointing to. For example: `disgeo-property-ref`,` disgeo-artwork-ref`. Considerations in this regard:
- Usually a generic link is sufficient: you can find out what type of object it is by following the link.
- In the event that an object links to several basic registration objects, then more specific references have added value, because you can then see what kind of objects it concerns from the link name. You don't have to pick them up to see what type of objects they are.
- If there are such more specific links, you can also perform quality checks based on them.

There are also other standards that define these kind of link names, for example:
- The top level model of the new NTA 8035 defines a number of relations such as `hasBoundary`.
- The [building ontology] (https://w3c-lbd-cg.github.io/bot/) defines semantic relationships with geo-objects, such as `hasBuilding`.
- Semantic Sensor Network Ontology [[vocab-ssn]] standardizes the link of measurements to the object of which a property is being measured, `hasFeatureOfInterest`.

A standardized `disgeo-object-ref` does not prevent the use of these other standards. It is not a problem at all, in fact it increases the interoperability, to make the link twice in these cases: once with the help of the link standardized by DisGeo, and once with the link from the other standard. .

<aside class = 'note'>
  It is not uncommon in linked data to record one relationship between two objects with multiple triples. This can be done by expressing these triples explicitly or, for example, by deriving additional relationships based on inferencing.

  In addition to the relatively semantically weaker disgeo relations, it is still possible to:
  - if the object is exactly the same object as in the key register,
    - directly use the basic registration URI as the subject of your own triples;
    - using `owl: sameAs` to equate the objects.
  - if the object is not exactly the same, but related, use other semantic relationships to describe the relationship between the objects.
</aside>

<aside class = 'advisement'>

** Considerations for Continuation **

A standardized reference would provide a lot of clarity to express a relationship to a basic register from other than basic registers. This helps to make it clear that the links within a dataset refer to one of the basic registers, making the coherence more visible.

Consider including this standardized relationship in the information model for the coherent object registration, so that it is available for reuse.

</aside>

## Open and closed linked data
How do you link open and closed knowledge graphs? Depending on what your linked data storage system (or triple store) is capable of, it is already possible nowadays to set either at graph (dataset) level or at object level based on which conditions users may receive the data.

Two major use cases for this are:
- If the data is important for a commercial earnings model, such as at a company that sells data for use in apps. On the one hand, this company wants to be found easily and therefore the data can be found via Google, but on the other hand not the complete data in all its richness, because it wants to be able to sell it. Some of the data is then open, some only available to those who pay. Consider, for example, an online newspaper.
- If the data is privacy sensitive. You only want to give a user access to personal information if, for example, Digid has verified that that person is allowed to see that data.

We have not shown this in detail in the demonstrator, precisely because it is already easy to do this. It is an important point to realize: linked data does not mean per s? linked OPEN data; and closed and open linked data can be linked to each other, whereby authentication and authorization of the closed data with standard web techniques are simple and well arranged.

<aside class = 'advisement'>

** Considerations for Continuation **

Linked data does not mean per s? linked OPEN data; closed and open linked data can be linked together. For an owner of closed linked data, this offers a lot of advantages, for example a province can take the open data from DisGeo as a starting point and thus enrich its own closed management data. This point must be brought to the attention of the professional field.

</aside>

## Links between networks and physical objects

Geo-objects often play a role in a network, for example sewers in a water drainage network, bridges in a road transport network, or locks in a water transport network.

The managers of these networks (for example water boards, road authorities) usually record the physical and management characteristics of such objects in one system, and the network with its nodes and connections in another system. When answering questions such as in our fire service use cases, but also, for example, in many mobility use cases, * both * are important and especially * in conjunction with each other *.

We conclude from this that DiSGeo must offer the possibility to include network models. This network model is ideally harmonized with the new NEN 2660, because this standard will be followed in the systems used for the management of the objects.

It also means that links must be made between the nodes and connecting lines in the network on the one hand, and the physical objects that realize the network in physical reality on the other. For example: a link between the BGT water part that represents part of a channel and the corresponding connection line in the water network.

So all physical objects and all nodes and connecting lines must have an ID so that links can be placed to them. In other words, they must conform to Spatial Data on the Web [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things] (https://www.w3.org/TR/sdw-bp/#globally-unique- ids).

<aside class = 'advisement'>

** Considerations for Continuation **

Include a general network model in DisGeo; try to make this comply with and / or connect to the new NEN 2660. Make sure that physical objects and network objects can be linked; in line with international best practices for this.

</aside>

## Spatial questions in linked data now better supported
GeoSPARQL [[geosparql]] is the standard query language for spatial querying of linked geodata. Our experiences during this High 5 showed that compared to 2? 3 years ago support for GeoSPARQL has improved enormously, both in terms of compliance to the standard and in terms of performance. There has been a shift from academic implementations to commercial implementations.

Most triple stores that have GeoSPARQL support offer:
- For expressing geometry: WKT and often also GML.
- 2D and 3D support.
- WGS84 as coordinate system, usually no support for other spatial reference systems.
- For spatial relationships usually only Simple Features (no Egenhofer and RCC8).
- Spatial indexing is usually based on WKT, 3D, and WGS84 coordinates, so you cannot select centimeter accuracy.
- The GeoSPARQL components Query rewrite and RDFS entailment are usually not supported.

The following table indicates for a number of common triple stores whether they comply with the GeoSPARQL standard and what the performance is like with regard to spatial requirements.

product | compliance | performance
----------- | ------------ | ------------
[GraphDB] (http://graphdb.ontotext.com) | yes | reasonable, but not sufficient with large data volumes such as those of the key registers
[Stardog] (https://www.stardog.com) | yes | Yes
[Virtuoso] (https://virtuoso.openlinksw.com) | yes | Yes
[MarkLogic] (https://www.marklogic.com) | no | Yes
[parliament] (https://github.com/SemWebCentral/parliament) | outdated | unknown

The performance of GeoSPARQL-supporting triple stores can be tested with this [dataset for benchmarking GeoSPARQL] (https://data.labs.kadaster.nl/geosparql-test).

<aside class = 'advisement'>

** Considerations for Continuation **

Many improvements have recently been made with regard to the support of spatial Linked Data in the various products. However, a number of matters in the various standards, including GeoSPARQL, are still insufficiently elaborated. These standards are important to DisGeo and DiSGeo should therefore support international developments for improving them that are currently underway. This can be done, for example, by participating in working groups from the DisGeo program or by conducting experiments with standards under development.

</aside>

## When GeoSPARQL, when GIS
In the geographic world, we have of course been able to ask spatial questions for a long time. But given the availability of geo-linked data, when is it better to use GeoSPARQL, and when a GIS? You can imagine this as a two-stage rocket. In order to solve a spatial problem, a selection of all kinds of relevant data in a certain area is often required. Data, which is stored in different systems. Subsequently, further analysis is carried out on that data collection in order to answer the question posed. In such a case, both GeoSPARQL and GIS play a crucial role:
- The selection question is answered with GeoSPARQL. With this you can easily search for heterogeneous data, from different registrations or systems, and regardless of whether this is geodata or not. Consider, for example, a combination of BAG buildings, associated districts and neighborhoods and the Statistics Netherlands statistics for this area.
- The analysis question is then answered in a GIS after loading this selected data.

In other words, geo-linked data and GIS are complementary.

<aside class = 'advisement'>

** Considerations for Continuation **

The realization that GIS and Geo-Linked Data are complementary and that each is preferred in their own field is an important insight and must be made clear to a wider audience.

</aside>

## GeoSPARQL in federated queries
There is still a technical limitation when using GeoSPARQL. One of the strengths of linked data is the ability to query multiple data endpoints within one query, allowing you to extract information from multiple registrations in one step. Simply put, you can ask a triple store:

"Give me the BGT object Road section with id 12345 and also look at this other endpoint to find out more about this road section"

However, if you want to ask a geo question (for example: which wells from endpoint GWSW fall within the polygon of road section Y from endpoint BGT?), That is only possible to a very limited extent. It may still work between two endpoints from the same vendor, for example two Virtuoso endpoints, but not between two endpoints from different triple store products. So this is where interoperability is failing us. A possible explanation for this is that the endpoints only want to answer geo questions where the objects are in their own spatial index.

In order for vendors to make this possible, the GeoSPARQL standard must contain a recommendation about supporting geo-queries in federated queries. GeoSPARQL is older than SPARQL 1.1, in which federation is regulated.

In the demonstrator we encountered this in the Castricum use case, and this was solved by cutting the desired query into pieces with a link set between BGT and GWSW.

<aside class = 'advisement'>

** Considerations for Continuation **

Asking spatial questions across different Linked Data sources is not yet well supported. This is something that must be resolved in the standards as there were no use cases for this before. DiSGeo could offer a nice use case for this. This is in line with the [previous recommendation] (# spatial-questions-in-linked-data-now-better-supported) about contributing to developments in the relevant international standards.

</aside>

## An address is not yet a location
For objects that have an address or are linked to a BAG residence object, this does not always appear to mean that the object is actually located at this address. So always be careful how you interpret this, and verify as well as possible what exactly is meant by an address link.

<aside class = 'example'> During the High 5 we found a daycare center for the Rotterdam use case close to the location of our fictitious incident. At least ... according to the Chamber of Commerce office address, which Google also assumes is the location of the daycare center. However, according to the nursery dataset, this nursery is located at a different address! This turned out to be the address where the associated foundation is registered. The link, named <code> bagid </code>, does not show this. The children are therefore actually at the location close to the fire, but if the fire brigade had used the daycare data set, they would not have known this. </aside>

Our recommendation is to properly record in DISGeo what exactly is meant by address links or other links with a location. Does this mean that the object is actually in that location? Or is it no more than an administrative indication? Objects with an indirect link to a location can then also be used in spatial questions, while objects with an administrative location indication are not included.

In addition, it would make sense to include the actual locations of objects, where applicable, as much as possible, in addition to any administrative indications such as a postal address. With a recognizable link of course.

<aside class = 'advisement'>

** Considerations for Continuation **

References to identifiers of addresses in the key registers, for example, do not always have the correct or even clear meaning. As a result, in spatial questions it is not possible to separate objects that are relevant in the context of the question from objects that are not. Consider, for example, the day nursery that, based on the business address (where the administration is located, but no children are taken care of), is returned in a search query for locations where children can be looked after.

It is important that (Basic) registrations clearly record what they mean by address links. To promote coherence, DisGeo should facilitate this (possibly with a standardized relationship as described in [5.4] (# uniform-reference-to-key registers).

</aside>

## No vendor lock in!
During the High 5, and also during the writing of these Lessons Learned, we quickly got on track so well that we only realized this lesson on day four:

We had not made any agreements in advance about the tooling to be used and versions thereof. And everything worked.

The fact that we used linked data standards, and that any tooling apparently supports these standards without ambiguity, made it possible that we could just get started with our preferred toolset without encountering any interoperability problems. This is an important observation, because while data standards have always promised to achieve interoperability, it has never been fully delivered in practice. In this case, yes!

<aside class = 'advisement'>

** Considerations for Continuation **

In addition to improving the coherence of key registers, the focus must also be on the benefits of using open standards. The linked data offered within DiSGeo can be used with a wide variety of commercial and open source tools. This means that organizations that use the DiSGeo infrastructure are not forced to use a specific tool or version.

Make this a starting point for both the information model for the coherent object registration, and the DisGeo architecture: base DisGeo on open standards so that users can make their own tool choice.

The general advice in developing both the information model for the coherent object registration and the technical architecture is: ensure a good connection with already existing standards and best practices for solving challenges as we have seen them in the demonstrator, instead of the wheel to start reinventing!

</aside>

## Coherence really works
By correctly entering the links in the linked data variant of the key registers (the knowledge graph) realized during the High 5, the value of the links can be made immediately visible. With a combination of the right [tooling] (http://ontodia.org) and the right standards, we have seen that querying key registers across their silo boundaries works fine. The relationships between object instances in, for example, the WOZ, BAG and BRK can be made immediately transparent without the need to load all data into one system.

If an organization uses an internal, closed dataset that, according to the standards, refers to a key register, the link is immediately usable, so that the internal dataset can be enriched directly with data from the key register. This can be seen in the [Castricum use case] (# fire-fighting water-case-castricum).

As mentioned in one of the lessons learned, [Uniform reference to key registers] (# uniform-reference-to-key registers), the relationship with the key register can also serve as a quality check for the internal data. If an internal registration is related to a residence object, but the link to the basic registration points to a property, this is an indication of a data quality problem.

<aside class = 'advisement'>

** Considerations for Continuation **

At the moment, the emphasis of the coherence is mainly on the integrity of the geobase registries that are initially part of DisGeo; this demonstrator has shown that cohesion also offers many advantages for exploring relationships, something that is a lot more interesting for an end user. This is because it implicitly assumes - and may also assume - that the data in DiSGeo is basically of good quality.

Encourage (or even in the long term: mandatory) the establishment of meaningful relationships between objects in DiSGeo, other basic registrations, sectoral and organization-specific registrations. This makes the value of the data for end users much higher.

</aside>

## What now
Finally, we would like to make the following comment on the success of this High 5. The participants in these five days were, as one of them said, were the 'crème de la crème' of the Dutch linked data community. We assumed an 'ideal picture' to be realized, which we were able to achieve with the help of linked data standards and tooling. Everything we have achieved is partly due to the expertise that was at the table this week. This shows that the possibilities are almost limitless, and that with the help of linked data the DISGeo ambitions can be realized with the current state of the art, provided that sufficient knowledge is available.
