export default () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen p-8 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-orange-400 text-4xl md:text-6xl font-semibold">¡Nos hemos mudado!</h1>
        <p className="text-xl md:text-2xl font-semibold">¡Hemos cambiado de nombre y por tanto de página web!</p>
      </div>
      <p className="font-semibold">Ven a nuestra nueva página web en:</p>
      <a href="https://www.icfesu.com" className="no-underline px-4 p-2 rounded bg-sky-200 font-semibold text-xl md:text-2xl">
        {"Ir a ICFES>U"}
      </a>
    </div>
  )
}