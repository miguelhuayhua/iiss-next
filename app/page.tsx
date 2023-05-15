import Link from "next/link";
import "./index.scss";
import CustomCard from "./components/card";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
export default function Home() {
  return (
    <>
      <main className="container-fluid position-relative">
        <img src="./assets/logo-gamea.png" className="logo" alt="" />
        <div className="row">
          <div className="col-2 offset-10">
            <Link href="/login" className="btn custom-btn w-100">
              Ingresar
            </Link>
          </div>
          <div className="col-12">
            <div className="bienvenida">
              <h3>Bienvenido al Portal de registro de datos</h3>
              <p>Comience por donde usted necesita, haga click en empezar.</p>
            </div>
          </div>
          <div className="col-12">
            <Link className="btn btn-empezar" href="/registrar">
              Empezar a llenar mis datos
            </Link>
          </div>
          <div className="col-12">
            <div className="row mt-5">
              <div className="col-3">
                <CustomCard></CustomCard>
              </div>

              <div className="col-3">
                <CustomCard></CustomCard>
              </div>

              <div className="col-3">
                <CustomCard></CustomCard>
              </div>

              <div className="col-3">
                <CustomCard></CustomCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
