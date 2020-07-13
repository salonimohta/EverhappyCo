const readXlsxFile = require('read-excel-file/node');

var productCategory=new Map();
var products=new Map();
var productInfo=new Map();

function readFile(){
    let count=1;
    readXlsxFile('./src/everhappy-products.xlsx').then((rows)=>{
        rows.forEach(row=>{
            try{
                console.log(typeof(row[0]))
                /*var index=(row[0]).split('.');
                if (productCategory.has(index[0])){
                    let productList=products.get(productCategory.get(index[0]));
                    productList.push(count);
                    products.set(productCategory.get(index[0]),productList);
                    productInfo.set(count,{name:row[2],image:row[3],description:row[4]});
                }
                else{
                    productCategory.set(index[0],row[1]);
                    let productList=new Array();
                    productList.push(count);
                    products.set(row[1],productList);
                    productInfo.set(count,{name:row[2],image:row[3],description:row[4]});
                }
                count++;*/
            }
            catch(error){
                console.log(error);
            }
        })
    }).catch(e=>{console.error(e)})
}

readFile()