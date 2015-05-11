# Generate AWS IP ranges per service/region

Very simple angular app for getting ip ranges for amazon services and region. 

Loads data from https://ip-ranges.amazonaws.com/ip-ranges.json - well sort of does - it has to be synced with the app as there is no CORS header - https://forums.aws.amazon.com/thread.jspa?threadID=180254

I've found this useful for generating firewall templates hence the prefix box.
