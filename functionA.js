/******

In this study, you are given a few programming tasks.

These tasks are written in the comments as you scroll down.

You can choose to use the Web or Codeon plugin to seek help.

Please open screen recording to record your screen and audio.

Please try to finish all of tasks.

******/


$(document).ready(function(){

  var json = {
                "Title": "Frozen",
                "Year": "2013",
                "Rated": "PG",
                "Released": "27 Nov 2013",
                "Runtime": "102 min",
                "Genre": "Animation, Adventure, Comedy",
                "Director": "Chris Buck, Jennifer Lee",
                "Writer": "Jennifer Lee (screenplay), Hans Christian Andersen (story), Chris Buck (story), Jennifer Lee (story), Shane Morris (story)",
                "Actors": "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
                "Plot": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
                "Language": "English, Icelandic",
                "Country": "USA",
                "Awards": "Won 2 Oscars. Another 70 wins & 56 nominations.",
                "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
                "Metascore": "74",
                "imdbRating": "7.6",
                "imdbVotes": "396,070",
                "imdbID": "tt2294629",
                "Type": "movie",
                "Response": "True"
              }


  //*************Task 1:****************//

  //You are given a json object above that contains the information of the movie Frozen.
  //Display its Poster image, title and rating on the given html.



  //**********add your code here ****************//



  //*************Task 2: ****************//


  var url = "http://www.omdbapi.com/?t=batman&y=&plot=short&r=json"
  //You are given a url below which contains another movie's (batman) data
  //in json object. (open it to see what it looks like)
  //What you need to do is the following:
  //A) fetch the json data from this link to your local machine
  //B) display the same information (ie poster, title, and rating) below
  //   Task 1's content on the given html
  //c) Compare imdbRating of these two movies

  //**********add your code here ****************//



  //*************Task 3: ****************//

  //The url variable in Task 2 is only for the movie Batman data.
  //Now let's create a search engine that allows users to search
  //the movie that they want to see.

  //What you need to do is the following:
  //A)create an input area (for movie name) and a button below Task 2 content on the web page
  //B)add a listen to the button to extract the movie name from input area
  //C)create the associated url (swatch the 'batman' word from the url variable in Task 2);
  //D)display the same information (ie poster, title, and rating) of the movie below the button

  //Note: you only want to see 1 result at a time. In other words, you shouldn't append the results.

  //**********add your code here ****************//


  //*************Task 4: ****************//

  //Now you can see the information of any movie you type in, but you want to know which one ranks
  //higher. Now let's create a ranking table for all the movie you've searched.

  //What you need to do is the following:
  //A)create a json object to store the imdbRating value of searched movie.Searched movie means you
  //have clicked the button to see its information
  //B)On the page, below Task 3 content, display a list that has all the movies you have search in
  //the order of imdbRating. Each row of this list contains 3 columns: numerical ranking (out of
  //total number of searched movies), title, and imdbRating


  //**********add your code here ****************//

  
});
