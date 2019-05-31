const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<User name="Matheus Binotto" age={25}/>, document.getElementById('app'))