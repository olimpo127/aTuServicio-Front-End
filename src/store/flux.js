

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
            post:{
                title:"",
                price:"",
                category:{},
                availability:{},
                city:"",
                region:{},
                comuna:"",
                description:"",
                image:""
            
            
            },
            
        },
      actions: {
      /*  handleUserRegister: (e) => {
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
      },*/
      }, 
    };
  };
  export default getState;
  