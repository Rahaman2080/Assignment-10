import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Detail from "./Detail";


const ProductDetails = () => {
    const [datas, setDatas] = useState([]);
    const [productDetail, setProductDetail] = useState({});

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setDatas(data));
       });

    const { id } = useParams()

       useEffect(()=>{
        const findDetails = datas?.find( detail => detail._id == id);
        setProductDetail(findDetails);
       },[id, datas]);


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl md:text-4xl font-bold text-center my-6">Product details:</h1>
            <div className="max-w-3xl mx-auto m-6">
                <Detail detail={productDetail}></Detail>
            </div>
        </div>
    );
};

export default ProductDetails;