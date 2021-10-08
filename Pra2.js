var os= require('os');

console.log("OS CPU Architecture: " +
os.arch());

console.log("free memory system: " +
os.freemem());

console.log("Total memory of the system: " +
os.totalmem());

console.log("os platform: " +
os.platform());

console.log("Information about the current user: " +
os.userInfo());