(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(102));const r={title:"Week 1 - Performance Benchmarking"},i={unversionedId:"create-a-page",id:"create-a-page",isDocsHomePage:!1,title:"Week 1 - Performance Benchmarking",description:"Objective",source:"@site/docs/create-a-page.md",slug:"/create-a-page",permalink:"/opengles-acceleration-for-dl/docs/create-a-page",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/create-a-page.md",version:"current",sidebar:"docs",previous:{title:"Week 0 - Community Bonding",permalink:"/opengles-acceleration-for-dl/docs/"},next:{title:"Week 2 - Porting to BBAI-64",permalink:"/opengles-acceleration-for-dl/docs/create-a-document"}},l=[{value:"Objective",id:"objective",children:[]},{value:"Week 1 Summary",id:"week-1-summary",children:[]},{value:"Task Completed",id:"task-completed",children:[]},{value:"Benchmarking Results:",id:"benchmarking-results",children:[]},{value:"Blockers",id:"blockers",children:[]},{value:"Conclusion:",id:"conclusion",children:[]},{value:"Goals for Week 2:",id:"goals-for-week-2",children:[]}],c={toc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"objective"},"Objective"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Benchmarking the performance of Darknet on a host (laptop) and targeting the same on a BeagleBoard.")),Object(o.b)("h2",{id:"week-1-summary"},"Week 1 Summary"),Object(o.b)("p",null,"During the first week of the project, the main objective was to benchmark the performance of Darknet, an open-source neural network framework, on a host machine (laptop). Additionally, efforts were made to understand the compatibility and optimization requirements for targeting Darknet on a BeagleBoard. Furthermore, research was conducted on TIDL (Texas Instruments Deep Learning) implementation to explore its potential for optimizing deep learning execution on TI processors."),Object(o.b)("h2",{id:"task-completed"},"Task Completed"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Installation and Setup:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Darknet was installed on the host machine following the official documentation and guidelines.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The necessary dependencies were successfully configured and integrated with Darknet.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The required dataset for testing Darknet's performance was obtained and prepared. "))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Performance Benchmarking on the Host Machine:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The host machine's hardware specifications were recorded, including the CPU, GPU, RAM, and storage capacity.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Darknet was executed on the host machine using different models and configurations, such as YOLOv3 and different pre-trained weights."))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Exploration of TIDL Implementation:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Research was conducted on TIDL, the Texas Instruments Deep Learning implementation, to understand its capabilities for optimizing deep learning execution on TI processors."),Object(o.b)("li",{parentName:"ul"},'The TIDL documentation, specifically the "Foundational Components: TIDL" section in the Processor SDK for Linux documentation, was studied to gain insights into its features and functionalities.'),Object(o.b)("li",{parentName:"ul"},"The potential benefits of leveraging TIDL for accelerating Darknet's performance on TI processors, such as the BeagleBoard, were evaluated.")),Object(o.b)("h2",{id:"benchmarking-results"},"Benchmarking Results:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="darknnet/Makefile"',title:'"darknnet/Makefile"'},"\n GPU isn't used \n OpenCV isn't used - data augmentation will be slow \nmini_batch = 1, batch = 1, time_steps = 1, train = 0 \n   layer   filters  size/strd(dil)      input                output\n   0 conv     32       3 x 3/ 1    416 x 416 x   3 ->  416 x 416 x  32 0.299 BF\n   1 conv     64       3 x 3/ 2    416 x 416 x  32 ->  208 x 208 x  64 1.595 BF\n   2 conv     32       1 x 1/ 1    208 x 208 x  64 ->  208 x 208 x  32 0.177 BF\n   3 conv     64       3 x 3/ 1    208 x 208 x  32 ->  208 x 208 x  64 1.595 BF\n   4 Shortcut Layer: 1,  wt = 0, wn = 0, outputs: 208 x 208 x  64 0.003 BF\n   5 conv    128       3 x 3/ 2    208 x 208 x  64 ->  104 x 104 x 128 1.595 BF\n   6 conv     64       1 x 1/ 1    104 x 104 x 128 ->  104 x 104 x  64 0.177 BF\n   7 conv    128       3 x 3/ 1    104 x 104 x  64 ->  104 x 104 x 128 1.595 BF\n   8 Shortcut Layer: 5,  wt = 0, wn = 0, outputs: 104 x 104 x 128 0.001 BF\n   9 conv     64       1 x 1/ 1    104 x 104 x 128 ->  104 x 104 x  64 0.177 BF\n  10 conv    128       3 x 3/ 1    104 x 104 x  64 ->  104 x 104 x 128 1.595 BF\n  11 Shortcut Layer: 8,  wt = 0, wn = 0, outputs: 104 x 104 x 128 0.001 BF\n  12 conv    256       3 x 3/ 2    104 x 104 x 128 ->   52 x  52 x 256 1.595 BF\n  13 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF\n  14 conv    256       3 x 3/ 1     52 x  52 x 128 ->   52 x  52 x 256 1.595 BF\n  15 Shortcut Layer: 12,  wt = 0, wn = 0, outputs:  52 x  52 x 256 0.001 BF\n  16 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF\n  17 conv    256       3 x 3/ 1     52 x  52 x 128 ->   52 x  52 x 256 1.595 BF\n  18 Shortcut Layer: 15,  wt = 0, wn = 0, outputs:  52 x  52 x 256 0.001 BF\n  19 conv    128       1 x 1/ 1     52 x  52 x 256 ->   52 x  52 x 128 0.177 BF\n.\n.\n.\n.\n.\n.\n.\n[yolo] params: iou loss: mse (2), iou_norm: 0.75, obj_norm: 1.00, cls_norm: 1.00, delta_norm: 1.00, scale_x_y: 1.00\nTotal BFLOPS 65.879 \navg_outputs = 532444 \nLoading weights from yolov3.weights...\n seen 64, trained: 32013 K-images (500 Kilo-batches_64) \nDone! Loaded 107 layers from weights-file \n Detection layer: 82 - type = 28 \n Detection layer: 94 - type = 28 \n Detection layer: 106 - type = 28 \ndata/dog.jpg: Predicted in 6389.517000 milli-seconds.\nbicycle: 99%\ndog: 100%\ntruck: 93%\nNot compiled with OpenCV, saving to predictions.png instead\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I tested the detector on the pre-trained models of the framework.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It has trained 32013K images with 500 batches with each batch containing 64 images. The input size of the architecture was 416 x 416 x 3 with a 3x3 convolution layer followed by 2x2 max pooling layers which are used to perform downsampling with stride 2. Later, the model has 1x1 filters to reduce the number of filters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A total of 107 layers were loaded, and the total prediction took around 6389.517000 ms. "))),Object(o.b)("h2",{id:"blockers"},"Blockers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For porting and testing the model, I'm using BB AI-64. I connected my laptop's USB-C port and 5v adaptor to the Beaglebone. However, the booting process stalled out. I attempted to flash both flasher and non-flasher images on the SD-Card, but nothing changed. I'll interact with the mentors and will see the solution.")),Object(o.b)("h2",{id:"conclusion"},"Conclusion:"),Object(o.b)("p",null,"The first week of the project involved benchmarking Darknet's performance on a host machine and laying the groundwork for targeting Darknet on a BeagleBoard. The performance results obtained from the host machine will serve as a baseline for comparison with the BeagleBoard. The next week will focus on porting Darknet to the BeagleBoard and evaluating its performance, providing valuable insights for further optimization and deployment on resource-constrained platforms."),Object(o.b)("h2",{id:"goals-for-week-2"},"Goals for Week 2:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Porting Darknet to the Target Platform (BeagleBoard): The primary focus will be on adapting Darknet to the BeagleBoard platform, ensuring compatibility and optimization for its hardware resources.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Research TIDL APIs: Continue exploring the TIDL (Texas Instruments Deep Learning) implementation and its APIs.\nGain a deeper understanding of how TIDL can be utilized to optimize deep learning execution on TI processors.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edge AI: Go through the BeagleBone AI-64 applications and implementations of edge AI. Try running some demo. "))))}s.isMDXComponent=!0}}]);