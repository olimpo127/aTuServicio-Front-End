import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const ImageService = () => {
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
    const [inputFiles, setInputFiles] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", inputFiles[0]);

        fetch(
            "http://localhost:5000/services/image/1",
            {
                method: "POST",
                body: formData,
            }
        )
            .then((res) => res.json())
            .then((data) => {
                alert ("image service upload success");
                setImagePreview()
                console.log(data)
            })
            .catch((error) => console.log(error));
    };
    const handleChange = (e) => {
        setInputFiles(e.target.files);
    };
    const upload = <FontAwesomeIcon icon={faUpload} />
    return (
        <div className="input-group m-3 m-auto"  style={{ maxWidth: "700px" }}>
            <form onSubmit={handleSubmit}>
                <div class="input-group">
      <input type="file" class="form-control" id="imageservice" name="imageservice" onChange ={e=>{handleChange(e); changeImage(e);}} accept = "image/png, image/jpeg"/>
      <button class="btn btn-secondary" type="submit" id="inputGroupFileAddon04">Upload {upload} </button>
      </div>
      <div className="text-center">
          <img src={ImagePreview} alt="" style={{ maxWidth: "150px" }} />
      </div>
            </form>
        </div>
    );
}


export default ImageService
