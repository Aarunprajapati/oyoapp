import Image from "next/image"

const Block = ({title, text,svg}) => {
  return (
    <div className="flex border-r-2 border-gray-300 justify-between align-items-center w-50 h-full px-10">
        <div className=" flex align-items-center mt-1 pr-2 mr-2">
            <Image src={svg} width={200} height={200} alt="blockimage" className="w-6 h-8  rounded-full"/>
        </div>
      <div>
        <h3 className=" font-semibold ">{title}</h3>
        <p className="text-xs line-clamp-1 text-gray-500">{text}</p>
      </div>
    </div>
  )
}

export default Block
