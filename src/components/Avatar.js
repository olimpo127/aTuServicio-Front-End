import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Avatar = () => {
    /*     const { store, actions } = useContext(Context); */
    const [ImagePreview, setImagePreview] = useState(null);
    const changeImage = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            e.preventDefault();
            setImagePreview(e.target.result)
            console.log(reader)
        };
        
    }
    const [file,setfile]= useState(null);
    const handleImage = (e) =>{
        setfile(e.target.files[0])
    };
    const handleUserImage = (e) => {
        e.preventDefault();
    console.log(e)
    const formData = new FormData();
    formData.append('file',file);

    for (var pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    fetch("http://localhost:5000/users/avatar/3", {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

const upload = <FontAwesomeIcon icon={faUpload} />
return (
    <form onSubmit={handleUserImage}>

        <div className="input-group m-3">
            <input
                type="file"
                className="form-control"
                accept="image/*"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                name="avatar"
                onChange={e => {
                    changeImage(e);
                    handleImage(e);
                }}

            />
            <button className="btn btn-secondary" type="submit" id="inputGroupFileAddon04">{upload} Upload</button>
        </div>
        <div className="text-center">
            <img src={ImagePreview} alt="" height="150px" width="150px" />
        </div>
    </form >

)

}

export default Avatar

