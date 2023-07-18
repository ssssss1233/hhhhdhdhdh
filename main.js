Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnap(){

Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cimg" src="'+data_uri+'"/>';
});
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded");
    
}

function check(){
    img=document.getElementById("cimg");
    classifier.classify(img,gotresult);
    
}

function gotresult(error,results){
    if(error){
        console.log(error);

    } else{
        console.log(results);
        document.getElementById("ron").innerHTML=results[0].label;
        document.getElementById("roa").innerHTML=results[0].confidence.toFixed(2);
        

    }
}