import { LandingPage } from "../components/home/landingPage/LandingPage"
import { HomePage } from "../components/home/homePage/HomePage"

export const Home = () => {
  const validate = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (user) ? <HomePage /> : <LandingPage />
  }
  return (
    <>
    {
      validate()
    }
    </>
  )
}
