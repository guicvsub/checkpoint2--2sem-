function Form () {



    return (
      <>
      <form class="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6">contato</h2>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
      Name:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="digite seu nome"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
      Email:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Digite seu email"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="feedback">
      mensagem:
    </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="digite sua mensagem aqui"></textarea>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Enviar
  </button>
</form>
    
        
    
      </>
    )
  }
  
  export default Form