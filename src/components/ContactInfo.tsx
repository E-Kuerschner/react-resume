import { FC } from "react"

interface InfoProps {
    iconLink: string
    info: string
}

interface ContactInfoProps {
    phone: string
    email: string
    address: string
    other: InfoProps[]
}

const Info: FC<InfoProps> = (props) => {
    return (
        <div className="info">
            <img src={props.iconLink} alt="linked in logo" width={20} height={20} />
            <div>{props.info}</div>
        </div>
    )
}

export const ContactInfo: FC<ContactInfoProps> = (props) => {
    return (
        <div className="contactInfo">
            <Info
                iconLink="https://image.flaticon.com/icons/png/512/69/69524.png"
                info={props.address}
            />
            <Info
                iconLink="https://pics.freeicons.io/uploads/icons/png/7969340901574338609-512.png"
                info={props.email}
            />
            <Info
                iconLink="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                info={props.phone}
            />
            {props.other.map(({ iconLink, info }) => (
                <Info key={info} iconLink={iconLink} info={info} />
            ))}
        </div>
    )
}
