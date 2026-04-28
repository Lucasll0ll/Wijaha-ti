import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Card from "../components/Card";
import Section from "../components/Section";
import { CATEGORIES_DATA } from "../constants/category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategorySection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("المتصفح لا يدعم تحديد الموقع"));
      }
      // وضعنا مهلة زمنية 5 ثوانٍ حتى لا يظل المستخدم عالقاً إذا لم يستجب المتصفح
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 5000,
      });
    });
  };

  const getPlacesFromDB = async (categoryId) => {
    setLoading(true);

    let userLat = null;
    let userLng = null;

    try {
      const position = await getUserLocation();
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;
      console.log("تم تحديد موقع المستخدم بنجاح");
    } catch (err) {
      console.warn(
        "فشل الحصول على الموقع، سيتم عرض النتائج الافتراضية:",
        err.message,
      );
    }

    try {
      console.log("جلب البيانات من Supabase...");

      const { data, error } = await supabase.rpc(
        "get_closest_places_by_category",
        {
          category_id: parseInt(categoryId),
          user_lat: userLat,
          user_lng: userLng,
        },
      );

      if (error) throw error;
      setPlaces(data || []);
    } catch (err) {
      console.error("خطأ في جلب البيانات:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getPlacesFromDB(id);
  }, [id]);

  if (!id) {
    return (
      <Section id="Category" title="التصنيفات">
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES_DATA.map((item) => (
            <Card
              key={item.id}
              para={item.label}
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <FontAwesomeIcon icon={item.iconName} size="2x" />
            </Card>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <div className="w-[90%] mx-auto py-20 text-right" dir="rtl">
      <h2 className="text-3xl font-bold mb-8">قائمة النتائج</h2>

      {loading && (
        <p className="text-center text-xl">جاري البحث في قاعدة البيانات...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!loading &&
          places.map((place) => (
            <div
              key={place.id}
              className="p-6 bg-primary/50 shadow-xl rounded-2xl border-t-4 border-secondary/45 "
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {place.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {place.description}
              </p>
              <div className="text-md text-blue-700 font-semibold space-y-2">
                <a href={place.address} target="_blank" rel="noreferrer">
                  {" "}
                  الموقع: اضغط هنا
                </a>
                {place.phone && <p> التواصل: {place.phone}</p>}
              </div>
            </div>
          ))}
      </div>

      {!loading && places.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">
            لا توجد بيانات مسجلة لهذا القسم حالياً.
          </p>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-12 block mx-auto px-8 py-3 bg-primary/50 text-white rounded-full hover:bg-gray-700 transition-all"
      >
        العودة للتصنيفات
      </button>
    </div>
  );
};

export default CategorySection;
