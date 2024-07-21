import React, { useState } from 'react'
import "./style.scss"
const BaiTap2State = () => {
    const [selectGlass, setSelectGlass] = useState("v1.png");
    const [name, setName] = useState("GUCCI G8850U");
    const [title, setTitle] = useState("Light pink square ");
    const arrGlasser =[
        {
            glass: "./../../public/glasses/v1.png",
            name:"GUCCI G8850U",
            title: "Light pink square ",
            selectGlass : "v1.png"
        },
        {
            glass: "./../../public/glasses/v2.png",
            name:"GUCCI G8759H",
            title: "Xấu",
            selectGlass : "v2.png"
        },
        {
            glass: "./../../public/glasses/v3.png",
            name:"DIOR D6700HQ",
            title: "Trên cả tuyệt vời",
            selectGlass : "v3.png"
        },
        {
            glass: "./../../public/glasses/v4.png",
            name:"DIOR D6005U",
            title: "ờ mây ding gút chóp",
            selectGlass : "v4.png"
        },
        {
            glass: "./../../public/glasses/v5.png",
            name:"PRADA P8750",
            title: "đẹp vô cùng tận ",
            selectGlass : "v5.png"
        },
        {
            glass: "./../../public/glasses/v6.png",
            name:"PRADA P9700",
            title: "Đẹp vãi chưởng",
            selectGlass : "v6.png"
        },
        {
            glass: "./../../public/glasses/v7.png",
            name:"FENDI F8750",
            title: "wowwwwwww ",
            selectGlass : "v7.png"
        },
        {
            glass: "./../../public/glasses/v8.png",
            name:"FENDI F8500",
            title: "Ohhh Myyy Goddd ",
            selectGlass : "v8.png"
        },
        {
            glass: "./../../public/glasses/v9.png", 
            name:"FENDI F4300",
            title: "Siuuuuuuuuu",
            selectGlass : "v9.png"
        }

    ]
  return (
    <div className='baitapstate'>
      <h2 className='text-5xl py-10 text-red-700 '>Try Glasses Onl</h2>
        <div className='flex content1 '>
            <div className=' model_left '> 
                <img className='img-model' src="./../../public/glasses/model.jpg" alt="" />
            </div>

            <div className=' model_right '>
                <img className='img-model' src="./../../public/glasses/model.jpg" alt="" />
                <div >
                    <img className='img-glass' src={`./../../public/glasses/${selectGlass}`} alt=""  width={160}/>
                    
                        <div className='title'>
                            <h5 className=' text-center'>{name}</h5>
                            <p className=' text-center'>{title} </p>
                        </div>
                    
                </div>
            </div>
    
        </div>

        <div className='p-8'>

            {arrGlasser.map((item, index) =>{
                return (
                <button  className='p-3'
                
                onClick={()=>{
                    setSelectGlass(item.selectGlass),
                    setName(item.name),
                    setTitle(item.title)
                }}
                >
                    <img  src={item.glass} alt="" width={200}/>
                </button>
                )
            })}
            
        </div>
    </div>
  )
}

export default BaiTap2State
