

createScreen = function(screenDetails)
{
	$.mobile.changePage(screenDetails.screenId+".html", { transition: "slideup", changeHash: true });
	
	$(document).on('pageinit', '#page1', function()
	{       
  		 createHeader(screenDetails.screenId,screenDetails.header);
		 createContent(screenDetails.content);
		 createFooter(screenDetails.footer);
	});
};


createHeader = function(screenId,header)
{
	var headerText= header.title;
  	$("#page1").append("<h1>header.title</h1>");
  	$("#page1").append("<a  data-role='button' onClick='goToSecondPage()'  data-transition='slide'>Go back to second page</a>").trigger( "create" );
  		 
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




