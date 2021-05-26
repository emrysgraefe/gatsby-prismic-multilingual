import * as React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Button from './Button'

const FormWrapper = styled.div`
  background: #eee;
  padding: 30px;
  border-radius: 5px;
`

const Form = styled.form`
  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
    padding: 15px 10px;
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
  }
`

const ContactForm = ({ title, content, buttonText, items, lang, redirect }) => {
  return (
    <FormWrapper>
      <RichText render={title.raw} />
      <RichText render={content.raw} />
      <Form 
        name={`contact-us-${lang}`}
        method="POST"
        data-netlify="true"
        action={redirect} >
          <input type="hidden" name="form-name" value={`contact-us-${lang}`} />
          {items.map((field, i) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={i}>
                  <label htmlFor={field.field_name.replace(' ', '')}>{field.label}</label>
                  <textarea 
                    required={field.required === 'Yes'}
                    name={field.field_name.replace(' ', '')}
                    type={field.field_type}
                    placeholder={field.placeholder}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <label htmlFor={field.field_name.replace(' ', '')}>{field.label}</label>
                  <input 
                    required={field.required === 'Yes'}
                    name={field.field_name.replace(' ', '')}
                    type={field.field_type}
                    placeholder={field.placeholder}
                  />
                </div>
              )
            }
          })}
        <Button type="submit" role="submit">{buttonText}</Button>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm