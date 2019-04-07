
  function createNode(element) {
      return document.createElement(element);
  }
  
  function showCarousel(event, carouselContent, productName){
	  
	  $(".carousel-inner").empty();
	  $(".carousel-indicators").empty();
	  $(".modal-title").empty();
	  $(".modal-title").append("Product Showcase - "+productName);
	  if(carouselContent.length > 0) {
		  
		  for(var i=0; i< carouselContent.length; i++) {
			  
			  let li = createNode('li');
			  let cont = createNode("div");
			  let img_pic = createNode("img");
			  
			  $(li).attr("data-target", "#myCarousel");
			  $(li).attr("data-slide-to", ""+i+"");
			  
			  $(cont).addClass("item")
			  if(i == 0)
			  {
				 $(li).addClass("active") 
				 $(cont).addClass("active")
			  }
			  
			  $(img_pic).attr("src", carouselContent[i].href);
			  $(img_pic).attr("alt", carouselContent[i].alt);
			  $(img_pic).attr("width", carouselContent[i].width);
			  $(img_pic).attr("height", carouselContent[i].height);
			  
			  $(cont).append(img_pic);
			  $(".carousel-inner").append(cont);
			  
			  $(".carousel-indicators").append(li);	  
		  }
		 
	  }
	  
  }
  
  
 function setUp(){
	  const container = $('#products');
	  const url = "https://api.myjson.com/bins/1dbfy8";//"https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
	  fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    let group = data.groups;
	group.map(detail => {
		if(detail.hasOwnProperty('id')){
			
		let canvas  = createNode('div'),
			img = createNode('img'),
			span = createNode('span'),
			borderDiv = createNode('div');

        img.src = detail.hero.href;
		span.innerHTML = detail.name;		
		$(img).addClass("full_width");
		$(span).addClass("full_width");
		$(borderDiv).addClass("div_border");
		
		$(canvas).attr("data-toggle","modal"); 
		$(canvas).attr("data-target", "#myModal");
		
		$(canvas).addClass("canvas");
		$(canvas).addClass("col-md-4");
		
		
	   
        $(borderDiv).append(img);
	    $(borderDiv).append(span);
		$(canvas).append(borderDiv);
	 
        $(container).append(canvas);
		canvas.addEventListener("click", (event) => showCarousel(event, detail.images, detail.name));
	  }
    })
  })
  
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });  
  }
  
 
