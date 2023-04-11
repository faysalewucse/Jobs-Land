import vector2 from "../assets/Vector-2.png";

export default function BottomNavbar({ text }) {
  return (
    <header className="relative bg-indigo-50 text-center p-20 font-bold text-4xl">
      <img className="w-72 bottom-0 left-0 absolute" src={vector2} alt="" />
      {text}
    </header>
  );
}
