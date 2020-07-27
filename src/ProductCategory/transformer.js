import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Transformer extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Tranformer Materials</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://tiimg.tistatic.com/fp/2/005/804/electrical-insulating-paper-173.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Insulating_Paper_Tape">Insulating Paper/ Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/VP/NR/LU/SELLER-31058993/leatheroid-insulation-kraft-paper-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Latheroid_Paper">Latheroid Paper</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/AM/NT/MY-20630537/brass-lt-stud-fittings-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Aluminium_Stud">Aluminium Stud (Lt)</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DU/SK/QQ/SELLER-48125/brass-threaded-stud-set-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Brass_Stud">Brass Stud (Ht)</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
                
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/JL/PU/SE/SELLER-49834376/transformers-arcing-horn-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Clamp_Gutka_Arching_Horn">Clamp/Gutka/Arching Horn</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/OX/MJ/MY-37483139/aluminium-member-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Aluminium_Member">Aluminium Member</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/SV/RN/MY-988749/insulators-250x250.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Insulator">Insulator</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/OO/CI/MY-1965691/transformer-application-electrical-insulating-crepe-paper-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Crepe_Paper_Tape">Crepe Paper Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DD/HW/IP/GLADMIN-5280455/eddp-1-250x250.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Epoxy_Diamond_Dotted_Paper">Epoxy Diamond Dotted Paper</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
                
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/GJ/IM/MY-6486970/silica-gel-500x500.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Silica_Gel_Breather">Silica Gel Breather</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://img2.exportersindia.com/product_images/bc-full/dir_2/40146/transformers-bushing-ht-lt_1396682.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Bushing">Bushing (Ht/ Lt)</Link>
                </div>
            <div class="productCardBox">
                    <img id="cardImg" src='https://2.imimg.com/data2/CX/DT/MY-1943018/transformer-oil-250x250.jpg' alt='' />
                    <Link to="/product/Tranformer_Materials-Transformer_Oil">Transformer Oil</Link>
                </div>
            </div>
            </div>
        )
    }
}

