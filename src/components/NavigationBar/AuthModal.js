import React, { useState } from 'react'
import axios from 'axios'

const AuthModal = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [dobDay, setDobDay] = useState("")
  const [loginModal, setLoginModal] = useState(props.login)
  const [signupModal, setSignupModal] = useState(props.signup)
  // const [dobMonth, setDobMonth] = useState("")
  const [dobYear, setDobYear] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        username,
        password
      }
    })
      .then((res) => {
        console.log(res)
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          // window.location = '/'
        }
      })
      .catch((err) => console.log(err))
  }

  const handleSubmitSignup = (e) => {
    e.preventDefault()
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    if (password !== confirmPassword) {
      passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas"
    } else {
      axios({
        method: 'post', 
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        withCredentials: true,
        data: {
          username,
          email,
          password
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo
            emailError.innerHTML = res.data.errors.email
            passwordError.innerHTML = res.data.errors.password
          } else {
            setLoginModal(true)
            setSignupModal(false)
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      {loginModal && (
        <form className="form-auth" onSubmit={(e) => handleSubmitLogin(e)}>
          <div className="form-row">
            <label htmlFor="username">Identifiant</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="show-password">

            </div>
          </div>
          <div className="lost-password">
            <span>Mot de passe oublié ?</span>
          </div>
          <button type="submit" className={username && password ? "submit-btn" : "submit-btn off"}>Se connecter</button>
        </form>
      )}

      {signupModal && (
        <form className="form-auth" onSubmit={(e) => handleSubmitSignup(e)}>
          <div className="form-row">
            <label htmlFor="username">Identifiant</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <p className="pseudo error"></p>
          </div>
          <div className="form-row">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="password error"></p>
          </div>
          <div className="form-row">
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <p className="password-confirm error"></p>
          </div>
          <div className="form-row">
            <label htmlFor="dob-day">Date de naissance</label>
            <div className="form-inputs">
              <input className="dob-day" type="number" id="dob-day" name="dob-day" placeholder="Jour" value={dobDay} onChange={(e) => setDobDay(e.target.value)}/>
              <select className="dob-month" id="dob-month" name="dob-month">
                <option value="">Janvier</option>
                <option value="">Février</option>
                <option value="">Mars</option>
                <option value="">Avril</option>
                <option value="">Mai</option>
                <option value="">Juin</option>
                <option value="">Juillet</option>
                <option value="">Août</option>
                <option value="">Septembre</option>
                <option value="">Octobre</option>
                <option value="">Novembre</option>
                <option value="">Décembre</option>
              </select>
              <input className="dob-year" type="number" id="dob-year" name="dob-year" placeholder="Année" value={dobYear} onChange={setDobYear}/>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="email error"></p>
          </div>
          <div className="cgu">
            <p>En cliquant sur S'inscrire, vous reconnaissez avoir lu et approuvé les Conditions d’utilisation et la Politique de confidentialité.</p>
          </div>
          <button type="submit" className={username && password ? "submit-btn" : "submit-btn off"}>S'inscrire</button>
        </form>
      )}
    </>
  )
}

export default AuthModal
