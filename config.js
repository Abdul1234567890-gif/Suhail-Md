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
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_31_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVtZ0dlRnJveUVlMXhYRDNYRWFhdG96bDNCSGxTZExOdmsyZVV5MkpuOUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDQ5MTA4NDA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQ0FFOTMxOTE5RkI0OTI5RjBBQUE0M0FBNjZDOEM3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3MjY2NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDkxMDg0MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlFOUQyN0MwNjYwMjcwOUM4MzcxRjc3MjI2MEFBNDEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjcyNjY1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRZU9FXzM3cFR3ZTdqOF82VEdpaVVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmOTlhNmVkLTJkYWUtNDZkMy04MjUyLWE2NzdkMmRmMzBhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAyMzEsXG4gICAgICAxMzQsXG4gICAgICAxMjgsXG4gICAgICAzNyxcbiAgICAgIDEyOSxcbiAgICAgIDI5LFxuICAgICAgMTM4LFxuICAgICAgNCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MixcbiAgICAgIDIzNCxcbiAgICAgIDE5NyxcbiAgICAgIDEzNSxcbiAgICAgIDE2NCxcbiAgICAgIDgsXG4gICAgICAyOSxcbiAgICAgIDE2NixcbiAgICAgIDE2LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgNzAsXG4gICAgICAxOTAsXG4gICAgICAyMSxcbiAgICAgIDEyLFxuICAgICAgMTI0LFxuICAgICAgMTAwLFxuICAgICAgMjAyLFxuICAgICAgMTM4LFxuICAgICAgMTU0LFxuICAgICAgNzQsXG4gICAgICAxOTAsXG4gICAgICAyMDcsXG4gICAgICAxMTksXG4gICAgICAxOTksXG4gICAgICAxNDYsXG4gICAgICAxNjUsXG4gICAgICAxMzQsXG4gICAgICAyMTUsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLRkhDQTFFTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQ5MTA4NDA4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgvLrKj9aFyorKgCDJm9W8yZvKjcqP4Ly76qeCXCIsXG4gICAgXCJsaWRcIjogXCIxODg0NTA3NjY2MTA0NTQ6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ3FxSlFIRVBqV3pMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpUYzRjZmhPUWRHTDJmd0pCTnY4ZGdidnpOdDZtV2hIbnAzaU1sbUdwbkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2FkZ25jZEpuaXpzNjd5WFFSekxIU0VXRStsNmc3SEpDTmVDaTh0K1BpM3ptMmE4a1ZRNTNicWJGMXZBai9VTzZoYTB4VGRSbjVUNytRbnF2OHJURGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib0hESGdvY3Ezb0JFak11YXlNRDZjejBRbURXZThvSjhqWVNLU3B3MmJFeFNpaVZ0cE9XVFpOa2gvV3BENFFySU1waTFoMmJrc2NWUytmekxwdStBQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ5MTA4NDA4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjcyNjY1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU00TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTRMLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWl2M1lYMGl6N2pCT0lIenRqTHFSdGtHVmRCQ1FVeHg1dGFibDlPSTIyVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIxNjUyMDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MjY2NTUxNjVcIn0iCn0="  // PUT your SESSION_ID 


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
