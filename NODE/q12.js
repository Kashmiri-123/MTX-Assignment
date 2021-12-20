var os = require("os");

console.log("Architecture : " + os.arch())
console.log("Number og CPUs "+ JSON.stringify(os.cpus()));
console.log("Free memory : "+ os.freemem() + " bytes") 
console.log("Home Directory " + os.homedir());
console.log("Network Interfaces " + JSON.stringify(os.networkInterfaces()));
console.log(os.platform() + " OS Platform")
console.log(os.release() + " Release of the OS")
console.log(os.type() + "This method returns the operating system name"); 
console.log(os.uptime() + "Total uptme of CPU in seconds.")
