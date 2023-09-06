import { useState } from "react";
import UserHome from "../components/UserHome";
import GeneralHome from "../components/GeneralHome";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(true);

    if (loggedIn) {
        return <UserHome />
    } else {
        return <GeneralHome />
    }

}