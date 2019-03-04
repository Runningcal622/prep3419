var makeTable = function(){
  var theData = [countryMaker("Country of origin","Labour exploitation","Sexual exploitation","Adult","Minor","Male","Female"),
  countryMaker("Haiti",98,2,4,96,58,42),
  countryMaker("Bolivia",96,4,93,7,62,38),
  countryMaker("Mexico",74,26,84,16,42,58),
  countryMaker("Guatemala",71,29,48,52,60,40),
  countryMaker("El Salvador",58,42,49,51,73,27),
  countryMaker("Honduras",54,46,57,43,67,33),
  countryMaker("Brazil",38,62,82,18,80,20),
  countryMaker("Dominican Republic",19,81,53,47,87,13),
  countryMaker("Colombia",16,84,53,47,87,13),
  countryMaker("United States of America",11,89,75,25,93,7)];

  var table = d3.select(".starter").append("table");
  var rows = table.selectAll("tr")
               .data(theData)
               .enter()
               .append("tr");


    rows.append("td")
        .text(function(d){return d.origin});
    rows.append("td")
        .text(function(d){return d.labor});
    rows.append("td")
        .text(function(d){return d.sexual});
    rows.append("td")
        .text(function(d){return d.adult});
    rows.append("td")
        .text(function(d){return d.minor});
    rows.append("td")
        .text(function(d){return d.male});
    rows.append("td")
        .text(function(d){return d.female});


  var countryMaker = function(origin,labor,sexual,adult,minor,male,female){
    return{
      origin:origin,
      labor:labor,
      sexual:sexual,
      adult:adult,
      minor:minor,
      male:male,
      female:female}
  }
}
