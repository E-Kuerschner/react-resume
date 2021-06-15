import { FC } from "react"

interface SkillListProps {
    items: string[]
    title: string
}

export const SkillList: FC<SkillListProps> = (props) => {
    return (
        <div className="skillList">
            <h3>{props.title}</h3>
            <ul>
                {props.items.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
        </div>
    )
}
