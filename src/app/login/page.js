"use client";
import axios from "axios";
import Close from "components/Icons/Close";
import EyeSVG from "components/Icons/Eye";
import EyeInvisibleSVG from "components/Icons/EyeInvisible";
import Spinner from "components/Icons/Spinner";
import WarnSVG from "components/Icons/Warn";
import isValidEmail from "hooks/useValidEmail";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(true);
  const [watchPass, setWatchPass] = useState(false);
  const [error, setError] = useState(null);
  const [send, setSend] = useState(false);
  const [redirect, setRedirect] = useState("Vamos");

  const Router = useRouter();
  const validateEmail = (email) => {
    const validate = isValidEmail(email);
    setValidEmail(validate);
  };
  const sendLogin = (e) => {
    e.preventDefault();
    const validateEmail = isValidEmail(email);
    email.length <= 3 ? setValidEmail(false) : setValidEmail(true);
    pass.length <= 4 ? setValidPass(false) : setValidPass(true);
    if (validateEmail && pass.length > 4) {
      setSend(true);
      const credentials = { email, password: pass };
      axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/auth/login",
        data: credentials,
        withCredentials: true,
      })
        .then(() => {
          setSend(false);
          setRedirect("Redireccionando...");
          setError(null);
          Router.push("/");
        })
        .catch((err) => {
          setError(err.response.data.response);
          setSend(false);
        });
    }
  };
  const emailSucces = validEmail ? null : "Correo no válido";
  const passSucces = validPass ? null : "Contraseña muy corta";
  const inputPass = watchPass ? "text" : "password";
  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={sendLogin} className={styles.form}>
          <h2
            className={`text-2xl font-semibold pl-2 pr-2 text-black text-center ${
              error !== null ? "mb-1" : "mb-5"
            }`}
          >
            Iniciar sesión
          </h2>
          <div
            className={`${styles.msgErrorLogin} ${
              error !== null ? "flex" : "hidden"
            }`}
          >
            <WarnSVG width={15} height={15} />
            <small className="ml-1">{error}</small>
          </div>
          <div className={styles.inputCont}>
            <p>Correo electrónico</p>
            <div
              className={`${styles.inputLogin} ${
                !validEmail ? styles.inputFailed : ""
              }`}
            >
              <input
                type="text"
                value={email}
                autoComplete="false"
                autoCapitalize="false"
                autoCorrect="false"
                placeholder="Escribe tu correo"
                className=" text-black"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              <button
                type="button"
                className={`${styles.buttonInput} ${
                  email.length === 0 ? "hidden" : ""
                }`}
                onClick={() => setEmail("")}
              >
                <Close size={13} fill="#000" />
              </button>
            </div>
            <div className={styles.msgError}>
              <p>{emailSucces}</p>
            </div>
          </div>
          <div className={styles.inputCont}>
            <p>Contraseña</p>
            <div
              className={`${styles.inputLogin} ${
                !validPass ? styles.inputFailed : ""
              }`}
            >
              <input
                type={inputPass}
                value={pass}
                autoComplete="false"
                autoCapitalize="false"
                autoCorrect="false"
                placeholder="Y aquí la contraseña"
                className="text-black"
                onChange={(e) => setPass(e.target.value)}
                onBlur={() => {
                  pass.length > 4 ? setValidPass(true) : setValidPass(false);
                }}
              />
              <button
                type="button"
                className={styles.buttonInput}
                onClick={() => setWatchPass(!watchPass)}
              >
                {watchPass ? (
                  <EyeSVG size={20} fill="#000" />
                ) : (
                  <EyeInvisibleSVG size={20} fill="#000" />
                )}
              </button>
            </div>
            <div className={styles.msgError}>
              <p>{passSucces}</p>
            </div>
          </div>
          <button
            className={`${styles.buttonSend} ${send ? styles.sendLogin : ""}`}
            disabled={send}
          >
            {!send ? (
              redirect
            ) : (
              <Spinner size={24} primaryFill={"#fff"} secondFill={"#fff"} />
            )}
          </button>
        </form>
      </div>
    </>
  );
}
