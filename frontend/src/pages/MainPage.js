import React, {useEffect} from 'react'
import authStore from '../stores/authStore';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

export default function MainPage() {

    const store = authStore();

        // Use effect
        useEffect(() => {
            store.fetchUser();
            
        }, []);

        if (store.user &&
            store.user.role === "admin") {
            return (
                <div>
                    <AdminPage />
                </div>
            )
        } else {
            return (
                <div>
                    <UserPage />
                </div>
            )
        }
}

