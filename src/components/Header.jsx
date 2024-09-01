import Logo from "../image/logo.png";
export default function Header() {
  return (
    <nav className="font-body flex justify-between items-center h-18 m-auto px-0 py-2 text-xl  border-b-2 border-zinc-400">
      <img className="max-w-11" src={Logo} alt="Logo" />
      <a href="/">ໜ້າແລກ</a>
    </nav>
  );
}
