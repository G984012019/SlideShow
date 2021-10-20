let count=1;
let nowPlaying= false;
let timer;
const mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";

function prev() {
  count=count-1;

  if(count==0){

    count=19;
    thumbnailsElement.children[0].classList.remove('selected');
  }else{
    thumbnailsElement.children[count].classList.remove('selected');
  }
  if(0<count&&count<10){
    url = url + "0" + count + ".jpg";
    mainElement.setAttribute('src', url);
    url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
  }

  else if (10<=count&&count<=19) {
    count=count-10;
    url = url + "1" + count + ".jpg";
    mainElement.setAttribute('src', url);
    count= count+10;
    url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
  }
  thumbnailsElement.children[count-1].classList.add('selected');

}


function next(){
  count=count+1;
  if(count==20){
    count=1;
    thumbnailsElement.children[18].classList.remove('selected');
  }else{
    thumbnailsElement.children[count-2].classList.remove('selected');
  }
  if(0<count&&count<10){
    url = url + "0" + count + ".jpg";
    mainElement.setAttribute('src', url);
    url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
  }

  else if (10<=count&&count<=19) {
    count=count-10;
    url = url + "1" + count + ".jpg";
    mainElement.setAttribute('src', url);
    count= count+10;
    url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
  }
  thumbnailsElement.children[count-1].classList.add('selected');

}
function play(){
  if(nowPlaying==false){
    nowPlaying =true;
    autoPlay();
  }
}

function autoPlay(){
  timer =setTimeout(function(){
    next();
    autoPlay();
  },1000);
}
function stop(){
  clearTimeout(timer);
  nowPlaying=false;
}
function reset() {
  stop();
  if(count==20){
    count=1;
    thumbnailsElement.children[18].classList.remove('selected');
  }else{
    thumbnailsElement.children[count-1].classList.remove('selected');
  }
  thumbnailsElement.children[0].classList.add('selected');
  count =  1;
  url = url + "0" + count + ".jpg";
  mainElement.setAttribute('src', url);
  url =  "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
}
