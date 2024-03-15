import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const styles = {
		xIcon: {
			float: "right",
			color: "red",
		},
	  };
	const [inputValue, setInputValue] = useState("");
	const [toDos, settoDos] = useState([]);
	const [account, setAccount] = useState(false);

	  function createUser() {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/marta992",{
			method:'POST',
			body:JSON.stringify([]),
			headers: {'Content-Type': 'application/json'}
		})
		.then((response)=> response.json())
		.then((data)=> console.log(data))
		.catch((error)=> console.log("error"))
	};

		function addList() {
			fetch('https://playground.4geeks.com/apis/fake/todos/user/marta992',{
            method:'GET',
        })
        .then((response) => {
            if(response.status === 404) {
            createUser()
            }
            return (response.json())
        })
        .then((data) => toDos(data))
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        addList();
    },[]);
		

		function updatetoDos() {
			fetch ('https://playground.4geeks.com/apis/fake/todos/user/marta992', {
				method: 'PUT',
				body:JSON.stringify(toDos),
				headers: { "Content-Type": "application/json"}
		})
		.then(response => {response.json()})
		.then(data => {console.log(data)})
		.catch(error => {console.log(error);})
	}

	useEffect(() => {
        updatetoDos();
    },[toDos]);




	 return (
		<div className="container">
	 		<h1> toDos</h1>
	 		<ul>
	 			<li> <input 
                     type="text" 
                     onChange={(e)=> setInputValue(e.target.value)}
                     value={inputValue}
                     onKeyDown={(e)=>{
                         if(e.key=== "Enter" ){
                         settoDos(toDos.concat(inputValue));
	 					setInputValue("")
                        }
                     }}

                     placeholder="What do you need to do?"/> </li>
					{toDos.map((item, index)=> (
	 			<li>{item}<i className="fas fa-times" style={styles.xIcon}
	 			onClick={() => settoDos(toDos.filter((t, currentIndex) => index != currentIndex))}  > </i></li>))}
	 		</ul>
	 	<div> {toDos.length} item left</div>
	 	</div>
	 );
};

export default Home;
