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
            <div className="flex gap-2 p-2 bg-purple1 text-white">
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
        <div className="h-[80vh] bg-slate-200">next section</div>
        <div className="h-screen">next section</div>
      </main>
    </div>
  );
}

export default App;
