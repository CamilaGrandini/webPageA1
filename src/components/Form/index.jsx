import React from "react";

import './style.css'


class Form extends React.Component {

    render() {
        return (
            <main className="form-component">
                <h1>Subscribe</h1>
                <div className='subscribe-form'>
                    <form action="" className='form'>
                        <div className="column">
                            <input type="text" name="" id="" placeholder='full name' />
                            <input type="date" name="" id="" placeholder='birthday' />
                        </div>
                        <div className="column">
                            <input type="email" name="" id="" placeholder='e-mail' />
                            <input type="password" name="" id="" placeholder='password' />
                            <input type="password" name="" id="" placeholder='repeat password' />
                        </div>
                    </form>
                    <button type='submit'>Subscribe</button>
                </div>
            </main>
        )
    }
}

export default Form