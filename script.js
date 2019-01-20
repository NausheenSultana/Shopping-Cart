var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.totalCartCost = 0;
	$scope.discount = 0;
	$scope.shipCharge = 0;
	

	console.log("home Controller");
		  

  $http.get("data.json")
  .then(function(response) {
	  $scope.pincode = response.data.pincode;
      $scope.items = response.data.products;
	  console.log($scope.pincode);
	  $scope.items.map(function(item) {
		  item['qty'] = 1;
	  })
	  updateTotalCartCost();

  });
  
  
  $scope.deleteItem = function(id){    /*** function to delete item entirely***/
		$scope.items.splice(id, 1);
		updateTotalCartCost();
	  }
	  
	updateTotalCartCost = function(){   /*** function calculate total of item prices ***/
		$scope.totalCartCost = 0;
		$scope.items.forEach(function(item){
		  $scope.totalCartCost += item.qty * item.price + $scope.shipCharge;
	  })
	  if($scope.totalCartCost > 5000) {
		$scope.discount = 10 * $scope.totalCartCost / 100;
	  }
	  else {
		$scope.discount = 0;
	  }
	  console.log("Total Cost: "+ $scope.totalCartCost);
	}
	
	$scope.increaseQty = function(index) {  /*** function to increase quantity ***/
		$scope.items[index].qty += 1;
		updateTotalCartCost();
	}
	
	$scope.decreaseQty = function(index) {   /*** function to decrease quantity ***/
		if($scope.items[index].qty > 0){
			$scope.items[index].qty -= 1;
			updateTotalCartCost();
		}
	}
	$scope.delCost = function(pin) { 	/*** function for shipping chargess and est. delivery time ***/
		$scope.flag = 1;       /** flag variable to enable checkout button only if pincode is valid **/
		document.getElementById("chk").disabled = true;
		angular.forEach($scope.pincode, function (value, key) {
			//if($scope.pincode[pin].deliveryPrice>0)
				if($scope.flag==1){
						$scope.shipCharge = $scope.pincode[pin].deliveryPrice;
					//else
						//$scope.shipCharge = "Free";
					if($scope.shipCharge>0)
					{
						$scope.flag = 0;
						//document.getElementById("fd").style.display = none;
					}	
					
					$scope.min = $scope.pincode[pin].estimatedDays.min;
					$scope.max = $scope.pincode[pin].estimatedDays.max;
					if($scope.totalCartCost>0)
						document.getElementById("chk").disabled = false;
					
						
				}
	});
	}
}); 






/* function validateForm() {
	
	
		

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

 */


	
		 
		 
