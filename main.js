function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/um__SRG8D/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}
