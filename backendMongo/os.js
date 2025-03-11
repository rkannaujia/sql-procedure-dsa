const os = require('os');


console.log('CPU Architecture:', os.arch()); // e.g., x64
console.log('Platform:', os.platform()); // e.g., win32, linux
console.log('OS Type:', os.type()); // e.g., Linux, Windows_NT
console.log('OS Version:', os.version()); // e.g., Windows 10
console.log('Kernel Version:', os.release()); // e.g., 5.4.0-42-generic


const bytesToGB = (bytes) =>  bytes / (1024 * 1024 * 1024);
  
  const memoryInByte =os.totalmem(); // Total memory in byte 
  console.log(`Total Memory in mb:, ${memoryInByte} byte`);
const GB =bytesToGB(memoryInByte)
console.log(`Total Memory in GB:, ${Math.round(GB)} GB`); // Total memory in GB
console.log('Free Memory:', os.freemem()); // Free memory in bytes
console.log('Uptime:', os.uptime(), 'seconds'); // System uptime

const userInfo = os.userInfo();
console.log('User Info:', userInfo); // { username, homedir, uid, etc. }


const cpus = os.cpus();
console.log('CPU Info:', cpus); // Array of CPU core details

const modelArr = cpus.map(model=>model.model);
console.log("model array",modelArr);

const cpuSpeedArr = cpus.map(speed=>speed.speed);
console.log("CPU speed array",cpuSpeedArr);

const cpuUserArr = cpus.map(timesObj=>timesObj.times.user);
console.log("CPU user array",cpuUserArr);
