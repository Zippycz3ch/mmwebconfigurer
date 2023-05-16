/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
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
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left",   // This can be any of the regions.
			config:
			{
				displaySeconds: false,
				dateFormat: "dddd, Do MMMM YYYY",
			}
		},	
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_left",
			config: 
			{
				apikey: '514b0644-6a2b-4bc7-bfcd-0583de3c798c',
				currency: ['bitcoin'],
				conversion: 'USD',
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logo',
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
				showGraphs: false
			}
		},
        {
            module: 'MMM-NetworkScanner',
            position: 'top_left', 
            config: {
                devices: [
                    { macAddress: "d4:5d:64:1d:0a:bf", name: "Main PC", icon: "computer" },    // 192.168.0.185
                    { macAddress: "e4:5f:01:e2:fe:68", name: "Prusa Mini", icon: "print" },    // 192.168.0.236
                    { macAddress: "5A:54:15:26:CF:83", name: "S22", icon: "mobile" },    // 192.168.0.236
                    { macAddress: "18:69:D8:58:E4:CD", name: "Falco", icon: "robot" },    // 192.168.0.236
                    { macAddress: "10:5A:17:FD:16:72", name: "Bedroom", icon: "lightbulb" },    // 192.168.0.236
                    { macAddress: "00:31:92:CA:95:CF", name: "Kitchen", icon: "lightbulb" },    // 192.168.0.236
                    { macAddress: "B4:B0:24:45:B0:D3", name: "Cam", icon: "camera" },    // 192.168.0.236
                    { macAddress: "10:09:F9:46:42:30", name: "Alexa Bedroom", icon: "circle-dot" },    // 192.168.0.236
                    { macAddress: "74:58:F3:DF:DB:9F", name: "Alexa Kitchen", icon: "circle-dot" },    // 192.168.0.236
                ],
                showLastSeen: true,
                updateInterval: 5,
                sort: false,

                
            }        
        },	
		{
			module: "weather",
			position: "top_right",
			config: 
				{
				type: 'current',
				apiKey: "852b641779f5522a3081cd3fb8c6af0e",
				locationID: "3067696",
				onlyTemp: true
				}
		},
		{
			module: "weather",
			position: "top_right",
			config:
				{
				type: 'forecast',
				apiKey: "852b641779f5522a3081cd3fb8c6af0e",
				locationID: "3067696",
				ignoreToday: true
				}
		},
        {
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Web3.0",
						url: "https://web3isgoinggreat.com/feed.xml"
					},
					{
						title: "iDnes",
						url: "https://servis.idnes.cz/rss.aspx?c=zpravodaj"
					},
					{
						title: "ČT24",
						url: "https://ct24.ceskatelevize.cz/rss/hlavni-zpravy"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
                showLastSeenWhenOffline: true,
			}
		},
        {
			module: "MMM-Jast",
			position: "bottom_bar",
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
