/**
 * 定义产品视图
 */
define(["js/views/ProductsView","js/views/ProdetailsView"],
		function(ProductsView,ProdetailsView){
	var product = {
			product:ProductsView,
			prodetail:ProdetailsView
	};
	
	return product;
});