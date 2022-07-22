import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from './Footer'
    //const [num, setnum] = useState(0)
    const [allMovies, setallMovies] = useState([])
    const [error, seterror] = useState("")
    const url="https://imdb-api.com/en/API/MostPopularMovies/k_lv17lnyd"
    // "https://imdb-api.com/en/API/FullCast/k_lv17lnyd/tt1375666"
    // "https://imdb-api.com/en/API/Top250Movies/k_d6a0lkoi"
    // "http://www.omdbapi.com/?i=tt3896198&apikey=c7e3c7b8"
    // "https://imdb-api.com/en/API/Top250Movies/k_lv17lnyd"
    const [isloading, setisloading] = useState(true)
    
    useEffect(()=>{
        console.log("yoyoyo")
        makeRequest()
    },[])
    
    const makeRequest=()=>{
        axios.get(url).then((res)=>{
            if (res.status===200) {
                
           
            console.log(res.data)
            setallMovies(res.data.items) 
            setisloading(false)
                
        }
            else{
                console.log("error ocurred")
            }
        }).catch((err)=>{
            seterror(err)
        })

    }

const Featured = () => {
  return (
   <>
   
   </>
  )
}

export default Featured