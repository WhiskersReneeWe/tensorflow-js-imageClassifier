$("#image-selector").change(function() {
    let reader = new FileReader();
    // Define the event handler when 'image-selector' element is triggered
    reader.onload = function(){
        //grab the image data
        let dataURL = reader.result;
        // tell the display where to look for this Image
        $("#selected-image").attr('src', dataURL);
        // empty out the previous predictions list
        $("#prediction-list").empty();
    }

    // get the file from the image-selector
    let file = $("#image-selector").prop('files')[0];
    // load the file using the reader object that was reading the File
    reader.readAsDataURL(file);
});

// define a model Var
// const model = await tf.loadModel(handler);

// Immediately Invoked Functon
// load the model -- serve local static model (later)
let model;
(async function(){
    model = await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json');
    $(".progress-bar").hide();
    console.log('model loaded')
})();

// When 'predict!' button is clicked
$("#predict-button").click(async function(){
  // grab the Image - real image
  let image = $("#selected-image").get(0);
  // convert it to tensor
  let tensor = tf.fromPixels(image)
                 .resizeNearestNeighbor([224, 224])
                 .toFloat()
                 .expandDims();

   let predictions = await model.predict(tensor).data();
   let top3 = Array.from(predictions)
              .map(function(p, i) {
                  return {
                      probability: p,
                      className: ImageClasses[i]
                  };
              }).sort(function(a, b) {
                  return b.probability - a.probability;
              }).slice(0, 3);

    $("#prediction-list").empty();

    top3.forEach(function(p) {
        $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
    });
});
