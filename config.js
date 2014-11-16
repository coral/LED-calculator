require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		"bootstrap" : { "deps" :['jquery'] }
	},
	paths: {
		angular: 'bower_components/angular/angular',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
		d3: 'bower_components/d3/d3',
		underscore: 'bower_components/underscore/underscore',
		jquery: 'bower_components/jquery/dist/jquery'
	},
	packages: [

	]
});
