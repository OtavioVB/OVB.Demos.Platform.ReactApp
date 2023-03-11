import './inputmodel.css';

export default function InputModel(props){
    return (
        <div class={props.class}>
            <label class="form-input-model-label">{props.label}</label>
            <input class="form-input-model-input" type={props.inputType} placeholder={props.placeholder} id={props.id}></input>
        </div>
    );
}