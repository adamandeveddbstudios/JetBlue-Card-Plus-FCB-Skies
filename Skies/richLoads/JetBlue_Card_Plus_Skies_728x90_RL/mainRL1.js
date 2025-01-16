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
  tl.set(['#copy02', '#copy03'], { y: '30', ease: Power1.easeInOut})
  tl.addLabel('frame1', 0)
  .to(['#copy01'], 0.5, { autoAlpha: 1, y:'0', ease: Power1.easeInOut },'frame1+=0.5')
  .to(['#copy01'], 0.3, {autoAlpha:0, ease: Power1.easeInOut}, 'frame1+=3.5')
  .to(['#copy02'], 0.5, { autoAlpha: 1, y:'0', ease: Power1.easeInOut }, 'frame1+=3.5')
  .to(['#copy02', '#legal1'], 0.3, {autoAlpha:0, ease: Power1.easeInOut}, 'frame1+=6.5')
  .to(['#copy03'], 0.3, {autoAlpha:1, y:'0', ease: Power1.easeInOut}, 'frame1++9.5')
  .to(['#legal2'], 0.3, {autoAlpha:1, ease: Power1.easeInOut}, '<')

  tl.addLabel('frame2', 12)
    .to(['#copy01', 'copy02', '#copy03', '#bg',],{ autoAlpha:0},'frame2')
    .to('#endframe', 1, { left: 0, ease: Power1.easeInOut }, '<')
    .to('#endframe_headline',{ autoAlpha:1},'<')
    .to('#cta',{ autoAlpha:1},'<')
    .to('#shine', 0.5, {autoAlpha:1, backgroundPosition: '540px 5px'});

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
