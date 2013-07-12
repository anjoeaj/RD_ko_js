

createScreen = function(screenDetails)
{
	$.mobile.changePage(screenDetails.screenId+".html", { transition: "slideup", changeHash: true });
	
	$(document).on('pageinit', '#'+screenDetails.screenId, function()
	{       
  		 createHeader(screenDetails.screenId,screenDetails.header);
		 createContent(screenDetails.content);
		 createFooter(screenDetails.footer);
	});
};


createHeader = function(screenId,header)
{
	//var mainDiv;
	//var leftDiv;
	//var middleDiv;
	//var rightDiv;
  	
  	$.get("settingsHeader.html", function (data) 
  	{
  		$("#"+screenId).append(data).trigger("pagecreate");
  		$("#"+screenId +" #headerTitle").append(document.createTextNode(header.title)).trigger("create");
    });
  	
};

getUiControl = function(requiredType){
	
}

createContent = function(content)
{
	var parentDiv = document.createElement("div");
	
	for(var i = 0; i < content.length; i ++){
		var rowDiv = document.createElement("div");
		
		//this will hold the text
		var nameParagraph = document.createElement("p");
		nameParagraph.appendChild(document.createTextNode(content[i].label));
		
		//corresponding input type from json
		var valueControl = document.createElement(content[i].type);
		
		//data binding for knockout
		valueControl.setAttribute("data-bind",content[i].dataBind);
		
		/*
		//for extra attributes
		if(content[i].extraAttributes!=undefined || content[i].extraAttributes!=null){
			//later
		}
		*/
		
		rowDiv.appendChild(nameParagraph);
		rowDiv.appendChild(valueControl);
		parentDiv.appendChild(rowDiv);
	}
	
	$("#page1").append(parentDiv);
	
	console.log("After creatiion of +++ "+parentDiv.innerHTML);
};

createFooter = function(footer)
{
	
};

goBack = function()
{
	window.history.back();
};

goToSecondPage = function()
{
	$.mobile.changePage("page2.html", { transition: "slideup", changeHash: true });
}


//unit test code
var samplejson = {
	id		: "pages/page1",
	
	rows	: [
				{
					type : "text",
					label : "Name",
					dataBind: "value : name"
				},
				{
					type : "text",
					label : "Age",
					dataBind: "value : age"
				},
				{
					type : "text",
					label : "Gender",
					dataBind: "value : gender"
				},
		
		
	]
};
console.log("Just before creating content");
createContent(samplejson);

