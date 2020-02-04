
var filelink=document.getElementById('sample');
var photo=document.getElementById('biggerimage');
var MusicTitle=document.getElementById('musictitle');
var ArtistName=document.getElementById('artistname');
var clicks=0;

function savedplaylist(Obj){


var music=document.createElement('div');
music.id='audio';

var Thumbs=document.createElement('div');
Thumbs.id='smallerthumbnail';

var image=document.createElement('img');
image.src=Obj.albumCover;
Thumbs.appendChild(image);

var info=document.createElement('div')
info.id='details';

var name=document.createElement('h1');
name.className='text';
name.innerText=Obj.track;
info.appendChild(name);
var artist=document.createElement('h1');
artist.className='singer';
artist.innerText=Obj.artist;
info.appendChild(artist);


music.appendChild(Thumbs);
music.appendChild(info);

console.log(music);

var filelink=document.getElementById('sample');
var photo=document.getElementById('biggerimage');
var MusicTitle=document.getElementById('musictitle');
var ArtistName=document.getElementById('artistname')

music.onclick = function (e) {
  photo.src=Obj.albumCover;
  filelink.src = Obj.file;
  MusicTitle.innerText=Obj.track;
  ArtistName.innerText=Obj.artist;
  filelink.play();
  playmusic.style.display="none";
  pausemusic.style.display="block";
//   var z=(++Obj.id);
console.log(Obj);
localStorage.setItem("Id", Obj.id);
//  console.log(Obj.file);
}

return music;



}

var mainDiv = document.getElementById('playlist-wrapper');

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://5dd1894f15bbc2001448d28e.mockapi.io/playlist', true);
xhttp.onreadystatechange = function () {
            if(this.readyState === 4) {
                    var myplaylist=JSON.parse(this.responseText);
                    for(var i=0; i<myplaylist.length; i++) {
                        mainDiv.appendChild(savedplaylist(myplaylist[i]));
                        // console.log(myplaylist[0].file);
                        // var j=1;
                    }
                        forward.onclick = function() {
                          var id = localStorage.getItem("Id");
                          if(id === undefined || id === null) {
                            localStorage.setItem("Id", 1);
                          }
                            
                            // if(j<myplaylist.length){
                              // console.log(myplaylist[j].albumCover)
                             id = localStorage.getItem("Id");
                              photo.src=myplaylist[id].albumCover;
                              filelink.src=myplaylist[id].file;
                              MusicTitle.innerText=myplaylist[id].track;
                              ArtistName.innerText=myplaylist[id].artist;
                              samplesong.play();
                              playmusic.style.display="none";
                              pausemusic.style.display="block";
                              if(id < myplaylist.length-1) {
                                localStorage.setItem("Id", ++id);
                              }
                              else{
                              localStorage.setItem("Id", 0);
                              }

                              if(clicks%2==1){
                                var position=parseInt(Math.random()*8 );
                                photo.src=myplaylist[position].albumCover;
                                  filelink.src=myplaylist[position].file;
                                  MusicTitle.innerText=myplaylist[position].track;
                                  ArtistName.innerText=myplaylist[position].artist;
                                  samplesong.play();
                                  playmusic.style.display="none";
                                  pausemusic.style.display="block";
                                  
                                   if(id < myplaylist.length-1) {
                                localStorage.setItem("Id", position);
                              }
                              else{
                              localStorage.setItem("Id", 0);
                              }
                              }
                          }
                          var clk=0;
                            repeat.onclick=function(){
                              clk=clk+1;
                              
                             if(clk%2==1){
                              samplesong.loop=true;
                              // samplesong.load();
                              samplesong.play();
                              playmusic.style.display="none";
                              pausemusic.style.display="block";
                              repeat.style.color="red";
                             }
                             else{
                              samplesong.loop=false;
                              // samplesong.load();
                              samplesong.play();
                              playmusic.style.display="none";
                              pausemusic.style.display="block";
                              repeat.style.color="grey";

                              
                             }
                            
                          }



                          // var k=1;
                          backward.onclick=function(){
                            var id = localStorage.getItem("Id");
                          if(id === undefined || id === null || id==="1") {
                            localStorage.setItem("Id", 2);
                          }
                              id = localStorage.getItem("Id");
                              // console.log(myplaylist[id-2].albumCover)
                              photo.src=myplaylist[id-2].albumCover;
                              filelink.src=myplaylist[id-2].file;
                              MusicTitle.innerText=myplaylist[id-2].track;
                              ArtistName.innerText=myplaylist[id-2].artist;
                              samplesong.play();
                              playmusic.style.display="none";
                              pausemusic.style.display="block";
                              if(id > 1) {
                                localStorage.setItem("Id", --id);
                              }
                              else
                              localStorage.setItem("Id", 1);

                              if(clicks%2==1){
                                var position=parseInt(Math.random()*8 );
                                photo.src=myplaylist[position].albumCover;
                                  filelink.src=myplaylist[position].file;
                                  MusicTitle.innerText=myplaylist[position].track;
                                  ArtistName.innerText=myplaylist[position].artist;
                                  samplesong.play();
                                  playmusic.style.display="none";
                                  pausemusic.style.display="block";
                                  localStorage.setItem("Id", position+1);
                                  
                              //      if(id < myplaylist.length-1) {
                              //   localStorage.setItem("Id", position);
                              // }
                              // else{
                              // localStorage.setItem("Id", 0);
                              // }
                              }
                              
                            
                          }


                         
                          
                          others.onclick = function() {
                            clicks=++clicks;
                          //   var id = localStorage.getItem("Id");
                          // if(id === undefined || id === null) {
                          //   localStorage.setItem("Id", 1);
                          // }
                          if(clicks%2==1){
                            var position=parseInt(Math.random()*8 );
                            photo.src=myplaylist[position].albumCover;
                              filelink.src=myplaylist[position].file;
                              MusicTitle.innerText=myplaylist[position].track;
                              ArtistName.innerText=myplaylist[position].artist;
                              samplesong.play();
                              playmusic.style.display="none";
                              pausemusic.style.display="block";
                              localStorage.setItem("Id", position+1);
                              others.style.color = "red";
                          }else{
                            others.style.color = "grey";
                          }
                              // Math.floor(Math.random() * 10);
                              // ++j;
                          };
                        //   for(var j=0; j<myplaylist.length; j++){
                        //     console.log(myplaylist[j].albumCover)
                        //     
                        //     filelink.play();
                        //   }
                          
                          // photo.src=myplaylist[++i].albumCover;
                          // filelink.src=Obj.file[i+1];
                          // MusicTitle.innerText=Obj.track[i+1];
                          // ArtistName.innerText=Obj.artist[i+1];
                          // filelink.play();
                        // }
                    

            }
        }
xhttp.send();
// console.log();



// var p = document.getElementById("play");
  var samplesong=document.getElementById('sample');
var playmusic=document.getElementById('Play-btn');
var pausemusic=document.getElementById('Pause-btn');
var forwardmusic=document.getElementById('forward');
    
    // if(p.className=="far fa-play-circle fa-3x"){
    //   document.getElementById('play').className="far fa-pause-circle";
      playmusic.onclick=function PlayMusic(){
        samplesong.play();
      playmusic.style.display="none";
      pausemusic.style.display="block";
    }
     
    //   }
    // // alert("onclick Event triggered!");
    // else{
    //     p.className="far fa-play-circle fa-3x";
        pausemusic.onclick=function PauseMusic(){
          samplesong.pause();
          pausemusic.style.display="none";
          playmusic.style.display="block";
        }
        
        var prog=document.getElementById('bar');
        sample.ontimeupdate=function(){
          var percentprog=	
          (sample.currentTime/sample.duration*100);
            console.log(percentprog);
            prog.style.width=percentprog + '%';
            
          }

          // var forward=document.getElementById("forward");
          // forward.onclick=function(){
          //   console.log("clicked")
          // }     

          
              

