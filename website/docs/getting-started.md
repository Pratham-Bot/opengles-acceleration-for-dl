---
title: Week 0 - Community Bonding
slug: /
---

During Week 0 of the project, the primary focus is on interacting with project mentors and presenting them with the idea and concept of the project. This is a crucial step in the project initiation phase, as it allowed me to gain valuable insights and feedback from experienced the mentors. 

## Things new to

I have had previously worked on the [GPGPU with GLES](https://github.com/Pratham-Bot/GPGPU-with-GLES) project where I worked on several libraries including OpenGLES, OpenCL, GLFW, GLUT, GLAD, etc and got introduce to various shader programs.

However, this project makes use of some cutting-edge technologies, like GPU acceleration, Convolution Neural Networks, Vulkan, Darknet, and Machine Learning (Deep Learning). So, during this project, my main focus was on learning everything I could about this technology and asking the BeagleBoard mentors to clarify any questions I had.

## [Darknet](https://pjreddie.com/darknet/)  

Darknet is an open source neural network framework written in C and CUDA. It is fast,compatible, easy to install, and supports CPU and GPU computation. Darknet is used in the project to implement the YOLO object detection and recognition model.

You Only Look Once (YOLO) is a state-of-the-art, real-time object detection algorithm that uses a single neural network to detect objects. The YOLO model consists of multiple convolutional layers that extract features from the input image and several fully connected layers that produce the output of the model. These layers have many parameters that need to be optimised during training to achieve high accuracy in object detection and recognition.

In this project, Darknet is used as the deep learning framework to implement the YOLO model and optimise its performance.

## [BeagleBone AI-64](https://beagleboard.org/ai-64)

[BeagleBone AI-64](https://beagleboard.org/ai-64) brings a complete system for developing artificial intelligence (AI) and machine learning solutions with the convenience and expandability of the BeagleBone  platform and the peripherals on board to get started right away learning and building applications. With locally hosted, ready-to-use, open-source focused tool chains and development environment, a simple web browser, power source and network connection are all that need to be added to start building performance-optimized embedded applications. Industry-leading expansion possibilities are enabled through familiar BeagleBone® cape headers, with hundreds of open-source hardware examples and dozens of readily available embedded expansion options available off-the-shelf.



## [Beagleplay](https://beagleboard.org/play)

BeaglePlay is an open-source single board computer designed to simplify the process of adding sensors, actuators, indicators, human interfaces, and connectivity to a reliable embedded system. It features a powerful 64-bit, quad-core processor and innovative connectivity options, including WiFi, Gigabit Ethernet, sub-GHz wireless, and single-pair Ethernet with power-over-data-line. With compatibility with 1,000s of off-the-shelf add-ons and a customized Debian Linux image, BeaglePlay makes expansion and customization easy. It also includes ribbon-cable connections for cameras and touch-screen displays, and a socket for a battery-backed real-time-clock, making it ideal for human-machine interface designs. With its competitive price and user-friendly design, we expect BeaglePlay to provide you with a positive development experience. Some of the real world applications for BeaglePlay include:

* Building/industrial automation gateways
* Digital signage
* Human Machine Interface (HMI)
* BeagleConnect sensor gateways

## Aim of the project

* Accelerate the performance of deep learning models, specifically targeting the Darknet CNN framework, using OpenGLES or Vulkan APIs.
* Identify and optimize computationally intensive layers within the Darknet CNN framework for improved performance. 
* Writing optimized shader code that can perform the necessary computations in parallel, taking advantage of the GPU architecture.
* Evaluate the performance of the accelerated Darknet CNN framework by comparing it to the original CPU-based implementation. This includes benchmarking the execution time and potentially measuring the speed-up achieved through GPU acceleration.

## Benefits of the project

* The Performance of the YOLOv3 model is improved which will lead to better object detection.
* Many layers can be accelerated at a time hence the efficiency of the model is improved.
* Memory Usage is reduced by loading the computations on GPU as discussed [here](https://stackoverflow.com/questions/13303219/reducing-ram-usage-with-regard-to-textures).

## Project Links

* Proposal: https://elinux.org/BeagleBoard/GSoC/2023_Proposal/OpenGLES_acceleration_for_DL
* Introductory Video: https://www.youtube.com/watch?v=jSTgFrK3ZOw
* Project Tracker: https://forum.beagleboard.org/t/weekly-progress-report-opengles-acceleration-for-dl/34898
