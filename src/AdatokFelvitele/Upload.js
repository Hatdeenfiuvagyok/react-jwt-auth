import axios from 'axios';
import React,{useState} from 'react'

    //192.168.1.67
    //172.16.0.102
const ipcim="172.16.0.102";

function FileUpload(props) {

    //alert(props.kepek_leiras)
    
  
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await axios.post(
                'http://localhost:8080/upload',
                formData
            );
            console.log(res);
   
            let bemenet={
                bevitel3:props.kepek_leiras,
                bevitel1:props.kepek,
                bevitel2:props.id
              }
          
              fetch('http://localhost:8080/adat_felvitel',{
                method: "POST",
                body: JSON.stringify(bemenet),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              }
                 
              )
              .then((response) => response.text())
              .then((szoveg) => {
          
              alert(szoveg)
          
          })
      

        } catch (ex) {
            console.log(ex);
        }
    };

        return (
            <div className="App">
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile}>Feltöltés</button>
            </div>
        );
}

export default FileUpload;