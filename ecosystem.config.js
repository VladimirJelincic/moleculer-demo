module.exports = {
	apps: [{
		name: "moleculer-demo",
		script: "npm",
		args: "run dev",
		instances: 1,            // Number of instances (set to 0 for auto-scaling)
		autorestart: true,       // Automatically restart if the app crashes
		watch: false,            // Enable watch and restart on file changes (not recommended for production)
		max_memory_restart: '1G', // Restart the app if it exceeds 1GB of memory usage
		env: {
			NODE_ENV: 'development', // Environment-specific settings (development)
			PORT: 3000,              // Any environment variables you want to set
		},
		env_production: {
			NODE_ENV: 'production',  // Environment-specific settings (production)
			PORT: 8080,
		}
	}],

	deploy: {
		production: {
			user: "vladimir",
			host: "192.168.124.26",
			ref: "origin/master",
			repo: "git@github.com:VladimirJelincic/moleculer-demo.git",
			path: "/home/vladimir/apps",
			"post-deploy": "npm install && pm2 start npm -- start"
		}
	}
};
