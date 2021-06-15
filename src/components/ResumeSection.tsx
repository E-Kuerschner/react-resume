import { FC, ReactNode } from "react"
import classnames from "classnames"

interface ResumeSectionProps {
    title: string
    children: ReactNode
    className?: string
}

export const ResumeSection: FC<ResumeSectionProps> = (props) => {
    const classes = ["resumeSection"]
    if (props.className) {
        classes.push(props.className)
    }
    return (
        <section className={classnames(classes)}>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}
