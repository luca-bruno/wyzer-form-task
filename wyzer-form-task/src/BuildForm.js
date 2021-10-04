import React, { useState, useEffect, PropsRoute } from 'react'
import { Formio } from '@formio/react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function BuildForm(props) {
    var savedSchema = false;
    var jsonSchema;
    var stringifiedJsonSchema;

    const [data, setData] = useState();
    const [saved, setSaved] = useState(false);

    const saveForm = () => {

        // console.log("JSONED" + jsonSchema)

        setData(jsonSchema);
        // console.log("locally-saved form JSON contents: " + data)
        // console.log("data: " + data)
        setSaved(true);

    };

    // Form builder
    Formio.builder(document.getElementById('builder'), {}, {
        builder: {
            basic: {
                title: 'Fields',
                weight: 0,
                default: true,
                components: {
                    // firstName: {
                    //     title: 'First Name',
                    //     key: 'firstName',
                    //     icon: 'terminal',
                    //     schema: {
                    //         label: 'First Name',
                    //         type: 'textfield',
                    //         key: 'firstName',
                    //         input: true
                    //     }
                    // },
                    checkbox: {
                        hidden: true
                    },
                    textarea: {
                        hidden: true
                    },
                    number: {
                        hidden: true
                    },
                    selectboxes: {
                        hidden: true
                    },
                    select: {
                        hidden: true
                    },
                    radio: {
                        hidden: true
                    },
                    button: {
                        hidden: true
                    }
                }
            },
            resource: false,
            advanced: false,
            layout: false,
            data: false,
            premium: false
        }
    }).then((form) => {
        form.on("change", (e) => {
            jsonSchema = form.schema;
            // console.log("SAVED SCHEMA IN THEN: " + savedSchema);
            stringifiedJsonSchema = JSON.stringify(form.schema);
            localStorage.setItem('localSave', stringifiedJsonSchema)
            console.log(localStorage.getItem('localSave'))



        });
    })

    return (
        <div>
            <div id="builder" ></div>
            <div className="custom-item">
            <button onClick={() => saveForm()} className="custom-btn">Save</button>
            </div>

            <BrowserRouter>
                {/* {saved ?
                    <Link to="/submit">Submit a saved form</Link>
                    : ""} */}

                <Switch>
                    {/* <Route exact path="/submit" render={(props) => <SubmitForm {...props} jsonData={data} />} /> */}
                </Switch>
            </BrowserRouter>
            <div id="formio" ></div>

        </div>
    )
}

export default BuildForm;