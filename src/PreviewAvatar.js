import {useState,useEffect} from 'react'

function PreviewAvatar(){
    const [avatar,setAvatar] = useState();

    const handleAvatar = (e) => {
        const file = e.target.files[0];

        //file la mot obj nen ta co the them thuoc tinh preview
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])

    return (

        <div>
            <input type='file' onChange={handleAvatar}></input>
            {avatar && 
			    <img src={avatar.preview} alt="" width="80%"/>
            }
        </div>
    )
}

export default PreviewAvatar;