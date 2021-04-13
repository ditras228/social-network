import React from "react";

const MessageItem: React.FC<PropsType> = ({id,  name}) => {
    return <div>{name}</div>
}

export default MessageItem;

type PropsType={
    id: number
    name: string
}