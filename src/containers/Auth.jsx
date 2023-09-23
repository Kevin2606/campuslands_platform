import { useSearchParams } from "react-router-dom";
import { postAuth } from "../services/AuthService.js"

export const Auth = () => {
  const [ searchParams ] = useSearchParams();
  const result = postAuth(searchParams.get("code"));
  console.log(result); //Promise { <pending> }
  //TODO: Guardar el resultado en el localstorage, y redirigir a la home - Auth ProtectedRoute
  return (
    <>
      <h1>Auth</h1>
    </>
  )
}
