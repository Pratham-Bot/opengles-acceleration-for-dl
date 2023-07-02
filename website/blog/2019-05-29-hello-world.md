---
slug: hello-world
title: About the project
author: Darknet
author_title: an open source neural network framework
author_url: https://pjreddie.com/darknet/
author_image_url: img/darknet.png
---

Aim: Current acceleration on the beagleboard AI-64 focuses on using the EVE and DSP hardware blocks. The SoC on those boards also feature an OpenGLES enabled GPU. The goal with this is to utilize shaders to perform computations. A possible frame work to utilize this on is the Darknet CNN framework.

The goal of the project is to accelerate as many layer types as possible using the OpenGLES-enabled GPU on beagleboard AI-64 boards. The approach is to use shaders, which are small programs that run on the GPU to perform computations, in conjunction with the Darknet CNN framework. The use of shaders for computation can result in significant speedup, as GPUs are designed to process large amounts of data in parallel.

The shader programs would need to be designed to take advantage of the parallel processing capabilities of the GPU. This could involve splitting the input data into smaller batches and processing them in parallel, or using multiple threads to perform computations simultaneously. The shader programs would also need to be optimized for the specific GPU architecture on the beagleboard AI-64  boards.

Once the shader programs have been implemented, they would need to be integrated into the Darknet CNN framework. This would involve modifying the existing code to use the shader programs for the relevant layers. The modified framework could then be used to train and evaluate CNN models on the beagleboard AI-64 boards, with the goal of achieving significant speedup compared to running the same models on the CPU.