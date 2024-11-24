import React from "react";

function Message(props) {
    return (
        <article class="message is-info">
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.children}
            </div>
        </article>
    )

}

export default Message;