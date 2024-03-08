import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, settoDos] = useState([]);
	// function (e) {
	// 	// if (e.key === "Enter") {
	// 	}
	// //}
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
				<li>{item}<i className="fas fa-times" 
				onClick={() => settoDos(toDos.filter((t, currentIndex) => index != currentIndex))}  > </i></li>))}
			</ul>
		<div> {toDos.length} item left</div>
		</div>
	);
};

export default Home;
