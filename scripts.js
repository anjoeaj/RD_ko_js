

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

   
createContent = function(content)
{
	
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




