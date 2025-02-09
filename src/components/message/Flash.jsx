import React from "react";

export function Flash({message, type}) {

    if (!message) return null 

    return <div className={`flash-message ${type}`}>
          {message}
    </div>

}