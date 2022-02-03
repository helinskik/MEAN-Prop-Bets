const express       = require('express'),
    exphbs          = require('express-handlebars'),
    hbsHelpers      = require('handlebars-helpers'),
    hbsLayouts      = require('handlebars-layouts'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    errorhandler    = require('errorhandler'),
    csrf            = require('csurf'),
    morgan          = require('morgan'),
    favicon         = require('serve-favicon'),

    router          = require('./routes/router'),
    database        = require('./lib/database'),
    seeder          = require('./lib/dbSeeder'),
    path            = require('path');
    app             = express();
var    port            = 3000;

class Server {

    constructor() {
        this.initViewEngine();
        this.initExpressMiddleWare();
        this.initCustomMiddleware();
        this.initDbSeeder();
        this.initRoutes();
        this.start();
    }

    start() {
        port = process.env.PORT || 8080;
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initViewEngine() {
        const hbs = exphbs.create({
            extname: '.hbs',
            defaultLayout: 'master'
        });
        app.engine('hbs', hbs.engine);
        app.set('view engine', 'hbs');
        hbsLayouts.register(hbs.handlebars, {});
    }

    initExpressMiddleWare() {
        app.use(favicon(path.join(__dirname + '/public/assets/images/favicon.ico')));
        //app.use(express.static(path.join(__dirname, 'public')));
        //app.use(express.static(__dirname + '/public'));

        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(errorhandler());
        //app.use(cookieParser('test'));
        //app.use(csrf({ cookie: {key:'XRSRF-TOKEN',path:'/',httpOnly:false} }));

        app.use((req, res, next) => {
            // let csrfToken = req.csrfToken();
            // res.locals._csrf = csrfToken;
            // res.cookie('XSRF-TOKEN', csrfToken);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
            next();
        });
        
        process.on('uncaughtException', (err) => {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', () => {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }

    initDbSeeder() {
        database.open(() => {
            //Set NODE_ENV to 'development' and uncomment the following if to only run
            //the seeder when in dev mode
            //if (process.env.NODE_ENV === 'development') {
            //  seeder.init();
            //} 
            seeder.init();
        });
    }

    initRoutes() {
        router.load(app, './controllers');

        app.use(express.static(path.join(__dirname, 'public')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        })

        // redirect all others to the index (HTML5 history)
        // app.all('/*', (req, res) => {
        //     res.sendFile(__dirname + '/public/index.html');
        // });
    }

}

let server = new Server();