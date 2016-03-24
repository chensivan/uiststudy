
  //*************Task 1:****************//

  //The starter code has a audio on the page, it plays xxx
  //Let's make this audio be the local mp3 file you see in the folder
  //Add this audio's information on the top of it including:
  //file name, size, created time (human readable time)


  $(document).ready(function(){
    var reader  = new FileReader();

  reader.onloadend = function () {
    console.log(reader.result); //this is an ArrayBuffer
  }
    // var file = new File('/click.mp3')
    debugger;
    // audio.readAsDataURL(file)



    //Task 1: play a local audio file
    function playAudio(file){
        var reader = new FileReader();
        reader.onload = function(event){
            the_url = event.target.result
      $('#data-vid').append("<audio width='400' controls><source id='vid-source' src='"+the_url+"' type='audio/mp3'></audio>")

        }
        //when the file is read it triggers the onload event above.
        reader.readAsDataURL(file);
    }

    $( "#audio" ).change(function() {
        playAudio(this.files)
    });


    //Task 2: Make a button that allows users to upload multiple local audio files (see desktop)
    //List these files one after the other with each contains the information that you have
    // in task 1


    //Task 3: Now create two button that allow users to go play the previous and the next audio

    //Task 4: List all audio files by their size ascently. Make sure the new upload audio files
    //also place in the right order.


  });


  //You have a few audio files on your desktop, please create button
  //that allows user to upload local files and be able to play them
