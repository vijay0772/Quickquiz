import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: 'url("https://wallpapercave.com/wp/wp10480933.jpg") no-repeat center center fixed', // Make sure to replace this with your actual image URL
      backgroundSize: 'cover'
    }}>
<h1 style={{
  color: 'black', 
  fontSize: '3rem', 
  fontWeight: 'bold', 
  textAlign: 'center', 
  marginBottom: '1rem',
  textShadow: '2px 2px 4px #000000' // Black shadow with slight offset
}}>Welcome to QuickQuiz</h1>     
 <Separator />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%' }}>
        <div style={{ position: 'relative', width: '25%', height: '40%', marginBottom: '2rem' }}>
          <Image
            src={"/logo.png"}
            alt="QuickQuiz banner image"
            priority
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <QuizSettings />
      </div>
    </main>
  );
}
