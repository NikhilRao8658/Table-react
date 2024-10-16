

import React, { Component } from "react";
export default class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thead: [],
            tbody: []


        }
    }

    componentDidMount() {
        let api = fetch("https://jsonplaceholder.typicode.com/users")
        api.then((x) => x.json()).then((data) => {
            this.setState({ thead: Object.keys(data[0]).slice(0, 5) });
            this.setState({ tbody: data })
        })
    }

    render() {
        // console.log(this.state.products);

        return (
            <>
                <div id="div1"><h2 id="head1">EMPLOYEE DATA</h2></div>
                <div id="tbl-al">
                    <table border={"2px"} id="tblM" className="styled-table">
                        <thead>
                            <tr>
                                {this.state.thead.map((x, ind) => <th key={ind}>{x}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tbody.slice(0, 5).map((y) => {
                                return (
                                    <tr key={y.id}>
                                        <td>{y.id}</td>
                                        <td>{y.name}</td>
                                        <td>{y.username}</td>
                                        <td>{y.email}</td>
                                        <td>{y.address.city}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </>
        )

    }
}