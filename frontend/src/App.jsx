import Students from "./Students";

export default function App() {
  return (
    <div className="flex flex-col h-full w-full mt-40 px-20">
      <h1 className="text-4xl text-center mb-10">Student Management System</h1>
      <Students />
    </div>
  );
}
