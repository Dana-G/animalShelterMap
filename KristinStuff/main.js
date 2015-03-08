function SubmitClick() {
    var animalType = document.getElementById("animalSelect");
   /*  document.getElementById("demo").innerHTML = 
    animalType.options[animalType.selectedIndex].text; */
	var zipCode = document.getElementById("zipCode");
	var radius = document.getElementById("radiusSelect");
	//alert("Hello");
}//end function: SubmitClick

function getResults(resultsArray){
/* foreach item in array
	write item to p where ID = para+item# 
	https://msdn.microsoft.com/en-us/library/ie/ff679980%28v=vs.94%29.aspx
	Rails will return array of JSON objects*/
	//var resultsLength=resultsArray.length();
	//resultsArray.foreach(showResults);
	
	$.getJSON(resultsArray,function(data){
	$.each(data.shelters, function(index){
			var shelterObj=data.shelters[index];
			document.write("<p> Shelter Name: ",shelterObj.name," </p>");
			document.write("<p> Address: ",shelterObj.address," </p>");
			document.write("<p> City: ",shelterObj.city);
			document.write(" State: ",shelterObj.state);
			document.write(" Zip: ",shelterObj.zip," </p>");
			document.write("<p> Country: ",shelterObj.country," </p>");
			document.write("<p> Phone: ",shelterObj.phone);
			document.write(" Fax: ",shelterObj.fax);
			document.write(" Email: ",shelterObj.email," </p>");
			document.write("<p> URL: ",shelterObj.orgurl);
			document.write(" FaceBook URL: ",shelterObj.facebookURL," </p>");
			document.write("<p> Org. Type: ",shelterObj.orgType," </p>");
			document.write("<p> Org. Species: ",shelterObj.orgSpecies," </p>");
			document.write("<p> Areas Served: ",shelterObj.serveAreas," </p>");
			document.write("<p> Adoption Process: ",shelterObj.adoptionProcess," </p>");
			document.write("<p> About: ",shelterObj.about," </p>");
			document.write("<p> Meet the Pets: ",shelterObj.meetPets," </p>");
			document.write("<p> Services: ",shelterObj.services," </p>");
			document.write("<br />");
		})
	})//end function: getJSON
	
}//end function: getResults

function showResults(value, index, ar) {
	//this is the callback function for the results array's foreach loop
	//function callbackfn(value, index, array1)
	//value is JSON object
	//index is index of JSON object in resultsArray
	//ar is the resultsArray itself
	
	/* //first, parse the JSON
	var resultObj=JSON.parse(value);
	
	//need to get specific values from JSON object and display them
    document.write("Shelter name: " + result.ShelterName);
  //  document.write(" index: " + index);
    document.write("<br />"); */
}//end function: showResults



	$.getJSON("testData.json",function(data){
		$.each(data.shelters, function(index){
			//var shelterObj=data.shelters[index];
			//console.log(shelterObj.shelterName);
			//document.write("<p> Shelter Name: ",shelterObj.shelterName," </p>");
			
			
			var shelterObj=data.shelters[index];
			document.write("<p> Shelter Name: ",shelterObj.name," </p>");
			document.write("<p> Address: ",shelterObj.address," </p>");
			document.write("<p> City: ",shelterObj.city);
			document.write(" State: ",shelterObj.state);
			document.write(" Zip: ",shelterObj.zip," </p>");
			document.write("<p> Country: ",shelterObj.country," </p>");
			document.write("<p> Phone: ",shelterObj.phone);
			document.write(" Fax: ",shelterObj.fax);
			document.write(" Email: ",shelterObj.email," </p>");
			document.write("<p> URL: ",shelterObj.orgurl);
			document.write(" FaceBook URL: ",shelterObj.facebookURL," </p>");
			document.write("<p> Org. Type: ",shelterObj.orgType," </p>");
			document.write("<p> Org. Species: ",shelterObj.orgSpecies," </p>");
			document.write("<p> Areas Served: ",shelterObj.serveAreas," </p>");
			document.write("<p> Adoption Process: ",shelterObj.adoptionProcess," </p>");
			document.write("<p> About: ",shelterObj.about," </p>");
			document.write("<p> Meet the Pets: ",shelterObj.meetPets," </p>");
			document.write("<p> Services: ",shelterObj.services," </p>");
			document.write("<br />");
			
			
		})
	})//end function: getJSON