import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import WorkIcon from '@material-ui/icons/Work'
import 'react-vertical-timeline-component/style.min.css'

import Layout from '../components/layout'

class About extends React.Component {
  render() {
    return (
      <Layout>
        <section className="page section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1>About</h1>
                  <p>This is some information about me. That I like to do things. Hire me...</p>
                </div>
                <div className="column">
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<WorkIcon />}>

                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export default About