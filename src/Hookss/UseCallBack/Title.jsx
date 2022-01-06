import React from "react"

const Title = () => {
    console.log("Render Title");
    return (
        <h2>Use Call Back Hook</h2>
    )
}

export default React.memo(Title)