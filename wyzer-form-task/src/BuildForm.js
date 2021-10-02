import React, { Component, useState, useEffect } from 'react'
import { Formio, Form } from '@formio/react';

function BuildForm(props) {
    var saved = false;

    const saveForm = () => {
        console.log(saved);
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
    }).then(function (form) {
        form.on("change", function (e) {
            saved = form.schema;
            console.log(form.schema);
            console.log(saved);
            let jsonSchema = JSON.stringify(form.schema);
            console.log(jsonSchema);


            // Save JSON file dialog
            var blob = new Blob([jsonSchema], { type: 'text/plain' }),
            anchor = document.createElement('a');

            anchor.download = "hello.json";
            anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
            anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
            anchor.click();
        });
    })


    Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/example').then(function (form) {
        // Defaults are provided as follows.
        form.submission = {
            data: {
                firstName: 'Joe',
                lastName: 'Smith'
            }
        };

        form.on('submit', function (submission) {
            console.log('Submission was made!', submission);
        });
    })

    return (
        <div>
            <div id="builder" ></div>
            <button onClick={() => saveForm()}>Save</button>
            <div id="formio" ></div>
        </div>
    )
}

export default BuildForm