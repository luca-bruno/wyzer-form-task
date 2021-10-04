import React, { useState, useEffect, PropsRoute } from 'react'
import { Formio } from '@formio/react';
import './App.css';

function BuildForm() {

    var stringifiedJsonSchema;

    const [saved, setSaved] = useState(false);

    // Save button trigger method
    const saveForm = () => {
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
                    // multivalue custom component for Address
                    address: {
                        title: 'Address',
                        key: 'address',
                        icon: 'home',
                        schema: {
                            label: 'Address',
                            type: 'textfield',
                            "multiple": true,
                            "defaultValue": [
                                "House Number/Name",
                                "Street",
                                "Locality",
                                "ZIP Code",
                                "Country"
                            ],
                            key: 'address',
                            input: true
                        },
                    },
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
            // stringifying in order to pass data through LocalStorage
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

            {saved ?
                <div>
                    <p className="custom-item">To submit your newly-created form, use the 'Submit a saved form' found in the navigation bar.</p>
                    <p className="custom-item">Forms are retained until browser window is closed.</p>
                </div>
                : ""
            }

        </div>
    )
}

export default BuildForm;