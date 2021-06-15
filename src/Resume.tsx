import { Fragment } from "react"
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
            <Header name="Erich Kuerschner" jobTitle="Tech Lead / Frontend Developer" />
            <Layout>
                {(Left, Right) => (
                    <Fragment>
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
                            <ResumeSection title="Source Code">
                                <div className="sourceCodeSection">
                                    <p>
                                        The React components used to assemble this resume can be
                                        found below
                                    </p>
                                    <img src={ReactResumeQR} height={80} width={80} />
                                </div>
                            </ResumeSection>
                        </Left>
                        <Right>
                            <ResumeSection title="Professional Experience">
                                <WorkExperience
                                    position="Technical Lead, Manager"
                                    startDate="January 2019"
                                    employer="Vail Systems"
                                >
                                    <ul>
                                        <li>Manage team of 5 direct reports</li>
                                        <li>Dictate direction of application architecture</li>
                                        <li>
                                            Collaborate with design and product teams on feature
                                            functionality and requirements
                                        </li>
                                        <li>
                                            Educate other developers on latest React news and best
                                            practices
                                        </li>
                                        <li>
                                            Host department-wide 'Frontend Guild' meetings to
                                            promote skill sharing and unified vision for app
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
                                            Implemented full-stack features in a React-NodeJS stack
                                        </li>
                                        <li>Led migration of codebase to Typescript</li>
                                        <li>Introduced GraphQL to the project stack</li>
                                        <li>
                                            Setup complex build system for client app using Webpack,
                                            Babel
                                        </li>
                                        <li>
                                            Tested application logic using Mocha, Jest and
                                            application behavior using Cypress
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
                                    hook used by hundreds of other React developers. This hook
                                    enables React developers to build user interfaces which interact
                                    with background audio in their web app.
                                </WorkExperience>
                            </ResumeSection>
                            <ResumeSection title="Skills">
                                <div className="skillGrid">
                                    <SkillList
                                        title="Languages"
                                        items={["Typescript", "ECMAScript", "SQL", "HTML,CSS/SCSS"]}
                                    />
                                    <SkillList
                                        title="Libraries/Frameworks"
                                        items={["React", "Apollo GraphQL", "Flexbox", "ITCSS"]}
                                    />
                                    <SkillList
                                        title="Databases"
                                        items={["SQL Server", "Mongo DB", "MySQL"]}
                                    />
                                    <SkillList
                                        title="Other"
                                        items={[
                                            "Webpack",
                                            "Babel",
                                            "Figma",
                                            "Docker",
                                            "Git",
                                            "Jira",
                                            "Feature design"
                                        ]}
                                    />
                                </div>
                            </ResumeSection>
                        </Right>
                    </Fragment>
                )}
            </Layout>
        </div>
    )
}
