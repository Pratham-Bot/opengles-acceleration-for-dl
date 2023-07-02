---
title: Week 2 - Porting to BBAI-64
---

## Objective 

* Porting Darknet to the Target Platform (BeagleBoard): The primary focus will be on adapting Darknet to the BeagleBoard platform, ensuring compatibility and optimization for its hardware resources.

* Research TIDL APIs: Continue exploring the TIDL (Texas Instruments Deep Learning) implementation and its APIs.
Gain a deeper understanding of how TIDL can be utilized to optimize deep learning execution on TI processors.

* Edge AI: Go through the BeagleBone AI-64 applications and implementations of edge AI. Try running some demo. 


## Blockers

* So after interaction with the mentors, they suggested me to use the UART and check the logs. I used Minicom to interact with the board. By default, the device name  was set to  /dev/modem . I changed it to /dev/ttyUSB0 .By pressing the boot button, I connected the board, and the logs are now visible. Then I got the propmt and gave the command to boot. Then it booted successfully. But now the propmt shows to updte the kernel hence I am working on that. 

## Darknet MAKEFILE 

In the darknet makefile, the following flag were set:

Makefile at `darknnet/Makefile`:

```mdx title="darknnet/Makefile"
GPU=0
CUDNN=0
CUDNN_HALF=0
OPENCV=0
AVX=0
OPENMP=0
LIBSO=0
ZED_CAMERA=0
ZED_CAMERA_v2_8=0
RELEASE = 1

```

## Cross-compilation for BBAI-64 (64-bit architecture)

This document provides a step-by-step guide for cross-compiling Darknet. Cross-compiling allows you to compile code on one architecture and run it on another, which is particularly useful when working with embedded systems like the BeagleBone AI-64.

### Code: 

Since we are cross-compiling for 64-bit architecture, the following compiller and preprocessor were set as shown:

```diff title="Makefile"
ifeq ($(USE_CPP), 1)
CC=aarch64-linux-gnu-gcc
else
CC=aarch64-linux-gnu-gcc
endif

CPP=aarch64-linux-gnu-g++ -std=c++11

```

### Make

Make using the command `CC=aarch64-linux-gnu-gcc make -j`

If you get an interrupt, do not forget to `make clean`. 

## TI Deep Learning

* TIDL is a software framework provided by Texas Instruments that enables developers to implement deep learning algorithms on TI processors. It is designed to optimize the execution of deep learning models on TI's embedded processors, allowing for efficient deployment of AI applications in resource-constrained environments.

* Based on model and task, TIDL input data are similar, but output data will vary based on task:

Image Classification - 1D vector with likelihood of class presence. Top ranking indicates class winner (i.e. object of data class appears in input)

Image Pixel Segmentation	- 2D matrix: Width x Height, with each cell set to integer value from 0 to max_class_index that model can discriminate

Image Object Detection	- list of tuples. Each tuple includes class index, probability of detection, upper left corner (xmin,ymin), width and height of bounding box

## Goals for Week 3

* Sharing the cross-compiled darknet folder to the BBAI-64.
* Implementation and benchmarking on the BBAI-64.
