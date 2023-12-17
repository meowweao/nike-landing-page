
const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-5 font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red text-white-400">
        {label}

        <img src={iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button