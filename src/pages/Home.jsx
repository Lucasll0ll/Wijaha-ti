import "../App.css";
import About from "../components/About";
import Section from "../components/Section";
import "../constants/fontawesome";
import CategorySection from "./CategorySection";


function Home() {
  return (
    <>
      <Section
        title="مرحباً"
        para="عزيزتي من تسعى لستر نفسها يسرنا و يشرفنا انك يا فتاة الايمان سعيك هذا و نعدك انه بإذن الله عز وجل سنسعى لتوفير كافة المعلومات و الاماكن التي تحتاجينها في مسيرتك"
      />
   <CategorySection/>
      <About />
    </>
  );
}
export default Home;
