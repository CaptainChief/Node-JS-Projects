function getAmount(type, weight)
{
   var amount = 0;

   if (type == "Letters (Stamped)")
   {
      if(weight <= 1.0)
      {
         amount = 0.55;
      }
      else if(weight <= 2.0)
      {
         amount = 0.70;
      }
      else if(weight <= 3.0)
      {
         amount = 0.85;
      }
      else if(weight <= 3.5)
      {
         amount = 1.0;
      }
   }
   else  if(type == "Letters (Metered)")
   {
      if(weight <= 1.0)
      {
         amount = 0.50;
      }
      else if(weight <= 2.0)
      {
         amount = 0.65;
      }
      else if(weight <= 3.0)
      {
         amount = 0.80;
      }
      else if(weight <= 3.5)
      {
         amount = 0.95;
      }
   }
   else if(type == "Large Envelopes (Flats)")
   {
      if(weight <= 1.0)
      {
         amount = 1.00;
      }
      else if(weight <= 2.0)
      {
         amount = 1.20;
      }
      else if(weight <= 3.0)
      {
         amount = 1.40;
      }
      else if(weight <= 4.0)
      {
         amount = 1.60;
      }
      else if(weight <= 5.0)
      {
         amount = 1.80;
      }
      else if(weight <= 6.0)
      {
         amount = 2.00;
      }
      else if(weight <= 7.0)
      {
         amount = 2.20;
      }
      else if(weight <= 8.0)
      {
         amount = 2.40;
      }
      else if(weight <= 9.0)
      {
         amount = 2.60;
      }
      else if(weight <= 10.0)
      {
         amount = 2.80;
      }
      else if(weight <= 11.0)
      {
         amount = 3.00;
      }
      else if(weight <= 12.0)
      {
         amount = 3.20;
      }
      else if(weight <= 13.0)
      {
         amount = 3.40;
      }
   }
   else if(type == "First-Class Package Service—Retail")
   {
      if(weight <= 1.0)
      {
         amount = 3.80;
      }
      else if(weight <= 2.0)
      {
         amount = 3.80;
      }
      else if(weight <= 3.0)
      {
         amount = 3.80;
      }
      else if(weight <= 4.0)
      {
         amount = 3.80;
      }
      else if(weight <= 5.0)
      {
         amount = 4.60;
      }
      else if(weight <= 6.0)
      {
         amount = 4.60;
      }
      else if(weight <= 7.0)
      {
         amount = 4.60;
      }
      else if(weight <= 8.0)
      {
         amount = 4.60;
      }
      else if(weight <= 9.0)
      {
         amount = 5.30;
      }
      else if(weight <= 10.0)
      {
         amount = 5.30;
      }
      else if(weight <= 11.0)
      {
         amount = 5.30;
      }
      else if(weight <= 12.0)
      {
         amount = 5.30;
      }
      else if(weight <= 13.0)
      {
         amount = 5.90;
      }
   }

   return amount;
}

function postal_calc(req, res)
{
   var type = req.query.letter_type;
   var weight = req.query.weight;
   var amount = getAmount(type, weight);


   var stuff = {type: type, weight: weight, amount: amount};

   res.render('results', stuff);
}

module.exports = {postal_calc: postal_calc};