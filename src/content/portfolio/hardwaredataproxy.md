---
path: "/portfolio/hardwaredataproxy"
date: "2018-7-01"
title: "Hardware Data Proxy"
description: "Client-server application that serves as a proxy between a Java and WCF client."
tags: []
---

Note: I cannot publicly disclose the code for this project.

Our lab has to maintain a large inventory of various Automated Test Equipment. While the equipment was identical, there were multiple ways in which the equipment could be used that either extended or limited its capabilities. When a customer wanted to know what type of equipment they were working with, they could walk out into the lab and see. With a growing population of remote workers, this was starting to become a problem.

We had tooling in Java that allowed users to see the type of equpiment available, but the data was hard-coded and needed to be updated by someone daily. Hello, human error! Fortunately, there was another system with an API that would allow us to get this information automatically.

I created a client/server proxy in C# that allowed us to query a WCF server with various information about the equipment, then serve that data to our Java tooling. Queries to the WCF server were naturally slow, so I made further optimizations to sensibly cache data and thread requests.