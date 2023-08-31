import Head from "next/head";
import {NavBar} from "../components/NavBar"
import { Header } from "@/sections/Header";
import { MapAndFilter } from "@/sections/MapAndFilter";
export default function Home() {
  return (
    <>
      <Head><link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' /></Head>
      <NavBar />
      <Header />
      <MapAndFilter/>
    </>
  )
}
