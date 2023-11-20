

const Header2 = () => {
    const list = [
        {
            name:'Banglore'
        },
        {
            name:'Chennai'
        },
        {
            name:'Delhi'
        },
        {
            name:'Gurgaon'
        },
        {
            name:'Hyderabad'
        },
        {
            name:'Kolkata'
        },
        {
            name:'Mumbai'
        },
        {
            name:'Noida'
        },
        {
            name:'Pune'
        },
        {
            name:'All Cities'
        },
    ]
  return (
    <div className="flex items-center pr-14 pl-24 justify-between h-10  bg-gray-100 text-gray-600">
      {
        list.map((e)=>{
            return(
                <span key={e.name}>{e.name}</span>
            )
        })
      }
    </div>
  )
}

export default Header2
