import { FC } from "react"

interface HeaderProps {
    name: string
    jobTitle?: string
}

export const Header: FC<HeaderProps> = (props) => {
    const title = props.jobTitle ?? "Frontend Developer"
    return (
        <header className="resumeHeader">
            <h1>{props.name}</h1>
            <code className="resumeHeader__title">{title}</code>
        </header>
    )
}
