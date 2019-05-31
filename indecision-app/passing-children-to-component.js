import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => {
    return(
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
}

ReactDOM.render((
    <Layout>
    <div>
        <div>Title</div>
        <p>This is my page</p>
    </div>
    </Layout>
), document.getElementById('app'))