const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923145269482";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNGdS9XVk42Q2pOMFRacTVHQXVEcGlVNUZ2OFVmMGFPdFRkdnMvaHk2ZTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE1Mjk3NDA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MTQ2ODI3N0MyMzE1RDc1N0M2QURDRDk1RjM0RTM5RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3OTU1ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTUyOTc0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJGRjU3MTc4MTY1NTNBQUEwM0UzQUU4NUJFRENCMTZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc5NTU4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1NllfNElFclN0Q2tjOGxHRHc5TzhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxNzk0ZDZmLTY0YWQtNDYxOS1iYzU4LWQ3ZTRiMzQxMDYyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyNyxcbiAgICAgIDUsXG4gICAgICA3MyxcbiAgICAgIDE5NixcbiAgICAgIDExOSxcbiAgICAgIDE2MCxcbiAgICAgIDQsXG4gICAgICA4LFxuICAgICAgMCxcbiAgICAgIDYzLFxuICAgICAgMjA0LFxuICAgICAgMjQwLFxuICAgICAgMjQsXG4gICAgICAyMTksXG4gICAgICAyMCxcbiAgICAgIDcxLFxuICAgICAgMjM1LFxuICAgICAgMTA3LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDQ2LFxuICAgICAgMTAyLFxuICAgICAgMTcyLFxuICAgICAgMTczLFxuICAgICAgMTM5LFxuICAgICAgMjcsXG4gICAgICAxMTgsXG4gICAgICAxNjgsXG4gICAgICA2OCxcbiAgICAgIDE3NixcbiAgICAgIDI1NCxcbiAgICAgIDE5MyxcbiAgICAgIDMsXG4gICAgICAyMTYsXG4gICAgICAyMjcsXG4gICAgICAzMixcbiAgICAgIDgzLFxuICAgICAgMTc4LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMM3pqdklFRUxYeDBMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhlMkVkc1NmaFJmeGIvYWN5T0ZZWWloMU16NmRnaVFBS1AxVTN6RDZaVUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiekxyNnRJaXVVOFlZK1dhY1J4RkcxRXV3bzErd2V0L0V1RS9NcFZNRll3TzFYejFkUFJiN3pWM0R1RHZwM3JtcmdPZWNqSzhFQjE4ZGwwSEp1VEtoQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidXk0MXhiZGdDNEFCUzhkczU2UHB3UExQTWdDRVdkUTZ5aVoyRll5RlBDc0cwWWsvdXFEcDBzeDNVUi8xNzBnRFRubXNpY2s3L1E0Q0htaEg1VGZVQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTUyOTc0MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjIyMzAyMDA1OTA0NjU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimIXlvaFbIE1BTk8gXeW9oeKYhVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE1Mjk3NDA0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjc5NTU3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJMM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkwzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUFNQanNBdERZem40RHBVeHM3b0FPTlpuTDBTdzV5UjJqbjhHa1ZveGpQcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzEzMDYxMzA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3OTU1Nzk3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
