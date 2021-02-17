const metadata = {
    "@ontext":{
        "@vocab":"https://schema.org/"
    },
    "@id":"jsonld_example_02",
    "@type":"Dataset",
    "name":"Example 02",
    "description":"This block of metadata is injected into the document."
}
  
function addJsonLd(){
    var head = document.getElementsByTagName("head")[0];
    var jsonld = document.createElement("script");
    jsonld.setAttribute("type", "application/ld+json");
    jsonld.textContent = JSON.stringify(metadata);
    head.appendChild(jsonld);
}
