import React, { useState } from 'react'

function ChooseButton() {

    const [userActived, setUserActived] = useState("ui button active")
    const [isUserActived, setisUserActived] = useState(true)
    const [adminActived, setAdminActived] = useState("ui button")
    const [isAdminActived, setisAdminActived] = useState(false)

    const userActivedPress = () => {
        setUserActived("ui button active")
        setisUserActived(true)
        setAdminActived("ui button")
        setisAdminActived(false)

    }

    const adminActivedPress = () => {
        setAdminActived("ui button active")
        setisAdminActived(true)
        setUserActived("ui button")
        setisUserActived(false)
    }

    const isUserActived2 = () => {
        if (isUserActived === true) {
            return true
        } else {
            return false
        }
    }

    const isAdminActived2 = () => {
        if (isAdminActived === true) {
            return true
        } else {
            return false
        }
    }


    return (

        <div class="ui large buttons">
            <button class={userActived} onClick={() => userActivedPress()} style={{ background: isUserActived2() ? "green" : "grey", color: 'white' }}> User</button>
            <div class="or"></div>
            <button class={adminActived} onClick={() => adminActivedPress()} style={{ background: isAdminActived2() ? "green" : "grey", color: "white" }}> Admin</button>
        </div>
    )

}

export default ChooseButton

// "ui button active"