let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-Jast",
			position: "bottom_center",
			config: {
				currencyStyle: "code", // One of ["code", "symbol", "name"]
				fadeSpeedInSeconds: 60,
				lastUpdateFormat: "HH:mm",
				maxChangeAge: 1 * 24 * 60 * 60 * 1000,
				maxWidth: "100%",
				numberDecimalsPercentages: 1,
				numberDecimalsValues: 2,
				scroll: "horizontal", // One of ["none", "vertical", "horizontal"]
				showColors: true,
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showChangeValueCurrency: false,
				showHiddenStocks: false,
				showLastUpdate: false,
				showPortfolioValue: false,
				showPortfolioGrowthPercent: false,
				showPortfolioGrowth: false,
				updateIntervalInSeconds: 300,
				useGrouping: false,
				virtualHorizontalMultiplier: 2,
				stocks: [
					{ name: "Tesla Inc.", symbol: "TSLA"},
					{ name: "Gold", symbol: "GC=F"},
					{ name: "Silver", symbol: "SI=F)"},
					{ name: "S&P Futures", symbol: "ES=F"},
					{ name: "Dow Industrial", symbol: "YM=F"},
					{ name: "Crude Oil", symbol: "CL=F"},
				]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}