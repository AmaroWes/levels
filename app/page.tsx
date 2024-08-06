import LoginForm from "./components/loginForm";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        <LoginForm />
      </div>
    </main>
  );
}
