import { FC, ReactNode } from "react"

interface WorkExperienceProps {
    employer: string
    position: string
    startDate: string
    endDate?: string
    children: ReactNode
}

export const WorkExperience: FC<WorkExperienceProps> = (props) => {
    const endDate = props.endDate ? props.endDate : "present"
    return (
        <div className="workExperience">
            <div className="workExperience__row">
                <b>{props.position}</b>
            </div>
            <div className="workExperience__row">
                <i>{props.employer}</i> | {props.startDate} - {endDate}
            </div>
            {props.children}
        </div>
    )
}
