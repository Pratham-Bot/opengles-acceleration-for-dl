(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=(n(0),n(102));const o={title:"Week 2 - Porting to BBAI-64"},r={unversionedId:"create-a-document",id:"create-a-document",isDocsHomePage:!1,title:"Week 2 - Porting to BBAI-64",description:"Objective",source:"@site/docs/create-a-document.md",slug:"/create-a-document",permalink:"/docs/create-a-document",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/create-a-document.md",version:"current",sidebar:"docs",previous:{title:"Week 1 - Performance Benchmarking",permalink:"/docs/create-a-page"},next:{title:"Week 3 - Benchmarking on BBAI-64",permalink:"/docs/create-a-blog-post"}},c=[{value:"Objective",id:"objective",children:[]},{value:"Blockers",id:"blockers",children:[]},{value:"Darknet MAKEFILE",id:"darknet-makefile",children:[]},{value:"Cross-compilation for BBAI-64 (64-bit architecture)",id:"cross-compilation-for-bbai-64-64-bit-architecture",children:[{value:"Code:",id:"code",children:[]},{value:"Make",id:"make",children:[]}]},{value:"TI Deep Learning",id:"ti-deep-learning",children:[]},{value:"Goals for Week 3",id:"goals-for-week-3",children:[]}],l={toc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Porting Darknet to the Target Platform (BeagleBoard): The primary focus will be on adapting Darknet to the BeagleBoard platform, ensuring compatibility and optimization for its hardware resources.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Research TIDL APIs: Continue exploring the TIDL (Texas Instruments Deep Learning) implementation and its APIs.\nGain a deeper understanding of how TIDL can be utilized to optimize deep learning execution on TI processors.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edge AI: Go through the BeagleBone AI-64 applications and implementations of edge AI. Try running some demo. "))),Object(i.b)("h2",{id:"blockers"},"Blockers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"So after interaction with the mentors, they suggested me to use the UART and check the logs. I used Minicom to interact with the board. By default, the device name  was set to  /dev/modem . I changed it to /dev/ttyUSB0 .By pressing the boot button, I connected the board, and the logs are now visible. Then I got the propmt and gave the command to boot. Then it booted successfully. But now the propmt shows to updte the kernel hence I am working on that. ")),Object(i.b)("h2",{id:"darknet-makefile"},"Darknet MAKEFILE"),Object(i.b)("p",null,"In the darknet makefile, the following flag were set:"),Object(i.b)("p",null,"Makefile at ",Object(i.b)("inlineCode",{parentName:"p"},"darknnet/Makefile"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="darknnet/Makefile"',title:'"darknnet/Makefile"'},"GPU=0\nCUDNN=0\nCUDNN_HALF=0\nOPENCV=0\nAVX=0\nOPENMP=0\nLIBSO=0\nZED_CAMERA=0\nZED_CAMERA_v2_8=0\nRELEASE = 1\n\n")),Object(i.b)("h2",{id:"cross-compilation-for-bbai-64-64-bit-architecture"},"Cross-compilation for BBAI-64 (64-bit architecture)"),Object(i.b)("p",null,"This document provides a step-by-step guide for cross-compiling Darknet. Cross-compiling allows you to compile code on one architecture and run it on another, which is particularly useful when working with embedded systems like the BeagleBone AI-64."),Object(i.b)("h3",{id:"code"},"Code:"),Object(i.b)("p",null,"Since we are cross-compiling for 64-bit architecture, the following compiller and preprocessor were set as shown:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="Makefile"',title:'"Makefile"'},"ifeq ($(USE_CPP), 1)\nCC=aarch64-linux-gnu-gcc\nelse\nCC=aarch64-linux-gnu-gcc\nendif\n\nCPP=aarch64-linux-gnu-g++ -std=c++11\n\n")),Object(i.b)("h3",{id:"make"},"Make"),Object(i.b)("p",null,"Make using the command ",Object(i.b)("inlineCode",{parentName:"p"},"CC=aarch64-linux-gnu-gcc make -j")),Object(i.b)("p",null,"If you get an interrupt, do not forget to ",Object(i.b)("inlineCode",{parentName:"p"},"make clean"),". "),Object(i.b)("h2",{id:"ti-deep-learning"},"TI Deep Learning"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TIDL is a software framework provided by Texas Instruments that enables developers to implement deep learning algorithms on TI processors. It is designed to optimize the execution of deep learning models on TI's embedded processors, allowing for efficient deployment of AI applications in resource-constrained environments.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Based on model and task, TIDL input data are similar, but output data will vary based on task:"))),Object(i.b)("p",null,"Image Classification - 1D vector with likelihood of class presence. Top ranking indicates class winner (i.e. object of data class appears in input)"),Object(i.b)("p",null,"Image Pixel Segmentation\t- 2D matrix: Width x Height, with each cell set to integer value from 0 to max_class_index that model can discriminate"),Object(i.b)("p",null,"Image Object Detection\t- list of tuples. Each tuple includes class index, probability of detection, upper left corner (xmin,ymin), width and height of bounding box"),Object(i.b)("h2",{id:"goals-for-week-3"},"Goals for Week 3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sharing the cross-compiled darknet folder to the BBAI-64."),Object(i.b)("li",{parentName:"ul"},"Implementation and benchmarking on the BBAI-64.")))}s.isMDXComponent=!0}}]);