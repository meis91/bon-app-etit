import React, {useEffect, useState} from 'react';
import axios from "../../api/axios";
import { SEARCH_USER_URL} from "../../constants";

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        let userId = sessionStorage.getItem("userId")
        const params = new URLSearchParams([['id', userId]]);
        let searchUrl = `${SEARCH_USER_URL}?${params}`;
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        axios.get(searchUrl, config).then((response) => {
            console.log(response.data);
            setUser(response.data);
        })
    }, []);

    if (!user) return null;

    return (
        <div>

        </div>
    );
};

export default Profile;
