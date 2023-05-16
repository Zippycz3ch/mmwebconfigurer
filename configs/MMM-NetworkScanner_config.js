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
                module: 'MMM-NetworkScanner',
                position: 'top_left', 
                config: {
                    devices: [
                        { macAddress: "d4:5d:64:1d:0a:bf", name: "Main PC", icon: "computer" },    // 192.168.0.185
                        { macAddress: "e4:5f:01:e2:fe:68", name: "Prusa Mini", icon: "print" },    // 192.168.0.236
                        { macAddress: "5A:54:15:26:CF:83", name: "S22", icon: "mobile" },    // 192.168.0.236
                    ],
                    showLastSeen: true,
                    updateInterval: 5,

                    
                }        
            },
        ]
    };

    /*************** DO NOT EDIT THE LINE BELOW ***************/
    if (typeof module !== "undefined") {module.exports = config;}