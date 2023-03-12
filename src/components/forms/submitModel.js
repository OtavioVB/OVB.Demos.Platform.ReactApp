import './submitModel.css';

export default function SubmitModel(props){
    return (
        <button class="form-submit-model" onClick={console.log("teste")} id={props.id + "-model"}>{props.text}</button>
    );
};