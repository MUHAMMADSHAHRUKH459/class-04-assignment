import { headers } from "next/headers";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="text-grey-600 body-font">
        <div className="w-full m-auto flex h-16 items-center justify-between md:h-20 bg-[#044e83] !max-w-full">
          <img
            src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
            alt="g logo"
            className="w-20 h-20 rounded-full"
          />
          <h1 className="text-shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <div className="hidden items-center gap-5 text-[#faf9f6] sm:flex lg:gap-10">
            <a href="">
              <div className="menu_btns capitalize">Home</div>
            </a>
            <a href="">
              <div className="menu_btns capitalize">Apply</div>
            </a>
            <a href="">
              <div className="menu_btns capitalize">Jobs</div>
            </a>
            <a href="">
              <div className="menu_btns capitalize">Results</div>
            </a>
            <a href="">
              <div className="menu_btns capitalize mr-4">Course</div> {/* Add margin-right */}
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-8 p-4">
  {/* First row with 3 boxes */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
    <div className="bg-yellow-600 text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Card 1</h2>
      <p>This is my Card 1.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
    <div className="bg-blue-600 text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Card 2</h2>
      <p>This is my Card 2.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
    <div className="bg-red-600 text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Card 3</h2>
      <p>This is my Card 3.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-6">
    <div className="bg-orange-600 text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Card 1</h2>
      <p>This is my Card 1.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
    <div className="bg-purple-600 text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Card 2</h2>
      <p>This is my Card 2.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>
</div>
<footer className="bg-gray-800 text-white py-4 mt-8">
  <div className="container mx-auto text-center">
    <a href="https://www.linkedin.com/in/shahrukh-javed459/">Write by Shahrukh Javed</a>
  </div>
</footer>
    </>
  );
}
