#Python code

from roboflow import Roboflow
rf = Roboflow(api_key="ixkWXBS7kI1ZfAvn6Syv")
project = rf.workspace().project("traffic-light-finder-vk2cn")
model = project.version(1).model

# infer on a local image
print(model.predict("your_image.jpg", confidence=40, overlap=30).json())

# visualize prediction
# model.predict("your_image.jpg", confidence=40, overlap=30).save("prediction.jpg")

# infer on an image hosted elsewhere
# print(model.predict("URL_OF_YOUR_IMAGE", hosted=True, confidence=40, overlap=30).json())

#Javascript code

const axios = require("axios");

axios({
    method: "POST",
    url: "https://detect.roboflow.com/traffic-light-finder-vk2cn/1",
    params: {
        api_key: "ixkWXBS7kI1ZfAvn6Syv",
        image: "IMAGE_URL"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});
