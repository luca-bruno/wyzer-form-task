import React from 'react'
import { Formio, Form } from '@formio/react';

function SubmitForm(props) {

    // let collectedData = props.jsonData;
    // console.log("COLLECTED DATA:" + collectedData)
let colData = JSON.parse(localStorage.getItem('localSave'))
    // console.log(collectedData)


    Formio.createForm(document.getElementById('formio'),

    colData
    // collectedData

    // {"components":[{"label":"Text Field","tableView":true,"key":"textField","type":"textfield","input":true},{"label":"Password","tableView":false,"key":"password","type":"password","input":true,"protected":true},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]}

    ).then(function (form) {
        // Defaults are provided as follows.
        // form.submission = {
        //     data: {
        //         firstName: 'Joe',
        //         lastName: 'Smith'
        //     }
        // };


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
