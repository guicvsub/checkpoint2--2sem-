import Footer from "../Footer/Fotter"
import Header from "../Header/Header"

function Form () {



    return (
   
      <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_2" className="modal">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">close</button>
  </form>
</dialog>
        <Header/>
      <form class="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6">contato</h2>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
      Name:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-900" id="name" type="text" placeholder="digite seu nome" required/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
      Email:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-900 " id="email" type="email" placeholder="Digite seu email" required/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="feedback">
      mensagem:
    </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-900" id="feedback" rows="5" placeholder="digite sua mensagem aqui" required></textarea>
    </div>
    <button 
  class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center " 
  type="submit"
  onClick={() => document.getElementById('my_modal_2').showModal()}
  
>
  Enviar
</button>
  
</form>
    <Footer/>
        
    
      </>
    )
  }
  
  export default Form