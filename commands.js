// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
debugger.collectionName.insertOne()



// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.destinations.insertOne()

// 2. Query for all bounties in the bounties collection
db.destinations.find()

// 3. Insert many bounties at once using the given objects
db.destinations.insertMany([])
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.destinations.find({location:"Grasslands"})
// 2. Query for all bounties with a reward worth 10000 or more
db.destinations.find({reward: {$gte: 10000 }})
// 3. Query for all bounties, but exclude the client attribute from being shown

// 4. Query for a Groundhog in the Woodlands

// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.destinations.updateOne({reward: "4000"}, {$set: {reward: "10000"}})
// 2. Remove Lokinkajou
db.destinations.deletemany({
    _id:64344cf7fb286be114dab124
    name:"Lokinkajou"
    species:"Kinkajou"
    location:"Tropical rainforest"
    wantedFor:"Partying too late at night"
    client:"White tiger"
    reward:1000
    captured:false})
// 3. Delete all bounties sent by Songbird
db.destinations.deletemany({
    "name": "Grandhog",
        "species": "Groundhog",
        "location": "Woodlands",
        "wantedFor": "Not coming out of the hole on time and prolonging winter",
        "client": "Songbird",
        "reward": 50000,
        "captured": false
      },
// 4. Update all captured statuses to true