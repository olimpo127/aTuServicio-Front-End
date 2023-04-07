import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState } from 'react'  

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
                                mobileNumber:"",
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

        AddMaps:()=>{
                const center = { lat:-33.430901, lng: -70.636805 }
                const { isLoaded } = useJsApiLoader({
                    MapsApiKey: "AIzaSyCo2rtCGoBUJggotk150GkgqtZ-aBz_Scs&libraries=places"
                  
                  })

                  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
                  const [directionsResponse, setDirectionsResponse] = useState(null)
                  const [distance, setDistance] = useState('')
                  const [duration, setDuration] = useState('')   
                  
                  /** @type React.MutableRefObject<HTMLInputElement> */
                  const originRef = useRef()
                  /** @type React.MutableRefObject<HTMLInputElement> */
                  const destiantionRef = useRef()
  
                  if (!isLoaded) {
                    return 
                      }
                      async function calculateRoute() {
                        if (originRef.current.value === '' || destiantionRef.current.value === '') {
                          return
                        }
                        // eslint-disable-next-line no-undef
                        const directionsService = new window.google.maps.DirectionsService()
                        const results = await directionsService.route({
                          origin: originRef.current.value,
                          destination: destiantionRef.current.value,
                          // eslint-disable-next-line no-undef
                          travelMode: window.google.maps.TravelMode.DRIVING,
                        })
                        setDirectionsResponse(results)
                        setDistance(results.routes[0].legs[0].distance.text)
                        setDuration(results.routes[0].legs[0].duration.text)
                      }
                      function clearRoute() {
                        setDirectionsResponse(null)
                        setDistance('')
                        setDuration('')
                        originRef.current.value = ''
                        destiantionRef.current.value = ''
                      }






            }

            

                
        },
    };
};
export default getState;
