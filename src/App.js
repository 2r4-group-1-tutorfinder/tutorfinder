import { auth } from '../src/components/config/firebase';
import './App.css';
import AppRoute from "./routes/AppRoute"

console.log(auth?.currentUser?.email);
export default function App() {
  return (
    <>
      <AppRoute />
    </>
  )
}