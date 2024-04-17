import React, { Fragment, useState } from 'react'
import s from '../css/connexion.module.css'
import { Link } from 'react-router-dom';

export default function Connexion() {



    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`  email : ${inputs.email} ; mot de passe : ${inputs.mot_de_passe} ; `)
    }




    return (
        <Fragment>
            <div className={`${s.connexion}`}>
                <div className={`${s.gauche}`}>
                    <div className={s.sary} >
                        <img className="w-50" src={`./image/misera.png`} alt="vary" />
                    </div>
                    <div className={`${s.textkely}`}>
                        <h3>Bienvenue dans l'univers <span>Mi-sera !</span> Le shopping en ligne redéfini, avec style et diversité. vendez et acheter des objets et surtout publier vos ventes </h3>
                    </div>
                </div>
                <div className={`${s.droite}`}>
                <h2>CONNEXION </h2>
                    <p>connecter vous en toutes assurances</p>

                    <form className="was-validated" onSubmit={handleSubmit}>
                        <div className="  mb-3 mt-3" >
                            <input type="email" className="form-control" id="emailC" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} required />
                            <div className="valid-feedback">bien.</div>
                            <div className="invalid-feedback"> veuillez remplir ce champs</div>
                        </div>
                        <div className=" col mb-3 mt-3" >
                            <input type="password" className="form-control" id="passC" placeholder="Entrer votre mot de passe " name="mot de passe" value={inputs.mot_de_passe} onChange={handleChange} required />
                            <div className="valid-feedback">bien.</div>
                            <div className="invalid-feedback"> veuillez remplir ce champs</div>
                        </div>

                        <div className={`${s.btnconnexion}`}>
                            <button type="submit" className={`${s.btnconnecter} btn btn-primary`}>se connecter</button>
                        </div>


                        <div className={`${s.manana} mt-3 d-flex gap-2`}>
                            <p>vous n'avez pas de compte?</p>
                            <Link className="" to="/inscription">creer un compte</Link>
                            {/* <a href="/inscription" > creer un compte</a> */}
                        </div>
                    </form>

                </div>
            </div>
        </Fragment>
    )
}
