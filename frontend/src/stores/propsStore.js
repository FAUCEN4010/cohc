import create from "zustand";
import axios from "axios";

const propsStore = create((set) => ({
  props: null,

  createForm: {
    item: "",
    dollarVal: "",
    dateAquired: "",
  },

  updateForm: {
    _id: null,
    item: "",
    dollarVal: "",
    dateAquired: "",
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
  
  fetchProps: async () => {
    // Fetch the props
    const res = await axios.get("/props");

    // Set to state
    set({ props: res.data.props });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createProp: async (e) => {
    e.preventDefault();

    const { createForm, props } = propsStore.getState();
    const res = await axios.post("/props", createForm);

    set({
      props: [...props, res.data.prop],
      createForm: {
        item: "",
        dollarVal: "",
        dateAquired: "",
      },
    });
  },

  deleteProp: async (_id) => {
    // Delete the prop
    await axios.delete(`/props/${_id}`);
    const { props } = propsStore.getState();

    // Update state
    const newProps = props.filter((prop) => {
      return prop._id !== _id;
    });

    set({ props: newProps });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, item, dollarVal, dateAquired }) => {
    set({
      updateForm: {
        item,
        dollarVal,
        dateAquired,
        _id,
      },
    });
  },

  updateProp: async (e) => {
    e.preventDefault();

    const {
      updateForm: { item, dollarVal, dateAquired, _id },
      props,
    } = propsStore.getState();

    // Send the update request
    const res = await axios.put(`/props/${_id}`, {
      item,
      dollarVal,
      dateAquired,
    });

    // Update state
    const newProps = [...props];
    const propIndex = props.findIndex((prop) => {
      return prop._id === _id;
    });
    newProps[propIndex] = res.data.prop;

    set({
      props: newProps,
      updateForm: {
        _id: null,
        item: "",
        dollarVal: "",
        dateAquired: "",
      },
    });
  },
}));

export default propsStore;
