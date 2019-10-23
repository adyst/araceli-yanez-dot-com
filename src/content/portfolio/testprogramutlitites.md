---
path: "/portfolio/testprogramutilities"
date: "2018-6-01"
title: "Test Program Utilities"
description: "Collection of tools for semi-automating a previously manual workflow utilizing Google Sheets."
tags: ["javascript", "google apps script", "python"]
featuredImage: "../../assets/images/javascript_gapps.png"
---

Note: I cannot publicly disclose the code for this project.

For some background, test programs are a collection of files that are used by Automated Test Equipment, or equipment that is used when testing integrated circuits in a production environment. Multiple companies use this type of equipment. 

Test programs need to be precise and custom, for the most accurate testing experience. Spreadsheets are the best medium for this type of work, since it is just a combination of specific data formatted into a certain structure. Doing this work could be repetitive and inefficient.

Within my first couple of test programs, I was already bookmarking issues that could be fixed: a single change causing numerous cascading changes, manually collecting certain pieces of data from multiple tabs into one tab,  certain structures being conceptually identical across different projects, etc. We began looking for ways to improve this process, which represented the bulk of our team's work. And I just really don't like doing repetitive, manual work (does anybody?)

TestProgramUtilties is a Google Apps Script library written in JavaScript. It hooks into a Google Sheet to automate a lot of the aforementioned issues. Overall, it has shortened the process time by about 20%.
