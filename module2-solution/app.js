(function(){
    angular.module("ShoppingListCheckOff",[])
        .controller("ToBuyShoppingController", ToBuyShoppingController)
        .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"]

    function ToBuyShoppingController(svc) {
        this.itemsToBuy = svc.toBuy;

        this.boughtItem = function(item) {
            svc.boughtItem(item);
        }
    }

    AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"]

    function AlreadyBoughtShoppingController(svc) {
        this.itemsBought = svc.bought;
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.toBuy = initialList();
        service.bought = [];

        service.boughtItem = function(item) {
            var idx = service.toBuy.indexOf(item);
            service.toBuy.splice(idx,1);
            service.bought.push(item);
        }

        function initialList() {
            return [
                getItem('cookies',10),
                getItem('juices',2),
                getItem('muffins',5),
                getItem('soda bottles',20),
                getItem('beers',12),
            ];
        }

        function getItem(name, amount) {
            return {
                name: name,
                quantity: amount
            }
        }
    }

})();