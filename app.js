window.onload = function () {
  let vid = document.getElementById("vid");

  console.log("start");
  setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  console.log("end");
};
// Classifier Variable
let classifier;
// Model URL
// let imageModelURL = "https://teachablemachine.withgoogle.com/models/lIvux57Wc/";

let label = "";
// Video
let video;
let flippedVideo;
// To store the classificationpip install streamlit
let img;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier("model.json");
  img = loadImage("data/logo.png");
}

function setup() {
  createCanvas(400, 660);
  // Create the video
  //video = createCapture(VIDEO);

  var constraints = {
    audio: false,
    video: {
      facingMode: "environment",
    },
  };
  video = createCapture(constraints);
  video.size(400, 660);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(label, width / 2, height - 60);
  image(img, 10, height - 100, 100, 52);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  setTimeout(
    () => {
      classifier.classify(flippedVideo, gotResult);
      console.log(vid.duration);
    },
    int(vid.duration * 1000) ? NaN : 0
  );
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  if (results[0].confidence > 0.9) {
    label = results[0].label;
    // output(label);
    console.log(label);

    if (label == "Chemistry") {
      vid.src = "Astrology.ogg";
    }
    if (label == "Biology") {
      vid.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    }
  } else {
    label = "...";
  }
  flippedVideo.remove();
  // Classifiy again!
  classifyVideo();
}
console.log(label);

function add_url(n) {
  if (n == "Astronomy") {
    v_id.setAttribute("src", "Astrology.ogg");
  } else if (n == "Biology") {
    v_id.setAttribute("src", "Astrology.ogg");
  } else if (n == "Biology") {
    v_id.setAttribute("src", "Astrology.ogg");
  } else if (n == "Biology") {
    v_id.setAttribute("src", "Astrology.ogg");
  } else if (n == "Biology") {
    v_id.setAttribute("src", "Astrology.ogg");
  } else {
    v_id.setAttribute("src", "#");
  }
}

// function output(l) {

//     console.log('video set');
//     setInterval(() => {
//       console.log('video ended');
//     }, int(vid.duration * 1000));
//   }
// }
