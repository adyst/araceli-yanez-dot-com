import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import 'react-vertical-timeline-component/style.min.css'

class Career extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconBgColor: 'rgb(108, 0, 37)',
      iconColor: '#fff',
      contentBgColor: '#fff',
      contentFontColor: 'rgb(108, 0, 37)'
    }
  }

  render() {
    return (
      <section id="career" className="section" data-aos="fade-in">
        <div className="container" data-aos="fade-in">
          <h2 className="title">Career</h2>
          <VerticalTimeline animate={true}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: this.state.contentBgColor, color: this.state.contentFontColor }}
              contentArrowStyle={{ borderRight: '7px solid ' + this.state.contentBgColor }}
              iconStyle={{ background: this.state.iconBgColor, color: this.state.iconColor }}
              icon={<WorkIcon />}>

              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Intel</h4>
              <p>Working on a temporary assignment as a Scrum Master and developer to port a legacy ASP.NET website to Angular and .NET Core.</p>
              <p className="tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Angular</span>
                <span className="tag">.NET Core</span>
                <span className="tag">C#</span>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: this.state.contentBgColor, color: this.state.contentFontColor }}
              contentArrowStyle={{ borderRight: '7px solid ' + this.state.contentBgColor }}
              iconStyle={{ background: this.state.iconBgColor, color: this.state.iconColor }}
              icon={<WorkIcon />}>

              <h3 className="vertical-timeline-element-title">Product Readiness Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Intel</h4>
              <p>Obtaining a broad understanding of various technical domains, such as mechanical hardware design, circuit design, and software development in several languages.</p>
              <p className="tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Python</span>
                <span className="tag">Java</span>
                <span className="tag">C#</span>
                <span className="tag">Google Apps Script</span>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: this.state.contentBgColor, color: this.state.contentFontColor }}
              contentArrowStyle={{ borderRight: '7px solid ' + this.state.contentBgColor }}
              iconStyle={{ background: this.state.iconBgColor, color: this.state.iconColor }}
              icon={<WorkIcon />}>

              <h3 className="vertical-timeline-element-title">Optical Probe Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Intel</h4>
              <p>Utilized optical probing equipment to debug speed issues in silicon to meet or exceed design specifications and acted as the local hardware expert.</p>
              <p className="tags">
                <span className="tag">Python</span>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: this.state.contentBgColor, color: this.state.contentFontColor }}
              contentArrowStyle={{ borderRight: '7px solid ' + this.state.contentBgColor }}
              iconStyle={{ background: this.state.iconBgColor, color: this.state.iconColor }}
              icon={<WorkIcon />}>

              <h3 className="vertical-timeline-element-title">Product Debug Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Intel</h4>
              <p>Characterized power performance of new Automated Test Equipment in the post-silicon debug lab space.</p>
              <p className="tags">
                <span className="tag">Perl</span>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: this.state.contentBgColor, color: this.state.contentFontColor }}
              contentArrowStyle={{ borderRight: '7px solid ' + this.state.contentBgColor }}
              iconStyle={{ background: '#ed1d32', color: this.state.iconColor }}
              icon={<SchoolIcon />}>

              <h3 className="vertical-timeline-element-title">Student</h3>
              <h4 className="vertical-timeline-element-subtitle">University of Arkansas</h4>
              <p>Recieved a Bachelor of Science in Computer Engineering.</p>
              <p className="tags">
                <span className="tag">C++</span>
                <span className="tag">Java</span>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
       </section>
    )
  }
}

export default Career