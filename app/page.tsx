import Head from "next/head";
import {NavBar} from "../components/NavBar"
import { Header } from "@/sections/Header";
import { MapAndFilter } from "@/sections/MapAndFilter";
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <MapAndFilter/>
    </>
  )
}
