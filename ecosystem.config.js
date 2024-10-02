module.exports = {
	apps: [{
		name: "demo",
		script: "npm",
		args: "run dev",
		instances: 0,            // Number of instances (set to 0 for auto-scaling)
		autorestart: true,       // Automatically restart if the app crashes
		watch: false,            // Enable watch and restart on file changes (not recommended for production)
		max_memory_restart: '1G', // Restart the app if it exceeds 1GB of memory usage
	}],

	deploy: {
		production: {
			user: "vladimir",
			host: "192.168.124.26",
			ref: "origin/master",
			repo: "git@github.com:VladimirJelincic/moleculer-demo.git",
			path: "/home/vladimir/apps",
			"post-deploy": "npm install && pm2 start npm -- start --name moleculer-demo"
		}
	}
};g
