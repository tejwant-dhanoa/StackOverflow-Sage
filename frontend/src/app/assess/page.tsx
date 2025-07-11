import { QuestionForm } from "@/components/question-form";
import { ParticlesBackground } from "@/components/particles-background";

export default function AssessPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden pt-24 sm:pt-32">
      <ParticlesBackground />
      <div className="z-10 w-full flex flex-col items-center justify-center gap-8">
        <QuestionForm />
      </div>
    </main>
  );
}
