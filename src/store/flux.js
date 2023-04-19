const getState = ({ setStore, getActions, getStore }) => {

    return {
        store: {
            user: {
                name: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                picture:""
            },
            service: {
                user_id:"",
                title: "",
                price: "",
                mobile_number:"",
                category: "",
                availability: "",
                adress: "",
                service_description: "",

            },
            token: "",
            myAccount: {
                id: ""
            },
            showEditAccount: false,
            showChangePassword: false,
            showDeleteAccount: false,
            showChangeImageProfile: false,
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
                        [name]: value,
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
                    .then(data => {
                        alert("Usuario Creado Satisfactoriamente");
                        setStore({
                            user: {
                                name: "",
                                lastname: "",
                                username: "",
                                email: "",
                                password: ""
                            },
                        });
                        console.log(data);
                    })
                    .catch(error => {
                        alert("Ocurrio un error al registrar al Usuario" + error.message);
                        console.log(error)
                    });
            },
            handleUserLogin: (e) => {
                const { user, token, myAccount } = getStore();
                fetch("http://localhost:5000/users/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then((data) => {
                        setStore({
                            token: data.token,
                            myAccount: {
                                ...myAccount,
                                id: data.id
                            }
                        })
                        console.log(data)
                        console.log(getStore());
                    })
                    .catch(error => console.log(error));
                setStore({
                    user: {
                        username: "",
                        password: ""
                    },
                });
            },
            handleService: (e) => {
                let { service, myAccount } = getStore();
                const {
                    target: { value, name },
                } = e;
                setStore({
                    service: {
                        ...service,
                        [name]: value,
                        user_id:myAccount.id,
                    },
                });
            },
            handleServiceCreation: (e) => {
                e.preventDefault();
                const { service, myAccount } = getStore();
                console.log(service)
                fetch("http://localhost:5000/services", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(service),
                })
                    .then(res => res.json())
                    .then(data => {
                        alert("Servicio Creado Satisfactoriamente ");
                        setStore({
                            service: {
                                user_id:"",
                                title: "",
                                price: "",
                                mobile_number: "",
                                category: "",
                                availability: "",
                                adress: "",
                                service_description: "",


                            },
                            myAccount: {
                                ...myAccount, 
                                id: data.id 
                             }
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

            getServicios: (id) => {


                fetch("http://localhost:5000/services/" + id, {
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

            openChangeImageProfile: () => {
                setStore({ showChangeImageProfile: true });
                console.log("changeImageProfile")
            },

            closeChangeImageProfile: () => {
                setStore({ showChangeImageProfile: false });
            },

            openDeleteAccount: () => {
                setStore({ showDeleteAccount: true });
                console.log("delete")
            },

            closeDeleteAccount: () => {
                setStore({ showDeleteAccount: false })
            },

            cerrarSesion: (navigate) => {
                setStore({user: {
                    name: "",
                    lastname: "",
                    username: "",
                    email: "",
                    password: ""
                }, 
                token: "",
            
            })
            navigate("/")
            },


            handleChangeName: (e) => {
                const { user } = getStore();
                user.name = e.target.value;
                console.log(user);
                setStore = ({ user: user });

            },

            handleChangeUsername: (e) => {
                e.preventDefault();
                const { user } = getStore();
                user.username = e.target.value;
                console.log(user);
                setStore = ({ user: user });

            },

            handleChangeEmail: (e) => {
                e.preventDefault();
                const { user } = getStore();
                user.email = e.target.value;
                console.log(user);
                setStore = ({ user: user });

            },

            handleChangePassword: (e) => {
                const { user } = getStore();
                user.password = e.target.value;
                console.log(user);
                setStore = ({ user: user });

            },

            handleEditAccount: (e) => {
                e.preventDefault();
                console.log("handleEditAccount");
                const { user, myAccount } = getStore();
                console.log(myAccount);
                fetch("http://localhost:5000/actualizar_user/"+ myAccount.id, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "PUT",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => console.log(error));
            },

            handleEditPassword: () => {
                const { user, myAccount } = getStore();
                let contraseña = user.password
                fetch("http://localhost:5000/actualizar_password/" + myAccount.id, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "PUT",
                    body: JSON.stringify({ contraseña: contraseña }),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => console.log(error));
            },

            DeleteRegister: () => {
                const { myAccount } = getStore();
                fetch("http://localhost:5000/user/" + myAccount.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error));

            },

        },
    }
}

export default getState;
