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
        },
    };
};
export default getState;
