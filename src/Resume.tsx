import { ResumeSection } from "./components/ResumeSection"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { WorkExperience } from "./components/WorkExperience"
import { SkillList } from "./components/SkillList"
import { ContactInfo } from "./components/ContactInfo"
import { Education } from "./components/Education"
import ReactResumeQR from "./reactResumeQR.png"

interface ResumeProps {
    customSummary: string
    personalInfo: {
        phone: string
        email: string
        address: string
    }
}

export function Resume(props: ResumeProps) {
    return (
        <div className="resume">
            <Header name="Erich Kuerschner" jobTitle="Senior Software Engineer" />
            <Layout>
                {(Left, Right) => (
                    <>
                        <Left>
                            <ResumeSection title="Summary">
                                <p>{props.customSummary}</p>
                            </ResumeSection>
                            <ResumeSection title="Contact Information">
                                <ContactInfo
                                    phone={props.personalInfo.phone}
                                    email={props.personalInfo.email}
                                    address={props.personalInfo.address}
                                    other={[
                                        {
                                            iconLink:
                                                "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png",
                                            info: "linkedin.com/in/erich-kuerschner"
                                        },
                                        {
                                            iconLink:
                                                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
                                            info: "github.com/E-Kuerschner"
                                        }
                                    ]}
                                />
                            </ResumeSection>
                            <ResumeSection title="Education">
                                <Education
                                    schoolName="Iowa State University"
                                    schoolLocation="Ames, IA"
                                    major="BA Computer Engineering"
                                    graduationDate="May '15"
                                />
                            </ResumeSection>
                            <ResumeSection title="Skills">
                                <div className="skillGrid">
                                    <SkillList
                                        title="Languages/Libs/Frameworks"
                                        items={["Typescript", "React", "Apollo GraphQL", "Relay", "NodeJS", "React Native"]}
                                    />
                                    <SkillList
                                        title="Other"
                                        items={[
                                            "Webpack",
                                            "Babel",
                                            "Figma",
                                            "Docker",
                                            "Jira",
                                            "Datadog"
                                        ]}
                                    />
                                </div>
                            </ResumeSection>
                        </Left>
                        <Right>
                            <ResumeSection title="Professional Experience">
                                <WorkExperience
                                    position="Senior Software Engineer (Frontend Focus)"
                                    startDate="September 2021"
                                    employer="Coinbase"
                                >
                                    <ul>
                                        <li>As a technical lead, documented detailed designs for large multi-month spanning projects</li>
                                        <li>Implemented reusable core modules containing shared code for both web and mobile applications</li>
                                        <li>Improved observability of product with dashboards and automated, monitoring alerts</li>
                                        <li>Optimized funnel performance using client analytics tools and A/B tests</li>
                                        <li>Contributed to organization-wide client best practices guide</li>
                                        <li>Organized team-wide, full-stack engineering syncs</li>
                                        <li>Mentored junior engineers as they onboarded to the team</li>
                                    </ul>
                                </WorkExperience>
                                <WorkExperience
                                    position="Technical Lead/Engineering Manager"
                                    startDate="January 2019"
                                    endDate="August 2021"
                                    employer="Vail Systems"
                                >
                                    <ul>
                                        <li>Managed a team of 5 direct reports</li>
                                        <li>Coordinated project timelines with product, design, customers and other stakeholders</li>
                                        <li>Led direction of application architecture</li>
                                        <li>
                                            Educated developers on latest React news and best practices
                                        </li>
                                        <li>
                                            Hosted company-wide 'Frontend Guild' meetings to
                                            promote skill sharing and set a unified standard for application
                                            development
                                        </li>
                                    </ul>
                                </WorkExperience>
                                <WorkExperience
                                    position="Software Engineer"
                                    startDate="August 2015"
                                    endDate="January 2019"
                                    employer="Vail Systems"
                                >
                                    <ul>
                                        <li>
                                            Implemented features across the stack with React, NodeJS and a SQL database.
                                        </li>
                                        <li>Led a migration to Typescript for the entire application stack</li>
                                        <li>Incrementally adopted GraphQL</li>
                                        <li>
                                            Managed the complex build systems for several applications using tools such as Webpack and Babel
                                        </li>
                                    </ul>
                                </WorkExperience>
                                <WorkExperience
                                    position="Open Source Developer"
                                    startDate="October 2019"
                                    employer="useAudioPlayer"
                                >
                                    <a>https://github.com/E-Kuerschner/useAudioPlayer</a>
                                    <br />I am the creator and core contributor of a custom React
                                    hook with over 250 Github stars. The hook
                                    enables React developers to add sounds to their application through a clear and declarative API.
                                </WorkExperience>
                            </ResumeSection>
                            <ResumeSection title="Source Code">
                                <div className="sourceCodeSection">
                                    <p>
                                        The React components used to assemble this resume can be
                                        found below
                                    </p>
                                    <img src={ReactResumeQR} height={80} width={80} />
                                </div>
                            </ResumeSection>
                        </Right>
                    </>
                )}
            </Layout>
        </div>
    )
}
