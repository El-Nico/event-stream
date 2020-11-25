var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
const cors = require("cors");
require('dotenv').config();

var EVENTS_COLLECTION = "Events";

var app = express();
//prevent cors error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//create link to Angular build directory
var staticDir = __dirname + "/www/";
app.use(express.static(staticDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URL || process.env.MONGO_URL, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// // cors origin URL - Allow inbound traffic from origin
// corsOptions = {
//     origin: "Your FrontEnd Website URL",
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));


// EVENTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/events"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get("/api/events", function(req, res) {
    db.collection(EVENTS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get event.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/events", function(req, res) {
    var newEvent = req.body;
    db.collection(EVENTS_COLLECTION).insertOne(newEvent, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new event.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});
/*  "/api/events/:id"
 *    GET: find event by id
 *    PUT: update event by id
 *    DELETE: deletes event by id
 */

app.get("/api/event/:id", function(req, res) {
    db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get event");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put("/api/event/:id", function(req, res) {
    var updateDoc = req.body;


    console.log(updateDoc)

    db.collection(EVENTS_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, { $set: updateDoc }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update event");
        } else {
            updateDoc._id = req.params.id;
            res.status(200).json(updateDoc);
        }
    });
});

app.delete("/api/event/:id", function(req, res) {
    db.collection(EVENTS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete event");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});

//all unmatched routes
app.get('*', (req, res) => {
    res.redirect('/')
})