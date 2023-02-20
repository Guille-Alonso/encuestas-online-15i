import React, { useState } from 'react'
import "../components/encuestas/Questions.css"
import 'bootstrap/dist/css/bootstrap.css'


export default function encuestas() {
    const [formContent, setFormContent] = useState([]);
    const [onEdit, setOnEdit] = useState(false);
    const [textField, setTextField] = useState("");
    const [editedField, setEditedField] = useState("");

    const addQuestion = () => {
        const field = {
        "name": `question_${formContent.length}`,
        "label": "Untitled question",
        "question_type": "short_answer",
        "list": []
        }
        setFormContent([...formContent, field]);
    }

    const editField = (fieldName, fieldLabel) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1){
        formFields[fieldIndex].label = fieldLabel;
        setFormContent(formFields);
        }
    }

    const editFieldType = (fieldName, fieldLabel) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1){
        formFields[fieldIndex].question_type = fieldLabel;
        setFormContent(formFields);
        }
    }

    const addFieldOption =  (fieldName, option) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1){
        if (option && option != ""){
            formFields[fieldIndex].list.push(option);
            setFormContent(formFields);
            setTextField("");
        }
    }
    }

    return (
    <div className='container mx-auto px-4 h-screen'>
            <div className="question_form">
                <br />
                <div className="section">
                    <div className="question_title_section">
                        <div className="quetion_form_top">
                            <input type="text" className="question_form_name" style= {{color:"black"}} placeholder="Nombre del formulario"></input>
                            <input type="text" className="question_form_desc" placeholder="Detalles"></input>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className='bg-white shadow-lg rounded-md p-5 my-10'>
        {
            formContent.map((field) => {
            return (
                <div>
                <div className='flex justify-between items-center space-y-2'>
                    <div key={field.name} className="block text-sm font-medium text-gray-700 capitalize">
                    {
                    onEdit && (editedField === field.name) ?
                    <input type="text" value={field.label} onChange={(e) => editField(field.name, e.target.value)} onBlur={() => {setOnEdit(false);setEditedField("")}} /> 
                    :
                    <label onClick={() => {setOnEdit(true); setEditedField(field.name)}}>{field.label}</label>
                    }
                    </div>
                    <div>
                        <select onChange={(e) => editFieldType(field.name, e.target.value)}>
                        <option value="short_answer">Pregunta corta</option>
                        <option value="paragraph">Parrafo</option>
                        <option value="multichoice">Multichoice</option>
                    </select>
                    </div>
                </div>

                <div className='my-4'>
                    {
                    field.question_type == 'short_answer' && <input type="text" className="px-5 shadow-sm h-10 rounded-md block w-full" placeholder={field.label} />
                    }
                    {
                    field.question_type == 'paragraph' && <textarea rows={4} className="px-5 shadow-sm h-10 rounded-md block w-full" placeholder={field.label} />
                    }
                    {field.question_type == 'multichoice' &&
                    <div className='my-4 flex flex-col space-y-2'>
                        <select
                        className='px-5 shadow-sm h-10 rounded-md block w-full'>
                        {field.list.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                        <div className='flex space-between'>
                        <input type="text" onChange={(e) => setTextField(e.target.value)} value={textField} placeholder="Add an option" className='flex-1' />
                        <button className='bg-indigo-700 block hover:bg-indigo-900 text-white px-4' onClick={() => addFieldOption(field.name, textField) }>Add</button>
                        </div>
                    </div>
                    }
                </div>

                </div>
            )
            })
        }

        <div className='relative w-full p-5'>
            <div className='absolute inset-x-0 bottom-0 h-12 flex justify-center'>
            <button onClick={() => addQuestion()} className='inline-flex bg-gray-800 hover:bg-gray-700 items-center p-3 text-sm text-white rounded-md'>Add Question</button>
            </div>
            </div>
            </div>
        </div>
    )
}