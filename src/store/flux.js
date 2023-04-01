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
            post: {
                title: "",
                price: "",
                category: {},
                availability: {},
                city: "",
                region: {},
                comuna: "",
                description: "",
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
            handleUserRegister: (e) => {
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
                let { post } = getStore();

                const {
                    target: { value, name },
                } = e;
                setStore({
                    post: {
                        ...post,
                        [name]: value
                    },
                });
            },
            handleServiceCreation: (e) => {
                const { post } = getStore();
                fetch("http://localhost:5000/services", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(post),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    post: {
                        title: "",
                        price: "",
                        category: {},
                        availability: {},
                        city: "",
                        region: {},
                        comuna: "",
                        description: "",
                        image: ""
        
        
                    },
                    


                    addApi:(e) => {
                       const {appi} =getStore();
                    fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCo2rtCGoBUJggotk150GkgqtZ-aBz_Scs',{

                    headers: {
                        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
                         },
                    method :"GET",
                    body: JSON.stringify(appi),
                })
                    .then(response => response.json())
                    .then(response => console.log(response))
                    .catch(err => console.error(err));
                       

                    }
                });
            },
        },
    };
};
export default getState;
