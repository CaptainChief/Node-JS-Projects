const DATABASE_URL = "postgres://gtnrtpvqtdlpmf:dccad0773782a76dde12b67125afee3f62c4920b4010061fcb6f1588c213aae2@ec2-18-235-20-228.compute-1.amazonaws.com:5432/d2tkmjcqt4i04l?ssl=true";
const { Pool } = require('pg');
const express = require('express');
const pool = new Pool(
{
  connectionString: process.env.DATABASE_URL || DATABASE_URL,
  rejectUnauthorized: false
});


function get_details(res, req)
{
   // var stuff = {type: type, weight: weight, amount: amount};

   // res.render('results', stuff);
}

function season_1(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 1", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
         // res.json = result.rows;
         // res.data.json(result.rows);
         // result.rows.json;
         // res.render(result);
         res.render('./result.ejs');

     }
   })
}

function season_2(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 2", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_3(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 3", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_4(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 4", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_5(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 5", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_6(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 6", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_7(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 7", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}
function season_8(res, req)
{
   pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = 8", function(err, result)
   {
     if(err)
     {
       console.log('There was an error in searching the database: ', err);
     }
     else
     {
       res.json(result);
       console.log('Successfully searched the database.');
     }
   })
}


module.exports = {get_details: get_details, season_1: season_1, season_2: season_2, season_3: season_3, season_4: season_4, season_5: season_5, season_6: season_6, season_7: season_7, season_8: season_8};