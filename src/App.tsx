import "./App.css";

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
            <img
              className="w-full h-full"
              src="/public/Fartak_Homepage1.png"
              alt=""
            />
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
                <img src="https://placehold.co/200" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/200" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/200" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/200" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/200" alt="" />
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
                        <img
                          src="https://placehold.co/200"
                          className="d-block"
                          alt="..."
                        />
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
          <div className="bg-red-600 w-4/5 h-full mx-auto p-4">
            <h1 className="border-b-2 border-yellow-300 w-fit text-xl font-bold">گزیده مقالات : </h1>
            <div className="flex gap-x-4"> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
        <div className="h-screen">next section</div>
      </main>
    </div>
  );
}

export default App;
