import {useState,useEffect} from 'react'

const tabs = ['posts','comments','albums','todos','photos','users']

function Content(){
    const [posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    const [showTop,setShowTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => 
                setPosts(posts)
            )
    },[type])


    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll',handleScroll);
        console.log("added...");
        //Cleanup Func
        return () => {
            window.removeEventListener('scroll',handleScroll);
            console.log("removed...");
        }
    },[])

    return (
        <div>
            {tabs.map((tab) => {
                return <button style={type === tab ? {color: "#fff", backgroundColor: "#333"} : {}}
                            onClick={() => setType(tab)}
                            key={tab}
                       > 
                            {tab}
                </button>
            })}
            <ul>
                    {posts.map((post) => {
                        return <li key={post.id} style={{listStyle: "none"}}>{post.title || post.name}</li>
                    }
                    )}
            </ul>

           {
            showTop &&  <button
                            style={{
                                position: "fixed",
                                right: "20px",
                                bottom: "20px"
                            }}
                        >
                            Go to top
                        </button>
           }
        </div>
    )
}

export default Content;

//userEffect(callback)
    //-1. Gọi callback mỗi khi component re-render
    //-2. Gọi callback sau khi component thêm element vào DOM
//userEffect(callback,[])
    //-1. Chỉ gọi callback một lần khi component mounted
//userEffect(callback,[deps]) 
    //-1 Chỉ gọi callback khi [deps] thay đổi


//==========
//-1. Callback luôn được gọi khi component mounted
//-2. Cleanup func luôn được gọi trước khi component unmounted
//-3. Cleanup func sẽ luôn được gọi trước khi callback được gọi (trừ lần đầu tiên)
