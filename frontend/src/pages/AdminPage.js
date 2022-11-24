import { useEffect } from "react";
import Users from "../components/Users";
import adminStore from "../stores/adminStore";
import '../index.css';


export default function AdminPage() {
    const store = adminStore();

    // Use effect
    useEffect(() => {
        store.fetchAllUsers();
    }, []);

    
    return (
        <div className="main-container">      
            <Users />
        </div>
    );
}