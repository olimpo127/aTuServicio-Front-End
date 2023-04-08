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
                category: "",
                availability: "",
                adress: "",
                service_description: "",
                image: ""
            },
            token: ""

           /* myAccount: {},

            showEditAccount: false,
            showChangePassword: false,
        showDeleteAccount: false,*/




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
                const { user, token } = getStore();
                fetch("http://localhost:5000/users/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then((data) => {
                        setStore({ token: data.token })
                        console.log(data)
                        console.log(token)
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
                    .then(data => {
                        alert("Servicio Creado Satisfactoriamente ");
                        setStore({
                            service: {
                                title: "",
                                price: "",
                                mobileNumber: "",
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




        },
    };
};
export default getState;
