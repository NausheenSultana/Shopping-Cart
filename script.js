 var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("data.json")
  .then(function(response) {
      $scope.items = response.data.products;
	  $scope.count = 1;
	 // $scope.pincode = response.data.pincode;
	  				
  });
  
}); 



$(document).ready(function(){
  $(".dell").click(function(){
	  alert("lll");
    $(this).hide();
  });
});
	

var count = 1;

function add(idq){
	var qid = document.getElementById(idq).innerHTML;;
	qid ++;
	alert(qid);
}
/* $(document).ready(function() {
	var count = 1;
			
			document.getElementsByClassName("qty").innerHTML = count;
			
			
			
			$(".dell").click(function(){
			alert("ji");
			$(this).hide();
			});


            $("#deleteee").click(function(event){
               $.getJSON('result.json', function(jd) {
                  $('#stage').html('<p> Name: ' + jd.name + '</p>');
                  $('#stage').append('<p>Age : ' + jd.age+ '</p>');
                  $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
               });
            });
				
         });
		 
		 
 */





function validateForm() {
	
	
		

        $.ajax({

            url: "data.json",                     

            type : 'GET',

            async: false,

            dataType: "json",

            //contentType: "application/json; charset=utf-8",

            success: function (data) {
 
			var flag = 0;
			var datas = data.pincode;
			var pin = document.getElementById("pin").value;
			
			$.each(datas, function (index, value) {
			
			for (var key in datas) {
				while(flag!==1){
				  if(pin === key)
				  {
					  flag = 1;
					  var price = value.deliveryPrice;
					  var cod = value.cashOnDelivery;
					  
					  alert(price);
					  console.log(key, datas[key]);
					  document.getElementById("chk").disabled = false;
					  if(price===0)
						  document.getElementById("stdS").innerHTML = "Free";
					  else
					  {
						  document.getElementById("stdS").innerHTML = price;
						  document.getElementById("fd").style.display = "none";
					  }
				  }	
				}
			}
			

			
			
			});

			
			alert(pin);
			
			
				
		/* 		var col = [];
			for (var i = 0; i < datas.length; i++) {
            for (var key in datas[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
		
		var prod = [['Image','Name', 'Price','Tagline','Desc','Plan']];
		
		$.each(datas, function (index, value) {

                    prod.push([value.imageUrl, value.name, value.price,  value.tagline, value.desc, value.plan]);
		});
		alert(prod);

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

		var thArr = ["Products", "Price", "Quantity", "Subtotal"];
		
		
		    for (var i = 0; i < thArr.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = thArr[i];
            tr.appendChild(th);
			}


        // ADD JSON DATA TO THE TABLE         for (var i = 0; i < col.length; i++) {
          
        for (var i = 1; i < 3; i++) {

            tr = table.insertRow(-1);
			var td = document.createElement("td");      // TABLE HEADER.
            var img = document.createElement("img");
			img.setAttribute("src", prod[i][0]);
			td.appendChild(img);
			tr.appendChild(td);
			
			
            tr.appendChild(th);

            for (var j = 1; j < 6; j++) {
                var tabCell = tr.insertCell(-1);
				if(j==1){
					var desc = document.createElement("span");
					desc.innerHTML = prod[i][4];
					tabCell.appendChild(desc);
				}
                tabCell.innerHTML = prod[i][j];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table); */
    },

              

                                                               

            

            error: function (XMLHttpRequest, textStatus, errorThrown) {

                alert('Got an Error');

            }

        });
	//e.preventDefault();
    } 




	
		 
		 
