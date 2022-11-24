import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Props from "../components/Props";
import UpdateForm from "../components/UpdateForm";
import propsStore from "../stores/propsStore";
import '../index.css';


export default function UserPage() {
    const store = propsStore();

    // Use effect
    useEffect(() => {
        store.fetchUser();
    }, []);

    // Use effect
    useEffect(() => {
        store.fetchProps();
    }, []);

    
    return (
        <div className="main-container">      
            <Props />
            <UpdateForm />
            <CreateForm />
        </div>
    );
}