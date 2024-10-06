import "./App.css";
import fartak from "../public/Fartak_Homepage1.png";
import LogoFartak from "../public/LogoFartak.png";
import enamad from "../public/enamad.png";
import logo1 from "../public/logo1.jpeg";
import logo2 from "../public/logo2.jpeg";
import logo3 from "../public/logo3.jpeg";
import logo4 from "../public/logo4.jpeg";
import teacher from "../public/teacher.jpg";
import uni1 from "../public/uni1.jpeg";
import youtube from "../public/youtube.png";

function App() {
  return (
    <div>
      <header className="h-24 w-full  flex flex-col justify-end items-center">
        <div className="relative flex bg-slate-200 w-3/4  items-center ">
          <div className="absolute bottom-0 -right-8">
            <img src="https://placehold.co/60" alt="" />
          </div>
          <h1 className="mr-10 font-extrabold text-3xl text-purple1">فرتاک</h1>
          <ul className="flex justify-center flex-1 items-center gap-x-8 h-full ">
            <li>خانه</li>
            <li>خدمات ما</li>
            <li>درباره ما</li>
            <li className="border  border-b-purple1 border-b-4 ">مقالات</li>
            <li>تماس با ما</li>
          </ul>
          <div className="flex items-center h-full">
            <div className="text-2xl mx-2 ">
              <i className="bi bi-whatsapp  h-full"></i>
            </div>
            <div className="flex gap-2 p-2 bg-purple3 text-white">
              <i className="bi bi-search"></i>
              <input
                className="px-2  rounded-3xl bg-purple2 "
                type="text"
                value="جستجو"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col">
        <div className="bg-black h-[70vh] flex flex-col justify-center items-center">
          <div className="overflow-hidden w-full bg-red-200">
            <img className="w-full h-full" src={fartak} alt="" />
          </div>
          <div className="w-2/3 p-4 gap-3 mx-auto flex  text-white  justify-center items-start">
            <div>
              <h1 className="text-2xl text-nowrap  ml-8 border-b-2 border-yellow-300">
                درباره ما:
              </h1>{" "}
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p className="text-gray-500 text-sm">
                لورم ایپسوم متن سا��تگی با تولید سادگی نامفهوم ا�� ��نعت ��اپ و
                با لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد.
              </p>
              <h5 className="text-yellow-200">{">"} بیشتر بخوانید</h5>
            </div>
            <div>
              {" "}
              <img src="https://placehold.co/400" alt="" />
            </div>
          </div>
        </div>
        {/* UNI */}
        <div className="bg-slate-100  flex justify-center ">
          <div className="w-3/4 py-8  flex flex-col justify-start gap-3 items-start">
            <h1 className="border-b-4 border-yellow-400 p-2">دانشگاه ها :</h1>
            <div className="flex justify-center items-center gap-4">
              <div>
                <img src={logo1} alt="" />
              </div>
              <div>
                <img src={logo2} alt="" />
              </div>
              <div>
                <img src={logo3} alt="" />
              </div>
              <div>
                <img src={logo4} alt="" />
              </div>
              <div>
                <img src={logo1} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* services */}
        <div className=" flex justify-center ">
          <div className="w-3/4 flex flex-col gap-3 items-start py-4">
            <div>
              <h1 className="border-b-4 p-2 border-yellow-400">خدمات ما :</h1>
            </div>
            <div className="flex w-full justify-center items-center gap-x-4">
              <div className=" flex px-8 gap-8">
                <div className="bg-purple2 p-10  w-72 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <img src="https://placehold.co/100" alt="" />
                  <h1 className="text-white text-2xl">بورس تحصیلی</h1>
                  <p className="text-sm">ثبت درخواست و پیگیری مراحل بورس</p>
                </div>
                <div className="bg-purple2 p-10  w-72 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <img src="https://placehold.co/100" alt="" />
                  <h1 className="text-white text-2xl">بورس تحصیلی</h1>
                  <p className="text-sm">ثبت درخواست و پیگیری مراحل بورس</p>
                </div>
                <div className="bg-purple2 p-10  w-72 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <img src="https://placehold.co/100" alt="" />
                  <h1 className="text-white text-2xl">بورس تحصیلی</h1>
                  <p className="text-sm">ثبت درخواست و پیگیری مراحل بورس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog */}
        <div className="h-[80vh] bg-slate-200 mt-4 ">
          <div className="flex justify-center gap-x-4 mx-auto  h-full w-3/4 p-8 ">
            {/* -------------------- */}
            {/* Slider Bootstrap */}
            <div className=" flex-1 px-10 py-4 rounded-lg bg-purple2 h-full overflow-hidden">
              <h1 className="text-xl font-bold text-white shadow-sm  border-b-2 border-yellow-300 w-fit my-2">
                پرونده های موفق
              </h1>
              <div
                id="carouselExampleIndicators"
                className="carousel slide min-h-96 "
              >
                <div className="carousel-indicators ">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                    <div className="flex justify-center items-center">
                      <div
                        className=" w-3/4
                      "
                      >
                        <h1 className="text-black font-bold text-lg">
                          کیانا طبسی
                        </h1>
                        <p className="text-sm text-white my-2">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                        <p className="text-sm text-white my-2">
                          {" "}
                          در این صورت می توان امید داشت که تمام و دشواری موجود
                          در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                          مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                          قرار گیرد.
                        </p>
                      </div>
                      <div className="mx-4">
                        <img src={logo2} className="d-block" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* ---------Section------- */}
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative w-80 overflow-hidden rounded-lg h-full  bg-purple3">
                <div className="absolute bottom-0 flex justify-start items-center w-full h-14 bg-purple3 opacity-90 text-white px-2">
                  ویزای تحصیلی
                </div>
                <img
                  src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?t=st=1728151896~exp=1728155496~hmac=bdb52b65f16f93649a59cff0723ca687d75b8fabb0a05479edca030d8c143cbd&w=740"
                  alt=""
                />
              </div>
              <div className="relative w-80 overflow-hidden rounded-lg h-full  bg-purple3">
                <div className="absolute bottom-0 flex justify-start items-center w-full h-14 bg-purple3 opacity-90 text-white px-2">
                  آفر ویژه فرتاک{" "}
                </div>
                <img
                  src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?t=st=1728151896~exp=1728155496~hmac=bdb52b65f16f93649a59cff0723ca687d75b8fabb0a05479edca030d8c143cbd&w=740"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] ">
          <div className=" w-4/5 h-full mx-auto p-4">
            <h1 className="border-b-2 border-yellow-300 w-fit text-xl font-bold">
              گزیده مقالات :{" "}
            </h1>
            <div className="flex w-full justify-center items-center gap-x-4 mt-6">
              <div className=" flex px-8 gap-8">
                {/* carts : */}
                <div className="bg-slate-300  w-80 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <div className="w-full">
                    <img className="rounded-t-lg w-full" src={uni1} alt="" />
                  </div>
                  <div className="px-8 py-4  flex flex-col justify-start items-start gap-2">
                    <h1 className="font-bold text-2xl">{">"} دانشگاه آلبرتا</h1>
                    <p className="text-sm text-gray-400">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون
                    </p>
                  </div>
                </div>
                <div className="bg-slate-300  w-80 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <div className="w-full">
                    <img className="rounded-t-lg w-full" src={uni1} alt="" />
                  </div>
                  <div className="px-8 py-4  flex flex-col justify-start items-start gap-2">
                    <h1 className="font-bold text-2xl">{">"} دانشگاه آلبرتا</h1>
                    <p className="text-sm text-gray-400">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون
                    </p>
                  </div>
                </div>
                <div className="bg-slate-300  w-80 rounded-lg flex gap-1 flex-col justify-center items-center ">
                  <div className="w-full">
                    <img className="rounded-t-lg w-full" src={uni1} alt="" />
                  </div>
                  <div className="px-8 py-4  flex flex-col justify-start items-start gap-2">
                    <h1 className="font-bold text-2xl">{">"} دانشگاه آلبرتا</h1>
                    <p className="text-sm text-gray-400">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[70vh] flex justify-center gap-3 w-4/5 mx-auto ">
          <div className="flex flex-col gap-2 ">
            <h1 className="border-b-2 border-green-400 text-2xl font-bold w-fit">
              {" "}
              ویدئو ها :{" "}
            </h1>
            <div
              id="carouselExampleIndicators2"
              className="carousel slide   min-h-fit "
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active ">
                  <div className="flex justify-center items-center">
                    <img src={youtube} className="w-full" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flex justify-center items-center">
                    <img src={youtube} className="w-full" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flex justify-center items-center">
                    <img src={youtube} className="w-full" alt="" />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="border-b-2 border-green-400 text-2xl font-bold w-fit">
              {" "}
              تصاویر :{" "}
            </h1>
            <div
              id="carouselExampleIndicators3"
              className="carousel slide  bg-red-700 min-h-[50vh] max-h-[50vh]"
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active ">
                  <div className="w-full max-h-[50vh] flex justify-center items-center">
                    <img src={teacher} className="object-contain" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="w-full max-h-[50vh] flex justify-center items-center">
                    <img src={teacher} className="object-contain" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="w-full max-h-[50vh] flex justify-center items-center">
                    <img src={teacher} className="object-contain" alt="" />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="h-[50vh] p-20 bg-black flex justify-between items-start text-white">
          <div className="flex flex-col gap-2 w-36 justify-center items-center">
            <img src={LogoFartak} alt="" />
            <p className="text-xs">مشهد - ملک اباد - خیابان بزرگمهر جنوبی</p>
            <div className="flex justify-center items-center gap-4">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-end w-44">
            <img src={enamad} className="w-full" alt="" />
            <p className="text-xs">
              {" "}
              <i className="bi bi-telephone-fill mx-2"></i>تلفن :{" "}
              <span>37600-05154607</span>
            </p>
            <p className="text-xs">
              {" "}
              <i className="bi bi-whatsapp mx-2"></i> واتساپ :{" "}
              <span>09103158201</span>
            </p>
            <h6 className="text-xs">info@studyadvisor.ir</h6>
          </div>

          <div>
            <ul className="flex flex-col gap-3 w-44">
              <li>{">"} مشاوره تحصیلی </li>
              <li>{">"} پذیرش تحصیلی کانادا </li>
              <li>{">"} ویزای تحصیلی کانادا </li>
              <li>{">"} ویزای تحصیلی ایتالیا </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 w-44">
              <div className="relative">
                <i className="bi bi-search absolute right-2 bottom-0 text-black"></i>
                <input
                  type="text"
                  className="pr-7 bg-purple1 rounded-xl"
                  placeholder="جستجو"
                />
              </div>
              <li>{">"} وقت سفارت امریکا </li>
              <li>{">"} پیکاپ ویزا </li>
              <li>{">"} نوت آفیسر </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
