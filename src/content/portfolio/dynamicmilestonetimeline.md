---
path: "/portfolio/dynamicmilestonetimeline"
date: "2018-8-01"
title: "Dynamic Milestone Timeline"
description: "Rolling 40 week window of milestones and deliverables utilizing Google Sheets."
tags: ["javascript", "google apps script", "python"]
featuredImage: "../../assets/images/javascript_gapps.png"
---

Note: I cannot publicly disclose the code for this project.

Our team had to manage a large quantity of projects and for each of the projects, multiple milestones. Imagine having multiple, parallel, independent software projects all with a strict, third-party deadline that was always a moving target. Fun, huh? As the Scrum Master for our team, I noticed that we kept running into (understandable) issues with incorrect milestone dates and forgetting milestones. To add to that, the number of parallel projects kept increasing. We needed to alleviate our problem.

In terms of resources to help us, the teams we depended on had started to maintain spreadsheets for their deliverable dates that directly impacted our milestones. Extracting these dates and formatting them in a different way would allow us to more accurately assess our upcoming work. Normally, I avoid extracting from non-standard documents as they can change easily, but the rewards would far outweigh risk and maintenance in this case.

I created a milestone timeline (essentially a Gantt chart) in Google Apps Script that generated a rolling 40-week window of time, with milestones for each project. Dependency data was queried periodically with a Python script, then uploaded to the timeline. This timeline ended up being used quite frequently for sprint and quarterly planning. It solved our original problem and ended up also helping us identify conflicts and large influxes of work.

