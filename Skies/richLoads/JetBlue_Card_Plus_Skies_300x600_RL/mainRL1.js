var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url = "";
// var vid_time_triggered=false;

//
default_exit.on('click', function () {
  myFT.clickTag(1, clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads', function () {

  clickTag1_url = myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  
  tl.set(['#copy03'], { y: '100', ease: Power1.easeInOut })
  tl.set(['#copy04', '#copy05', '#copy06'], { y: '50', ease: Power1.easeInOut })
  
  tl.addLabel('frame1', 0)
    .to('#copy02', 0.5, {y:'87', ease: Power1.easeInOut}, 'frame1+=0.7')
    .to(['#copy03'], 0.5, { autoAlpha: 1, y:'0', ease: Power1.easeInOut }, 'frame1+=1')
    .to(['#copy01', '#copy02', '#copy03'], 0.3, {autoAlpha:0, ease: Power1.easeInOut}, 'frame1+=4')
    
    tl.addLabel('frame2', 4.5)
    .to(['#copy04', '#copy05', '#copy06'], 0.5, { autoAlpha: 1, y:'0', ease: Power1.easeInOut }, 'frame2')
    .to('#legal1', 0.3, {autoAlpha:0}, 'frame2')
    .to('#endframe', 1, { top: 0, ease: Power1.easeInOut }, 'frame2+=3.5')
    .to('#shine', 0.5, {backgroundPosition: '270px 175px'});

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}
