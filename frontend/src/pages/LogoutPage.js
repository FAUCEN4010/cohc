import React from 'react'
import { useEffect } from 'react'
import authStore from '../stores/authStore';

export default function LogoutPage() {
    const store = authStore();
    useEffect(() => {
        store.logout();
    }, []);

    return (
        <div className="text-center"><br /><br />
        You are now logged out.<br /><br />
        You can log back in <a href="/login">here</a>.
        </div>
    )
}
