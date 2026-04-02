import "../constants/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div
      id="Tell"
      className=" text-2xl w-[90%] mx-auto font-Playpen bg-gray-500/20 p-8 my-0 rounded-2xl "
    >
      <div className="text-center p-1 m-1 text-black/70">
        <h1 className="mb-4 text-2xl font-bold">اتصل بنا</h1>
        <ul className="text-black/70 flex gap-4 justify-center">
          <a href="https://www.linkedin.com/in/abdulrhman-mohsen-7b79ba319/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/Lucasll0ll/Wijaha-ti" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="mailto:wijhatiiii@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </ul>
        <div className="text-[10px]">
          <p>Copyright &copy; {new Date().getFullYear()} AOM team .</p>
          <p>Released under GPLv3 Licene.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
