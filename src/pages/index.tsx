import Header from "@/components/header/Header";
import Input from "@/components/input/Input";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Header/>
      <Input/>
    </main>
  )
}
