import { FC } from "react"

interface EducationProps {
    schoolName: string
    schoolLocation: string
    major: string
    graduationDate: string
}

export const Education: FC<EducationProps> = (props) => {
    return (
        <div className="education">
            <p>
                {props.schoolName}, {props.schoolLocation}
            </p>
            <div>
                {props.major} - <i>{props.graduationDate}</i>
            </div>
        </div>
    )
}
