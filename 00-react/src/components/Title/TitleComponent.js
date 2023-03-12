import "./Title.css";

export const TitleComponent = (props) => {
    console.log(props);
    return(
        <div className="greetingProps_container">
            <h1 className="greetingProps_title"> {props.greeting} </h1> 
        </div>
       
    );
}