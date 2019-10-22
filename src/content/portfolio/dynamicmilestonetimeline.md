---
path: "/portfolio/dynamicmilestonetimeline"
date: "2018-8-01"
title: "Dynamic Milestone Timeline"
description: "Rolling 40 week window of milestones and deliverables utilizing Google Sheets."
tags: ["javascript", "google apps script", "python"]
featuredImage: "../../assets/images/javascript.png"
---

Note: I cannot publicly disclose the code for this project.

Our team had to manage a large quantity of projects and for each of the projects, multiple milestones. In addition to that, the milestones moved almost daily. As the Scrum Master for our team, I noticed that we kept running into related issues with not having the correct dates for milestones, forgetting them, and/or not being able to forecast future work easily during sprint planning. We needed to alleviate this problem.

In terms of resources to help us, the teams we depended on had started to maintain spreadsheets for their deliverable dates that directly impacted our milestones. Extracting these dates and formatting them in a different way would allow us to more accurately assess our upcoming work. Normally, extracting data from non-standard dependencies is not recommended, but the rewards would far outweigh risk and maintenance in this case.

I created a milestone timeline in Google Apps Script that generated a rolling 40-week window of time, with milestones for each project. Dependency data was queried periodically with a Python script, then uploaded to the timeline. This timeline ended up being used quite frequently for sprint and quarterly planning. It also helped us identify conflicts and large influxes of work.

