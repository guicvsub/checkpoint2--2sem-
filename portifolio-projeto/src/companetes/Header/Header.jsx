import logo  from '../../assets/imgs/corinthians-1.svg';
function Header(){



    return (
      <>
      <div class="bg-gradient-to-r from-blue-500 to-green-500 flex flex-col h-screen">
    <nav class="bg-white py-6 px-8 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-gray-800">equipe timao</a>
        <ul class="flex space-x-6">
            <li><a href="#" class="text-gray-800">Home</a></li>
            <li><a href="#" class="text-gray-800">About</a></li>
            <li><a href="#" class="text-gray-800">Services</a></li>
            <li><a href="#" class="text-gray-800">Contact</a></li>
        </ul>
    </nav>
    <header class="flex-grow flex flex-col justify-center items-center px-8">
        <h1 class="text-5xl font-bold text-white text-center mb-8">Welcome to Brand Name</h1>
        <p class="text-white text-lg text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis lobortis sapien, eu tincidunt metus semper eget. Sed at malesuada arcu. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#"
            class="text-lg bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg font-bold shadow-md =">Get
            started
        </a>
    </header>
</div>
      

      </>
    )
  }
  
  export default Header
  