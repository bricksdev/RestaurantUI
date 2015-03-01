/**
 * define access views
 */
define(["js/views/LoginView","js/views/RegisterView"],
		function(LoginView,RegisterView){
	var acccessVeiws = acccessVeiws || {
		login:LoginView,
		register:RegisterView
	};
	
	return acccessVeiws;
});