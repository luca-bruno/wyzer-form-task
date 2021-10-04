import React from 'react'
import { Formio } from '@formio/react';

function SubmitForm() {
    
    // parsing stringified JSON data stored in LocalStorage
    let parsedJsonSchema = JSON.parse(localStorage.getItem('localSave'))

    // Form renderer
    Formio.createForm(document.getElementById('formio'),

        parsedJsonSchema

    ).then(function (form) {
        form.on('submit', function (submission) {
            console.log('Submission was made!', submission);
        });
    })


    return (
        <div>
            <div id="formio" ></div>
        </div>
    );
}

export default SubmitForm;
