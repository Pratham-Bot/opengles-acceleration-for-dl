---
title: Week 1 - Performance Benchmarking
---


## Objective 
* Benchmarking the performance of Darknet on a host (laptop) and targeting the same on a BeagleBoard.

## Week 1 Summary

During the first week of the project, the main objective was to benchmark the performance of Darknet, an open-source neural network framework, on a host machine (laptop). Additionally, efforts were made to understand the compatibility and optimization requirements for targeting Darknet on a BeagleBoard. Furthermore, research was conducted on TIDL (Texas Instruments Deep Learning) implementation to explore its potential for optimizing deep learning execution on TI processors.

## Task Completed 

1. Installation and Setup:

* Darknet was installed on the host machine following the official documentation and guidelines.

* The necessary dependencies were successfully configured and integrated with Darknet.

* The required dataset for testing Darknet's performance was obtained and prepared. 

2. Performance Benchmarking on the Host Machine:

* The host machine's hardware specifications were recorded, including the CPU, GPU, RAM, and storage capacity.

* Darknet was executed on the host machine using different models and configurations, such as YOLOv3 and different pre-trained weights.

3. Exploration of TIDL Implementation:

* Research was conducted on TIDL, the Texas Instruments Deep Learning implementation, to understand its capabilities for optimizing deep learning execution on TI processors.
* The TIDL documentation, specifically the "Foundational Components: TIDL" section in the Processor SDK for Linux documentation, was studied to gain insights into its features and functionalities.
* The potential benefits of leveraging TIDL for accelerating Darknet's performance on TI processors, such as the BeagleBoard, were evaluated.

## Benchmarking Results:

```mdx title="darknnet/Makefile"

 GPU isn't used 
 OpenCV isn't used - data augmentation will be slow 
mini_batch = 1, batch = 1, time_steps = 1, train = 0 
   layer   filters  size/strd(dil)      input                output
   0 conv     32       3 x 3/ 1    416 x 416 x   3 ->  416 x 416 x  32 0.299 BF
   1 conv     64       3 x 3/ 2    416 x 416 x  32 ->  208 x 208 x  64 1.595 BF
   2 conv     32       1 x 1/ 1    208 x 208 x  64 ->  208 x 208 x  32 0.177 BF
   3 conv     64       3 x 3/ 1    208 x 208 x  32 ->  208 x 208 x  64 1.595 BF
   4 Shortcut Layer: 1,  wt = 0, wn = 0, outputs: 208 x 208 x  64 0.003 BF
   5 conv    128       3 x 3/ 2    208 x 208 x  64 ->  104 x 104 x 128 1.595 BF
   6 conv     64       1 x 1/ 1    104 x 104 x 128 ->  104 x 104 x  64 0.177 BF
   7 conv    128       3 x 3/ 1    104 x 104 x  64 ->  104 x 104 x 128 1.595 BF
   8 Shortcut Layer: 5,  wt = 0, wn = 0, outputs: 104 x 104 x 128 0.001 BF
   9 conv     64       1 x 1/ 1    104 x 104 x 128 ->  104 x 104 x  64 0.177 BF
  10 conv    128       3 x 3/ 1    104 x 104 x  64 ->  104 x 104 x 128 1.595 BF
  11 Shortcut Layer: 8,  wt = 0, wn = 0, outputs: 104 x 104 x 128 0.001 BF
  12 conv    256       3 x 3/ 2    104 x 104 x 128 ->   52 x  52 x 256 1.595 BF
  13 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF
  14 conv    256       3 x 3/ 1     52 x  52 x 128 ->   52 x  52 x 256 1.595 BF
  15 Shortcut Layer: 12,  wt = 0, wn = 0, outputs:  52 x  52 x 256 0.001 BF
  16 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF
  17 conv    256       3 x 3/ 1     52 x  52 x 128 ->   52 x  52 x 256 1.595 BF
  18 Shortcut Layer: 15,  wt = 0, wn = 0, outputs:  52 x  52 x 256 0.001 BF
  19 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF
.
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
data/dog.jpg: Predicted in 6389.517000 milli-seconds.
bicycle: 99%
dog: 100%
truck: 93%
Not compiled with OpenCV, saving to predictions.png instead

```

* I tested the detector on the pre-trained models of the framework.

* It has trained 32013K images with 500 batches with each batch containing 64 images. The input size of the architecture was 416 x 416 x 3 with a 3x3 convolution layer followed by 2x2 max pooling layers which are used to perform downsampling with stride 2. Later, the model has 1x1 filters to reduce the number of filters.

* A total of 107 layers were loaded, and the total prediction took around 6389.517000 ms. 

## Blockers

* For porting and testing the model, I'm using BB AI-64. I connected my laptop's USB-C port and 5v adaptor to the Beaglebone. However, the booting process stalled out. I attempted to flash both flasher and non-flasher images on the SD-Card, but nothing changed. I'll interact with the mentors and will see the solution.

## Conclusion:

The first week of the project involved benchmarking Darknet's performance on a host machine and laying the groundwork for targeting Darknet on a BeagleBoard. The performance results obtained from the host machine will serve as a baseline for comparison with the BeagleBoard. The next week will focus on porting Darknet to the BeagleBoard and evaluating its performance, providing valuable insights for further optimization and deployment on resource-constrained platforms.

## Goals for Week 2:

* Porting Darknet to the Target Platform (BeagleBoard): The primary focus will be on adapting Darknet to the BeagleBoard platform, ensuring compatibility and optimization for its hardware resources.

* Research TIDL APIs: Continue exploring the TIDL (Texas Instruments Deep Learning) implementation and its APIs.
Gain a deeper understanding of how TIDL can be utilized to optimize deep learning execution on TI processors.

* Edge AI: Go through the BeagleBone AI-64 applications and implementations of edge AI. Try running some demo. 


