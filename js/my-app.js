// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'HonduViajes',
	dialog: {
		title: 'HonduViajes',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: 'inicio',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

