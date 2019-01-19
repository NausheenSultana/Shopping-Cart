var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.totalCartCost = 0;
	$scope.discount = 0;
	console.log("home Controller");
		  

  $http.get("data.json")
  .then(function(response) {
      $scope.items = response.data.products;
	  $scope.items.map(function(item) {
		  item['qty'] = 1;
	  })
	  updateTotalCartCost();
	  //$scope.count = 1;
	 // $scope.pincode = response.data.pincode;
  });
  $scope.deleteItem = function(id){
		$scope.items.splice(id, 1);
		updateTotalCartCost();
	  }
	  
	updateTotalCartCost = function(){
		$scope.totalCartCost = 0;
		$scope.items.forEach(function(item){
		  $scope.totalCartCost += item.qty * item.price;
	  })
	  if($scope.totalCartCost > 5000) {
		$scope.discount = 10 * $scope.totalCartCost / 100;
	  }
	  else {
		$scope.discount = 0;
	  }
	  console.log("Total Cost: "+ $scope.totalCartCost);
	}
	
	$scope.increaseQty = function(index) {
		$scope.items[index].qty += 1;
		updateTotalCartCost();
	}
	
	$scope.decreaseQty = function(index) {
		if($scope.items[index].qty > 0){
			$scope.items[index].qty -= 1;
			updateTotalCartCost();
		}
	}
}); 






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
						  var total = document.getElementById("sumAmt").innerHTML;
						  total = total - price;
						  document.getElementById("sumAmt").innerHTML = total;
					  }
				  }	
				}
			}
			

			
			
			});

			
			alert(pin);


         
    },

              

                                                               

            

            error: function (XMLHttpRequest, textStatus, errorThrown) {

                alert('Got an Error');

            }

        });
	//e.preventDefault();
    } 




	
		 
		 
