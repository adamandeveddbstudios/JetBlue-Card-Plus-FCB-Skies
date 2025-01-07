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
  tl.set(['#copy01', '#copy02'], { y: '30', ease: "expo.out"})
  tl.addLabel('frame1', 0)
    .to(['#copy01'], 0.5, { autoAlpha: 1, y:'0', ease: "expo.out" },'frame1+=0.5')
    .to(['#copy01'], 0.3, {autoAlpha:0}, 'frame1+=3')
    .to(['#copy02'], 0.5, { autoAlpha: 1, y:'0', ease: "expo.out" }, 'frame1+=4')

    tl.addLabel('frame2', 6)
    .to(['#firstCard', '.legal', '#logo', '#cta'],{ autoAlpha:0},'frame2')
    .to('#endframe', 1, { left: 0, ease: "expo.out" }, '<')
    .to('#endframe_headline',{ autoAlpha:1},'<')
    .to('#shine', 0.5, {backgroundPosition: '600px 5px'});

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to(['#cta', '#cta2'], 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to(['#cta', '#cta2'], 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}
