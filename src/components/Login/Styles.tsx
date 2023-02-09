import styled from "styled-components"

export const Container = styled.div`
    height: 300px;
    width: 400px;
    background-color: #FFF;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin: 300px;
    padding: 0 40px;
    border-radius: 10px;

`

export const Title = styled.h1`
     font-size: 40px;
     color: #c700b0;     

`

export const Form = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

`

export const FormField = styled.input`
     width: 300px;
     height: 30px;
     border-radius: 20px;
     border: 1px solid lightgray;

     margin: 10px 0;

`

export const FormButton = styled.button`
     width: 300px;
     height: 30px;
     border: none;
     border-radius: 20px;

     background-color: #c700b0;
     color: #FFF;
     cursor: pointer;

     margin: 10px 0;

`