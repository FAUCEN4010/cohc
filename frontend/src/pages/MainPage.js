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

        // if (store.checkAuth && store.checkAuth.loggedIn) {

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
        // } else {
        //     return (
        //         <div align="center">
        //             <br />
        //             <h2>Not logged in</h2>
        //             <div>You can return to the <a href="/">login page</a> and try again.</div>
        //         </div>
        //     )
        // }
}

