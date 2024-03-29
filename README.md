# First tinkering with Tensorflow.js

## Usage

1. Download all three files in this repo to your local directory.
2. Make sure they are all in the same folder.
3. Open up 'hw1.html' in your browser and upload whatever images you want to classify.
4. That's it. The consequences are yours -- you might be shocked at who you are (see demo)


### Model Used:
Mobilenet in JSON Format
'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json'

### Technologies:

* JQuery, Bootstrap
* Tensorflow.js

### App UI 

1. **Classify who I am?**
<img width="1042" alt="Screen Shot 2019-08-27 at 3 02 18 PM" src="https://user-images.githubusercontent.com/43501958/63811670-ff1d9580-c8dc-11e9-8d2d-12930e706bc7.png">

2. **Classify a strawberry**
<img width="1019" alt="Screen Shot 2019-08-27 at 3 21 25 PM" src="https://user-images.githubusercontent.com/43501958/63812174-66881500-c8de-11e9-8cc5-4ae35ac90ead.png">


3. **Classify a bengal cat**
<img width="945" alt="Screen Shot 2019-08-27 at 3 30 04 PM" src="https://user-images.githubusercontent.com/43501958/63812612-c206d280-c8df-11e9-94f8-6b6f572a2134.png">



Turns out I am a shower curtain or a swing. Neither of them is satisfying. In all seriousness, it might be because my scarf attracts too much attention from the model, and this pretrained model was not trained on Asian women! The predictions on who I am are consistent, which is a good sign. Other predictions are kinda awesome!

### Improvements

Need to find a way to serve the locally-trained Keras later on.

### References

* [Mostly Cited This Tutorial](https://www.youtube.com/watch?v=EoYfa6mYOG4)
* Awesome Slack Community for this course! We are having so much fun!



