import SimpleChat from "@/components/SimpleChat";
import UserAction from "@/components/molecules/UserAction";
import Result from "@/components/organisms/Result";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{height: '100%', width: '100%', backgroundColor: "blue"}}>
      <SimpleChat></SimpleChat>
    </main>
  );
}
