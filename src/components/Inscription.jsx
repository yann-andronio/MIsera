import React, { Fragment, useState } from 'react'
import s from "../css/inscription.module.css"
import { Link } from 'react-router-dom';







export const Inscription = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nom : ${inputs.Nom} ; Prenom : ${inputs.Prenom} ; email : ${inputs.email} ; mot de passe : ${inputs.mot_de_passe} ; `)
    }



    return (
        <Fragment>
            <div className={s.Inscription}>

                <div className={s.gauche}>
                    <div className={s.sary} >
                        <img className="w-50" src={`./image/misera.png`} alt="vary" />
                    </div>
                    <div className={`${s.textkely}`}>
                        <h3>Creer votre compte facilement avec <span>Mi-sera</span> et beneficie de ces sercices de vente </h3>
                    </div>


                </div>
                <div className={s.droite} >
                    <h2>Créer un compte </h2>
                    <p>rapide et securisé</p>


                    <form className="was-validated" onSubmit={handleSubmit}>
                        <div className="row">

                            <div className=" col mb-3 mt-3">
                                <input type="text" className="form-control" id="Nom" placeholder="Nom" name="Nom" value={inputs.Nom} onChange={handleChange} required />
                                <div className="valid-feedback">bien.</div>
                                <div className="invalid-feedback"> veuillez remplir ce champs </div>
                            </div>

                            <div className=" col mb-3 mt-3">
                                <input type="text" className="form-control" id="Prenom" placeholder="Prenom" name="Prenom" value={inputs.Prenom} onChange={handleChange} required />
                                <div className="valid-feedback">bien.</div>
                                <div className="invalid-feedback"> veuillez remplir ce champs</div>
                            </div>
                        </div>
                        <div className="  mb-3 mt-3" >
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} required />
                            <div className="valid-feedback">bien.</div>
                            <div className="invalid-feedback"> veuillez remplir ce champs</div>
                        </div>
                        <div className=" col mb-3 mt-3" >
                            <input type="password" className="form-control" id="pass" placeholder="Entrer votre mot de passe " name="mot de passe" value={inputs.mot_de_passe} onChange={handleChange} required />
                            <div className="valid-feedback">bien.</div>
                            <div className="invalid-feedback"> veuillez remplir ce champs</div>
                        </div>


                        <button type="submit" className={`${s.btninscrit} btn btn-primary`}>s'inscrire</button>

                        <div className={`${s.manana} mt-3 d-flex gap-2`}>
                            <p>vouz possédez déjà un compte?</p>
                            <Link className="" to="/">identifiez vous</Link>
                            {/* <a href='/' > identifiez vous</a> */}
                        </div>


                    </form>

                </div>
            </div>





            {/* <div className={s.naissance}>
                <label for="validationServer04" className="form-label">Date de naissance</label>
                <div className="row">
                    <div className="col-md-3">

                        <select className="form-select " required="">

                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>

                        </select>

                    </div>
                    <div className="col-md-3">

                        <select className="form-select " id="validationServer04" required="">

                        </select>

                    </div>
                    <div className="col-md-3">

                        <select className="form-select" id="validationServer04" required="">

                            <option></option>
                        </select>

                    </div>
                </div>


            </div>

            <div className={s.genre}>
                <label for="" className="">genre</label>
                <div className="row">
                    <div className="form-check col-md-2 ">
                        <label className="form-check-label" for="radio1"></label>
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="Homme" checked />Homme

                    </div>
                    <div className="form-check col-md-2">
                        <label className="form-check-label" for="radio2"></label>
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />Femme
                    </div>

                </div>


            </div> */}







        </Fragment>
    )
}
