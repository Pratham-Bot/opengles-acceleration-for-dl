---
title: Week 3 - Benchmarking on BBAI-64
---

## Objective 

* Sharing the cross-compiled darknet folder to the BBAI-64.
* Implementation and benchmarking on the BBAI-64.


## Blockers 

The 32GB SD Card has now been flashed with a non-flasher image. After inserting the SD Card on the board, 'df -h' reported that 80% of the SD Card was being used. When I looked it up online, a [partitioning problem](https://forum.beagleboard.org/t/where-is-grow-partition-sh-in-bbai-64-any-alternative/32558/2) was evident. The mentors suggested restarting the board after speaking with them. I also done it, but the outcome remained the same. So I flashed an image onto a new 32GB SD Card. The SD Card was then 30% used, it then showed. I then continued with the project. 


## Sharing the darknet folder onto the BBAI-64

I used SCP command to tranfer the darknet folder from host to the beagle. 

```md title="SCP Command"
scp -r ./darknet debian@beaglebone.local:/home/debian/dir
```
dir - contains the darknet folder. 

## Benchmarking on BBAI-64.

### Features:

* YOLOv3 version.
* Pre-trained weight: The pre-trained model was [this](https://pjreddie.com/media/files/yolov3.weights)
* Input image file: data/dog.jpg

### Results:

After running the detector, the following results were obtained:
```md title="Results"

mini_batch = 1, batch = 1, time_steps = 1, train = 0  
   layer   filters  size/strd(dil)      input                output
   0 conv     32       3 x 3/ 1    416 x 416 x   3 ->  416 x 416 x  32 0.299 BF
   1 conv     64       3 x 3/ 2    416 x 416 x  32 ->  208 x 208 x  64 1.595 BF
   2 conv     32       1 x 1/ 1    208 x 208 x  64 ->  208 x 208 x  32 0.177 BF
   3 conv     64       3 x 3/ 1    208 x 208 x  32 ->  208 x 208 x  64 1.595 BF
   4 Shortcut Layer: 1,  wt = 0, wn = 0, outputs: 208 x 208 x  64 0.003 BF
   .
   .
   .
   .
   .
   .
[yolo] params: iou loss: mse (2), iou_norm: 0.75, obj_norm: 1.00, cls_norm: 1.00, delta_norm: 1.00, scale_x_y: 1.00
Total BFLOPS 65.879 
avg_outputs = 532444 
Loading weights from yolov3.weights...
 seen 64, trained: 32013 K-images (500 Kilo-batches_64) 
Done! Loaded 107 layers from weights-file 
 Detection layer: 82 - type = 28 
 Detection layer: 94 - type = 28 
 Detection layer: 106 - type = 28 
data/dog.jpg: Predicted in 27715.475000 milli-seconds.
bicycle: 99%
dog: 100%
truck: 93%
```
### Breakdown of the result:

* Training data: The model was trained on 32,013,000 images in total, divided into 500 kilo-batches, with each batch containing 64 images.

* Input size: The input size of the architecture is 416 x 416 pixels with 3 channels (RGB).

* Convolution and pooling layers: The architecture starts with a 3x3 convolution layer, followed by 2x2 max pooling layers. These pooling layers perform downsampling with a stride of 2, reducing the spatial dimensions of the feature maps.

* Filters: The model employs 1x1 filters to reduce the number of filters. This indicates the use of 1x1 convolutions to reduce the dimensionality of the feature maps.

* Loaded layers: A total of 107 layers were loaded for the model.

* Prediction time: The total prediction time for the loaded model was approximately 5611.288 milliseconds.


## Goals for Week 4

* Create a script that can be reproduced to benchmark the host and compare the outcomes.
* Start with matrix multiplication in OpenGLES.
* Inspect the TIDL code and look for necessary APIs.