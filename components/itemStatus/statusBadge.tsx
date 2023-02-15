import { Badge } from '@chakra-ui/react'
import { FC } from 'react'

const StatusBadge: FC<{ prop: "confirmed" | "declined" | "unconfirmed"}> = ({ prop }) => {

    const unconfirmed = {
        color: "gray",
        badgeText: "Unconfirmed"
    }

    const confirmed = {
        color: "green",
        badgeText: "Confirmed"
    }

    const declined = {
        color:"red",
        badgeText: "Declined"
    }

    let mode = unconfirmed
    if (prop == "confirmed") mode = confirmed 
    else if (prop == "declined") mode = declined 
    

    return (
        <>
            <Badge colorScheme={mode.color}>{mode.badgeText}</Badge>
        </>
    )
}

export default StatusBadge