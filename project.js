const express = require('express');
const DATABASE_URL = "postgres://gtnrtpvqtdlpmf:dccad0773782a76dde12b67125afee3f62c4920b4010061fcb6f1588c213aae2@ec2-18-235-20-228.compute-1.amazonaws.com:5432/d2tkmjcqt4i04l?ssl=true";
const session = require('express-session');
const { Pool } = require('pg');

var body = require('body-parser')

var app = express();

const pool = new Pool(
{
  connectionString: process.env.DATABASE_URL || DATABASE_URL,
  rejectUnauthorized: false
});

app.use(function(req, res, next){
  req.body = {};
  next();
});

app.use(session(
{
  secret: 'Psych_fun',
  resave: false,
  saveUninitialized: true
}))
app.use(express.json()); // suport json encoded bodies
app.use(express.urlencoded({extended: true})) // support url encoded bodies

app.set('port', process.env.PORT || 5001)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))

  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')

  // set default view engine
  .set('view engine', 'ejs')

  
  ///////////////////////////////////////////////////////////
  // GET
  //////////////////////////////////////////////////////////
  .get('/log', function(req, res, next)
  {
    res.render("log");
  })

  .get('/create', function(req, res, next)
  {
    res.render("new_fact")
  })

  .get('/out', function(req, res, next)
  {
    req.session.admin = false;
    res.sendFile('./episode.html', { root: __dirname + "/public" });
  })

  .get('/e_number', function(req, res, next)
  {
    var season_id = req.query.id;
    pool.query("SELECT id, e_num FROM episodes WHERE s_id = " + season_id, function(err, result)
    {
      if(err)
      {
        console.log('There was an error in searching the database (e_number): \n', err);
      }
      else
      {
        var id = [];
        var e_num = [];

        for(var i = 0; i < result.rowCount; i++)
        {
          id.push(result.rows[i].id);
          e_num.push(result.rows[i].e_num);
        }
        var season_data = { "episode_id": id 
                          , "episode_number": e_num 
                          };
        res.json(season_data);
      }
    })
  })

  // get details of specific episode
  .get('/details', function(req, res, next)
  {
    var episode_id = req.query.id;
    pool.query("SELECT e_name, e_num, e_summ FROM episodes WHERE id = " + episode_id, function(err, result)
    {
      if(err)
      {
        console.log('There was an error in searching the database (details_1): \n', err);
      }
      else
      {
        var e_summ;
        var e_num;
        var e_name;
        var f_data = [];
        var f_id = [];
        var data = false;

        e_summ = result.rows[0].e_summ;
        e_num = result.rows[0].e_num;
        e_name = result.rows[0].e_name;

        pool.query("SELECT f_data, id FROM facts WHERE e_id = " + episode_id, function(err, result)
        {
          if(err)
          {
            console.log('There was an error in searching the database (details_2): \n', err);
          }
          else
          {
            if(result.rows.length == 0)
            {
              data = false;
            }
            else
            {
              for(var i = 0; i < result.rowCount; i++)
              {
                f_data.push(result.rows[i].f_data);
                f_id.push(result.rows[i].id)
                data = true;
              }

              var episode_data = 
              { 
                f_id: f_id,
                e_id: episode_id,
                e_summ: e_summ, 
                e_num: e_num,
                e_name: e_name,
                f_data: f_data,
                data: data
              };
              res.render("details", episode_data);
            }
          }
        })
      }
    })
  })

  .get('/season', function(req, res, next)
  {
    var season_id = req.query.number;
    pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = " + season_id, function(err, result)
    {
      if(err)
      {
        console.log('There was an error in searching the database (season): \n', err);
      }
      else
      {
        var id = [];
        var e_num = [];
        var e_name = [];

        for(var i = 0; i < result.rowCount; i++)
        {
          id.push(result.rows[i].id);
          e_num.push(result.rows[i].e_num);
          e_name.push(result.rows[i].e_name);
        }

        var season_data = { "episode_id": id 
                          , "episode_number": e_num 
                          , "episode_name": e_name
                          , "season_id": season_id
                          };
        res.json(season_data);
      }
    })
  })

  // set default route and content
  .get('/', function(req, res) 
  {
    res.sendFile('./episode.html', { root: __dirname + "/public" });
  })

  .get('/delete_fact', function(req, res)
  {
    var f_id = req.query.f_id;
    var e_id = req.query.e_id;

    pool.query("DELETE FROM facts WHERE id = " + f_id, function(err, result)
    {
      if(err)
      {
        console.log("There was an error deleting from the database. (delete_fact) \n", err);
      }
      else
      {
        pool.query("SELECT e_name, e_num, e_summ FROM episodes WHERE id = " + e_id, function(err, result)
        {
          if(err)
          {
            console.log('There was an error in searching the database (details_1): \n', err);
          }
          else
          {
            var e_summ;
            var e_num;
            var e_name;
            var f_data = [];
            var f_id = [];
            var data = false;
    
            e_summ = result.rows[0].e_summ;
            e_num = result.rows[0].e_num;
            e_name = result.rows[0].e_name;
    
            pool.query("SELECT f_data, id FROM facts WHERE e_id = " + e_id, function(err, result)
            {
              if(err)
              {
                console.log('There was an error in searching the database (details_2): \n', err);
              }
              else
              {
                if(result.rows.length == 0)
                {
                  data = false;
                }
                else
                {
                  for(var i = 0; i < result.rowCount; i++)
                  {
                    f_data.push(result.rows[i].f_data);
                    f_id.push(result.rows[i].id)
                    data = true;
                  }
    
                  var episode_data = 
                  { 
                    f_id: f_id,
                    e_id: e_id,
                    e_summ: e_summ, 
                    e_num: e_num,
                    e_name: e_name,
                    f_data: f_data,
                    data: data
                  };
                  res.render("details", episode_data);
                }
              }
            })
          }
        })
      }
    })
  })

  .get('/update_fact', function(req, res)
  {
    var f_id = req.query.f_id;
    var e_id = req.query.e_id;
    var data = req.query.data;

    res.render('update_fact', {f_id: f_id, e_id: e_id, data: data});
  })

  ///////////////////////////////////////////////////////////
  // POST
  //////////////////////////////////////////////////////////
  .post('/add_fact', function(req, res)
  {

    var id = req.body.episode;
    var f_fact = req.body.f_fact;

    pool.query("INSERT INTO facts(e_id, f_data) VALUES(" + id + ", '" + f_fact + "')", function(err, result)
    {
      if(err)
      {
        console.log("There was an error inserting into the database. (add_fact) \n", err);
      }
      else
      {
        res.render('new_fact');
      }
    });
  })

  .post('/update', function(req, res)
  {
    var f_id = req.body.f_id;
    var e_id = req.body.e_id;
    var f_fact = req.body.f_fact;
    console.log(f_fact);
    console.log(f_id);
    console.log(e_id);

    pool.query("UPDATE facts SET f_data = '" + f_fact +"' WHERE id = " + f_id, function(err, result)
    {
      if(err)
      {
        console.log("There was an error updating the database. (/update) \n", err);
      }
      else
      {
        pool.query("SELECT e_name, e_num, e_summ FROM episodes WHERE id = " + e_id, function(err, result)
        {
          if(err)
          {
            console.log('There was an error in searching the database (details_1): \n', err);
          }
          else
          {
            var e_summ;
            var e_num;
            var e_name;
            var f_data = [];
            var f_id = [];
            var data = false;
    
            e_summ = result.rows[0].e_summ;
            e_num = result.rows[0].e_num;
            e_name = result.rows[0].e_name;
    
            pool.query("SELECT f_data, id FROM facts WHERE e_id = " + e_id, function(err, result)
            {
              if(err)
              {
                console.log('There was an error in searching the database (details_2): \n', err);
              }
              else
              {
                if(result.rows.length == 0)
                {
                  data = false;
                }
                else
                {
                  for(var i = 0; i < result.rowCount; i++)
                  {
                    f_data.push(result.rows[i].f_data);
                    f_id.push(result.rows[i].id)
                    data = true;
                  }
    
                  var episode_data = 
                  { 
                    f_id: f_id,
                    e_id: e_id,
                    e_summ: e_summ, 
                    e_num: e_num,
                    e_name: e_name,
                    f_data: f_data,
                    data: data
                  };
                  res.render("details", episode_data);
                }
              }
            })
          }
        })
      }
    })
  })

  // run localhost
  .listen(app.get('port'), function() 
  {
  	console.log('Listening on port: ' + app.get('port'));
  });