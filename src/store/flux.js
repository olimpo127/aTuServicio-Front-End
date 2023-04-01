import { useState } from "react";

const getState = ({ setStore, getActions, getStore }) => {

    return {
        store: {
            user: {
                name: "",
                lastname: "",
                username: "",
                email: "",
                password: ""
            },
            service: {
                title: "",
                price: "",
                category:"",
                availability:"",
                city: "",
                region: "",
                comuna: "",
                service_description: "",
                image: ""
            },

            myAccount: {},

            showEditAccount: false,
            showChangePassword: false,
            showDeleteAccount: false,




        },
        actions: {
            handleChange: (e) => {
                let { user } = getStore();

                const {
                    target: { value, name },
                } = e;
                setStore({
                    user: {
                        ...user,
                        [name]: value
                    },
                });
            },
            handleUserRegister: () => {
                const { user } = getStore();
                fetch("http://localhost:5000/users", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    user: {
                        name: "",
                        lastname: "",
                        username: "",
                        email: "",
                        password: ""
                    },
                });
            },
            handleUserLogin: (e) => {
                e.preventDefault();
                const { user } = getStore();
                fetch("http://localhost:5000/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    user: {
                        username: "",
                        password: ""
                    },
                });
            },
            handleService: (e) => {
                let { service } = getStore();
                const {
                    target: { value, name },
                } = e;
                setStore({
                    service: {
                        ...service,
                        [name]: value
                    },
                });
            },
            handleServiceCreation: (e) => {
                e.preventDefault();
                const { service } = getStore();
                console.log(service)
                fetch("http://localhost:5000/services", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(service),
                })
                    .then(res => res.json())
                    .then(data =>  {
                        alert("Servicio Creado Satisfactoriamente ");
                        setStore({
                            service: {
                                title: "",
                                price: "",
                                category: "",
                                availability: "",
                                city: "",
                                region: "",
                                comuna: "",
                                service_description: "",
                                image: ""
                            },
                        });
                        console.log(data);
                    })
                    .catch(error => { 
                        alert("Ocurrio un error al registrar el servicio " + error.message);
                        console.log(error);
                    });
            },

            getAccount: (id) => {

                fetch("http://localhost:5000/users/" + id, {
                    headers: {
                        "Content-Type": "application/json",

                    },
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setStore({ myAccount: data })

                    })
                    .catch(error => console.log(error));

            },


            openEditAccount: () => {
                setStore({ showEditAccount: true });
                console.log("editaccount")
            },

            closeEditAccount: () => {
                setStore({ showEditAccount: false })
            },

            openChangePassword: () => {
                setStore({ showChangePassword: true });
                console.log("changePassword")
            },

            closeChangePassword: () => {
                setStore({ showChangePassword: false })
            },

            openDeleteAccount: () => {
                setStore({ showDeleteAccount: true });
                console.log("delete")
            },

            closeDeleteAccount: () => {
                setStore({ showDeleteAccount: false })
            },



            /* handleEditAccount: (e) => {
                 const { user } = getStore();
                 fetch("http://localhost:5000/login", {
                     headers: {
                         "Content-Type": "application/json"
                     },
                     method: "PUT",
                     body: JSON.stringify(user),
                 })
                     .then(res => res.json())
                     .then(data => {
                         setStore({
                             user: data
                         })
                         console.log(data)
                     })
                     .catch(error => console.log(error));
             },*/

             handleChangeRegister: (e, prop) => {
                const { user } = getStore();
                let newuser = {...user};
                newuser[prop] = e.target.value;
                setStore = ({ user: newuser });
                console.log(getStore().user);
                
            },


           /* DeleteRegister: () => {
                console.log("eliminar");
                setStore({
                    user: {
                        name: "",
                        lastname: "",
                        username: "",
                        email: "",
                        password: ""
                    }});
                fetch("http://localhost:5000/users/", {
                    method: "DELETE",
                    headers: { 
                        "Content-Type" : "application/json",
                    }
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
        
            }*/









        },
    };
};
export default getState;
