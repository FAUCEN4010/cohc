import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    //user: null,

    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        fname: "",
        lname: "",
        dob: "",
        email: "",
        password: "",
    },

    fetchUser: async () => {
        // Fetch the user
        const res = await axios.get("/user");
    
        // Set to state
        // set({ user: res.data.user });        

        set({ user: {
            fname: res.data.user.fname,
            lname: res.data.user.lname,
            dob: res.data.user.dob,
            email: res.data.user.email,
            role: res.data.user.role,
        }});
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            };
        });
    },

    login: async (e) => {
        const {loginForm} = authStore.getState();

        const res = await axios.post("/login", loginForm);

        set({
            loggedIn: true,
            loginForm: {
                email: "",
                password: "",
            },
        });

        console.log(res);
    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth");
            set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
        }
    },

    signup: async (e) => {
        const {signupForm} = authStore.getState();

        await axios.post("/signup", signupForm);

        set({
            signupForm: {
                fname: "",
                lname: "",
                dob: "",
                email: "",
                password: "",
            },
        });
    },

    logout: async () => {
        await axios.get("/logout");
        set({loggedIn: false});
    }

}));


export default authStore;
