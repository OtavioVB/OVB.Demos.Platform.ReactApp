import { Fragment } from 'react';
import InputModel from '../../forms/InputModel';
import SubmitModel from '../../forms/submitModel';
import './createaccountmain.css';

export default function CreateAccoutMain(){
    document.getElementById("createaccount-submit").addEventListener('onclick', () => {
        return console.log("conta criada com sucesso!");
    });
    return (
        <Fragment>
            <main class="createaccount-main">
                <h1>Criar conta</h1>
                <InputModel class="form-input-model-high" label="Nome de Usuário" placeholder="otavioexemplo" id="username" inputType="text"></InputModel>
                <InputModel class="form-input-model" label="Nome" placeholder="Otávio" id="name" inputType="text"></InputModel>
                <InputModel class="form-input-model" label="Sobrenome" placeholder="Silva da Costa" id="name" inputType="text"></InputModel>
                <InputModel class="form-input-model" label="Email" placeholder="suporte@platform.com.br" id="email" inputType="email"></InputModel>
                <InputModel class="form-input-model" label="Senha" placeholder="********" id="password" inputType="password"></InputModel>
                <InputModel class="form-input-model" label="Confirme sua senha" placeholder="********" id="confirmPassword" inputType="password"></InputModel>
                <SubmitModel id="createaccount-submit" text="Criar Conta"></SubmitModel>
            </main>
        </Fragment>
    );
};
