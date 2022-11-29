import create from "zustand";
import axios from "axios";

const adminStore = create((set) => ({
    //users: null,

    loggedIn: null,

    fetchUser: async () => {
        // Fetch the user
        const res = await axios.get("/user", {withCredentials: true});
    
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

    fetchAllUsers: async () => {
        // Fetch the user
        const res = await axios.get("/allUsers", {withCredentials: true});
        // console.log(res.data.users);
    
        // Set to state
        set({ users: res.data.users });

    },

    deleteUser: async (_id) => {
        // Delete the user
        await axios.delete(`/users/${_id}`, {withCredentials: true});
        const { users } = adminStore.getState();
    
        // Update state
        const newUsers = users.filter((user) => {
          return user._id !== _id;
        });
    
        set({ users: newUsers });
      },

    // toggleUpdate: ({ fname, lname, dob, email }) => {
    //     set({
    //       updateForm: {
    //         fname,
    //         lname,
    //         dob,
    //         email,
    //       },
    //     });
    //   },

    //   updateUser: async (e) => {
    //     e.preventDefault();
    
    //     const {
    //         updateForm: { fname, lname, dob, email, _id },
    //         users
    //     } = adminStore.getState();
    
    //     // Send the update request
    //     const res = await axios.put(`/users/${_id}`, {
    //         fname,
    //         lname,
    //         dob,
    //         email,
    //     });
    
    //     // Update state
    //     const newUser = [...users];
    //     const userIndex = users.findIndex((user) => {
    //       return user._id === _id;
    //     });
    //     newUser[userIndex] = res.data.user;
    
    //     set({
    //       users: newUser,
    //       updateForm: {
    //         _id: null,
    //         fname: "",
    //         lname: "",
    //         dob: "",
    //         email: "",
    //       },
    //     });
    //   },


    checkAuth: async () => {
        try {
            await axios.get("/check-auth", {withCredentials: true});
            set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
        }
    },

    logout: async () => {
        await axios.get("/logout", {withCredentials: true});
        set({loggedIn: false});
    }


}));


export default adminStore;
